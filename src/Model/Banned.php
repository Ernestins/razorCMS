<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class Banned extends NORM
{
	const TABLE = 'banned';

	protected $id;

	public $ip_address;
	public $user_agent;
}
