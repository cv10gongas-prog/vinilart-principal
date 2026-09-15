<?php
/**
 * Pagina nao encontrada.
 *
 * @package vinilart
 */

get_header();
?>

<section class="relative overflow-hidden bg-ink pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
	<div class="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8">
		<div class="flex items-center gap-3">
			<span class="bar-brand h-[2px] w-8"></span>
			<span class="eyebrow"><?php esc_html_e( 'Página não encontrada', 'vinilart' ); ?></span>
		</div>

		<h1 class="mt-4 text-4xl font-display font-black tracking-tight sm:text-5xl lg:text-6xl">
			<?php esc_html_e( 'Esta página', 'vinilart' ); ?><br />
			<span class="text-gradient-brand"><?php esc_html_e( 'não existe.', 'vinilart' ); ?></span>
		</h1>

		<p class="mt-6 max-w-md text-base leading-relaxed text-foreground/60">
			<?php esc_html_e( 'Volta ao início ou vê os trabalhos realizados.', 'vinilart' ); ?>
		</p>

		<div class="mt-9 flex flex-wrap gap-4">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="group relative inline-flex min-h-12 items-center gap-2 overflow-hidden bg-foreground px-6 py-3.5 text-[0.73rem] font-bold uppercase tracking-[0.1em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
				<span class="relative z-10"><?php esc_html_e( 'Início', 'vinilart' ); ?></span>
				<span class="bar-brand absolute inset-x-0 bottom-0 h-[3px]"></span>
			</a>
			<a href="<?php echo esc_url( vinilart_url( '/portfolio' ) ); ?>" class="inline-flex min-h-12 items-center gap-2 border border-white/[0.12] px-6 py-3.5 text-[0.73rem] font-bold uppercase tracking-[0.1em] text-foreground transition-colors hover:border-white/30">
				<span><?php esc_html_e( 'Ver trabalhos', 'vinilart' ); ?></span>
			</a>
		</div>
	</div>
</section>

<?php
get_footer();
