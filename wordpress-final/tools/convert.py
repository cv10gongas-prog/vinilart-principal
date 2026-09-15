#!/usr/bin/env python3
"""Converte o HTML renderizado do site React (preview) em partials PHP do tema WordPress.

Entrada : /tmp/browser/wp/parts/*.html  (HTML real capturado da preview)
Saida   : wordpress-final/vinilart-final/parts/*.php  + inc/data/fields.php

Regra: o HTML e o CSS sao preservados. Apenas os textos, imagens e links passam
a ser lidos do WordPress atraves dos helpers vt()/vimg().
"""

import json
import os
import re
import pathlib
from html.parser import HTMLParser

SRC = pathlib.Path("/tmp/browser/wp/parts")
THEME = pathlib.Path(__file__).resolve().parents[1] / "vinilart-final"
PARTS = THEME / "parts"
DATA = THEME / "inc" / "data"

PAGES = ["home", "servicos", "portfolio", "sobre", "contactos"]

VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
    "param", "source", "track", "wbr", "path", "rect", "circle", "line",
    "polyline", "polygon", "ellipse", "use", "stop",
}

SVG_SELF = {"path", "rect", "circle", "line", "polyline", "polygon", "ellipse", "use", "stop"}

TEXT_HOSTS = {
    "h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "li", "strong", "em",
    "figcaption", "label", "button", "a", "address", "td", "th", "div", "dt",
    "dd", "blockquote", "small", "option",
}

fields = {}


def slugify(text, maxlen=40):
    text = re.sub(r"[^a-z0-9]+", "-", text.lower().strip())
    return text.strip("-")[:maxlen] or "secao"


class TopLevelSplitter(HTMLParser):
    """Devolve os offsets dos elementos de topo do HTML dado."""

    def __init__(self, html):
        super().__init__(convert_charrefs=False)
        self.html = html
        self.depth = 0
        self.spans = []
        self.start = None
        self.tag = None

    def handle_starttag(self, tag, attrs):
        if tag in VOID:
            return
        if self.depth == 0:
            self.start = self.getpos_offset()
            self.tag = tag
        self.depth += 1

    def handle_startendtag(self, tag, attrs):
        return

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        self.depth -= 1
        if self.depth == 0 and self.start is not None:
            end = self.html.index(">", self.rawdata_index()) + 1
            self.spans.append((self.start, end, self.tag))
            self.start = None

    def getpos_offset(self):
        line, col = self.getpos()
        return self.line_offsets[line - 1] + col

    def rawdata_index(self):
        line, col = self.getpos()
        return self.line_offsets[line - 1] + col

    def run(self):
        self.line_offsets = [0]
        for line in self.html.split("\n"):
            self.line_offsets.append(self.line_offsets[-1] + len(line) + 1)
        self.feed(self.html)
        return self.spans


