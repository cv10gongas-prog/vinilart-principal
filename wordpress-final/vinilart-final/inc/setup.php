<?php
/**
 * "Configurar VinilArt": cria paginas, menus, categorias e projetos.
 * Pode ser executado varias vezes sem duplicar nada.
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Importa um ficheiro do tema para a biblioteca de media (uma unica vez).
 *
 * @param string $rel Caminho relativo dentro de assets/img (ex: portfolio/x.jpg).
 * @return int Attachment ID ou 0.
 */
function vinilart_import_asset( $rel ) {
	$rel = ltrim( $rel, '/' );
	$map = get_option( 'vinilart_media_map', array() );

	if ( ! is_array( $map ) ) {
		$map = array();
	}

	if ( isset( $map[ $rel ] ) && get_post( (int) $map[ $rel ] ) ) {
		return (int) $map[ $rel ];
	}

	$source = VINILART_DIR . '/assets/img/' . $rel;
	if ( ! file_exists( $source ) ) {
		return 0;
	}

	require_once ABSPATH . 'wp-admin/includes/file.php';
	require_once ABSPATH . 'wp-admin/includes/media.php';
	require_once ABSPATH . 'wp-admin/includes/image.php';

	$upload = wp_upload_bits( basename( $rel ), null, file_get_contents( $source ) ); // phpcs:ignore WordPress.WP.AlternativeFunctions
	if ( ! empty( $upload['error'] ) ) {
		return 0;
	}

	$type = wp_check_filetype( $upload['file'] );

	$attachment_id = wp_insert_attachment(
		array(
			'post_mime_type' => $type['type'],
			'post_title'     => sanitize_text_field( pathinfo( $rel, PATHINFO_FILENAME ) ),
			'post_status'    => 'inherit',
		),
		$upload['file']
	);

	if ( is_wp_error( $attachment_id ) || ! $attachment_id ) {
		return 0;
	}

	wp_update_attachment_metadata( $attachment_id, wp_generate_attachment_metadata( $attachment_id, $upload['file'] ) );

	$map[ $rel ] = (int) $attachment_id;
	update_option( 'vinilart_media_map', $map );

	return (int) $attachment_id;
}

/**
 * Corre a configuracao completa.
 *
 * @return array Relatorio.
 */
