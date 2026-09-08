import { X } from "lucide-react";
import { useMemo, useState } from "react";

import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";
import { portfolio, portfolioCategories, type PortfolioItem } from "@/data/site";
import { cn } from "@/lib/utils";

export function PortfolioGrid({
  limit,
  lightbox = true,
}: {
  limit?: number | undefined;
  lightbox?: boolean | undefined;
}) {
  const [filter, setFilter] = useState<string>("Todos");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const items = useMemo(() => {
    const list =
      filter === "Todos" ? portfolio : portfolio.filter((p) => p.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-2">
        {portfolioCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            className={cn(
              "border px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-colors",
              filter === c
                ? "border-magenta text-magenta"
                : "border-border text-foreground/60 hover:border-foreground/40 hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal
            key={item.id}
            delay={(i % 3) * 90}
            className={cn(item.ratio === "16 / 10" && "sm:col-span-2")}
          >
            <button
              type="button"
              onClick={() => lightbox && setActive(item)}
              className="group relative block w-full text-left"
            >
              <MediaSlot
                label={item.image}
                ratio={item.ratio}
                tone={item.tone}
                showLabel={false}
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink via-ink/20 to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                <span className="eyebrow text-[0.6rem] text-cyan">{item.category}</span>
                <span className="mt-1 font-display text-lg font-extrabold uppercase tracking-tight">
                  {item.image}
                </span>
                <span className="mt-3 w-fit border border-foreground/40 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
                  Ver projeto
                </span>
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] w-0 bar-brand transition-all duration-500 group-hover:w-full" />
            </button>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-5"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-border text-foreground"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <MediaSlot label={active.image} ratio={active.ratio} tone={active.tone} />
            <div className="mt-4 flex items-center gap-3">
              <span className="bar-brand h-[2px] w-8" />
              <span className="eyebrow">{active.category}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
