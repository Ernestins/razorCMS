<?php

namespace Razilo\Service;

use Slim\Views\PhpRenderer;

/**
 * Razilo\Services\Renderer
 * Extension to the slim renderer to allow partial view loading inside a rendered view response
 * @extends Slim\Views\PhpRenderer
 */
class Renderer extends PhpRenderer
{
	/** @var basePath Views base path */
	protected $basePath;

	public function __construct($basePath) {
		parent::__construct($basePath);
		$this->basePath = $basePath;
	}

	/**
	 * partial()
	 * Loads view partial inside a renderer response
	 * @param string $file The partial file to load inline
	 * @param array $args The arguments to make available by name inside the partial as [name => value]
	 */
	protected function partial($file, $args = []) {
		foreach ($args as $name => $arg) ${$name} = $arg;
		require($this->basePath.$file);
	}
}
