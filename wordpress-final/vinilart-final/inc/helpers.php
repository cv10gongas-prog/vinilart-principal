<?php
/**
 * Helpers de conteudo editavel.
 *
 * Todo o texto e imagem do site passa por estas funcoes. O valor por defeito e
 * exatamente o do site aprovado; quando o cliente edita no WordPress, o valor
 * guardado substitui o defeito sem alterar o HTML/CSS.
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registo de campos gerado a partir do site aprovado.
 *
 * @return array
 */
function vinilart_fields() {
	static $fields = null;
	if ( null === $fields ) {
		$fields = include VINILART_DIR . '/inc/data/fields.php';
	}
	return $fields;
}

/**
 * Secoes por pagina (ordem por defeito).
 *
 * @return array
 */
function vinilart_default_sections() {
	static $sections = null;
	if ( null === $sections ) {
		$sections = include VINILART_DIR . '/inc/data/sections.php';
	}
	return $sections;
}

/**
 * Valor de um campo de texto.
 *
 * @param string $key Chave.
 * @return string
 */
function vinilart_get( $key ) {
	$fields  = vinilart_fields();
	$default = isset( $fields[ $key ]['default'] ) ? $fields[ $key ]['default'] : '';
	$value   = get_option( 'vinilart_f_' . $key, null );

	if ( null === $value || '' === $value ) {
		return $default;
	}

	return $value;
}

/**
 * Imprime um campo de texto (escapado).
 *
 * @param string $key Chave.
 */
function vt( $key ) {
	echo esc_html( vinilart_get( $key ) );
}

/**
 * URL de uma imagem editavel.
 *
 * Ordem: imagem escolhida no WordPress -> imagem importada para a biblioteca
 * de media -> ficheiro incluido no tema.
 *
 * @param string $key Chave.
 * @return string
 */
function vinilart_img( $key ) {
	$fields  = vinilart_fields();
	$default = isset( $fields[ $key ]['default'] ) ? $fields[ $key ]['default'] : '';

	$attachment_id = (int) get_option( 'vinilart_img_' . $key, 0 );
	if ( $attachment_id > 0 ) {
		$url = wp_get_attachment_image_url( $attachment_id, 'full' );
		if ( $url ) {
			return $url;
		}
	}

	return vinilart_asset_url( $default );
}

/**
 * Devolve o URL de um asset do site original (/portfolio/x.jpg, /brand/...).
 *
 * Se o ficheiro ja foi importado para a biblioteca de media, usa esse; caso
 * contrario usa a copia incluida no tema.
 *
 * @param string $path Caminho original.
 * @return string
 */
function vinilart_asset_url( $path ) {
	if ( '' === $path ) {
		return '';
	}

	if ( preg_match( '#^https?://#', $path ) ) {
		return $path;
	}

	$map = get_option( 'vinilart_media_map', array() );
	$rel = ltrim( $path, '/' );

	if ( is_array( $map ) && isset( $map[ $rel ] ) ) {
		$url = wp_get_attachment_image_url( (int) $map[ $rel ], 'full' );
		if ( $url ) {
			return $url;
		}
	}

	return VINILART_URI . '/assets/img/' . $rel;
}

/**
 * URL interno do site.
 *
 * @param string $path Caminho do site original (/servicos, /#vinilart-sport).
 * @return string
 */
function vinilart_url( $path ) {
	$custom = get_option( 'vinilart_links', array() );
	if ( is_array( $custom ) && isset( $custom[ $path ] ) && '' !== $custom[ $path ] ) {
		return $custom[ $path ];
	}

	if ( 0 === strpos( $path, '/#' ) ) {
		return home_url( '/' ) . substr( $path, 2 ) === home_url( '/' ) ? home_url( '/' ) : home_url( '/' ) . '#' . substr( $path, 2 );
	}

	$parts = explode( '#', $path, 2 );
	$page  = vinilart_page_url( $parts[0] );

	if ( isset( $parts[1] ) && '' !== $parts[1] ) {
		$page .= '#' . $parts[1];
	}

	return $page;
}

/**
 * Converte uma rota do site original no permalink WordPress correspondente.
 *
 * @param string $route Rota (/servicos).
 * @return string
 */
function vinilart_page_url( $route ) {
	$route = '/' === $route ? '/' : trim( $route, '/' );

	if ( '/' === $route ) {
		return home_url( '/' );
	}

	$map = array(
		'servicos'  => 'servicos',
		'portfolio' => 'portfolio',
		'sobre'     => 'sobre',
		'contactos' => 'contactos',
	);

	if ( isset( $map[ $route ] ) ) {
		$page = get_page_by_path( $map[ $route ] );
		if ( $page ) {
			return get_permalink( $page );
		}
	}

	return home_url( '/' . $route . '/' );
}

