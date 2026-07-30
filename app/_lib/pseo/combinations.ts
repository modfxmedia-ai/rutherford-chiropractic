/**
 * Curated, approved (condition × neighborhood) combinations for the pSEO
 * layer — deliberately NOT a blind cartesian product of all conditions ×
 * all neighborhoods (25 × 27 = 675 possible pairs). Only combinations
 * listed here get a real page; everything else 404s (see
 * `app/(pseo)/[condition]/[city]/page.tsx`).
 *
 * This starter batch seeds one example per targeted city/neighborhood
 * across a spread of conditions so the template, data plumbing, schema,
 * and internal linking can be reviewed end-to-end before scaling up the
 * list. Add more entries here (condition/neighborhood slugs must exist in
 * `conditions.ts` / `neighborhoods.ts`) once the pattern is approved —
 * `generateStaticParams` and the sitemap both read straight from this file.
 */

import { CUSTOM_PSEO_PAIRS } from "./city-content";

export type PseoCombo = {
  conditionSlug: string;
  neighborhoodSlug: string;
};

/** Original 17-combo starter batch (one example per targeted
 * city/neighborhood across a spread of conditions), used to validate the
 * template/data plumbing/schema/internal-linking end-to-end. */
const STARTER_COMBINATIONS: PseoCombo[] = [
  { conditionSlug: "sciatica", neighborhoodSlug: "blackman-murfreesboro" },
  { conditionSlug: "herniated-disc", neighborhoodSlug: "cool-springs-franklin" },
  { conditionSlug: "whiplash", neighborhoodSlug: "antioch-nashville" },
  { conditionSlug: "tmj", neighborhoodSlug: "maryland-farms-brentwood" },
  { conditionSlug: "carpal-tunnel", neighborhoodSlug: "rocky-fork-smyrna" },
  { conditionSlug: "plantar-fasciitis", neighborhoodSlug: "downtown-lebanon" },
  { conditionSlug: "text-neck", neighborhoodSlug: "green-hills-nashville" },
  { conditionSlug: "frozen-shoulder", neighborhoodSlug: "salem-murfreesboro" },
  { conditionSlug: "pregnancy-related-back-pain", neighborhoodSlug: "berry-hill-nashville" },
  { conditionSlug: "work-injury", neighborhoodSlug: "lake-forest-estates-la-vergne" },
  { conditionSlug: "degenerative-disc-disease", neighborhoodSlug: "downtown-franklin" },
  { conditionSlug: "poor-posture", neighborhoodSlug: "concord-brentwood" },
  { conditionSlug: "migraines-headaches", neighborhoodSlug: "downtown-shelbyville" },
  { conditionSlug: "numbness-hands-feet", neighborhoodSlug: "rockvale-murfreesboro" },
  { conditionSlug: "tennis-elbow", neighborhoodSlug: "donelson-nashville" },
  { conditionSlug: "slip-and-fall-injury", neighborhoodSlug: "downtown-woodbury" },
  { conditionSlug: "pinched-nerve", neighborhoodSlug: "downtown-eagleville" },
];

const comboKey = (conditionSlug: string, neighborhoodSlug: string) => `${conditionSlug}::${neighborhoodSlug}`;

/** Merge the starter batch with every hand-written "condition x city" batch
 * from `city-content.ts` (deduped by pair — several custom-content batches
 * intentionally reuse a starter-batch neighborhood for a given city, e.g.
 * sciatica x blackman-murfreesboro, so that pair is kept once). */
const mergedByKey = new Map<string, PseoCombo>();
for (const combo of [...STARTER_COMBINATIONS, ...CUSTOM_PSEO_PAIRS]) {
  mergedByKey.set(comboKey(combo.conditionSlug, combo.neighborhoodSlug), combo);
}

export const PSEO_COMBINATIONS: PseoCombo[] = Array.from(mergedByKey.values());

const approved = new Set(PSEO_COMBINATIONS.map((c) => comboKey(c.conditionSlug, c.neighborhoodSlug)));

export function isApprovedPseoCombo(conditionSlug: string, neighborhoodSlug: string): boolean {
  return approved.has(comboKey(conditionSlug, neighborhoodSlug));
}
