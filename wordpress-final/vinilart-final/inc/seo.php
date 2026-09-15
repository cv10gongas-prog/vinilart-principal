<?php
/**
 * SEO editavel por pagina (titulo, descricao, imagem de partilha).
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Paginas do site e SEO por defeito (igual ao site aprovado).
 *
 * @return array
 */
function vinilart_pages() {
	return array(
		'home'      => array(
			'label'       => __( 'Início', 'vinilart' ),
			'slug'        => '',
			'title'       => 'VinilArt — Personalização, decoração e comunicação visual | Oeiras',
			'description' => 'VinilArt em Oeiras: logotipos 3D, design, impressão, decoração de montras, interiores e viaturas, brindes e estampagem. Saber fazer… como deve ser.',
		),
		'servicos'  => array(
			'label'       => __( 'Serviços', 'vinilart' ),
			'slug'        => 'servicos',
			'title'       => 'Serviços — Logotipos 3D, impressão, montras e viaturas | VinilArt',
			'description' => 'Conhece os serviços VinilArt: logotipos 3D, design, impressão, decoração de montras, interiores e viaturas, brindes e estampagem.',
		),
		'portfolio' => array(
			'label'       => __( 'Portefólio', 'vinilart' ),
			'slug'        => 'portfolio',
			'title'       => 'Portefólio — Trabalhos realizados | VinilArt',
			'description' => 'Galeria de trabalhos reais da VinilArt: viaturas, montras, interiores, estampagem, sinalética e brindes.',
		),
		'sobre'     => array(
			'label'       => __( 'Sobre', 'vinilart' ),
			'slug'        => 'sobre',
			'title'       => 'Sobre a VinilArt — Saber fazer… como deve ser',
			'description' => 'Quem somos, como trabalhamos e o que nos move: personalização, decoração e comunicação visual feitas com rigor em Oeiras.',
		),
		'contactos' => array(
			'label'       => __( 'Contactos', 'vinilart' ),
			'slug'        => 'contactos',
			'title'       => 'Contactos e pedido de orçamento | VinilArt Oeiras',
			'description' => 'Fala com a VinilArt: pedido de orçamento, morada em Oeiras, telefone e email. Respondemos a cada projeto de forma personalizada.',
		),
	);
}

/**
 * Chave da pagina atual.
 *
 * @return string
 */
function vinilart_current_page_key() {
	if ( is_front_page() ) {
		return 'home';
	}

	if ( is_page() ) {
		$key = get_post_meta( get_queried_object_id(), '_vinilart_page', true );
		if ( $key ) {
			return $key;
		}

		$slug = get_post_field( 'post_name', get_queried_object_id() );
		foreach ( vinilart_pages() as $page_key => $page ) {
			if ( $page['slug'] === $slug ) {
				return $page_key;
			}
		}
	}

	return '';
}

/**
 * Titulo da pagina.
 *
 * @param string $title Titulo.
 * @return string
 */
function vinilart_document_title( $title ) {
	$key   = vinilart_current_page_key();
	$pages = vinilart_pages();

	if ( $key && isset( $pages[ $key ] ) ) {
		return vinilart_opt( 'seo_title_' . $key, $pages[ $key ]['title'] );
	}

	return $title;
}
add_filter( 'pre_get_document_title', 'vinilart_document_title' );

/**
 * Meta tags.
 */
function vinilart_meta_tags() {
	$key   = vinilart_current_page_key();
	$pages = vinilart_pages();

	$title       = '';
	$description = '';
	$image       = '';

	if ( $key && isset( $pages[ $key ] ) ) {
		$title       = vinilart_opt( 'seo_title_' . $key, $pages[ $key ]['title'] );
		$description = vinilart_opt( 'seo_desc_' . $key, $pages[ $key ]['description'] );
		$image_id    = (int) vinilart_opt( 'seo_img_' . $key, 0 );
		if ( $image_id > 0 ) {
			$image = wp_get_attachment_image_url( $image_id, 'full' );
		}
	} elseif ( is_singular() ) {
		$title       = get_the_title();
		$description = wp_strip_all_tags( get_the_excerpt() );
		$image       = get_the_post_thumbnail_url( null, 'full' );
	}

	if ( ! $title ) {
		return;
	}

	echo "\n";
	printf( '<meta name="description" content="%s" />' . "\n", esc_attr( $description ) );
	printf( '<meta property="og:type" content="website" />' . "\n" );
	printf( '<meta property="og:site_name" content="%s" />' . "\n", esc_attr( get_bloginfo( 'name' ) ) );
	printf( '<meta property="og:locale" content="pt_PT" />' . "\n" );
	printf( '<meta property="og:title" content="%s" />' . "\n", esc_attr( $title ) );
	printf( '<meta property="og:description" content="%s" />' . "\n", esc_attr( $description ) );
	printf( '<meta property="og:url" content="%s" />' . "\n", esc_url( home_url( add_query_arg( array() ) ) ) );
	printf( '<meta name="twitter:card" content="summary_large_image" />' . "\n" );
	printf( '<meta name="twitter:title" content="%s" />' . "\n", esc_attr( $title ) );
	printf( '<meta name="twitter:description" content="%s" />' . "\n", esc_attr( $description ) );

	if ( $image ) {
		printf( '<meta property="og:image" content="%s" />' . "\n", esc_url( $image ) );
		printf( '<meta name="twitter:image" content="%s" />' . "\n", esc_url( $image ) );
	}

	$canonical = is_singular() ? get_permalink() : home_url( '/' );
	printf( '<link rel="canonical" href="%s" />' . "\n", esc_url( $canonical ) );

	// Dados estruturados da empresa.
	$contact = vinilart_contact();
	$schema  = array(
		'@context' => 'https://schema.org',
		'@type'    => 'LocalBusiness',
		'name'     => get_bloginfo( 'name' ),
		'url'      => home_url( '/' ),
		'email'    => $contact['email'],
		'telephone' => $contact['phone'],
		'address'  => array(
			'@type'           => 'PostalAddress',
			'streetAddress'   => $contact['street'],
			'postalCode'      => $contact['zip'],
			'addressLocality' => vinilart_opt( 'city', 'Oeiras' ),
			'addressCountry'  => 'PT',
		),
	);

	echo '<script type="application/ld+json">' . wp_json_encode( $schema ) . '</script>' . "\n";
}
add_action( 'wp_head', 'vinilart_meta_tags', 5 );
