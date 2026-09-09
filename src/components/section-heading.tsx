import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string | undefined;
  className?: string | undefined;
  align?: ("left" | "center") | undefined;
  children?: ReactNode | undefined;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="bar-brand h-[2px] w-8" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/72 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
      {children}
    </Reveal>
  );
}
