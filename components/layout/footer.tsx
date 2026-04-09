import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site-data";

import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr,0.8fr,0.8fr] lg:px-8">
        <div className="space-y-4">
          <h2 className="font-heading text-2xl text-white">DARV Digital</h2>
          <p className="max-w-md text-sm leading-relaxed text-mist-300">{siteConfig.tagline}</p>
          <Button href="/contact" size="sm">
            {siteConfig.primaryCta}
          </Button>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-mist-200">Site</h3>
          <ul className="space-y-3 text-sm text-mist-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex items-center gap-1 transition hover:text-white">
                  {link.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-mist-200">Contact</h3>
          <ul className="space-y-3 text-sm text-mist-300">
            <li>{siteConfig.location}</li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="transition hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a href={`tel:${siteConfig.phone}`} className="transition hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-mist-300">
        {new Date().getFullYear()} DARV Digital. All rights reserved.
      </div>
    </footer>
  );
}
