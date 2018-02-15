<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class Page extends NORM
{
	const TABLE = 'page';

	protected $id;

	public $active;
	public $theme;
	public $name;
	public $title;
	public $link;
	public $keywords;
	public $description;
	public $access_level;
	public $json_settings;
}
