<?php
/**
 * Paginas do site. Se a pagina corresponder a uma das paginas do design
 * (Serviços, Portefólio, Sobre, Contactos) mostra essa; caso contrario mostra
 * o conteudo escrito no editor do WordPress com o estilo do site.
 *
 * @package vinilart
 */

get_header();

$vinilart_key = vinilart_current_page_key();

if ( $vinilart_key ) {
	vinilart_render_page( $vinilart_key );
} else {
	?>
	<section class="relative overflow-hidden bg-ink pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
		<div class="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
			<div class="flex items-center gap-3">
				<span class="bar-brand h-[2px] w-8"></span>
				<span class="eyebrow"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></span>
			</div>
			<h1 class="mt-3 text-3xl font-display font-black tracking-tight sm:text-4xl lg:text-5xl"><?php the_title(); ?></h1>
			<div class="prose-vinilart mt-8 max-w-3xl text-base leading-relaxed text-foreground/70">
				<?php
				while ( have_posts() ) {
					the_post();
					the_content();
				}
				?>
			</div>
		</div>
	</section>
	<?php
}

get_footer();
