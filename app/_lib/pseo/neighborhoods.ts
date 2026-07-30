/**
 * Neighborhood/area dataset for the programmatic-SEO (pSEO) layer
 * (`/{condition}/{neighborhood}/`). This is a THIRD content taxonomy,
 * separate from both the 7 core-service pages (`app/_lib/services.ts`) and
 * the 68 hand-migrated `/{service}-{city}-tn/` location-landing pages
 * (`app/_lib/locations.ts`) — do not confuse `citySlug` here with editing
 * those existing routes.
 *
 * `citySlug` intentionally matches the `city` slug already baked into the
 * live `/{service}-{city}-tn/` URLs (murfreesboro, smyrna, la-vergne,
 * lebanon, franklin, nashville, brentwood, shelbyville, woodbury,
 * eagleville) so pSEO pages can link to the matching, already-published
 * location-landing page for internal linking.
 *
 * Every neighborhood/area below is a real, verifiable place (school zone,
 * named subdivision, historic district, or USPS ZIP area) researched from
 * public sources (primarily each city's Wikipedia article and cited
 * references) for Rutherford, Wilson, Williamson, Bedford, Cannon, and
 * Davidson counties — none are invented. Very small towns (Shelbyville,
 * Woodbury, Eagleville) don't have marketing-style "neighborhoods", so
 * their entries use real ZIP areas / well-documented local landmarks
 * instead, per the brief's "neighborhoods/zip areas" allowance.
 */

export type Neighborhood = {
  /** Unique across the whole dataset: `${area}-${citySlug}`. */
  slug: string;
  /** Display name of the neighborhood/area. */
  name: string;
  citySlug: string;
  cityName: string;
  county: string;
  /**
   * A factual, verifiable sentence fragment (no invented claims) describing
   * the area — dropped into the intro paragraph of any pSEO page that uses
   * this neighborhood, so every page reads as locally specific.
   */
  descriptor: string;
};

