import { cn } from "@/lib/utils";

type MediaSlotProps = {
  /** Descrição da fotografia real que irá substituir este bloco. */
  label: string;
  className?: string | undefined;
  ratio?: string | undefined;
  tone?: ("magenta" | "cyan" | "yellow" | "neutral") | undefined;
  showLabel?: boolean | undefined;
};

const toneRing: Record<NonNullable<MediaSlotProps["tone"]>, string> = {
  magenta: "before:bg-magenta",
  cyan: "before:bg-cyan",
  yellow: "before:bg-yellow",
  neutral: "before:bg-border",
};

/**
 * Contentor de imagem substituível: bloco gráfico escuro com textura e
 * gradiente subtil. Trocar por <img> quando existirem fotografias reais.
 */
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
      style={{ aspectRatio: ratio }}
      className={cn(
        "media-slot surface-grain group/slot flex h-full w-full items-end",
        "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:content-['']",
        toneRing[tone],
        className,
      )}
    >
      <div className="surface-diagonal pointer-events-none absolute inset-0 opacity-60" />
      {showLabel ? (
        <figcaption className="relative z-10 w-full p-4 sm:p-5">
          <span className="eyebrow block text-[0.6rem] text-muted-foreground/80">
            Imagem
          </span>
          <span className="mt-1 block max-w-[26ch] text-sm leading-snug text-foreground/70">
            {label}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
