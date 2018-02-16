<?php

namespace Razilo\Service;

use Slim\Container;;
use Slim\Http\Request;
use Firebase\JWT\JWT;

use Razilo\Model\User as UserModel;

class AuthenticationLoginException extends \Exception {}
class AuthenticationTokenMissingException extends \Exception {}
class AuthenticationAuthorizationHeaderMissingException extends \Exception {}
class AuthenticationIpAddressMismatch extends \Exception {}
class AuthenticationIpAddressMissing extends \Exception {}
class AuthenticationSessionIdMissing extends \Exception {}
class AuthenticationLogoutUser extends \Exception {}
class AuthenticationSessionIdMismatch extends \Exception {}
class AuthenticationUserNotFound extends \Exception {}
class AuthenticationEmailSendException extends \Exception {}
class AuthenticationEmailNotVerified extends \Exception {}
class AuthenticationLastLoggedIn extends \Exception {}
class RestrictionLimitExceeded extends \Exception {}
class RestrictionUserBanned extends \Exception {}

/**
 * Papi\Session\Authentication
 * Authentication service to handle middleware checks for auth as well as performing login and logout actions
 */

class Authentication
{
    private $container;
	private $session;
	private $pdo;
	public $session_id;
	public $payload;
	public $user;
	public $validationErrors;

    public function __construct(Container $container)
    {
        $this->container = $container;
		$this->pdo = $container->get('PDOLayer');
    }


	// /**
	//  * Validate user credentials
	//  *
	//  * @param Request $request
	//  * @return bool
	//  */
	// public function validateCredentials(Request $request) : bool
	// {
	// 	$this->validator->validate($request,[
	// 		'password' => [
	// 			'rules' => V::notEmpty(),
	// 			'messages' => [
	// 				'notEmpty' => 'Password cannot be empty',
	// 			]
	// 		],
	// 		'email' => V::email()
	// 	]);
    //
	// 	$this->validationErrors = $this->validator->getErrors();
    //
	// 	return $this->validator->isValid();
	// }

	/**
	 * Login user and return logged in user
	 *
	 * @param string $email
	 * @param string $pass
	 */
	public function login(string $username, string $password, string $ip)
	{
		$user_model = new UserModel($this->pdo);
		$user = $user_model->where(['email_address' => $username])->fetch();

		// check user
		if (!$user) throw new AuthenticationLoginException('Email or password is incorrect');
		if ($this->create_hash($password, substr($user->get('password'), 0, (strlen($user->get('password'))/2)), 'sha1') != $user->get('password')) throw new AuthenticationLoginException('Email or password is incorrect');

		$session_id = $this->createSessionId($user);
		$user->ip_address = $ip;
		$user->last_logged_in = time();
		$user->last_accessed = time();
		$user->save();

		return $user;
	}

	/**
	 * Create the JWT and store user specific stuff on it
	 *
	 * @param \Papi\Models\User $user
	 * @return string JWT token
	 */
	public function createToken($user) {
        return JWT::encode([
			'iss' => 'cms.razilo.net',
            'aud' => 'cms.razilo.net',
            'iat' => time(),
            'nbf' => time(),
            'exp' => time() + JWT_EXP,
        	'user_id' => $user->get('id'),
			'ip_address' => $user->get('ip_address'),
            'last_logged_in' => $user->get('last_logged_in'),
            'guid' => $user->get('guid')
		], JWT_KEY);
    }

	/**
	 * Manually deocde the token withoout any validation
	 *
	 * @param string $token
	 * @return object Object representation of JSON string
	 */
	public function decodeTokenWithoutValidation(string $token)
    {
        $tks = explode('.', $token);
        list($headb64, $bodyb64, $cryptob64) = $tks;
        $decodedPayload = JWT::jsonDecode(JWT::urlsafeB64Decode($bodyb64));
        return $decodedPayload;
    }