export const NEIGHBORHOODS: Neighborhood[] = [
  // Murfreesboro (Rutherford County)
  {
    slug: "blackman-murfreesboro",
    name: "Blackman",
    citySlug: "murfreesboro",
    cityName: "Murfreesboro",
    county: "Rutherford County",
    descriptor:
      "the fast-growing Blackman community on Murfreesboro's west side, zoned for Blackman Middle and Blackman High School along the Rock Springs Road corridor",
  },
  {
    slug: "salem-murfreesboro",
    name: "Salem",
    citySlug: "murfreesboro",
    cityName: "Murfreesboro",
    county: "Rutherford County",
    descriptor:
      "the Salem community southwest of downtown Murfreesboro, one of Rutherford County's older settled areas along Epps Mill Road and Manson Pike",
  },
  {
    slug: "rockvale-murfreesboro",
    name: "Rockvale",
    citySlug: "murfreesboro",
    cityName: "Murfreesboro",
    county: "Rutherford County",
    descriptor:
      "the Rockvale area on Murfreesboro's southwest edge, a historically rural Rutherford County community that has seen rapid new-home growth in recent years",
  },
  {
    slug: "barfield-murfreesboro",
    name: "Barfield",
    citySlug: "murfreesboro",
    cityName: "Murfreesboro",
    county: "Rutherford County",
    descriptor:
      "the Barfield community near Barfield Crescent Park on Murfreesboro's south side, a popular area for families who use the park's greenway and trail system",
  },

  // Smyrna (Rutherford County)
  {
    slug: "rocky-fork-smyrna",
    name: "Rocky Fork",
    citySlug: "smyrna",
    cityName: "Smyrna",
    county: "Rutherford County",
    descriptor:
      "the Rocky Fork community on Smyrna's east side, zoned for Rocky Fork Elementary and Rocky Fork Middle School near the Rocky Fork State Park greenway",
  },
  {
    slug: "stewarts-creek-smyrna",
    name: "Stewarts Creek",
    citySlug: "smyrna",
    cityName: "Smyrna",
    county: "Rutherford County",
    descriptor:
      "the Stewarts Creek / Stewartsboro area of Smyrna, home to Stewarts Creek Elementary, Middle, and High School along the Stewarts Creek waterway",
  },
  {
    slug: "sam-ridley-smyrna",
    name: "Sam Ridley",
    citySlug: "smyrna",
    cityName: "Smyrna",
    county: "Rutherford County",
    descriptor:
      "the Sam Ridley Parkway corridor near the I-24 interchange in Smyrna, named for longtime Smyrna mayor Sam Ridley and now the town's busiest retail corridor",
  },

  // La Vergne (Rutherford County)
  {
    slug: "lake-forest-estates-la-vergne",
    name: "Lake Forest Estates",
    citySlug: "la-vergne",
    cityName: "La Vergne",
    county: "Rutherford County",
    descriptor:
      "Lake Forest Estates, the largest single subdivision in the state of Tennessee with more than 3,100 homes, on La Vergne's north side near Percy Priest Lake",
  },
  {
    slug: "waldron-la-vergne",
    name: "Waldron Road",
    citySlug: "la-vergne",
    cityName: "La Vergne",
    county: "Rutherford County",
    descriptor:
      "the Waldron Road area of central La Vergne, named for the city's early leaders and just minutes from the I-24 corridor",
  },

  // Lebanon (Wilson County)
  {
    slug: "downtown-lebanon",
    name: "Downtown Lebanon",
    citySlug: "lebanon",
    cityName: "Lebanon",
    county: "Wilson County",
    descriptor:
      "Downtown Lebanon's historic Town Square, anchored by the Wilson County Courthouse and just blocks from Cumberland University",
  },
  {
    slug: "cumberland-university-lebanon",
    name: "Cumberland University Area",
    citySlug: "lebanon",
    cityName: "Lebanon",
    county: "Wilson County",
    descriptor:
      "the neighborhood surrounding Cumberland University, Lebanon's 1842-founded liberal-arts college just east of the historic Town Square",
  },
  {
    slug: "coles-ferry-lebanon",
    name: "Coles Ferry",
    citySlug: "lebanon",
    cityName: "Lebanon",
    county: "Wilson County",
    descriptor:
      "the Coles Ferry Pike corridor on Lebanon's south side, one of the fastest-growing residential stretches in Wilson County",
  },

  // Franklin (Williamson County)
  {
    slug: "cool-springs-franklin",
    name: "Cool Springs",
    citySlug: "franklin",
    cityName: "Franklin",
    county: "Williamson County",
    descriptor:
      "the Cool Springs district on Franklin's north side, the retail and office hub built along Cool Springs Boulevard near I-65",
  },
  {
    slug: "downtown-franklin",
    name: "Downtown Franklin",
    citySlug: "franklin",
    cityName: "Franklin",
    county: "Williamson County",
    descriptor:
      "Historic Downtown Franklin, the Main Street district that hosts the annual Main Street Festival and Dickens of a Christmas",
  },
  {
    slug: "berry-farms-franklin",
    name: "Berry Farms",
    citySlug: "franklin",
    cityName: "Franklin",
    county: "Williamson County",
    descriptor:
      "the Berry Farms mixed-use development on Franklin's south side, one of Williamson County's newest live-work-shop communities",
  },

  // Brentwood (Williamson County)
  {
    slug: "maryland-farms-brentwood",
    name: "Maryland Farms",
    citySlug: "brentwood",
    cityName: "Brentwood",
    county: "Williamson County",
    descriptor:
      "the Maryland Farms office district in Brentwood, built on a former American Saddlebred horse farm and now the city's commercial center",
  },
  {
    slug: "concord-brentwood",
    name: "Concord",
    citySlug: "brentwood",
    cityName: "Brentwood",
    county: "Williamson County",
    descriptor:
      "the Concord Road corridor in Brentwood, home to Concord Park, the Brentwood Library, and Crockett Park",
  },

  // Nashville (Davidson County)
  {
    slug: "antioch-nashville",
    name: "Antioch",
    citySlug: "nashville",
    cityName: "Nashville",
    county: "Davidson County",
    descriptor:
      "the Antioch neighborhood in southeast Nashville, which directly borders La Vergne and sits along the Bell Road / Murfreesboro Pike corridor",
  },
  {
    slug: "donelson-nashville",
    name: "Donelson",
    citySlug: "nashville",
    cityName: "Nashville",
    county: "Davidson County",
    descriptor:
      "the Donelson neighborhood near Percy Priest Lake and Nashville International Airport on the city's east side",
  },
  {
    slug: "berry-hill-nashville",
    name: "Berry Hill",
    citySlug: "nashville",
    cityName: "Nashville",
    county: "Davidson County",
    descriptor:
      "Berry Hill, the small commercial enclave just south of downtown Nashville along 8th Avenue South and Franklin Pike",
  },
  {
    slug: "green-hills-nashville",
    name: "Green Hills",
    citySlug: "nashville",
    cityName: "Nashville",
    county: "Davidson County",
    descriptor:
      "the Green Hills neighborhood in southwest-central Nashville, anchored by the Green Hills Mall along Hillsboro Pike",
  },

  // Shelbyville (Bedford County)
  {
    slug: "downtown-shelbyville",
    name: "Downtown Shelbyville",
    citySlug: "shelbyville",
    cityName: "Shelbyville",
    county: "Bedford County",
    descriptor:
      "Downtown Shelbyville's historic Public Square, on a limestone bluff above the Duck River in the heart of Bedford County",
  },
  {
    slug: "north-shelbyville",
    name: "North Shelbyville",
    citySlug: "shelbyville",
    cityName: "Shelbyville",
    county: "Bedford County",
    descriptor:
      "the north Shelbyville area along US-231, close to the Tennessee Walking Horse National Celebration grounds",
  },

  // Woodbury (Cannon County)
  {
    slug: "downtown-woodbury",
    name: "Downtown Woodbury",
    citySlug: "woodbury",
    cityName: "Woodbury",
    county: "Cannon County",
    descriptor:
      "Downtown Woodbury, the small Cannon County seat on the East Fork of the Stones River, about 19 miles east of Murfreesboro on US-70S",
  },
  {
    slug: "outer-cannon-county-woodbury",
    name: "Outer Cannon County",
    citySlug: "woodbury",
    cityName: "Woodbury",
    county: "Cannon County",
    descriptor:
      "the rural Cannon County communities surrounding Woodbury, where many residents already drive into Murfreesboro for specialized healthcare",
  },

  // Eagleville (Rutherford County)
  {
    slug: "downtown-eagleville",
    name: "Downtown Eagleville",
    citySlug: "eagleville",
    cityName: "Eagleville",
    county: "Rutherford County",
    descriptor:
      "Downtown Eagleville, the small Rutherford County town best known as home to Eagleville High School",
  },
  {
    slug: "rural-rutherford-eagleville",
    name: "Rural Rutherford County (near Eagleville)",
    citySlug: "eagleville",
    cityName: "Eagleville",
    county: "Rutherford County",
    descriptor:
      "the farmland surrounding Eagleville near the Marshall County line, one of the most rural corners of Rutherford County",
  },
];

const bySlug = new Map(NEIGHBORHOODS.map((n) => [n.slug, n]));

export function getNeighborhood(slug: string): Neighborhood | undefined {
  return bySlug.get(slug);
}
