import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

import { BrandBar, Wordmark } from "@/components/brand";
import { contact } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="surface-grain relative border-t border-border bg-ink">
      <BrandBar />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:py-20">
        <div>
          <Wordmark className="text-2xl" />
          <p className="mt-4 max-w-[24ch] font-display text-xl font-extrabold uppercase leading-tight tracking-tight text-foreground/85">
            Saber fazer… como deve ser.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <span className="eyebrow">Navegação</span>
          <Link to="/" className="w-fit text-sm text-foreground/70 hover:text-foreground">
            Início
          </Link>
          <Link to="/servicos" className="w-fit text-sm text-foreground/70 hover:text-foreground">
            Serviços
          </Link>
          <Link to="/portfolio" className="w-fit text-sm text-foreground/70 hover:text-foreground">
            Portefólio
          </Link>
          <Link to="/sobre" className="w-fit text-sm text-foreground/70 hover:text-foreground">
            Sobre
          </Link>
          <a
            href="/#vinilart-sport"
            className="w-fit text-sm text-foreground/70 hover:text-foreground"
          >
            VinilArt Sport
          </a>
          <Link to="/contactos" className="w-fit text-sm text-foreground/70 hover:text-foreground">
            Contactos
          </Link>
        </nav>

        <div className="flex flex-col gap-3">
          <span className="eyebrow">Onde estamos</span>
          <address className="text-sm not-italic leading-relaxed text-foreground/70">
            {contact.street}
            <br />
            {contact.city}
            <br />
            {contact.zip}
          </address>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex w-fit items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-cyan"
          >
            <Instagram className="h-4 w-4 shrink-0" />
            {contact.instagram}
          </a>
          <a
            href={contact.instagramSportUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-fit items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-yellow"
          >
            <Instagram className="h-4 w-4 shrink-0" />
            VinilArt Sport — {contact.instagramSport}
          </a>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-[1400px] text-xs uppercase tracking-[0.16em] text-muted-foreground">
          © {new Date().getFullYear()} VinilArt · Oeiras, Portugal
        </p>
      </div>
    </footer>
  );
}
