import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /auto-injuries-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Nashville Auto Injuries - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/auto-injuries-nashville-tn/");

export default function Page() {
  const data = getLocationPage("auto-injuries-nashville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injuries-nashville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
