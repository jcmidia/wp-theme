<!-- search -->
<div class="search-form" role="search">
	<div class="search-form__container">
		<div class="container">
			<form action="#">
				<input class="search-form__input" type="search" name="s" placeholder="<?php _e( 'What are you looking for?', 'html5blank' ); ?>">
				<button class="search-form__clear">Clear</button>
			</form>

			<p class="search-form__error" style="display: none"></p>

			<div class="search-form__result"></div>
		</div>
	</div>
	<button class="search-form__submit" type="submit" role="button">
		<span><?php _e( 'Search', 'html5blank' ); ?></span>
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-search">
			<path d="M19.4331 20.425L26.2521 27.6349" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
			<circle cx="13.6503" cy="14.6504" r="7.5309" transform="rotate(-45 13.6503 14.6504)" stroke="currentColor" stroke-width="2"/>
		</svg>
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-close">
			<path d="M8.47101 8L23.9737 24.4447" stroke="#02002D" stroke-width="2"/>
			<path d="M23.031 7.78394L8.00001 24.6609" stroke="#02002D" stroke-width="2"/>
		</svg>
	</button>
</div>
<!-- /search -->
