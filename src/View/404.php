<?php if (!defined("RAZOR_BASE_PATH")) die("No direct script access to this content"); ?>

<!DOCTYPE html>
<html xmlns:ng="http://angularjs.org">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="404 Not Found">
		<meta name="keywords" content="404, Not, Found">

		<title><?= $this->site["name"] ?>::404 Not Found</title>
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,800italic,400,700,800,600' rel='stylesheet' type='text/css'>
		<link rel="shortcut icon" href="<?= RAZOR_BASE_URL ?>favicon.ico">

		<!-- load razor base css (imports: bootstrap, font awesome) -->
		<link type="text/css" rel="stylesheet" href="<?= RAZOR_BASE_URL ?>assets/style/razor/razor_base.css">

		<!-- load theme specific (no mixins from bootstrap) -->
		<link type="text/css" rel="stylesheet" href="<?= RAZOR_BASE_URL ?>assets/style/default/default.css">
	</head>
	<body>
	<body>
		<div class="template-wrapper">
			<div class="template-header">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="template-header-content text-center">
								<p><strong><?= $this->site["name"] ?></strong> 404 Sad Dude</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="template-main">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="content-404 text-center">
								<i class="fa fa-frown-o icon-404"></i>
								<p>You have reached <em>sad dude</em>, to make <em>sad dude</em> happy, please try a different page...</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="template-footer">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<div class="template-footer-content text-center">
								<p><a href="http://cms.razilo.net">raziloCMS (aka razorCMS) File Based Content Management System</a></p>
								<p><a href="http://pa.ulsmith.net">pa.ulsmith.net</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>
