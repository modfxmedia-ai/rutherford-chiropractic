import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /neuropathy-murfreesboro-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Neuropathy Murfreesboro TN - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/neuropathy-murfreesboro-tn/");

export default function Page() {
  const data = getLocationPage("neuropathy-murfreesboro-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-murfreesboro-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
