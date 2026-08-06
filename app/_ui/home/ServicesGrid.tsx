"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "../motion/primitives";

/**
 * ServicesGrid — "Chiropractic Services Murfreesboro TN"
 *
 * Interactive numbered-list layout: a stacked list of six services on the
 * left (number, title, expanding description, arrow indicator) synced to a
 * sticky media panel on the right that crossfades to match whichever row is
 * active/hovered/focused — showing a "0N / 06" counter, the service title,
 * and a "Learn more" link. Copy is preserved verbatim from the live page.
 * Each row links to its matching slug from `content-map.json`.
 *
 * The image crossfade reuses the `AnimatePresence mode="wait"` pattern
 * already proven in `CareSlider.tsx`. Row expand/collapse uses a pure-CSS
 * `grid-template-rows` trick (no framer-motion height animation) since that
 * is the most reliable way to animate to `auto` height on this stack.
 */

type Service = {
  title: string;
  copy: string;
  href: string;
  image: string;
  /** Natural pixel dimensions of the source image — used so next/image
      never requests a bigger optimized version than the original, which
      is what was making a few of these look "pixelated" (upscaled). */
  width: number;
  height: number;
  alt: string;
};

const SERVICES: Service[] = [
  {
    title: "Chiropractic Care",
    copy:
      "We provide compassionate chiropractic care in Murfreesboro, TN treating the root causes of your issues. We can treat many spine and neck issues to get you off of prescription medications.",
    href: "/chiropractic/",
    image: "/media/services/chiropractic-care.jpg",
    width: 1200,
    height: 625,
    alt: "Chiropractic care in Murfreesboro, TN",
  },
  {
    title: "Spinal Decompression",
    copy:
      "Our Murfreesboro spinal decompression team utilizes non-invasive techniques to relieve pressure from off of the spinal discs, allowing for greater shock absorption and the movement of oxygen for faster healing.",
    href: "/spinal-decompression/",
    image: "/media/services/spinal-decompression.jpg",
    width: 1024,
    height: 1024,
    alt: "Spinal decompression treatment in Murfreesboro, TN",
  },
  {
    title: "Sports Injury",
    copy:
      "Our dedicated staff of sports injury doctors in Murfreesboro, TN can help with acute and chronic sports related injuries to help you get back to peak physical condition. Don\u2019t allow your injuries to persist which can grow to a much larger issue.",
    href: "/sports-injuries/",
    image: "/media/services/sports-injury.jpg",
    width: 732,
    height: 402,
    alt: "Sports injury care in Murfreesboro, TN",
  },
  {
    title: "Back Pain Relief",
    copy:
      "Dr. Wesley is dedicated to relieving patients of their pain in the most natural, non-invasive ways possible. Come visit our Murfreesboro, TN office to see how we can help you relieve your back pain effectively.",
    href: "/back-pain-relief/",
    image: "/media/services/back-pain-relief.jpg",
    width: 800,
    height: 594,
    alt: "Back pain relief in Murfreesboro, TN",
  },
  {
    title: "Neuropathy",
    copy:
      "Our Murfreesboro Neuropathy doctors provide opioid-free/drug-free alternative therapies for acute, and/or chronic neuropathy pain or circulatory disorders symptoms patients. Relieving Neuropathy naturally eliminates side effects of prescription medications.",
    href: "/neuropathy/",
    image: "/media/services/neuropathy.jpg",
    width: 724,
    height: 483,
    alt: "Neuropathy relief in Murfreesboro, TN",
  },
  {
    title: "Auto Injury",
    copy:
      "If you have been injured in an auto accident, come visit our Murfreesboro, TN office to help get you back to 100% again. These injuries may start small however they can grow into serious problems over time. Let us help you correct these issues to keep you from long term chronic issues.",
    href: "/auto-injuries/",
    image: "/media/services/auto-injury.webp",
    width: 1200,
    height: 1200,
    alt: "Auto injury care in Murfreesboro, TN",
  },
];

