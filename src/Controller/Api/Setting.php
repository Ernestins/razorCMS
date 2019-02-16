<?php

namespace Razilo\Controller\Api;

use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Container;

use Razilo\Model\Setting as SettingModel;

/**
 * Razilo\Controllers\Index
 * Default controller
 */
class Setting
{
    private $container;
	private $renderer;
	private $auth;
    private $pdo;

    public function __construct(Container $container)
    {
        $this->container = $container;
		$this->renderer = $container->get('RendererService');
		$this->auth = $container->get('AuthenticationService');
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
        $name = isset($args['name']) ? preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $args['name']) : null;
		if (!in_array($name, ['home_page'])) return $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not update setting, name is invalid.']);

		$value = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('value'));
		if (empty($value)) return $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not update setting, value is invalid.']);

		$setting_model = new SettingModel($this->pdo);
		$setting = $setting_model->where(['name' => $name])->fetch();
		$setting->value = $value;
		if (!$setting->save()) return $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not update setting.']);

		return $response->withJson(['status' => 'success', 'message' => "Setting updated.", 'data' => $setting->toArray()]);
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
        $name = isset($args['name']) ? preg_replace('/[^0-9]/', '', $args['name']) : null;

		$setting_model = new SettingModel($this->pdo);

		if (empty($id)) {
			// get all settings
			$settings = $setting_model->getSettings();
			if (empty($settings)) return $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not find settings.']);

			// grab settings we have permission to grab
			$output = [];
			foreach ($settings as $key => $value) $output[$key] = $value->toArray();

			return $response->withJson(['status' => 'success', 'data' => $output]);
		}

		// get specific setting
		$setting = $setting_model->getSetting($name);
		if (!$setting) return $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not find setting.']);

		return $response->withJson(['status' => 'success', 'data' => $setting->toArray()]);
    }
}
