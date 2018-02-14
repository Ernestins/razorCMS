<?php

namespace Razilo\Middleware;

use Slim\Http\Response;
use Slim\Http\Request;
use Slim\Container;

/**
 * Razilo\Middleware\Authentication
 * Authentication middleware: Checks user authentication to access the resource using access args on routes
 */
final class Authentication
{
    /** @var Slim\Container slims DI container */
    private $container;
	/** @var PhpRenderer view renderer for basic php template files */
	private $renderer;
	/** @var Razilo\Services\Authentication for handling session based authentication */
	private $auth;

    public function __construct(Container $container)
    {
        $this->container = $container;
        $this->auth = $container->get("AuthenticationService");
		$this->renderer = $container->get('RendererService');
    }

    public function __invoke(Request $request, Response $response, callable $next)
    {
        $uri = $request->getUri();
        $path = $uri->getPath();

		// permanently redirect trailing slashes
        if ($path != '/' && substr($path, -1) == '/') {
            $uri = $uri->withPath(substr($path, 0, -1));
            return $response->withRedirect((string) $uri, 301);
        }

		// do we have access for route
        if ($request->getAttribute('route')) {
            $access = $request->getAttribute('route')->getArgument('access');
			$access = empty($access) ? 'restricted' : strtolower($access);

			// only allow access to public routes if not logged in
			if ($access == 'public' || $this->auth->isLoggedIn()) return $next($request, $response);

			// no access
			return $this->renderer->render($response->withStatus(401), '401.php');
		}

		// route not found
		return $this->renderer->render($response->withStatus(404), '404.php');
    }
}
