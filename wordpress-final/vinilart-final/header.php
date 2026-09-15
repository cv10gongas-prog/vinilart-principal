<?php
/**
 * Cabecalho do site (mesmo HTML/CSS do site aprovado).
 *
 * @package vinilart
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> class="scroll-smooth">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div class="surface-grain relative min-h-dvh bg-ink text-foreground">
	<header data-vinilart-header class="site-header-fixed fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b border-transparent bg-transparent">
		<div class="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 sm:py-[18px] xl:px-10 xl:py-[20px]">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="group flex shrink-0 items-center" aria-label="VinilArt — Início">
				<img src="<?php echo esc_url( vinilart_logo_url( 'header' ) ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>" width="225" height="50" class="h-[34px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] min-[390px]:h-[38px] sm:h-[42px] lg:h-[46px] xl:h-[50px]" />
			</a>

			<nav class="hidden items-center gap-7 xl:flex 2xl:gap-8">
				<?php vinilart_desktop_menu(); ?>

				<a href="<?php echo esc_url( vinilart_url( '/contactos#pedido' ) ); ?>" class="group relative ml-1 inline-flex min-h-11 items-center gap-2 overflow-hidden bg-foreground px-5 py-3 text-[0.73rem] font-bold uppercase tracking-[0.1em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white">
					<span class="relative z-10"><?php echo esc_html( vinilart_opt( 'cta_label', 'Pedir orçamento' ) ); ?></span>
					<?php vinilart_icon_arrow( 'relative z-10 size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' ); ?>
					<span class="bar-brand absolute inset-x-0 bottom-0 h-[3px]"></span>
				</a>
			</nav>

			<button type="button" data-vinilart-menu-toggle aria-label="Abrir menu" aria-expanded="false" class="flex size-10 shrink-0 items-center justify-center border border-white/[0.09] bg-white/[0.025] text-foreground transition-colors hover:bg-white/[0.06] sm:size-11 xl:hidden">
				<svg data-vinilart-icon-open class="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
				<svg data-vinilart-icon-close hidden class="size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
			</button>
		</div>

		<div data-vinilart-bar class="bar-brand h-[2px] w-full transition-opacity duration-500 opacity-55" aria-hidden="true"></div>

		<div data-vinilart-menu-panel hidden class="surface-grain h-[calc(100dvh-72px)] overflow-y-auto bg-ink px-5 pb-10 pt-5 sm:px-8 sm:pt-7 xl:hidden">
			<nav class="flex flex-col">
				<?php vinilart_mobile_menu(); ?>
			</nav>

			<div class="mt-7">
				<a href="<?php echo esc_url( vinilart_url( '/contactos#pedido' ) ); ?>" class="group relative flex min-h-14 w-full items-center justify-center gap-2 overflow-hidden bg-foreground px-5 py-4 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-ink">
					<span><?php echo esc_html( vinilart_opt( 'cta_label', 'Pedir orçamento' ) ); ?></span>
					<?php vinilart_icon_arrow( 'size-4' ); ?>
					<span class="bar-brand absolute inset-x-0 bottom-0 h-[3px]"></span>
				</a>
			</div>

			<div class="mt-8 border-t border-white/[0.07] pt-5">
				<p class="text-[0.64rem] uppercase tracking-[0.16em] text-foreground/30"><?php echo esc_html( get_bloginfo( 'name' ) ); ?></p>
				<p class="mt-2 text-sm leading-6 text-foreground/52"><?php echo esc_html( vinilart_opt( 'slogan', 'Saber fazer… como deve ser.' ) ); ?></p>
			</div>
		</div>
	</header>

	<main>
