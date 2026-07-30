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

/** Shared "always one click away" booking link appended to every dropdown
 * below (Services, Conditions, New Patients, Contact Us) so the booking
 * action never requires leaving the nav item a user is already browsing. */
const BOOK_APPOINTMENT = { label: "Book Appointment", href: "/contact-us/" };

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
      BOOK_APPOINTMENT,
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
      BOOK_APPOINTMENT,
    ],
  },
  { label: "Medical Weight Loss", href: "/medical-weight-loss/" },
  {
    label: "New Patients",
    children: [
      { label: "New Patients", href: "/new-patients/" },
      { label: "New Patient Forms", href: "/new-patient-forms/" },
      BOOK_APPOINTMENT,
    ],
  },
  { label: "Financing", href: "/financing/" },
  {
    label: "Contact Us",
    children: [
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Blog", href: "/blog/" },
      BOOK_APPOINTMENT,
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
    /** Universal Google Maps "directions" deep link (opens turn-by-turn
     * directions from the user's current location in the Google Maps app
     * on mobile, or maps.google.com on desktop) — distinct from `mapsUrl`
     * above, which just centers the map on a location search. Use this one
     * specifically for any "Get Directions" button. */
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=1139+NW+Broad+St,+Suite+103,+Murfreesboro,+TN+37129",
  },
} as const;
