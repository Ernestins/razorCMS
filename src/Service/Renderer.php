<?php

namespace Razilo\Service;

use Slim\Container;
use Slim\Views\PhpRenderer;

use Razilo\Model\Setting AS SettingModel;
use Razilo\Model\Page AS PageModel;
use Razilo\Model\MenuItem AS MenuItemModel;
use Razilo\Model\PageContent AS PageContentModel;
use Razilo\Model\Content AS ContentModel;

/**
 * Razilo\Services\Renderer
 * Extension to the slim renderer to allow partial view loading inside a rendered view response
 * @extends Slim\Views\PhpRenderer
 */
class Renderer extends PhpRenderer
{
	private $container;
	private $pdo;
	protected $basePath;

	protected $all_menus = null;
	protected $settings = null;
	protected $page = null;
	protected $menu = null;
 	protected $content = null;

	private $logged_in = false;

	public function __construct(Container $container, $basePath) {
		$this->basePath = $basePath;
		$this->pdo = $container->get('PDOLayer');
		parent::__construct($basePath);
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

	public function load($path) {
		// get site settings
		$setting_model = new SettingModel($this->pdo);
		$this->settings = $setting_model->allAsArray();

		// get pages
		$page_model = new PageModel($this->pdo);
		$page = empty($path) ? $page_model->fetch($this->settings["home_page"]) : $page_model->where(['link' => $path])->fetch();
		if (!empty($page)) {
			$this->page = $page->toArray();
			$this->page['id'] = (int) $page->get('id');
			$this->page['active'] = (int) $page->get('active');
			$this->page['access_level'] = (int) $page->get('access_level');
		} else return false;

		// get menus
		$menu_item_model = new MenuItemModel($this->pdo);
		$this->menu = $menu_item_model->allAsRelationalArray();

		// get content
		$page_content_model = new PageContentModel($this->pdo);
		$this->content = $page_content_model->where(['page_id' => $this->page['id']])->orderBy(['position' => 'ASC'])->fetchAll();
		foreach ($this->content as $key => $row) $this->content[$key] = $row->toArray();
		return true;
	}

	protected function body()
	{
		// start by opening body
		$output = "<body>";

		// if public viewable only, allow google tracking code to be used
		if (!isset($_GET["preview"]) && !empty($this->settings["google_analytics_code"]))
		{
			$output .= <<<OUTPUT
<!-- google tracking script -->
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', '{$this->settings["google_analytics_code"]}', '{$_SERVER["SERVER_NAME"]}');
	ga('send', 'pageview');
</script>
<!-- google tracking script -->
OUTPUT;
		}

		// add in IE8 and below header
		$output .= <<<OUTPUT
<!--[if lt IE 9]>
<div class="ie8">
	<p class="message">
		<i class="fa fa-exclamation-triangle"></i> You are using an outdated version of Internet Explorer that is not supported,
		please update your browser or consider using an alternative, modern browser, such as
		<a href="http://www.google.com/chrome">Google Chome</a>.
	</p>
<div>
<![endif]-->
OUTPUT;

		// if public viewable only, allow google tracking code to be used
		if (!empty($this->settings["cookie_message"]) && !empty($this->settings["cookie_message_button"]))
		{
			$output .= <<<OUTPUT
<!-- cookie message -->
<div id="razor-cookie" class="cookie-message" ng-controller="cookieMessage">
	<div class="alert alert-info alert-dismissable ng-cloak" ng-if="!hideMessage">
		<p class="text-center">
			{$this->settings["cookie_message"]}
			<button class="btn btn-default" ng-click="agree()">{$this->settings["cookie_message_button"]}</button>
		</p>
	</div>
</div>
<!-- cookie message -->
OUTPUT;
		}

		return $output;
	}


	protected function menu($area)
	{
		$output = '';
		// empty, return
		if (!isset($this->menu[$area])) return $output;

		// else carry on with nromal php loading
		foreach ($this->menu[$area] as $m_item)
		{
			// link item or page item that has access
			if (!empty($m_item["link_label"]) || (!empty($m_item["page_id"]) && $m_item["page_access_level"] <= $this->logged_in && ($m_item["page_active"] || $this->logged_in > 5)))
			{
				// sort any submenu items
				if (!isset($m_item["sub_menu"]))
				{
					$output .= '<li '.($this->logged_in < 7 ? '' : 'ng-if="!changed"').' '.($m_item["page_id"] == $this->page["id"] ? ' class="active"' : '').'>';
					$output .= '<a href="'.(isset($m_item["page_link"]) ? RAZOR_BASE_URL.$m_item["page_link"] : $m_item["link_url"]).'" target="'.$m_item["link_target"].'" '.($m_item["link_url"] == "#" ? 'onclick="return false;"' : '').'>';
					if (isset($m_item["page_active"]) && !$m_item["page_active"]) $output .= '<i class="fa fa-eye-slash"></i> ';
					$output .= (isset($m_item["page_name"]) ? $m_item["page_name"] : $m_item["link_label"]);
					$output .= '</a>';
				}
				else
				{
					$output .= '<li '.($this->logged_in < 7 ? '' : 'ng-if="!changed"').' class="dropdown'.($m_item["page_id"] == $this->page["id"] ? ' active' : '').'">';
					$output .= '<a class="dropdown-toggle" href="'.(isset($m_item["page_link"]) ? RAZOR_BASE_URL.$m_item["page_link"] : $m_item["link_url"]).'" target="'.$m_item["link_target"].'" '.($m_item["link_url"] == "#" ? 'onclick="return false;"' : '').'>';
					if (isset($m_item["page_active"]) && !$m_item["page_active"]) $output .= '<i class="fa fa-eye-slash"></i> ';
					$output .= (isset($m_item["page_name"]) ? $m_item["page_name"] : $m_item["link_label"]);
					$output .= ' <i class="fa fa-caret-down"></i></a>';
					$output .= '<ul class="dropdown-menu">';
					foreach ($m_item["sub_menu"] as $sm_item)
					{
						if (!empty($sm_item["link_label"]) || (!empty($sm_item["page_id"]) && $sm_item["page_access_level"] <= $this->logged_in && ($sm_item["page_active"] || $this->logged_in > 5)))
						{
							$output .= '<li '.($this->logged_in < 7 ? '' : 'ng-if="!changed"').' '.($sm_item["page_id"] == $this->page["id"] ? ' class="active"' : '').'>';
							$output .= '<a href="'.(isset($sm_item["page_link"]) ? RAZOR_BASE_URL.$sm_item["page_link"] : $sm_item["link_url"]).'" target="'.$sm_item["link_target"].'" '.($sm_item["link_url"] == "#" ? 'onclick="return false;"' : '').'>';
							if (isset($sm_item["page_active"]) && !$sm_item["page_active"]) $output .= '<i class="fa fa-eye-slash"></i> ';
							$output .= (isset($sm_item["page_name"]) ? $sm_item["page_name"] : $sm_item["link_label"]);
							$output .= '</a>';
						}
					}
					$output .= "</ul>";
				}

				$output .= '</li>';
			}
		}

		return $output;
	}

	protected function content($area, $ref)
	{
		// create extension dependancy list
		$ext_dep_list = array();

		$output = '';

		// if not editor and not empty, output content for public
		foreach ($this->content as $c_data)
		{
			if ($c_data["location"] == $area && $c_data["column"] == $ref)
			{
				if (!empty($c_data["content_id"]))
				{
					// load content
					$output .= '<div ng-if="!changed" content-id="'.$c_data["content_id"].'">';

					// content
					$content_model = new ContentModel($this->pdo);
					$content = $content_model->fetch($c_data['content_id'])->toArray();

					$output .= str_replace("\\n", "", $content["content"]);

					$output .= '</div>';
				}
				elseif (!empty($c_data["extension"]))
				{
					// load extension
					$manifest = RazorFileTools::read_file_contents(RAZOR_BASE_PATH."extension/{$c_data['extension']}", "json");
					$view_path = RAZOR_BASE_PATH."extension/{$manifest->type}/{$manifest->handle}/{$manifest->extension}/view/{$manifest->view}.php";

					$output .= '<div ng-if="!changed">';
					// include($view_path); ? need to handle this
					$output .= '</div>';
				}
			}
		}

		return $output;
	}
}
