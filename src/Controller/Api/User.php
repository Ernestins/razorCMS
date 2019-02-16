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
    public function patch(Request $request, Response $response, $args)
    {
        $id = isset($args['id']) ? preg_replace('/[^0-9]/', '', $args['id']) : null;

		$name = $request->getParsedBodyParam('name');
		$email_address = $request->getParsedBodyParam('email_address');
		$new_password = $request->getParsedBodyParam('new_password');
		$repeat_password = $request->getParsedBodyParam('repeat_password');

		// get the user
		$user_model = new UserModel($this->pdo);
		$user = $user_model->fetch($id);
		if (!$user) $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not update your user, user not found.']);
		if (!empty($new_password) && !empty($repeat_password) && $new_password != $repeat_password) $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'New password and repeat password do not match.']);
		if ($this->authentication->user->get('id') != $id && (int) $user->access_level >= (int) $this->authentication->user->access_level) return $response->withStatus(401)->withJson(['status' => 'fail', 'message' => 'Could not update user, permission denied.']);

		// make changes
		$user->name = $name;
		$user->email_address = $email_address;
		if (!empty($new_password)) $user->password = $this->authentication->create_hash($new_password);
		if (!$user->save()) return $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not update user, error updating details.']);

		return $response->withJson([
			'status' => 'success',
			'message' => 'User updated successfully',
			'data' => [
				'id' => $user->get('id'),
				'access_level' => (int) $user->access_level,
				'active' => $user->active,
				'email_address' => $user->email_address,
				'last_logged_in' => (int) $user->last_logged_in * 1000,
				'name' => $user->name,
				'ip_address' => $user->ip_address
			]
		]);
    }

	/**
	 * index()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function get(Request $request, Response $response, $args)
    {
        $id = isset($args['id']) ? preg_replace('/[^0-9]/', '', $args['id']) : null;

		$user_model = new UserModel($this->pdo);
		if (empty($id)) {
			// get all users that are you or less access than you
			$users = $user_model->select(['id', 'access_level', 'active', 'email_address', 'last_logged_in', 'name', 'ip_address'])->orderBy(['name' => 'ASC'])->fetchAll();
			if (empty($users)) return $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not find users.']);

			// grab users we have permission to grab
			$output = [];
			foreach ($users as $key => $value) {
				if ($value->get('id') != $this->authentication->user->get('id') && (int) $value->access_level >= (int) $this->authentication->user->access_level) continue;
				$output[$key] = $value->toArray();
			}

			return $response->withJson(['status' => 'success', 'data' => $output]);
		}

		// get specific user that is you or someone with less access than you
		$user = $user_model->select(['id', 'access_level', 'active', 'email_address', 'last_logged_in', 'name'])->fetch($id);
		if (!$user) return $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not find user.']);
		if ($this->authentication->user->get('id') != $id && (int) $user->access_level >= (int) $this->authentication->user->access_level) return $response->withStatus(401)->withJson(['status' => 'fail', 'message' => 'Could not get user, permission denied.']);

		return $response->withJson(['status' => 'success', 'data' => $user->toArray()]);
    }
}
