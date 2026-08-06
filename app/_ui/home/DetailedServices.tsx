"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, type SVGProps } from "react";
import { MagneticButton } from "../motion/MagneticButton";
import { Parallax, Reveal, Stagger, StaggerItem } from "../motion/primitives";

/**
 * DetailedServices — The long-form "detailed sections" block from the live
 * homepage. Order and copy match the live page verbatim:
 *   1. Chiropractic Care Murfreesboro TN
 *   2. Spinal Decompression Murfreesboro TN
 *   3. Neuropathy Murfreesboro TN
 *   4. Sports Injuries Murfreesboro TN
 *   5. Auto Injuries Murfreesboro TN
 *   6. Back Pain Relief Murfreesboro TN
 * Every symptom / condition bullet is copied 1:1 from the live source so
 * ranking signals are preserved.
 *
 * Presentation: a premium editorial layout rather than uniform stacked
 * cards — alternating image-left / floating-panel-text rhythm, a faint
 * numeral watermark per condition, subtle scroll parallax on imagery, and
 * a sticky scroll-spy pill nav (framer-motion `layoutId` sliding
 * indicator) so visitors always know which area of care they're reading.
 */

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    />
  );
}

/** Small per-service line icons — same visual language as the CareSlider
 * icon medallions above, so the two sections read as one connected system. */
const SERVICE_ICONS: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  chiropractic: (props) => (
    <Icon {...props}>
      <path d="M9 4v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V4" />
      <path d="M12 13v4a4 4 0 0 0 4 4h1" />
      <circle cx="17.5" cy="19.5" r="1.5" />
    </Icon>
  ),
  "spinal-decompression": (props) => (
    <Icon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M8 3v6M16 9v6M8 15v6" />
    </Icon>
  ),
  neuropathy: (props) => (
    <Icon {...props}>
      <path d="M3 12h3l2-6 4 12 2-6h7" />
    </Icon>
  ),
  "sports-injuries": (props) => (
    <Icon {...props}>
      <circle cx="12" cy="5" r="2" />
      <path d="m9 21 2-6-3-2 1-5 4 1 3 3-2 2 3 6" />
    </Icon>
  ),
  "auto-injuries": (props) => (
    <Icon {...props}>
      <path d="M3 17v-4l2-5h11l3 5.5V17" />
      <path d="M3 13h16" />
      <circle cx="7" cy="17" r="1.6" />
      <circle cx="17" cy="17" r="1.6" />
    </Icon>
  ),
  "back-pain-relief": (props) => (
    <Icon {...props}>
      <path d="M8 3c-1 3-2 5-2 8a6 6 0 0 0 6 6c1.5 0 2-1 3-1s1.5 1 3 1" />
      <path d="M13 3c1 4 3 6 3 9" />
    </Icon>
  ),
};

type DetailedService = {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  accent: string; // italic-serif accent word inside the title
  subtitle?: string;
  paragraphs: string[];
  listIntro?: string;
  listHeading?: string; // small heading above list (e.g. "Runner's Knee Treatment")
  listItems: string[];
  outro?: string;
  image: string;
  alt: string;
};