function ServiceRow({
  service,
  index,
  isActive,
  onActivate,
}: {
  service: Service;
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
}) {
  return (
    <li className="border-b border-[color:var(--color-border)] first:border-t">
      <Link
        href={service.href}
        onMouseEnter={() => onActivate(index)}
        onFocus={() => onActivate(index)}
        className="group flex items-start gap-4 py-6 outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-blue)] rounded-lg px-2 -mx-2 transition-colors"
      >
        <span
          className={`mt-1 text-xs font-bold tracking-[0.18em] transition-colors duration-300 ${
            isActive
              ? "text-[color:var(--color-brand-orange)]"
              : "text-[color:var(--color-muted)]"
          }`}
        >
          0{index + 1}
        </span>

        <div className="min-w-0 flex-1">
          <h3
            className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isActive
                ? "text-[color:var(--color-brand-navy)]"
                : "text-[color:var(--color-brand-navy)]/45"
            }`}
          >
            {service.title}
          </h3>

          {/* Pure-CSS grid-rows expand/collapse - no JS height animation */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
              isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-[color:var(--color-body)] leading-relaxed max-w-lg">
                {service.copy}
              </p>
            </div>
          </div>
        </div>

        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
            isActive
              ? "border-transparent bg-[color:var(--color-brand-orange)] text-white"
              : "border-[color:var(--color-border)] text-[color:var(--color-brand-navy)]/40 group-hover:border-[color:var(--color-brand-orange)] group-hover:text-[color:var(--color-brand-orange)]"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className={`transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}
          >
            <path d="M7 17 17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </span>
      </Link>
    </li>
  );
}

export function ServicesGrid() {
  const [active, setActive] = useState(0);
  const activeService = SERVICES[active];

  return (
    <section id="services" className="section-y bg-white scroll-mt-24">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">What We Treat</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-3">
                Chiropractic <span className="accent-serif">Services</span> Murfreesboro TN
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-[color:var(--color-body)] leading-relaxed lg:text-right">
              Personalized, non-invasive care - from chronic pain relief to
              peak athletic performance.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left - numbered interactive list */}
          <Reveal delay={0.05}>
            <ul>
              {SERVICES.map((s, idx) => (
                <ServiceRow
                  key={s.title}
                  service={s}
                  index={idx}
                  isActive={idx === active}
                  onActivate={setActive}
                />
              ))}
            </ul>
          </Reveal>

          {/* Right - sticky media panel synced to the active row */}
          <Reveal delay={0.15}>
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] w-full max-w-md overflow-hidden rounded-3xl bg-[color:var(--color-brand-navy)] shadow-[var(--shadow-elevated)] lg:ml-auto">
                {/* Stack every image so they all preload on mount; only the
                    active one is visible via CSS opacity crossfade. This
                    avoids the "hover a row -> wait for a fresh image to
                    fetch" delay caused by lazy loading + AnimatePresence.
                    Each image is rendered at its natural pixel dimensions
                    (no `fill`, no upscaling) with `object-contain` so the
                    original composition is preserved — never cropped or
                    zoomed to fill a portrait frame. */}
                {SERVICES.map((s, idx) => (
                  <div
                    key={s.title}
                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                      idx === active ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={idx !== active}
                  >
                    <Image
                      src={s.image}
                      alt={s.alt}
                      width={s.width}
                      height={s.height}
                      sizes="(min-width: 1024px) 32vw, 90vw"
                      className="absolute inset-0 h-full w-full object-contain object-center"
                      priority={idx === 0}
                      loading={idx === 0 ? undefined : "eager"}
                      quality={95}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-navy)]/85 via-[color:var(--color-brand-navy)]/5 to-transparent" />
                  </div>
                ))}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-bold tracking-[0.2em] text-[color:var(--color-brand-orange)]">
                    0{active + 1} / 0{SERVICES.length}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-white">
                    {activeService.title}
                  </h3>
                  <Link
                    href={activeService.href}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/85 hover:text-[color:var(--color-brand-orange)] transition-colors"
                  >
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <Link href="/contact-us/" className="btn btn-outline-orange btn-lg">
              Schedule Your Consultation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

