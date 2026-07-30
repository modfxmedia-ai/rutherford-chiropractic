import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /spinal-decompression-lebanon-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Lebanon Spinal Decompression - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/spinal-decompression-lebanon-tn/");

export default function Page() {
  const data = getLocationPage("spinal-decompression-lebanon-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-lebanon-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
