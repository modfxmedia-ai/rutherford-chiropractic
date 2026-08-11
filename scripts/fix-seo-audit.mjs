// One-off fix-up for the pre-launch technical SEO audit findings.
// Mutates content-map.json in place:
//  1. Strips the duplicate/stale `MedicalClinic` JSON-LD block from `/` and
//     `/blog/` (BusinessSchema.tsx already emits the canonical one site-wide).
//  2. Repoints blog-post OG images from the old WordPress origin to the
//     already-downloaded local `/media/blog/*-featured.*` assets.
//  3. Rewrites the 25 meta descriptions that fell outside 120-160 chars.
import { readFileSync, writeFileSync } from "node:fs";

const path = new URL("../content-map.json", import.meta.url);
const blogDataPath = new URL("../app/_lib/blog-data.json", import.meta.url);

const cm = JSON.parse(readFileSync(path, "utf8"));
const blogData = JSON.parse(readFileSync(blogDataPath, "utf8"));
const blogByPath = new Map(Object.values(blogData).map((p) => [p.path, p]));

const DESCRIPTIONS = {
  "/how-spinal-decompression-can-help-with-sciatica-relief/":
    "Rutherford Spine & Wellness Center offers advanced spinal decompression therapy in Murfreesboro, TN to safely relieve sciatica and nerve pain.",
  "/chiropractic-care-for-disc-injuries/":
    "Rutherford Spine and Wellness Center helps patients recover from disc injuries in Murfreesboro through education, chiropractic care, and prevention.",
  "/neuropathy-in-young-adults/":
    "Neuropathy can affect young adults too, causing burning pain, tingling, or numbness in the hands and feet. Learn the causes and treatment options.",
  "/chronic-neck-pain-with-spinal-decompression/":
    "Chronic neck pain from herniated discs, degenerative disc disease, or poor posture can compress nerves. Spinal decompression therapy offers relief.",
  "/chiropractic-relief-for-headaches-and-pain/":
    "Rutherford Spine and Wellness Center helps Murfreesboro patients find lasting relief from headaches and pain through personalized chiropractic care.",
  "/how-neuropathy-affects-your-sleep/":
    "Neuropathy pain can disrupt sleep with burning, tingling, or numbness at night. Our FDA-approved, non-invasive treatments help. Call 615-217-0097.",
  "/how-to-recognize-the-early-signs-of-neuropathy/":
    "Learn to recognize the early signs of neuropathy. Rutherford Spine & Wellness Center offers drug-free treatment for nerve pain in Murfreesboro, TN.",
  "/auto-injuries-shelbyville-tn/":
    "After a car accident in Shelbyville? Get natural recovery for whiplash and back pain with auto injury chiropractic care. Call (615) 217-0097 today.",
  "/chiropractic-shelbyville-tn/":
    "Neck, back, or joint pain limiting your life? Rutherford Spine and Wellness Center offers trusted chiropractic care in Shelbyville. Call 615-217-0097.",
  "/chiropractic-woodbury-tn/":
    "Back pain or stiffness in Woodbury? Get personalized chiropractic care from Rutherford Spine and Wellness Center. Call (615) 217-0097 for treatment.",
  "/how-spinal-decompression-can-help-with-arthritis-and-numbness/":
    "Arthritis can cause more than joint pain, it can lead to numbness and tingling, especially when it affects the spine. Learn how decompression helps.",
  "/back-pain-relief-lebanon-tn/":
    "Struggling with back pain in Lebanon? Get lasting relief without drugs or surgery. Call (615) 217-0097 for a personalized plan at Rutherford Spine.",
  "/spinal-decompression-la-vergne-tn/":
    "Suffering from herniated discs or sciatica in La Vergne? Non-surgical spinal decompression therapy relieves pressure. Call (615) 217-0097 for relief.",
  "/back-pain-relief-shelbyville-tn/":
    "Struggling with back pain in Shelbyville? Get proven relief without surgery. Call Rutherford Spine and Wellness Center at (615) 217-0097 for care.",
  "/auto-injuries-nashville-tn/":
    "Nashville auto injury? Get non-surgical relief. Rutherford Spine and Wellness Center specializes in whiplash and accident recovery. Call 615-217-0097.",
  "/auto-injuries-eagleville-tn/":
    "Whiplash or back pain after a car crash? Rutherford Spine and Wellness Center provides auto injury care in Eagleville. Call (615) 217-0097 today.",
  "/neuropathy-la-vergne-tn/":
    "Tingling, numbness, or burning in La Vergne? Rutherford Spine and Wellness Center offers neuropathy care to manage nerve discomfort. Call 615-217-0097.",
  "/sports-injuries-woodbury-tn/":
    "Athletes in Woodbury need relief from sports injuries. Get back in the game faster with expert care at Rutherford Spine and Wellness. Call 615-217-0097.",
  "/back-pain-relief-nashville-tn/":
    "Struggling with back pain in Nashville? Get personalized care from Rutherford Spine and Wellness Center. Call (615) 217-0097 for a same-day visit.",
  "/spinal-decompression-eagleville-tn/":
    "Struggling with back pain or sciatica in Eagleville? Spinal decompression therapy can help. Call (615) 217-0097 for relief at Rutherford Spine.",
  "/why-your-joints-pop-crack-or-click-when-you-move/":
    "Curious why your joints pop or crack when you move? Learn what those sounds mean and how chiropractic care improves joint function and mobility.",
  "/spinal-decompression-brentwood-tn/":
    "Struggling with back pain in Brentwood? Gentle spinal decompression therapy can help. Call (615) 217-0097 for a free consultation at Rutherford Spine.",
  "/auto-injuries-la-vergne-tn/":
    "After a La Vergne car accident, get professional care at Rutherford Spine and Wellness Center for auto injuries and recovery. Call 615-217-0097 today.",
  "/back-pain-relief-woodbury-tn/":
    "Tired of living with back pain? Get personalized relief in Woodbury, TN from Rutherford Spine and Wellness Center. Call (615) 217-0097 to feel better.",
  "/neuropathy-shelbyville-tn/":
    "Tingling, numbness, or burning pain? Our Shelbyville team at Rutherford Spine and Wellness Center offers neuropathy care. Call (615) 217-0097 for relief.",
};

