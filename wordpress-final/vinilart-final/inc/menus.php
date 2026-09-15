<?php
/**
 * Menus do site com o mesmo aspeto do site aprovado.
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Itens de um local de menu, com alternativa quando ainda nao ha menu criado.
 *
 * @param string $location Local do menu.
 * @return array Lista de arrays com title, url e current.
 */
function vinilart_menu_items( $location = 'principal' ) {
	$items     = array();
	$locations = get_nav_menu_locations();

	if ( isset( $locations[ $location ] ) && $locations[ $location ] ) {
		$menu_items = wp_get_nav_menu_items( $locations[ $location ] );
		if ( $menu_items ) {
			foreach ( $menu_items as $item ) {
				if ( (int) $item->menu_item_parent > 0 ) {
					continue;
				}
				$items[] = array(
					'title'   => $item->title,
					'url'     => $item->url,
					'current' => untrailingslashit( $item->url ) === untrailingslashit( home_url( add_query_arg( array() ) ) ),
					'accent'  => false !== strpos( $item->url, '#vinilart-sport' ),
				);
			}
		}
	}

	if ( empty( $items ) ) {
		$fallback = array(
			array( 'Início', '/' ),
			array( 'Serviços', '/servicos' ),
			array( 'Portefólio', '/portfolio' ),
			array( 'Sobre', '/sobre' ),
			array( 'VinilArt Sport', '/#vinilart-sport' ),
			array( 'Contactos', '/contactos' ),
		);

		foreach ( $fallback as $entry ) {
			$url      = vinilart_url( $entry[1] );
			$items[] = array(
				'title'   => $entry[0],
				'url'     => $url,
				'current' => untrailingslashit( $url ) === untrailingslashit( home_url( add_query_arg( array() ) ) ),
				'accent'  => false !== strpos( $entry[1], '#vinilart-sport' ),
			);
		}
	}

	return $items;
}

/**
 * Menu do topo (ecras grandes).
 */
function vinilart_desktop_menu() {
	foreach ( vinilart_menu_items( 'principal' ) as $item ) {
		if ( $item['accent'] ) {
			?>
			<a href="<?php echo esc_url( $item['url'] ); ?>" class="group relative flex items-center gap-2 py-2 text-[0.76rem] font-medium uppercase tracking-[0.08em] text-foreground/70 transition-colors hover:text-foreground">
				<span class="bar-brand size-2 rounded-full transition-transform duration-300 group-hover:scale-125"></span>
				<span><?php echo esc_html( $item['title'] ); ?></span>
			</a>
			<?php
			continue;
		}
		?>
		<a href="<?php echo esc_url( $item['url'] ); ?>" class="group relative py-2 text-[0.76rem] font-medium uppercase tracking-[0.08em] transition-colors hover:text-foreground <?php echo $item['current'] ? 'text-foreground' : 'text-foreground/64'; ?>">
			<?php echo esc_html( $item['title'] ); ?>
			<span class="absolute inset-x-0 -bottom-[2px] h-px origin-left scale-x-0 bg-foreground/80 transition-transform duration-300 group-hover:scale-x-100"></span>
		</a>
		<?php
	}
}

/**
 * Menu do telemovel.
 */
function vinilart_mobile_menu() {
	foreach ( vinilart_menu_items( 'principal' ) as $item ) {
		if ( $item['accent'] ) {
			?>
			<a href="<?php echo esc_url( $item['url'] ); ?>" class="group flex items-center justify-between gap-4 border-b border-white/[0.07] py-4 sm:py-5">
				<div class="flex min-w-0 items-center gap-3">
					<span class="bar-brand size-2.5 shrink-0 rounded-full sm:size-3"></span>
					<span class="font-display text-[1.65rem] font-extrabold uppercase leading-none tracking-[-0.03em] min-[390px]:text-[1.85rem] sm:text-[2rem]"><?php echo esc_html( $item['title'] ); ?></span>
				</div>
				<?php vinilart_icon_arrow( 'size-5 shrink-0 text-foreground/28' ); ?>
			</a>
			<?php
			continue;
		}
		?>
		<a href="<?php echo esc_url( $item['url'] ); ?>" class="group flex items-center justify-between border-b border-white/[0.07] py-4 font-display text-[1.65rem] font-extrabold uppercase leading-none tracking-[-0.03em] text-foreground min-[390px]:text-[1.85rem] sm:py-5 sm:text-[2rem]">
			<span><?php echo esc_html( $item['title'] ); ?></span>
			<?php vinilart_icon_arrow( 'size-5 shrink-0 text-foreground/28' ); ?>
		</a>
		<?php
	}
}

/**
 * Menu do rodape.
 */
function vinilart_footer_menu() {
	$items = vinilart_menu_items( 'rodape' );
	if ( empty( $items ) ) {
		$items = vinilart_menu_items( 'principal' );
	}

	foreach ( $items as $item ) {
		printf(
			'<a href="%s" class="w-fit text-sm text-foreground/70 hover:text-foreground">%s</a>',
			esc_url( $item['url'] ),
			esc_html( $item['title'] )
		);
	}
}

/**
 * Opcoes do campo "serviço" do formulario de orcamento.
 *
 * @return array
 */
function vinilart_service_options() {
	$default = 'Logotipos 3D, Design, Impressão, Decoração de Montras, Decoração de Interiores, Decoração de Viaturas, Brindes, Estampagem, Outro';
	$raw     = vinilart_opt( 'form_servicos', $default );
	$list    = array_map( 'trim', explode( ',', $raw ) );

	return array_values( array_filter( $list ) );
}
