import { PricingCard } from "@/components/cards/pricing-card";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/ui/cta-section";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { pageMetadata } from "@/lib/seo";
import { pricingComparison, pricingFaqs, pricingPlans } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Review DARV Digital pricing packages for website design, lead systems, technical support, and growth-focused local business websites.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-24">
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent packages"
        description="Use these packages as a starting point. Scope can be adjusted to match your goals, timeline, and technical requirements."
      />

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Packages"
          title="Choose your starting scope"
          description="All packages include strategy, design, development, and launch guidance."
          align="center"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeader
          eyebrow="Comparison"
          title="Feature overview"
          description="Quickly compare what each package includes."
        />
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <caption className="sr-only">DARV Digital package feature comparison table</caption>
              <thead className="bg-white/[0.03]">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-mist-100">Feature</th>
                  <th className="px-5 py-4 text-sm font-semibold text-mist-100">Foundation</th>
                  <th className="px-5 py-4 text-sm font-semibold text-mist-100">Growth</th>
                  <th className="px-5 py-4 text-sm font-semibold text-mist-100">Scale</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row) => (
                  <tr key={row.feature} className="border-t border-white/10">
                    <th scope="row" className="px-5 py-4 text-sm font-medium text-white">
                      {row.feature}
                    </th>
                    <td className="px-5 py-4 text-sm text-mist-300">{row.foundation}</td>
                    <td className="px-5 py-4 text-sm text-mist-300">{row.growth}</td>
                    <td className="px-5 py-4 text-sm text-mist-300">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Pricing FAQ"
          title="Before you decide"
          description="Answers to common pricing and scope questions."
        />
        <FAQAccordion items={pricingFaqs} />
      </section>

      <CTASection
        title="Need a custom scope?"
        description="Book a free strategy call and we will map the right package and deliverables for your business goals."
      />
    </div>
  );
}
