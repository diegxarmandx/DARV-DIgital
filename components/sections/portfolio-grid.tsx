"use client";

import { useMemo, useState } from "react";

import type { PortfolioProject } from "@/lib/site-data";

import { PortfolioCard } from "@/components/cards/portfolio-card";
import { cn } from "@/lib/utils";

type PortfolioGridProps = {
  projects: PortfolioProject[];
};

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects]
  );

  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-sm font-medium transition",
              activeCategory === category
                ? "border-accent bg-accent/20 text-white"
                : "border-white/15 bg-white/[0.03] text-mist-300 hover:border-accent/50 hover:text-white"
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
