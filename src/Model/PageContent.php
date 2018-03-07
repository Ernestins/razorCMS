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

	public function getUsedOn($content_id) {
		return $this->query(
			'SELECT page.id, page.name, page.title'
			. ' FROM page_content'
			. ' JOIN page ON page_content.page_id = page.id'
			. ' WHERE page_content.content_id = :content_id'
			. ' GROUP BY page.id'
		, ['content_id' => $content_id]);
	}
}
