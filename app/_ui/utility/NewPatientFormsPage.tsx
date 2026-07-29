/**
 * <NewPatientFormsPage> — body content for `/new-patient-forms/`. Reproduces
 * the live intro copy and all 9 downloadable form links across the 4 live
 * groups verbatim (exact link text + exact hrefs). Several of these live
 * URLs currently redirect to the WordPress site's homepage (a dead-link
 * regression on the live site itself) — they are preserved as-is per the
 * "do not remove or rename any form" instruction rather than silently
 * fixed or omitted.
 */

import type { SVGProps } from "react";
import { Reveal, Stagger, StaggerItem } from "../motion/primitives";
import { UtilityHero } from "./UtilityHero";

type FormLink = { text: string; href: string };

const FORM_GROUPS: Array<{ title: string; body: string; links: FormLink[] }> = [
  {
    title: "New Patient Health History Form",
    body: "This form is required. All cash, major medical and Medicare patients must complete the questionnaire both sides, front and back.",
    links: [
      {
        text: "New Patient Health History Form",
        href: "https://rutherfordchiropractic.com/new-patient-health-history-form/",
      },
    ],
  },
  {
    title: "Workmans Compensation Forms",
    body: "This form is required. All cash, major medical and Medicare patients must complete the questionnaire both sides, front and back.",
    links: [
      { text: "Patient History Form", href: "https://rutherfordchiropractic.com/workmans-comp-form/" },
      {
        text: "Authorization Form",
        href: "https://rutherfordchiropractic.com/compensation-authorization-form/",
      },
      {
        text: "Questionnaire Form",
        href: "https://rutherfordchiropractic.com/compensation-questionnaire-form/",
      },
    ],
  },
  {
    title: "Personal Injury Forms",
    body: "Personal injury patients must complete all forms and explain if the injury is due to a motor vehicle or non-motor vehicle incident.",
    links: [
      { text: "Patient History Form", href: "https://rutherfordchiropractic.com/pi-patient-history-form-1/" },
      { text: "Verification Form", href: "https://rutherfordchiropractic.com/pi-personal-verification-form/" },
      { text: "Questionnaire Form", href: "https://rutherfordchiropractic.com/pi-questionnaire-form/" },
      {
        text: "Patient Records & Doctors Lien Form",
        href: "https://rutherfordchiropractic.com/pi-doctors-lien-form/",
      },
    ],
  },
  {
    title: "Member Wellness Registration Form",
    body: "You can fill out this form to register for access to the member wellness section of our website. You are also welcome to sign up for our monthly newsletter to keep up on current health issues and news and events in our office. You can print it out and bring it to our office. We are happy to make your experience with our clinic and website more connected and advantageous.",
    links: [
      {
        text: "Member Wellness Registration Form",
        href: "https://rutherfordchiropractic.com/member-wellness-registration-form/",
      },
    ],
  },
];

export function NewPatientFormsPage() {
  return (
    <main>
      <UtilityHero eyebrow="Get Ready For Your Visit" h1="New Patient Forms" />

      <section className="section-y bg-white">
        <div className="container-content">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">For A Streamlined First Visit</span>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-body)]">
              Rutherford Spine &amp; Wellness Center offers different types of patient form(s)
              online, so that they can be completed in the convenience of your own home or office.
              Download the necessary form(s), print it out, and fill in the required information.
              You can fax us the printed and completed form(s) or bring it with you to your
              appointment.
            </p>
          </Reveal>

          <Stagger as="ul" className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {FORM_GROUPS.map((group) => (
              <StaggerItem as="li" key={group.title}>
                <div className="hover-lift surface-card flex h-full flex-col bg-white p-6 lg:p-7">
                  <h3 className="text-lg font-bold text-[color:var(--color-brand-navy)]">
                    {group.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-body)]">
                    {group.body}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-black/5 pt-4">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-orange)]"
                        >
                          <DownloadIcon />
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </main>
  );
}

function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0"
      {...props}
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}
