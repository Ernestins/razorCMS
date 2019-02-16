<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class Setting extends NORM
{
	const TABLE = 'setting';

	protected $id;

	public $name;
	public $value;
	public $type;

	public function allAsArray() {
		$data = $this->query('SELECT * FROM setting');

		$settings = [];
		foreach ($data as $row) $settings[$row->name] = $this->forceType($row->value, $row->type);

		return $settings;
	}

	public function getSetting($name) {
		$data = $this->query('SELECT * FROM setting WHERE name = :name', ['name' => $name]);

		$data->value = $this->forceType($data->value, $data->type);

		return $data;
	}

	public function getSettings() {
		$data = $this->query('SELECT * FROM setting');

		foreach ($data as $key => $row) $data[$key]->value = $this->forceType($row->value, $row->type);

		return $data;
	}

	private function forceType($value, $type) {
		switch ($type)
		{
			case 'bool':
				return (bool) $value;
			break;
			case 'int':
				return (int) $value;
			break;
			case 'float':
				return (float) $value;
			break;
			case 'json':
				return json_decode($value);
			break;
			default:
				return (string) $value;
			break;
		}
	}
}
