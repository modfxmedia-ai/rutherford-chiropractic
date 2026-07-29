import type { ReactElement, SVGProps } from "react";

/**
 * Inline icon set for the "Conditions We Treat" carousel + dedicated pages.
 * Same visual language as `app/_ui/icons.tsx` (24x24 viewBox, stroke
 * `currentColor`, 1.75 stroke width) so condition icons feel consistent
 * with the rest of the site's iconography.
 */

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

function SciaticaIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3c0 2 2 2 2 4s-2 2-2 4 2 2 2 4-2 2-2 4" />
      <circle cx="9" cy="3" r="1.4" fill="currentColor" stroke="none" />
      <path d="M13 8c2.5 0 3.5 1.5 3.5 3.5S15 15 15 17s1 2 2.5 2" />
    </svg>
  );
}

function DiscIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <ellipse cx="12" cy="6" rx="7" ry="2.4" />
      <ellipse cx="12" cy="12" rx="7" ry="2.4" />
      <ellipse cx="12" cy="18" rx="7" ry="2.4" />
      <path d="M9.5 12c0 1.5 1 2.4 2.5 2.4s2.5-.9 2.5-2.4-1-2.4-2.5-2.4-2.5.9-2.5 2.4Z" />
    </svg>
  );
}

function MigraineIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 3.5a6 6 0 0 0-3 11.2c.6.4 1 1 1 1.8v1a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-1c0-.8.4-1.4 1-1.8A6 6 0 0 0 9 3.5Z" />
      <path d="M12 21v-1M9.5 3.6 8 8l3-1-1.5 4.5" />
    </svg>
  );
}

function WhiplashIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="5" r="2.2" />
      <path d="M9 7.2v3.3c0 1.8 1.4 2.6 2.6 3.6 1.3 1 1.9 2 1.9 3.4V20" />
      <path d="M5 12.5c1-.5 2.3-.4 3.2.4" />
      <path d="M15.5 16.5c1.6.3 2.7 1.3 3 2.8" />
    </svg>
  );
}

function ArthritisIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 21c-1-2-1-4 0-6l1-4" />
      <path d="M8 11 7 6a1.6 1.6 0 1 1 3-.6l.6 3" />
      <path d="M10.6 8.4 10 5a1.6 1.6 0 1 1 3-.5l.7 3.6" />
      <path d="M13.7 8.1 13.4 5.6a1.6 1.6 0 1 1 3.1-.4L17 9" />
      <path d="M17 9a1.6 1.6 0 0 1 3.1.5L20 14c.2 2.6-1 4.6-2.6 6l-1 1" />
    </svg>
  );
}

function DDDIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="6" y="3" width="12" height="3.2" rx="1.2" />
      <rect x="6" y="7.8" width="12" height="2.6" rx="1" opacity="0.85" />
      <rect x="6" y="12" width="12" height="2" rx="0.8" opacity="0.6" />
      <rect x="6" y="15.6" width="12" height="1.6" rx="0.6" opacity="0.4" />
      <rect x="6" y="18.6" width="12" height="1.4" rx="0.5" opacity="0.25" />
    </svg>
  );
}

function JointPainIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 18c2-3 2-6 0-9" />
      <path d="M18 6c-2 3-2 6 0 9" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M9.5 9.5 8 8M14.5 9.5 16 8M9.5 14.5 8 16M14.5 14.5 16 16" />
    </svg>
  );
}

const ICONS: Record<string, (props: IconProps) => ReactElement> = {
  sciatica: SciaticaIcon,
  "herniated-disc": DiscIcon,
  "migraines-headaches": MigraineIcon,
  whiplash: WhiplashIcon,
  arthritis: ArthritisIcon,
  "degenerative-disc-disease": DDDIcon,
  "joint-pain": JointPainIcon,
};

export function ConditionIcon({
  slug,
  ...props
}: IconProps & { slug: string }) {
  const Icon = ICONS[slug] ?? JointPainIcon;
  return <Icon {...props} />;
}
