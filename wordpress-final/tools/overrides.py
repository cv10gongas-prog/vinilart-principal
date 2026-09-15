#!/usr/bin/env python3
"""Cria os partials dinamicos (portefolio e formulario) a partir dos gerados.

Executar depois de convert.py:
    python3 wordpress-final/tools/overrides.py
"""

import pathlib
import re

THEME = pathlib.Path(__file__).resolve().parents[1] / "vinilart-final"
PARTS = THEME / "parts"

TAG = re.compile(r"<(/?)([a-zA-Z0-9]+)([^>]*?)(/?)>")


def span_of_siblings(html, start, count):
    """Devolve o fim do span que cobre `count` elementos irmaos a partir de start."""
    depth = 0
    seen = 0
    for m in TAG.finditer(html, start):
        closing, tag, _attrs, selfclose = m.groups()
        if selfclose or tag.lower() in {"br", "img", "input", "hr", "path", "rect",
                                        "circle", "line", "polyline", "polygon",
                                        "ellipse", "use", "stop", "meta", "link"}:
            continue
        if closing:
            depth -= 1
            if depth == 0:
                seen += 1
                if seen == count:
                    return m.end()
        else:
            depth += 1
    raise SystemExit("nao foi possivel delimitar o bloco")


def build_portfolio():
    src = PARTS / "portfolio-s01-trabalhos-realizados.php"
    html = src.read_text()

    start = html.index('<div class="-mx-5 mt-9')
    end = span_of_siblings(html, start, 2)

    out = html[:start] + "<?php vinilart_portfolio_grid(); ?>" + html[end:]
    target = PARTS / "override-portfolio-s01-trabalhos-realizados.php"
    target.write_text(out)
    print("portefolio dinamico:", target.name, len(out), "bytes")


FORM_HEAD = """<?php $vinilart_form = vinilart_form_state(); ?>"""


def build_form():
    src = PARTS / "contactos-s02-tens-um-projetoem-mente.php"
    html = src.read_text()

    # 1. Mapa vem das opcoes de contacto.
    html = re.sub(
        r'src="https://www\.google\.com/maps[^"]*"',
        'src="<?php echo esc_url( vinilart_contact()[\'map\'] ); ?>"',
        html,
    )

    # 2. Telefone, emails e Instagram vêm das opcoes de contacto.
    html = html.replace('href="tel:+351913447705"', 'href="<?php echo esc_url( vinilart_contact()[\'phone_url\'] ); ?>"')
    html = html.replace('href="mailto:geral@vinilart.pt"', 'href="<?php echo esc_url( \'mailto:\' . vinilart_contact()[\'email\'] ); ?>"')
    html = html.replace('href="mailto:suporte@vinilart.pt"', 'href="<?php echo esc_url( \'mailto:\' . vinilart_contact()[\'email_support\'] ); ?>"')
    html = html.replace('href="https://www.instagram.com/vinilart.pt/"', 'href="<?php echo esc_url( vinilart_contact()[\'instagram_url\'] ); ?>"')
    html = html.replace('href="https://www.instagram.com/vinilartsport/"', 'href="<?php echo esc_url( vinilart_contact()[\'ig_sport_url\'] ); ?>"')

    # 3. Form: metodo, nonce, anti-spam.
    hidden = (
        "<?php wp_nonce_field( 'vinilart_form', 'vinilart_form_nonce' ); ?>"
        "<input type=\"hidden\" name=\"vinilart_form\" value=\"1\" />"
        "<input type=\"hidden\" name=\"vinilart_time\" value=\"<?php echo esc_attr( time() ); ?>\" />"
        "<div aria-hidden=\"true\" style=\"position:absolute;left:-9999px\">"
        "<label>Website<input type=\"text\" name=\"vinilart_website\" value=\"\" tabindex=\"-1\" autocomplete=\"off\" /></label></div>"
    )

    def form_open(match):
        attrs = match.group(1)
        attrs = re.sub(r'\saction="[^"]*"', "", attrs)
        attrs = re.sub(r"\snovalidate(=\"[^\"]*\")?", "", attrs)
        return (
            '<form id="pedido" method="post"'
            ' action="<?php echo esc_url( get_permalink() ); ?>#pedido" novalidate'
            + attrs
            + ">"
            + hidden
        )

    html, count = re.subn(r'<form id="pedido"([^>]*)>', form_open, html, count=1)
    if count != 1:
        raise SystemExit("form open tag nao encontrada")


    # 4. Repor valores escritos e marcar erros.
    def field_value(name):
        return "<?php echo esc_attr( $vinilart_form['values']['%s'] ); ?>" % name

    for name in ("nome", "email", "telefone"):
        html = html.replace(
            'name="%s">' % name,
            'name="%s" value="%s">' % (name, field_value(name)),
        )

    html = html.replace(
        'placeholder="Conta-nos o que tens em mente."></textarea>',
        'placeholder="Conta-nos o que tens em mente."><?php echo esc_textarea( $vinilart_form[\'values\'][\'mensagem\'] ); ?></textarea>',
    )

    # 5. Substituir o seletor de servico por um campo nativo (mesmo aspeto).
    select_start = html.index('<input type="hidden" name="servico" value="">')
    select_end = span_of_siblings(html, html.index("<button", select_start), 1)
    select = (
        '<div class="relative">'
        '<select name="servico" class="w-full appearance-none border border-white/[0.08] bg-ink/65 px-4 py-3.5 pr-10 text-sm text-foreground/80 outline-none transition-all duration-300 hover:border-white/[0.14] focus:border-cyan focus:bg-ink flex min-h-[50px] items-center">'
        "<option value=\"\"><?php vt('contactos_s02_t31'); ?></option>"
        "<?php foreach ( vinilart_service_options() as $vinilart_service ) : ?>"
        '<option value="<?php echo esc_attr( $vinilart_service ); ?>" <?php selected( $vinilart_form[\'values\'][\'servico\'], $vinilart_service ); ?>><?php echo esc_html( $vinilart_service ); ?></option>'
        "<?php endforeach; ?>"
        "</select>"
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/40" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>'
        "</div>"
    )
    html = html[:select_start] + select + html[select_end:]

    # 6. Mensagens de sucesso e de erro antes do botao de envio.
    messages = (
        "<?php if ( $vinilart_form['sent'] ) : ?>"
        '<p class="v-form-message mt-6 border border-cyan/30 bg-cyan/10 px-4 py-3 text-sm text-foreground">'
        "<?php echo esc_html( vinilart_opt( 'form_sucesso', 'Pedido enviado. Entramos em contacto assim que possível.' ) ); ?>"
        "</p>"
        "<?php endif; ?>"
        "<?php if ( ! empty( $vinilart_form['errors'] ) ) : ?>"
        '<div class="v-form-message mt-6 border border-magenta/35 bg-magenta/10 px-4 py-3 text-sm text-foreground">'
        "<?php foreach ( $vinilart_form['errors'] as $vinilart_error ) : ?>"
        '<p class="mt-1 first:mt-0"><?php echo esc_html( $vinilart_error ); ?></p>'
        "<?php endforeach; ?>"
        "</div>"
        "<?php endif; ?>"
    )

    submit = html.index('<button type="submit"')
    html = html[:submit] + messages + html[submit:]

    out = FORM_HEAD + html
    target = PARTS / "override-contactos-s02-tens-um-projetoem-mente.php"
    target.write_text(out)
    print("formulario dinamico:", target.name, len(out), "bytes")


if __name__ == "__main__":
    build_portfolio()
    build_form()
