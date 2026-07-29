/**
 * Primary navigation config for the site header.
 *
 * Every migrated `href` (Services, Medical Weight Loss, New Patients,
 * Financing, Contact Us) MUST exist in `content-map.json` — those slugs
 * mirror the live WordPress site 1:1 so search-engine equity is preserved.
 *
 * The "Conditions" dropdown is a brand-new taxonomy that does not exist on
 * the live origin; its routes are defined directly in `app/_lib/conditions.ts`
 * and rendered via `/{slug}/page.tsx` + `ConditionPageTemplate`.
 */

export type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: Array<{ label: string; href: string }> };

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Chiropractic", href: "/chiropractic/" },
      { label: "Spinal Decompression", href: "/spinal-decompression/" },
      { label: "Sports Injury", href: "/sports-injuries/" },
      { label: "Back Pain Relief", href: "/back-pain-relief/" },
      { label: "Neuropathy", href: "/neuropathy/" },
      { label: "Auto Injury", href: "/auto-injuries/" },
    ],
  },
  {
    label: "Conditions",
    children: [
      { label: "Sciatica", href: "/sciatica/" },
      { label: "Herniated & Bulging Disc", href: "/herniated-disc/" },
      { label: "Migraines & Headaches", href: "/migraines-headaches/" },
      { label: "Whiplash", href: "/whiplash/" },
      { label: "Arthritis & Joint Numbness", href: "/arthritis/" },
      { label: "Degenerative Disc Disease", href: "/degenerative-disc-disease/" },
      { label: "Joint Pain & Stiffness", href: "/joint-pain/" },
    ],
  },
  { label: "Medical Weight Loss", href: "/medical-weight-loss/" },
  {
    label: "New Patients",
    children: [
      { label: "New Patients", href: "/new-patients/" },
      { label: "New Patient Forms", href: "/new-patient-forms/" },
    ],
  },
  { label: "Financing", href: "/financing/" },
  {
    label: "Contact Us",
    children: [
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
];

/**
 * Real business contact info from the live site. Do NOT change these
 * without also updating any JSON-LD `LocalBusiness` schema entries.
 */
export const businessInfo = {
  phone: "615-217-0097",
  phoneHref: "tel:+16152170097",
  email: "Rutherfordclinicofchiropractic@yahoo.com",
  emailHref: "mailto:Rutherfordclinicofchiropractic@yahoo.com",
  facebookUrl: "https://www.facebook.com/rutherfordspineandwellness",
  address: {
    line1: "1139 NW Broad St., Suite 103",
    line2: "Murfreesboro, TN 37129",
    mapsUrl:
      "https://www.google.com/maps?q=1139+NW+Broad+St,+Suite+103,+Murfreesboro,+TN+37129",
  },
} as const;
