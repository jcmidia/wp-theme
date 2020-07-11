<div id="modal-newsletter" class="modal">
  <div class="modal__content">
    <button class="modal__close">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-close">
        <path d="M8.47101 8L23.9737 24.4447" stroke="#02002D" stroke-width="2"/>
        <path d="M23.031 7.78394L8.00001 24.6609" stroke="#02002D" stroke-width="2"/>
      </svg>
    </button>

    <div class="modal__body">
      <h3 class="title-h2">Subscribe</h3>
      <p>Get the best medical articles straight to your inbox. Unsubscribe anytime.</p>
      <?php get_template_part('template-parts/newsletter', 'form'); ?>
    </div>
  </div>
</div>