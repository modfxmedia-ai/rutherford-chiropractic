"use client";

/**
 * <ConditionsCarousel> — "Conditions We Treat" homepage section.
 *
 * A brand-new taxonomy (distinct from the existing 6 core Services) that
 * spotlights specific medical conditions in a compact, infinite-loop
 * horizontal carousel instead of a tall static grid:
 *   - Autoplay: slow, continuous scroll via requestAnimationFrame.
 *   - Pause on hover / keyboard focus / active drag.
 *   - Manual control: drag-to-scroll (mouse + touch/swipe) and prev/next
 *     arrow buttons.
 *   - Infinite loop: the condition list is tripled and the scroll position
 *     silently wraps between the middle and outer copies so it always
 *     feels endless in either direction.
 *   - Fully keyboard accessible: the track is focusable and responds to
 *     Left/Right arrow keys; every card's "Learn More" link is a normal,
 *     tabbable anchor.
 *   - Respects `prefers-reduced-motion`: autoplay is skipped entirely, but
 *     drag/scroll/arrow controls keep working.
 */

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { Reveal } from "../motion/primitives";
import { ConditionIcon } from "../conditions/icons";
import { CONDITIONS, type Condition } from "../../_lib/conditions";

const AUTOPLAY_PX_PER_FRAME = 0.55;
const SET_COUNT = 3;

export function ConditionsCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const arrowScrollingRef = useRef(false);
  const arrowScrollTimeoutRef = useRef<number | undefined>(undefined);
  const [isPaused, setIsPaused] = useState(false);
  const reduce = useReducedMotion();

  const loopItems = [...CONDITIONS, ...CONDITIONS, ...CONDITIONS];

  // Start on the middle copy so the user can drag/scroll either direction
  // and always land on real content.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / SET_COUNT;
  }, []);

  useEffect(() => {
    if (reduce) return; // prefers-reduced-motion - no autoplay
    let raf = 0;
    const tick = () => {
      const el = trackRef.current;
      if (el && !isPaused && !draggingRef.current && !arrowScrollingRef.current) {
        const singleWidth = el.scrollWidth / SET_COUNT;
        el.scrollLeft += AUTOPLAY_PX_PER_FRAME;
        if (el.scrollLeft >= singleWidth * 2) {
          el.scrollLeft -= singleWidth;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, reduce]);

  const normalizeLoop = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const singleWidth = el.scrollWidth / SET_COUNT;
    if (el.scrollLeft <= 1) el.scrollLeft += singleWidth;
    else if (el.scrollLeft >= singleWidth * 2 - 1) el.scrollLeft -= singleWidth;
  }, []);

  const scrollByCards = useCallback((direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-carousel-card]");
    const step = card ? card.offsetWidth + 24 : 320;
    // Pause the rAF autoplay loop for the duration of the smooth scroll so
    // the two scrolling mechanisms don't fight (a direct scrollLeft write
    // every frame would otherwise cancel the smooth scrollBy animation).
    arrowScrollingRef.current = true;
    el.scrollBy({ left: direction * step * 2, behavior: "smooth" });
    window.clearTimeout(arrowScrollTimeoutRef.current);
    arrowScrollTimeoutRef.current = window.setTimeout(() => {
      arrowScrollingRef.current = false;
      normalizeLoop();
    }, 500);
  }, [normalizeLoop]);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = dragStartScrollRef.current - (e.clientX - dragStartXRef.current);
  };
  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    normalizeLoop();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollByCards(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollByCards(-1);
    }
  };

  return (
    <section className="section-y-lg relative overflow-hidden bg-white" aria-label="Conditions we treat">
      <div className="bg-glow-blue absolute -left-24 top-10 h-72 w-72" aria-hidden />
      <div className="bg-glow-orange absolute -right-20 bottom-0 h-64 w-64" aria-hidden />

      <div className="container-wide relative">
        <Reveal as="div" className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Conditions We Treat</span>
          <h2 className="h-section mt-3">
            Real Relief for the Conditions Slowing You Down
          </h2>
          <p className="mt-4 text-[color:var(--color-body)] leading-relaxed">
            From sciatica to whiplash, our whole-person approach targets the
            root cause, not just the symptom. Explore a condition below to
            see how we can help.
          </p>
        </Reveal>

        <Reveal delay={0.1} as="div" className="relative mt-12">
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Conditions we treat, scrollable"
            tabIndex={0}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            onKeyDown={onKeyDown}
            className={`flex cursor-grab gap-6 overflow-x-auto rounded-2xl pb-4 pt-1 active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-brand-blue)]/40 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              isPaused ? "snap-x snap-proximity" : ""
            }`}
          >
            {loopItems.map((condition, i) => (
              <ConditionCard key={`${condition.slug}-${i}`} condition={condition} />
            ))}
          </div>

          <CarouselArrow direction="prev" onClick={() => scrollByCards(-1)} />
          <CarouselArrow direction="next" onClick={() => scrollByCards(1)} />
        </Reveal>
      </div>
    </section>
  );
}

function ConditionCard({ condition }: { condition: Condition }) {
  return (
    <article
      data-carousel-card
      className="group surface-card hover-lift flex w-[260px] shrink-0 snap-start flex-col gap-4 p-6 sm:w-[300px]"
    >
      <span className="icon-badge h-14 w-14 transition-transform duration-300 group-hover:scale-110">
        <ConditionIcon slug={condition.slug} width={26} height={26} />
      </span>
      <h3 className="text-lg font-bold text-[color:var(--color-brand-navy)]">
        {condition.name}
      </h3>
      <p className="text-sm leading-relaxed text-[color:var(--color-body)]">
        {condition.shortDescription}
      </p>
      <Link
        href={`/${condition.slug}/`}
        className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[color:var(--color-brand-blue)] transition-colors group-hover:text-[color:var(--color-brand-orange)]"
      >
        Learn More
        <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </article>
  );
}

function CarouselArrow({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Scroll to previous conditions" : "Scroll to next conditions"}
      className={`absolute top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-white text-[color:var(--color-brand-navy)] shadow-[var(--shadow-card)] transition-all duration-200 hover:border-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-blue)] hover:shadow-[var(--shadow-elevated)] sm:flex ${
        direction === "prev" ? "-left-4 lg:-left-6" : "-right-4 lg:-right-6"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {direction === "prev" ? <path d="m15 18-6-6 6-6" /> : <path d="m9 18 6-6-6-6" />}
      </svg>
    </button>
  );
}
