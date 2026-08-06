/**
 * <ReviewsSection> — homepage social-proof strip styled to visually match
 * a row of Google Business Profile reviews (colored G mark, 5 gold stars,
 * quote body, reviewer initial avatar, "Posted on Google" caption).
 *
 * Auto-scrolls horizontally as a seamless CSS `@keyframes` marquee
 * (`.reviews-marquee` in `globals.css`) — the track element renders the
 * review list TWICE back-to-back and translates 0 → -50% so it loops
 * without a visible seam. Pauses on hover so anyone reading a review can
 * finish it. Deliberately avoids `requestAnimationFrame`-driven
 * `scrollLeft` autoplay (see `conditions-carousel-gotchas.md` — that
 * approach fights CSS scroll-snap + `scroll-smooth` and freezes silently);
 * a pure CSS marquee sidesteps all of those pitfalls.
 *
 * 11 patient testimonials sourced from real Google reviews of Rutherford
 * Spine and Wellness Center — each preserved close to verbatim (minor
 * typo fixes and Google UI-cruft trimming only) and rendered with the
 * component's hard-coded 5-star rating.
 */

import { Reveal } from "../motion/primitives";

type Review = {
  name: string;
  initial: string;
  service: string;
  date: string;
  quote: string;
  /** Solid Tailwind bg color class for the initial-avatar circle so the
      row of cards has a small pop of variety instead of every avatar
      looking identical. */
  avatarColor: string;
};

const REVIEWS: Review[] = [
  {
    name: "Brenda Hathaway",
    initial: "B",
    service: "Rehabilitation",
    date: "4 months ago",
    quote:
      "Before I came to Rutherford Spine and Wellness Center I was in serious excruciating pain with my condition and just 2 days in, my condition is getting better already. Mr. Stewart and the ladies in the back are the best at what they do and I would recommend this place of business to anyone for services and rehabilitation. Keep up the excellent work. Thanks for ALL that you do to make everyone feel, do and be better.",
    avatarColor: "bg-[color:var(--color-brand-blue)]",
  },
  {
    name: "Deborah Newsom",
    initial: "D",
    service: "New Patient Care",
    date: "4 months ago",
    quote:
      "At consultation Dr. Stewart was very detailed in explaining x-ray findings & creating the care plan. The staff was friendly from the front desk & all through out the process.",
    avatarColor: "bg-[#EA4335]",
  },
  {
    name: "Belinda Carney",
    initial: "B",
    service: "Spinal Care",
    date: "7 months ago",
    quote:
      "Thank you for being the best I've had dealing with my spine. When I say that this is a wonderful place to go — the secretary, nurses and the doctor Mr. Stewart are all loving gifts from God. I pray God bless them all to continue with that blessing in the name of Jesus 🙏🏼🫶🏻💕 Amen!!!",
    avatarColor: "bg-[#34A853]",
  },
  {
    name: "Nancy Ferrell",
    initial: "N",
    service: "Chronic Pain Relief",
    date: "a year ago",
    quote:
      "The office staff was very nice and friendly and made you feel comfortable. Dr. Stewart was very friendly and professional, and so were his technicians!!! I was completely at ease during the whole experience. After I got home, I did my ice pack 20 minutes on and 40 minutes off and I am already feeling better, which is totally amazing because I've been in so much pain for 2 1/2 years without any help from others. If this continues to help me, I will be totally amazed by the whole experience. So for the first time, I'm optimistic!!! 🙏🏻😃",
    avatarColor: "bg-[color:var(--color-brand-orange)]",
  },
  {
    name: "Ross Jaramillo",
    initial: "R",
    service: "Chiropractic Care",
    date: "6 months ago",
    quote:
      "I really enjoyed my time and getting to know the staff. They were very professional, very clean and organized. Would definitely recommend visiting. I am an owner of a business and I pay attention to detail, and they clearly are a professional company.",
    avatarColor: "bg-[#FBBC05]",
  },
  {
    name: "Susan Van Blarcom-Young",
    initial: "S",
    service: "Back Pain Relief",
    date: "a year ago",
    quote:
      "I have been a patient of this clinic for many years after I had a lower back injury. By continuing my monthly adjustments, I no longer experience debilitating back episodes. The staff is friendly and accommodating to any schedule changes, and Dr. Stewart is wonderful and caring.",
    avatarColor: "bg-[color:var(--color-brand-blue)]",
  },
  {
    name: "Kathleen Atwood",
    initial: "K",
    service: "Chiropractic Care",
    date: "2 years ago",
    quote:
      "Dr. Stewart does everything he can to get his patients feeling better. He really cares and listens to what you have to say. The girls in the front office are very friendly, welcoming and efficient. Jennifer and Alexis do a great job and take good care of their patients in a fun and efficient manner. I would highly recommend this office to anyone in pain.",
    avatarColor: "bg-[#EA4335]",
  },
  {
    name: "Donald Craft",
    initial: "D",
    service: "Chiropractic Adjustments",
    date: "3 months ago",
    quote:
      "Dr. Stewart and staff always provide excellent care when I get adjusted!",
    avatarColor: "bg-[#34A853]",
  },
  {
    name: "Kaylen Hartman",
    initial: "K",
    service: "New Patient Care",
    date: "a year ago",
    quote:
      "Entire staff was kind, helpful and made my first experience wonderful. Mr. Stewart was very knowledgeable and compassionate through the entire process of what I need to do to have a full recovery. I will be a lifetime member!",
    avatarColor: "bg-[color:var(--color-brand-orange)]",
  },
  {
    name: "Danielle Campbell",
    initial: "D",
    service: "Spinal Decompression",
    date: "a year ago",
    quote:
      "Dr. Stewart and his team are wonderful!! I went from miserable pain 24/7 to hardly any pain at all. No surgery & no medication. Words can not explain the difference. He and his lovely staff are always so kind and helpful. 🧡 Truly a blessing for me to find them.",
    avatarColor: "bg-[#FBBC05]",
  },
  {
    name: "Kimberly",
    initial: "K",
    service: "Chiropractic Care",
    date: "4 months ago",
    quote:
      "Great! I love the experience! Very honest! Well worth the visit!",
    avatarColor: "bg-[color:var(--color-brand-blue)]",
  },
];

