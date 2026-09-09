import { X } from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { MediaSlot } from "@/components/media-slot";
import { Reveal } from "@/components/reveal";

import {
  portfolio,
  portfolioCategories,
  type PortfolioItem,
} from "@/data/site";

import { cn } from "@/lib/utils";

export function PortfolioGrid({
  limit,
  lightbox = true,
}: {
  limit?: number | undefined;
  lightbox?: boolean | undefined;
}) {
  const [filter, setFilter] = useState<string>("Todos");

  const [active, setActive] =
    useState<PortfolioItem | null>(null);

  const items = useMemo(() => {
    const list =
      filter === "Todos"
        ? portfolio
        : portfolio.filter(
            (item) =>
              item.category === filter,
          );

    return limit
      ? list.slice(0, limit)
      : list;
  }, [filter, limit]);

  useEffect(() => {
    if (!active) {
      return;
    }

    const oldOverflow =
      document.body.style.overflow;

    const onKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      onKeyDown,
    );

    return () => {
      document.body.style.overflow =
        oldOverflow;

      window.removeEventListener(
        "keydown",
        onKeyDown,
      );
    };
  }, [active]);

  return (
    <div>
      <div className="-mx-5 mt-9 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:mt-10 sm:px-8 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-2 pb-1">
          {portfolioCategories.map(
            (category) => (
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
            ),
          )}
        </div>
      </div>

      <div className="mt-7 columns-1 gap-4 sm:columns-2 lg:mt-8 xl:columns-3">
        {items.map((item, index) => (
          <Reveal
            key={item.id}
            delay={(index % 3) * 70}
            className="mb-4 break-inside-avoid"
          >
            <button
              type="button"
              aria-label={`${item.category}: ${item.image}`}
              onClick={() => {
                if (lightbox) {
                  setActive(item);
                }
              }}
              className="group relative block w-full overflow-hidden text-left"
            >
              <MediaSlot
                label={item.image}
                src={item.src}
                ratio={item.ratio}
                tone={item.tone}
                showLabel={false}
              />

              <div
                className={cn(
                  "pointer-events-none absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
                  item.src
                    ? "from-black/95 via-black/55 via-35% to-transparent opacity-85 sm:opacity-0 sm:group-hover:opacity-100"
                    : "from-black/85 via-black/10 to-transparent opacity-75 sm:opacity-0 sm:group-hover:opacity-100",
                )}
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <div
                  className={cn(
                    "transition-all duration-500 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100",
                    item.src
                      ? "w-fit max-w-[calc(100%-0.5rem)] rounded-sm border border-white/[0.08] bg-black/65 p-3 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-md sm:p-3.5"
                      : "",
                  )}
                >
                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-cyan sm:text-[0.6rem]">
                    {item.category}
                  </span>

                  <p className="mt-1 max-w-[28ch] font-display text-sm font-extrabold uppercase leading-5 text-white sm:text-base">
                    {item.image}
                  </p>

                  {item.sublabel ? (
                    <p className="mt-1 max-w-[32ch] text-xs font-medium text-white/90">
                      {item.sublabel}
                    </p>
                  ) : null}

                  {lightbox ? (
                    <span className="mt-2.5 hidden w-fit text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/70 sm:block">
                      Ver projeto
                    </span>
                  ) : null}
                </div>
              </div>

              <span className="bar-brand pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            </button>
          </Reveal>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/96 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.image}
          onClick={() => {
            setActive(null);
          }}
        >
          <button
            type="button"
            aria-label="Fechar"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/[0.1] bg-ink/70 text-foreground transition-colors hover:bg-white hover:text-ink sm:right-6 sm:top-6"
            onClick={() => {
              setActive(null);
            }}
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="w-full max-w-5xl"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <MediaSlot
              label={active.image}
              src={active.src}
              ratio={active.ratio}
              tone={active.tone}
              showLabel={false}
              className="max-h-[72vh]"
            />

            <div className="mt-5 flex items-start gap-4">
              <span className="bar-brand mt-2 h-[2px] w-9 shrink-0" />

              <div>
                <span className="eyebrow text-cyan">
                  {active.category}
                </span>

                <p className="mt-2 font-display text-lg font-extrabold uppercase sm:text-xl">
                  {active.image}
                </p>

                {active.sublabel ? (
                  <p className="mt-1 text-sm text-foreground/70 sm:text-base">
                    {active.sublabel}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
