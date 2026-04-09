import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/lib/site-data";

import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title: string;
  description: string;
};

export function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/20 via-accent-soft/20 to-ink-900 p-8 sm:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(88,166,255,0.28),transparent_45%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
        <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-mist-200">{description}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" size="lg">
            {siteConfig.primaryCta} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            {siteConfig.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
