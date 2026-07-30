import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /sports-injuries-shelbyville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Shelbyville Sports Injuries - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/sports-injuries-shelbyville-tn/");

export default function Page() {
  const data = getLocationPage("sports-injuries-shelbyville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries-shelbyville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
