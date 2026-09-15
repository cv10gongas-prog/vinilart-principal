<?php
/**
 * Listagem genérica (usada apenas se existirem artigos ou pesquisas).
 *
 * @package vinilart
 */

get_header();
?>

<section class="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
	<div class="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
		<div class="flex items-center gap-3">
			<span class="bar-brand h-[2px] w-8"></span>
			<span class="eyebrow"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></span>
		</div>

		<h1 class="mt-3 text-3xl font-display font-black tracking-tight sm:text-4xl lg:text-5xl">
			<?php echo esc_html( is_search() ? __( 'Resultados', 'vinilart' ) : get_the_archive_title() ); ?>
		</h1>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<?php
			if ( have_posts() ) :
				while ( have_posts() ) :
					the_post();
					?>
					<a href="<?php the_permalink(); ?>" class="group block border border-white/[0.08] bg-charcoal/30 p-6 transition-colors hover:border-white/20">
						<h2 class="font-display text-lg font-extrabold uppercase leading-snug tracking-tight text-foreground"><?php the_title(); ?></h2>
						<p class="mt-2 text-sm leading-relaxed text-foreground/60"><?php echo esc_html( wp_trim_words( get_the_excerpt(), 22 ) ); ?></p>
					</a>
					<?php
				endwhile;
			else :
				?>
				<p class="text-base text-foreground/60"><?php esc_html_e( 'Sem resultados.', 'vinilart' ); ?></p>
			<?php endif; ?>
		</div>

		<div class="mt-10 text-sm text-foreground/60"><?php the_posts_pagination(); ?></div>
	</div>
</section>

<?php
get_footer();
