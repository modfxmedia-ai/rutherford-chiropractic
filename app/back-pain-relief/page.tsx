import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { ServicePageTemplate } from "../_ui/services/ServicePageTemplate";
import { getServicePage } from "../_lib/services";

// Route: /back-pain-relief/
// Category: core-service (Core service page)
// Source sitemap: page-sitemap.xml
// Live title: "Back Pain Relief in Murfreesboro | Spinal Therapy Clinic"

const service = getServicePage("back-pain-relief");

export const metadata = metadataFor("/back-pain-relief/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/back-pain-relief/")} />
      <ServicePageTemplate data={service} />
    </>
  );
}
