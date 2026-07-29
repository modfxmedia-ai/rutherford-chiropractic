/**
 * Rutherford Spine & Wellness Center — Design Tokens (TypeScript)
 *
 * These constants mirror the CSS custom properties defined in
 * `app/globals.css`. Use them any time you need a token in JS/TSX
 * (e.g. inline SVG fills, chart colors, Framer Motion values) instead
 * of hard-coding hex values in components.
 *
 * The source of truth for the palette is the client's logo. Do NOT
 * introduce additional brand colors without updating both this file
 * AND `app/globals.css` in the same change.
 */

export const brand = {
  blue: "#004B99",
  blue700: "#003B7A",
  blue800: "#002D5E",
  navy: "#011149",
  orange: "#FC8F00",
  orange700: "#D97600",
  gray: "#666666",
  grayMuted: "#999999",
  white: "#FFFFFF",
} as const;

export const semantic = {
  background: brand.white,
  surface: brand.white,
  surfaceMuted: "#F6F7F9",
  surfaceDark: brand.navy,
  foreground: brand.navy,
  body: brand.gray,
  muted: brand.grayMuted,
  primary: brand.blue,
  primaryHover: brand.blue700,
  accent: brand.orange,
  accentHover: brand.orange700,
  border: "#E5E7EB",
} as const;

/**
 * Vertical rhythm applied to top-level page sections.
 * Numbers are in `rem` and match the `--spacing-section-*` CSS tokens.
 */
export const sectionSpacing = {
  xs: "3rem",
  sm: "4.5rem",
  md: "6rem",
  lg: "8rem",
  xl: "10rem",
} as const;

export const containers = {
  narrow: "44rem",
  content: "72rem",
  wide: "84rem",
} as const;

export const radii = {
  xs: 4,
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  pill: 999,
} as const;

/**
 * Button variant names. The corresponding utility class is
 * `btn ${variant}` (see `app/globals.css`).
 */
export const buttonVariants = [
  "btn-primary",
  "btn-primary-on-dark",
  "btn-outline-orange",
  "btn-outline-navy",
  "btn-ghost",
] as const;
export type ButtonVariant = (typeof buttonVariants)[number];

export const buttonSizes = ["btn-sm", "btn", "btn-lg"] as const;
export type ButtonSize = (typeof buttonSizes)[number];

/**
 * Font family CSS variables (declared by `next/font` in `app/layout.tsx`).
 */
export const fonts = {
  sans: "var(--font-sans)",
  serif: "var(--font-serif)",
} as const;

/**
 * Brand asset paths (served from `public/`).
 */
export const brandAssets = {
  /**
   * Real client logo — do NOT recolor or redraw. 388×88 PNG.
   * Fetched from the WordPress origin.
   */
  logo: "/brand/rutherford-logo.png",
  logoWidth: 388,
  logoHeight: 88,
} as const;
