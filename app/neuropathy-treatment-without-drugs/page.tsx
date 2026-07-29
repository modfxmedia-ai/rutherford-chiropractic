import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /neuropathy-treatment-without-drugs/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Drug-Free Neuropathy Care Options in Murfreesboro"

export const metadata = metadataFor("/neuropathy-treatment-without-drugs/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/neuropathy-treatment-without-drugs/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Drug-Free Neuropathy Care Options in Murfreesboro"}</h1>
        <p>Blog post route (/neuropathy-treatment-without-drugs/) scaffolded.</p>
      </main>
    </>
  );
}