	/**
	 * Verify User
	 *
	 * @param Request $request
	 * @return Papi\Models\User
	 */
	public function verifyUser(Request $request)
	{
		// get token
		$authorization = $request->getHeader('Authorization');
		if (empty($authorization[0])) throw new AuthenticationTokenMissingException('Authentication token is missing');
		$token = trim(str_ireplace('bearer', '', $authorization[0]));
		if (empty($token)) throw new AuthenticationTokenMissingException('Authentication token is missing');

		JWT::$leeway = 5;
		$this->payload = JWT::decode($token, JWT_KEY, ['HS256']);


		$user_model = new UserModel($this->pdo);
		$this->user = $user_model->fetch($this->payload->user_id);


		if (!$this->user) throw new AuthenticationUserNotFound('User not found');
		if (!$this->user->ip_address) throw new AuthenticationIpAddressMissing('IP address missing');

		//if user has been logged in for than 30 days then log them out
		$lastLoggedInDate = new \DateTime(strtotime($this->user->last_logged_in));
		$currentDate = new \DateTime();
		if ($lastLoggedInDate->diff($currentDate)->days >= 30) throw new AuthenticationLastLoggedIn('User has been logged in for more than 30 days');

		//If the session stored in the db is not the same as the one in the jwt then there is an issue
		if ($this->payload->last_logged_in != $this->user->last_logged_in) throw new AuthenticationSessionIdMismatch('There is a mismatch with your session');

		//If the ip_address stored in the db is not the same as the one in the jwt then there is an issue
		$ip_address = $request->hasHeader('Client-IP') ? $request->getHeader('Client-IP')[0] : $request->getAttribute('ip_address');
		if ($ip_address != $this->payload->ip_address) throw new AuthenticationIpAddressMismatch('There is a mismatch with the session');

		return $this->user;
	}

	/**
	 * Function to create hashes
	 *
	 * @param string $inText
	 * @param string $saltHash
	 * @param string $mode
	 * @return string
	 */
	public function create_hash($inText, $saltHash=NULL, $mode='sha1') : string
	{
		// check if hash function available, else fallback to sha1 //
		$hashOK = false;
		if (function_exists('hash')) {
			$hashOK = true;
		}
		// hash the text //
		if($hashOK) {
			$textHash = hash($mode, $inText);
		}else{
			$textHash = sha1($inText);
		}
		// set where salt will appear in hash //
		$saltStart = strlen($inText);
		// if no salt given create random one //
		if($saltHash == NULL) {
			if($hashOK) {
				$saltHash = hash($mode, uniqid(rand(), true));
			} else {
				$saltHash = sha1(uniqid(rand(), true));
			}
		}
		// add salt into text hash at pass length position and hash it //
		if($saltStart > 0 && $saltStart < strlen($saltHash)) {
			$textHashStart = substr($textHash,0,$saltStart);
			$textHashEnd = substr($textHash,$saltStart,strlen($saltHash));
			if($hashOK) {
				$outHash = hash($mode, $textHashEnd.$saltHash.$textHashStart);
			} else {
				$outHash = sha1($textHashEnd.$saltHash.$textHashStart);
			}
		} elseif($saltStart > (strlen($saltHash)-1)) {
			if($hashOK) {
				$outHash = hash($mode, $textHash.$saltHash);
			} else {
				$outHash = sha1($textHash.$saltHash);
			}
		} else {
			if($hashOK) {
				$outHash = hash($mode, $saltHash.$textHash);
			} else {
				$outHash = sha1($saltHash.$textHash);
			}
		}
		// put salt at front of hash //
		$output = $saltHash.$outHash;
		return $output;
	}

