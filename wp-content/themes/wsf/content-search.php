<?php
/**
 * @package WordPress
 * @subpackage wsf
 * @since wsf 2.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<?php the_post_thumbnail(); ?>

	<header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
	</header>

	<div class="entry-summary">
		<?php the_excerpt(); ?>
	</div>

	<?php if ( 'post' == get_post_type() ) : ?>

		<footer class="entry-footer">
			<?php edit_post_link( __( 'Edit', 'wsf' ), '<span class="edit-link">', '</span>' ); ?>
		</footer>

	<?php else : ?>

		<?php edit_post_link( __( 'Edit', 'wsf' ), '<footer class="entry-footer"><span class="edit-link">', '</span></footer><!-- .entry-footer -->' ); ?>

	<?php endif; ?>

</article>
