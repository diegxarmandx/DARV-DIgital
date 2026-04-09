import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { contactExpectations, faqs, siteConfig } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact DARV Digital to discuss your website project, lead system setup, redesign scope, or support needs.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-24">
      <PageHero
        eyebrow="Contact"
        title="Start with a clear strategy conversation"
        description="Tell us about your business goals and current website challenges. We will recommend the most practical next step."
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <SectionHeader
            eyebrow="Project Request"
            title="Book your free strategy call"
            description="Share a few project details and we will follow up with clear scope guidance."
          />
          <div className="mt-8">
            <ContactForm />
          </div>
        </article>

        <aside className="space-y-6">
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-6">
            <h2 className="font-heading text-2xl text-white">Contact details</h2>
            <ul className="mt-5 space-y-4 text-sm text-mist-300">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent-light" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-accent-light" aria-hidden="true" />
                <a href={`tel:${siteConfig.phone}`} className="transition hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-accent-light" aria-hidden="true" />
                {siteConfig.location}
              </li>
            </ul>
            <div className="mt-6">
              <Button href="/pricing" variant="secondary" className="w-full">
                {siteConfig.secondaryCta}
              </Button>
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-accent-light">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              What to Expect
            </p>
            <ul className="mt-4 space-y-3 text-sm text-mist-300">
              {contactExpectations.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent-light" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </aside>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Quick FAQ"
          title="Helpful details before we talk"
          description="A few common questions from new clients."
        />
        <FAQAccordion items={faqs.slice(0, 4)} />
      </section>
    </div>
  );
}
