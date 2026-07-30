import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /neuropathy-shelbyville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Shelbyville Neuropathy - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/neuropathy-shelbyville-tn/");

export default function Page() {
  const data = getLocationPage("neuropathy-shelbyville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-shelbyville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
