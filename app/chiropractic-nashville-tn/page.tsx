import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { getLocationPage } from "../_lib/locations";
import { LocationPageTemplate } from "../_ui/locations/LocationPageTemplate";

// Route: /chiropractic-nashville-tn/
// Category: location-landing (Location landing page)
// Source sitemap: page-sitemap.xml
// Live title: "Chiropractic in Nashville | Find Relief at Rutherford Spine and Wellness Center"
export const metadata = metadataFor("/chiropractic-nashville-tn/");

export default function Page() {
  const data = getLocationPage("chiropractic-nashville-tn")!;
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/chiropractic-nashville-tn/")} />
      <LocationPageTemplate data={data} />
    </>
  );
}
