"use client";

/**
 * <CareSlider> — "Areas We Treat" band that mirrors the live WordPress
 * homepage slider. Each slide preserves the EXACT wording from the live
 * rutherfordchiropractic.com homepage slider.
 *
 * Redesigned from a plain text block + unlabeled dot-pager (confusing —
 * nothing told visitors what each dot represented) into a labeled icon-tab
 * bar with a story-style progress fill, plus an icon medallion alongside
 * the copy so the band reads as five distinct, scannable areas of care
 * rather than one ambiguous rotating panel. Rotates every 6.5s; pauses on
 * hover / focus / when the user prefers reduced motion.
 */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, type SVGProps } from "react";

type CareSlide = {
  id: string;
  title: string;
  copy: string;
  href: string;
};

const SLIDES: CareSlide[] = [
  {
    id: "chiropractic",
    title: "Chiropractic Care Murfreesboro TN",
    copy:
      "Rutherford Spine & Wellness Center provides compassionate chiropractic care in Murfreesboro, TN. Utilizing the \u201CWhole Person Approach\u201D. This approach uses non-invasive technology to find hidden causes to your pain and helps you through traditional chiropractic care and lifestyle adjustments to get you back to your old self again.",
    href: "/chiropractic/",
  },
  {
    id: "decompression",
    title: "Spinal Decompression Murfreesboro TN",
    copy:
      "Spinal decompression relieves back and spine pain in a safe and natural way through gentle stretching of the spine. This pain could have been caused by an injury decades ago and spinal decompression can help generate relief and fix your pain.",
    href: "/spinal-decompression/",
  },
  {
    id: "neuropathy",
    title: "Neuropathy Murfreesboro TN",
    copy:
      "Rutherford Spine & Wellness Center is offering opioid-free/drug-free alternative therapies for acute, and/or chronic neuropathy pain or circulatory disorders symptoms patients.",
    href: "/neuropathy/",
  },
  {
    id: "auto",
    title: "Auto Injuries",
    copy:
      "Auto injuries can cause immediate pain to your body however it can also cause hidden damage to your neck and spine that if left untreated, can deteriorate really bad overtime. Come see us in Murfreesboro, TN if you have been in an auto accident to ensure there is no long term damage.",
    href: "/auto-injuries/",
  },
  {
    id: "sports",
    title: "Sports Injuries",
    copy:
      "No matter if you are a serious marathon runner or more of a casual weekend athlete, Rutherford Spine & Wellness Center in Murfreesboro, TN can prevent and care for your sports injuries.",
    href: "/sports-injuries/",
  },
];

const TAB_LABELS: Record<string, string> = {
  chiropractic: "Chiropractic",
  decompression: "Decompression",
  neuropathy: "Neuropathy",
  auto: "Auto Injuries",
  sports: "Sports Injuries",
};

const INTERVAL_MS = 6500;

function IconIsland(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  );
}

/** Small line icons — one per area of care, used in both the tab bar and
 * the large medallion beside the active slide's copy. */
const AREA_ICONS: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  chiropractic: (props) => (
    <IconIsland {...props}>
      <path d="M9 4v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V4" />
      <path d="M12 13v4a4 4 0 0 0 4 4h1" />
      <circle cx="17.5" cy="19.5" r="1.5" />
    </IconIsland>
  ),
  decompression: (props) => (
    <IconIsland {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M8 3v6M16 9v6M8 15v6" />
    </IconIsland>
  ),
  neuropathy: (props) => (
    <IconIsland {...props}>
      <path d="M3 12h3l2-6 4 12 2-6h7" />
    </IconIsland>
  ),
  auto: (props) => (
    <IconIsland {...props}>
      <path d="M3 17v-4l2-5h11l3 5.5V17" />
      <path d="M3 13h16" />
      <circle cx="7" cy="17" r="1.6" />
      <circle cx="17" cy="17" r="1.6" />
    </IconIsland>
  ),
  sports: (props) => (
    <IconIsland {...props}>
      <circle cx="12" cy="5" r="2" />
      <path d="m9 21 2-6-3-2 1-5 4 1 3 3-2 2 3 6" />
    </IconIsland>
  ),
};

export function CareSlider() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => {
      setI((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(t);
  }, [reduce, paused]);

  const active = SLIDES[i];
  const ActiveIcon = AREA_ICONS[active.id];

  return (
    <div
      className="relative isolate overflow-hidden rounded-3xl bg-[color:var(--color-brand-navy)] text-white shadow-[var(--shadow-elevated)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Ambient orange glow — brand palette only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(60% 45% at 85% 15%, rgba(252,143,0,0.75) 0%, transparent 60%), radial-gradient(50% 55% at 8% 90%, rgba(0,75,153,0.9) 0%, transparent 70%)",
        }}
      />

      <div className="relative p-8 md:p-12">
        <p className="eyebrow !text-[color:var(--color-brand-orange)] mb-5">
          Areas We Treat
        </p>

        {/* Labeled icon tabs — replaces the old unlabeled dot-pager */}
        <div
          role="tablist"
          aria-label="Areas of care"
          className="flex flex-wrap gap-2"
        >
          {SLIDES.map((s, idx) => {
            const isActive = idx === i;
            const Icon = AREA_ICONS[s.id];
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`care-panel-${s.id}`}
                onClick={() => setI(idx)}
                className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                  isActive
                    ? "border-transparent bg-[color:var(--color-brand-orange)] text-white"
                    : "border-white/20 bg-white/5 text-white/70 hover:border-white/40 hover:text-white"
                }`}
              >
                <Icon className={isActive ? "opacity-100" : "opacity-60"} />
                {TAB_LABELS[s.id]}
              </button>
            );
          })}
        </div>

        {/* Story-style progress bar — shows time until auto-advance */}
        <div className="mt-4 h-1 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
          <div
            key={i}
            className="h-full rounded-full bg-[color:var(--color-brand-orange)] care-progress-fill"
            style={{ animationPlayState: paused ? "paused" : "running" }}
          />
        </div>

        {/* Content row — icon medallion + crossfading copy */}
        <div className="mt-8 grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-8">
          <div
            aria-hidden
            className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-[color:var(--color-brand-orange)] backdrop-blur-md md:flex"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={active.id}
                initial={reduce ? false : { opacity: 0, scale: 0.7, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.7, rotate: 8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex"
              >
                <ActiveIcon width={30} height={30} />
              </motion.span>
            </AnimatePresence>
          </div>

          <div id={`care-panel-${active.id}`} role="tabpanel" className="min-h-[10rem] md:min-h-[9rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">
                  {active.title}
                </h2>
                <p className="mt-4 max-w-2xl text-white/85 text-base md:text-lg leading-relaxed">
                  {active.copy}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link href="/contact-us/" className="btn btn-primary-on-dark btn-sm">
                    Schedule Your Consultation
                  </Link>
                  <Link
                    href={active.href}
                    className="text-sm font-semibold tracking-wide uppercase text-[color:var(--color-brand-orange)] hover:text-white transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
