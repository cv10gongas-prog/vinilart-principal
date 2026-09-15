<?php
/**
 * Rendering do portefolio (grelha, filtros e lightbox) com o mesmo HTML/CSS do
 * site aprovado, mas alimentado pelos Projetos do WordPress.
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Classes de cor por tom.
 *
 * @param string $tone Tom.
 * @return array
 */
function vinilart_tone_classes( $tone ) {
	$accent = array(
		'magenta' => 'text-magenta',
		'cyan'    => 'text-cyan',
		'yellow'  => 'text-yellow',
		'neutral' => 'text-foreground/60',
	);

	$border = array(
		'magenta' => 'before:bg-magenta',
		'cyan'    => 'before:bg-cyan',
		'yellow'  => 'before:bg-yellow',
		'neutral' => 'before:bg-white/40',
	);

	$slot = array(
		'magenta' => 'before:bg-magenta',
		'cyan'    => 'before:bg-cyan',
		'yellow'  => 'before:bg-yellow',
		'neutral' => 'before:bg-border',
	);

	$tone = isset( $accent[ $tone ] ) ? $tone : 'neutral';

	return array(
		'accent' => $accent[ $tone ],
		'border' => $border[ $tone ],
		'slot'   => $slot[ $tone ],
	);
}

/**
 * Projetos a mostrar.
 *
 * @param int $limit Numero maximo (0 = todos).
 * @return array
 */
function vinilart_projects( $limit = 0 ) {
	$query = new WP_Query(
		array(
			'post_type'      => 'vinilart_projeto',
			'post_status'    => 'publish',
			'posts_per_page' => $limit > 0 ? $limit : -1,
			'orderby'        => array(
				'menu_order' => 'ASC',
				'date'       => 'DESC',
			),
		)
	);

	$items = array();

	foreach ( $query->posts as $post ) {
		$terms    = get_the_terms( $post->ID, 'vinilart_categoria' );
		$category = ( $terms && ! is_wp_error( $terms ) ) ? $terms[0]->name : '';

		$items[] = array(
			'id'       => $post->ID,
			'title'    => get_the_title( $post ),
			'sublabel' => get_the_excerpt( $post ),
			'category' => $category,
			'image'    => get_the_post_thumbnail_url( $post, 'full' ),
			'ratio'    => get_post_meta( $post->ID, '_vinilart_ratio', true ) ? get_post_meta( $post->ID, '_vinilart_ratio', true ) : '4 / 3',
			'tone'     => get_post_meta( $post->ID, '_vinilart_tone', true ) ? get_post_meta( $post->ID, '_vinilart_tone', true ) : 'neutral',
			'featured' => '1' === get_post_meta( $post->ID, '_vinilart_featured', true ),
		);
	}

	wp_reset_postdata();

	return $items;
}

/**
 * Categorias para os filtros.
 *
 * @return array
 */
function vinilart_project_categories() {
	$out = array();

	// Ordem aprovada dos filtros (igual ao site atual); extras entram no fim.
	$ordem     = array( 'Interiores', 'Expositores', 'Sinalética', 'Montras', 'Fachadas', 'Identidade Visual' );
	$existentes = array();

	foreach ( vinilart_projects() as $item ) {
		if ( ! empty( $item['category'] ) ) {
			$existentes[] = $item['category'];
		}
	}

	foreach ( $ordem as $nome ) {
		if ( in_array( $nome, $existentes, true ) ) {
			$out[] = $nome;
		}
	}


	$terms = get_terms(
		array(
			'taxonomy'   => 'vinilart_categoria',
			'hide_empty' => true,
			'orderby'    => 'term_order',
		)
	);

	if ( ! is_wp_error( $terms ) ) {
		foreach ( $terms as $term ) {
			if ( ! in_array( $term->name, $out, true ) ) {
				$out[] = $term->name;
			}
		}
	}

	return $out;
}


/**
 * Imagem de um projeto (mesmo markup do componente MediaSlot).
 *
 * @param array $item Projeto.
 */
function vinilart_media_slot( $item ) {
	$tone = vinilart_tone_classes( $item['tone'] );
	?>
	<figure aria-label="<?php echo esc_attr( $item['title'] ); ?>" style="aspect-ratio: <?php echo esc_attr( $item['ratio'] ); ?>;" class="media-slot group/slot relative flex w-full items-end overflow-hidden before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-[2px] before:content-[''] <?php echo esc_attr( $tone['slot'] ); ?>">
		<?php if ( $item['image'] ) : ?>
			<img src="<?php echo esc_url( $item['image'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/slot:scale-[1.03]" />
		<?php endif; ?>
		<div aria-hidden="true" class="surface-diagonal pointer-events-none absolute inset-0 <?php echo $item['image'] ? 'opacity-0' : 'opacity-22'; ?>"></div>
		<div aria-hidden="true" class="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-white/15"></div>
		<div aria-hidden="true" class="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-white/10"></div>
	</figure>
	<?php
}

