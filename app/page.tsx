import { PricingCard } from "@/components/cards/pricing-card";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { ServiceCard } from "@/components/cards/service-card";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { InteractiveImageAccordion } from "@/components/ui/interactive-image-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { TrustStrip } from "@/components/sections/trust-strip";
import { pageMetadata } from "@/lib/seo";
import { faqs, featuredProjects, pricingPlans, processSteps, services } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Home",
  description:
    "Premium technical web solutions for local businesses in Puerto Rico. Build smarter websites, lead systems, and booking flows with DARV Digital.",
  path: "/"
});

export default function HomePage() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-24">
      <InteractiveImageAccordion />

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
