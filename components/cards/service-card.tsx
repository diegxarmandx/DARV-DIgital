import { Check } from "lucide-react";

import type { ServiceItem } from "@/lib/site-data";

import { CardShell } from "@/components/ui/card-shell";

type ServiceCardProps = {
  service: ServiceItem;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <CardShell className="h-full space-y-5">
      <div className="space-y-3">
        <h3 className="font-heading text-2xl text-white">{service.title}</h3>
        <p className="text-sm leading-relaxed text-mist-300">{service.summary}</p>
      </div>
      <p className="rounded-2xl border border-accent/30 bg-accent/10 p-3 text-sm text-mist-100">{service.outcome}</p>
      <ul className="space-y-2 text-sm text-mist-300">
        {service.details.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-accent-light" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </CardShell>
  );
}
