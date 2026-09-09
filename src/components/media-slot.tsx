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
      <div
        aria-hidden="true"
        className="surface-diagonal pointer-events-none absolute inset-0 opacity-22"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/[0.015]"
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
          <span className="eyebrow block text-[0.56rem] text-foreground/35">
            Imagem
          </span>

          <span className="mt-1.5 block max-w-[26ch] text-xs leading-snug text-foreground/58 sm:text-sm">
            {label}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
