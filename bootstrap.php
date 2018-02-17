<?php

/**
 * razorCMS FBCMS
 *
 * Copywrite 2014 to Present Day - Paul Smith (aka smiffy6969, razorcms)
 *
 * @author Paul Smith
 * @site ulsmith.net
 * @created Feb 2014
 */

// set session
session_start();
session_regenerate_id();

// sidewide constants
define('RAZOR_BASE_PATH', '../');
define("RAZOR_BASE_URL", '/');
define("RAZOR_USERS_IP", $_SERVER["REMOTE_ADDR"]);
define("RAZOR_USERS_UAGENT", $_SERVER["HTTP_USER_AGENT"]);

// permission defines
// 6 to 10 - access to admin dash
define("SUPER_ADMIN", 10); // only one account with this and it cannot be removed
define("ADMIN", 9); // pretty much the same as super admin but can be removed
define("MANAGER", 8); // add, edt, remove content only
define("EDITOR", 7); // add, edit content only
define("CONTRIBUTER", 6); // add content only
// 1 to 5 - no access to admin dash, user levels only
define("USER_5", 5); // base level, can onlyalter profile and user areas of public site that are protected to level 1
define("USER_4", 4); // base level, can onlyalter profile and user areas of public site that are protected to level 1
define("USER_3", 3); // base level, can onlyalter profile and user areas of public site that are protected to level 1
define("USER_2", 2); // base level, can onlyalter profile and user areas of public site that are protected to level 1
define("USER_1", 1); // base level, can onlyalter profile and user areas of public site that are protected to level 1

// PDO
define('RAZOR_PDO', 'sqlite:'.RAZOR_BASE_PATH.'db.sqlite');

// includes
include_once(RAZOR_BASE_PATH.'src/Library/razor_file_tools.php');
include_once(RAZOR_BASE_PATH.'src/Library/razor_error_handler.php');
include_once(RAZOR_BASE_PATH.'src/Library/razor_site.php');
include_once(RAZOR_BASE_PATH.'src/Library/razor_pdo.php');

// Load error handler
$error = new RazorErrorHandler();
set_error_handler(array($error, 'handle_error'));
set_exception_handler(array($error, 'handle_error'));

/* ^^^ OLD ^^^ */

/* vvv NEW vvv */

// system constants
define('APP_START', microtime(true));
define('APP_ROOT', __DIR__.'/');
define('WEB_ROOT', "{$_SERVER['REQUEST_SCHEME']}://{$_SERVER['HTTP_HOST']}");

// env constants
define('SESSION_LIFETIME', getenv('SESSION_LIFETIME') ? (int) getenv('SESSION_LIFETIME') : 86400);
define('SESSION_KEY', getenv('SESSION_KEY') ? getenv('SESSION_KEY') : '4hfjHuiUEH74fdsfdskj89Hhudy');
define('MODE', getenv('MODE') ? getenv('MODE') : 'production');
define('SQL_DRIVER', getenv('SQL_DRIVER') ? getenv('SQL_DRIVER') : NULL);
define('SQL_PATH', getenv('SQL_PATH') ? getenv('SQL_PATH') : NULL);
define('SQL_HOST', getenv('SQL_HOST') ? getenv('SQL_HOST') : NULL);
define('SQL_SCHEMA', getenv('SQL_SCHEMA') ? getenv('SQL_SCHEMA') : NULL);
define('SQL_USERNAME', getenv('SQL_USERNAME') ? getenv('SQL_USERNAME') : NULL);
define('SQL_PASSWORD', getenv('SQL_PASSWORD') ? getenv('SQL_PASSWORD') : NULL);
define('SQL_CHARSET', getenv('SQL_CHARSET') ? getenv('SQL_CHARSET') : NULL);
define('PHPMAILER_HOST', getenv('PHPMAILER_HOST'));
define('PHPMAILER_PORT', getenv('PHPMAILER_PORT'));
define('PHPMAILER_ENC', getenv('PHPMAILER_ENC'));
define('PHPMAILER_USERNAME', getenv('PHPMAILER_USERNAME'));
define('PHPMAILER_PASSWORD', getenv('PHPMAILER_PASSWORD'));
define('PHPMAILER_FROM', getenv('PHPMAILER_FROM'));
define('PHPMAILER_FROM_NAME', getenv('PHPMAILER_FROM_NAME'));
define('JWT_KEY', getenv('JWT_KEY') ? getenv('JWT_KEY') : '4hfjHuiUEH74fdsfdfdgdfgfdgfdlopuoknmncskj89Hhudy');
define('JWT_EXP', getenv('JWT_EXP') ? (int) getenv('JWT_EXP') : 600);
define('JWT_REFRESH_EXP', getenv('JWT_REFRESH_EXP') ? (int) getenv('JWT_REFRESH_EXP') : 259200);

require_once(RAZOR_BASE_PATH.'vendor/autoload.php');

//
// // continue with public load
// $site = new RazorSite();
// $site->load();
// $site->render();
//
// /* PHP END */
