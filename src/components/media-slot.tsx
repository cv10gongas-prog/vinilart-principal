import { cn } from "@/lib/utils";

type MediaSlotProps = {
  label: string;

  className?: string | undefined;

  ratio?: string | undefined;

  tone?:
    | "magenta"
    | "cyan"
    | "yellow"
    | "neutral"
    | undefined;

  showLabel?: boolean | undefined;

  src?: string | undefined;

  sublabel?: string | undefined;

  imageAlt?: string | undefined;
};

const toneRing: Record<
  NonNullable<MediaSlotProps["tone"]>,
  string
> = {
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
          src ? "opacity-10" : "opacity-22",
        )}
      />

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          src
            ? "bg-gradient-to-t from-black/95 via-black/55 via-35% to-transparent"
            : "bg-gradient-to-t from-black/25 via-transparent to-white/[0.015]",
        )}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-white/15"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-white/10"
      />

      {showLabel ? (
        <figcaption className="relative z-10 w-full p-4 sm:p-5">
          <span
            className={cn(
              "eyebrow block text-[0.56rem]",
              src ? "text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" : "text-foreground/50",
            )}
          >
            {label}
          </span>

          {sublabel ? (
            <span
              className={cn(
                "mt-1 block max-w-[28ch] text-xs leading-snug sm:text-sm",
                src ? "font-medium text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]" : "text-foreground/80",
              )}
            >
              {sublabel}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
