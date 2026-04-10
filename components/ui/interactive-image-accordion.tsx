"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { siteConfig } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

type AccordionItem = {
  id: number;
  title: string;
  imageUrl: string;
};

type InteractiveImageAccordionProps = {
  className?: string;
  heading?: string;
  description?: string;
  items?: AccordionItem[];
};

const defaultItems: AccordionItem[] = [
  {
    id: 1,
    title: "Contractor Lead Funnels",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Restaurant Booking Sites",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Service Business Websites",
    imageUrl:
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Logistics Quote Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Ongoing Technical Support",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop"
  }
];

type AccordionPanelProps = {
  item: AccordionItem;
  isActive: boolean;
  onActivate: () => void;
};

function AccordionPanel({ item, isActive, onActivate }: AccordionPanelProps) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-label={item.title}
      aria-pressed={isActive}
      className={cn(
        "group relative h-[360px] shrink-0 overflow-hidden rounded-2xl border border-white/15 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:h-[390px] xl:h-[450px]",
        isActive ? "w-[210px] lg:w-[230px] xl:w-[300px] 2xl:w-[340px]" : "w-[42px] lg:w-[46px] xl:w-[56px] 2xl:w-[62px]"
      )}
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 260px, 360px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <span
        className={cn(
          "absolute whitespace-nowrap text-sm font-semibold tracking-wide text-white transition-all duration-200 sm:text-base",
          isActive
            ? "bottom-5 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-20 left-1/2 -translate-x-1/2 rotate-90"
        )}
      >
        {item.title}
      </span>

    </button>
  );
}

export function InteractiveImageAccordion({
  className,
  heading = "Technical websites built for local business growth.",
  description =
    "DARV Digital builds premium websites and lead systems that help local businesses turn visits into qualified inquiries.",
  items = defaultItems
}: InteractiveImageAccordionProps) {
  const accordionItems = items.length > 0 ? items : defaultItems;
  const [activeIndex, setActiveIndex] = useState(0);
  const clampedActiveIndex = Math.min(activeIndex, accordionItems.length - 1);
  const activeItem = accordionItems[clampedActiveIndex];

  useEffect(() => {
    if (activeIndex > accordionItems.length - 1) {
      setActiveIndex(accordionItems.length - 1);
    }
  }, [activeIndex, accordionItems.length]);

  const goToPrevious = () => {
    if (accordionItems.length <= 1) return;
    setActiveIndex((prev) => (prev === 0 ? accordionItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (accordionItems.length <= 1) return;
    setActiveIndex((prev) => (prev === accordionItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className={cn(
        "grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10 xl:gap-14",
        className
      )}
    >
      <div className="space-y-6 animate-fade-up lg:space-y-7">
        <p className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-light">
          Premium Technical Web Partner
        </p>
        <h1 className="max-w-[14ch] font-heading text-3xl leading-[1.05] tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
          {heading}
        </h1>
        <p className="max-w-xl text-base leading-7 text-mist-300 sm:text-lg sm:leading-8">{description}</p>
        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          <Button href="/contact" size="lg">
            {siteConfig.primaryCta}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="/pricing" variant="secondary" size="lg">
            {siteConfig.secondaryCta}
          </Button>
        </div>
      </div>

      <div className="animate-fade-up-delay">
        <div className="lg:hidden">
          <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/15 sm:h-[360px]">
            <Image
              src={activeItem.imageUrl}
              alt={activeItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/75" aria-hidden="true" />
            <div className="absolute inset-x-4 bottom-4">
              <p className="text-base font-semibold text-white sm:text-lg">{activeItem.title}</p>
            </div>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur transition hover:bg-black/60"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next photo"
              onClick={goToNext}
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur transition hover:bg-black/60"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {accordionItems.map((item, index) => (
              <button
                key={`${item.id}-dot`}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  index === clampedActiveIndex ? "w-6 bg-accent-light" : "w-2.5 bg-white/30"
                )}
              />
            ))}
          </div>
        </div>

        <div className="hidden w-full items-center justify-start gap-2 overflow-x-auto pb-2 pr-2 lg:flex xl:gap-3">
          {accordionItems.map((item, index) => (
            <AccordionPanel
              key={item.id}
              item={item}
              isActive={index === clampedActiveIndex}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
