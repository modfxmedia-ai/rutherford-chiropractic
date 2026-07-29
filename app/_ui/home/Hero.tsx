"use client";

/**
 * Hero — Modern full-viewport hero for rutherfordchiropractic.com
 *
 * Layout
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  Video BG (loop, muted)                                         │
 * │  Navy → Blue → Navy diagonal scrim (legibility)                 │
 * │  Orange top-right + Blue bottom-left radial ambient glow        │
 * │  ┌──────────────────────────┐   ┌──────────────────────────┐   │
 * │  │ Eyebrow pill             │   │ Floating trust card      │   │
 * │  │ H1 (verbatim, orange     │   │  · Dr. Wesley Stewart    │   │
 * │  │    italic-serif accent)  │   │  · Whole Person Approach │   │
 * │  │ Intro paragraph (verbatim)   │  · Hours + wait time      │   │
 * │  │ ★★★★★ 5.0 Trusted        │   │ Floating 100% stat chip  │   │
 * │  │ [Schedule] [Call]        │   │ (both float via CSS)     │   │
 * │  │ 16+ / Whole-Person / Care│   └──────────────────────────┘   │
 * │  └──────────────────────────┘                                   │
 * │           ↓ Scroll                                              │
 * │  Bottom fade → next section                                     │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * Motion strategy
 * ---------------
 * The copy card uses the shared `Reveal` primitive (framer-motion
 * `whileInView`) which is the proven pattern on this stack. However
 * `motion.svg`, `motion.a`, and `Reveal`-wrapped `hidden lg:block`
 * containers were leaving elements stuck at their hidden state after
 * hydration in this Next.js 16 + React 19 + framer-motion 12 setup, so
 * those specific elements use deterministic CSS `@keyframes` utilities
 * (`hero-anim-*`) from `globals.css`. Every animation respects
 * `prefers-reduced-motion`.
 *
 * Copy
 * ----
 * H1 and the intro paragraph are the VERBATIM text from
 * rutherfordchiropractic.com so ranking signals stay intact.
 *
 * Palette (STRICT)
 * ----------------
 * White, Deep Navy (#011149), Primary Blue (#004B99), Accent Orange
 * (#FC8F00), Body Gray (#666666), Muted Gray (#999999). Nothing else.
 */

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Counter, FloatOnHover, Parallax, Reveal, Stagger, StaggerItem } from "../motion/primitives";
import { MagneticButton } from "../motion/MagneticButton";

const HERO_PARAGRAPH =
  "Rutherford Spine & Wellness Center provides compassionate chiropractic care in Murfreesboro, TN. Utilizing the \u201CWhole Person Approach\u201D. This approach uses non-invasive technology to find hidden causes to your pain and helps you through traditional chiropractic care and lifestyle adjustments to get you back to your old self again.";

function StarCascade() {
  // CSS-keyframe cascade — five stars fade + scale in with a 90ms stagger.
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="rating-star hero-anim-star"
            style={{ animationDelay: `${0.9 + i * 0.09}s` }}
          >
            <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-bold text-white">5.0</span>
      <span className="text-sm text-white/80">
        Trusted by Murfreesboro families
      </span>
    </div>
  );
}

/* ---------------------------------------------------------------------------
 * Right-column composition helpers — small local icons + a decorative
 * connecting-lines SVG. Kept local to this file (same precedent as
 * Footer.tsx's local `StarIcon`/`ShieldIcon`) rather than added to the
 * shared `icons.tsx`, since they're only ever used in this one composition.
 * ------------------------------------------------------------------------- */

function iconBase(children: ReactNode) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const SpineIcon = () =>
  iconBase(
    <>
      <path d="M12 2v3M12 19v3" />
      <path d="M9 5h6M8 8.5h8M9 12h6M8 15.5h8M9 19h6" />
    </>
  );

const PulseIcon = () =>
  iconBase(<path d="M3 12h4l2-7 4 14 2-7h6" />);

const NerveIcon = () =>
  iconBase(
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7.5 7.2 11 16.3M16.5 7.2 13 16.3M8 6h8" />
    </>
  );

/** Faint decorative bezier lines drifting behind the floating cards. */
function ConnectorLines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-visible"
      viewBox="0 0 400 600"
      preserveAspectRatio="none"
    >
      <path
        d="M20 60 C 160 10, 260 120, 380 90"
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="1.5"
        strokeDasharray="4 8"
        className="hero-anim-dash"
      />
      <path
        d="M0 320 C 140 280, 220 420, 400 380"
        fill="none"
        stroke="rgba(252,143,0,0.22)"
        strokeWidth="1.5"
        strokeDasharray="3 7"
        className="hero-anim-dash"
        style={{ animationDelay: "0.8s" }}
      />
    </svg>
  );
}

