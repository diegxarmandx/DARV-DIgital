"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { navLinks, siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="DARV Digital home">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/50 bg-accent/20 text-sm font-semibold text-accent-light">
            DD
          </div>
          <div>
            <p className="font-heading text-base text-white">DARV Digital</p>
            <p className="text-xs text-mist-300">Technical Web Partner</p>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-mist-300 transition hover:text-white",
                  active ? "bg-white/10 text-white" : ""
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            {siteConfig.primaryCta}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-mist-200 transition hover:border-accent/50 hover:text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={cn(
          "overflow-hidden bg-ink-950/95 transition-[max-height,opacity,border-color] duration-300 md:hidden",
          open
            ? "pointer-events-auto max-h-[32rem] border-t border-white/10 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        )}
      >
        <div className="space-y-2 px-4 py-4 sm:px-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block rounded-xl px-4 py-3 text-sm font-medium text-mist-300 transition hover:bg-white/5 hover:text-white",
                  active ? "bg-white/10 text-white" : ""
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact" className="w-full">
            {siteConfig.primaryCta}
          </Button>
        </div>
      </nav>
    </header>
  );
}
