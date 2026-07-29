"use client";

/**
 * <MagneticButton> — CTA that gently pulls toward the cursor on hover.
 * Uses `useMotionValue` + `useSpring` so the transform stays off the React
 * render path. Falls back to a static button under prefers-reduced-motion.
 */

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import { useRef, type ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  /** How far the button drifts toward the cursor (0..1 of half-dimension). */
  strength?: number;
};

export function MagneticButton({
  href,
  children,
  className = "",
  external = false,
  strength = 0.25,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const commonProps = {
    ref,
    className,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: reduce ? undefined : { x: springX, y: springY },
  };

  if (external) {
    return (
      <motion.a
        {...commonProps}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </motion.a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <motion.a {...commonProps} href={href}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.span {...commonProps} style={{ ...(commonProps.style ?? {}), display: "inline-flex" }}>
      <Link href={href} className="contents">
        {children}
      </Link>
    </motion.span>
  );
}
