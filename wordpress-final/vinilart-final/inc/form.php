<?php
/**
 * Formulario de pedido de orcamento: validacao, nonce, anti-spam e envio por email.
 *
 * @package vinilart
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Estado do formulario no pedido atual.
 *
 * @return array
 */
function vinilart_form_state() {
	static $state = null;

	if ( null !== $state ) {
		return $state;
	}

	$state = array(
		'sent'   => false,
		'errors' => array(),
		'values' => array(
			'nome'      => '',
			'email'     => '',
			'telefone'  => '',
			'servico'   => '',
			'mensagem'  => '',
		),
	);

	if ( 'POST' !== ( isset( $_SERVER['REQUEST_METHOD'] ) ? strtoupper( sanitize_text_field( wp_unslash( $_SERVER['REQUEST_METHOD'] ) ) ) : '' ) ) {
		return $state;
	}

	if ( ! isset( $_POST['vinilart_form'] ) ) {
		return $state;
	}

	if ( ! isset( $_POST['vinilart_form_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['vinilart_form_nonce'] ) ), 'vinilart_form' ) ) {
		$state['errors']['geral'] = __( 'A sessão expirou. Recarrega a página e tenta novamente.', 'vinilart' );
		return $state;
	}

	// Anti-spam: campo escondido tem de estar vazio.
	if ( ! empty( $_POST['vinilart_website'] ) ) {
		$state['sent'] = true;
		return $state;
	}

	// Anti-spam: submissao demasiado rapida.
	$started = isset( $_POST['vinilart_time'] ) ? (int) $_POST['vinilart_time'] : 0;
	if ( $started > 0 && ( time() - $started ) < 3 ) {
		$state['sent'] = true;
		return $state;
	}

	$values = array(
		'nome'     => isset( $_POST['nome'] ) ? sanitize_text_field( wp_unslash( $_POST['nome'] ) ) : '',
		'email'    => isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '',
		'telefone' => isset( $_POST['telefone'] ) ? sanitize_text_field( wp_unslash( $_POST['telefone'] ) ) : '',
		'servico'  => isset( $_POST['servico'] ) ? sanitize_text_field( wp_unslash( $_POST['servico'] ) ) : '',
		'mensagem' => isset( $_POST['mensagem'] ) ? sanitize_textarea_field( wp_unslash( $_POST['mensagem'] ) ) : '',
	);

	$state['values'] = $values;

	if ( '' === $values['nome'] ) {
		$state['errors']['nome'] = __( 'Indica o teu nome.', 'vinilart' );
	}
	if ( '' === $values['email'] || ! is_email( $values['email'] ) ) {
		$state['errors']['email'] = __( 'Indica um email válido.', 'vinilart' );
	}
	if ( mb_strlen( $values['mensagem'] ) < 10 ) {
		$state['errors']['mensagem'] = __( 'Escreve uma mensagem com pelo menos 10 caracteres.', 'vinilart' );
	}

	if ( ! empty( $state['errors'] ) ) {
		return $state;
	}

	$to = vinilart_opt( 'form_email', get_option( 'admin_email' ) );

	$subject = sprintf(
		/* translators: %s: nome de quem enviou. */
		__( 'Pedido de orçamento — %s', 'vinilart' ),
		$values['nome']
	);

	$body_lines = array(
		__( 'Novo pedido de orçamento do site.', 'vinilart' ),
		'',
		__( 'Nome: ', 'vinilart' ) . $values['nome'],
		__( 'Email: ', 'vinilart' ) . $values['email'],
		__( 'Telefone: ', 'vinilart' ) . $values['telefone'],
		__( 'Serviço: ', 'vinilart' ) . $values['servico'],
		'',
		__( 'Mensagem:', 'vinilart' ),
		$values['mensagem'],
	);

	$headers = array(
		'Content-Type: text/plain; charset=UTF-8',
		'Reply-To: ' . $values['nome'] . ' <' . $values['email'] . '>',
	);

	$sent = wp_mail( $to, $subject, implode( "\n", $body_lines ), $headers );

	if ( $sent ) {
		$state['sent']   = true;
		$state['values'] = array_fill_keys( array_keys( $state['values'] ), '' );
	} else {
		$state['errors']['geral'] = sprintf(
			/* translators: %s: email de contacto. */
			__( 'Não foi possível enviar o pedido. Escreve-nos para %s.', 'vinilart' ),
			vinilart_contact()['email']
		);
	}

	return $state;
}