/**
 * Opcao global do tema com defeito.
 *
 * @param string $key     Chave (sem prefixo).
 * @param string $default Valor por defeito.
 * @return string
 */
function vinilart_opt( $key, $default = '' ) {
	$value = get_option( 'vinilart_o_' . $key, null );
	if ( null === $value || '' === $value ) {
		return $default;
	}
	return $value;
}

/**
 * Contactos do site (valores existentes no projeto aprovado).
 *
 * @return array
 */
function vinilart_contact() {
	return array(
		'phone'         => vinilart_opt( 'phone', '+351 913 447 705' ),
		'phone_url'     => 'tel:' . preg_replace( '/[^0-9+]/', '', vinilart_opt( 'phone', '+351913447705' ) ),
		'email'         => vinilart_opt( 'email', 'geral@vinilart.pt' ),
		'email_support' => vinilart_opt( 'email_support', 'suporte@vinilart.pt' ),
		'street'        => vinilart_opt( 'street', 'Rua São Luís 7A' ),
		'zip'           => vinilart_opt( 'zip', '2780-036 Portugal' ),
		'instagram'     => vinilart_opt( 'instagram', '@vinilart.pt' ),
		'instagram_url' => vinilart_opt( 'instagram_url', 'https://www.instagram.com/vinilart.pt/' ),
		'ig_sport'      => vinilart_opt( 'ig_sport', '@vinilartsport' ),
		'ig_sport_url'  => vinilart_opt( 'ig_sport_url', 'https://www.instagram.com/vinilartsport/' ),
		'map'           => vinilart_opt( 'map', 'https://www.google.com/maps?q=Rua+S%C3%A3o+Lu%C3%ADs+7A,+2780-036+Oeiras,+Portugal&z=16&output=embed' ),
	);
}

/**
 * Logo do site (permite substituir no WordPress).
 *
 * @param string $variant 'header' ou 'footer'.
 * @return string
 */
function vinilart_logo_url( $variant = 'header' ) {
	$id = (int) vinilart_opt( 'logo_' . $variant, 0 );
	if ( $id > 0 ) {
		$url = wp_get_attachment_image_url( $id, 'full' );
		if ( $url ) {
			return $url;
		}
	}

	if ( 'header' === $variant ) {
		$custom = get_theme_mod( 'custom_logo' );
		if ( $custom ) {
			$url = wp_get_attachment_image_url( (int) $custom, 'full' );
			if ( $url ) {
				return $url;
			}
		}
		return vinilart_asset_url( '/brand/official/vinilart-logo-horizontal-notagline.png' );
	}

	return vinilart_asset_url( '/brand/official/vinilart-wordmark-white.png' );
}

/**
 * Lista de secoes a mostrar numa pagina, pela ordem definida no WordPress.
 *
 * @param string $page Chave da pagina (home, servicos, ...).
 * @return array
 */
function vinilart_sections( $page ) {
	$defaults = vinilart_default_sections();
	$default  = isset( $defaults[ $page ] ) ? $defaults[ $page ] : array();
	$saved    = get_option( 'vinilart_sections_' . $page, null );

	if ( ! is_array( $saved ) || empty( $saved ) ) {
		return $default;
	}

	$by_key = array();
	foreach ( $default as $section ) {
		$by_key[ $section['key'] ] = $section;
	}

	$out = array();
	foreach ( $saved as $row ) {
		$key = isset( $row['key'] ) ? $row['key'] : '';
		if ( ! isset( $by_key[ $key ] ) ) {
			continue;
		}
		if ( isset( $row['visible'] ) && ! $row['visible'] ) {
			continue;
		}
		$out[] = $by_key[ $key ];
	}

	// Secoes novas (ainda nao guardadas) mantem-se no fim.
	foreach ( $default as $section ) {
		$found = false;
		foreach ( $saved as $row ) {
			if ( isset( $row['key'] ) && $row['key'] === $section['key'] ) {
				$found = true;
				break;
			}
		}
		if ( ! $found ) {
			$out[] = $section;
		}
	}

	return $out;
}

/**
 * Imprime as secoes de uma pagina.
 *
 * @param string $page Chave da pagina.
 */
function vinilart_render_page( $page ) {
	foreach ( vinilart_sections( $page ) as $section ) {
		$override = VINILART_DIR . '/parts/override-' . $page . '-' . $section['key'] . '.php';
		$file     = file_exists( $override ) ? $override : VINILART_DIR . '/parts/' . $section['file'];

		if ( file_exists( $file ) ) {
			include $file;
		}
	}
}
