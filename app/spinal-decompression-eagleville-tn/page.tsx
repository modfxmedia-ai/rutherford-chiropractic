import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /spinal-decompression-eagleville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Eagleville Spinal Decompression - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/spinal-decompression-eagleville-tn/");

export default function Page() {
  const data = getLocationPage("spinal-decompression-eagleville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression-eagleville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
