import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /choosing-spine-doctor-after-sports-injury/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Choosing a Spine Doctor in Murfreesboro After a Sports Injury"

export const metadata = metadataFor("/choosing-spine-doctor-after-sports-injury/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/choosing-spine-doctor-after-sports-injury/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Choosing a Spine Doctor in Murfreesboro After a Sports Injury"}</h1>
        <p>Blog post route (/choosing-spine-doctor-after-sports-injury/) scaffolded.</p>
      </main>
    </>
  );
}
