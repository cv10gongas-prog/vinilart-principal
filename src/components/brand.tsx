import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  sport = false,
}: {
  className?: string | undefined;
  sport?: boolean | undefined;
}) {
  return (
    <span
      className={cn(
        "font-display inline-flex items-baseline gap-1.5 text-xl font-extrabold uppercase tracking-tight",
        className,
      )}
    >
      <span className="text-foreground">
        Vinil<span className="text-gradient-brand">Art</span>
      </span>
      {sport ? (
        <span className="font-display translate-y-[-1px] text-[0.6em] font-bold uppercase tracking-[0.3em] text-yellow">
          Sport
        </span>
      ) : null}
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
    tone === "magenta"
      ? "var(--magenta)"
      : tone === "cyan"
        ? "var(--cyan)"
        : "var(--yellow)";

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
