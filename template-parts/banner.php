<?php
$frontpage_id = get_option( 'page_on_front' );

if (get_field('text', $frontpage_id)):
?>
<section class="banner-container">
  <div class="container">
    <div class="banner">
      <div class="banner__content">
        <h4><?php the_field('eyebrow', $frontpage_id) ?></h4>
        <h3><?php the_field('text', $frontpage_id) ?></h3>
        <a href="<?php the_field('link', $frontpage_id) ?>" class="btn btn--filled btn--sm">
          <?php the_field('button_text', $frontpage_id) ?>
          <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.49023 0.530273L6.49023 11.1651L10.5213 6.87505L11.5381 7.96484L5.7691 14.1045L0.000122144 7.96484L1.01691 6.88272L5.04798 11.1651L5.04798 0.530273L6.49023 0.530273Z" fill="currentColor"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
<?php endif; ?>