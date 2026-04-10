import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { PortfolioProject } from "@/lib/site-data";

import { CardShell } from "@/components/ui/card-shell";

type PortfolioCardProps = {
  project: PortfolioProject;
};

export function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <CardShell className="group h-full overflow-hidden p-0">
        <div className={`h-44 bg-gradient-to-br ${project.accent} p-3`}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/20 bg-ink-900/75 backdrop-blur-sm">
            <Image
              src={project.snapshot}
              alt={`${project.title} website snapshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-900/20 to-transparent" />
            <p className="absolute bottom-3 left-3 text-[11px] font-medium uppercase tracking-[0.16em] text-mist-200">
              Live Project
            </p>
          </div>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between gap-3">
            <p className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-accent-light">
              {project.category}
            </p>
            <ArrowUpRight
              className="h-5 w-5 text-mist-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-light"
              aria-hidden="true"
            />
          </div>
          <h3 className="font-heading text-2xl text-white">{project.title}</h3>
          <p className="text-sm leading-relaxed text-mist-300">{project.summary}</p>
          <p className="text-xs leading-relaxed text-mist-300/90">
            <span className="font-semibold text-mist-200">Result:</span> {project.result}
          </p>
        </div>
      </CardShell>
    </a>
  );
}
