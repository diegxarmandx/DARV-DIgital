import { ArrowUpRight, BriefcaseBusiness, Compass } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/cta-section";
import { SectionHeader } from "@/components/ui/section-header";
import { featuredProjects, portfolioProjects, siteConfig } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Explore DARV Digital project examples across contractors, restaurants, logistics, and local service businesses.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-24">
      <PageHero
        eyebrow="Portfolio"
        title="Recent project directions for local business growth"
        description="These examples show how we combine modern design and technical execution to create practical, trusted digital experiences."
      >
        <div className="flex flex-wrap gap-3 text-xs text-mist-200">
          <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">Contractors</span>
          <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">Restaurants</span>
          <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">Local Services</span>
          <span className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">Logistics</span>
        </div>
      </PageHero>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Project Library"
          title="Filter by business type"
          description="Use filters to quickly browse relevant project styles and structures."
        />
        <PortfolioGrid projects={portfolioProjects} />
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Case Study Highlights"
          title="What success looked like"
          description="Each project focused on clear service communication, better lead quality, and simpler team workflows."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-accent-light">
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                {project.category}
              </p>
              <h2 className="mt-4 font-heading text-2xl text-white">{project.title}</h2>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-mist-300">
                <p>
                  <span className="font-semibold text-mist-100">Challenge:</span> {project.challenge}
                </p>
                <p>
                  <span className="font-semibold text-mist-100">Result:</span> {project.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-accent-light">
              <Compass className="h-4 w-4" aria-hidden="true" />
              Your Project Direction
            </p>
            <h2 className="font-heading text-3xl leading-tight text-white">Want a portfolio-style roadmap for your business?</h2>
            <p className="text-sm leading-relaxed text-mist-300">
              We can map the exact pages, lead pathways, and technical scope your next website should include.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button href="/contact">
              {siteConfig.primaryCta} <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/pricing" variant="secondary">
              {siteConfig.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's design your next web build"
        description="Tell us your business goals and we'll recommend a practical technical direction aligned with your timeline."
      />
    </div>
  );
}
