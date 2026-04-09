import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-8 sm:p-12">
      <div className="absolute right-0 top-0 h-48 w-48 -translate-y-1/4 translate-x-1/4 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">{eyebrow}</p>
        <h1 className="font-heading text-4xl leading-tight text-white sm:text-5xl">{title}</h1>
        <p className="text-base leading-relaxed text-mist-300 sm:text-lg">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">{siteConfig.primaryCta}</Button>
          <Button href="/pricing" variant="secondary">
            {siteConfig.secondaryCta}
          </Button>
        </div>
        {children}
      </div>
    </section>
  );
}
