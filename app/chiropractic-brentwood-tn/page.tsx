import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /chiropractic-brentwood-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Brentwood Chiropractic - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/chiropractic-brentwood-tn/");

export default function Page() {
  const data = getLocationPage("chiropractic-brentwood-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-brentwood-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
