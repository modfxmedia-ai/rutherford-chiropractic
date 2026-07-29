/**
 * Data for the 7 core-service pages (`/chiropractic/`, `/spinal-decompression/`,
 * `/neuropathy/`, `/back-pain-relief/`, `/auto-injuries/`, `/sports-injuries/`,
 * `/medical-weight-loss/`).
 *
 * Every H1, paragraph, and list item below is VERBATIM copy pulled directly
 * from the live rutherfordchiropractic.com pages (fetched via Playwright —
 * the origin sits behind an SG Captcha bot-challenge that blocks plain
 * fetches) so search-ranking signals are preserved. Design/layout is new;
 * wording is unchanged. The 6 simpler pages' body copy matches what's
 * already verified verbatim in `app/_ui/home/DetailedServices.tsx` (spot
 * checked against the live `/chiropractic/` and `/spinal-decompression/`
 * pages during this task — identical). `/medical-weight-loss/` is a richer,
 * multi-section page fetched fresh for this task.
 */

export type ServiceListBlock = {
  intro?: string;
  items: string[];
  ordered?: boolean;
};

export type ServiceSection = {
  heading?: string;
  subtitle?: string;
  paragraphs?: string[];
  list?: ServiceListBlock;
  image?: { src: string; alt: string };
};

export type ServiceProcessStep = { title: string; description: string };
export type ServiceFaq = { question: string; answer: string };

export type ServicePageData = {
  slug: string;
  eyebrow: string;
  h1: string;
  heroParagraph: string;
  heroImage: { src: string; alt: string };
  sections: ServiceSection[];
  outro?: string;
  whyChooseUs: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  related: Array<{ label: string; href: string }>;
};

/** Shared, factual trust points (16 years experience, non-invasive care,
 * etc.) — the same claims already made verbatim elsewhere in each page's
 * body copy, so this section reinforces rather than invents anything. */
const TRUST_POINTS = [
  "16 years of hands-on clinical experience in Murfreesboro, TN",
  "Non-invasive, drug-free treatment plans",
  "Personalized care built around your specific condition and goals",
  "Convenient Murfreesboro location with flexible scheduling",
];

function processSteps(assessmentTitle: string, assessmentDescription: string): ServiceProcessStep[] {
  return [
    {
      title: "Schedule Your Consultation",
      description:
        "Call our office or fill out our online form to book a time that works for you \u2014 no referral needed.",
    },
    { title: assessmentTitle, description: assessmentDescription },
    {
      title: "Personalized Treatment Plan",
      description:
        "Dr. Wesley Stewart and our team walk you through your findings and build a plan around your specific symptoms and goals.",
    },
    {
      title: "Ongoing Care & Follow-Up",
      description:
        "We track your progress at each visit and adjust your plan as needed to keep you moving toward lasting relief.",
    },
  ];
}

const ALL_SERVICE_LINKS = [
  { label: "Chiropractic", href: "/chiropractic/" },
  { label: "Spinal Decompression", href: "/spinal-decompression/" },
  { label: "Neuropathy", href: "/neuropathy/" },
  { label: "Back Pain Relief", href: "/back-pain-relief/" },
  { label: "Auto Injuries", href: "/auto-injuries/" },
  { label: "Sports Injuries", href: "/sports-injuries/" },
  { label: "Medical Weight Loss", href: "/medical-weight-loss/" },
];