function vinilart_run_setup() {
	$report = array(
		'paginas'    => array(),
		'projetos'   => 0,
		'imagens'    => 0,
		'menu'       => '',
	);

	// 1. Paginas.
	$ids = array();
	foreach ( vinilart_pages() as $key => $page ) {
		$title = $page['label'];
		$slug  = '' === $page['slug'] ? 'inicio' : $page['slug'];

		$existing = get_page_by_path( $slug );

		if ( ! $existing ) {
			$query = new WP_Query(
				array(
					'post_type'      => 'page',
					'post_status'    => 'any',
					'posts_per_page' => 1,
					'meta_key'       => '_vinilart_page',
					'meta_value'     => $key,
				)
			);
			$existing = $query->posts ? $query->posts[0] : null;
			wp_reset_postdata();
		}

		if ( $existing ) {
			$id = $existing->ID;
			wp_update_post(
				array(
					'ID'          => $id,
					'post_status' => 'publish',
				)
			);
		} else {
			$id = wp_insert_post(
				array(
					'post_type'   => 'page',
					'post_title'  => $title,
					'post_name'   => $slug,
					'post_status' => 'publish',
				)
			);
		}

		if ( ! is_wp_error( $id ) && $id ) {
			update_post_meta( $id, '_vinilart_page', $key );
			$ids[ $key ]         = $id;
			$report['paginas'][] = $title;
		}
	}

	// 1b. Remove conteudo de exemplo do WordPress (apenas se nao foi editado).
	$samples = array(
		array( 'path' => 'sample-page', 'type' => 'page' ),
		array( 'path' => 'hello-world', 'type' => 'post' ),
	);
	foreach ( $samples as $sample ) {
		$sample_post = get_page_by_path( $sample['path'], OBJECT, $sample['type'] );
		if ( $sample_post
			&& 'trash' !== $sample_post->post_status
			&& '' === get_post_meta( $sample_post->ID, '_vinilart_page', true )
			&& $sample_post->post_date_gmt === $sample_post->post_modified_gmt ) {
			wp_trash_post( $sample_post->ID );
		}
	}

	// 2. Pagina inicial.
	if ( isset( $ids['home'] ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $ids['home'] );
	}

	// 3. Permalinks "bonitos".
	if ( '' === get_option( 'permalink_structure' ) ) {
		update_option( 'permalink_structure', '/%postname%/' );
	}
	flush_rewrite_rules();

	// 4. Menus.
	$menu_name = 'VinilArt — Principal';
	$menu      = wp_get_nav_menu_object( $menu_name );
	$menu_id   = $menu ? (int) $menu->term_id : (int) wp_create_nav_menu( $menu_name );

	if ( $menu_id && ! is_wp_error( $menu_id ) ) {
		$items    = wp_get_nav_menu_items( $menu_id );
		$existing = array();
		if ( $items ) {
			foreach ( $items as $item ) {
				$existing[ $item->title ] = $item;
			}
		}

		$wanted = array(
			array( 'title' => 'Início', 'page' => 'home' ),
			array( 'title' => 'Serviços', 'page' => 'servicos' ),
			array( 'title' => 'Portefólio', 'page' => 'portfolio' ),
			array( 'title' => 'Sobre', 'page' => 'sobre' ),
			array( 'title' => 'VinilArt Sport', 'url' => home_url( '/#vinilart-sport' ) ),
			array( 'title' => 'Contactos', 'page' => 'contactos' ),
		);

		$position = 0;
		foreach ( $wanted as $entry ) {
			++$position;

			$args = array(
				'menu-item-title'     => $entry['title'],
				'menu-item-status'    => 'publish',
				'menu-item-position'  => $position,
			);

			if ( isset( $entry['page'] ) && isset( $ids[ $entry['page'] ] ) ) {
				$args['menu-item-object']    = 'page';
				$args['menu-item-object-id'] = $ids[ $entry['page'] ];
				$args['menu-item-type']      = 'post_type';
			} else {
				$args['menu-item-type'] = 'custom';
				$args['menu-item-url']  = $entry['url'];
			}

			$item_id = isset( $existing[ $entry['title'] ] ) ? (int) $existing[ $entry['title'] ]->db_id : 0;
			wp_update_nav_menu_item( $menu_id, $item_id, $args );
		}

		$locations              = get_theme_mod( 'nav_menu_locations', array() );
		$locations['principal'] = $menu_id;
		$locations['rodape']    = isset( $locations['rodape'] ) && $locations['rodape'] ? $locations['rodape'] : $menu_id;
		set_theme_mod( 'nav_menu_locations', $locations );

		$report['menu'] = $menu_name;
	}

	// 5. Projetos do portefolio.
	$projects = include VINILART_DIR . '/inc/data/projetos.php';
	$order    = 0;

	foreach ( $projects as $project ) {
		++$order;

		$existing = get_page_by_path( $project['slug'], OBJECT, 'vinilart_projeto' );

		$post_args = array(
			'post_type'    => 'vinilart_projeto',
			'post_title'   => $project['title'],
			'post_name'    => $project['slug'],
			'post_excerpt' => $project['excerpt'],
			'post_status'  => 'publish',
			'menu_order'   => $order,
		);

		if ( $existing ) {
			$post_args['ID'] = $existing->ID;
			$post_id         = wp_update_post( $post_args );
		} else {
			$post_id = wp_insert_post( $post_args );
			++$report['projetos'];
		}

		if ( is_wp_error( $post_id ) || ! $post_id ) {
			continue;
		}

		update_post_meta( $post_id, '_vinilart_tone', $project['tone'] );
		update_post_meta( $post_id, '_vinilart_ratio', $project['ratio'] );
		update_post_meta( $post_id, '_vinilart_featured', $project['featured'] ? '1' : '' );

		wp_set_object_terms( $post_id, array( $project['category'] ), 'vinilart_categoria', false );

		if ( ! get_post_thumbnail_id( $post_id ) ) {
			$attachment_id = vinilart_import_asset( $project['image'] );
			if ( $attachment_id ) {
				set_post_thumbnail( $post_id, $attachment_id );
				++$report['imagens'];
			}
		}
	}

	// 6. Ordem das categorias igual ao site aprovado.
	$order_terms = array( 'Interiores', 'Expositores', 'Sinalética', 'Montras', 'Fachadas', 'Identidade Visual' );
	foreach ( $order_terms as $index => $name ) {
		$term = get_term_by( 'name', $name, 'vinilart_categoria' );
		if ( $term ) {
			update_term_meta( $term->term_id, 'vinilart_order', $index );
		}
	}

	update_option( 'vinilart_setup_done', gmdate( 'Y-m-d H:i' ) );

	return $report;
}

/**
 * Pagina do assistente de configuracao.
 */
