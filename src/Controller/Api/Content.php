<?php

namespace Razilo\Controller\Api;

use Slim\Http\Request;
use Slim\Http\Response;
use Slim\Container;

use Razilo\Model\Content as ContentModel;
use Razilo\Model\PageContent as PageContentModel;

/**
 * Razilo\Controllers\Index
 * Default controller
 */
class Content
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
    public function get(Request $request, Response $response, $args)
    {
        $id = isset($args['id']) ? preg_replace('/[^0-9]/', '', $args['id']) : null;

		$content_model = new ContentModel($this->pdo);

		if (empty($id)) {
			$contents = $content_model->orderBy(['name' => 'ASC'])->fetchAll();
			if (!$contents) return $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not find pages.']);
			foreach ($contents as $key => $value) {
				$contents[$key] = $value->toArray();

				$page_content_model = new PageContentModel($this->pdo);
				$pages = $page_content_model->getUsedOn($value->get('id'));

				$contents[$key]['used_on_pages'] = [];
				foreach ($pages as $page) $contents[$key]['used_on_pages'][] = ['id' => $page->get('id'), 'name' => $page->name, 'title' => $page->title];
			}

			return $response->withJson(['status' => 'success', 'data' => $contents]);
		}

		$content = $content_model->fetch($id);
		if (!$content) return $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not find page.']);

		$page_content_model = new PageContentModel($this->pdo);
		$pages = $page_content_model->getUsedOn($value->get('id'));

		$content = $content->toArray();
		$content['used_on_pages'] = [];
		foreach ($pages as $page) $content['used_on_pages'][] = ['id' => $page->get('id'), 'name' => $page->name, 'title' => $page->title];

		return $response->withJson(['status' => 'success', 'data' => $content]);
    }

	/**
	 * add()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function put(Request $request, Response $response, $args)
    {
        $id = isset($args['id']) ? preg_replace('/[^0-9]/', '', $args['id']) : null;

		// // if we have an id on put, we will copy that resource and replace with any new values
		// if (!empty($id)) {
		// 	$content_model = new ContentModel($this->pdo);
		// 	$originalPage = $content_model->fetch($id);
		// 	if (!$originalPage) return $response->withStatus(400)->withJson(['status' => 'fail', 'message' => 'Could not find page to copy.']);
		// }
        //
		// $page = new ContentModel($this->pdo);
		// $page->active = 0;
		// if (!empty($originalPage)) $page->theme = $originalPage->theme;
		// $page->name = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('name'));
		// $page->title = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('title'));
		// $page->link = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('link'));
		// $page->keywords = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('keywords'));
		// $page->description = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('description'));
		// if (!empty($originalPage)) $page->json_settings = $originalPage->json_settings;
		// $access_level = preg_replace('/[^0-9]/', '', $request->getParsedBodyParam('access_level'));
		// $page->access_level = empty($access_level) ? 0 : $access_level;
        //
		// if (!$page->save()) return $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not add page.']);
        //
		// return $response->withJson(['status' => 'success', 'message' => 'New page added.', 'data' => $page->toArray()]);
    }

	/**
	 * add()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function patch(Request $request, Response $response, $args)
    {
        $id = isset($args['id']) ? preg_replace('/[^0-9]/', '', $args['id']) : null;

		// $content_model = new ContentModel($this->pdo);
		// $page = $content_model->fetch($id);
		// $page->name = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('name'));
		// $page->title = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('title'));
		// $page->link = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('link'));
		// $page->keywords = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('keywords'));
		// $page->description = preg_replace('/[\/\\\:\;\$\{\}\[\]\!]/', '', $request->getParsedBodyParam('description'));
		// $access_level = preg_replace('/[^0-9]/', '', $request->getParsedBodyParam('access_level'));
		// $page->access_level = empty($access_level) ? 0 : $access_level;
        //
		// if (!$page->save()) return $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not add page.']);
        //
		// return $response->withJson(['status' => 'success', 'message' => 'Page updated.', 'data' => $page->toArray()]);
    }

	/**
	 * add()
	 * Default method for default controller
	 * @param Request $request The PSR-7 message request coming into slim
	 * @param Response $response The PSR-7 message response going out of slim
	 * @param array $args Any arguments passed in from request
	 */
    public function delete(Request $request, Response $response, $args)
    {
        $id = isset($args['id']) ? preg_replace('/[^0-9]/', '', $args['id']) : null;

		$content_model = new ContentModel($this->pdo);
		$content = $content_model->fetch($id);

		// did we find the content?
		if (!$content) return $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not delete content, content does not exist.']);

		// now delete the content
		if (!$content->delete()) return $response->withStatus(500)->withJson(['status' => 'fail', 'message' => 'Could not delete content.']);

		// if we did delete content then try to tidy up
		$page_content_model = new PageContentModel($this->pdo);
		$page_content = $page_content_model->where(['content_id' => $content->get('id')])->fetchAll();
		foreach ($page_content as $pc) $pc->delete();

		return $response->withJson(['status' => 'success', 'message' => 'Content deleted.', 'data' => $content->toArray()]);
    }
}
