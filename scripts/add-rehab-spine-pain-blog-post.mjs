// One-off: add "chronic-spine-pain-relief-with-rehab-care-in-murfreesboro" blog post.
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SLUG = "chronic-spine-pain-relief-with-rehab-care-in-murfreesboro";
const PATH_ = `/${SLUG}/`;
const TITLE = "Chronic Spine Pain Relief With Rehab Care in Murfreesboro";
const DESCRIPTION =
  "Discover non-invasive options for chronic spine pain, including rehabilitation services in Murfreesboro that support nerve health and reduce meds reliance";
const CATEGORY = "Rehabilitation";
const PUBLISHED_AT = "2026-08-24T17:00:00+00:00";
const IMAGE_SRC = `/media/blog/${SLUG}-featured.webp`;
const IMAGE_ALT = "Spine Rehabilitation";
const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 625;
const ORIGIN = "https://rutherfordchiropractic.com";

// --- 1. Copy the image into public/media/blog ---
const srcImage = path.join(
  ROOT,
  "images/blogs-images/chronic-spine-pain-relief-with-rehab-care-in-murfreesboro.webp"
);
const destDir = path.join(ROOT, "public/media/blog");
mkdirSync(destDir, { recursive: true });
const destImage = path.join(destDir, `${SLUG}-featured.webp`);
copyFileSync(srcImage, destImage);

// --- 2. blog-data.json: prepend new meta entry (newest-first order) ---
const blogDataPath = path.join(ROOT, "app/_lib/blog-data.json");
const blogData = JSON.parse(readFileSync(blogDataPath, "utf8"));
if (!blogData.some((p) => p.slug === SLUG)) {
  blogData.unshift({
    slug: SLUG,
    path: PATH_,
    title: TITLE,
    category: CATEGORY,
    publishedAt: PUBLISHED_AT,
    featuredImage: {
      src: IMAGE_SRC,
      alt: IMAGE_ALT,
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
    },
    excerpt: DESCRIPTION,
  });
  writeFileSync(blogDataPath, JSON.stringify(blogData, null, 2) + "\n");
}

// --- 3. blog-body.json: add sanitized WP-style HTML body ---
const bodyDataPath = path.join(ROOT, "app/_lib/blog-body.json");
const bodyData = JSON.parse(readFileSync(bodyDataPath, "utf8"));

const h2 = (text) => `<h2 class="wp-block-heading"><strong>${text}</strong></h2>`;
const p = (html) => `<p class="wp-block-paragraph">${html}</p>`;
const ul = (items) =>
  `<ul class="wp-block-list">\n${items.map((i) => `<li>${i}</li>`).join("\n\n\n\n")}\n</ul>`;

