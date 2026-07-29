import type { SVGProps } from "react";
import { businessInfo } from "../nav";
import { MailIcon, MapPinIcon, PhoneIcon } from "../icons";
import { FloatOnHover, Reveal, Stagger, StaggerItem } from "../motion/primitives";
import { MagneticButton } from "../motion/MagneticButton";

/**
 * LocationMap — "Visit Our Clinic" section, the last informational stop
 * before the footer. Sits between the dark `NutritionistCta` CTA and the
 * dark `surface-footer`, so it's deliberately a light section (alternating
 * with its neighbors) rather than a third consecutive dark block.
 *
 * Glassmorphism is expressed via `glass-panel-light` (frosted white) over
 * soft brand-tinted glow blobs, matching the same visual language used
 * elsewhere on the site (Footer/NutritionistCta glows, Hero glass chips).
 *
 * Map embed uses the no-API-key `output=embed` Google Maps URL built from
 * the verified clinic address in `businessInfo` — no key/billing required.
 */

const MAP_QUERY = encodeURIComponent(
  `${businessInfo.address.line1}, ${businessInfo.address.line2}`
);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;

const CONTACT_ROWS: Array<{
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  label: string;
  value: React.ReactNode;
  href?: string;
  external?: boolean;
}> = [
  {
    icon: MapPinIcon,
    label: "Address",
    value: (
      <>
        {businessInfo.address.line1}
        <br />
        {businessInfo.address.line2}
      </>
    ),
    href: businessInfo.address.mapsUrl,
    external: true,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: businessInfo.phone,
    href: businessInfo.phoneHref,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: businessInfo.email,
    href: businessInfo.emailHref,
  },
  {
    icon: ClockIcon,
    label: "Hours",
    value: (
      <>
        Monday &ndash; Thursday: 8:00am &ndash; 6:00pm
        <br />
        Friday &ndash; Sunday: Closed
      </>
    ),
  },
];

const TRUST_BADGES = [
  { icon: StarIcon, label: "5.0 Rating", sub: "Murfreesboro families" },
  { icon: AwardIcon, label: "16+ Years", sub: "Serving the community" },
  { icon: ShieldIcon, label: "HIPAA Compliant", sub: "Secure & confidential" },
];

export function LocationMap() {
  return (
    <section
      id="location"
      className="section-y relative overflow-hidden bg-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-glow-blue"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-glow-orange"
      />

      <div className="container-wide relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left — copy, contact details, quick actions, trust badges */}
          <div>
            <Reveal>
              <p className="eyebrow">Find Us</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-section mt-3">
                Visit Our{" "}
                <span className="accent-serif">Clinic</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-[color:var(--color-body)]">
                Conveniently located in Murfreesboro, our clinic offers a
                calm, modern space to begin your recovery. Stop by, call
                ahead, or book online &mdash; our team is ready to help you
                feel your best.
              </p>
            </Reveal>

            <Stagger className="mt-8 grid gap-5 sm:grid-cols-2">
              {CONTACT_ROWS.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <div className="group/row flex min-w-0 items-start gap-3">
                    <span className="icon-badge mt-0.5 h-10 w-10 shrink-0 transition-transform duration-300 group-hover/row:scale-110">
                      <Icon width={17} height={17} />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--color-muted)]">
                        {label}
                      </dt>
                      <dd className="mt-1 break-words text-sm font-medium leading-snug text-[color:var(--color-brand-navy)]">
                        {value}
                      </dd>
                    </div>
                  </div>
                );
                return (
                  <StaggerItem key={label} className="min-w-0">
                    {href ? (
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="block rounded-xl transition-colors hover:text-brand-blue"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-3">
                <MagneticButton href={businessInfo.phoneHref} className="btn btn-primary">
                  Call Now
                </MagneticButton>
                <MagneticButton
                  href={businessInfo.address.mapsUrl}
                  external
                  className="btn btn-outline-orange"
                >
                  Get Directions
                </MagneticButton>
                <MagneticButton href="/contact-us/" className="btn btn-outline-navy">
                  Book Appointment
                </MagneticButton>
              </div>
            </Reveal>

            <Stagger className="mt-8 flex flex-wrap gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label, sub }) => (
                <StaggerItem key={label}>
                  <FloatOnHover>
                    <div className="surface-card hover-lift flex items-center gap-3 rounded-2xl px-4 py-3">
                      <span className="icon-badge h-9 w-9 shrink-0">
                        <Icon width={16} height={16} />
                      </span>
                      <div>
                        <p className="text-sm font-bold leading-tight text-[color:var(--color-brand-navy)]">
                          {label}
                        </p>
                        <p className="text-xs text-[color:var(--color-muted)]">
                          {sub}
                        </p>
                      </div>
                    </div>
                  </FloatOnHover>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right — map card */}
          <Reveal delay={0.1} className="relative pt-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-glow-blue opacity-80"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute -top-6 left-1/2 z-10 -translate-x-1/2 hero-anim-float"
            >
              <span className="relative flex h-14 w-14 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-brand-orange)]/40" />
                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-[color:var(--color-brand-orange)] text-white shadow-[var(--shadow-elevated)]">
                  <MapPinIcon width={22} height={22} />
                </span>
              </span>
            </div>

            <div className="glass-panel-light rounded-[2rem] p-3 shadow-[var(--shadow-elevated)] transition-shadow duration-300 hover:shadow-[0_30px_80px_-20px_rgba(0,75,153,0.35)] md:p-4">
              <div className="h-[360px] w-full overflow-hidden rounded-[1.5rem] sm:h-[420px] lg:h-[540px]">
                <iframe
                  src={MAP_EMBED_SRC}
                  title="Map showing the location of Rutherford Spine & Wellness Center"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
 * Small inline icons local to this section.
 * ------------------------------------------------------------------------- */

function iconBase({ size = 18, ...rest }: SVGProps<SVGSVGElement> & { size?: number }) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase(props)}>
      <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z" />
    </svg>
  );
}

function AwardIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase(props)}>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12.5-1.5 7 5-2.5 5 2.5-1.5-7" />
    </svg>
  );
}

function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase(props)}>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
