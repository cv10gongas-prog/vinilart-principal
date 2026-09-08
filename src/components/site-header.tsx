import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
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
          ? "border-b border-white/[0.06] bg-ink/92 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8 px-5 py-[18px] sm:px-8 lg:px-10 lg:py-[22px]">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group shrink-0"
          aria-label="VinilArt — Início"
        >
          <Wordmark className="text-[1.35rem] transition-transform duration-300 group-hover:scale-[1.025] sm:text-[1.5rem]" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{
                exact: link.to === "/",
              }}
              className="group relative py-2 text-[0.79rem] font-medium uppercase tracking-[0.08em] text-foreground/66 transition-colors duration-300 hover:text-foreground"
              activeProps={{
                className: "text-foreground",
              }}
            >
              {link.label}

              <span className="absolute inset-x-0 -bottom-[2px] h-px origin-left scale-x-0 bg-foreground/80 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}

          <a
            href="/#vinilart-sport"
            className="group relative flex items-center gap-2 py-2 text-[0.79rem] font-medium uppercase tracking-[0.08em] text-foreground/72 transition-colors duration-300 hover:text-foreground"
          >
            <span className="relative flex size-2.5 shrink-0 items-center justify-center">
              <span className="bar-brand absolute size-2.5 rounded-full opacity-90 transition-transform duration-300 group-hover:scale-125" />
            </span>

            <span>VinilArt Sport</span>
          </a>

          <Link
            to="/contactos"
            className="group relative py-2 text-[0.79rem] font-medium uppercase tracking-[0.08em] text-foreground/66 transition-colors duration-300 hover:text-foreground"
            activeProps={{
              className: "text-foreground",
            }}
          >
            Contactos

            <span className="absolute inset-x-0 -bottom-[2px] h-px origin-left scale-x-0 bg-foreground/80 transition-transform duration-300 group-hover:scale-x-100" />
          </Link>

          <Link
            to="/contactos"
            hash="pedido"
            className="group relative ml-1 inline-flex min-h-11 items-center gap-2 overflow-hidden bg-foreground px-5 py-3 text-[0.76rem] font-bold uppercase tracking-[0.1em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_35px_rgba(255,255,255,0.12)]"
          >
            <span className="relative z-10">
              Pedir orçamento
            </span>

            <ArrowUpRight className="relative z-10 size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

            <span className="bar-brand absolute inset-x-0 bottom-0 h-[3px]" />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex size-11 shrink-0 items-center justify-center border border-white/10 bg-white/[0.025] text-foreground transition-colors hover:bg-white/[0.06] lg:hidden"
        >
          {open ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>
      </div>

      <BrandBar
        className={cn(
          "transition-all duration-500",
          scrolled || open
            ? "opacity-100"
            : "opacity-55",
        )}
      />

      {open ? (
        <div className="surface-grain h-[calc(100dvh-78px)] overflow-y-auto bg-ink px-5 pb-12 pt-6 sm:px-8 lg:hidden">
          <nav className="flex flex-col">
            {[
              ...links,
              {
                label: "Contactos",
                to: "/contactos",
              } as const,
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/[0.07] py-5 font-display text-[2rem] font-extrabold uppercase leading-none tracking-[-0.03em] text-foreground"
              >
                <span>{link.label}</span>

                <ArrowUpRight className="size-5 text-foreground/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            ))}

            <a
              href="/#vinilart-sport"
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between border-b border-white/[0.07] py-5"
            >
              <div className="flex items-center gap-3">
                <span className="bar-brand size-3 rounded-full" />

                <span className="font-display text-[2rem] font-extrabold uppercase leading-none tracking-[-0.03em]">
                  VinilArt{" "}
                  <span className="text-gradient-brand">
                    Sport
                  </span>
                </span>
              </div>

              <ArrowUpRight className="size-5 text-foreground/35 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          </nav>

          <div className="mt-8">
            <Link
              to="/contactos"
              hash="pedido"
              onClick={() => setOpen(false)}
              className="group relative flex min-h-14 w-full items-center justify-center gap-2 overflow-hidden bg-foreground px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-ink"
            >
              <span>Pedir orçamento</span>

              <ArrowUpRight className="size-4" />

              <span className="bar-brand absolute inset-x-0 bottom-0 h-[3px]" />
            </Link>
          </div>

          <div className="mt-10 border-t border-white/[0.07] pt-5">
            <p className="text-[0.68rem] uppercase tracking-[0.14em] text-foreground/35">
              VinilArt
            </p>

            <p className="mt-2 max-w-[260px] text-sm leading-6 text-foreground/55">
              Saber fazer... como deve ser.
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
