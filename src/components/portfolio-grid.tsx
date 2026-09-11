import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";

import { portfolio, portfolioCategories, type PortfolioItem } from "@/data/site";

import { cn } from "@/lib/utils";

const toneAccent: Record<NonNullable<PortfolioItem["tone"]>, string> = {
  magenta: "text-magenta",
  cyan: "text-cyan",
  yellow: "text-yellow",
  neutral: "text-foreground/60",
};

const toneBorder: Record<NonNullable<PortfolioItem["tone"]>, string> = {
  magenta: "before:bg-magenta",
  cyan: "before:bg-cyan",
  yellow: "before:bg-yellow",
  neutral: "before:bg-white/40",
};

export function PortfolioGrid({
  limit,
  lightbox = true,
}: {
  limit?: number | undefined;
  lightbox?: boolean | undefined;
}) {
  const [filter, setFilter] = useState<string>("Todos");

  const [active, setActive] = useState<PortfolioItem | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = useMemo(() => {
    const list =
      filter === "Todos" ? portfolio : portfolio.filter((item) => item.category === filter);

    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  useEffect(() => {
    if (!active) {
      return;
    }

    const oldOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = oldOverflow;

      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  return (
    <div>
      <div className="-mx-5 mt-9 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:mt-10 sm:px-8 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2 pb-1">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFilter(category);
              }}
              className={cn(
                "relative shrink-0 overflow-hidden border px-4 py-2.5 text-[0.66rem] font-semibold uppercase tracking-[0.13em] transition-all sm:px-5 sm:text-[0.7rem]",

                filter === category
                  ? "border-foreground/18 bg-foreground text-ink"
                  : "border-white/[0.08] text-foreground/50 hover:border-white/25 hover:text-foreground",
              )}
            >
              {category}

              {filter === category ? (
                <span className="bar-brand absolute inset-x-0 bottom-0 h-[2px]" />
              ) : null}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:mt-10 lg:gap-6 xl:columns-3">
        {items.map((item, index) => (
          <Reveal
            key={item.id}
            delay={(index % 3) * 60}
            className={cn("break-inside-avoid", item.featured ? "mb-7 sm:mb-9" : "mb-5 sm:mb-6")}
          >
            <button
              type="button"
              aria-label={`${item.category}: ${item.image}`}
              onClick={() => {
                if (lightbox) {
                  setActive(item);
                }
              }}
              className="group relative block w-full text-left"
            >
              {item.featured ? (
                /* PROJETO PRINCIPAL COM CAIXA EDITORIAL SOBREPOSTA */
                <div className="relative">
                  <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-charcoal/30 transition-all duration-300 group-hover:border-white/20">
                    <MediaSlot
                      label={item.image}
                      src={item.src}
                      ratio={item.ratio}
                      tone={item.tone}
                      showLabel={false}
                    />

                    {/* Micro-label no topo */}
                    <div className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-2 rounded-xs border border-white/10 bg-black/70 px-2 py-1 backdrop-blur-md">
                      <span className="font-display text-[0.58rem] font-bold text-foreground/45">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="h-2 w-px bg-white/15" />
                      <span
                        className={cn(
                          "text-[0.56rem] font-semibold uppercase tracking-[0.16em]",
                          toneAccent[item.tone],
                        )}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Micro hover icon */}
                    {lightbox ? (
                      <div className="pointer-events-none absolute right-3 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    ) : null}
                  </div>

                  {/* Caixa editorial sobreposta */}
                  <div
                    className={cn(
                      "relative -mt-7 ml-3 mr-3 z-20 rounded-sm border border-white/[0.12] bg-ink/95 p-4 shadow-[0_12px_36px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 group-hover:border-white/25 sm:-mt-8 sm:ml-5 sm:mr-auto sm:max-w-[88%] sm:p-5",
                      "before:absolute before:left-0 before:top-3 before:bottom-3 before:w-[3px] pl-5",
                      toneBorder[item.tone],
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "text-[0.6rem] font-semibold uppercase tracking-[0.16em]",
                          toneAccent[item.tone],
                        )}
                      >
                        {item.category}
                      </span>
                      <span className="font-display text-[0.58rem] font-medium text-foreground/35">
                        Destaque
                      </span>
                    </div>

                    <h3 className="mt-1.5 font-display text-base font-extrabold uppercase leading-snug tracking-tight text-white sm:text-lg">
                      {item.image}
                    </h3>

                    {item.sublabel ? (
                      <p className="mt-1 text-xs leading-relaxed text-foreground/70 sm:text-[0.8rem]">
                        {item.sublabel}
                      </p>
                    ) : null}

                    {lightbox ? (
                      <div className="mt-3 flex items-center gap-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-foreground/45 transition-colors group-hover:text-cyan">
                        <span>Ver detalhes</span>
                        <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : (
                /* PROJETO SECUNDÁRIO: FOTO LIMPA COM INFORMAÇÃO DISCRETA */
                <div className="relative">
                  <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-charcoal/30 transition-all duration-300 group-hover:border-white/20">
                    <MediaSlot
                      label={item.image}
                      src={item.src}
                      ratio={item.ratio}
                      tone={item.tone}
                      showLabel={false}
                    />

                    {/* Micro hover icon */}
                    {lightbox ? (
                      <div className="pointer-events-none absolute right-2.5 top-2.5 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                        <ArrowUpRight className="h-3 w-3" />
                      </div>
                    ) : null}
                  </div>

                  {/* Legenda editorial discreta abaixo da foto */}
                  <div className="mt-2.5 flex items-baseline justify-between gap-2 px-1 text-foreground/50">
                    <div className="flex items-baseline gap-2 min-w-0">
                      <span className="font-display text-[0.58rem] font-bold text-foreground/30 shrink-0">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate text-[0.76rem] font-semibold uppercase tracking-wider text-foreground/80 transition-colors group-hover:text-foreground">
                        {item.image}
                      </span>
                    </div>
                    <span className="shrink-0 text-[0.56rem] font-medium uppercase tracking-[0.12em] text-foreground/40">
                      {item.category}
                    </span>
                  </div>
                </div>
              )}
            </button>
          </Reveal>
        ))}
      </div>

      {mounted && active
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-ink/96 p-4 backdrop-blur-xl sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={active.image}
              onClick={() => {
                setActive(null);
              }}
            >
              {/* Botão fechar fixo no canto superior direito do viewport */}
              <button
                type="button"
                aria-label="Fechar"
                className="fixed right-4 top-4 z-[10000] flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-black/90 text-white shadow-[0_4px_24px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-white/60 hover:bg-white hover:text-ink sm:right-6 sm:top-6 sm:h-13 sm:w-13"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(null);
                }}
              >
                <X className="h-6 w-6 stroke-[2.5]" />
              </button>

              <div
                className="relative my-auto flex max-h-[90vh] w-fit max-w-[90vw] flex-col items-center justify-center"
                onClick={(event) => {
                  event.stopPropagation();
                }}
              >
                {active.src ? (
                  <div className="relative flex max-h-[78vh] max-w-[90vw] items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
                    <img
                      src={active.src}
                      alt={active.image}
                      className="max-h-[78vh] max-w-[90vw] object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-4xl">
                    <MediaSlot
                      label={active.image}
                      ratio={active.ratio}
                      tone={active.tone}
                      showLabel={false}
                      className="max-h-[72vh]"
                    />
                  </div>
                )}

                <div className="mt-4 flex w-full max-w-full items-start gap-4 px-1">
                  <span className="bar-brand mt-2 h-[2px] w-9 shrink-0" />

                  <div className="min-w-0">
                    <span className="eyebrow text-cyan">{active.category}</span>

                    <p className="mt-1 font-display text-lg font-extrabold uppercase sm:text-xl">
                      {active.image}
                    </p>

                    {active.sublabel ? (
                      <p className="mt-1 text-sm text-foreground/75 sm:text-base">
                        {active.sublabel}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
