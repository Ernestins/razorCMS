<?php

namespace Razilo\Model;

use Razilo\Library\NORM;

final class User extends NORM
{
	const TABLE = 'user';

	protected $id;

	public $password;
	public $active;
	public $name;
	public $email_address;
	public $last_logged_in;
	public $access_level;
	public $last_accessed;
	public $failed_attempts;
	public $lock_until;
	public $ip_address;
	public $active_token;
	public $reminder_token;
	public $reminder_time;
}
