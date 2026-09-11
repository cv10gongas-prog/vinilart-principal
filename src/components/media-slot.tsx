import { cn } from "@/lib/utils";

type MediaSlotProps = {
  label: string;

  className?: string | undefined;

  ratio?: string | undefined;

  tone?: "magenta" | "cyan" | "yellow" | "neutral" | undefined;

  showLabel?: boolean | undefined;

  src?: string | undefined;

  sublabel?: string | undefined;

  imageAlt?: string | undefined;
};

const toneRing: Record<NonNullable<MediaSlotProps["tone"]>, string> = {
  magenta: "before:bg-magenta",
  cyan: "before:bg-cyan",
  yellow: "before:bg-yellow",
  neutral: "before:bg-border",
};

export function MediaSlot({
  label,
  className,
  ratio = "4 / 3",
  tone = "neutral",
  showLabel = true,
  src,
  sublabel,
  imageAlt,
}: MediaSlotProps) {
  return (
    <figure
      aria-label={label}
      style={{
        aspectRatio: ratio,
      }}
      className={cn(
        "media-slot group/slot relative flex w-full items-end overflow-hidden",

        "before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-[2px] before:content-['']",

        toneRing[tone],

        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={imageAlt || label}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/slot:scale-[1.03]"
        />
      ) : null}

      <div
        aria-hidden="true"
        className={cn(
          "surface-diagonal pointer-events-none absolute inset-0",
          src ? "opacity-0" : "opacity-22",
        )}
      />

      {showLabel ? (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0",
            src
              ? "bg-gradient-to-t from-black/60 via-black/15 via-25% to-transparent"
              : "bg-gradient-to-t from-black/25 via-transparent to-white/[0.015]",
          )}
        />
      ) : null}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-white/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-white/10"
      />

      {showLabel ? (
        <figcaption className="relative z-10 w-full p-3 sm:p-4">
          <div
            className={cn(
              src
                ? "w-fit max-w-[calc(100%-0.5rem)] rounded-sm border border-white/[0.08] bg-black/65 px-3 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-3.5 sm:py-2.5"
                : "",
            )}
          >
            <span
              className={cn(
                "eyebrow block text-[0.56rem]",
                src ? "text-white/85" : "text-foreground/50",
              )}
            >
              {label}
            </span>

            {sublabel ? (
              <span
                className={cn(
                  "mt-1 block max-w-[28ch] text-xs leading-snug sm:text-sm",
                  src ? "font-medium text-white" : "text-foreground/80",
                )}
              >
                {sublabel}
              </span>
            ) : null}
          </div>
        </figcaption>
      ) : null}
    </figure>
  );
}
