import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /back-pain-relief-shelbyville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Shelbyville Back Pain Relief - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/back-pain-relief-shelbyville-tn/");

export default function Page() {
  const data = getLocationPage("back-pain-relief-shelbyville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-relief-shelbyville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
