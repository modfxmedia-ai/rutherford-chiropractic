import { PSEO_CONDITIONS } from "./conditions";
import { getNeighborhood } from "./neighborhoods";
import { getPseoAudience } from "./audiences";
import { PSEO_COMBINATIONS } from "./combinations";
import { PSEO_AUDIENCE_COMBINATIONS } from "./audience-content";

/**
 * Data helper for the `/areas-we-serve/` hub page — groups every pSEO page
 * (both the 250 `/{condition}/{city}/` pages and the 1,250
 * `/{condition}/{city}/{audience}/` pages) by city so the page can render a
 * full, crawlable directory without hand-maintaining a separate link list.
 * Reads straight from `combinations.ts` / `audience-content.ts`, so it stays
 * accurate as those datasets grow.
 */

export type AreaAudienceLink = { label: string; href: string };

export type AreaConditionEntry = {
  conditionSlug: string;
  conditionName: string;
  neighborhoodName: string;
  href: string;
  audienceLinks: AreaAudienceLink[];
};

export type AreaCityGroup = {
  citySlug: string;
  cityName: string;
  conditions: AreaConditionEntry[];
};

/** Same 10 targeted cities used throughout the pSEO system, in a fixed
 * display order (Rutherford County core first, then the wider region). */
const CITY_ORDER: { citySlug: string; cityName: string }[] = [
  { citySlug: "murfreesboro", cityName: "Murfreesboro" },
  { citySlug: "smyrna", cityName: "Smyrna" },
  { citySlug: "la-vergne", cityName: "La Vergne" },
  { citySlug: "lebanon", cityName: "Lebanon" },
  { citySlug: "franklin", cityName: "Franklin" },
  { citySlug: "brentwood", cityName: "Brentwood" },
  { citySlug: "nashville", cityName: "Nashville" },
  { citySlug: "shelbyville", cityName: "Shelbyville" },
  { citySlug: "woodbury", cityName: "Woodbury" },
  { citySlug: "eagleville", cityName: "Eagleville" },
];

export function buildAreasWeServe(): AreaCityGroup[] {
  return CITY_ORDER.map(({ citySlug, cityName }) => {
    const conditions: AreaConditionEntry[] = [];

    for (const condition of PSEO_CONDITIONS) {
      const baseCombo = PSEO_COMBINATIONS.find((c) => {
        if (c.conditionSlug !== condition.slug) return false;
        return getNeighborhood(c.neighborhoodSlug)?.citySlug === citySlug;
      });
      if (!baseCombo) continue;

      const neighborhood = getNeighborhood(baseCombo.neighborhoodSlug);
      if (!neighborhood) continue;

      const audienceLinks: AreaAudienceLink[] = PSEO_AUDIENCE_COMBINATIONS.filter((c) => {
        if (c.conditionSlug !== condition.slug) return false;
        return getNeighborhood(c.neighborhoodSlug)?.citySlug === citySlug;
      }).map((c) => ({
        label: getPseoAudience(c.audienceSlug)?.label ?? c.audienceSlug,
        href: `/${c.conditionSlug}/${c.neighborhoodSlug}/${c.audienceSlug}/`,
      }));

      conditions.push({
        conditionSlug: condition.slug,
        conditionName: condition.name,
        neighborhoodName: neighborhood.name,
        href: `/${baseCombo.conditionSlug}/${baseCombo.neighborhoodSlug}/`,
        audienceLinks,
      });
    }

    return { citySlug, cityName, conditions };
  });
}
