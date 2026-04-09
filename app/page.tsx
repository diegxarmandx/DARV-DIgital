import { ArrowRight, CheckCircle2, Layers3, MonitorSmartphone, Sparkles } from "lucide-react";

import { PricingCard } from "@/components/cards/pricing-card";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { ServiceCard } from "@/components/cards/service-card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { TrustStrip } from "@/components/sections/trust-strip";
import { pageMetadata } from "@/lib/seo";
import { faqs, featuredProjects, pricingPlans, processSteps, services, siteConfig } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Home",
  description:
    "Premium technical web solutions for local businesses in Puerto Rico. Build smarter websites, lead systems, and booking flows with DARV Digital.",
  path: "/"
});

export default function HomePage() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-24">
      <section className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-7 animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Premium Technical Web Partner
          </p>
          <h1 className="font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Technical web solutions for local businesses that want to grow smarter online.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-mist-300 sm:text-lg">
            DARV Digital builds modern websites, lead capture systems, and practical workflows that help
            local businesses turn online traffic into real opportunities.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg">
              {siteConfig.primaryCta} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/pricing" variant="secondary" size="lg">
              {siteConfig.secondaryCta}
            </Button>
          </div>
          <ul className="grid gap-3 text-sm text-mist-200 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" aria-hidden="true" />
              Performance-focused builds
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" aria-hidden="true" />
              Clear lead pathways
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" aria-hidden="true" />
              Practical automation support
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" aria-hidden="true" />
              Built for local growth
            </li>
          </ul>
        </div>

        <div className="animate-fade-up-delay">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-5 sm:p-6">
            <div className="pointer-events-none absolute inset-0 hero-grid opacity-35" aria-hidden="true" />
            <div className="relative z-10 space-y-4">
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">Lead Dashboard Concept</p>
                  <span className="rounded-full bg-accent/20 px-2 py-1 text-xs text-accent-light">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/10 bg-ink-900/80 p-3">
                    <p className="text-xs text-mist-300">New Leads</p>
                    <p className="mt-1 font-heading text-xl text-white">27</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink-900/80 p-3">
                    <p className="text-xs text-mist-300">Quote Requests</p>
                    <p className="mt-1 font-heading text-xl text-white">14</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink-900/80 p-3">
                    <p className="text-xs text-mist-300">Bookings</p>
                    <p className="mt-1 font-heading text-xl text-white">9</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-white">
                    <Layers3 className="h-4 w-4 text-accent-light" aria-hidden="true" />
                    System Modules
                  </p>
                  <div className="space-y-2 text-xs text-mist-300">
                    <div className="rounded-lg bg-white/5 px-3 py-2">Lead Intake Form</div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">Booking Flow</div>
                    <div className="rounded-lg bg-white/5 px-3 py-2">Auto Follow-up</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-white">
                    <MonitorSmartphone className="h-4 w-4 text-accent-light" aria-hidden="true" />
                    Responsive UX
                  </p>
                  <div className="space-y-2 text-xs text-mist-300">
                    <div className="h-8 rounded-lg bg-white/5" />
                    <div className="h-8 rounded-lg bg-white/10" />
                    <div className="h-8 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Services"
          title="Technical services built for practical growth"
          description="Every service is designed to improve trust, simplify operations, and help you convert more qualified local leads."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Portfolio Preview"
          title="Recent project directions"
          description="Examples reflect the type of local businesses we support with modern, high-trust website systems."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
        <div className="flex justify-start">
          <Button href="/portfolio" variant="secondary">
            Explore Full Portfolio
          </Button>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="How It Works"
          title="A clean process from strategy to launch"
          description="You always know what stage we are in, what is being built, and what comes next."
        />
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.step} className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-light">Step {step.step}</p>
              <h3 className="mt-3 font-heading text-xl text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Pricing Preview"
          title="Straightforward packages"
          description="Pricing is structured for clarity and easy updates as your business grows."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions"
          description="Clear answers before we start your project."
        />
        <FAQAccordion items={faqs} />
      </section>

      <CTASection
        title="Ready for a smarter online presence?"
        description="Book a free strategy call and get a clear technical direction for your next website upgrade."
      />
    </div>
  );
}
