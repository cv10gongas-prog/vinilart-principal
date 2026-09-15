<?php
/**
 * Areas de administracao em portugues: conteudo, secoes, contactos e SEO.
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Menu do tema.
 */
function vinilart_admin_menu() {
	add_menu_page(
		__( 'VinilArt', 'vinilart' ),
		__( 'VinilArt', 'vinilart' ),
		'manage_options',
		'vinilart',
		'vinilart_page_setup',
		'dashicons-art',
		3
	);

	add_submenu_page( 'vinilart', __( 'Configurar VinilArt', 'vinilart' ), __( 'Configurar', 'vinilart' ), 'manage_options', 'vinilart', 'vinilart_page_setup' );
	add_submenu_page( 'vinilart', __( 'Textos e imagens', 'vinilart' ), __( 'Textos e imagens', 'vinilart' ), 'manage_options', 'vinilart-conteudo', 'vinilart_page_content' );
	add_submenu_page( 'vinilart', __( 'Secções das páginas', 'vinilart' ), __( 'Secções', 'vinilart' ), 'manage_options', 'vinilart-seccoes', 'vinilart_page_sections' );
	add_submenu_page( 'vinilart', __( 'Contactos e marca', 'vinilart' ), __( 'Contactos e marca', 'vinilart' ), 'manage_options', 'vinilart-contactos', 'vinilart_page_contacts' );
	add_submenu_page( 'vinilart', __( 'SEO das páginas', 'vinilart' ), __( 'SEO', 'vinilart' ), 'manage_options', 'vinilart-seo', 'vinilart_page_seo' );
}
add_action( 'admin_menu', 'vinilart_admin_menu' );

/**
 * Scripts do admin (selecao de imagens).
 *
 * @param string $hook Pagina.
 */
function vinilart_admin_assets( $hook ) {
	if ( false === strpos( $hook, 'vinilart' ) ) {
		return;
	}

	wp_enqueue_media();
	wp_enqueue_script( 'vinilart-admin', VINILART_URI . '/assets/js/admin.js', array( 'jquery' ), VINILART_VERSION, true );
	wp_enqueue_style( 'vinilart-admin', VINILART_URI . '/assets/css/admin.css', array(), VINILART_VERSION );
}
add_action( 'admin_enqueue_scripts', 'vinilart_admin_assets' );

/**
 * Separadores de pagina.
 *
 * @param string $screen Slug do ecra.
 * @param string $active Pagina ativa.
 */
function vinilart_admin_tabs( $screen, $active ) {
	echo '<h2 class="nav-tab-wrapper">';
	foreach ( vinilart_pages() as $key => $page ) {
		printf(
			'<a class="nav-tab %s" href="%s">%s</a>',
			$key === $active ? 'nav-tab-active' : '',
			esc_url( admin_url( 'admin.php?page=' . $screen . '&pagina=' . $key ) ),
			esc_html( $page['label'] )
		);
	}
	echo '</h2>';
}

/**
 * Pagina pedida pelo utilizador.
 *
 * @return string
 */
function vinilart_requested_page() {
	$pages = vinilart_pages();
	$key   = isset( $_GET['pagina'] ) ? sanitize_key( wp_unslash( $_GET['pagina'] ) ) : 'home';
	return isset( $pages[ $key ] ) ? $key : 'home';
}

/**
 * Campo de imagem com selecao na biblioteca de media.
 *
 * @param string $name    Nome do input.
 * @param int    $value   ID atual.
 * @param string $preview URL a mostrar quando nao ha escolha.
 */
