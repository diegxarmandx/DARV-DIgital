import { ArrowUpRight } from "lucide-react";

import type { PortfolioProject } from "@/lib/site-data";

import { CardShell } from "@/components/ui/card-shell";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <CardShell className="group h-full overflow-hidden p-0">
      <div className={`h-40 bg-gradient-to-br ${project.accent} p-4`}>
        <div className="h-full rounded-2xl border border-white/20 bg-ink-900/75 p-4 backdrop-blur-sm">
          <div className="grid h-full grid-cols-[1fr_auto] gap-3">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.18em] text-mist-300">Project Snapshot</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-10 rounded-lg bg-white/10" />
                <div className="h-10 rounded-lg bg-white/5" />
                <div className="h-10 rounded-lg bg-white/5" />
              </div>
              <div className="h-12 rounded-lg bg-white/10" />
            </div>
            <div className="h-full w-14 rounded-xl bg-white/10" />
          </div>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-accent-light">
            {project.category}
          </p>
          <ArrowUpRight className="h-5 w-5 text-mist-300 transition group-hover:text-accent-light" aria-hidden="true" />
        </div>
        <h3 className="font-heading text-2xl text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-mist-300">{project.summary}</p>
        <p className="text-xs leading-relaxed text-mist-300/90">
          <span className="font-semibold text-mist-200">Result:</span> {project.result}
        </p>
      </div>
    </CardShell>
  );
}
