import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  sport = false,
}: {
  className?: string | undefined;
  sport?: boolean | undefined;
}) {
  if (sport) {
    return (
      <span
        className={cn(
          "font-display inline-flex items-center gap-2 text-xl font-extrabold uppercase tracking-tight",
          className,
        )}
      >
        <img
          src="/brand/vinilart-wordmark-white.png"
          alt="VinilArt"
          className="h-[1.1em] w-auto object-contain"
        />
        <span className="font-display text-[0.55em] font-bold uppercase tracking-[0.28em] text-yellow">
          Sport
        </span>
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src="/brand/vinilart-wordmark-white.png"
        alt="VinilArt"
        className="h-[1.15em] w-auto object-contain"
      />
    </span>
  );
}

/** Faixa gráfica magenta / ciano / amarelo. */
export function BrandBar({ className }: { className?: string | undefined }) {
  return <div className={cn("bar-brand h-[3px] w-full", className)} aria-hidden="true" />;
}

/** Pincelada difusa para dar profundidade a fundos escuros. */
export function BrushGlow({
  className,
  tone = "magenta",
}: {
  className?: string | undefined;
  tone?: ("magenta" | "cyan" | "yellow") | undefined;
}) {
  const color =
    tone === "magenta" ? "var(--magenta)" : tone === "cyan" ? "var(--cyan)" : "var(--yellow)";

  return (
    <div
      aria-hidden="true"
      className={cn("brush-drift pointer-events-none absolute blur-3xl", className)}
      style={{
        background: `radial-gradient(closest-side, color-mix(in oklab, ${color} 55%, transparent), transparent)`,
      }}
    />
  );
}