const SPECIALTIES: Array<{ label: string; icon: () => ReactNode }> = [
  { label: "Chiropractic", icon: SpineIcon },
  { label: "Spinal Decompression", icon: PulseIcon },
  { label: "Neuropathy", icon: NerveIcon },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative isolate min-h-[100svh] w-full overflow-hidden text-white"
      aria-label="Rutherford Spine and Wellness Center — Chiropractic Care Murfreesboro TN"
    >
      {/* Layer 1 — Video background (autoplay, muted, looped) */}
      <video
        src="/media/homepage-bg-video.mp4"
        poster="/media/chiropractors-murfreesboro-tn.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Layer 2 — Brand legibility scrim (navy → blue diagonal, brand-only) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(120deg, rgba(1,17,73,0.82) 0%, rgba(0,75,153,0.55) 55%, rgba(1,17,73,0.65) 100%)",
        }}
      />

      {/* Layer 3 — Ambient accent glows (top-right orange, bottom-left blue) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(45% 40% at 85% 20%, rgba(252,143,0,0.28) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(0,75,153,0.55) 0%, transparent 70%)",
        }}
      />

      {/* Layer 4 — Content */}
      <div className="container-wide relative flex min-h-[100svh] flex-col justify-center pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-14">
          {/* Copy card */}
          <div className="relative max-w-2xl">
            {/* Eyebrow pill */}
            <Reveal delay={0.05} y={12} as="div">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-brand-orange)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-brand-orange)]" />
                </span>
                <span>Now Accepting New Patients · Murfreesboro, TN</span>
              </span>
            </Reveal>

            {/* H1 — verbatim, wrapped in Reveal (motion.h1 misbehaves on this stack) */}
            <Reveal delay={0.15} as="div" className="mt-6">
              <h1
                className="h-display !text-white lg:text-[clamp(2.5rem,1.3rem+3.1vw,4.25rem)]"
                style={{ textWrap: "balance" as unknown as string }}
              >
                Chiropractic
                <br className="hidden sm:block" />{" "}
                <span
                  className="accent-serif"
                  style={{ color: "var(--color-brand-orange)" }}
                >
                  Care
                </span>
                <br className="hidden sm:block" />{" "}
                <span className="lg:whitespace-nowrap">Murfreesboro TN</span>
              </h1>
            </Reveal>

            {/* Intro copy (verbatim) */}
            <Reveal delay={0.3} as="div" className="mt-6 max-w-xl">
              <p className="text-lg text-white/90 leading-relaxed">
                {HERO_PARAGRAPH}
              </p>
            </Reveal>

            {/* Star rating (CSS-keyframe cascade) */}
            <Reveal delay={0.45} as="div" className="mt-8">
              <StarCascade />
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.6} as="div" className="mt-8">
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton
                  href="/contact-us/"
                  className="btn btn-lg relative overflow-hidden bg-[color:var(--color-brand-orange)] !text-white border-[color:var(--color-brand-orange)] hover:bg-[color:var(--color-brand-orange-700)] hover:border-[color:var(--color-brand-orange-700)] shadow-[var(--shadow-elevated)]"
                >
                  <span className="relative z-10">
                    Schedule Your Consultation
                  </span>
                  {!reduce && (
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                      }}
                      initial={{ x: "-120%" }}
                      animate={{ x: "120%" }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </MagneticButton>

                <MagneticButton
                  href="tel:+16152170097"
                  className="btn btn-lg border-2 border-white/40 text-white bg-white/5 backdrop-blur-md hover:bg-white/15 hover:border-white/70 transition-colors"
                  strength={0.18}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call 615-217-0097
                </MagneticButton>
              </div>
            </Reveal>

            {/* Trust strip */}
            <Reveal delay={0.75} as="div" className="mt-12">
              <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    Years Experience
                  </dt>
                  <dd className="mt-1 text-3xl font-extrabold text-[color:var(--color-brand-orange)]">
                    16+
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    Whole-Person
                  </dt>
                  <dd className="mt-1 text-3xl font-extrabold text-[color:var(--color-brand-orange)]">
                    Approach
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                    Non-invasive
                  </dt>
                  <dd className="mt-1 text-3xl font-extrabold text-[color:var(--color-brand-orange)]">
                    Care
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Floating trust card (right column, desktop only). Plain HTML +
              CSS keyframes to sidestep the framer-motion `hidden lg:block`
              hydration issue described in the file header. */}
          <aside
            className="hidden lg:block hero-anim-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Parallax strength={14} className="relative">
              {/* Ambient glow blobs — purely decorative, never over text */}
              <div
                aria-hidden
                className="absolute -right-10 -top-16 -z-10 h-56 w-56 rounded-full bg-[color:var(--color-brand-blue)]/35 blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -bottom-14 -left-10 -z-10 h-52 w-52 rounded-full bg-[color:var(--color-brand-orange)]/25 blur-3xl"
              />
              <ConnectorLines />

              {/* Cards are stacked in normal flow (margin, not negative
                  absolute overlap) so nothing can clip/obscure adjacent
                  content at any breakpoint. `Stagger`/`StaggerItem` are
                  plain `motion.div`s nested inside this plain (non-motion)
                  `hidden lg:block` wrapper, which sidesteps the documented
                  hydration issue (that only affects `motion.svg`/`motion.a`
                  and Reveal-wrapped `hidden lg:block` containers). */}
              <Stagger className="relative flex flex-col gap-5">
                {/* Specialty highlight chips */}
                <StaggerItem className="flex flex-wrap gap-3">
                  {SPECIALTIES.map(({ label, icon: Icon }, i) => (
                    <div
                      key={label}
                      className="hero-anim-float-slow"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    >
                      <FloatOnHover>
                        <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[color:var(--color-brand-orange)]">
                            <Icon />
                          </span>
                          {label}
                        </span>
                      </FloatOnHover>
                    </div>
                  ))}
                </StaggerItem>

                {/* Provider trust card */}
                <StaggerItem>
                  <div className="hero-anim-float">
                    <FloatOnHover>
                      <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[var(--shadow-elevated)] backdrop-blur-xl">
                      <div className="flex items-center gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--color-brand-orange)] text-[color:var(--color-brand-navy)] shadow-lg">
                          <svg
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M9 12l2 2 4-4" />
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                        <div>
                          <span className="inline-flex items-center rounded-full bg-[color:var(--color-brand-orange)]/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[color:var(--color-brand-orange)] ring-1 ring-inset ring-[color:var(--color-brand-orange)]/40">
                            Locally Owned Clinic
                          </span>
                          <p className="mt-2 text-lg font-bold text-white">
                            Dr. Wesley Stewart, DC
                          </p>
                          <p className="text-sm text-white/75">
                            Whole Person Approach
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-5">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                            Hours today
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            9:00am – 6:00pm
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">
                            Wait time
                          </p>
                          <p className="mt-1 text-sm font-semibold text-white">
                            Same-week bookings
                          </p>
                        </div>
                      </div>
                    </div>
                  </FloatOnHover>
                  </div>
                </StaggerItem>

                {/* Stat + rating row — animated counter and the same
                    verified 5.0 rating shown in the copy column, never a
                    fabricated quote/name. */}
                <StaggerItem className="grid grid-cols-2 gap-4">
                  <div className="hero-anim-float-alt">
                    <FloatOnHover>
                      <div className="h-full rounded-2xl border border-white/20 bg-[color:var(--color-brand-navy)]/85 px-5 py-4 shadow-[var(--shadow-elevated)] backdrop-blur">
                        <p className="text-3xl font-extrabold leading-none text-[color:var(--color-brand-orange)]">
                          <Counter to={100} suffix="%" />
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                          Non-invasive care
                        </p>
                      </div>
                    </FloatOnHover>
                  </div>
                  <div className="hero-anim-float">
                    <FloatOnHover>
                      <div className="h-full rounded-2xl border border-white/20 bg-white/10 px-5 py-4 shadow-[var(--shadow-elevated)] backdrop-blur">
                        <div className="flex items-center gap-1" aria-hidden>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              width="13"
                              height="13"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-[color:var(--color-brand-orange)]"
                            >
                              <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                            </svg>
                          ))}
                        </div>
                        <p className="mt-1 text-lg font-extrabold leading-none text-white">
                          5.0 Rating
                        </p>
                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                          Murfreesboro families
                        </p>
                      </div>
                    </FloatOnHover>
                  </div>
                </StaggerItem>

                {/* Trust / certification badge */}
                <StaggerItem className="self-start">
                  <div className="hero-anim-float-slow">
                    <FloatOnHover>
                      <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-white">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[color:var(--color-brand-orange)]">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M9 12l2 2 4-4" />
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </span>
                        HIPAA Compliant Care
                      </span>
                    </FloatOnHover>
                  </div>
                </StaggerItem>
              </Stagger>
            </Parallax>
          </aside>
        </div>

        {/* Scroll indicator — plain <a> with CSS keyframe bounce */}
        <a
          href="#services"
          aria-label="Scroll to services"
          className="pointer-events-auto absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors hero-anim-fade-up"
          style={{ animationDelay: "1.6s" }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.24em]">
            Scroll
          </span>
          <span className="relative flex h-9 w-5 justify-center rounded-full border border-white/40">
            <span className="mt-1.5 block h-1.5 w-1 rounded-full bg-white hero-anim-scroll" />
          </span>
        </a>
      </div>

      {/* Layer 5 — Bottom fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
      />
    </section>
  );
}
