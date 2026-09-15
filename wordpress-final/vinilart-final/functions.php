<?php
/**
 * Tema VinilArt Final — arranque.
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'VINILART_VERSION', '1.0.0' );
define( 'VINILART_DIR', get_template_directory() );
define( 'VINILART_URI', get_template_directory_uri() );

require_once VINILART_DIR . '/inc/helpers.php';
require_once VINILART_DIR . '/inc/cpt.php';
require_once VINILART_DIR . '/inc/render.php';
require_once VINILART_DIR . '/inc/seo.php';
require_once VINILART_DIR . '/inc/form.php';
require_once VINILART_DIR . '/inc/admin.php';
require_once VINILART_DIR . '/inc/setup.php';

/**
 * Suporte do tema.
 */
function vinilart_setup_theme() {
	load_theme_textdomain( 'vinilart', VINILART_DIR . '/languages' );

	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo', array( 'height' => 50, 'width' => 225, 'flex-height' => true, 'flex-width' => true ) );

	register_nav_menus(
		array(
			'principal' => __( 'Menu principal (header e mobile)', 'vinilart' ),
			'rodape'    => __( 'Menu do rodapé', 'vinilart' ),
		)
	);

	add_image_size( 'vinilart-projeto', 1600, 1600, false );
}
add_action( 'after_setup_theme', 'vinilart_setup_theme' );

/**
 * CSS e JS do site.
 */
function vinilart_enqueue_assets() {
	wp_enqueue_style( 'vinilart-app', VINILART_URI . '/assets/css/vinilart.css', array(), VINILART_VERSION );
	wp_enqueue_style( 'vinilart-theme', VINILART_URI . '/assets/css/theme.css', array( 'vinilart-app' ), VINILART_VERSION );
	wp_enqueue_style(
		'vinilart-fonts',
		'https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap',
		array(),
		null
	);
	wp_enqueue_script( 'vinilart-app', VINILART_URI . '/assets/js/vinilart.js', array(), VINILART_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'vinilart_enqueue_assets' );

/**
 * Remove o markup por defeito que nao e usado no design.
 */
function vinilart_clean_head() {
	remove_action( 'wp_head', 'wp_generator' );
	remove_action( 'wp_head', 'wlwmanifest_link' );
	remove_action( 'wp_head', 'rsd_link' );
}
add_action( 'init', 'vinilart_clean_head' );

/**
 * Classes no body.
 *
 * @param array $classes Classes.
 * @return array
 */
function vinilart_body_class( $classes ) {
	$classes[] = 'bg-ink';
	$classes[] = 'font-sans';
	$classes[] = 'text-foreground';
	$classes[] = 'antialiased';
	return $classes;
}
add_filter( 'body_class', 'vinilart_body_class' );
