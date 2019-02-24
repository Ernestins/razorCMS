<?php

namespace Razilo\Controller;

use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Container;

/**
 * Razilo\Controllers\Index
 * Default controller
 */
class Index
{
    private $container;
	private $renderer;
	private $authentication;
	private $auth;
    private $pdo;

    public function __construct(Container $container)
    {
        $this->container = $container;
		$this->renderer = $container->get('RendererService');
		$this->authentication = $container->get('AuthenticationService');
		$this->pdo = $container->get('PDOLayer');
    }

	/**
	 * index()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function index(Request $request, Response $response, $args)
    {
        $path = isset($args['path']) ? preg_replace('/[^a-zA-Z0-9_\-\/\.]/', '', $args['path']) : null;
		
		// no admin set? need to set this based on JWT
		$params = $request->getQueryParams();
		$admin = isset($params['admin']) || $path === 'login' ? true : false;

		// did we find page
		if (!$this->renderer->load($path)) return $this->renderer->render($response, '404.php', []);

		// render page
		return $this->renderer->render($response, 'index.php', ['path' => $path, 'admin' => $admin]);
    }

	/**
	 * index()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function notFound(Request $request, Response $response, $args)
    {
        // $path = isset($args['path']) ? preg_replace('/[^a-zA-Z0-9_\-\/\.]/', '', $args['path']) : null;
		var_dump('Not Found!');
		exit;
    }

	/**
	 * login()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function login(Request $request, Response $response, $args)
    {
		// get details
		$username = $request->getParsedBodyParam('username');
		$password = $request->getParsedBodyParam('password');
		$ip = $request->hasHeader('Client-IP') ? $request->getHeader('Client-IP')[0] : $request->getAttribute('ip_address');
		
		try{
			if (empty($username) || empty($password)) return $response->withStatus(401)->withJson(['status' => 'fail', 'message' => 'We could not log you in, please try again.']);
			
			$user = $this->authentication->login($username, $password, $ip);
			$jwtToken = $this->authentication->createToken($user);

			return $response->withHeader('Authorization', "Refresh {$jwtToken}")->withJson([
				'id' => $user->get('id'),
				'name' => $user->name,
				'email_address' => $user->email_address,
				'last_logged_in' => (int) $user->last_logged_in * 1000,
				'access_level' => (int) $user->access_level
			]);
		} catch(\Exception $e) {
			return $response->withStatus(401)->withJson(['status' => 'fail', 'message' => $e->getMessage()]);
		}
    }

	/**
	 * logout()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function ping(Request $request, Response $response, $args)
    {
		return $response->withJson(['status' => 'success']);
    }

	/**
	 * login()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function refresh(Request $request, Response $response, $args)
    {
		try{
			$jwtToken = $this->authentication->refreshToken($request);

			return $response->withHeader('Authorization', "Refresh {$jwtToken}")->withJson(['status' => 'success', 'message' => 'Token has been refreshed']);
		} catch(\Exception $e) {
			return $response->withStatus(401)->withJson(['status' => 'fail', 'message' => $e->getMessage()]);
		}
    }
}
