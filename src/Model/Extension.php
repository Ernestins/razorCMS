<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class Extension extends NORM
{
	const TABLE = 'extension';

	protected $id;

	public $extension;
	public $type;
	public $handle;
	public $json_settings;
	public $user_id;
	public $access_level;
}
