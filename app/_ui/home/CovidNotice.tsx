import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "../motion/primitives";

/**
 * CovidNotice — Preserves the exact "COVID-19 Precautions Murfreesboro TN"
 * copy from the live homepage, presented as a premium notice card with an
 * icon-badge checklist (staggered entrance) instead of a plain bordered box.
 */

const STEPS = [
  {
    label: "Monitor your symptoms",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    label: "Call ahead before visiting your doctor",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Avoid close contact with others when you\u2019re out",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <path d="m17 8 4 4m0-4-4 4" />
      </svg>
    ),
  },
];

export function CovidNotice() {
  return (
    <section className="section-y-sm bg-[color:var(--color-surface-muted)]">
      <div className="container-content">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-white shadow-[var(--shadow-card)] hover-lift">
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[color:var(--color-brand-orange)] to-[color:var(--color-brand-blue)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-glow-orange"
            />
            <div className="relative p-8 md:p-12 pl-10 md:pl-14">
              <p className="eyebrow">Public Health Notice</p>
              <h2 className="h-section mt-3">
                COVID-19 <span className="accent-serif">Precautions</span> Murfreesboro TN
              </h2>

              <p className="mt-6 text-[color:var(--color-body)] leading-relaxed max-w-2xl">
                Do you think you may have COVID-19? If you think you&rsquo;re sick, follow guidance about when to call your doctor:
              </p>

              <Stagger className="mt-6 grid gap-3 sm:grid-cols-3" as="ul">
                {STEPS.map((step) => (
                  <StaggerItem
                    key={step.label}
                    as="li"
                    className="hover-lift flex items-start gap-3 rounded-2xl border border-transparent bg-[color:var(--color-surface-muted)] p-4 hover:border-[color:var(--color-border)]"
                  >
                    <span className="icon-badge h-9 w-9">{step.icon}</span>
                    <span className="text-sm font-medium text-[color:var(--color-brand-navy)] leading-snug">
                      {step.label}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>

              <p className="mt-6 text-[color:var(--color-body)] leading-relaxed max-w-2xl">
                Most people who get COVID-19 can take care of themselves at home. If you need to see a doctor, take precautions to protect yourself and others around you. See more:{" "}
                <a
                  href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html"
                  className="underline decoration-[color:var(--color-brand-blue)]/40 underline-offset-2 text-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-orange)] hover:decoration-[color:var(--color-brand-orange)]/60 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html
                </a>
              </p>

              <div className="mt-8">
                <Link href="/contact-us/" className="btn btn-primary">
                  Schedule Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
