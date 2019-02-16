<?php

require_once("../bootstrap.php");

$application = new Razilo\Application();
$application->loadDependencies();
$application->loadRoutes();
$application->run();