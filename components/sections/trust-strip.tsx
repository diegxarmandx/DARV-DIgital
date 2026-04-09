import { ShieldCheck } from "lucide-react";

import { trustPoints } from "@/lib/site-data";

export function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {trustPoints.map((point) => (
          <li
            key={point}
            className="flex items-center gap-2 rounded-2xl border border-white/10 bg-ink-900/50 px-3 py-2 text-sm text-mist-200"
          >
            <ShieldCheck className="h-4 w-4 flex-none text-accent-light" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
