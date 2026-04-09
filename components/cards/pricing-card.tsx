import { Check } from "lucide-react";

import { siteConfig, type PricingPlan } from "@/lib/site-data";

import { Button } from "@/components/ui/button";
import { CardShell } from "@/components/ui/card-shell";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <CardShell
      className={cn(
        "flex h-full flex-col gap-6",
        plan.highlighted ? "border-accent/60 bg-gradient-to-b from-accent/20 to-ink-900 shadow-glow" : ""
      )}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-heading text-2xl text-white">{plan.name}</h3>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.1em] text-mist-300">
            {plan.note}
          </span>
        </div>
        <p className="font-heading text-4xl text-white">{plan.price}</p>
        <p className="text-sm leading-relaxed text-mist-300">{plan.idealFor}</p>
      </div>
      <ul className="space-y-3 text-sm text-mist-200">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <Check className="h-4 w-4 flex-none text-accent-light" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Button href="/contact" variant={plan.highlighted ? "primary" : "secondary"} className="mt-auto">
        {siteConfig.primaryCta}
      </Button>
    </CardShell>
  );
}
