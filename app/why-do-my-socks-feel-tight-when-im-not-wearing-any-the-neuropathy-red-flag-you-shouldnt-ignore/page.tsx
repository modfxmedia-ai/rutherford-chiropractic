import { metadataFor, jsonLdFor } from "../_lib/content-map";
import { JsonLdBlocks } from "../_lib/JsonLdBlocks";

// Route: /why-do-my-socks-feel-tight-when-im-not-wearing-any-the-neuropathy-red-flag-you-shouldnt-ignore/
// Category: blog-post (Blog post)
// Source sitemap: post-sitemap.xml
// Live title: "Tight Socks When Barefoot? Neuropathy Warning Sign Explained"

export const metadata = metadataFor("/why-do-my-socks-feel-tight-when-im-not-wearing-any-the-neuropathy-red-flag-you-shouldnt-ignore/");

export default function Page() {
  return (
    <>
      <JsonLdBlocks blocks={jsonLdFor("/why-do-my-socks-feel-tight-when-im-not-wearing-any-the-neuropathy-red-flag-you-shouldnt-ignore/")} />
      <main>
        {/* Routing placeholder — visual design lands in a later step. */}
        <h1>{"Tight Socks When Barefoot? Neuropathy Warning Sign Explained"}</h1>
        <p>Blog post route (/why-do-my-socks-feel-tight-when-im-not-wearing-any-the-neuropathy-red-flag-you-shouldnt-ignore/) scaffolded.</p>
      </main>
    </>
  );
}
