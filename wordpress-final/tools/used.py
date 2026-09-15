#!/usr/bin/env python3
"""Gera inc/data/used.php: campos realmente usados nos partials que o site renderiza.

Se existe um partial override-*, o original correspondente e ignorado (o override
substitui a secao). Assim o painel do cliente nao mostra campos orfaos.
"""

import pathlib
import re

THEME = pathlib.Path(__file__).resolve().parents[1] / "vinilart-final"
PARTS = THEME / "parts"
DATA = THEME / "inc" / "data"

PAT = re.compile(r"(?:vt|vinilart_img|vinilart_get)\(\s*'([a-z0-9_]+)'")


def main():
    overrides = {p.name[len("override-"):] for p in PARTS.glob("override-*.php")}
    files = []
    for p in sorted(PARTS.glob("*.php")):
        if p.name.startswith("override-"):
            files.append(p)
        elif p.name not in overrides:
            files.append(p)

    # header/footer e outros templates tambem usam campos
    for extra in ("header.php", "footer.php", "page.php", "index.php", "404.php",
                  "single-vinilart_projeto.php", "front-page.php"):
        f = THEME / extra
        if f.exists():
            files.append(f)

    used = []
    seen = set()
    for f in files:
        for key in PAT.findall(f.read_text()):
            if key not in seen:
                seen.add(key)
                used.append(key)

    lines = ["<?php", "// Campos efetivamente usados pelos partials renderizados (gerado).",
             "return array("]
    for key in used:
        lines.append("  '%s' => true," % key)
    lines.append(");")
    (DATA / "used.php").write_text("\n".join(lines) + "\n")
    print("campos em uso:", len(used))


if __name__ == "__main__":
    main()