/**
 * Grelha de projetos com filtros e lightbox.
 *
 * @param array $args limit, lightbox.
 */
function vinilart_portfolio_grid( $args = array() ) {
	$args = wp_parse_args(
		$args,
		array(
			'limit'    => 0,
			'lightbox' => true,
		)
	);

	$items = vinilart_projects( (int) $args['limit'] );

	if ( empty( $items ) ) {
		return;
	}

	$categories = vinilart_project_categories();
	$all_label  = vinilart_opt( 'filtro_todos', 'Todos' );
	?>
	<div data-vinilart-portfolio>
		<?php if ( ! empty( $categories ) ) : ?>
			<div class="-mx-5 mt-9 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:mt-10 sm:px-8 [&amp;::-webkit-scrollbar]:hidden">
				<div class="flex w-max gap-2 pb-1">
					<button type="button" data-vinilart-filter="*" class="relative shrink-0 overflow-hidden border px-4 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.13em] transition-all sm:px-5 sm:text-[0.7rem] border-foreground/18 bg-foreground text-ink">
						<?php echo esc_html( $all_label ); ?>
						<span data-vinilart-filter-bar class="bar-brand absolute inset-x-0 bottom-0 h-[2px]"></span>
					</button>
					<?php foreach ( $categories as $category ) : ?>
						<button type="button" data-vinilart-filter="<?php echo esc_attr( $category ); ?>" class="relative shrink-0 overflow-hidden border px-4 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.13em] transition-all sm:px-5 sm:text-[0.7rem] border-white/[0.08] text-foreground/50 hover:border-white/25 hover:text-foreground">
							<?php echo esc_html( $category ); ?>
							<span data-vinilart-filter-bar hidden class="bar-brand absolute inset-x-0 bottom-0 h-[2px]"></span>
						</button>
					<?php endforeach; ?>
				</div>
			</div>
		<?php endif; ?>

		<div class="mt-8 columns-1 gap-5 sm:columns-2 lg:mt-10 lg:gap-6 xl:columns-3">
			<?php
			foreach ( $items as $index => $item ) :
				$tone = vinilart_tone_classes( $item['tone'] );
				?>
				<div data-vinilart-item data-category="<?php echo esc_attr( $item['category'] ); ?>" class="v-reveal is-in break-inside-avoid <?php echo $item['featured'] ? 'mb-7 sm:mb-9' : 'mb-5 sm:mb-6'; ?>">
					<button
						type="button"
						aria-label="<?php echo esc_attr( $item['category'] . ': ' . $item['title'] ); ?>"
						class="group relative block w-full text-left"
						<?php if ( $args['lightbox'] ) : ?>
							data-vinilart-open
							data-image="<?php echo esc_url( $item['image'] ); ?>"
							data-title="<?php echo esc_attr( $item['title'] ); ?>"
							data-category="<?php echo esc_attr( $item['category'] ); ?>"
							data-sublabel="<?php echo esc_attr( $item['sublabel'] ); ?>"
						<?php endif; ?>
					>
						<?php if ( $item['featured'] ) : ?>
							<div class="relative">
								<div class="relative overflow-hidden rounded-sm border border-white/[0.08] bg-charcoal/30 transition-all duration-300 group-hover:border-white/20">
									<?php vinilart_media_slot( $item ); ?>
									<div class="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2 rounded-xs border border-white/10 bg-black/70 px-2 py-1 backdrop-blur-md">
										<span class="font-display text-[0.58rem] font-bold text-foreground/45">#<?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
										<span class="h-2 w-px bg-white/15"></span>
										<span class="text-[0.56rem] font-semibold uppercase tracking-[0.16em] <?php echo esc_attr( $tone['accent'] ); ?>"><?php echo esc_html( $item['category'] ); ?></span>
									</div>
									<?php if ( $args['lightbox'] ) : ?>
										<div class="pointer-events-none absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"><?php vinilart_icon_arrow( 'h-3.5 w-3.5' ); ?></div>
									<?php endif; ?>
								</div>
								<div class="relative -mt-7 ml-3 mr-3 z-20 rounded-sm border border-white/[0.12] bg-ink/95 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 group-hover:border-white/25 sm:-mt-8 sm:ml-5 sm:mr-auto sm:max-w-[88%] sm:p-5 before:absolute before:left-0 before:top-3 before:bottom-3 before:w-[3px] pl-5 <?php echo esc_attr( $tone['border'] ); ?>">
									<div class="flex items-center justify-between gap-2">
										<span class="text-[0.6rem] font-semibold uppercase tracking-[0.16em] <?php echo esc_attr( $tone['accent'] ); ?>"><?php echo esc_html( $item['category'] ); ?></span>
										<span class="font-display text-[0.58rem] font-medium text-foreground/35"><?php echo esc_html( vinilart_opt( 'label_destaque', 'Destaque' ) ); ?></span>
									</div>
									<h3 class="mt-1.5 font-display text-base font-extrabold uppercase leading-snug tracking-tight text-white sm:text-lg"><?php echo esc_html( $item['title'] ); ?></h3>
									<?php if ( $item['sublabel'] ) : ?>
										<p class="mt-1 text-xs leading-relaxed text-foreground/70 sm:text-[0.8rem]"><?php echo esc_html( $item['sublabel'] ); ?></p>
									<?php endif; ?>
									<?php if ( $args['lightbox'] ) : ?>
										<div class="mt-3 flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-foreground/45 transition-colors group-hover:text-cyan">
											<span><?php echo esc_html( vinilart_opt( 'label_detalhes', 'Ver detalhes' ) ); ?></span>
											<?php vinilart_icon_arrow( 'h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' ); ?>
										</div>
									<?php endif; ?>
								</div>
							</div>
						<?php else : ?>
							<div class="relative">
								<div class="relative overflow-hidden rounded-sm border border-white/[0.08] bg-charcoal/30 transition-all duration-300 group-hover:border-white/20">
									<?php vinilart_media_slot( $item ); ?>
									<?php if ( $args['lightbox'] ) : ?>
										<div class="pointer-events-none absolute right-2.5 top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"><?php vinilart_icon_arrow( 'h-3 w-3' ); ?></div>
									<?php endif; ?>
								</div>
								<div class="mt-2.5 flex items-baseline justify-between gap-2 px-1 text-foreground/50">
									<div class="flex items-baseline gap-2 min-w-0">
										<span class="font-display text-[0.58rem] font-bold text-foreground/30 shrink-0">#<?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
										<span class="truncate text-[0.76rem] font-semibold uppercase tracking-wider text-foreground/80 transition-colors group-hover:text-foreground"><?php echo esc_html( $item['title'] ); ?></span>
									</div>
									<span class="shrink-0 text-[0.56rem] font-medium uppercase tracking-[0.12em] text-foreground/40"><?php echo esc_html( $item['category'] ); ?></span>
								</div>
							</div>
						<?php endif; ?>
					</button>
				</div>
			<?php endforeach; ?>
		</div>
	</div>

	<?php if ( $args['lightbox'] ) : ?>
		<div data-vinilart-lightbox hidden class="v-lightbox fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-ink/96 p-4 backdrop-blur-xl sm:p-8" role="dialog" aria-modal="true">
			<button type="button" data-vinilart-lightbox-close aria-label="Fechar" class="fixed right-4 top-4 z-[10000] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/90 text-white shadow-[0_4px_24px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-white/60 hover:bg-white hover:text-ink sm:right-6 sm:top-6 sm:h-13 sm:w-13">
				<svg class="h-6 w-6 stroke-[2.5]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
			</button>
			<div class="relative my-auto flex max-h-[90vh] w-fit max-w-[90vw] flex-col items-center justify-center">
				<div class="relative flex max-h-[78vh] max-w-[90vw] items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
					<img data-vinilart-lightbox-image src="" alt="" class="max-h-[78vh] max-w-[90vw] object-contain" />
				</div>
				<div class="mt-4 flex w-full max-w-full items-start gap-4 px-1">
					<span class="bar-brand mt-2 h-[2px] w-9 shrink-0"></span>
					<div class="min-w-0">
						<span data-vinilart-lightbox-category class="eyebrow text-cyan"></span>
						<p data-vinilart-lightbox-title class="mt-1 font-display text-lg font-extrabold uppercase sm:text-xl"></p>
						<p data-vinilart-lightbox-text class="mt-1 text-sm text-foreground/75 sm:text-base"></p>
					</div>
				</div>
			</div>
		</div>
		<?php
	endif;
}

/**
 * Icone de seta (igual ao usado no site).
 *
 * @param string $class Classes.
 */
function vinilart_icon_arrow( $class = 'size-4' ) {
	?>
	<svg class="<?php echo esc_attr( $class ); ?>" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
	<?php
}