function vinilart_image_field( $name, $value, $preview = '' ) {
	$url = $value ? wp_get_attachment_image_url( (int) $value, 'medium' ) : $preview;
	?>
	<div class="vinilart-image" data-vinilart-image>
		<img src="<?php echo esc_url( $url ); ?>" alt="" data-vinilart-image-preview />
		<input type="hidden" name="<?php echo esc_attr( $name ); ?>" value="<?php echo esc_attr( (int) $value ); ?>" data-vinilart-image-value />
		<p>
			<button type="button" class="button" data-vinilart-image-pick><?php esc_html_e( 'Escolher imagem', 'vinilart' ); ?></button>
			<button type="button" class="button-link" data-vinilart-image-clear data-default="<?php echo esc_url( $preview ); ?>"><?php esc_html_e( 'Repor original', 'vinilart' ); ?></button>
		</p>
	</div>
	<?php
}

/**
 * Pagina: textos e imagens.
 */
function vinilart_page_content() {
	$page   = vinilart_requested_page();
	$fields = vinilart_fields();
	$saved  = false;

	if ( isset( $_POST['vinilart_content_nonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['vinilart_content_nonce'] ) ), 'vinilart_content' ) && current_user_can( 'manage_options' ) ) {
		foreach ( $fields as $key => $field ) {
			if ( $field['page'] !== $page ) {
				continue;
			}

			if ( 'image' === $field['type'] ) {
				if ( isset( $_POST[ 'img_' . $key ] ) ) {
					update_option( 'vinilart_img_' . $key, (int) $_POST[ 'img_' . $key ] );
				}
				if ( isset( $_POST[ 'alt_' . $key ] ) ) {
					update_option( 'vinilart_f_' . $key . '_alt', sanitize_text_field( wp_unslash( $_POST[ 'alt_' . $key ] ) ) );
				}
				continue;
			}

			if ( isset( $_POST[ 'f_' . $key ] ) ) {
				$value = wp_unslash( $_POST[ 'f_' . $key ] );
				$value = 'textarea' === $field['type'] ? sanitize_textarea_field( $value ) : sanitize_text_field( $value );
				update_option( 'vinilart_f_' . $key, $value );
			}
		}
		$saved = true;
	}

	$used   = vinilart_used_fields();
	$groups = array();
	foreach ( $fields as $key => $field ) {
		if ( $field['page'] !== $page || empty( $used[ $key ] ) ) {
			continue;
		}
		$parts                    = explode( '_', $key );
		$group                    = isset( $parts[1] ) ? $parts[1] : 's01';
		$groups[ $group ][ $key ] = $field;
	}
	ksort( $groups );
	$open = isset( $_GET['secao'] ) ? sanitize_key( wp_unslash( $_GET['secao'] ) ) : '';
	?>
	<div class="wrap vinilart-admin">
		<h1><?php esc_html_e( 'Textos e imagens do site', 'vinilart' ); ?></h1>
		<p class="description"><?php esc_html_e( 'Escolhe a página, abre a secção que queres mudar e edita os textos ou imagens. Deixa um campo vazio para voltar ao conteúdo original.', 'vinilart' ); ?></p>
		<?php vinilart_admin_tabs( 'vinilart-conteudo', $page ); ?>
		<?php if ( $saved ) : ?>
			<div class="notice notice-success"><p><?php esc_html_e( 'Alterações guardadas.', 'vinilart' ); ?></p></div>
		<?php endif; ?>

		<div class="vinilart-toolbar">
			<button type="button" class="button" data-vinilart-open-all><?php esc_html_e( 'Abrir tudo', 'vinilart' ); ?></button>
			<button type="button" class="button" data-vinilart-close-all><?php esc_html_e( 'Fechar tudo', 'vinilart' ); ?></button>
			<span class="vinilart-search-wrap">
				<label class="screen-reader-text" for="vinilart-search"><?php esc_html_e( 'Procurar campo', 'vinilart' ); ?></label>
				<input type="search" id="vinilart-search" placeholder="<?php esc_attr_e( 'Procurar texto…', 'vinilart' ); ?>" data-vinilart-search />
			</span>
		</div>

		<form method="post">
			<?php wp_nonce_field( 'vinilart_content', 'vinilart_content_nonce' ); ?>

			<?php foreach ( $groups as $group => $list ) : ?>
				<?php list( $title, $note ) = vinilart_section_label( $page, $group ); ?>
				<details class="vinilart-card" data-vinilart-card <?php echo ( $open === $group || 1 === count( $groups ) ) ? 'open' : ''; ?>>
					<summary>
						<span class="vinilart-card-title"><?php echo esc_html( $title ); ?></span>
						<span class="vinilart-card-count"><?php echo esc_html( sprintf( _n( '%s campo', '%s campos', count( $list ), 'vinilart' ), number_format_i18n( count( $list ) ) ) ); ?></span>
					</summary>
					<div class="vinilart-card-body">
						<?php if ( $note ) : ?>
							<p class="description"><?php echo esc_html( $note ); ?></p>
						<?php endif; ?>
						<table class="form-table"><tbody>
						<?php foreach ( $list as $key => $field ) : ?>
							<?php
							$role = isset( $field['role'] ) ? $field['role'] : __( 'Texto', 'vinilart' );
							$hint = isset( $field['default'] ) ? $field['default'] : '';
							if ( 'image' === $field['type'] ) {
								$hint = '';
							}
							?>
							<tr data-vinilart-field data-search="<?php echo esc_attr( strtolower( $role . ' ' . $hint ) ); ?>">
								<th scope="row">
									<label for="f_<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $role ); ?></label>
									<?php if ( $hint ) : ?>
										<span class="vinilart-hint"><?php echo esc_html( mb_substr( $hint, 0, 60 ) . ( mb_strlen( $hint ) > 60 ? '…' : '' ) ); ?></span>
									<?php endif; ?>
								</th>
								<td>
									<?php if ( 'image' === $field['type'] ) : ?>
										<?php vinilart_image_field( 'img_' . $key, (int) get_option( 'vinilart_img_' . $key, 0 ), vinilart_asset_url( $field['default'] ) ); ?>
										<p>
											<label><?php esc_html_e( 'Texto alternativo (descrição da imagem)', 'vinilart' ); ?><br />
											<input type="text" class="large-text" name="alt_<?php echo esc_attr( $key ); ?>" value="<?php echo esc_attr( get_option( 'vinilart_f_' . $key . '_alt', '' ) ); ?>" /></label>
										</p>
									<?php elseif ( 'textarea' === $field['type'] ) : ?>
										<textarea id="f_<?php echo esc_attr( $key ); ?>" name="f_<?php echo esc_attr( $key ); ?>" rows="3" class="large-text"><?php echo esc_textarea( vinilart_get( $key ) ); ?></textarea>
									<?php else : ?>
										<input type="text" id="f_<?php echo esc_attr( $key ); ?>" name="f_<?php echo esc_attr( $key ); ?>" value="<?php echo esc_attr( vinilart_get( $key ) ); ?>" class="large-text" />
									<?php endif; ?>
								</td>
							</tr>
						<?php endforeach; ?>
						</tbody></table>
					</div>
				</details>
			<?php endforeach; ?>

			<?php submit_button( __( 'Guardar alterações', 'vinilart' ) ); ?>
		</form>
	</div>
	<?php
}

/**
 * Pagina: secoes.
 */
function vinilart_page_sections() {
	$page     = vinilart_requested_page();
	$defaults = vinilart_default_sections();
	$list     = isset( $defaults[ $page ] ) ? $defaults[ $page ] : array();
	$saved    = false;

	if ( isset( $_POST['vinilart_sections_nonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['vinilart_sections_nonce'] ) ), 'vinilart_sections' ) && current_user_can( 'manage_options' ) ) {
		$rows = array();
		foreach ( $list as $section ) {
			$key            = $section['key'];
			$order          = isset( $_POST[ 'ordem_' . $key ] ) ? (int) $_POST[ 'ordem_' . $key ] : 0;
			$rows[]         = array(
				'key'     => $key,
				'order'   => $order,
				'visible' => isset( $_POST[ 'ver_' . $key ] ),
			);
		}

		usort(
			$rows,
			function ( $a, $b ) {
				return $a['order'] <=> $b['order'];
			}
		);

		update_option( 'vinilart_sections_' . $page, $rows );
		$saved = true;
	}

	$current = get_option( 'vinilart_sections_' . $page, array() );
	$order   = array();
	$visible = array();
	foreach ( $list as $index => $section ) {
		$order[ $section['key'] ]   = $index + 1;
		$visible[ $section['key'] ] = true;
	}
	if ( is_array( $current ) ) {
		foreach ( $current as $index => $row ) {
			if ( isset( $row['key'] ) && isset( $order[ $row['key'] ] ) ) {
				$order[ $row['key'] ]   = $index + 1;
				$visible[ $row['key'] ] = ! empty( $row['visible'] );
			}
		}
	}
	?>
	<div class="wrap vinilart-admin">
		<h1><?php esc_html_e( 'Secções das páginas', 'vinilart' ); ?></h1>
		<p class="description"><?php esc_html_e( 'Muda a ordem (número mais baixo aparece primeiro) ou desliga uma secção sem a apagar.', 'vinilart' ); ?></p>
		<?php vinilart_admin_tabs( 'vinilart-seccoes', $page ); ?>
		<?php if ( $saved ) : ?>
			<div class="notice notice-success"><p><?php esc_html_e( 'Secções atualizadas.', 'vinilart' ); ?></p></div>
		<?php endif; ?>
		<form method="post">
			<?php wp_nonce_field( 'vinilart_sections', 'vinilart_sections_nonce' ); ?>
			<table class="widefat striped">
				<thead><tr>
					<th style="width:90px"><?php esc_html_e( 'Ordem', 'vinilart' ); ?></th>
					<th><?php esc_html_e( 'Secção', 'vinilart' ); ?></th>
					<th style="width:120px"><?php esc_html_e( 'Mostrar', 'vinilart' ); ?></th>
				</tr></thead>
				<tbody>
				<?php foreach ( $list as $section ) : ?>
					<tr>
						<td><input type="number" min="1" name="ordem_<?php echo esc_attr( $section['key'] ); ?>" value="<?php echo esc_attr( $order[ $section['key'] ] ); ?>" style="width:70px" /></td>
						<td>
							<?php list( $s_title, $s_note ) = vinilart_section_label( $page, sprintf( 's%02d', (int) substr( $section['key'], 1, 2 ) ) ); ?>
							<strong><?php echo esc_html( $s_title ); ?></strong>
							<?php if ( $s_note ) : ?><br /><span class="description"><?php echo esc_html( $s_note ); ?></span><?php endif; ?>
						</td>
						<td><label><input type="checkbox" name="ver_<?php echo esc_attr( $section['key'] ); ?>" value="1" <?php checked( $visible[ $section['key'] ] ); ?> /> <?php esc_html_e( 'Sim', 'vinilart' ); ?></label></td>
					</tr>
				<?php endforeach; ?>
				</tbody>
			</table>
			<?php submit_button( __( 'Guardar secções', 'vinilart' ) ); ?>
		</form>
	</div>
	<?php
}

/**
 * Campos de contacto e marca.
 *
 * @return array
 */
function vinilart_contact_fields() {
	return array(
		'phone'         => array( __( 'Telefone', 'vinilart' ), '+351 913 447 705' ),
		'email'         => array( __( 'Email geral', 'vinilart' ), 'geral@vinilart.pt' ),
		'email_support' => array( __( 'Email de suporte', 'vinilart' ), 'suporte@vinilart.pt' ),
		'form_email'    => array( __( 'Email que recebe os pedidos de orçamento', 'vinilart' ), 'geral@vinilart.pt' ),
		'street'        => array( __( 'Rua', 'vinilart' ), 'Rua São Luís 7A' ),
		'zip'           => array( __( 'Código postal e país', 'vinilart' ), '2780-036 Portugal' ),
		'city'          => array( __( 'Localidade', 'vinilart' ), 'Oeiras' ),
		'instagram'     => array( __( 'Instagram VinilArt (nome)', 'vinilart' ), '@vinilart.pt' ),
		'instagram_url' => array( __( 'Instagram VinilArt (link)', 'vinilart' ), 'https://www.instagram.com/vinilart.pt/' ),
		'ig_sport'      => array( __( 'Instagram VinilArt Sport (nome)', 'vinilart' ), '@vinilartsport' ),
		'ig_sport_url'  => array( __( 'Instagram VinilArt Sport (link)', 'vinilart' ), 'https://www.instagram.com/vinilartsport/' ),
		'map'           => array( __( 'Link do mapa (Google Maps embed)', 'vinilart' ), 'https://www.google.com/maps?q=Rua+S%C3%A3o+Lu%C3%ADs+7A,+2780-036+Oeiras,+Portugal&z=16&output=embed' ),
		'copyright'     => array( __( 'Texto do rodapé (direitos)', 'vinilart' ), '© ' . gmdate( 'Y' ) . ' VinilArt · Oeiras, Portugal' ),
		'slogan'        => array( __( 'Slogan do rodapé', 'vinilart' ), 'Saber fazer… como deve ser.' ),
		'cta_label'     => array( __( 'Texto do botão do menu', 'vinilart' ), 'Pedir orçamento' ),
	);
}

/**
 * Pagina: contactos e marca.
 */
function vinilart_page_contacts() {
	$saved  = false;
	$fields = vinilart_contact_fields();

	if ( isset( $_POST['vinilart_contacts_nonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['vinilart_contacts_nonce'] ) ), 'vinilart_contacts' ) && current_user_can( 'manage_options' ) ) {
		foreach ( $fields as $key => $field ) {
			if ( ! isset( $_POST[ 'o_' . $key ] ) ) {
				continue;
			}
			$value = wp_unslash( $_POST[ 'o_' . $key ] );
			if ( in_array( $key, array( 'email', 'email_support', 'form_email' ), true ) ) {
				$value = sanitize_email( $value );
			} elseif ( in_array( $key, array( 'instagram_url', 'ig_sport_url', 'map' ), true ) ) {
				$value = esc_url_raw( $value );
			} else {
				$value = sanitize_text_field( $value );
			}
			update_option( 'vinilart_o_' . $key, $value );
		}

		foreach ( array( 'logo_header', 'logo_footer' ) as $logo ) {
			if ( isset( $_POST[ 'o_' . $logo ] ) ) {
				update_option( 'vinilart_o_' . $logo, (int) $_POST[ 'o_' . $logo ] );
			}
		}
		$saved = true;
	}
	?>
	<div class="wrap vinilart-admin">
		<h1><?php esc_html_e( 'Contactos e marca', 'vinilart' ); ?></h1>
		<p class="description"><?php esc_html_e( 'Estes dados aparecem no menu, no rodapé, na página de contactos e no Google.', 'vinilart' ); ?></p>
		<?php if ( $saved ) : ?>
			<div class="notice notice-success"><p><?php esc_html_e( 'Dados guardados.', 'vinilart' ); ?></p></div>
		<?php endif; ?>
		<form method="post">
			<?php wp_nonce_field( 'vinilart_contacts', 'vinilart_contacts_nonce' ); ?>
			<table class="form-table"><tbody>
			<?php foreach ( $fields as $key => $field ) : ?>
				<tr>
					<th scope="row"><label for="o_<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $field[0] ); ?></label></th>
					<td><input type="text" class="large-text" id="o_<?php echo esc_attr( $key ); ?>" name="o_<?php echo esc_attr( $key ); ?>" value="<?php echo esc_attr( vinilart_opt( $key, $field[1] ) ); ?>" /></td>
				</tr>
			<?php endforeach; ?>
				<tr>
					<th scope="row"><?php esc_html_e( 'Logótipo do menu', 'vinilart' ); ?></th>
					<td><?php vinilart_image_field( 'o_logo_header', (int) vinilart_opt( 'logo_header', 0 ), vinilart_asset_url( '/brand/official/vinilart-logo-horizontal-notagline.png' ) ); ?></td>
				</tr>
				<tr>
					<th scope="row"><?php esc_html_e( 'Logótipo do rodapé', 'vinilart' ); ?></th>
					<td><?php vinilart_image_field( 'o_logo_footer', (int) vinilart_opt( 'logo_footer', 0 ), vinilart_asset_url( '/brand/official/vinilart-wordmark-white.png' ) ); ?></td>
				</tr>
			</tbody></table>
			<?php submit_button( __( 'Guardar', 'vinilart' ) ); ?>
		</form>
	</div>
	<?php
}

/**
 * Pagina: SEO.
 */
function vinilart_page_seo() {
	$pages = vinilart_pages();
	$saved = false;

	if ( isset( $_POST['vinilart_seo_nonce'] ) && wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['vinilart_seo_nonce'] ) ), 'vinilart_seo' ) && current_user_can( 'manage_options' ) ) {
		foreach ( $pages as $key => $page ) {
			if ( isset( $_POST[ 'title_' . $key ] ) ) {
				update_option( 'vinilart_o_seo_title_' . $key, sanitize_text_field( wp_unslash( $_POST[ 'title_' . $key ] ) ) );
			}
			if ( isset( $_POST[ 'desc_' . $key ] ) ) {
				update_option( 'vinilart_o_seo_desc_' . $key, sanitize_textarea_field( wp_unslash( $_POST[ 'desc_' . $key ] ) ) );
			}
			if ( isset( $_POST[ 'img_' . $key ] ) ) {
				update_option( 'vinilart_o_seo_img_' . $key, (int) $_POST[ 'img_' . $key ] );
			}
		}
		$saved = true;
	}
	?>
	<div class="wrap vinilart-admin">
		<h1><?php esc_html_e( 'SEO das páginas', 'vinilart' ); ?></h1>
		<p class="description"><?php esc_html_e( 'Título e descrição que aparecem no Google e nas partilhas. Imagem recomendada: 1200x630 px.', 'vinilart' ); ?></p>
		<?php if ( $saved ) : ?>
			<div class="notice notice-success"><p><?php esc_html_e( 'SEO guardado.', 'vinilart' ); ?></p></div>
		<?php endif; ?>
		<form method="post">
			<?php wp_nonce_field( 'vinilart_seo', 'vinilart_seo_nonce' ); ?>
			<?php foreach ( $pages as $key => $page ) : ?>
				<h2><?php echo esc_html( $page['label'] ); ?></h2>
				<table class="form-table"><tbody>
					<tr>
						<th scope="row"><?php esc_html_e( 'Título', 'vinilart' ); ?></th>
						<td><input type="text" class="large-text" name="title_<?php echo esc_attr( $key ); ?>" value="<?php echo esc_attr( vinilart_opt( 'seo_title_' . $key, $page['title'] ) ); ?>" /></td>
					</tr>
					<tr>
						<th scope="row"><?php esc_html_e( 'Descrição', 'vinilart' ); ?></th>
						<td><textarea class="large-text" rows="2" name="desc_<?php echo esc_attr( $key ); ?>"><?php echo esc_textarea( vinilart_opt( 'seo_desc_' . $key, $page['description'] ) ); ?></textarea></td>
					</tr>
					<tr>
						<th scope="row"><?php esc_html_e( 'Imagem de partilha', 'vinilart' ); ?></th>
						<td><?php vinilart_image_field( 'img_' . $key, (int) vinilart_opt( 'seo_img_' . $key, 0 ) ); ?></td>
					</tr>
				</tbody></table>
			<?php endforeach; ?>
			<?php submit_button( __( 'Guardar SEO', 'vinilart' ) ); ?>
		</form>
	</div>
	<?php
}
