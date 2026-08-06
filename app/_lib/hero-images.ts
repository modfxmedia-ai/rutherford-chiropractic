/**
 * Central mapping from a page's service/condition slug to the hero-banner
 * background image used by the shared page templates
 * (`ServicePageTemplate`, `ConditionPageTemplate`, `PseoPageTemplate`,
 * `LocationPageTemplate`, `UtilityHero`, blog hero). Each hero renders
 * this image as a full-bleed `<Image fill>` behind the existing radial
 * gradient + a darker navy scrim so the H1/CTA copy stays readable.
 *
 * All values here are relative paths under `/public/`.
 */

/** Fallback hero background (used when a slug is missing or unmapped). */
export const DEFAULT_HERO_BG = "/media/services/chiropractic-care.jpg";

/** Service slug -> banner background image. */
export const SERVICE_HERO_BG: Record<string, string> = {
  chiropractic: "/media/services/chiropractic-care.jpg",
  "spinal-decompression": "/media/decompression-therapy.jpg",
  neuropathy: "/media/services/neuropathy.jpg",
  "back-pain-relief": "/media/back-pain-relief-detailed.jpg",
  "auto-injuries": "/media/auto-injury-detailed.jpg",
  "sports-injuries": "/media/services/sports-injury.jpg",
};

/**
 * Condition slug -> dedicated banner background image (topical photo per
 * condition, provided by the client). These take priority over the
 * service-fallback mapping below.
 */
export const CONDITION_HERO_BG: Record<string, string> = {
  sciatica: "/media/conditions/sciatica.webp",
  "herniated-disc": "/media/conditions/herniated-and-bulging-disc.jpg",
  "migraines-headaches": "/media/conditions/migraines-and-headaches.jpg",
  whiplash: "/media/conditions/whiplash.jpg",
  arthritis: "/media/conditions/arthritis-and-joint-numbness.jpg",
  "degenerative-disc-disease": "/media/conditions/degenerative-disc-disease.jpg",
  "joint-pain": "/media/conditions/joint-pain-and-stiffness.jpg",
};

/**
 * Condition slug -> primary treatment service slug. Used as a fallback for
 * conditions that don't have a dedicated hero image in
 * `CONDITION_HERO_BG`.
 */
const CONDITION_TO_SERVICE: Record<string, string> = {
  sciatica: "back-pain-relief",
  "herniated-disc": "spinal-decompression",
  "migraines-headaches": "chiropractic",
  whiplash: "auto-injuries",
  arthritis: "chiropractic",
  "degenerative-disc-disease": "spinal-decompression",
  "joint-pain": "chiropractic",
};

export function heroBgForService(slug: string | undefined | null): string {
  if (!slug) return DEFAULT_HERO_BG;
  return SERVICE_HERO_BG[slug] ?? DEFAULT_HERO_BG;
}

export function heroBgForCondition(slug: string | undefined | null): string {
  if (!slug) return DEFAULT_HERO_BG;
  if (CONDITION_HERO_BG[slug]) return CONDITION_HERO_BG[slug];
  const serviceSlug = CONDITION_TO_SERVICE[slug];
  return serviceSlug ? heroBgForService(serviceSlug) : DEFAULT_HERO_BG;
}
