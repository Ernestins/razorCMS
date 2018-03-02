<?php

namespace Razilo\Controller\Api;

use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Container;

use Razilo\Model\User as UserModel;

/**
 * Razilo\Controllers\Index
 * Default controller
 */
class User
{
    private $container;
	private $renderer;
    private $pdo;

    public function __construct(Container $container)
    {
        $this->container = $container;
		$this->renderer = $container->get('RendererService');
        $this->authentication = $container->get("AuthenticationService");
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
        // $path = isset($args['path']) ? preg_replace('/[^a-zA-Z0-9_\-\/\.]/', '', $args['path']) : null;
		var_dump('boo!');
		exit;
    }

	/**
	 * index()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function update(Request $request, Response $response, $args)
    {
		$name = $request->getParsedBodyParam('name');
		$email_address = $request->getParsedBodyParam('email_address');
		$new_password = $request->getParsedBodyParam('new_password');
		$repeat_password = $request->getParsedBodyParam('repeat_password');

		$user_model = new UserModel($this->pdo);
		$user = $user_model->fetch($this->authentication->user->get('id'));
		if (!$user) $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not update your user account, user not found.']);
		if (!empty($new_password) && !empty($repeat_password) && $new_password != $repeat_password) $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'New password and repeat password do not match.']);

		$user->name = $name;
		$user->email_address = $email_address;
		if (!empty($new_password)) $user->password = $this->authentication->create_hash($new_password);
		if (!$user->save()) $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not update user account, error updating details.']);

		return $response->withJson([
			'status' => 'success',
			'message' => 'User updated successfully',
			'data' => [
				'name' => $user->name,
				'email_address' => $user->email_address,
				'last_logged_in' => (int) $user->last_logged_in * 1000,
				'access_level' => (int) $user->access_level
			]
		]);
    }
}
