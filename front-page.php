<?php get_header(); ?>

<main role="main" class="front-page">
	<div class="container">
		<?php 
			query_posts('posts_per_page=9');
			get_template_part('loop'); 
			wp_reset_postdata();
		?>
	</div>
</main>

<?php get_footer(); ?>
