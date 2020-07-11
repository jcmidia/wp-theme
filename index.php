<?php get_header(); ?>
<?php
$cat_id = get_query_var('cat');
$current_category = get_category($cat_id);
$parent_cat = $current_category->category_parent === 0 ? $current_category : get_category($current_category->category_parent);
?>

	<main role="main" class="page-default">
		<!-- section -->
		<section class="page-archive">

			<div class="container">
				<h1 class="title-h1"><?php echo $parent_cat->name ?></h1>

				<div class="categories-menu">
					<button class="categories-menu__current">
						<?php
						if ($cat_id === $parent_cat->cat_ID):
							echo 'All';
						else:
							echo $current_category->name;
						endif;
						?>
					</button>
					<ul>
						<li>
							<a href="<?php echo home_url() . '/category/' . $parent_cat->slug; ?>"
								data-id="<?php echo $parent_cat->cat_ID ?>"
								class="all <?php if($cat_id === $parent_cat->cat_ID): ?>active<?php endif; ?>">
								<?php _e('All', 'spruce') ?>
							</a>
						</li>
						<?php
						$categories = get_categories( array(
							'taxonomy' => 'category',
							'hierarchical' => true,
							'orderby' => 'term_order',
							'hide_empty' => false,
							'parent' => $parent_cat->cat_ID )
						);

						foreach($categories as $category) {
						?>
						<li>
							<a href="<?php echo home_url() . '/category/' . $category->slug; ?>"
								data-id="<?php echo $category->cat_ID ?>"
								<?php if($cat_id === $category->cat_ID): ?>class="active"<?php endif; ?>>
								<?php echo $category->name ?>
							</a>
						</li>
						<?php } ?>
					</ul>
				</div>

				<div class="posts-container">
					<?php get_template_part('loop'); ?>
				</div>
				
				<?php
				$query = new WP_Query( array('posts_per_page' => -1, 'cat' => $cat_id) );
				$total = $query->found_posts;
				
				if ($total > 9):
				?>
				<div class="inifity-load">
					<a href="#" class="btn btn--lg btn--neutral">
						<?php _e('Load more', 'spruce') ?>
					</a>
				</div>
				<?php endif; ?>
			</div>

		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>
