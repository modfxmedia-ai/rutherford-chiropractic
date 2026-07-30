/**
 * Optional 4th targeting layer for the pSEO system: patient "audience"
 * angles (occupation / life-stage groups whose daily routine tends to
 * aggravate specific conditions). Not wired into any route yet — this is
 * data only, kept alongside the condition/neighborhood datasets so a future
 * `/{condition}/{neighborhood}/{audience}/` (or similar) expansion doesn't
 * require re-deriving this list. Do not delete as "unused".
 */

export type PseoAudience = {
  slug: string;
  label: string;
  /** Short, factual description of why this group is relevant to the practice. */
  blurb: string;
};

export const PSEO_AUDIENCES: PseoAudience[] = [
  {
    slug: "truck-drivers",
    label: "Truck Drivers",
    blurb:
      "Long hours seated behind the wheel, frequent loading and unloading, and highway vibration make truck drivers especially prone to low back pain, sciatica, and neck stiffness.",
  },
  {
    slug: "nurses",
    label: "Nurses & Healthcare Workers",
    blurb:
      "Repetitive patient lifting, long shifts on hard hospital floors, and awkward bedside postures put nurses and healthcare workers at high risk for back, shoulder, and wrist strain.",
  },
  {
    slug: "office-workers",
    label: "Office & Desk Workers",
    blurb:
      "Hours spent sitting at a desk, looking down at a screen, and typing all day are among the most common everyday causes of neck, shoulder, and low back pain.",
  },
  {
    slug: "athletes",
    label: "Athletes & Weekend Warriors",
    blurb:
      "Whether training for competition or just staying active on weekends, repetitive motion and overuse injuries like tendonitis and joint strain are common among athletes of every level.",
  },
  {
    slug: "seniors",
    label: "Seniors",
    blurb:
      "Age-related disc degeneration, arthritis, and reduced mobility make older adults more susceptible to chronic back pain, balance issues, and slower recovery from falls.",
  },
];

const bySlug = new Map(PSEO_AUDIENCES.map((a) => [a.slug, a]));

export function getPseoAudience(slug: string): PseoAudience | undefined {
  return bySlug.get(slug);
}
