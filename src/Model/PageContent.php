<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class PageContent extends NORM
{
	const TABLE = 'page_content';

	protected $id;

	public $page_id;
	public $content_id;
	public $extension;
	public $location;
	public $column;
	public $position;
	public $json_settings;
	public $access_level;
}