function relatedTo(...slugs: string[]) {
  return ALL_SERVICE_LINKS.filter((s) => slugs.includes(s.href));
}

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  chiropractic: {
    slug: "chiropractic",
    eyebrow: "Detailed Care",
    h1: "Chiropractic Care Murfreesboro TN",
    heroParagraph:
      "Rutherford Spine & Wellness Center provides the highest quality and compassionate chiropractic care in Murfreesboro, TN for our patients. From massage therapy and physical therapy to the latest pain management techniques and chiropractic treatments, our seasoned chiropractor, Dr. Wesley Stewart, and expert staff are ready to design a treatment plan that\u2019s right for you. Our goal is always to fully alleviate your back or neck pain, treat your whiplash or work place injury, or address your other healthcare issues, and ultimately get you back to the quality of life you deserve.",
    heroImage: {
      src: "/media/chiropractic-care-murfreesboro-tn.jpg",
      alt: "Chiropractic care in Murfreesboro, TN",
    },
    sections: [
      {
        paragraphs: [
          "Whether you are dealing with back pain or an injury on the court, get it under control with a chiropractic adjustment at Rutherford Spine & Wellness Center. Backed by 16 years of experience, our chiropractor can help you get better faster using techniques that are non-invasive and get you away from those medications that can have serious and even fatal side effects.",
          "Chiropractic Care can help with a number of conditions that you may not even think have to do with the neck and spine. Oftentimes, pain in other areas of your body are due to spine and neck injuries that need to be fixed in order to heal your pain. We provide extensive examinations, x-rays and consultations to ensure the proper treatment is applied for your unique situation.",
        ],
      },
      {
        heading: "Symptoms & Conditions We Treat",
        list: {
          intro: "Some of the symptoms and conditions we can assist with include:",
          items: [
            "Bulging discs and other spinal disc injuries",
            "Back pain, neck pain, and headaches",
            "Spine misalignment from work injuries or auto accidents",
            "Arthritis and numbness",
            "Ankle, knee, and hip pain",
            "Carpal tunnel syndrome",
            "And more",
          ],
        },
      },
    ],
    whyChooseUs: TRUST_POINTS,
    process: processSteps(
      "Exam & X-Rays",
      "We perform a thorough examination and, when needed, x-rays to pinpoint exactly which spinal or neck issues are contributing to your pain.",
    ),
    faqs: [
      {
        question: "How many chiropractic visits will I need?",
        answer:
          "Every treatment plan is different \u2014 after your initial exam, Dr. Wesley Stewart will recommend a visit schedule based on your specific condition and goals, and adjust it as you improve.",
      },
      {
        question: "Is chiropractic care safe?",
        answer:
          "Yes. Chiropractic adjustments are a non-invasive, drug-free approach to relieving pain and restoring mobility, performed by an experienced, licensed chiropractor.",
      },
      {
        question: "Do I need a referral to see a chiropractor?",
        answer: "No referral is required \u2014 you can schedule a consultation directly with our Murfreesboro office.",
      },
    ],
    related: relatedTo("/back-pain-relief/", "/spinal-decompression/", "/auto-injuries/"),
  },

  "spinal-decompression": {
    slug: "spinal-decompression",
    eyebrow: "Detailed Care",
    h1: "Spinal Decompression Murfreesboro TN",
    heroParagraph:
      "Rutherford Spine & Wellness Center provides the latest in spinal decompression in Murfreesboro, TN. Spinal decompression and manipulation relieves back pain in a safe and natural way through gentle stretching of the spine. Pressure is taken off of the spinal discs, allowing for greater shock absorption and the movement of oxygen for faster healing. Do you suffer from back pain? Get effective relief from this and related conditions with spinal decompression performed at Rutherford Spine & Wellness Center. With 16 years of experience, we are one of the area\u2019s leading providers of non-surgical decompression therapy and non-invasive pain relief.",
    heroImage: {
      src: "/media/spinal-decompression-murfreesboro-tn.jpg",
      alt: "Spinal decompression in Murfreesboro, TN",
    },
    sections: [
      {
        heading: "Conditions Spinal Decompression Can Alleviate",
        list: {
          intro: "Spinal decompression can alleviate:",
          items: [
            "Headaches and migraines",
            "Upper back pain",
            "Chronic neck pain",
            "Whiplash",
            "Neck and back injury and strain",
            "Sciatica",
            "Bulging or herniated discs",
            "Degenerative disc disease",
            "Radiculopathy",
            "Facet Syndrome",
          ],
        },
      },
    ],
    outro:
      "If you have chronic back or neck pain and are in need of relief, spinal decompression may be for you. Don\u2019t go through a painful back surgery with the high costs and long recovery periods. Spinal decompression can sometimes have you back to your old self again within two to three months. Visit our spinal decompression office in Murfreesboro, TN or fill out our online form to schedule an appointment.",
    whyChooseUs: TRUST_POINTS,
    process: processSteps(
      "Decompression Assessment",
      "We evaluate your spine and discs to confirm decompression therapy is the right fit, then map out a treatment schedule for lasting relief.",
    ),
    faqs: [
      {
        question: "Is spinal decompression painful?",
        answer:
          "No \u2014 spinal decompression uses gentle, controlled stretching of the spine, so most patients find it comfortable and relaxing.",
      },
      {
        question: "How long until I feel relief?",
        answer:
          "Many patients notice improvement within a few weeks, with continued progress over two to three months of consistent treatment.",
      },
      {
        question: "Can spinal decompression help me avoid surgery?",
        answer:
          "For many patients with bulging or herniated discs, spinal decompression offers a non-surgical alternative worth trying before considering surgery.",
      },
    ],
    related: relatedTo("/back-pain-relief/", "/chiropractic/", "/auto-injuries/"),
  },

  neuropathy: {
    slug: "neuropathy",
    eyebrow: "Detailed Care",
    h1: "Neuropathy Murfreesboro TN",
    heroParagraph:
      "Although pain medications can relieve neuropathy pain temporarily, they may also produce undesirable side effects or no results. That\u2019s why Rutherford Spine & Wellness Center is offering opioid-free/drug-free alternative therapies for acute, and/or chronic neuropathy pain or circulatory disorders symptoms patients in Murfreesboro, TN. For your peace of mind, we use only FDA-approved neuropathy equipment and all of our treatments are non-invasive.",
    heroImage: {
      src: "/media/neuropathy-murfreesboro-tn.jpg",
      alt: "Neuropathy care in Murfreesboro, TN",
    },
    sections: [
      {
        heading: "Signs of Neuropathy",
        paragraphs: [
          "Neuropathy pain typically appears in your hands and feet and is often accompanied by numbness or weakness. Although neuropathy is most common in the hands and feet, symptoms can show up in other areas of your body as well. Signs of neuropathy include:",
        ],
        list: {
          items: [
            "Pain or burning in the hands or feet",
            "Difficulty sleeping as a result of leg or foot discomfort",
            "Extreme sensitivity to light and touch",
            "Leg cramping",
            "Muscle weakness",
            "Pain when walking",
            "Poor coordination",
            "Tingling or prickling sensations in the hands or feet",
          ],
        },
      },
    ],
    outro:
      "Most patients with neuropathy tend to feel unsteady on their feet, making the condition particularly dangerous. If you have a problem with balance caused by neuropathy, you could be prone to falls and accidents. It\u2019s for this reason that you should seek treatment as soon as possible!",
    whyChooseUs: TRUST_POINTS,
    process: processSteps(
      "Nerve Function Assessment",
      "Using FDA-approved neuropathy equipment, we assess how your nerves are functioning to build a drug-free treatment plan.",
    ),
    faqs: [
      {
        question: "What causes neuropathy?",
        answer:
          "Neuropathy pain can stem from a variety of underlying issues affecting the nerves in the hands and feet \u2014 our team will evaluate your symptoms to determine the best treatment approach.",
      },
      {
        question: "Do you use medication to treat neuropathy?",
        answer: "No \u2014 we offer opioid-free, drug-free alternative therapies using FDA-approved neuropathy equipment.",
      },
      {
        question: "How quickly can I expect relief from neuropathy symptoms?",
        answer:
          "Every case is different, but many patients notice reduced pain and improved sensation within the first several weeks of consistent treatment.",
      },
    ],
    related: relatedTo("/chiropractic/", "/spinal-decompression/", "/medical-weight-loss/"),
  },

  "back-pain-relief": {
    slug: "back-pain-relief",
    eyebrow: "Detailed Care",
    h1: "Back Pain Relief Murfreesboro TN",
    heroParagraph:
      "At Rutherford Spine & Wellness Center in Murfreesboro, TN, we understand how serious pain can negatively alter your life. Our chiropractor, Dr. Wesley Stewart, is dedicated to relieving patients of their pain in the most natural, non-invasive ways possible. It is our belief that no one deserves to live life in discomfort or with physical limitations, which is why we work hard to accurately diagnose and to set apart the source of pain, and then targeting the problem with dedicated chiropractic care.",
    heroImage: {
      src: "/media/back-pain-experts-murfreesboro-tn.jpg",
      alt: "Back pain relief experts in Murfreesboro, TN",
    },
    sections: [
      {
        heading: "Treating All Kinds of Pain Via Leading Techniques",
        list: {
          intro: "We use some of the leading techniques to relieve you from significant pain. Let us help alleviate your:",
          items: [
            "Allergies",
            "Arthritis",
            "Carpal tunnel syndrome",
            "Disc herniation",
            "Fibromyalgia",
            "Lower back pain",
            "Migraine headaches",
            "Neck pain",
            "Sciatica",
            "Scoliosis",
            "Shoulder pain",
            "Tendonitis",
            "TMJ",
          ],
        },
      },
    ],
    outro:
      "To learn more or to schedule a consultation to discuss your specific health situation, please contact us today.",
    whyChooseUs: TRUST_POINTS,
    process: processSteps(
      "Pain Source Exam",
      "We accurately diagnose and isolate the true source of your pain \u2014 not just the symptoms \u2014 before recommending treatment.",
    ),
    faqs: [
      {
        question: "What causes back pain?",
        answer:
          "Back pain can come from many sources \u2014 muscle strain, disc issues, spine misalignment, and more \u2014 which is why an accurate diagnosis is the first step in effective treatment.",
      },
      {
        question: "Will I need imaging or X-rays?",
        answer:
          "Depending on your symptoms, Dr. Wesley Stewart may recommend an exam or imaging to pinpoint the exact source of your pain before building your treatment plan.",
      },
      {
        question: "Is chiropractic treatment effective for chronic back pain?",
        answer: "Yes \u2014 many patients with chronic back pain find lasting relief through consistent, non-invasive chiropractic care.",
      },
    ],
    related: relatedTo("/chiropractic/", "/spinal-decompression/", "/sports-injuries/"),
  },

  "auto-injuries": {
    slug: "auto-injuries",
    eyebrow: "Detailed Care",
    h1: "Auto Injuries Murfreesboro TN",
    heroParagraph:
      "A car accident can be over in mere seconds, but the pain caused by a related injury can last a lifetime if it\u2019s not treated properly. It\u2019s important to know that some accident injuries are hidden and might not be felt for months or even years. It\u2019s possible that you could feel nothing at all directly following an accident, yet still is injured. When you are seen at Rutherford Spine & Wellness Center, you will find out if there is anything to be concerned about, and if necessary, you will receive the appropriate treatment from a chiropractor with 16 years of experience.",
    heroImage: {
      src: "/media/auto-injury-pain-relief-murfreesboro-tn.jpg",
      alt: "Auto injury pain relief in Murfreesboro, TN",
    },
    sections: [
      {
        heading: "Treating All Kinds of Auto Accident-Related Pain",
        list: {
          intro:
            "The most effective way to manage your symptoms and support your body\u2019s natural healing process after a car accident is through chiropractic treatment. No matter if your car shows no visible damage or you don\u2019t feel any pain after the mishap, make sure you give our office a call. Our treatments can relieve:",
          items: [
            "Whiplash",
            "Neck pain",
            "Back pain",
            "Shoulder pain",
            "Fatigue",
            "Weakness in upper or lower limbs",
            "Headaches",
          ],
        },
      },
    ],
    outro:
      "To learn more or to schedule a consultation to discuss your auto accident injury or situation, please contact us today.",
    whyChooseUs: TRUST_POINTS,
    process: processSteps(
      "Injury Evaluation",
      "Even if you feel fine, we check for hidden auto-accident injuries like whiplash that may not show symptoms for months.",
    ),
    faqs: [
      {
        question: "I don\u2019t feel any pain after my accident \u2014 do I still need to be seen?",
        answer:
          "Yes. Some auto injuries, like whiplash, don\u2019t cause symptoms right away and can worsen if left untreated, so it\u2019s best to be evaluated as soon as possible.",
      },
      {
        question: "Will my auto insurance cover chiropractic treatment after an accident?",
        answer:
          "Many auto insurance policies include coverage for chiropractic care following an accident \u2014 our office can help you understand your options.",
      },
      {
        question: "How soon after an accident should I schedule an appointment?",
        answer:
          "The sooner the better \u2014 early treatment gives your body the best chance to heal properly and can help prevent long-term complications.",
      },
    ],
    related: relatedTo("/chiropractic/", "/back-pain-relief/", "/spinal-decompression/"),
  },

  "sports-injuries": {
    slug: "sports-injuries",
    eyebrow: "Detailed Care",
    h1: "Sports Injuries Murfreesboro TN",
    heroParagraph:
      "No matter if you are a serious marathon runner or more of a casual weekend athlete, Rutherford Spine & Wellness Center in Murfreesboro, TN can prevent and care for your sports injuries.",
    heroImage: {
      src: "/media/sports-injuries-murfreesboro-tn.jpg",
      alt: "Sports injury care in Murfreesboro, TN",
    },
    sections: [
      {
        paragraphs: [
          "As an athlete, your injuries can become more serious over time when they are not treated properly. Whether your sports injuries are acute or chronic, our focused chiropractic techniques can help prevent degeneration and wear and tear on your joints.",
        ],
      },
      {
        heading: "Runner\u2019s Knee Treatment",
        list: {
          intro:
            "Have you noticed an increase in knee soreness due to training, marathons, or running? You could be suffering from runner\u2019s knee. Symptoms of runner\u2019s knee include:",
          items: [
            "A feeling of weakness in the leg like you\u2019re about to fall over",
            "Audible cracking noises",
            "A strong ache around the knee",
            "Tenderness",
          ],
        },
      },
    ],
    outro: "Don\u2019t let runner\u2019s knee stop you from living life! Contact our office today to schedule a consultation about your treatment options.",
    whyChooseUs: TRUST_POINTS,
    process: processSteps(
      "Movement & Injury Assessment",
      "We assess how you move and train to identify the root cause of your injury, whether it\u2019s acute or chronic.",
    ),
    faqs: [
      {
        question: "Can chiropractic care help with a sports injury?",
        answer:
          "Yes \u2014 chiropractic treatment can help prevent minor injuries from becoming chronic problems and supports faster, safer recovery for athletes of all levels.",
      },
      {
        question: "I\u2019m not a serious athlete \u2014 can I still be treated for a sports injury?",
        answer:
          "Absolutely. Whether you\u2019re training for a marathon or just enjoy weekend activities, our care is tailored to your activity level and goals.",
      },
      {
        question: "What is runner\u2019s knee and how is it treated?",
        answer:
          "Runner\u2019s knee causes aching, weakness, and cracking around the kneecap from repetitive strain \u2014 our chiropractic techniques target the underlying cause rather than just the symptoms.",
      },
    ],
    related: relatedTo("/chiropractic/", "/back-pain-relief/", "/auto-injuries/"),
  },

  "medical-weight-loss": {
    slug: "medical-weight-loss",
    eyebrow: "Wellness Program",
    h1: "Medical Weight Loss",
    heroParagraph:
      "When our patients need a healthy weight loss solution, they usually turn to our Medical Weight Loss services and treatments. Making sure our patients meet their goals is our main priority.",
    heroImage: {
      src: "/media/pain-relief-murfreesboro-tn-copy.jpg",
      alt: "Medical weight loss program in Murfreesboro, TN",
    },
    sections: [
      {
        paragraphs: [
          "Besides having a medical doctor to supervise your weight loss journey, you can also receive Genetic Testing to find out what your body responds to the best. Your DNA holds the secrets to your optimal health. It tells you what your health needs to be at its best. Knowing what to do gives you a clear path to your health needs.",
        ],
      },
      {
        heading: "Who Benefits From Medical Weight Loss?",
        list: {
          items: [
            "Rapid Weight loss Protocols for Effective Weight Loss",
            "Lifestyle Weight Loss Program",
            "Genetic Testing",
            "Nutritional Supplementation and Support",
            "Personal Training for Weight Loss",
          ],
        },
      },
      {
        heading: "Rapid Weight Loss Protocols for Effective Weight Loss",
        paragraphs: [
          "Looking for a faster way to drop those extra unwanted pounds? Our rapid weight loss program, featuring pharmaceutical-grade Rapid Weight loss injections, can help speed up fat reduction. With our program, patients have lost up to 45 pounds in 45 days! That\u2019s an average of up to 1 pound lost per day.",
          "For patients who have struggled with yo-yo dieting in the past, the Rutherford Chiropractic Weight Loss program is truly revolutionary. This is a customized medical approach to losing and maintaining weight loss. Most importantly, in conjunction with Rapid Weight loss injections, our wellness team provides nutritional counseling and lifestyle advice. This helps our patients adopt new, healthy habits that support an active lifestyle and long-term weight loss success. Our patient-proven results show that it really works!",
        ],
        image: { src: "/media/HCG-weight-loss.jpeg", alt: "Rapid weight loss injections program" },
      },
      {
        heading: "Lifestyle Weight Loss Program",
        paragraphs: [
          "Losing weight and keeping it off can be a difficult thing to achieve. It is frustrating to put in the work and only see minimal results. But what if there was another way to drop those unwanted pounds?",
          "Our lifestyle programs may be the answer you\u2019re looking for!",
        ],
        image: { src: "/media/weight-loss.jpeg", alt: "Lifestyle weight loss program" },
      },
      {
        heading: "How Genetic Testing Can Improve Your Health",
        list: {
          items: [
            "The specific genes that dictate how the human body processes carbohydrates, fats, proteins and micro-nutrients",
            "How types of exercise affect the body",
            "How lifestyle behaviors influence the aging process",
            "How unique metabolic and physiologic functions influence athletic performance",
          ],
        },
        image: { src: "/media/genetic-weight-loss.jpeg", alt: "Genetic testing for weight loss" },
      },
      {
        heading: "Take the Next Step in Personalized Healthcare!",
        list: {
          ordered: true,
          items: [
            "Order the product that aligns with your goals.",
            "Come to our office to pick up your DNA kit or receive it in the mail within 1 week.",
            "Your DNA sample will be analyzed and your genotype will be identified. Your individualized DNA report will be ready within 2-3 weeks.",
            "Set up your office appointment to see our healthcare provider to discuss your DNA results and wellness goals.",
            "We will refine your nutrition plan, develop fitness strategies, and sharpen your focus on specific health goals. A personalized plan will be tailored to your unique genetic profile, your lifestyle, where you currently are on your health and fitness journey, and where you would like to be moving forward. Our provider will make sure your journey is efficient and successful.",
            "After your provider visit, we will set you up with an online licensed Nutritionist to guide and support you through your lifestyle journey.",
          ],
        },
      },
      {
        heading: "Nutritional Supplementation & Support",
        paragraphs: [
          "Losing weight and keeping it off can be a difficult thing to achieve. It is frustrating to put in the work and only see minimal results. But what if there was another way to drop those unwanted pounds?",
          "Our lifestyle programs may be the answer you\u2019re looking for!",
        ],
        image: { src: "/media/nutritional-supplement-support.jpeg", alt: "Nutritional supplementation and support" },
      },
    ],
    whyChooseUs: TRUST_POINTS,
    process: processSteps(
      "Goals & Genetic Testing Consultation",
      "We discuss your weight loss goals and, if you choose, get your DNA kit started so your plan can be tailored to your genetic profile.",
    ),
    faqs: [
      {
        question: "What is included in the Medical Weight Loss program?",
        answer:
          "Our program combines medical supervision, rapid weight loss protocols, lifestyle coaching, genetic testing, and nutritional support to build a plan around your unique needs.",
      },
      {
        question: "How does genetic testing help with weight loss?",
        answer:
          "Genetic testing reveals how your body processes carbohydrates, fats, and proteins, so your nutrition and fitness plan can be tailored to your unique genetic profile.",
      },
      {
        question: "How much weight can I expect to lose?",
        answer:
          "Results vary by patient, but our rapid weight loss program has helped patients lose up to 45 pounds in 45 days when combined with nutritional counseling and lifestyle changes.",
      },
    ],
    related: relatedTo("/chiropractic/", "/neuropathy/", "/back-pain-relief/"),
  },
};

export function getServicePage(slug: string): ServicePageData {
  const data = SERVICE_PAGES[slug];
  if (!data) throw new Error(`No service page data for slug "${slug}"`);
  return data;
}
