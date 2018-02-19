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
		if (!$user) $response->withJson(['status' => 'fail', 'message' => 'Could not find page.']);

		return $response->withJson(['status' => 'success', 'data' => ['page' => $page->toArray()]]);
    }
}
