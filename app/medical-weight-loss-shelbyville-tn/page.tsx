import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /medical-weight-loss-shelbyville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Shelbyville Medical Weight Loss - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/medical-weight-loss-shelbyville-tn/");

export default function Page() {
  const data = getLocationPage("medical-weight-loss-shelbyville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-shelbyville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
