<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

        <link href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.png" rel="icon" type="image/png">
        <!-- <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed"> -->

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>

	</head>
	<body <?php body_class(); ?>>
		<!-- wrapper -->
		<div class="wrapper">

			<!-- nav -->
			<nav class="main-nav">
				<?php if(is_front_page()): ?>
				<div class="back-bar">
					<a href="https://sprucehealth.com" target="_blank">
					<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M6.4877 12L8 10.6L3.03101 6L8 1.4L6.4877 8.21465e-07L0.00640067 6L6.4877 12Z" fill="currentColor"/>
					</svg>
						back to sprucehealth.com
					</a>
				</div>
				<?php endif; ?>
				<div class="container-fluid">
					
					<div class="main-nav__toggle">
						<button class="toggle-button">
							<span>Toggle Menu</span>
						</button>
					</div>
					
					<div class="main-nav__logo">
						<a href="<?php echo home_url(); ?>">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/spruce-logo.svg" alt="Spruce Logo" class="logo__spruce">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/spruce-blog.svg" alt="Blog icon" class="logo__blog">
						</a>
					</div>
					
					<div class="main-nav__menu">
						<?php wp_nav_menu(array('menu' => 'header-menu', 'menu_class' => 'main-menu')); ?>
						<?php //get_template_part('template-parts/social', 'menu'); ?>
					</div>

					<div class="main-nav__search">
						<?php get_search_form(); ?>
					</div>
				</div>
				<div class="main-nav__progress"><span></span></div>
			</nav>
			<!-- /nav -->
