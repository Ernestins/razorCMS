<?php

/**
 * Routes
 * Load all system routes from a single location
 */

// API routes
$this->group("/api", function () {
	$this->group("/content", function () {
		$this->get("[/{id}]", Razilo\Controller\Api\Content::class.':get')->setArgument('access', 6);
		$this->put("[/{id}]", Razilo\Controller\Api\Content::class.':put')->setArgument('access', 6);
		$this->patch("/{id}", Razilo\Controller\Api\Content::class.':patch')->setArgument('access', 6);
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
		$this->get("[/{id}]", Razilo\Controller\Api\Page::class.':get')->setArgument('access', 6);
		$this->put("[/{id}]", Razilo\Controller\Api\Page::class.':put')->setArgument('access', 6);
		$this->patch("/{id}", Razilo\Controller\Api\Page::class.':patch')->setArgument('access', 6);
		$this->delete("/{id}", Razilo\Controller\Api\Page::class.':delete')->setArgument('access', 9);
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
		$this->post("/update", Razilo\Controller\Api\User::class.':update')->setArgument('access', 1);
		$this->get("", Razilo\Controller\Api\User::class.':index')->setArgument('access', 'public');
	});

	$this->post("/login", Razilo\Controller\Index::class.':login')->setArgument('access', 'public');
	$this->get("/refresh", Razilo\Controller\Index::class.':refresh')->setArgument('access', 'public');
	$this->get("/ping", Razilo\Controller\Index::class.':ping')->setArgument('access', 'restricted');
	$this->get("[{path:.*}]", Razilo\Controller\Index::class.':notFound')->setArgument('access', 'public');
});

// Base route
$this->group("/", function () {
	$this->get("[{path:.*}]", Razilo\Controller\Index::class.':index')->setArgument('access', 'public');
});
