<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class Content extends NORM
{
	const TABLE = 'content';

	protected $id;

	public $name;
	public $content;
	public $json_settings;
	public $access_level;
}
