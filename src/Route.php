<?php

/**
 * Routes
 * Load all system routes from a single location
 */

// API routes
$this->group("/api", function () {
	$this->group("/content", function () {
   		$this->get("/restricted", Razilo\Controller\Api\Content::class.':restricted')->setArgument('access', 'restricted');
   		$this->get("", Razilo\Controller\Api\Content::class.':index')->setArgument('access', 'public');
	});

	$this->group("/ext", function () {
		$this->get("", Razilo\Controller\Api\Ext::class.':index')->setArgument('access', 'public');
	});

	$this->group("/extension", function () {
		$this->get("", Razilo\Controller\Api\Extension::class.':index')->setArgument('access', 'public');
	});

	$this->group("/package", function () {
		$this->get("", Razilo\Controller\Api\Package::class.':index')->setArgument('access', 'public');
	});

	$this->group("/repository", function () {
		$this->get("", Razilo\Controller\Api\Repository::class.':index')->setArgument('access', 'public');
	});

	$this->group("/menu", function () {
		$this->get("", Razilo\Controller\Api\Menu::class.':index')->setArgument('access', 'public');
	});

	$this->group("/page", function () {
		$this->get("", Razilo\Controller\Api\Page::class.':index')->setArgument('access', 'public');
	});

	$this->group("/setting", function () {
		$this->get("", Razilo\Controller\Api\Setting::class.':index')->setArgument('access', 'public');
	});

	$this->group("/site", function () {
		$this->get("", Razilo\Controller\Api\Site::class.':index')->setArgument('access', 'public');
	});

	$this->group("/system", function () {
		$this->get("", Razilo\Controller\Api\System::class.':index')->setArgument('access', 'public');
	});

	$this->group("/tools", function () {
		$this->get("", Razilo\Controller\Api\Tools::class.':index')->setArgument('access', 'public');
	});

	$this->group("/user", function () {
		$this->get("/test", Razilo\Controller\Api\User::class.':test')->setArgument('access', 'restricted');
		$this->get("", Razilo\Controller\Api\User::class.':index')->setArgument('access', 'public');
	});

	$this->post("/login", Razilo\Controller\Index::class.':login')->setArgument('access', 'public');
	$this->get("/refresh", Razilo\Controller\Index::class.':refresh')->setArgument('access', 'public');
	$this->get("[{path:.*}]", Razilo\Controller\Index::class.':notFound')->setArgument('access', 'public');
});

// Base route
$this->group("/", function () {
	$this->get("[{path:.*}]", Razilo\Controller\Index::class.':index')->setArgument('access', 'public');
});
