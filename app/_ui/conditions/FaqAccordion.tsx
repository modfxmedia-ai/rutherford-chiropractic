"use client";

import { useState } from "react";
import { ChevronDownIcon } from "../icons";
import type { ConditionFaq } from "../../_lib/conditions";

/**
 * Simple single-open accordion for a condition page's FAQ section.
 * Fully keyboard accessible: each question is a real `<button>` so it's
 * reachable via Tab and toggles with Enter/Space, and `aria-expanded` +
 * `aria-controls` communicate state to assistive tech.
 */
export function FaqAccordion({ faqs }: { faqs: ConditionFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[color:var(--color-border)] overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-white">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={faq.question}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-[color:var(--color-brand-navy)] transition-colors hover:text-[color:var(--color-brand-blue)]"
              >
                {faq.question}
                <ChevronDownIcon
                  size={18}
                  className={`shrink-0 text-[color:var(--color-brand-blue)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-all duration-300 ease-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[color:var(--color-body)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