const sections = [
  h2("Regain Comfort and Control Over Chronic Spine Pain"),
  p(
    "Chronic spine pain can touch every part of your day. Sitting at your desk, standing in the kitchen, riding in the car, or trying to relax at a local event can all feel harder when your back or neck will not calm down. It is tough to enjoy time with family or keep up with work when every move reminds you something hurts."
  ),
  p(
    "Rest, ice, or quick stretches might give a little relief, but the pain usually comes back. Over-the-counter pills can take the edge off, yet they do not fix what is going on inside your spine, joints, and nerves. A structured rehabilitation plan gives your body a chance to heal, rebuild, and move better again."
  ),
  p(
    "At our Murfreesboro chiropractic clinic, we focus on whole-person, non-invasive care that aims at root causes instead of just covering up symptoms. In this article, we will walk through how rehabilitation services in Murfreesboro can help with chronic spine pain, including spinal decompression, neuropathy care, targeted exercise, and everyday lifestyle support."
  ),

  h2("Why Chronic Spine Pain Demands More Than Quick Fixes"),
  p(
    "Chronic spine pain usually does not start overnight. It often builds over time from things like poor posture at work, repeated bending or lifting, old injuries that never fully healed, or age-related changes in the discs between your vertebrae. Nerves can get irritated or compressed, muscles can tighten or weaken, and the spine can lose its natural balance."
  ),
  p("Many people turn to short-term fixes, such as:"),
  ul([
    "Over-the-counter or prescription pain medications",
    "Muscle relaxers or injections",
    "Long periods of bed rest or inactivity",
  ]),
  p(
    "These may give short relief, but relying on them for too long can bring problems. Medications can have side effects. Inactivity can lead to weaker muscles and stiffer joints, which can actually increase pain and make normal tasks harder."
  ),
  p(
    "A better approach is a comprehensive plan that supports the whole spine and nervous system. Combining chiropractic adjustments, corrective exercises, and nervous system support can help your body move closer to its natural alignment."
  ),
  p("Instead of only chasing pain, we focus on:"),
  ul([
    "Misalignments in the spine that stress joints and discs",
    "Muscle imbalances that pull the spine out of position",
    "Areas of nerve irritation that send pain, tingling, or burning into the arms or legs",
  ]),
  p(
    "By working on these root issues, it is possible to build more lasting comfort and function, not just temporary relief."
  ),

  h2("Personalized Rehabilitation Services in Murfreesboro for Spine Relief"),
  p(
    "No two cases of back or neck pain are exactly the same, which is why a careful exam is so important. At our clinic, we start with a detailed consultation and physical assessment. When appropriate, we may use digital imaging and functional movement testing to see how your spine, joints, and muscles are working together."
  ),
  p("From there, we design a customized plan that may include:"),
  ul([
    "Chiropractic adjustments to improve joint motion and alignment",
    "Spinal decompression therapy for disc-related pain and nerve pressure",
    "Neuropathy treatment for symptoms like burning, tingling, or numbness in the legs or feet",
  ]),
  p(
    "Targeted exercise and stretching play a big role. Gentle, guided movements can retrain weak or tight muscles, stabilize the spine, and support better posture. Over time, this can help you sit, stand, walk, and lift with more ease."
  ),
  p("We also think about what your life looks like right now. That might mean:"),
  ul([
    "Adapting care for late-summer yard work and outdoor chores",
    "Supporting parents and teachers during back-to-school routines",
    "Helping recreational athletes prepare for seasonal sports or activities",
  ]),
  p(
    "Plans can be adjusted as the seasons change so your spine stays supported through each new set of demands."
  ),

  h2("Non-Invasive Solutions That Support Long-Term Healing"),
  p(
    "Many people with chronic back or neck pain want to avoid surgery if possible. Non-invasive treatments can often give a helpful path forward, especially when discs or nerves are involved."
  ),
  p("Spinal decompression is a gentle therapy that aims to:"),
  ul([
    "Reduce pressure on spinal discs",
    "Create more space for irritated nerves",
    "Support the flow of oxygen and nutrients into the tissues",
  ]),
  p(
    "This can be helpful for conditions like herniated discs, sciatica, or long-lasting low back pain. The goal is to help the spine move more comfortably and give discs a better chance to heal."
  ),
  p(
    "Neuropathy therapies can be combined with chiropractic care for those who have burning, tingling, or numbness in the feet or legs. When nerves are not working well, even simple steps can feel unsteady. Care for neuropathy often focuses on improving circulation and nerve function, along with supporting joint and spine alignment so nerve pathways are as open as they can be."
  ),
  p("Soft tissue work and guided rehab exercises add another layer of support. These can help:"),
  ul([
    "Improve flexibility in tight muscles and connective tissues",
    "Build core strength to protect the lower back",
    "Increase overall stability so the spine does not have to work as hard",
  ]),
  p(
    "All of these approaches share a common goal: to support the body&#8217;s own healing process and lower the need for long-term pain pills."
  ),

  h2("Lifestyle Coaching to Protect Your Spine Every Season"),
  p(
    "What you do at home, at work, and on the go has a big impact on how your spine feels. Small daily habits can either keep you moving well or slowly add up to more pain."
  ),
  p("Key areas we often focus on include:"),
  ul([
    "Desk and chair posture for those who sit most of the day",
    "Phone and device use that can strain the neck and upper back",
    "Lifting techniques for chores, kids, or work tasks",
    "Sleep positions and pillow choices that support the spine",
  ]),
  p(
    "Lifestyle guidance may also cover workstation changes, such as raising a monitor, using a chair with better support, or changing how often you stand and stretch during the day. Supportive footwear and smart exercise choices are another part of long-term spine protection."
  ),
  p("For late summer and early fall in Murfreesboro, helpful tips may include:"),
  ul([
    "Choosing the right backpack fit and weight for students",
    "Using proper form when raking leaves or working in the yard",
    "Adding simple warm-up routines before recreational sports or outdoor projects",
  ]),
  p(
    "We also talk about how good nutrition, steady hydration, and stress management can affect pain levels. Inflammation, muscle tension, and poor sleep all make chronic spine pain feel worse. Simple, steady changes in these areas can support the work we do in the clinic and help your results last longer."
  ),

  h2("Take the Next Step Toward a Stronger, Pain-Resilient Spine"),
  p(
    "Living with chronic spine pain can make you feel like your body is in charge of your day instead of you. With the right evaluation and a thoughtful plan, it is possible to move toward better comfort, more strength, and greater confidence in your daily activities."
  ),
  p(
    "At Rutherford Spine &amp; Wellness Center, we focus on non-invasive, whole-person rehabilitation services in Murfreesboro that aim to address the causes of your pain, not just the symptoms. From your first visit, you can expect a thorough conversation about your health history, a careful exam, and a clear explanation of the rehabilitation options that fit your needs and goals."
  ),

  h2("Start Your Personalized Recovery Plan Today"),
  p(
    `If pain is limiting your daily life, we are ready to help you move with confidence again. At Rutherford Spine &amp; Wellness Center, our team provides focused <a href="/back-pain-relief/">rehabilitation services in Murfreesboro</a> tailored to your specific condition and goals. We will walk you through a clear treatment plan so you know what to expect at every step. To schedule an appointment or ask questions, please <a href="/contact-us/">contact us</a> today.`
  ),
];