export function ReviewsSection() {
  // Duplicate the list so the marquee loop is seamless (translates 0 → -50%).
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section id="reviews" className="section-y bg-white relative overflow-hidden scroll-mt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-glow-blue" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-glow-orange" />
      </div>

      <div className="container-wide relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">Patient Stories</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-3">
                What Our{" "}
                <span className="accent-serif">Patients</span> Say
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 lg:justify-end">
              <div className="flex items-center gap-3">
                <GoogleGMark />
                <div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                    <span className="ml-2 text-sm font-bold text-[color:var(--color-brand-navy)]">
                      5.0
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-[color:var(--color-muted)]">
                    Based on real Google reviews
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee track — full-bleed so cards drift off the edges cleanly.
          The parent group class enables the hover-pause behavior. */}
      <div className="reviews-marquee-group mt-12 relative">
        {/* Edge fade masks so cards fade into the section background at
            both sides rather than getting hard-clipped by the viewport. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-24"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-24"
        />

        <div className="reviews-marquee flex w-max gap-5 pr-5">
          {doubled.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="surface-card flex w-[320px] shrink-0 flex-col bg-white p-6 sm:w-[360px] sm:p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GoogleGMark />
          <span className="text-sm font-semibold text-[color:var(--color-brand-navy)]">
            Google Review
          </span>
        </div>
        <span className="rounded-full bg-[color:var(--color-brand-orange)]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-brand-orange)]">
          {review.service}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
        <span className="ml-2 text-xs font-semibold text-[color:var(--color-muted)]">
          5.0
        </span>
      </div>

      <blockquote className="mt-4 text-sm leading-relaxed text-[color:var(--color-body)]">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <div className="mt-auto flex items-center gap-3 pt-6">
        <div
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${review.avatarColor}`}
        >
          {review.initial}
        </div>
        <div className="min-w-0">
          <p className="text-sm font-bold text-[color:var(--color-brand-navy)]">
            {review.name}
          </p>
          <p className="text-[11px] text-[color:var(--color-muted)]">
            Posted on Google &middot; {review.date}
          </p>
        </div>
      </div>
    </article>
  );
}

function GoogleGMark() {
  return (
    <svg width={20} height={20} viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19A23.936 23.936 0 0 0 0 24c0 3.87.93 7.55 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="#F5B301" aria-hidden>
      <path d="M12 2l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.77l-6.18 3.23L7 14.13l-5-4.87 6.91-1L12 2z" />
    </svg>
  );
}
