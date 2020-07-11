<?php get_header(); ?>

<main role="main">

  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

      <!-- article -->
      <article id="post-<?php the_ID(); ?>" <?php post_class('page-default post-container'); ?>>
        <header class="post-header">
          <div class="container">
            <h1 class="title-h1"><?php the_title() ?></h1>
          </div>
        </header>

        <figure class="post-cover">
          <div class="container">
            <?php the_post_thumbnail() ?>
          </div>
        </figure>

        <div class="post-content">
          <div class="container-fluid">
            <?php the_content(); ?>
          </div>
        </div>
      </article>

      <?php wp_reset_query(); ?>

    <?php endwhile; ?>

  <?php else : ?>

    <!-- article -->
    <article>

      <h1><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h1>

    </article>
    <!-- /article -->

  <?php endif; ?>

</main>

<?php get_footer(); ?>