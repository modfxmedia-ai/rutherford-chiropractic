import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /back-pain-relief-woodbury-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Woodbury Back Pain Relief - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/back-pain-relief-woodbury-tn/");

export default function Page() {
  const data = getLocationPage("back-pain-relief-woodbury-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-relief-woodbury-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
