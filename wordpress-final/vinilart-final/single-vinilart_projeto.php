<?php
/**
 * Pagina de um projeto do portefolio.
 *
 * @package vinilart
 */

get_header();

while ( have_posts() ) :
	the_post();

	$vinilart_terms    = get_the_terms( get_the_ID(), 'vinilart_categoria' );
	$vinilart_category = ( $vinilart_terms && ! is_wp_error( $vinilart_terms ) ) ? $vinilart_terms[0]->name : '';
	?>
	<section class="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
		<div class="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
			<div class="flex items-center gap-3">
				<span class="bar-brand h-[2px] w-8"></span>
				<span class="eyebrow text-cyan"><?php echo esc_html( $vinilart_category ); ?></span>
			</div>

			<h1 class="mt-3 text-3xl font-display font-black tracking-tight sm:text-4xl lg:text-5xl"><?php the_title(); ?></h1>

			<?php if ( get_the_excerpt() ) : ?>
				<p class="mt-4 max-w-xl text-base leading-relaxed text-foreground/65"><?php echo esc_html( get_the_excerpt() ); ?></p>
			<?php endif; ?>

			<?php if ( get_the_post_thumbnail_url( null, 'full' ) ) : ?>
				<div class="mt-10 overflow-hidden rounded-sm border border-white/[0.08] bg-charcoal/30">
					<img src="<?php echo esc_url( get_the_post_thumbnail_url( null, 'full' ) ); ?>" alt="<?php echo esc_attr( get_the_title() ); ?>" class="w-full object-cover" />
				</div>
			<?php endif; ?>

			<div class="mt-10">
				<a href="<?php echo esc_url( vinilart_url( '/portfolio' ) ); ?>" class="inline-flex min-h-12 items-center gap-2 border border-white/[0.12] px-6 py-3.5 text-[0.73rem] font-bold uppercase tracking-[0.1em] text-foreground transition-colors hover:border-white/30">
					<span><?php esc_html_e( 'Ver todos os trabalhos', 'vinilart' ); ?></span>
				</a>
			</div>
		</div>
	</section>
	<?php
endwhile;

get_footer();