function vinilart_page_setup() {
	$report = null;

	if ( isset( $_POST['vinilart_setup_nonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['vinilart_setup_nonce'] ) ), 'vinilart_setup' ) && current_user_can( 'manage_options' ) ) {
		$report = vinilart_run_setup();
	}

	$done = get_option( 'vinilart_setup_done', '' );
	?>
	<div class="wrap vinilart-admin">
		<h1><?php esc_html_e( 'Configurar VinilArt', 'vinilart' ); ?></h1>

		<?php if ( $report ) : ?>
			<div class="notice notice-success">
				<p><strong><?php esc_html_e( 'Site configurado com sucesso.', 'vinilart' ); ?></strong></p>
				<ul style="list-style:disc;margin-left:20px">
					<li><?php printf( esc_html__( 'Páginas: %s', 'vinilart' ), esc_html( implode( ', ', $report['paginas'] ) ) ); ?></li>
					<li><?php printf( esc_html__( 'Novos projetos criados: %d', 'vinilart' ), (int) $report['projetos'] ); ?></li>
					<li><?php printf( esc_html__( 'Fotografias importadas: %d', 'vinilart' ), (int) $report['imagens'] ); ?></li>
					<li><?php printf( esc_html__( 'Menu: %s', 'vinilart' ), esc_html( $report['menu'] ) ); ?></li>
				</ul>
				<p><a class="button button-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>" target="_blank"><?php esc_html_e( 'Ver o site', 'vinilart' ); ?></a></p>
			</div>
		<?php endif; ?>

		<div class="vinilart-setup-card">
			<h2><?php esc_html_e( 'O que este botão faz', 'vinilart' ); ?></h2>
			<ul>
				<li><?php esc_html_e( 'Cria as páginas Início, Serviços, Portefólio, Sobre e Contactos.', 'vinilart' ); ?></li>
				<li><?php esc_html_e( 'Define a página inicial e os endereços das páginas.', 'vinilart' ); ?></li>
				<li><?php esc_html_e( 'Cria o menu do site com todas as ligações.', 'vinilart' ); ?></li>
				<li><?php esc_html_e( 'Importa os projetos do portefólio, com categorias e fotografias.', 'vinilart' ); ?></li>
			</ul>
			<p><?php esc_html_e( 'Podes clicar quantas vezes quiseres: nada é duplicado e nada do que editaste é apagado.', 'vinilart' ); ?></p>

			<?php if ( $done ) : ?>
				<p class="description"><?php printf( esc_html__( 'Última configuração: %s', 'vinilart' ), esc_html( $done ) ); ?></p>
			<?php endif; ?>

			<form method="post">
				<?php wp_nonce_field( 'vinilart_setup', 'vinilart_setup_nonce' ); ?>
				<?php submit_button( __( 'Configurar VinilArt', 'vinilart' ), 'primary large' ); ?>
			</form>
		</div>

		<div class="vinilart-setup-card" style="margin-top:20px">
			<h2><?php esc_html_e( 'Onde edito o quê', 'vinilart' ); ?></h2>
			<ul>
				<li><?php esc_html_e( 'VinilArt → Textos e imagens: todos os títulos, parágrafos, botões e imagens de cada página.', 'vinilart' ); ?></li>
				<li><?php esc_html_e( 'VinilArt → Secções: ordem das secções e ligar/desligar secções.', 'vinilart' ); ?></li>
				<li><?php esc_html_e( 'VinilArt → Contactos e marca: telefone, emails, morada, Instagram, mapa, logótipos e email que recebe os orçamentos.', 'vinilart' ); ?></li>
				<li><?php esc_html_e( 'VinilArt → SEO: título, descrição e imagem de partilha de cada página.', 'vinilart' ); ?></li>
				<li><?php esc_html_e( 'Projetos: adicionar, editar, reordenar ou remover trabalhos do portefólio.', 'vinilart' ); ?></li>
				<li><?php esc_html_e( 'Aparência → Menus: nomes e ordem das ligações do menu.', 'vinilart' ); ?></li>
			</ul>
		</div>
	</div>
	<?php
}

/**
 * Aviso depois de ativar o tema.
 */
function vinilart_setup_notice() {
	if ( get_option( 'vinilart_setup_done', '' ) ) {
		return;
	}

	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	?>
	<div class="notice notice-info">
		<p>
			<strong><?php esc_html_e( 'VinilArt:', 'vinilart' ); ?></strong>
			<?php esc_html_e( 'falta um passo para o site ficar igual ao aprovado.', 'vinilart' ); ?>
			<a class="button button-primary" href="<?php echo esc_url( admin_url( 'admin.php?page=vinilart' ) ); ?>"><?php esc_html_e( 'Configurar VinilArt', 'vinilart' ); ?></a>
		</p>
	</div>
	<?php
}
add_action( 'admin_notices', 'vinilart_setup_notice' );
