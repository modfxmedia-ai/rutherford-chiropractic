// One-off: add "chronic-pain-relief-with-massage-therapy-in-murfreesboro" blog post.
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SLUG = "chronic-pain-relief-with-massage-therapy-in-murfreesboro";
const PATH_ = `/${SLUG}/`;
const TITLE = "Chronic Pain Relief With Massage Therapy in Murfreesboro";
const DESCRIPTION =
  "Find lasting, drug-free comfort with massage therapy in Murfreesboro, TN plus supportive chiropractic care for spine, joint, and injury pain relief";
const CATEGORY = "Massage Therapy";
const PUBLISHED_AT = "2026-08-17T17:00:00+00:00";
const IMAGE_SRC = `/media/blog/${SLUG}-featured.jpg`;
const IMAGE_ALT = "Massage Therapy";
const IMAGE_WIDTH = 612;
const IMAGE_HEIGHT = 408;
const ORIGIN = "https://rutherfordchiropractic.com";

// --- 1. Copy the image into public/media/blog ---
const srcImage = path.join(
  ROOT,
  "images/blogs-images/chronic-pain-relief-with-massage-therapy-in-murfreesboro.jpg"
);
const destDir = path.join(ROOT, "public/media/blog");
mkdirSync(destDir, { recursive: true });
const destImage = path.join(destDir, `${SLUG}-featured.jpg`);
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
  h2("Melt Away Chronic Pain and Move Freely Again"),
  p(
    "Living with chronic pain can make normal days feel much harder than they should be. Ongoing back pain, neck stiffness, migraines, joint pain, or burning nerve pain can turn simple things into big challenges. Standing at a long football game, walking through an outdoor festival, or sitting through a school event may leave you hurting for days."
  ),
  p(
    "When pain hangs around, many people lean on pain pills, ice packs, or &#8220;pushing through it.&#8221; That might help for a short time, but it rarely changes what is causing the problem. Therapeutic massage is a gentle, hands-on way to calm irritated muscles and nerves, loosen tight areas, and support better movement without drugs or surgery."
  ),
  p(
    "At Rutherford Spine &amp; Wellness Center, we offer massage therapy in Murfreesboro, TN, as part of a whole-person approach to long-term relief. We look at how your pain started, what makes it worse, and how your daily life is affected, then build care around you."
  ),

  h2("How Therapeutic Massage Eases Chronic Pain"),
  p(
    "Massage is far more than &#8220;just relaxing.&#8221; It works with both your body and your nervous system to ease long-lasting pain."
  ),
  p("On the nervous system side, massage can help by:"),
  ul([
    "Calming the fight-or-flight response that keeps your body on high alert",
    "Lowering stress tension that often makes pain feel stronger",
    "Boosting your body&#8217;s own feel-good chemicals, which can help dull pain signals",
  ]),
  p("On the physical side, skilled massage can:"),
  ul([
    "Improve blood flow so tight, sore tissues get more oxygen and nutrients",
    "Reduce muscle tension and tender trigger points that refer pain elsewhere",
    "Support better joint movement so you are not as stiff or locked up",
  ]),
  p("Chronic conditions often respond well when massage is part of a regular plan. For example:"),
  ul([
    "Sciatica can feel better when tight hip and low back muscles are softened",
    "Arthritis can be easier to live with when muscles around the joints are more relaxed",
    "Tension headaches and migraines may ease when neck, shoulder, and jaw muscles release",
    "Whiplash and old car injuries often respond to gentle, targeted work around the neck and upper back",
    "Work-related strain in the low back, shoulders, or hands can calm down when overused muscles are addressed",
  ]),
  p(
    "Over time, many people notice fewer flare-ups, less intense pain, and better daily function when massage is part of their ongoing care."
  ),

  h2("Massage Therapy in Murfreesboro, TN That Fits Your Life"),
  p(
    "Life around Murfreesboro can be tough on the body. Long commutes, hours at a computer, caring for kids or grandkids, and heavy weekend projects can all feed into chronic pain. By the end of the day, you might feel like your neck is locked up, your low back is throbbing, or your legs are tight and sore."
  ),
  p("We design massage therapy in Murfreesboro, TN, to fit your real life, not a generic spa routine. That means we consider:"),
  ul([
    "Your health history and any past injuries",
    "What your normal day looks like, from work to home tasks",
    "Specific activities that set off or worsen your pain",
  ]),
  p(
    "Instead of giving everyone the same type of massage, we aim each session at your main problem areas and long-term goals. Maybe you need more focus on your low back and hips during a busy sports season, then shift to maintenance visits once things calm down. Your plan can adjust with you."
  ),
  p("Some people benefit from more frequent sessions during:"),
  ul([
    "Back-to-school and fall sports, when schedules are packed",
    "Busy work periods with extra computer or driving time",
    "Phases of healing after a flare-up or new injury",
  ]),
  p(
    "When your pain is better controlled, you might move into a lighter, spaced-out schedule that helps you stay ahead of the pain rather than chasing it."
  ),

  h2("Types of Massage That Support Lasting Relief"),
  p(
    "Different problems often call for different massage approaches. In a chiropractic setting, we commonly draw from several methods so we can match the technique to your body&#8217;s needs."
  ),
  p("These may include:"),
  ul([
    "Deep tissue massage for stubborn knots and long-standing muscle tension",
    "Trigger point therapy to release specific tight spots that refer pain",
    "Myofascial release to ease stiffness in the connective tissue that surrounds muscles",
    "Neuromuscular techniques to address patterns of tightness related to nerve irritation",
    "Relaxation-focused massage for stress-related pain and overall calming",
  ]),
  p("Certain types often fit particular issues:"),
  ul([
    "Deep tissue and trigger point work can help with old sports injuries or heavy lifting strain",
    "Myofascial release can support people who feel &#8220;stuck&#8221; and have limited range of motion",
    "Gentler techniques are often better for fibromyalgia, neuropathy, or people who are very sensitive to touch",
  ]),
  p("At Rutherford Spine &amp; Wellness Center, pressure and technique are adjusted each visit. We look at:"),
  ul([
    "Your current pain level",
    "How you responded to the last session",
    "Where you are in your healing and what other therapies you are receiving",
  ]),
  p("That way, massage is always working with your body, not against it."),

  h2("Why Massage Works Better with Chiropractic Care"),
  p(
    "Massage and chiropractic care often work best together. Tight, guarded muscles can pull on your spine and joints, making it harder to stay in good alignment. When those muscles are relaxed with massage, chiropractic adjustments can feel more comfortable and may hold longer."
  ),
  p("Together, this kind of care can:"),
  ul([
    "Support better posture by easing the muscles that keep pulling you out of place",
    "Address both the joints and the soft tissues, not just one or the other",
    "Help your nervous system feel calmer, which may reduce how strongly you feel pain",
  ]),
  p(
    "Chiropractic care focuses on how your spine and joints move and line up. Massage focuses on the muscles, fascia and stress patterns that surround those joints. When we combine them at Rutherford Spine &amp; Wellness Center, we can work on deeper causes of pain instead of only chasing symptoms. Many people find that this approach helps them stay more active and enjoy daily life with less worry about constant pain."
  ),

  h2("What to Expect at Your First Massage Appointment"),
  p(
    "If you have never had therapeutic massage, it is normal to feel a bit unsure. We walk you through each step so you know what to expect and can relax as much as possible."
  ),
  p("Your first visit usually includes:"),
  ul([
    "A review of your health history and any current diagnoses",
    "A conversation about where you hurt, what makes it worse or better, and your goals",
    "A brief assessment so we can feel which areas are tight, guarded, or weak",
  ]),
  p(
    "Before the session starts, we explain how the session will work, what areas we will focus on, and how you can let us know if anything is uncomfortable. During the massage, you are always properly draped, and you can ask for more or less pressure at any time. You are in control of your comfort."
  ),
  p("After your massage, we may suggest simple steps to support the benefits, such as:"),
  ul([
    "Drinking water to help your tissues recover",
    "Gentle stretching or light walking if it feels good",
    "Watching for normal soreness that may last a short time as tight muscles release",
  ]),
  p(
    "Many people notice early signs that massage is helping, like sleeping better, moving with less stiffness in the morning, or having fewer sudden spikes of pain. Over time, we adjust your plan so it keeps working for your changing body and your daily life."
  ),

  h2("Relieve Pain And Restore Comfort With Targeted Care"),
  p(
    `If you are ready to ease muscle tension and improve your daily comfort, our team at Rutherford Spine &amp; Wellness Center is here to help. Discover how personalized <a href="/chiropractic/">massage therapy in Murfreesboro, TN</a> can support your recovery, reduce stress, and complement your chiropractic care plan. To schedule an appointment or ask questions about what to expect, simply <a href="/contact-us/">contact us</a> today.`
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
