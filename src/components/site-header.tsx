import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandBar, Wordmark } from "@/components/brand";
import { cn } from "@/lib/utils";

const links = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Portefólio", to: "/portfolio" },
  { label: "Sobre", to: "/sobre" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:py-5">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <Wordmark className="text-lg sm:text-xl" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="link-underline text-[0.82rem] font-medium uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-foreground"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/#vinilart-sport"
            className="group relative flex items-center gap-2 text-[0.82rem] font-medium uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-foreground"
          >
            <span className="flex h-2 w-2 shrink-0 items-center">
              <span className="bar-brand h-2 w-2 rounded-full" />
            </span>
            VinilArt Sport
          </a>
          <Link
            to="/contactos"
            className="link-underline text-[0.82rem] font-medium uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Contactos
          </Link>
          <Link
            to="/contactos"
            hash="pedido"
            className="relative overflow-hidden border border-border px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-magenta hover:text-magenta"
          >
            Pedir orçamento
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <BrandBar className={cn("transition-opacity", scrolled ? "opacity-100" : "opacity-0")} />

      {open ? (
        <div className="surface-grain h-[calc(100dvh-72px)] overflow-y-auto bg-ink px-5 pb-16 pt-6 lg:hidden">
          <nav className="flex flex-col">
            {[...links, { label: "Contactos", to: "/contactos" } as const].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/#vinilart-sport"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 border-b border-border py-5 font-display text-3xl font-extrabold uppercase tracking-tight"
            >
              <span className="bar-brand h-3 w-3 rounded-full" />
              <span className="text-gradient-brand">Sport</span>
            </a>
          </nav>
          <Link
            to="/contactos"
            hash="pedido"
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center border border-magenta px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-magenta"
          >
            Pedir orçamento
          </Link>
        </div>
      ) : null}
    </header>
  );
}
