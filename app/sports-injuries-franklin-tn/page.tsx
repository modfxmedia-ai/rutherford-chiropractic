import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /sports-injuries-franklin-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Franklin Sports Injuries - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/sports-injuries-franklin-tn/");

export default function Page() {
  const data = getLocationPage("sports-injuries-franklin-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries-franklin-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
