import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { ServicePageTemplate } from "../_ui/services/ServicePageTemplate";
import { getServicePage } from "../_lib/services";

// Route: /medical-weight-loss/
// Category: core-service (Core service page)
// Source sitemap: page-sitemap.xml
// Live title: "Medical Weight Loss - Chiropractic Murfreesboro TN"

const service = getServicePage("medical-weight-loss");

export const metadata = metadataFor("/medical-weight-loss/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/medical-weight-loss/")} />
      <ServicePageTemplate data={service} />
    </>
  );
}
