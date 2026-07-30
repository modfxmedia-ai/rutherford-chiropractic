import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /neuropathy-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Nashville Neuropathy - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/neuropathy-nashville-tn/");

export default function Page() {
  const data = getLocationPage("neuropathy-nashville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-nashville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
