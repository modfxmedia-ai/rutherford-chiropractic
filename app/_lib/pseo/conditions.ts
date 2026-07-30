/**
 * Condition/symptom dataset for the programmatic-SEO (pSEO) layer
 * (`/{condition}/{neighborhood}/`).
 *
 * This is intentionally a DIFFERENT, broader taxonomy than the 7 conditions
 * in `app/_lib/conditions.ts` (which power the standalone `/{slug}/` pillar
 * pages like `/sciatica/`). A handful of slugs below overlap in name with
 * that file, but they are separate data objects tailored for combination
 * with a neighborhood — do not import from or mutate `conditions.ts`.
 *
 * `relatedServices` lists the existing core-service slugs (see
 * `app/_lib/services.ts` → `SERVICE_PAGES`) most relevant to the condition,
 * most-relevant first. The first entry is used as the page's primary
 * service for internal linking (pillar page + matching location page).
 */

export type PseoFaq = { question: string; answer: string };

export type PseoCondition = {
  slug: string;
  name: string;
  /** Lowercase form for mid-sentence use, e.g. "sciatica", "a herniated disc". */
  mentionPhrase: string;
  relatedServices: string[];
  symptoms: string[];
  /** 2–3 sentence, condition-only opening (no city/neighborhood mention). */
  introLead: string;
  /** Bank of condition-specific FAQs; pages surface a subset. */
  faqBank: PseoFaq[];
};

