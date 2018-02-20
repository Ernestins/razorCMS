<?php

namespace Razilo\Controller\Api;

use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Container;

use Razilo\Model\Page as PageModel;

/**
 * Razilo\Controllers\Index
 * Default controller
 */
class Page
{
    private $container;
	private $renderer;
    private $pdo;

    public function __construct(Container $container)
    {
        $this->container = $container;
		$this->renderer = $container->get('RendererService');
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
        $id = isset($args['id']) ? preg_replace('/[^0-9]/', '', $args['id']) : null;

		$page_model = new PageModel($this->pdo);
		$page = $page_model->fetch($id);
		if (!$page) return $response->withJson(['status' => 'fail', 'message' => 'Could not find page.']);

		return $response->withJson(['status' => 'success', 'data' => ['page' => $page->toArray()]]);
    }

	/**
	 * add()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function add(Request $request, Response $response, $args)
    {
		$page = new PageModel($this->pdo);
		$page->active = 0;
		$page->name = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('name'));
		$page->title = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('title'));
		$page->link = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('link'));
		$page->keywords = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('keywords'));
		$page->description = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('description'));
		$access_level = preg_replace('/[^0-9]/', '', $request->getParsedBodyParam('access_level'));
		$page->access_level = empty($access_level) ? 0 : $access_level;

		if (!$page->save()) return $response->withJson(['status' => 'fail', 'message' => 'Could not add page.']);

		return $response->withJson(['status' => 'success', 'message' => 'New page added.']);
    }

	/**
	 * add()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function copy(Request $request, Response $response, $args)
    {
		$page_model = new PageModel($this->pdo);
		$originalPage = $page_model->fetch(preg_replace('/[^0-9]/', '', $request->getParsedBodyParam('id')));
		if (!$originalPage) return $response->withJson(['status' => 'fail', 'message' => 'Could not find page to copy.']);

		$page = new PageModel($this->pdo);
		$page->active = 0;
		$page->theme = $originalPage->theme;
		$page->name = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('name'));
		$page->title = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('title'));
		$page->link = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('link'));
		$page->keywords = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('keywords'));
		$page->description = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('description'));
		$page->json_settings = $originalPage->json_settings;
		$access_level = preg_replace('/[^0-9]/', '', $request->getParsedBodyParam('access_level'));
		$page->access_level = empty($access_level) ? 0 : $access_level;

		if (!$page->save()) return $response->withJson(['status' => 'fail', 'message' => 'Could not copy page.']);

		return $response->withJson(['status' => 'success', 'message' => 'Page has been copied.']);
    }
}