class Templater(HTMLParser):
    """Reescreve o HTML trocando textos/imagens por chamadas PHP."""

    def __init__(self, page, section, existing_prefix_count=0):
        super().__init__(convert_charrefs=False)
        self.out = []
        self.page = page
        self.section = section
        self.stack = []
        self.cstack = []
        self.n = 0
        self.img_n = 0

    # ---------- helpers ----------
    def key(self, kind):
        self.n += 1
        return f"{self.page}_{self.section}_{kind}{self.n:02d}"

    def emit(self, s):
        self.out.append(s)

    def attrs_to_html(self, tag, attrs):
        pieces = []
        for name, value in attrs:
            if name in ("data-status", "aria-current"):
                continue
            if value is None:
                pieces.append(f" {name}")
                continue
            if name == "style":
                # remove estilos inline de animacao (passam a ser feitos por CSS/JS)
                if "opacity" in value and "transition" in value:
                    self.pending_reveal = True
                    continue
            if name == "class" and getattr(self, "pending_reveal", False):
                value = value + " v-reveal"
                self.pending_reveal = False
            if name == "class" and tag == "div" and "break-inside-avoid" in value:
                pass
            if name == "href" and value.startswith("/"):
                value = "<?php echo esc_url( vinilart_url('%s') ); ?>" % value
            if name == "src" and tag == "img":
                self.img_n += 1
                k = f"{self.page}_{self.section}_img{self.img_n:02d}"
                fields[k] = {"type": "image", "default": value, "page": self.page,
                             "label": "Imagem: " + os.path.basename(value), "role": "Imagem"}
                value = "<?php echo esc_url( vinilart_img('%s') ); ?>" % k
            if name == "alt" and tag == "img":
                k = f"{self.page}_{self.section}_alt{self.img_n:02d}"
                fields[k] = {"type": "text", "default": value, "page": self.page,
                             "label": "Texto alternativo da imagem", "role": "Texto alternativo"}
                value = "<?php vt('%s'); ?>" % k
            pieces.append(' %s="%s"' % (name, value.replace('"', "&quot;") if name not in ("href", "src", "alt") else value))
        return "".join(pieces)

    # ---------- parser ----------
    def handle_decl(self, decl):
        self.emit(f"<!{decl}>")

    def handle_comment(self, data):
        if data.strip() == "":
            return  # separadores do React
        self.emit(f"<!--{data}-->")

    def handle_starttag(self, tag, attrs):
        cls = ""
        for name, value in attrs:
            if name == "class" and value:
                cls = value
        close = " />" if tag in SVG_SELF else ">"
        self.emit(f"<{tag}{self.attrs_to_html(tag, attrs)}{close}")
        if tag not in VOID:
            self.stack.append(tag)
            self.cstack.append((tag, cls))

    # ---------- etiquetas humanas ----------
    def role_for(self, tag, cls, long_text, text):
        for t, c in reversed(self.cstack):
            if t == "button":
                return "Botão"
            if t == "a":
                if any(x in c for x in ("cta", "btn", "button", "bg-foreground", "border-white")):
                    return "Botão"
                return "Link"
        for t, c in reversed(self.cstack):
            if t in ("h1", "h2", "h3", "h4", "h5", "h6"):
                tag = t
                break
        if tag == "h1":
            return "Título principal"
        if tag == "h2":
            return "Título"
        if tag in ("h3", "h4", "h5", "h6"):
            return "Subtítulo"
        if tag == "p":
            return "Parágrafo" if long_text else "Texto"
        if tag == "figcaption":
            return "Legenda"
        if tag == "li":
            return "Item da lista"
        if tag == "address":
            return "Endereço"
        if tag == "label":
            return "Nome do campo"
        if tag == "option":
            return "Opção da lista"
        if tag in ("td", "th"):
            return "Célula"
        if "eyebrow" in cls:
            return "Etiqueta"
        if re.fullmatch(r"\d{1,3}[+%º.]?", text or ""):
            return "Número"
        return "Parágrafo" if long_text else "Texto"

    def handle_startendtag(self, tag, attrs):
        close = " />" if tag in SVG_SELF else ">"
        self.emit(f"<{tag}{self.attrs_to_html(tag, attrs)}{close}")

    def handle_endtag(self, tag):
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
            if self.cstack:
                self.cstack.pop()
        if tag not in VOID:
            self.emit(f"</{tag}>")

    def handle_entityref(self, name):
        self.emit(f"&{name};")

    def handle_charref(self, name):
        self.emit(f"&#{name};")

    def handle_data(self, data):
        if not data.strip():
            self.emit(data)
            return
        parent = self.stack[-1] if self.stack else ""
        if parent in ("script", "style", "svg", "title"):
            self.emit(data)
            return
        if parent not in TEXT_HOSTS:
            self.emit(data)
            return
        text = data.strip()
        lead = data[: len(data) - len(data.lstrip())]
        trail = data[len(data.rstrip()):]
        kind = "t"
        k = self.key(kind)
        pcls = self.cstack[-1][1] if self.cstack else ""
        long_text = len(text) > 90
        fields[k] = {
            "type": "textarea" if long_text else "text",
            "default": text,
            "page": self.page,
            "label": (text[:70] + ("…" if len(text) > 70 else "")),
            "role": self.role_for(parent, pcls, long_text, text),
        }
        self.emit(f"{lead}<?php vt('{k}'); ?>{trail}")

    def render(self, html):
        self.feed(html)
        return "".join(self.out)


def convert_page(page):
    html = (SRC / f"{page}-main.html").read_text()
    spans = TopLevelSplitter(html).run()
    sections = []
    for idx, (start, end, tag) in enumerate(spans, start=1):
        chunk = html[start:end]
        # nome legivel a partir do primeiro titulo/eyebrow encontrado
        m = re.search(r"<h[1-3][^>]*>(.*?)</h[1-3]>", chunk, re.S)
        if not m:
            m = re.search(r'class="eyebrow[^"]*"[^>]*>(.*?)<', chunk, re.S)
        raw = re.sub(r"<[^>]+>", "", m.group(1)) if m else f"secao-{idx}"
        raw = re.sub(r"<!--.*?-->", "", raw)
        slug = slugify(raw) or f"secao-{idx}"
        key = f"s{idx:02d}-{slug}"
        php = Templater(page, f"s{idx:02d}").render(chunk)
        target = PARTS / f"{page}-{key}.php"
        target.write_text(php)
        sections.append({"key": key, "file": target.name,
                         "label": raw.strip()[:60] or f"Secção {idx}"})
    return sections


def main():
    PARTS.mkdir(parents=True, exist_ok=True)
    DATA.mkdir(parents=True, exist_ok=True)
    manifest = {}
    for page in PAGES:
        manifest[page] = convert_page(page)

    # fields.php
    lines = ["<?php", "// Ficheiro gerado automaticamente a partir do site aprovado.",
             "// Contem os textos e imagens por defeito de cada campo editavel.",
             "return array("]
    for k, v in fields.items():
        lines.append("  %s => array( 'type' => %s, 'role' => %s, 'label' => %s, 'page' => %s, 'default' => %s )," % (
            php_str(k), php_str(v["type"]), php_str(v.get("role", "Texto")), php_str(v["label"]), php_str(v["page"]), php_str(v["default"])))
    lines.append(");")
    (DATA / "fields.php").write_text("\n".join(lines) + "\n")

    lines = ["<?php", "// Secoes por pagina (ordem por defeito).", "return array("]
    for page, secs in manifest.items():
        lines.append("  %s => array(" % php_str(page))
        for s in secs:
            lines.append("    array( 'key' => %s, 'file' => %s, 'label' => %s )," % (
                php_str(s["key"]), php_str(s["file"]), php_str(s["label"])))
        lines.append("  ),")
    lines.append(");")
    (DATA / "sections.php").write_text("\n".join(lines) + "\n")

    print(json.dumps({p: [s["key"] for s in secs] for p, secs in manifest.items()}, ensure_ascii=False, indent=1))
    print("campos editaveis:", len(fields))


def php_str(s):
    return "'" + str(s).replace("\\", "\\\\").replace("'", "\\'") + "'"


if __name__ == "__main__":
    main()
