<?php

/**
 * Routes
 * Load all system routes from a single location
 */

// Base route
$this->group("/", function () {
   $this->get("", Razilo\Controller\Index::class.':index')->setArgument('access', 'public');
});
