<?php

namespace Razilo\Service;

use Slim\Container;;
use Slim\Http\Request;
use Firebase\JWT\JWT;

use Razilo\Model\User as UserModel;

class AuthenticationLoginException extends \Exception {}
class AuthenticationTokenMissingException extends \Exception {}
class AuthenticationTokenIdleExceededException extends \Exception {}
class AuthenticationTokenInvalidExceededException extends \Exception {}
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

	public function getToken(Request $request) {
		// get token
		$authorization = $request->getHeader('Authorization');
		if (empty($authorization[0])) throw new AuthenticationTokenMissingException('Authentication token is missing');
		$token = trim(str_ireplace('bearer', '', $authorization[0]));
		if (empty($token)) throw new AuthenticationTokenMissingException('Authentication token is missing');
		return $token;
	}

	/**
	 * Verify User
	 *
	 * @param Request $request
	 * @return Papi\Models\User
	 */
	public function verifyUser(Request $request)
	{
		JWT::$leeway = 5;
		$this->payload = JWT::decode($this->getToken($request), JWT_KEY, ['HS256']);

		$user_model = new UserModel($this->pdo);
		$this->user = $user_model->fetch($this->payload->user_id);

		if (!$this->user) throw new AuthenticationUserNotFound('User not found');
		if (!$this->user->ip_address) throw new AuthenticationIpAddressMissing('IP address missing');

		//if user has been logged in for than 30 days then log them out
		$lastLoggedInDate = new \DateTime(strtotime($this->user->last_logged_in));
		$currentDate = new \DateTime();
		if ($lastLoggedInDate->diff($currentDate)->days >= 30) throw new AuthenticationLastLoggedIn('User has been logged in for more than 30 days');

		//If the session stored in the db is not the same as the one in the jwt then there is an issue
		if ($this->payload->last_logged_in != $this->user->last_logged_in) throw new AuthenticationSessionIdMismatch('There is a mismatch with your session '.$this->payload->last_logged_in.'-'.$this->user->last_logged_in);

		//If the ip_address stored in the db is not the same as the one in the jwt then there is an issue
		$ip_address = $request->hasHeader('Client-IP') ? $request->getHeader('Client-IP')[0] : $request->getAttribute('ip_address');
		if ($ip_address != $this->payload->ip_address) throw new AuthenticationIpAddressMismatch('There is a mismatch with the session');

		return $this->user;
	}

	/**
	 * refresh()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function refreshToken(Request $request)
    {
		$token = $this->getToken($request);
		$payload = $this->decodeTokenWithoutValidation($token);

		//if the user has been idle for 3 days then kick them out, The "iat" (issued at) claim identifies the time at which the JWT was issued
		if (time() > (int) $payload->iat + JWT_REFRESH_EXP) throw new AuthenticationTokenIdleExceededException('Exceeded idle time');

		$user_model = new UserModel($this->pdo);
		$user = $user_model->where(['id' => $payload->user_id, 'last_logged_in' => $payload->last_logged_in])->fetch();
		if (!$user) throw new AuthenticationTokenInvalidExceededException('Token is invalid');

		return $this->createToken($user);
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
}
