<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class Menu extends NORM
{
	const TABLE = 'menu';

	protected $id;

	public $name;
	public $json_settings;
	public $access_level;
}