bodyData[SLUG] = sections.join("\n\n\n\n");
writeFileSync(bodyDataPath, JSON.stringify(bodyData, null, 2) + "\n");

// --- 4. content-map.json: add route entry + update totals + grouped copy ---
const cmPath = path.join(ROOT, "content-map.json");
const cm = JSON.parse(readFileSync(cmPath, "utf8"));

const routeEntry = {
  path: PATH_,
  url: `${ORIGIN}${PATH_}`,
  lastmod: PUBLISHED_AT,
  source: "post",
  category: "blog-post",
  fetchError: null,
  meta: {
    title: TITLE,
    description: DESCRIPTION,
    canonical: `${ORIGIN}${PATH_}`,
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      image: IMAGE_SRC,
      type: "article",
    },
    twitter: { card: "summary_large_image" },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": ["Person", "Organization"],
            "@id": `${ORIGIN}/#person`,
            name: "Chiropractic Murfreesboro TN",
          },
          {
            "@type": "WebSite",
            "@id": `${ORIGIN}/#website`,
            url: ORIGIN,
            name: "Chiropractic Murfreesboro TN",
            publisher: { "@id": `${ORIGIN}/#person` },
            inLanguage: "en-US",
          },
          {
            "@type": "ImageObject",
            "@id": `${ORIGIN}${IMAGE_SRC}`,
            url: `${ORIGIN}${IMAGE_SRC}`,
            width: String(IMAGE_WIDTH),
            height: String(IMAGE_HEIGHT),
            caption: IMAGE_ALT,
            inLanguage: "en-US",
          },
          {
            "@type": "WebPage",
            "@id": `${ORIGIN}${PATH_}#webpage`,
            url: `${ORIGIN}${PATH_}`,
            name: TITLE,
            datePublished: PUBLISHED_AT,
            dateModified: PUBLISHED_AT,
            isPartOf: { "@id": `${ORIGIN}/#website` },
            primaryImageOfPage: { "@id": `${ORIGIN}${IMAGE_SRC}` },
            inLanguage: "en-US",
          },
          {
            "@type": "Person",
            "@id": `${ORIGIN}/author/palashseo/`,
            name: "Palash",
            url: `${ORIGIN}/author/palashseo/`,
          },
          {
            "@type": "BlogPosting",
            headline: TITLE,
            datePublished: PUBLISHED_AT,
            dateModified: PUBLISHED_AT,
            articleSection: CATEGORY,
            author: { "@id": `${ORIGIN}/author/palashseo/`, name: "Palash" },
            publisher: { "@id": `${ORIGIN}/#person` },
            description: DESCRIPTION,
            name: TITLE,
            "@id": `${ORIGIN}${PATH_}#richSnippet`,
            isPartOf: { "@id": `${ORIGIN}${PATH_}#webpage` },
            image: { "@id": `${ORIGIN}${IMAGE_SRC}` },
            inLanguage: "en-US",
            mainEntityOfPage: { "@id": `${ORIGIN}${PATH_}#webpage` },
          },
        ],
      },
    ],
  },
};

if (!cm.routes.some((r) => r.path === PATH_)) {
  cm.routes.splice(1, 0, routeEntry); // right after "/" home route
  cm.totals.all += 1;
  cm.totals["blog-post"] += 1;
  cm.totals.routes += 1;
  if (Array.isArray(cm.grouped?.["blog-post"])) {
    cm.grouped["blog-post"].unshift(routeEntry);
  }
  writeFileSync(cmPath, JSON.stringify(cm, null, 2) + "\n");
}

// --- 5. Scaffold the page.tsx file (generate-blog-pages.mjs fills it in) ---
const pageDir = path.join(ROOT, "app", SLUG);
mkdirSync(pageDir, { recursive: true });
const pageFile = path.join(pageDir, "page.tsx");
if (!existsSync(pageFile)) {
  writeFileSync(pageFile, "");
}

console.log("Done:", SLUG);
