"use client";

/**
 * <ContactPage> — body content for `/contact-us/`. Live page structure:
 * NAP block (phone/address/email) + hours, then "Fill Out The Form Below
 * To Schedule Your Consultation" heading above an embedded lead-capture
 * form. The live form IS a third-party iframe widget
 * (`api.leadconnectorhq.com/widget/form/iCpqftU99Vpw3Z0yzIlU` — GoHighLevel)
 * with these exact fields: First Name, Last Name, Email *, Phone *, "How
 * committed are you to fixing your pain TODAY?" (dropdown), an SMS-consent
 * checkbox, and a Submit button. Re-embedding the same live widget (rather
 * than reconstructing a fake form with no backend to submit to) guarantees
 * identical fields/labels and a real working submission.
 *
 * A Google Maps embed is added (none of this exact map existed as a
 * distinct element on the live contact page, but the site's global
 * `LocationMap` component already establishes this exact no-API-key
 * `output=embed` pattern from `businessInfo`, so it's reused here for
 * "embed a map" per the task).
 */

import type { SVGProps } from "react";
import { businessInfo } from "../nav";
import { MailIcon, MapPinIcon, PhoneIcon } from "../icons";
import { Reveal, Stagger, StaggerItem } from "../motion/primitives";
import { UtilityHero } from "./UtilityHero";

const GHL_FORM_SRC = "https://api.leadconnectorhq.com/widget/form/iCpqftU99Vpw3Z0yzIlU";

const MAP_QUERY = encodeURIComponent(
  `${businessInfo.address.line1}, ${businessInfo.address.line2}`
);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&z=15&output=embed`;

const NAP_ROWS: Array<{
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  label: string;
  value: React.ReactNode;
  href?: string;
  external?: boolean;
}> = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: businessInfo.phone,
    href: businessInfo.phoneHref,
  },
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
        Friday: Closed
      </>
    ),
  },
];

export function ContactPage() {
  return (
    <main>
      <UtilityHero
        eyebrow="Get In Touch"
        h1="Contact Us"
        subtitle="Have a question or ready to schedule your visit? Reach out any way that works for you — our Murfreesboro team is here to help."
      />

      <section className="section-y bg-white">
        <div className="container-content">
          <Stagger as="ul" className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {NAP_ROWS.map(({ icon: Icon, label, value, href, external }) => {
              const content = (
                <div className="hover-lift surface-card flex h-full items-start gap-3 bg-white p-5">
                  <span className="icon-badge mt-0.5 h-10 w-10 shrink-0">
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
                <StaggerItem key={label} as="li">
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="block h-full"
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
        </div>
      </section>

      <section className="section-y surface-muted">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <h2 className="h-section">Fill Out The Form Below To Schedule Your Consultation</h2>
              <div className="surface-card mt-6 overflow-hidden bg-white p-2">
                <iframe
                  src={GHL_FORM_SRC}
                  title="Website Lead Form"
                  style={{ width: "100%", height: "650px", border: "none" }}
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="h-section">Find Our Office</h2>
              <div className="glass-panel-light mt-6 rounded-[2rem] p-3 shadow-[var(--shadow-elevated)]">
                <div className="h-[420px] w-full overflow-hidden rounded-[1.5rem] lg:h-[578px]">
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
    </main>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
