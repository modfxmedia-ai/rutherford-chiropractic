"use client";

/**
 * <ReadingProgressBar> — thin fixed bar under the header that fills as the
 * visitor scrolls through the whole page, giving the post page a modern
 * "editorial" feel. Uses `useScroll`'s default (whole-document) progress,
 * so it's independent of the article's own height and can never get stuck
 * (unlike a per-element `whileInView` threshold on a very tall wrapper).
 */

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ReadingProgressBar() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, var(--color-brand-orange), var(--color-brand-blue))",
      }}
    />
  );
}