const SERVICES: DetailedService[] = [
  {
    slug: "chiropractic",
    href: "/chiropractic/",
    eyebrow: "Detailed Care",
    title: "Chiropractic Care Murfreesboro TN",
    accent: "Care",
    paragraphs: [
      "Rutherford Spine & Wellness Center provides the highest quality and compassionate chiropractic care in Murfreesboro, TN for our patients. From massage therapy and physical therapy to the latest pain management techniques and chiropractic treatments, our seasoned chiropractor, Dr. Wesley Stewart, and expert staff are ready to design a treatment plan that\u2019s right for you. Our goal is always to fully alleviate your back or neck pain, treat your whiplash or work place injury, or address your other healthcare issues, and ultimately get you back to the quality of life you deserve.",
      "Whether you are dealing with back pain or an injury on the court, get it under control with a chiropractic adjustment at Rutherford Spine & Wellness Center. Backed by 29 years of experience, our chiropractor can help you get better faster using techniques that are non-invasive and get you away from those medications that can have serious and even fatal side effects.",
      "Chiropractic Care can help with a number of conditions that you may not even think have to do with the neck and spine. Oftentimes, pain in other areas of your body are due to spine and neck injuries that need to be fixed in order to heal your pain. We provide extensive examinations, x-rays and consultations to ensure the proper treatment is applied for your unique situation.",
    ],
    listIntro: "Some of the symptoms and conditions we can assist with include:",
    listItems: [
      "Bulging discs and other spinal disc injuries",
      "Back pain, neck pain, and headaches",
      "Spine misalignment from work injuries or auto accidents",
      "Arthritis and numbness",
      "Ankle, knee, and hip pain",
      "Carpal tunnel syndrome",
      "And more",
    ],
    image: "/media/chiropractic-care-murfreesboro-tn.jpg",
    alt: "Chiropractic care in Murfreesboro, TN",
  },
  {
    slug: "spinal-decompression",
    href: "/spinal-decompression/",
    eyebrow: "Detailed Care",
    title: "Spinal Decompression Murfreesboro TN",
    accent: "Decompression",
    subtitle: "For Faster Healing of Your Condition",
    paragraphs: [
      "Rutherford Spine & Wellness Center provides the latest in spinal decompression in Murfreesboro, TN. Spinal decompression and manipulation relieves back pain in a safe and natural way through gentle stretching of the spine. Pressure is taken off of the spinal discs, allowing for greater shock absorption and the movement of oxygen for faster healing. Do you suffer from back pain? Get effective relief from this and related conditions with spinal decompression performed at Rutherford Spine & Wellness Center. With 29 years of experience, we are one of the area\u2019s leading providers of non-surgical decompression therapy and non-invasive pain relief.",
    ],
    listIntro: "Spinal decompression can alleviate:",
    listItems: [
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
    outro:
      "If you have chronic back or neck pain and are in need of relief, spinal decompression may be for you. Don\u2019t go through a painful back surgery with the high costs and long recovery periods. Spinal decompression can sometimes have you back to your old self again within two to three months. Visit our spinal decompression office in Murfreesboro, TN or fill out our online form to schedule an appointment.",
    image: "/media/decompression-therapy.jpg",
    alt: "Spinal decompression in Murfreesboro, TN",
  },
  {
    slug: "neuropathy",
    href: "/neuropathy/",
    eyebrow: "Detailed Care",
    title: "Neuropathy Murfreesboro TN",
    accent: "Neuropathy",
    subtitle: "Know the Warning Signs of Neuropathy",
    paragraphs: [
      "Although pain medications can relieve neuropathy pain temporarily, they may also produce undesirable side effects or no results. That\u2019s why Rutherford Spine & Wellness Center is offering opioid-free/drug-free alternative therapies for acute, and/or chronic neuropathy pain or circulatory disorders symptoms patients in Murfreesboro, TN. For your peace of mind, we use only FDA-approved neuropathy equipment and all of our treatments are non-invasive.",
      "Neuropathy pain typically appears in your hands and feet and is often accompanied by numbness or weakness. Although neuropathy is most common in the hands and feet, symptoms can show up in other areas of your body as well. Signs of neuropathy include:",
    ],
    listItems: [
      "Pain or burning in the hands or feet",
      "Difficulty sleeping as a result of leg or foot discomfort",
      "Extreme sensitivity to light and touch",
      "Leg cramping",
      "Muscle weakness",
      "Pain when walking",
      "Poor coordination",
      "Tingling or prickling sensations in the hands or feet",
    ],
    outro:
      "Most patients with neuropathy tend to feel unsteady on their feet, making the condition particularly dangerous. If you have a problem with balance caused by neuropathy, you could be prone to falls and accidents. It\u2019s for this reason that you should seek treatment as soon as possible!",
    image: "/media/neuropathy-murfreesboro-tn.jpg",
    alt: "Neuropathy care in Murfreesboro, TN",
  },
  {
    slug: "sports-injuries",
    href: "/sports-injuries/",
    eyebrow: "Detailed Care",
    title: "Sports Injuries Murfreesboro TN",
    accent: "Injuries",
    subtitle: "Supporting All Athletes With Preventative Care & More",
    paragraphs: [
      "No matter if you are a serious marathon runner or more of a casual weekend athlete, Rutherford Spine & Wellness Center in Murfreesboro, TN can prevent and care for your sports injuries.",
      "As an athlete, your injuries can become more serious over time when they are not treated properly. Whether your sports injuries are acute or chronic, our focused chiropractic techniques can help prevent degeneration and wear and tear on your joints.",
    ],
    listHeading: "Runner\u2019s Knee Treatment",
    listIntro:
      "Have you noticed an increase in knee soreness due to training, marathons, or running? You could be suffering from runner\u2019s knee. Symptoms of runner\u2019s knee include:",
    listItems: [
      "A feeling of weakness in the leg like you\u2019re about to fall over",
      "Audible cracking noises",
      "A strong ache around the knee",
      "Tenderness",
    ],
    outro:
      "Don\u2019t let runner\u2019s knee stop you from living life! Contact our office today to schedule a consultation about your treatment options.",
    image: "/media/sports-injury-detailed.webp",
    alt: "Sports injury care in Murfreesboro, TN",
  },
  {
    slug: "auto-injuries",
    href: "/auto-injuries/",
    eyebrow: "Detailed Care",
    title: "Auto Injuries Murfreesboro TN",
    accent: "Injuries",
    subtitle: "You Might Be Injured and Not Know It",
    paragraphs: [
      "A car accident can be over in mere seconds, but the pain caused by a related injury can last a lifetime if it\u2019s not treated properly. It\u2019s important to know that some accident injuries are hidden and might not be felt for months or even years. It\u2019s possible that you could feel nothing at all directly following an accident, yet still is injured. When you are seen at Rutherford Spine & Wellness Center, you will find out if there is anything to be concerned about, and if necessary, you will receive the appropriate treatment from a chiropractor with 29 years of experience.",
    ],
    listHeading: "Treating All Kinds of Auto Accident-Related Pain",
    listIntro:
      "The most effective way to manage your symptoms and support your body\u2019s natural healing process after a car accident is through chiropractic treatment. No matter if your car shows no visible damage or you don\u2019t feel any pain after the mishap, make sure you give our office a call. Our treatments can relieve:",
    listItems: [
      "Whiplash",
      "Neck pain",
      "Back pain",
      "Shoulder pain",
      "Fatigue",
      "Weakness in upper or lower limbs",
      "Headaches",
    ],
    outro:
      "To learn more or to schedule a consultation to discuss your auto accident injury or situation, please contact us today.",
    image: "/media/auto-injury-detailed.jpg",
    alt: "Auto injury pain relief in Murfreesboro, TN",
  },
  {
    slug: "back-pain-relief",
    href: "/back-pain-relief/",
    eyebrow: "Detailed Care",
    title: "Back Pain Relief Murfreesboro TN",
    accent: "Relief",
    subtitle: "Expect Dedicated Chiropractic Care",
    paragraphs: [
      "At Rutherford Spine & Wellness Center in Murfreesboro, TN, we understand how serious pain can negatively alter your life. Our chiropractor, Dr. Wesley Stewart, is dedicated to relieving patients of their pain in the most natural, non-invasive ways possible. It is our belief that no one deserves to live life in discomfort or with physical limitations, which is why we work hard to accurately diagnose and to set apart the source of pain, and then targeting the problem with dedicated chiropractic care.",
    ],
    listHeading: "Treating All Kinds of Pain Via Leading Techniques",
    listIntro:
      "We use some of the leading techniques to relieve you from significant pain. Let us help alleviate your:",
    listItems: [
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
    outro:
      "To learn more or to schedule a consultation to discuss your specific health situation, please contact us today.",
    image: "/media/back-pain-relief-detailed.jpg",
    alt: "Back pain relief experts in Murfreesboro, TN",
  },
];

function DetailedCard({ service, index }: { service: DetailedService; index: number }) {
  const flipped = index % 2 === 1;
  const ServiceIcon = SERVICE_ICONS[service.slug];
  const ordinal = String(index + 1).padStart(2, "0");

  return (
    <article
      id={service.slug}
      className="scroll-mt-40 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-10"
    >
      {/* Image column */}
      <Reveal className={flipped ? "lg:order-2" : ""}>
        <Parallax strength={22} className="relative">
          <div
            aria-hidden
            className={`absolute inset-0 rounded-2xl border-2 border-[color:var(--color-brand-blue)]/10 ${
              flipped ? "-translate-x-3 translate-y-3" : "translate-x-3 translate-y-3"
            }`}
          />
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-[var(--shadow-elevated)]">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-navy)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            {ServiceIcon && (
              <span className="glass-panel-light absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full text-[color:var(--color-brand-blue)] shadow-[var(--shadow-card)] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <ServiceIcon width={22} height={22} />
              </span>
            )}
          </div>
        </Parallax>
      </Reveal>

      {/* Copy column */}
      <div className={`relative ${flipped ? "lg:order-1" : ""}`}>
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 left-0 select-none font-serif text-[6rem] font-bold leading-none text-[color:var(--color-brand-blue)]/[0.06] sm:text-[8rem]"
        >
          {ordinal}
        </span>

        <div
          className={
            flipped
              ? "surface-tint-blue relative rounded-3xl p-6 sm:p-8 lg:-mr-6 lg:p-10"
              : "relative"
          }
        >
          <Reveal>
            <p className="eyebrow">{service.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-3">
              {service.title
                .split(new RegExp(`(${service.accent})`))
                .map((chunk, idx) =>
                  chunk === service.accent ? (
                    <span key={idx} className="accent-serif">
                      {chunk}
                    </span>
                  ) : (
                    <span key={idx}>{chunk}</span>
                  ),
                )}
            </h2>
          </Reveal>

          {service.subtitle && (
            <Reveal delay={0.08}>
              <p className="mt-3 text-lg font-semibold text-[color:var(--color-brand-blue)]">
                {service.subtitle}
              </p>
            </Reveal>
          )}

          {service.paragraphs.map((p, idx) => (
            <Reveal key={idx} delay={0.12 + idx * 0.05}>
              <p className="mt-5 text-[color:var(--color-body)] leading-relaxed">
                {p}
              </p>
            </Reveal>
          ))}

          {service.listHeading && (
            <Reveal delay={0.22}>
              <h3 className="mt-8 text-xl font-bold text-[color:var(--color-brand-navy)]">
                {service.listHeading}
              </h3>
            </Reveal>
          )}

          {service.listIntro && (
            <Reveal delay={0.24}>
              <p className="mt-4 text-[color:var(--color-body)] leading-relaxed">
                {service.listIntro}
              </p>
            </Reveal>
          )}

          <Stagger className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {service.listItems.map((item) => (
              <StaggerItem
                key={item}
                as="li"
                className="hover-lift flex items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-[var(--shadow-card)]"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[color:var(--color-brand-orange)]/10 text-[color:var(--color-brand-orange)]">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-[color:var(--color-brand-navy)] leading-snug">
                  {item}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          {service.outro && (
            <Reveal delay={0.1}>
              <p className="mt-6 text-[color:var(--color-body)] leading-relaxed">
                {service.outro}
              </p>
            </Reveal>
          )}

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="/contact-us/" className="btn btn-primary">
                Schedule Your Consultation
              </MagneticButton>
              <Link
                href={service.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-[color:var(--color-brand-navy)] transition-colors hover:text-[color:var(--color-brand-blue)]"
              >
                Learn more
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/** In-page quick-nav — a sticky scroll-spy pill bar that lets visitors
 * jump straight to an area of care and always shows which section they're
 * currently reading (IntersectionObserver + a framer-motion `layoutId`
 * pill that slides between tabs). */
function QuickNav() {
  const [active, setActive] = useState<string>(SERVICES[0].slug);

  useEffect(() => {
    const els = SERVICES.map((s) => document.getElementById(s.slug)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    // NOTE: `nav` itself must stay a plain, transform-free element for
    // `lg:sticky` to work — a `<Reveal>`/`motion.div` ANCESTOR leaves an
    // inline `transform` even after animating in, which (like ancestor
    // `overflow`) creates a new containing block and silently breaks
    // `position: sticky` on descendants. The fade-in lives on the inner
    // pill bar instead.
    //
    // `top` is pinned just below the Header's SCROLLED height (81px at
    // `lg`, utility bar collapsed) rather than its taller top-of-page
    // height — by the time this section is in view the user has always
    // scrolled well past the 24px threshold that shrinks the Header, so
    // using the taller value here left an ugly ~70px dead-space gap
    // between the Header and this pill bar.
    <nav aria-label="Jump to an area of care" className="lg:sticky lg:top-24 lg:z-30">
      <Reveal>
        <div className="glass-panel-light flex gap-1 overflow-x-auto rounded-full p-1.5 shadow-[var(--shadow-card)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s) => {
            const ServiceIcon = SERVICE_ICONS[s.slug];
            const isActive = active === s.slug;
            return (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-[color:var(--color-brand-navy)] hover:text-[color:var(--color-brand-blue)]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="detailed-services-active-pill"
                    className="absolute inset-0 rounded-full bg-[color:var(--color-brand-blue)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  {ServiceIcon && <ServiceIcon width={14} height={14} />}
                  {s.title.replace(" Murfreesboro TN", "")}
                </span>
              </a>
            );
          })}
        </div>
      </Reveal>
    </nav>
  );
}

export function DetailedServices() {
  return (
    <section className="section-y bg-[color:var(--color-surface-muted)]">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow">Areas of Care</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-section mt-3">
              Every Condition, <span className="accent-serif">One Trusted Clinic</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[color:var(--color-body)]">
              Six focused areas of care, each backed by 29 years of hands-on
              clinical experience in Murfreesboro.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-10">
          {/* NOTE: `QuickNav`'s sticky range is bounded by the height of
              THIS wrapper (its immediate parent), not by any sibling - so
              the nav and the card list must share one tall parent here,
              not live in two separate same-height wrapper divs. */}
          <QuickNav />
          <div className="mt-8 flex flex-col gap-20 lg:mt-10 lg:gap-28">
            {SERVICES.map((s, i) => (
              <DetailedCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
