<!-- article -->
<div class="row">
  <?php
  $is_home = get_post_field('post_name') === 'home';
  ?>
  <?php $i = 0;
  while (have_posts()) : the_post(); ?>
    <?php
    $col_class = 4;
    $thumb_size = 'default';
    if ($is_home && $i === 0) {
      $col_class = 12;
      $thumb_size = 'big';
    } else if ($is_home && $i < 3) {
      $col_class = 6;
      $thumb_size = 'default';
    }
    ?>
    <div
      class="col-md-<?php echo $col_class ?>
      col-sm-<?php echo ($col_class === 12) ? '12' : '6' ?>
      col-xs-12"
    >
      <article id="post-<?php the_ID(); ?>" <?php post_class('post-item'); ?>>
        <a href="<?php the_permalink() ?>">
          <figure class="news-item__image">
            <?php the_post_thumbnail($thumb_size); ?>
          </figure>
          <div class="post-item__content">
            <h3 class="eyebrow">
              <?php foreach ((get_the_category()) as $category) {
                echo '<span>' . $category->name . '</span> ';
              }  ?>
            </h3>
            <h2 class="<?php echo ($is_home && $i === 0) ? 'title-h2' : 'title-h3'; ?>">
              <?php the_title(); ?>
            </h2>
            <p class="small"><?php the_excerpt(); ?></p>
          </div>
        </a>
      </article>
    </div>
  <? $i++;
  endwhile; ?>
</div>
<!-- /article -->