// Verify every replacement is actually within range before writing anything.
for (const [routePath, text] of Object.entries(DESCRIPTIONS)) {
  if (text.length < 120 || text.length > 160) {
    throw new Error(`Replacement for ${routePath} is ${text.length} chars (must be 120-160): "${text}"`);
  }
}

function stripDuplicateOrgSchema(entry) {
  if (!entry?.meta?.jsonLd) return;
  if (entry.path !== "/" && entry.path !== "/blog/") return;
  entry.meta.jsonLd = entry.meta.jsonLd.filter((block) => block["@type"] !== "MedicalClinic");
}

function applyDescription(entry) {
  const replacement = DESCRIPTIONS[entry.path];
  if (!replacement || !entry.meta) return;
  entry.meta.description = replacement;
  if (entry.meta.openGraph) entry.meta.openGraph.description = replacement;
}

function localizeBlogImage(entry) {
  if (entry.category !== "blog-post" || !entry.meta?.openGraph?.image) return;
  const post = blogByPath.get(entry.path);
  if (post?.featuredImage?.src) {
    entry.meta.openGraph.image = post.featuredImage.src;
  }
}

function fixEntry(entry) {
  stripDuplicateOrgSchema(entry);
  applyDescription(entry);
  localizeBlogImage(entry);
}

for (const entry of cm.routes) fixEntry(entry);
for (const group of Object.values(cm.grouped)) {
  for (const entry of group) fixEntry(entry);
}

writeFileSync(path, JSON.stringify(cm, null, 2) + "\n");
console.log("content-map.json updated.");
