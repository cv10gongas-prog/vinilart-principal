import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 px-6 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300";

const variants = {
  primary:
    "border border-transparent bg-foreground text-ink hover:bg-magenta hover:text-foreground",
  outline:
    "border border-border text-foreground hover:border-cyan hover:text-cyan",
  ghost:
    "border border-transparent px-0 text-foreground/80 hover:text-yellow",
} as const;

type Variant = keyof typeof variants;

export function CtaLink({
  to,
  hash,
  variant = "primary",
  className,
  children,
  arrow = true,
}: {
  to: string;
  hash?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
}) {
  return (
    <Link
      to={to as never}
      hash={hash}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {arrow ? (
        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </Link>
  );
}

export function CtaAnchor({
  href,
  variant = "primary",
  className,
  children,
  arrow = true,
  external = false,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  arrow?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {arrow ? (
        <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </a>
  );
}
