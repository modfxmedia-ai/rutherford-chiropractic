import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /medical-weight-loss-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Nashville Medical Weight Loss - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/medical-weight-loss-nashville-tn/");

export default function Page() {
  const data = getLocationPage("medical-weight-loss-nashville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-nashville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
