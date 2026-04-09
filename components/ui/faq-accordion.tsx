"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import { CardShell } from "@/components/ui/card-shell";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: readonly FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const expanded = openIndex === index;
        const panelId = `${id}-panel-${index}`;
        const buttonId = `${id}-button-${index}`;

        return (
          <CardShell key={item.question} className="p-0">
            <button
              id={buttonId}
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpenIndex(expanded ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-white">{item.question}</span>
              <ChevronDown
                className={cn("h-5 w-5 text-mist-300 transition", expanded ? "rotate-180 text-accent-light" : "")}
                aria-hidden="true"
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="min-h-0 border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-relaxed text-mist-300">
                {item.answer}
              </div>
            </div>
          </CardShell>
        );
      })}
    </div>
  );
}
