<?php get_template_part('template-parts/banner'); ?>
<?php get_template_part('template-parts/newsletter'); ?>
<?php get_template_part('template-parts/newsletter', 'modal'); ?>

<!-- footer -->
<footer class="main-footer">
	<div class="back-bar">
		<a href="https://sprucehealth.com" target="_blank">
			back to sprucehealth.com
		</a>
	</div>
	<div class="container-fluid">
		<div class="main-footer__left">
			<div class="main-footer__spruce">
				<a href="https://sprucehealth.com/" target="_blank">
					Discover <strong>sprucehealth.com</strong>
				</a>
			</div>
		</div>

		<div class="main-footer__right">
			<p>©2019 sprucehealth. All Rights reserved.</p>
			<?php //get_template_part('template-parts/social', 'menu'); 
			?>
		</div>
	</div>
</footer>
<!-- /footer -->

</div>
<!-- /wrapper -->

<?php wp_footer(); ?>
</body>

</html>