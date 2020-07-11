<?php get_header(); ?>

<main role="main" class="page page-404">
	<div class="container-fluid">
		<h1 class="title-page"><?php _e( 'Page not found', 'html5blank' ); ?></h1>
		<h2 class="title-h3">
			<a href="<?php echo home_url(); ?>"><?php _e( 'Return home?', 'html5blank' ); ?></a>
		</h2>
	</div>
</main>

<?php get_footer(); ?>
