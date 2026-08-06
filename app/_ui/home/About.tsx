import Link from "next/link";
import { Counter, Reveal, Stagger, StaggerItem } from "../motion/primitives";
import { ClinicVideo } from "./ClinicVideo";

/**
 * About — "About Rutherford Spine & Wellness Center". Verbatim copy from
 * the live homepage, embedding the clinic tour video sourced from the live
 * WordPress uploads directory (mirrored into public/media/).
 */

const P1 =
  "Rutherford Spine & Wellness Center is a locally owned chiropractic clinic in Murfreesboro, TN. Our licensed chiropractor, Dr. Wesley Stewart, has been freeing people from pain for 16 years now. Dr. Stewart is committed to promoting the optimal health and well-being of his patients by using the \u201Cwhole person approach\u201D. This approach to wellness is to look for hidden causes of any disturbance or disruption (may or may not be causing symptoms at the time) and make necessary interventions and lifestyle adjustments needed to minimize the conditions for normal function. With this unique approach, Dr. Stewart is able to help you to advance and/or maintain your journey to better health.";

const P2 =
  "We have been curing people from many acute and chronic pain and debilitating issues through natural chiropractic care. Our office works to help with sports injuries, auto injuries, neuropathy, chiropractic adjustments, spinal decompression and back pain relief. We would love the opportunity to help you with your pain in a natural and non-invasive way to help get you back to your normal activities and off of prescription medications.";

const P3 =
  "Give us a call or fill out our online form to schedule your chiropractic and wellness consultation.";

const STATS = [
  {
    value: 16,
    suffix: "+",
    label: "Years Experience",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    value: 100,
    suffix: "%",
    label: "Non-invasive Care",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4.5 8-11.5V5l-8-3-8 3v5.5C4 17.5 12 22 12 22Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: 6,
    suffix: "",
    label: "Focus Areas",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
];

export function About() {
  return (
    <section className="section-y bg-white relative">
      {/* Clipped separately from the section so `overflow-hidden` doesn't
          disable `position: sticky` on the video column below. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-glow-blue" />
      </div>
      <div className="container-wide relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          {/* Copy column */}
          <div>
            <Reveal>
              <p className="eyebrow">About the Clinic</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-3">
                About Rutherford Spine <span className="accent-serif">&amp;</span> Wellness Center
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 text-[color:var(--color-body)] leading-relaxed">
                {P1}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-[color:var(--color-body)] leading-relaxed">
                {P2}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-4 text-[color:var(--color-body)] leading-relaxed">
                {P3}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="tel:+16152170097"
                  className="text-2xl font-extrabold text-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-orange)] transition-colors tracking-tight"
                >
                  615.217.0097
                </a>
                <Link href="/contact-us/" className="btn btn-primary">
                  Schedule Your Consultation
                </Link>
              </div>
            </Reveal>

            {/* Stat cards */}
            <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {STATS.map((stat) => (
                <StaggerItem
                  key={stat.label}
                  className="hover-lift surface-card flex flex-col items-start gap-3 p-5"
                >
                  <span className="icon-badge h-11 w-11">{stat.icon}</span>
                  <p className="stat-number">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="stat-label">{stat.label}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Video column - sticks in place on large screens while the
              copy column scrolls past it, then releases at the section end. */}
          <Reveal delay={0.1} className="lg:sticky lg:top-[152px] lg:self-start">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-glow-orange"
              />
              <div className="relative">
                <ClinicVideo />
              </div>

              {/* Trust badge card — moved BELOW the video so it doesn't
                  overlap the browser's native video controls when playing. */}
              <div className="mt-4 glass-panel-light flex items-center gap-4 rounded-2xl px-5 py-4 shadow-[var(--shadow-elevated)] sm:w-auto sm:self-start">
                <span className="icon-badge h-11 w-11 shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 12 2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-[color:var(--color-brand-navy)] leading-tight">
                    Dr. Wesley Stewart
                  </p>
                  <p className="text-xs text-[color:var(--color-muted)]">
                    16+ years serving Murfreesboro, TN
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-[color:var(--color-muted)]">
                A short tour of the Rutherford Spine &amp; Wellness Center clinic in Murfreesboro, TN.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
