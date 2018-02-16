<?php

namespace Razilo;

use Slim\Container;
use Slim\App;

/**
 * Razilo\Application
 * Main application class, extending slim app to add dependency and route loaders
 * @extends Slim\App
 */
class Application extends App
{
	const DEPENDENCIES = APP_ROOT.'src/Dependency.php';
	const ROUTES = APP_ROOT.'src/Route.php';
	protected $container;
	protected $session;

    public function __construct()
    {
		$this->container = new Container();
		$this->container->get('settings')['determineRouteBeforeAppMiddleware'] = true;
		$this->container->get('settings')['displayErrorDetails'] = MODE == 'development';
		parent::__construct($this->container);
	}

	/**
	 * loadDependencies()
	 * Loads application dependencies into slims DI container from single file
	 */
	public function loadDependencies()
	{
		if (file_exists(self::DEPENDENCIES)) require(self::DEPENDENCIES);
	}

	/**
	 * loadRoutes()
	 * Loads application routes into slim from single file
	 */
	public function loadRoutes()
	{
		if (file_exists(self::ROUTES)) require(self::ROUTES);
	}

	/**
	 * run()
	 * Starts the application
	 */
	public function run($silent = false)
	{
		// create session
		$this->session = $this->container->get('SessionService');
		$this->session->start();

		// middleware
		$this->add($this->container->get("AuthenticationMiddleware"));

		// run application
		parent::run($silent);
	}
}
