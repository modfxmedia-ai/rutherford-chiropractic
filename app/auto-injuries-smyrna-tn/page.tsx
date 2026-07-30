import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /auto-injuries-smyrna-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Smyrna Auto Injuries - Chiropractic Murfreesboro TN"
export const metadata = metadataFor("/auto-injuries-smyrna-tn/");

export default function Page() {
  const data = getLocationPage("auto-injuries-smyrna-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/auto-injuries-smyrna-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
