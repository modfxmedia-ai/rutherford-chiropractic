import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";
import { ServicePageTemplate } from "../_ui/services/ServicePageTemplate";
import { getServicePage } from "../_lib/services";

// Route: /spinal-decompression/
// Category: core-service (Core service page)
// Source sitemap: page-sitemap.xml
// Live title: "Spinal Decompression in Murfreesboro | Back Pain Relief"

const service = getServicePage("spinal-decompression");

export const metadata = metadataFor("/spinal-decompression/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/spinal-decompression/")} />
      <ServicePageTemplate data={service} />
    </>
  );
}