	/**
	 * Create random string based on user
	 *
	 * @param User $user
	 * @return string
	 */
	public function createSessionId($user)
	{
		return uniqid($user->get('id').$user->get('email_address'));
	}

// 	/**
// 	 * Send email to user
// 	 *
// 	 * @param User $user
// 	 * @return void
// 	 */
// 	public function sendEmailVerificationLink(User $user) : void
// 	{
//         $link = WEB_ROOT.$this->container->get('router')->pathFor('verifyEmail',['email_code' => $user->email_token]);
//
// 		$this->mail->addAddress($user->email, $user->name.' '.$user->surname);
// 		$this->mail->Subject = 'Universal Textiles  - Account Verification';
// 		$this->mail->Body = <<<BODY
// <html>
// <head>
//     <title>Universal Textiles - Account Verification</title>
//     <style>
//         .body { color: #333333; font-family: Tahoma, arial; }
//         .body h1, .body h2, .body h3, .body p { color: #333333; font-family: Tahoma, arial; }
//         .body .heading { background-color: #2b3e50; color: #ffffff; text-align: center; padding: 50px 0px; }
//         .body .heading h1, .body .heading h2 { color: #ffffff; }
//         .body .link { text-align: center; }
//         .body .link a { display: inline-block; padding: 50px; background-color: #6c7a87; color: #fff; font-size: 16px; font-weight: bold; }
//     </style>
// </head>
// <body>
//     <div class="body">
//         <div class="heading">
//             <h1>Universal Textiles</h1>
//             <h2>Account Verification</h2>
//         </div>
//         <h3>Please Activate your Universal Textiles Account on Tough Guard Authenticator</h3>
//         <p>This email address has registered for a Universal Textiles Account on Tough Guard Authenticator. This is the central authentication system for all Universal Textiles systems.</p>
//         <p>If this was not you that did this, please ignore this email and the account will be removed in due course.</p>
//         <p>In order to login to your Universal Textiles service, you will first need to validate the account.</p>
//         <p>You can validate your account by using the following link, if you have trouble clicking this, try to copy and paste it into the URL address bar of your web browser.</p>
//         <div class="link">
//             <a href="{$link}">$link</a>
//         </div>
//         <p>Regards,</p>
//         <p>Universal Textiles Development Team</p>
//     </div>
// </body>
// </html>
// BODY;
// 		if(!$this->mail->send())
// 			throw new AuthenticationEmailSendException($this->mail->ErrorInfo);
//
// 	}

	// /**
	//  * This is for the restriction of logins. It will keep a record of who is banned and keep a count of login attempts
	//  *
	//  * @param [type] $email
	//  * @param [type] $ip
	//  * @return \Papi\Models\Restriction
	//  */
	// private function restrictUser($email,$ip) : \Papi\Models\Restriction
	// {
	// 	$string = $_SERVER['HTTP_USER_AGENT'].$email.$ip;
    //
	// 	$hash = hash('sha512',$string);
    //
	// 	$restriction = new Restriction($this->pdo);
	// 	$restriction = $restriction->where(['hash' => $hash])->fetchFirst();
    //
	// 	if($restriction && !$restriction->banned)
	// 	{
	// 		$updatedDateTime = new \DateTime($restriction->get('updated'));
	// 		$currentDateTime = new \DateTime();
	// 		$currentDiff = $updatedDateTime->diff($currentDateTime)->i;
    //
	// 		if($restriction->counter < 50 && $restriction->counter % 5 == 0 && $currentDiff < 10)
	// 		{
	// 			$timeLeft = 10 - $currentDiff;
	// 			throw new RestrictionLimitExceeded('Login attempts exceeded please wait ' . $timeLeft  . ' minutes');
	// 		}
    //
	// 		(int)$restriction->counter ++;
    //
	// 		if($restriction->counter >= 50)
	// 		{
	// 			$restriction->banned = 1;
	// 			$restriction->email = $email;
	// 			$restriction->save();
	// 			throw new RestrictionUserBanned('Contact IT Support');
	// 		}
    //
	// 		$restriction->save();
	// 	}
	// 	else if($restriction && $restriction->banned)
	// 	{
	// 		throw new RestrictionUserBanned('Contact IT Support');
	// 	}
	// 	else
	// 	{
	// 		$restriction = new Restriction($this->pdo);
	// 		$restriction->hash = $hash;
	// 		(int)$restriction->counter ++;
	// 		$restriction->save();
	// 	}
    //
	// 	return $restriction;
	// }

	// public function getBannedUsers()
	// {
	// 	$restrictions = new Restriction($this->pdo);
	// 	$restrictions = $restrictions->where(['banned'=>1])->fetchAll();
	// 	$users = new User($this->pdo);
	// 	$users = $users->fetchAll();
	// 	$bannedUsers = [];
    //
	// 	foreach ($restrictions as $restriction)
	// 	{
	// 		foreach ($users as $user)
	// 		{
	// 			if($restriction->email == $user->email)
	// 			{
	// 				$bannedUsers[] = array_merge($user->info(),['restrictionId'=>$restriction->get('id')]);
	// 			}
	// 		}
	// 	}
    //
	// 	return $bannedUsers;
	// }
}
