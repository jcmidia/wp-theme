<?php get_header(); ?>

	<main role="main">

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<!-- article -->
		<article id="post-<?php the_ID(); ?>" <?php post_class('page-default post-container progress-content'); ?>>
			<header class="post-header">
				<div class="container">
					<div class="post-header__breadcrumb">
						<?php 
						$category = get_the_category();
						$parentCategory = get_category($category[0]->category_parent);
						?>
						<ul>
							<li><a href="<?php echo home_url() ?>"><?php _e('Home', 'spruce') ?></a></li>
							<?php if($parentCategory): ?>
								<li><a href="<?php echo home_url() . '/category/' . $parentCategory->slug ?>"><?php echo $parentCategory->name ?></a></li>
							<?php endif; ?>
							<?php if($category): ?>
								<li><a href="<?php echo home_url() . '/category/' . $category[0]->slug ?>"><?php echo $category[0]->name ?></a></li>
							<?php endif; ?>
						</ul>
					</div>

					<h1 class="title-h1"><?php the_title() ?></h1>
				</div>
			</header>

			<figure class="post-cover">
				<div class="container">
					<?php the_post_thumbnail() ?>
				</div>
			</figure>

			<div class="post-sidebar__container container">
				<aside class="post-sidebar">
					<div class="post-author">
						<?php $avatar = get_avatar_url(get_the_ID()) ?>
						<?php if($avatar): ?>
						<figure style="background-image: url('<?php echo $avatar; ?>')">
							<img src="<?php echo $avatar; ?>" alt="">
						</figure>
						<?php endif; ?>

						<p>
							<span>Written by</span>
							<?php echo get_the_author_meta('display_name'); ?>
						</p>
					</div>

					<p>
						<span>Published</span>
						<?php the_time('M d, Y') ?>
					</p>
					
					<?php if(get_field('cover_author')): ?>
					<p>
						<span>Cover by</span>
						<?php the_field('cover_author') ?>
					</p>
					<?php endif; ?>

					<div class="post-sharing">
						<?php get_template_part('template-parts/social', 'sharing'); ?>
					</div>
				</aside>
			</div>

			<div class="post-content">
				<div class="container-fluid">
					<?php the_content(); ?>
				</div>
			</div>

			<div class="post-comments">
				<div class="container">
					<?php comment_form(); ?>
				</div>
			</div>
		</article>

		<?php
		$relatedArgs = array( 'category__in' => wp_get_post_categories($post->ID), 'numberposts' => 3, 'post__not_in' => array($post->ID) );
		$related = get_posts( $relatedArgs );
		if (!$related) {
			$categoriesRelated = get_categories(
				array( 'parent' => $parentCategory->cat_ID )
			);
			$categoriesRelatedIds = array_column($categoriesRelated, 'cat_ID');
			$relatedArgs['category__in'] = $categoriesRelatedIds;
			$related = get_posts( $relatedArgs );
		}

		if( $related ):
		?>
		<section class="related-posts">
			<div class="container">
				<h3 class="title-h3"><?php _e('Related articles', 'spruce') ?></h3>

				<div class="row">
					<?php 
					foreach( $related as $post ) { 
						setup_postdata($post);
						get_template_part('template-parts/loop', 'item');
					}
					?>
				</div>
			</div>
		</section>
		<?php endif; ?>

		<?php wp_reset_query(); ?>

	<?php endwhile; ?>

	<?php else: ?>

		<!-- article -->
		<article>

			<h1><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h1>

		</article>
		<!-- /article -->

	<?php endif; ?>

	</main>

<?php get_footer(); ?>
