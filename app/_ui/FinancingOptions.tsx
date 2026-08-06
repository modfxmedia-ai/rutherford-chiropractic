/**
 * <FinancingOptions> — compact card explaining the 3 payment paths the
 * clinic offers (in-house financing, HFA, CareCredit) plus the shared
 * "interest-free if paid within the term" note. Used verbatim on:
 *   - `/` (homepage, between DoctorSnippet and DetailedServices)
 *   - `/contact-us/` (left column stack)
 *   - `/financing/` (full-page treatment, larger variant)
 *
 * The `variant` prop scales padding/heading so the same content reads
 * appropriately in a compact sidebar vs. a full-width homepage section.
 */

import Link from "next/link";

type Variant = "compact" | "section" | "full";

const OPTIONS = [
  {
    name: "In-House Financing",
    description:
      "Flexible payment plans arranged directly with our Murfreesboro office — no third-party involved.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 21h18" />
        <path d="M5 21V10l7-5 7 5v11" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    name: "HFA",
    description:
      "Health Financial Assistance program with straightforward monthly terms designed for medical care.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 22s8-4.5 8-11.5V5l-8-3-8 3v5.5C4 17.5 12 22 12 22Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "CareCredit",
    description:
      "Nationally recognized healthcare credit card with easy monthly payments and quick online approval.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <path d="M7 15h4" />
      </svg>
    ),
  },
];

export function FinancingOptions({
  variant = "section",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <div className={`surface-card flex flex-col bg-white p-7 ${className}`}>
        <p className="eyebrow">Payment Options</p>
        <h3 className="mt-2 text-2xl font-bold text-[color:var(--color-brand-navy)]">
          Financing Available
        </h3>
        <p className="mt-2 text-sm text-[color:var(--color-body)]">
          Three flexible ways to pay — <strong>all interest&#8209;free</strong>{" "}
          when paid within the agreed term.
        </p>
        <ul className="mt-5 space-y-3">
          {OPTIONS.map((opt) => (
            <li key={opt.name} className="flex items-start gap-3">
              <span className="icon-badge mt-0.5 h-9 w-9 shrink-0">
                {opt.icon}
              </span>
              <div>
                <p className="text-sm font-bold text-[color:var(--color-brand-navy)]">
                  {opt.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href="/financing/"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand-blue)] hover:text-[color:var(--color-brand-orange)] transition-colors"
        >
          Learn more about financing →
        </Link>
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div
        className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
      >
        {OPTIONS.map((opt) => (
          <div
            key={opt.name}
            className="hover-lift surface-card flex flex-col bg-white p-7"
          >
            <span className="icon-badge h-12 w-12">{opt.icon}</span>
            <h3 className="mt-4 text-xl font-bold text-[color:var(--color-brand-navy)]">
              {opt.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-body)]">
              {opt.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // Default: section — used as a standalone homepage/about section.
  return (
    <section className={`section-y bg-white relative ${className}`}>
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <p className="eyebrow">Payment Options</p>
            <h2 className="h-section mt-3">
              Care Should Be <span className="accent-serif">Accessible</span>
            </h2>
            <p className="mt-5 text-[color:var(--color-body)] leading-relaxed">
              We offer three flexible financing options so cost never gets in
              the way of getting the care you need. Every plan is{" "}
              <strong>interest&#8209;free when paid within the agreed term.</strong>
            </p>
            <div className="mt-6">
              <Link href="/financing/" className="btn btn-primary">
                See Financing Details
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {OPTIONS.map((opt) => (
              <div
                key={opt.name}
                className="hover-lift surface-card flex flex-col bg-white p-5"
              >
                <span className="icon-badge h-10 w-10">{opt.icon}</span>
                <p className="mt-3 text-sm font-bold text-[color:var(--color-brand-navy)]">
                  {opt.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
