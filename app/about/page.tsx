import { Code2, Lightbulb, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/ui/cta-section";
import { SectionHeader } from "@/components/ui/section-header";
import { aboutPrinciples } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Meet DARV Digital and founder Diego A. Ramos Villanueva. A technical web partner focused on practical systems and clear execution for local businesses.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-8 sm:space-y-24">
      <PageHero
        eyebrow="About"
        title="A thoughtful technical partner for local businesses"
        description="DARV Digital exists to help local teams run smarter online with modern websites, practical systems, and clear technical guidance."
      />

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <article className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">Founder</p>
          <h2 className="mt-3 font-heading text-3xl text-white">Diego A. Ramos Villanueva</h2>
          <p className="mt-5 text-base leading-relaxed text-mist-300">
            DARV Digital is built around one core promise: give local businesses access to high-quality technical
            web execution without unnecessary complexity. The focus is practical growth, clear communication, and
            systems that are easy to operate after launch.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mist-300">
            Every project is approached with business context first, then design and code decisions that support
            lead quality, conversion clarity, and long-term maintainability.
          </p>
        </article>

        <aside className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-6">
          <h3 className="font-heading text-2xl text-white">How we work</h3>
          <ul className="space-y-3 text-sm leading-relaxed text-mist-300">
            <li className="flex gap-3">
              <Code2 className="mt-0.5 h-4 w-4 flex-none text-accent-light" aria-hidden="true" />
              Technical decisions are explained in plain language.
            </li>
            <li className="flex gap-3">
              <Lightbulb className="mt-0.5 h-4 w-4 flex-none text-accent-light" aria-hidden="true" />
              Priorities are set around business outcomes, not trend-driven features.
            </li>
            <li className="flex gap-3">
              <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-accent-light" aria-hidden="true" />
              Delivery emphasizes reliability, performance, and long-term clarity.
            </li>
          </ul>
        </aside>
      </section>

      <section className="space-y-10">
        <SectionHeader
          eyebrow="Principles"
          title="What guides every build"
          description="DARV Digital follows a small set of principles that keep projects focused and trustworthy."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {aboutPrinciples.map((principle) => (
            <article key={principle.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="font-heading text-2xl text-white">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <SectionHeader
          eyebrow="Partnership"
          title="Built for long-term collaboration"
          description="Whether your business needs a focused website rebuild or ongoing technical support, DARV Digital is designed to be a reliable technical partner over time."
        />
      </section>

      <CTASection
        title="Let's map your next website direction"
        description="Book a free strategy call to review your current site and define a practical technical roadmap."
      />
    </div>
  );
}
