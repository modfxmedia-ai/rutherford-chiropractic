import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "../motion/primitives";
import { businessInfo } from "../nav";

/**
 * NutritionistCta — Mirrors the "Nutritionist form" CTA that closes the
 * live homepage. The live page renders an inline form; we surface a
 * conversion-focused card that routes to /contact-us/ where the real
 * intake form lives.
 */

export function NutritionistCta() {
  return (
    <section className="section-y bg-[color:var(--color-brand-navy)] text-white relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 55% at 15% 20%, rgba(0,75,153,0.9) 0%, transparent 60%), radial-gradient(55% 60% at 90% 90%, rgba(252,143,0,0.35) 0%, transparent 65%)",
        }}
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <Reveal>
              <p className="eyebrow !text-[color:var(--color-brand-orange)]">
                Now Booking
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight text-white">
                Book Your Nutritionist{" "}
                <span className="accent-serif !text-[color:var(--color-brand-orange)]">
                  Consultation
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
                Take the next step toward a pain-free life. Reach out to schedule your chiropractic and wellness consultation with Dr. Wesley Stewart and our team in Murfreesboro, TN.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <Stagger className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-lg" as="ul">
                {[
                  "Personalized whole-person plan",
                  "Non-invasive, medication-free care",
                  "Locally owned, 16+ years of practice",
                  "Same-week appointments available",
                ].map((item) => (
                  <StaggerItem key={item} as="li" className="group flex items-start gap-3">
                    <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-[color:var(--color-brand-orange)] text-[color:var(--color-brand-navy)] text-[10px] font-black transition-transform duration-300 group-hover:scale-110">
                      ✓
                    </span>
                    <span className="text-sm text-white/90 leading-snug">
                      {item}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="glass-panel group rounded-3xl p-8 md:p-10 shadow-[var(--shadow-elevated)] transition-all duration-300 hover:border-white/30 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]">
              <p className="eyebrow !text-[color:var(--color-brand-orange)]">
                Contact the clinic
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Talk with our team
              </h3>

              <dl className="mt-6 space-y-4 text-white/90">
                <div className="group/row flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[color:var(--color-brand-orange)] transition-transform duration-300 group-hover/row:scale-110">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-white/60">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={businessInfo.phoneHref}
                        className="text-lg font-bold text-white hover:text-[color:var(--color-brand-orange)] transition-colors"
                      >
                        {businessInfo.phone}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="group/row flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[color:var(--color-brand-orange)] transition-transform duration-300 group-hover/row:scale-110">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-white/60">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={businessInfo.emailHref}
                        className="text-sm font-medium text-white hover:text-[color:var(--color-brand-orange)] transition-colors break-all"
                      >
                        {businessInfo.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="group/row flex items-start gap-3">
                  <span className="mt-1 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-[color:var(--color-brand-orange)] transition-transform duration-300 group-hover/row:scale-110">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-white/60">
                      Visit
                    </dt>
                    <dd className="mt-1 text-sm text-white/90 leading-snug">
                      {businessInfo.address.line1}
                      <br />
                      {businessInfo.address.line2}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3">
                <Link href="/contact-us/" className="btn btn-primary-on-dark btn-lg justify-center">
                  Schedule Your Consultation
                </Link>
                <a
                  href={businessInfo.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-sm font-semibold uppercase tracking-widest text-[color:var(--color-brand-orange)] hover:text-white transition-colors"
                >
                  Get directions →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
