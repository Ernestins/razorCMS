<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class MenuItem extends NORM
{
	const TABLE = 'menu_item';

	protected $id;

	public $menu_id;
	public $position;
	public $level;
	public $page_id;
	public $link_label;
	public $link_url;
	public $link_target;
	public $json_settings;
	public $access_level;

	// joined page properties
	protected $page_active;
	protected $page_theme;
	protected $page_name;
	protected $page_title;
	protected $page_link;
	protected $page_keywords;
	protected $page_description;
	protected $page_access_level;
	protected $page_json_settings;

	// joined menu properties
	protected $menu_name;
	protected $menu_json_settings;
	protected $menu_access_level;

	public function allAsRelationalArray() {
		$data = $this->query(
			'SELECT a.*'
			.", b.active AS 'page_active'"
			.", b.theme AS 'page_theme'"
			.", b.name AS 'page_name'"
			.", b.title AS 'page_title'"
			.", b.link AS 'page_link'"
			.", b.keywords AS 'page_keywords'"
			.", b.description AS 'page_description'"
			.", b.access_level AS 'page_access_level'"
			.", b.json_settings AS 'page_json_settings'"
			.", c.id AS 'menu_id'"
			.", c.name AS 'menu_name'"
			.", c.json_settings AS 'menu_json_settings'"
			.", c.access_level AS 'menu_access_level'"
			.' FROM menu_item AS a'
			.' LEFT JOIN page AS b ON a.page_id = b.id'
			.' LEFT JOIN menu AS c ON a.menu_id = c.id'
			.' ORDER BY position ASC'
		);

		// sort them into name
		$menus = [];
		foreach ($data as $row)
		{
			if (!isset($menus[$row->menu_name])) $menus[$row->menu_name] = array();

			if ($row->level == 1) $menus[$row->menu_name][] = $row->toArray();

			if ($row->level == 2)
			{
				$parent = count($menus[$row->menu_name]) - 1;

				if (!isset($menus[$row->menu_name][$parent]["sub_menu"])) $menus[$row->menu_name][$parent]["sub_menu"] = array();

				$menus[$row->menu_name][$parent]["sub_menu"][] = $row->toArray();
			}
		}

		return $menus;
	}
}
