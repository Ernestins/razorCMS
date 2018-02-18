<?php if (!defined("RAZOR_BASE_PATH")) die("No direct script access to this content"); ?>

<!DOCTYPE html>
<html xmlns:ng="http://angularjs.org">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="<?= $this->page["description"] ?>">
		<meta name="keywords" content="<?= $this->page["keywords"] ?>">

		<title><?php echo $this->settings["name"] ?>::<?php echo $this->page["title"] ?></title>
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400,700,800,600' rel='stylesheet' type='text/css'>

		<!-- resolve base URL/IP/U-AGENT for any js applications -->
		<script type="text/javascript">
			var RAZOR_BASE_URL = "<?= RAZOR_BASE_URL ?>";
			var RAZOR_USERS_IP = "<?= RAZOR_USERS_IP ?>";
			var RAZOR_USERS_UAGENT = "<?= RAZOR_USERS_UAGENT ?>";
			var RAZOR_PAGE_ID = "<?= $this->page['id'] ?>";
		</script>

		<!-- load bootstrap, style overrides and public css -->
		<link type="text/css" rel="stylesheet" href="<?= RAZOR_BASE_URL ?>assets/style/razor/razor_base.css">
		<link type="text/css" rel="stylesheet" href="<?= RAZOR_BASE_URL ?>assets/style/default/default.css">

		<!-- load razilo component -->
		<script type="text/javascript" src="<?= RAZOR_BASE_URL ?>assets/js/index.js"></script>

		<!-- load web component -->
		<link rel="import" href="<?= RAZOR_BASE_URL ?>assets/component/razilo-admin.html"/>

		<link rel="shortcut icon" href="<?= RAZOR_BASE_URL ?>favicon.ico" type="image/x-icon">
	</head>
	<?= $this->body() ?>
		<razilo-admin path="<?= $path ?>"></razilo-admin>
		<div class="template-wrapper">
			<div class="template-header">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="template-header-menu">
								<ul class="nav nav-pills mobile-hide-block">
									<?= $this->menu('header') ?>
								</ul>
								<ul class="nav nav-pills nav-stacked mobile-show-block">
									<?= $this->menu('header') ?>
								</ul>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4">
							<div class="template-header-content">
								<?= $this->content('header', 1) ?>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="template-header-content">
								<?= $this->content('header', 2) ?>
							</div>
						</div>
						<div class="col-sm-4">
							<div class="template-header-content">
								<?= $this->content('header', 3) ?>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="template-main">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="template-main-content">
								<?= $this->content('main', 1) ?>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="template-footer">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="template-footer-menu">
								<ul class="nav nav-pills mobile-hide-block">
									<?= $this->menu('footer') ?>
								</ul>
								<ul class="nav nav-pills nav-stacked mobile-show-block">
									<?= $this->menu('footer') ?>
								</ul>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="template-footer-content">
								<?= $this->content('footer', 1) ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
