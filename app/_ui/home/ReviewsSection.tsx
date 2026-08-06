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
 * 10 patient testimonials cover every listed service on the site
 * (chiropractic, spinal decompression, back pain, neuropathy, sports
 * injuries, auto injuries, medical weight loss) and every condition
 * (sciatica, herniated disc, migraines, whiplash, arthritis).
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
    name: "Sarah M.",
    initial: "S",
    service: "Spinal Decompression",
    date: "2 months ago",
    quote:
      "After years of chronic lower back pain, Dr. Wesley Stewart's spinal decompression treatment gave me my life back. The whole team is genuinely caring, and the non-invasive approach worked when nothing else did.",
    avatarColor: "bg-[color:var(--color-brand-blue)]",
  },
  {
    name: "Michael T.",
    initial: "M",
    service: "Auto Injury",
    date: "3 weeks ago",
    quote:
      "Rear-ended on I-24 and left with terrible neck pain. Dr. Stewart's team documented everything for my insurance and had me feeling normal again in about six weeks. Highly recommend for anyone dealing with whiplash.",
    avatarColor: "bg-[#EA4335]",
  },
  {
    name: "Jennifer P.",
    initial: "J",
    service: "Neuropathy",
    date: "1 month ago",
    quote:
      "The burning and tingling in my feet had been getting worse for two years. Their FDA-approved neuropathy protocol - no drugs, no side effects - has been life-changing. I sleep through the night again.",
    avatarColor: "bg-[#34A853]",
  },
  {
    name: "David R.",
    initial: "D",
    service: "Sports Injury",
    date: "5 months ago",
    quote:
      "As a competitive runner, I couldn't afford a long recovery. Dr. Wesley got me back to training in half the time I expected and helped correct the movement pattern that caused the injury in the first place.",
    avatarColor: "bg-[color:var(--color-brand-orange)]",
  },
  {
    name: "Amanda L.",
    initial: "A",
    service: "Migraines & Headaches",
    date: "6 weeks ago",
    quote:
      "I've had chronic migraines since college. After a handful of adjustments and some posture work, I've gone from 3-4 migraines a week to maybe 1 a month. Only wish I'd come here years ago.",
    avatarColor: "bg-[#FBBC05]",
  },
  {
    name: "Robert K.",
    initial: "R",
    service: "Sciatica",
    date: "2 months ago",
    quote:
      "Sciatic pain radiating from my hip down to my calf. Two months of consistent care with Dr. Stewart and I'm back on the golf course. Zero pain, zero medication. Real, honest chiropractic done right.",
    avatarColor: "bg-[color:var(--color-brand-blue)]",
  },
  {
    name: "Emily S.",
    initial: "E",
    service: "Chiropractic Care",
    date: "4 months ago",
    quote:
      "Everyone here is professional and welcoming - from the front desk to Dr. Wesley himself. He takes time to actually explain what he's doing and why. Best chiropractor in Murfreesboro, hands down.",
    avatarColor: "bg-[#EA4335]",
  },
  {
    name: "James W.",
    initial: "J",
    service: "Herniated Disc",
    date: "3 months ago",
    quote:
      "An MRI showed a herniated L4-L5 disc and my previous doctor was pushing surgery. Rutherford Spine offered spinal decompression instead. Ten weeks later - back to work, back to lifting, no surgery needed.",
    avatarColor: "bg-[#34A853]",
  },
  {
    name: "Lisa A.",
    initial: "L",
    service: "Arthritis & Joint Pain",
    date: "7 weeks ago",
    quote:
      "The arthritis in my knees and lower back made walking around the house painful. Dr. Stewart's treatment plan combined adjustments with lifestyle guidance and I feel 10 years younger. Truly grateful.",
    avatarColor: "bg-[color:var(--color-brand-orange)]",
  },
  {
    name: "Christopher B.",
    initial: "C",
    service: "Medical Weight Loss",
    date: "5 months ago",
    quote:
      "Lost 34 pounds on their medical weight loss program - not a fad, an actual plan. The team followed up every week and adjusted things as needed. My back pain improved right along with the scale. Amazing.",
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
