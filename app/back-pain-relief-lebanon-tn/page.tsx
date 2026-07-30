import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /back-pain-relief-lebanon-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Lebanon Back Pain Relief - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/back-pain-relief-lebanon-tn/");

export default function Page() {
  const data = getLocationPage("back-pain-relief-lebanon-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-relief-lebanon-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
