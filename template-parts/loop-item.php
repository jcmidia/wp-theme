<div class="col-md-4 col-xs-12">
  <article id="post-<?php the_ID(); ?>" <?php post_class('post-item'); ?>>
    <a href="<?php the_permalink() ?>">
      <figure class="news-item__image">
        <?php the_post_thumbnail('default'); ?>
      </figure>
      <div class="post-item__content">
        <h3 class="eyebrow">
          <?php foreach ((get_the_category()) as $category) {
            echo '<span>' . $category->name . '</span> ';
          }  ?>
        </h3>
        <h2 class="title-h3">
          <?php the_title(); ?>
        </h2>
        <p class="small"><?php the_excerpt(); ?></p>
      </div>
    </a>
  </article>
</div>