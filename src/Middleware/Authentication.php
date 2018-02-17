<?php

namespace Razilo\Middleware;

use Slim\Http\Response;
use Slim\Http\Request;
use Slim\Container;
use Razilo\Services\AuthenticationIpAddressMissing;
use Razilo\Services\AuthenticationSessionIdMissing;
use Razilo\Services\AuthenticationIpAddressMismatch;
use Razilo\Services\AuthenticationSessionIdMismatch;
use Razilo\Services\AuthenticationUserNotFound;

/**
 * Papi\Middleware\Authentication
 * Authentication middleware: Checks user authentication to access the resource using access args on routes
 */
final class Authentication
{
    private $container;
	private $authentication;

    public function __construct(Container $container)
    {
        $this->container = $container;
        $this->authentication = $container->get("AuthenticationService");
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

        $whitelist = explode(',',getenv('NETWORK_WHITELIST'));
        $server_ip = isset($_SERVER['HTTP_X_FORWARDED_FOR']) ? $_SERVER['HTTP_X_FORWARDED_FOR'] : $_SERVER['REMOTE_ADDR'];
        if (MODE != 'development' && !in_array($server_ip, $whitelist)) return $response->withStatus(403)->withJson(['status' => 'fail', 'message' => 'Access Denied - This service is not allowed access to ToughGuard']);

		// do we have access for route
        if ($request->getAttribute('route')) {
            $access = $request->getAttribute('route')->getArgument('access');
			$access = empty($access) ? 'restricted' : strtolower($access);

			// only allow access to public routes if not logged in
			if ($access === 'public') return $next($request, $response);

            try{
                //verify user based on the jwt token supplied
                $user = $this->authentication->verifyUser($request);
				
                // if restricted and logged in then carry on, else do basic route method check for route against perms PUT (c) - GET, POST (r) - PATCH (u) - DELETE (d)
                if ($user && $access === 'restricted') return $next($request, $response);
                elseif ($user && (int) $user->access_level >= (int) $access) return $next($request, $response);
            } catch (\Firebase\JWT\ExpiredException $e) {
                return $response->withStatus(401)->withJson(['status' => 'expired', 'message' => $e->getMessage(), 'data' => ['refreshUrl' => 'refresh']]);
            } catch (\Exception $e) {
                return $response->withStatus(401)->withJson(['status' => 'fail', 'message' => $e->getMessage()]);
            }

			// no access
			return $response->withStatus(401)->withJson(['status' => 'fail', 'message' => 'You do not have permission to access this resource']);
		}

        // is this temp php ui?
        $path = explode('/', $_SERVER['REQUEST_URI'][0] === '/' ? substr($_SERVER['REQUEST_URI'], 1) : $_SERVER['REQUEST_URI']);
        if (reset($path) === 'ui') return $this->renderer->render($response->withStatus(404), '404.php');

		// api 404
		return $response->withStatus(404)->withJson(['status' => 'fail', 'message' => 'Could not find the resource you where looking for']);
    }
}
