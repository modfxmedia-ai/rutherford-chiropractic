import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /chiropractic-murfreesboro-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Murfreesboro Chiropractic - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/chiropractic-murfreesboro-tn/");

export default function Page() {
  const data = getLocationPage("chiropractic-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-murfreesboro-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
