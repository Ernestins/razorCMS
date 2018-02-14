<?php

namespace Razilo\Library;

class PDOLayerException extends \Exception {}

/**
 * Razilo\Library\PDOLayer
 * Base PDO model to extend PDO with some basic tools
 */
class PDOLayer extends \PDO
{
    public $db_query;

	function __construct($driver = null, $path = null, $host = null, $schema = null, $username = null, $password = null, $charset = null)
	{
        // setup connection
        $driver = $driver ? $driver : getenv('SQL_DRIVER');
        $path = $path ? $path : getenv('SQL_PATH');
        $host = $host ? $host : getenv('SQL_HOST');
        $schema = $schema ? $schema : getenv('SQL_SCHEMA');
        $username = $username ? $username : getenv('SQL_USERNAME');
        $password = $password ? $password : getenv('SQL_PASSWORD');
        $charset = $charset ? $charset : getenv('SQL_CHARSET');

		if (empty($driver) || ($driver !== 'mysql' && $driver !== 'sqlite')) throw new PDOLayerException('Database driver not set, please choose mysql or sqlite');

		if ($driver == 'mysql') {
        	if (empty($host) || empty($schema) || empty($username) || empty($password)) throw new PDOLayerException('Database connection details not set, pass in details or -set env vars for SQL_HOST, SQL_SCHEMA, SQL_USERNAME, SQL_PASSWORD');

	        // connect
	        $conn = "mysql:host={$host};dbname={$schema}";
	        if (!empty($charset)) $conn.= ";charset={$charset}";
		}

		if ($driver == 'sqlite') {
        	if (empty($path)) throw new PDOLayerException('Database connection details not set, pass in details or -set env vars in docker compose file for SQL_PATH');

	        // connect
	        $conn = "sqlite:".APP_ROOT."{$path}";
	        if (!empty($schema)) $conn.= ";dbname={$schema}";
	        if (!empty($charset)) $conn.= ";charset={$charset}";
		}

        parent::__construct($conn, '', '');
	}
}
