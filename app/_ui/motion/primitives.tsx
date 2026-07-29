"use client";

/**
 * Motion primitives — thin wrappers around framer-motion so page files stay
 * declarative. All primitives respect `prefers-reduced-motion` (via
 * `useReducedMotion`) and are gated behind viewport intersection so the
 * initial paint is not held back by JS-only visibility.
 */

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------------------------------------------------------------------
 * <Reveal> — Fade + rise on first-view. Default direction is "up".
 * ------------------------------------------------------------------------- */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "h2" | "p" | "span";
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------------------------------------------------------------------------
 * <Stagger> / <StaggerItem> — staggered fade-up for card grids or lists.
 * ------------------------------------------------------------------------- */

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={reduce ? undefined : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={reduce ? undefined : staggerItem}
    >
      {children}
    </MotionTag>
  );
}

/* ---------------------------------------------------------------------------
 * <Counter> — Big-number stat that ticks up from 0 to a target when it
 * enters the viewport. Used in the "16 years experience" / stat blocks.
 * ------------------------------------------------------------------------- */

export function Counter({
  to,
  suffix = "",
  duration = 1.6,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const [display, setDisplay] = useState<number>(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(to);
      return;
    }
    if (inView) mv.set(to);
  }, [inView, mv, to, reduce, duration]);

  useEffect(() => {
    const unsub = rounded.on("change", (latest) => setDisplay(latest));
    return () => unsub();
  }, [rounded]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------------------------------------------------------------------
 * <Parallax> — Subtle vertical drift tied to scroll progress through the
 * element, used to give imagery a tasteful sense of depth. Keeps the
 * motion budget small (a few px/sec) so it reads as "premium" rather than
 * distracting, and is a no-op under prefers-reduced-motion.
 * ------------------------------------------------------------------------- */

export function Parallax({
  children,
  className,
  strength = 30,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------------------
 * <FloatOnHover> — Small lift on hover, used on service cards.
 * ------------------------------------------------------------------------- */

export function FloatOnHover({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
