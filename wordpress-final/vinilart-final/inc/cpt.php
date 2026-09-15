<?php
/**
 * Projetos e Servicos editaveis no wp-admin.
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Registo dos tipos de conteudo.
 */
function vinilart_register_cpt() {
	register_post_type(
		'vinilart_projeto',
		array(
			'labels'        => array(
				'name'               => __( 'Projetos', 'vinilart' ),
				'singular_name'      => __( 'Projeto', 'vinilart' ),
				'add_new'            => __( 'Adicionar projeto', 'vinilart' ),
				'add_new_item'       => __( 'Adicionar projeto', 'vinilart' ),
				'edit_item'          => __( 'Editar projeto', 'vinilart' ),
				'all_items'          => __( 'Todos os projetos', 'vinilart' ),
				'featured_image'     => __( 'Fotografia do projeto', 'vinilart' ),
				'set_featured_image' => __( 'Escolher fotografia', 'vinilart' ),
				'menu_name'          => __( 'Projetos', 'vinilart' ),
			),
			'public'        => true,
			'has_archive'   => false,
			'show_in_rest'  => true,
			'menu_icon'     => 'dashicons-format-gallery',
			'supports'      => array( 'title', 'excerpt', 'thumbnail', 'page-attributes' ),
			'rewrite'       => array( 'slug' => 'projeto' ),
			'menu_position' => 22,
		)
	);

	register_taxonomy(
		'vinilart_categoria',
		'vinilart_projeto',
		array(
			'labels'            => array(
				'name'          => __( 'Categorias', 'vinilart' ),
				'singular_name' => __( 'Categoria', 'vinilart' ),
				'menu_name'     => __( 'Categorias', 'vinilart' ),
			),
			'public'            => true,
			'hierarchical'      => true,
			'show_admin_column' => true,
			'show_in_rest'      => true,
			'rewrite'           => array( 'slug' => 'categoria-projeto' ),
		)
	);

}
add_action( 'init', 'vinilart_register_cpt' );

/**
 * Campos simples (em portugues) para projetos e servicos.
 */
function vinilart_meta_boxes() {
	add_meta_box(
		'vinilart_projeto_dados',
		__( 'Detalhes do projeto', 'vinilart' ),
		'vinilart_projeto_box',
		'vinilart_projeto',
		'side',
		'high'
	);

}
add_action( 'add_meta_boxes', 'vinilart_meta_boxes' );

/**
 * Opcoes de cor de destaque.
 *
 * @return array
 */
function vinilart_tones() {
	return array(
		'cyan'    => __( 'Azul', 'vinilart' ),
		'magenta' => __( 'Magenta', 'vinilart' ),
		'yellow'  => __( 'Amarelo', 'vinilart' ),
		'neutral' => __( 'Neutro', 'vinilart' ),
	);
}

/**
 * Formatos de imagem disponiveis.
 *
 * @return array
 */
function vinilart_ratios() {
	return array(
		'16 / 9' => __( 'Panorâmico (16/9)', 'vinilart' ),
		'4 / 3'  => __( 'Horizontal (4/3)', 'vinilart' ),
		'3 / 4'  => __( 'Vertical (3/4)', 'vinilart' ),
		'4 / 5'  => __( 'Vertical alto (4/5)', 'vinilart' ),
		'1 / 1'  => __( 'Quadrado (1/1)', 'vinilart' ),
	);
}

/**
 * Caixa do projeto.
 *
 * @param WP_Post $post Post.
 */
function vinilart_projeto_box( $post ) {
	wp_nonce_field( 'vinilart_meta', 'vinilart_meta_nonce' );

	$tone     = get_post_meta( $post->ID, '_vinilart_tone', true );
	$ratio    = get_post_meta( $post->ID, '_vinilart_ratio', true );
	$featured = get_post_meta( $post->ID, '_vinilart_featured', true );

	echo '<p><label for="vinilart_tone"><strong>' . esc_html__( 'Cor de destaque', 'vinilart' ) . '</strong></label><br />';
	echo '<select id="vinilart_tone" name="vinilart_tone" style="width:100%">';
	foreach ( vinilart_tones() as $value => $label ) {
		printf( '<option value="%s" %s>%s</option>', esc_attr( $value ), selected( $tone, $value, false ), esc_html( $label ) );
	}
	echo '</select></p>';

	echo '<p><label for="vinilart_ratio"><strong>' . esc_html__( 'Formato da fotografia', 'vinilart' ) . '</strong></label><br />';
	echo '<select id="vinilart_ratio" name="vinilart_ratio" style="width:100%">';
	foreach ( vinilart_ratios() as $value => $label ) {
		printf( '<option value="%s" %s>%s</option>', esc_attr( $value ), selected( $ratio, $value, false ), esc_html( $label ) );
	}
	echo '</select></p>';

	echo '<p><label><input type="checkbox" name="vinilart_featured" value="1" ' . checked( $featured, '1', false ) . ' /> ';
	echo esc_html__( 'Projeto em destaque (caixa com título e descrição)', 'vinilart' ) . '</label></p>';

	echo '<p class="description">' . esc_html__( 'A descrição curta escreve-se no campo "Resumo". A ordem define-se no campo "Ordem".', 'vinilart' ) . '</p>';
}

/**
 * Gravar campos.
 *
 * @param int $post_id ID.
 */
function vinilart_save_meta( $post_id ) {
	if ( ! isset( $_POST['vinilart_meta_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['vinilart_meta_nonce'] ) ), 'vinilart_meta' ) ) {
		return;
	}
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	if ( ! current_user_can( 'edit_post', $post_id ) ) {
		return;
	}

	$tone = isset( $_POST['vinilart_tone'] ) ? sanitize_key( wp_unslash( $_POST['vinilart_tone'] ) ) : 'neutral';
	update_post_meta( $post_id, '_vinilart_tone', array_key_exists( $tone, vinilart_tones() ) ? $tone : 'neutral' );

	if ( isset( $_POST['vinilart_ratio'] ) ) {
		$ratio = sanitize_text_field( wp_unslash( $_POST['vinilart_ratio'] ) );
		update_post_meta( $post_id, '_vinilart_ratio', array_key_exists( $ratio, vinilart_ratios() ) ? $ratio : '4 / 3' );
	}

	if ( 'vinilart_projeto' === get_post_type( $post_id ) ) {
		update_post_meta( $post_id, '_vinilart_featured', isset( $_POST['vinilart_featured'] ) ? '1' : '' );
	}

}
add_action( 'save_post', 'vinilart_save_meta' );

/**
 * Ordenar as listas do wp-admin pelo campo "Ordem".
 *
 * @param WP_Query $query Query.
 */
function vinilart_admin_order( $query ) {
	if ( ! is_admin() || ! $query->is_main_query() ) {
		return;
	}
	$type = $query->get( 'post_type' );
	if ( 'vinilart_projeto' === $type && ! $query->get( 'orderby' ) ) {
		$query->set( 'orderby', 'menu_order' );
		$query->set( 'order', 'ASC' );
	}
}
add_action( 'pre_get_posts', 'vinilart_admin_order' );
