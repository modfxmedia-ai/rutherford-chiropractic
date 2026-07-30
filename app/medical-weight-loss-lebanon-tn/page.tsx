import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /medical-weight-loss-lebanon-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Lebanon Medical Weight Loss - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/medical-weight-loss-lebanon-tn/");

export default function Page() {
  const data = getLocationPage("medical-weight-loss-lebanon-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-lebanon-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
