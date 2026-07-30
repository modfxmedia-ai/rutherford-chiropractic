import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /medical-weight-loss-smyrna-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Smyrna Medical Weight Loss - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/medical-weight-loss-smyrna-tn/");

export default function Page() {
  const data = getLocationPage("medical-weight-loss-smyrna-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss-smyrna-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
