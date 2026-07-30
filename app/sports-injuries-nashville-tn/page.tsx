import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /sports-injuries-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Nashville Sports Injuries - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/sports-injuries-nashville-tn/");

export default function Page() {
  const data = getLocationPage("sports-injuries-nashville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/sports-injuries-nashville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