export const PSEO_CONDITIONS: PseoCondition[] = [
  {
    slug: "sciatica",
    name: "Sciatica",
    mentionPhrase: "sciatica",
    relatedServices: ["back-pain-relief", "spinal-decompression"],
    symptoms: [
      "Sharp or burning pain radiating from the lower back through the hip and leg",
      "Numbness or tingling that travels down one leg toward the foot",
      "Pain that worsens with sitting, coughing, or standing up",
      "A dull ache in the lower back that flares into shooting leg pain",
      "Weakness in the leg or foot on the affected side",
    ],
    introLead:
      "Sciatica is the sharp, burning, or tingling pain that starts in the lower back and radiates through the hip and down the leg - sometimes all the way to the foot. It rarely comes from one big injury; more often it builds gradually from everyday habits like prolonged sitting, poor lifting form, or sleeping in positions that quietly irritate the sciatic nerve.",
    faqBank: [
      {
        question: "What actually causes sciatica pain?",
        answer:
          "Sciatica happens when something - most often a bulging or herniated disc, a tight piriformis muscle, or degenerative changes in the spine - puts pressure on the sciatic nerve as it exits the lower spine. The result is pain that can radiate anywhere from the low back to the foot.",
      },
      {
        question: "Is chiropractic care effective for sciatica?",
        answer:
          "Yes. Chiropractic adjustments and non-surgical spinal decompression are aimed at relieving the nerve pressure causing sciatica, rather than simply masking the pain with medication.",
      },
      {
        question: "How long does sciatica take to improve with treatment?",
        answer:
          "Many patients notice meaningful relief within the first few visits, though full recovery timelines depend on how long the nerve has been compressed and your day-to-day activity level. We'll outline a realistic plan at your first visit.",
      },
      {
        question: "Should I rest completely if I have sciatica?",
        answer:
          "Complete bed rest is rarely recommended. Gentle movement, along with targeted chiropractic care, generally helps sciatica resolve faster than prolonged inactivity.",
      },
    ],
  },
  {
    slug: "herniated-disc",
    name: "Herniated Disc",
    mentionPhrase: "a herniated disc",
    relatedServices: ["spinal-decompression", "back-pain-relief"],
    symptoms: [
      "Localized back or neck pain that worsens with certain movements",
      "Radiating pain, numbness, or tingling into an arm or leg",
      "Muscle weakness in the area served by the affected nerve",
      "Pain that intensifies when sitting, bending, or lifting",
      "Symptoms that ease somewhat when lying down",
    ],
    introLead:
      "A herniated disc occurs when the soft inner material of a spinal disc pushes through its tougher outer layer, often irritating nearby nerves. It can develop from a single awkward lift or from years of repetitive strain, and the resulting pain can range from a dull ache to sharp, radiating nerve pain.",
    faqBank: [
      {
        question: "Can a herniated disc heal without surgery?",
        answer:
          "Many herniated discs respond well to conservative, non-surgical care. Spinal decompression therapy is designed to gently create space between vertebrae, taking pressure off the disc and surrounding nerves.",
      },
      {
        question: "What's the difference between a herniated and bulging disc?",
        answer:
          "A bulging disc extends outward but its outer layer stays intact; a herniated disc's inner material has actually broken through that outer layer. Herniated discs are more likely to irritate a nearby nerve directly.",
      },
      {
        question: "Will I need an MRI before treatment can start?",
        answer:
          "Not always. We evaluate your symptoms, posture, and range of motion first - imaging is recommended when the exam findings suggest it, or when conservative care isn't progressing as expected.",
      },
      {
        question: "Is spinal decompression safe for a herniated disc?",
        answer:
          "Yes - non-surgical spinal decompression is a widely used, drug-free option specifically intended to relieve the disc-related pressure that causes herniated-disc pain.",
      },
    ],
  },
  {
    slug: "bulging-disc",
    name: "Bulging Disc",
    mentionPhrase: "a bulging disc",
    relatedServices: ["spinal-decompression", "back-pain-relief"],
    symptoms: [
      "Stiffness or a deep ache in the back or neck",
      "Pain that radiates but may be less sharp than a herniation",
      "Symptoms that flare with prolonged sitting or standing",
      "Occasional tingling in an arm or leg",
      "Discomfort that improves and worsens depending on posture",
    ],
    introLead:
      "A bulging disc happens when a spinal disc extends beyond its normal boundary without the inner material breaking through, but it can still press on nearby nerves and cause real pain. Left unaddressed, a bulging disc can progress toward a full herniation over time.",
    faqBank: [
      {
        question: "Is a bulging disc serious?",
        answer:
          "It varies. Some bulging discs cause no symptoms at all, while others press on a nerve and cause significant pain. An exam helps determine whether - and how much - your bulge is contributing to your symptoms.",
      },
      {
        question: "Can chiropractic care help a bulging disc?",
        answer:
          "Yes. Chiropractic adjustments combined with spinal decompression are aimed at reducing the pressure on the disc, which can ease pain and help prevent further progression.",
      },
      {
        question: "What activities should I avoid with a bulging disc?",
        answer:
          "Heavy lifting with poor form and prolonged sitting are common aggravators. We'll walk through specific modifications for your daily routine at your visit.",
      },
      {
        question: "How is a bulging disc diagnosed?",
        answer:
          "A thorough history and physical exam usually points us in the right direction; imaging like an MRI confirms a bulging disc when needed.",
      },
    ],
  },
  {
    slug: "degenerative-disc-disease",
    name: "Degenerative Disc Disease",
    mentionPhrase: "degenerative disc disease",
    relatedServices: ["spinal-decompression", "chiropractic"],
    symptoms: [
      "Chronic low back or neck pain that comes and goes",
      "Stiffness that's worse first thing in the morning",
      "Pain that increases with sitting, bending, or twisting",
      "Occasional flare-ups after long periods of inactivity",
      "A feeling of instability in the spine",
    ],
    introLead:
      "Degenerative disc disease describes the natural wear-and-tear breakdown of the spinal discs that cushion each vertebra, and it's a normal part of aging for most people. The condition becomes a problem when that disc wear starts irritating nerves or joints and produces chronic pain and stiffness.",
    faqBank: [
      {
        question: "Can degenerative disc disease be reversed?",
        answer:
          "The disc wear itself can't be undone, but the pain and stiffness it causes can often be significantly reduced with chiropractic care, spinal decompression, and the right activity plan.",
      },
      {
        question: "At what age does degenerative disc disease usually start?",
        answer:
          "Disc changes can begin as early as your 30s, though many people don't notice symptoms until later. Genetics, past injuries, and repetitive strain all play a role.",
      },
      {
        question: "Is exercise safe with degenerative disc disease?",
        answer:
          "Generally yes - the right kind of movement helps keep supporting muscles strong and joints mobile. We'll tailor recommendations to your specific spine findings.",
      },
      {
        question: "Will I need this treatment forever?",
        answer:
          "Most patients move from an initial, more frequent care phase into periodic maintenance visits once symptoms are under control.",
      },
    ],
  },
  {
    slug: "pinched-nerve",
    name: "Pinched Nerve",
    mentionPhrase: "a pinched nerve",
    relatedServices: ["chiropractic", "spinal-decompression"],
    symptoms: [
      "Sharp, shooting, or electric-feeling pain",
      "Numbness or a \"pins and needles\" sensation",
      "Muscle weakness in the affected area",
      "Pain that worsens with certain neck or back positions",
      "Symptoms that radiate away from the spine",
    ],
    introLead:
      "A pinched nerve happens when surrounding bone, disc, or soft tissue puts abnormal pressure on a nerve root, disrupting its normal signal and producing pain, numbness, or weakness. It can occur in the neck or lower back and often radiates into an arm or leg.",
    faqBank: [
      {
        question: "How do you know if a nerve is pinched?",
        answer:
          "Classic signs include sharp or electric-feeling pain, numbness, tingling, or weakness that follows a specific pattern along the nerve's path. A hands-on exam helps confirm the source.",
      },
      {
        question: "Can a chiropractor help a pinched nerve?",
        answer:
          "Yes - chiropractic adjustments are specifically intended to relieve the abnormal pressure on a nerve, which is often the root cause of pinched-nerve symptoms.",
      },
      {
        question: "How long does a pinched nerve take to heal?",
        answer:
          "It depends on the cause and how long the pressure has been present, but many patients see improvement within a few weeks of consistent, targeted care.",
      },
      {
        question: "Can a pinched nerve become permanent?",
        answer:
          "Prolonged, untreated nerve compression can occasionally cause lasting weakness or numbness, which is why addressing symptoms early is important.",
      },
    ],
  },
  {
    slug: "whiplash",
    name: "Whiplash",
    mentionPhrase: "whiplash",
    relatedServices: ["auto-injuries", "chiropractic"],
    symptoms: [
      "Neck pain and stiffness that appear hours or days after an impact",
      "Headaches starting at the base of the skull",
      "Reduced range of motion in the neck",
      "Shoulder or upper-back pain",
      "Dizziness or fatigue following the injury",
    ],
    introLead:
      "Whiplash is a neck injury caused by a rapid back-and-forth motion of the head, most often from a car accident, that strains the neck's muscles and ligaments. Symptoms don't always show up immediately, which is why an evaluation soon after any collision matters even if you feel fine at first.",
    faqBank: [
      {
        question: "How soon after an accident should I see a chiropractor for whiplash?",
        answer:
          "As soon as possible. Whiplash symptoms often take hours or days to fully appear, and early evaluation helps prevent minor strain from becoming a chronic issue.",
      },
      {
        question: "Can whiplash cause long-term problems if untreated?",
        answer:
          "Yes, in some cases untreated whiplash can lead to chronic neck pain, stiffness, and recurring headaches. Prompt, targeted care lowers that risk.",
      },
      {
        question: "Does insurance typically cover chiropractic care after a car accident?",
        answer:
          "In many auto-accident cases, medical payments or auto insurance coverage applies to chiropractic treatment for whiplash - our team can help you understand your specific situation.",
      },
      {
        question: "What does whiplash treatment usually involve?",
        answer:
          "Care typically combines gentle chiropractic adjustments, soft-tissue work, and a home exercise plan to restore normal neck motion and reduce inflammation.",
      },
    ],
  },
  {
    slug: "migraines-headaches",
    name: "Migraines & Headaches",
    mentionPhrase: "migraines or chronic headaches",
    relatedServices: ["spinal-decompression", "chiropractic"],
    symptoms: [
      "Throbbing pain, often on one side of the head",
      "Sensitivity to light, sound, or movement",
      "Headaches that start at the base of the skull or neck",
      "Nausea accompanying more severe episodes",
      "Tension or tightness across the shoulders and upper back",
    ],
    introLead:
      "Migraines and tension headaches are often treated as a purely neurological issue, but a significant number are linked to tension and misalignment in the neck and upper back. When the joints and muscles of the cervical spine are irritated, they can refer pain directly into the head.",
    faqBank: [
      {
        question: "Can neck problems really cause headaches?",
        answer:
          "Yes - these are called cervicogenic headaches, and they originate from irritation in the neck's joints, muscles, or nerves rather than from the brain itself.",
      },
      {
        question: "How does chiropractic care help with migraines?",
        answer:
          "Adjustments aimed at restoring normal motion in the neck and upper back can reduce the muscular tension and nerve irritation that often trigger headaches and migraines.",
      },
      {
        question: "How often do I need care to see improvement?",
        answer:
          "Many patients start with more frequent visits to calm an irritated pattern, then move to a lighter maintenance schedule once headache frequency drops.",
      },
      {
        question: "Are there lifestyle changes that help alongside treatment?",
        answer:
          "Posture at a desk, hydration, sleep position, and stress management all commonly factor into headache frequency - we'll go over specifics based on your history.",
      },
    ],
  },
  {
    slug: "tmj",
    name: "TMJ Disorder",
    mentionPhrase: "TMJ disorder",
    relatedServices: ["chiropractic", "back-pain-relief"],
    symptoms: [
      "Jaw pain or tenderness, especially near the ears",
      "Clicking or popping when opening or closing the mouth",
      "Difficulty chewing or a jaw that feels \"stuck\"",
      "Headaches or facial pain",
      "Neck and shoulder tension alongside jaw symptoms",
    ],
    introLead:
      "TMJ disorder involves pain and dysfunction in the jaw joint and surrounding muscles, and it frequently overlaps with neck tension and poor upper-body posture. Because the jaw, neck, and upper spine share nerve and muscle connections, problems in one area often show up as symptoms in another.",
    faqBank: [
      {
        question: "Why would a chiropractor treat jaw pain?",
        answer:
          "TMJ symptoms are closely linked to neck and upper-spine alignment. Addressing tension and joint restriction in that area can reduce the strain contributing to jaw pain.",
      },
      {
        question: "What typically causes TMJ disorder?",
        answer:
          "Common contributors include teeth grinding, jaw clenching from stress, poor posture, and prior injury to the head or neck.",
      },
      {
        question: "Is TMJ treatment painful?",
        answer:
          "No - care is gentle and focused on reducing muscle tension and improving joint mobility in the jaw, neck, and upper back.",
      },
      {
        question: "How long before TMJ symptoms improve?",
        answer:
          "Many patients notice reduced tension within a few visits, though full resolution depends on how long symptoms have been present and any contributing habits like clenching.",
      },
    ],
  },
  {
    slug: "carpal-tunnel",
    name: "Carpal Tunnel Syndrome",
    mentionPhrase: "carpal tunnel syndrome",
    relatedServices: ["chiropractic", "neuropathy"],
    symptoms: [
      "Numbness or tingling in the thumb, index, and middle fingers",
      "A weak grip or dropping objects unexpectedly",
      "Wrist pain that radiates into the forearm",
      "Symptoms that are worse at night or first thing in the morning",
      "A burning sensation in the hand",
    ],
    introLead:
      "Carpal tunnel syndrome develops when the median nerve is compressed as it passes through the wrist, often from repetitive hand motion, typing, or manual labor. Because that same nerve pathway can also be affected by nerve irritation higher up in the neck, a full-spine evaluation is often part of getting to the root cause.",
    faqBank: [
      {
        question: "Is carpal tunnel always caused by the wrist itself?",
        answer:
          "Not always. Nerve irritation in the neck can mimic or worsen carpal tunnel symptoms, which is why we look at the whole nerve pathway, not just the wrist.",
      },
      {
        question: "Can carpal tunnel be treated without surgery?",
        answer:
          "Many cases respond well to conservative care, including chiropractic treatment aimed at reducing nerve irritation along its full pathway from the neck to the wrist.",
      },
      {
        question: "What makes carpal tunnel worse?",
        answer:
          "Repetitive gripping, typing without wrist support, and sleeping with bent wrists are common aggravating factors.",
      },
      {
        question: "How is carpal tunnel diagnosed?",
        answer:
          "A physical exam checking grip strength, sensation, and specific nerve-tension tests usually points to the diagnosis; nerve-conduction studies may be used to confirm severity.",
      },
    ],
  },
  {
    slug: "fibromyalgia",
    name: "Fibromyalgia",
    mentionPhrase: "fibromyalgia",
    relatedServices: ["back-pain-relief", "chiropractic"],
    symptoms: [
      "Widespread muscle pain and tenderness",
      "Persistent fatigue, even after a full night's sleep",
      "\"Fibro fog\" - trouble concentrating or remembering",
      "Increased pain sensitivity in specific tender points",
      "Sleep that doesn't feel restorative",
    ],
    introLead:
      "Fibromyalgia is a chronic condition marked by widespread muscle pain, fatigue, and heightened pain sensitivity throughout the body. While there's no single cure, gentle, consistent chiropractic care can help reduce muscular tension and improve overall function for many patients.",
    faqBank: [
      {
        question: "Can chiropractic care help fibromyalgia symptoms?",
        answer:
          "Many fibromyalgia patients find that gentle chiropractic adjustments and soft-tissue work reduce muscle tension and improve mobility, even though it isn't a cure for the underlying condition.",
      },
      {
        question: "Is chiropractic treatment safe for fibromyalgia patients?",
        answer:
          "Yes, when tailored to the individual - we use a gentler approach and closely track your response to make sure treatment stays comfortable.",
      },
      {
        question: "Will I need ongoing care for fibromyalgia?",
        answer:
          "Fibromyalgia is a chronic condition, so many patients benefit from a periodic maintenance schedule to help manage flare-ups over time.",
      },
      {
        question: "What else helps alongside chiropractic care?",
        answer:
          "Sleep hygiene, gentle regular movement, and stress management commonly work alongside chiropractic care to help manage fibromyalgia symptoms.",
      },
    ],
  },
  {
    slug: "scoliosis",
    name: "Scoliosis",
    mentionPhrase: "scoliosis",
    relatedServices: ["chiropractic", "back-pain-relief"],
    symptoms: [
      "A visibly uneven waistline or shoulder height",
      "Back pain or stiffness, especially with activity",
      "One shoulder blade that appears more prominent",
      "Fatigue in the back muscles after standing for a while",
      "In some cases, changes in posture that others notice first",
    ],
    introLead:
      "Scoliosis is an abnormal sideways curvature of the spine that can develop during growth spurts or, in adults, from age-related degenerative changes. While chiropractic care doesn't reverse an existing curve, it can help manage the pain, muscle imbalance, and stiffness that often come with it.",
    faqBank: [
      {
        question: "Can chiropractic care straighten scoliosis?",
        answer:
          "Chiropractic care is not intended to reverse an existing spinal curve, but it can meaningfully reduce the pain, stiffness, and muscle imbalance that often accompany scoliosis.",
      },
      {
        question: "Is scoliosis treatment different for adults versus teens?",
        answer:
          "Yes - care is tailored to the individual's age, curve pattern, and symptoms, since the goals differ between a growing spine and an adult managing existing curvature.",
      },
      {
        question: "Does scoliosis always cause pain?",
        answer:
          "Not always, but many people with scoliosis eventually develop compensatory muscle tightness or joint irritation that does cause pain, especially with activity or prolonged standing.",
      },
      {
        question: "When should scoliosis be evaluated by a specialist?",
        answer:
          "Any noticeable curve progression, especially in a growing teenager, or new pain in an adult with known scoliosis, is worth a professional evaluation.",
      },
    ],
  },
  {
    slug: "tendonitis",
    name: "Tendonitis",
    mentionPhrase: "tendonitis",
    relatedServices: ["sports-injuries", "chiropractic"],
    symptoms: [
      "Localized pain and tenderness near a joint",
      "Swelling around the affected tendon",
      "Pain that worsens with repetitive motion",
      "Stiffness that's more noticeable in the morning",
      "A grating sensation when moving the joint",
    ],
    introLead:
      "Tendonitis is inflammation of a tendon, usually from repetitive overuse rather than a single injury, and it commonly shows up in the shoulder, elbow, wrist, or knee. Left unaddressed, ongoing irritation can turn into a more chronic, harder-to-treat problem.",
    faqBank: [
      {
        question: "What's the difference between tendonitis and a tendon tear?",
        answer:
          "Tendonitis is inflammation of the tendon from overuse, while a tear involves an actual disruption of tendon fibers. An exam helps distinguish between the two.",
      },
      {
        question: "Can tendonitis be treated without medication?",
        answer:
          "Yes - many cases respond well to targeted chiropractic and soft-tissue care aimed at reducing inflammation and correcting the movement patterns that caused the overuse in the first place.",
      },
      {
        question: "How long does tendonitis take to heal?",
        answer:
          "Mild cases often improve within a few weeks with the right care and activity modification; more chronic cases can take longer.",
      },
      {
        question: "Should I keep exercising with tendonitis?",
        answer:
          "Complete rest isn't always ideal - we'll help you modify activity to keep moving safely while the tendon calms down.",
      },
    ],
  },
  {
    slug: "frozen-shoulder",
    name: "Frozen Shoulder",
    mentionPhrase: "frozen shoulder",
    relatedServices: ["chiropractic", "sports-injuries"],
    symptoms: [
      "Progressive stiffness that limits shoulder movement",
      "Pain that's worse at night or when lying on the affected side",
      "Difficulty reaching overhead or behind the back",
      "A shoulder that feels \"stuck\" in certain positions",
      "Gradual worsening followed by a slow, plateaued recovery",
    ],
    introLead:
      "Frozen shoulder is a gradual tightening of the shoulder capsule that severely limits range of motion, often developing slowly over months. It typically progresses through freezing, frozen, and thawing phases, and targeted care can help shorten the painful middle stage.",
    faqBank: [
      {
        question: "What causes frozen shoulder?",
        answer:
          "The exact cause isn't always clear, but it's more common after a period of shoulder immobility, injury, or with certain other health conditions.",
      },
      {
        question: "Can chiropractic care help frozen shoulder?",
        answer:
          "Yes - gentle mobilization and targeted care can help restore motion and reduce pain during the frozen shoulder recovery process.",
      },
      {
        question: "How long does frozen shoulder typically last?",
        answer:
          "Without treatment, it can take one to three years to fully resolve. Consistent, targeted care often helps shorten that timeline.",
      },
      {
        question: "Is stretching helpful for frozen shoulder?",
        answer:
          "Yes, gentle and consistent stretching within a comfortable range is an important part of most frozen shoulder recovery plans.",
      },
    ],
  },
  {
    slug: "rotator-cuff-pain",
    name: "Rotator Cuff Pain",
    mentionPhrase: "rotator cuff pain",
    relatedServices: ["sports-injuries", "chiropractic"],
    symptoms: [
      "A dull ache deep in the shoulder",
      "Weakness when lifting or rotating the arm",
      "Pain that worsens when reaching overhead",
      "Difficulty sleeping on the affected shoulder",
      "A clicking or catching sensation with movement",
    ],
    introLead:
      "Rotator cuff pain comes from irritation, overuse, or partial injury of the group of muscles and tendons that stabilize the shoulder joint. It's common among people who repeat overhead motions at work or in sports, and it tends to worsen gradually if the underlying mechanics aren't addressed.",
    faqBank: [
      {
        question: "How do I know if it's my rotator cuff or something else?",
        answer:
          "Rotator cuff issues typically cause weakness and pain with specific arm movements, especially overhead reaching. A hands-on exam helps confirm the source of shoulder pain.",
      },
      {
        question: "Do I need an MRI for rotator cuff pain?",
        answer:
          "Not always - many cases are diagnosed and treated based on exam findings, with imaging reserved for cases that aren't responding as expected.",
      },
      {
        question: "Can chiropractic and rehab exercises fix a rotator cuff issue?",
        answer:
          "Many rotator cuff problems, especially strains and tendon irritation short of a full tear, respond well to a combination of chiropractic care and targeted strengthening.",
      },
      {
        question: "What activities should I modify with rotator cuff pain?",
        answer:
          "Overhead lifting and repetitive throwing or reaching motions are common aggravators - we'll help you adjust these safely while you heal.",
      },
    ],
  },
  {
    slug: "plantar-fasciitis",
    name: "Plantar Fasciitis",
    mentionPhrase: "plantar fasciitis",
    relatedServices: ["sports-injuries", "chiropractic"],
    symptoms: [
      "Sharp heel pain with the first steps in the morning",
      "Pain that eases with movement but returns after rest",
      "Tenderness along the bottom of the foot",
      "Increased discomfort after long periods of standing",
      "Stiffness in the arch of the foot",
    ],
    introLead:
      "Plantar fasciitis is inflammation of the thick band of tissue running along the bottom of the foot, and it's one of the most common causes of heel pain. It often develops from repetitive strain, unsupportive footwear, or biomechanical issues that start higher up the kinetic chain.",
    faqBank: [
      {
        question: "Why is plantar fasciitis pain worst in the morning?",
        answer:
          "The plantar fascia tightens overnight, so the first steps after rest stretch it suddenly, which is why morning pain is such a classic symptom.",
      },
      {
        question: "Can chiropractic care help plantar fasciitis?",
        answer:
          "Yes - addressing foot, ankle, and even hip or spine mechanics can relieve some of the strain contributing to plantar fasciitis, alongside targeted soft-tissue work.",
      },
      {
        question: "Do I need new shoes if I have plantar fasciitis?",
        answer:
          "Supportive footwear often helps, and we can advise on what to look for based on your specific foot mechanics.",
      },
      {
        question: "How long does plantar fasciitis take to resolve?",
        answer:
          "Many cases improve within several weeks of consistent care, though longstanding cases can take longer to fully calm down.",
      },
    ],
  },
  {
    slug: "runners-knee",
    name: "Runner's Knee",
    mentionPhrase: "runner's knee",
    relatedServices: ["sports-injuries", "chiropractic"],
    symptoms: [
      "A dull ache around or behind the kneecap",
      "Pain that worsens with running, squatting, or stairs",
      "A grinding or clicking sensation in the knee",
      "Swelling after activity",
      "Discomfort after sitting with a bent knee for a long time",
    ],
    introLead:
      "Runner's knee describes pain around the kneecap that's common among runners but also affects anyone who does repetitive squatting, jumping, or stair climbing. It's frequently linked to hip and ankle mechanics, not just the knee itself, which is why a full lower-body evaluation matters.",
    faqBank: [
      {
        question: "Is runner's knee only for runners?",
        answer:
          "No - despite the name, it affects cyclists, hikers, and anyone with repetitive knee-loading activity or underlying hip and ankle mechanical issues.",
      },
      {
        question: "Can chiropractic care help runner's knee?",
        answer:
          "Yes - addressing hip, ankle, and knee alignment together can relieve the abnormal loading pattern that commonly causes runner's knee.",
      },
      {
        question: "Should I stop running with runner's knee?",
        answer:
          "Reducing mileage or intensity temporarily is often part of the plan, but complete rest isn't always necessary - we'll tailor recommendations to your training goals.",
      },
      {
        question: "What causes runner's knee to develop?",
        answer:
          "Common contributors include weak hip stabilizers, tight IT bands, overtraining, and worn or unsupportive footwear.",
      },
    ],
  },
  {
    slug: "tennis-elbow",
    name: "Tennis Elbow",
    mentionPhrase: "tennis elbow",
    relatedServices: ["sports-injuries", "chiropractic"],
    symptoms: [
      "Pain on the outside of the elbow",
      "A weak grip or discomfort when shaking hands",
      "Pain that worsens with wrist extension or lifting",
      "Tenderness when pressing on the outer elbow",
      "Discomfort that radiates into the forearm",
    ],
    introLead:
      "Tennis elbow is overuse irritation of the tendons on the outside of the elbow, and despite the name, it's just as common among office workers, tradespeople, and anyone with repetitive gripping or wrist motion. Left unaddressed, the irritation tends to build gradually into a nagging, chronic issue.",
    faqBank: [
      {
        question: "Do I have to play tennis to get tennis elbow?",
        answer:
          "Not at all - any repetitive gripping, typing, or wrist-extension activity can cause it, which is why it's common among office and trade workers alike.",
      },
      {
        question: "Can tennis elbow be treated without a cortisone shot?",
        answer:
          "Many cases respond well to conservative care, including chiropractic treatment, soft-tissue work, and activity modification, without needing injections.",
      },
      {
        question: "How long does tennis elbow take to heal?",
        answer:
          "Mild cases can improve within a few weeks; more chronic cases that have built up over months often take longer and benefit from a structured plan.",
      },
      {
        question: "What movements should I avoid with tennis elbow?",
        answer:
          "Repetitive gripping, lifting with a bent wrist, and forceful wrist extension are common aggravators we'll help you modify.",
      },
    ],
  },
  {
    slug: "text-neck",
    name: "Text Neck",
    mentionPhrase: "\"text neck\"",
    relatedServices: ["chiropractic", "back-pain-relief"],
    symptoms: [
      "Neck and upper-back pain after phone or computer use",
      "A forward head posture that's noticeable in photos",
      "Tension headaches starting at the base of the skull",
      "Shoulder tightness that builds throughout the day",
      "Stiffness that's worse by the end of a workday",
    ],
    introLead:
      "\"Text neck\" is the everyday strain caused by hours spent looking down at a phone or laptop, which places dramatically more load on the neck than a neutral head position. Over time that repeated forward-head posture can lead to chronic neck pain, tension headaches, and stiff shoulders.",
    faqBank: [
      {
        question: "Is text neck a real medical condition?",
        answer:
          "It's a widely recognized pattern of neck strain from prolonged forward head posture - not a formal diagnosis on its own, but a very real and common contributor to neck pain.",
      },
      {
        question: "Can chiropractic care fix posture from text neck?",
        answer:
          "Chiropractic adjustments combined with posture-specific exercises can meaningfully improve the muscle imbalances and joint restriction caused by prolonged forward-head posture.",
      },
      {
        question: "How can I prevent text neck day to day?",
        answer:
          "Raising your phone or screen closer to eye level, taking frequent breaks, and strengthening the upper-back muscles all help reduce the strain.",
      },
      {
        question: "Can text neck cause headaches?",
        answer:
          "Yes - the added strain on the neck's joints and muscles from forward head posture is a common trigger for tension headaches.",
      },
    ],
  },
  {
    slug: "radiculopathy",
    name: "Radiculopathy",
    mentionPhrase: "radiculopathy",
    relatedServices: ["spinal-decompression", "back-pain-relief"],
    symptoms: [
      "Pain that follows a specific nerve pathway",
      "Numbness or tingling in a defined pattern",
      "Muscle weakness along the affected nerve root",
      "Symptoms that worsen with certain spinal positions",
      "Pain that radiates further from the spine than typical muscle soreness",
    ],
    introLead:
      "Radiculopathy is the medical term for pain, numbness, or weakness caused by irritation or compression of a spinal nerve root, and it can originate in the neck or lower back. Because the symptoms follow the specific nerve's pathway, they often show up far from the spine itself - in a hand, arm, foot, or leg.",
    faqBank: [
      {
        question: "What's the difference between radiculopathy and general back pain?",
        answer:
          "General back pain typically stays localized, while radiculopathy specifically involves a nerve root and produces symptoms that radiate along that nerve's pathway, often into an arm or leg.",
      },
      {
        question: "Can radiculopathy be treated without surgery?",
        answer:
          "Many cases respond well to conservative care, including spinal decompression and chiropractic treatment aimed at reducing pressure on the affected nerve root.",
      },
      {
        question: "How is radiculopathy diagnosed?",
        answer:
          "A detailed history, physical exam with specific nerve-tension tests, and imaging when needed all help pinpoint which nerve root is involved.",
      },
      {
        question: "Is radiculopathy the same as sciatica?",
        answer:
          "Sciatica is actually a specific, common form of radiculopathy affecting the sciatic nerve; radiculopathy is the broader term that can involve any spinal nerve root.",
      },
    ],
  },
  {
    slug: "facet-syndrome",
    name: "Facet Syndrome",
    mentionPhrase: "facet syndrome",
    relatedServices: ["spinal-decompression", "back-pain-relief"],
    symptoms: [
      "Localized back pain that worsens with extension or twisting",
      "Stiffness that's more noticeable in the morning",
      "Pain that eases somewhat with forward bending",
      "Discomfort that can radiate into the hip or shoulder area",
      "Muscle tightness surrounding the affected joints",
    ],
    introLead:
      "Facet syndrome refers to pain coming from the small stabilizing joints that run along the back of the spine, which can become irritated or arthritic over time. It's a common source of chronic back and neck pain that's often overlooked in favor of disc-focused explanations.",
    faqBank: [
      {
        question: "How is facet syndrome different from a disc problem?",
        answer:
          "Facet syndrome involves the small joints along the back of the spine, while disc problems involve the cushioning discs between vertebrae - the two can occur together, and an exam helps tell them apart.",
      },
      {
        question: "Can chiropractic adjustments help facet syndrome?",
        answer:
          "Yes - adjustments aimed at restoring normal motion to the facet joints are a core part of relieving the stiffness and pain associated with facet syndrome.",
      },
      {
        question: "What makes facet syndrome worse?",
        answer:
          "Extending or twisting the spine, such as arching the back or turning to look behind you, commonly aggravates facet-related pain.",
      },
      {
        question: "Is facet syndrome a form of arthritis?",
        answer:
          "It can be related to arthritic changes in the facet joints over time, though it can also occur from mechanical irritation without significant arthritis.",
      },
    ],
  },
  {
    slug: "poor-posture",
    name: "Poor Posture",
    mentionPhrase: "posture-related pain",
    relatedServices: ["chiropractic", "back-pain-relief"],
    symptoms: [
      "Rounded shoulders and a forward head position",
      "Chronic neck and upper-back tension",
      "Lower back fatigue after sitting for long periods",
      "Headaches that build throughout the workday",
      "Visible asymmetry in shoulder or hip height",
    ],
    introLead:
      "Poor posture - whether from long hours at a desk, driving, or looking down at a phone - gradually shifts how weight is distributed through the spine, straining muscles and joints that weren't designed to hold that position all day. Over time, this steady strain is a common root cause of chronic neck, shoulder, and back pain.",
    faqBank: [
      {
        question: "Can chiropractic care actually fix bad posture?",
        answer:
          "Chiropractic adjustments combined with targeted strengthening and stretching can meaningfully improve posture-related muscle imbalances and joint restriction over time.",
      },
      {
        question: "How long does it take to correct posture-related pain?",
        answer:
          "Many patients notice reduced tension within the first few visits, while fully retraining posture habits typically takes consistent effort over several weeks to months.",
      },
      {
        question: "What desk setup helps prevent posture-related pain?",
        answer:
          "Keeping your monitor near eye level, your feet flat on the floor, and taking movement breaks every 30–45 minutes all help reduce postural strain.",
      },
      {
        question: "Is poor posture linked to headaches?",
        answer:
          "Yes - the added strain that forward head posture places on the neck and upper back is a common contributor to tension headaches.",
      },
    ],
  },
  {
    slug: "numbness-hands-feet",
    name: "Numbness in Hands or Feet",
    mentionPhrase: "numbness in the hands or feet",
    relatedServices: ["neuropathy", "chiropractic"],
    symptoms: [
      "A tingling, \"pins and needles\" sensation",
      "Numbness that comes and goes or is constant",
      "Weakness or clumsiness in the affected hand or foot",
      "A burning sensation, especially at night",
      "Symptoms that follow a specific pattern along a nerve",
    ],
    introLead:
      "Numbness or tingling in the hands or feet often points to nerve irritation somewhere along the pathway from the spine outward, whether from a compressed nerve root in the neck or lower back, or peripheral nerve damage. Identifying exactly where that irritation starts is the key to effective, targeted treatment.",
    faqBank: [
      {
        question: "What causes numbness in the hands and feet?",
        answer:
          "Common causes include nerve compression in the neck or lower back, peripheral neuropathy, carpal or tarsal tunnel syndrome, and circulation issues - a thorough exam helps narrow it down.",
      },
      {
        question: "Can chiropractic care help numbness in the hands or feet?",
        answer:
          "When the numbness stems from spinal nerve irritation, chiropractic care aimed at relieving that pressure can meaningfully improve symptoms.",
      },
      {
        question: "When should numbness be treated as an emergency?",
        answer:
          "Sudden numbness on one side of the body, especially with slurred speech or facial drooping, needs immediate emergency care - that's different from the gradual nerve-related numbness we typically treat.",
      },
      {
        question: "Is numbness in the hands and feet always related to the spine?",
        answer:
          "Not always - but nerve irritation from the neck or lower back is one of the most common and treatable causes we see.",
      },
    ],
  },
  {
    slug: "work-injury",
    name: "Work Injury",
    mentionPhrase: "a work-related injury",
    relatedServices: ["back-pain-relief", "chiropractic"],
    symptoms: [
      "Back or neck pain following a lift, fall, or repetitive task",
      "Muscle strain or spasm after a physically demanding shift",
      "Joint pain that builds gradually from repetitive job tasks",
      "Reduced range of motion after an on-the-job incident",
      "Fatigue or soreness that doesn't resolve with rest",
    ],
    introLead:
      "Work injuries range from a single acute incident - a fall, an awkward lift, a vehicle collision on the job - to the slow build-up of repetitive strain from years of physically demanding tasks. Either way, prompt evaluation helps prevent a manageable strain from turning into a long-term problem.",
    faqBank: [
      {
        question: "Should I see a chiropractor for a work injury?",
        answer:
          "For many musculoskeletal work injuries - back strains, neck injuries, joint pain from repetitive tasks - chiropractic evaluation and care is an appropriate, non-invasive first step.",
      },
      {
        question: "Do you document injuries for workers' compensation claims?",
        answer:
          "We provide thorough documentation of your evaluation and treatment plan, which can support a workers' compensation claim - bring any paperwork from your employer to your visit.",
      },
      {
        question: "How soon after a work injury should I be evaluated?",
        answer:
          "As soon as possible. Early evaluation helps identify the extent of the injury and start appropriate care before compensatory movement patterns make things worse.",
      },
      {
        question: "Can repetitive strain from my job really cause lasting injury?",
        answer:
          "Yes - repetitive lifting, bending, or awkward postures can gradually cause the same kind of joint and muscle irritation as a single acute injury.",
      },
    ],
  },
  {
    slug: "slip-and-fall-injury",
    name: "Slip-and-Fall Injury",
    mentionPhrase: "a slip-and-fall injury",
    relatedServices: ["back-pain-relief", "chiropractic"],
    symptoms: [
      "Back or neck pain following a fall",
      "Bruising and soreness around the point of impact",
      "Stiffness that sets in over the following day or two",
      "Headaches after a fall involving the head or neck",
      "Joint pain in the wrist, hip, or knee from bracing during the fall",
    ],
    introLead:
      "A slip-and-fall injury can jolt the spine and joints even when there's no visible bruising, and symptoms sometimes don't fully appear until a day or two later as inflammation sets in. Getting evaluated soon after a fall - even a seemingly minor one - helps catch soft-tissue and spinal injuries early.",
    faqBank: [
      {
        question: "I feel fine after my fall - do I still need to get checked?",
        answer:
          "It's still worth an evaluation. Spinal and soft-tissue injuries from a fall often don't produce noticeable symptoms until inflammation builds over the following day or two.",
      },
      {
        question: "Can chiropractic care help after a slip-and-fall injury?",
        answer:
          "Yes - chiropractic evaluation and treatment is well suited to the back, neck, and joint strain that commonly results from a fall.",
      },
      {
        question: "What should I do immediately after a fall?",
        answer:
          "Rest, ice any obviously swollen areas, and arrange an evaluation soon after - especially if you hit your head, neck, or back.",
      },
      {
        question: "Will you document my slip-and-fall injury for a claim?",
        answer:
          "Yes, we provide clear documentation of your evaluation and treatment, which can support any related insurance or liability claim.",
      },
    ],
  },
  {
    slug: "pregnancy-related-back-pain",
    name: "Pregnancy-Related Back Pain",
    mentionPhrase: "pregnancy-related back pain",
    relatedServices: ["back-pain-relief", "chiropractic"],
    symptoms: [
      "Low back pain that builds as pregnancy progresses",
      "Pelvic or hip discomfort, especially with walking",
      "Sciatic-type pain radiating into the leg",
      "Stiffness after sitting or lying down for a while",
      "Pain that affects sleep positioning",
    ],
    introLead:
      "Pregnancy-related back pain develops as posture shifts, ligaments loosen, and added weight changes how load moves through the spine and pelvis. It's extremely common, but that doesn't mean it has to be simply endured - gentle, pregnancy-safe chiropractic care can meaningfully ease the discomfort.",
    faqBank: [
      {
        question: "Is chiropractic care safe during pregnancy?",
        answer:
          "Yes - gentle, pregnancy-safe techniques and positioning are used throughout pregnancy to relieve back and pelvic discomfort without added strain.",
      },
      {
        question: "Why does pregnancy cause so much back pain?",
        answer:
          "Hormonal changes loosen supporting ligaments, added weight shifts your center of gravity, and postural changes all combine to place extra strain on the low back and pelvis.",
      },
      {
        question: "When during pregnancy can I start chiropractic care?",
        answer:
          "Care can typically begin at any point during pregnancy - we'll adjust our approach and positioning based on your trimester and comfort.",
      },
      {
        question: "Can chiropractic care help with labor and delivery?",
        answer:
          "Many patients find that maintaining pelvic balance and reducing tension throughout pregnancy supports overall comfort, though we always coordinate with your OB or midwife on your specific care.",
      },
    ],
  },
];

const bySlug = new Map(PSEO_CONDITIONS.map((c) => [c.slug, c]));

export function getPseoCondition(slug: string): PseoCondition | undefined {
  return bySlug.get(slug);
}
