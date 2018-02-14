<?php

use Slim\Container;

use Razilo\Middleware\Authentication as AuthenticationMiddleware;

use Razilo\Service\Session as SessionService;
use Razilo\Service\Renderer as RendererService;
use Razilo\Service\Authentication as AuthenticationService;
use Razilo\Library\PDOLayer as PDOLayer;
use Razilo\Library\PDOLayerException as PDOLayerException;

/**
 * Dependencies
 * Load all system dependencies from a single location using slims DI container
 */

// Razilo\Middleware\Authentication
$this->container["AuthenticationMiddleware"] = function (Container $container) {
	return new AuthenticationMiddleware($container);
};

// Razilo\Service\Session
$this->container['SessionService'] = function (Container $container) {
	return new SessionService($container);
};

// Razilo\Service\Renderer
$this->container['RendererService'] = function (Container $container) {
    return new RendererService(APP_ROOT.'src/View/');
};

// Razilo\Service\Authentication
$this->container['AuthenticationService'] = function (Container $container) {
   return new AuthenticationService($container);
};

// Razilo\Library\PDOLayer
$this->container['PDOLayer'] = function (Container $container) {
	return new PDOLayer(SQL_DRIVER, SQL_PATH, SQL_HOST, SQL_SCHEMA, SQL_USERNAME, SQL_PASSWORD, SQL_CHARSET);
};
