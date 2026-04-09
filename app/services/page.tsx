import { ArrowRight, GaugeCircle, MessageCircleMore, Workflow } from "lucide-react";

import { ServiceCard } from "@/components/cards/service-card";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/ui/cta-section";
import { SectionHeader } from "@/components/ui/section-header";
import { addOnCapabilities, services, siteConfig } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore DARV Digital services: website design, redesign, landing pages, lead systems, booking flows, and practical website support for local businesses.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-24">
      <PageHero
        eyebrow="Services"
        title="Technical website services designed for real business outcomes"
        description="From custom website builds to lead workflows, each service is engineered to improve trust, simplify operations, and support steady local growth."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-mist-300">Focus</p>
            <p className="mt-2 text-sm font-medium text-white">Clarity and conversion</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-mist-300">Delivery</p>
            <p className="mt-2 text-sm font-medium text-white">Clean, maintainable builds</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-mist-300">Partnership</p>
            <p className="mt-2 text-sm font-medium text-white">Ongoing technical support</p>
          </div>
        </div>
      </PageHero>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Service Breakdown"
          title="Choose the systems your business needs most"
          description="Our service stack is modular. You can start with a strong website foundation and add lead systems and automations as your operations mature."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <GaugeCircle className="h-6 w-6 text-accent-light" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-2xl text-white">Better response speed</h2>
          <p className="mt-3 text-sm leading-relaxed text-mist-300">
            Structured forms and clear funnels reduce delays and help your team respond with confidence.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <MessageCircleMore className="h-6 w-6 text-accent-light" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-2xl text-white">Higher lead quality</h2>
          <p className="mt-3 text-sm leading-relaxed text-mist-300">
            We capture the right details upfront so your conversations start with context, not guesswork.
          </p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <Workflow className="h-6 w-6 text-accent-light" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-2xl text-white">Less manual coordination</h2>
          <p className="mt-3 text-sm leading-relaxed text-mist-300">
            Lightweight automations and routing keep your team focused on delivery, not repetitive admin tasks.
          </p>
        </article>
      </section>

      <CTASection
        title="Need a focused scope first?"
        description="Start with a strategy call. We can prioritize the highest-impact pages and systems for your current stage."
      />

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Technical Capabilities"
          title="Optional add-ons to extend your stack"
          description="Add-ons are scoped only when useful. No unnecessary complexity, no bloated retainers."
        />
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900/90 to-ink-950 p-6 sm:p-8">
          <ul className="grid gap-4 md:grid-cols-2">
            {addOnCapabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-mist-200">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-accent-light" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              {siteConfig.primaryCta} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
