import type { SVGProps } from "react";

/**
 * Inline icon set for the 7 core-service pages' hero badges. Same 24x24 /
 * `currentColor` / 1.75 stroke visual language as `app/_ui/conditions/icons.tsx`
 * and `app/_ui/icons.tsx`. The first 6 paths mirror the medallions already
 * used in `app/_ui/home/DetailedServices.tsx` so a visitor sees the same
 * icon for "Chiropractic" on the homepage and on `/chiropractic/`.
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

function ChiropracticIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 4v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V4" />
      <path d="M12 13v4a4 4 0 0 0 4 4h1" />
      <circle cx="17.5" cy="19.5" r="1.5" />
    </svg>
  );
}

function SpinalDecompressionIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M8 3v6M16 9v6M8 15v6" />
    </svg>
  );
}

function NeuropathyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 12h3l2-6 4 12 2-6h7" />
    </svg>
  );
}

function BackPainReliefIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M8 3c-1 3-2 5-2 8a6 6 0 0 0 6 6c1.5 0 2-1 3-1s1.5 1 3 1" />
      <path d="M13 3c1 4 3 6 3 9" />
    </svg>
  );
}

function AutoInjuriesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 17v-4l2-5h11l3 5.5V17" />
      <path d="M3 13h16" />
      <circle cx="7" cy="17" r="1.6" />
      <circle cx="17" cy="17" r="1.6" />
    </svg>
  );
}

function SportsInjuriesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="5" r="2" />
      <path d="m9 21 2-6-3-2 1-5 4 1 3 3-2 2 3 6" />
    </svg>
  );
}

const SERVICE_ICONS: Record<string, (props: IconProps) => React.JSX.Element> = {
  chiropractic: ChiropracticIcon,
  "spinal-decompression": SpinalDecompressionIcon,
  neuropathy: NeuropathyIcon,
  "back-pain-relief": BackPainReliefIcon,
  "auto-injuries": AutoInjuriesIcon,
  "sports-injuries": SportsInjuriesIcon,
};

export function ServiceIcon({ slug, ...props }: { slug: string } & IconProps) {
  const IconComp = SERVICE_ICONS[slug];
  if (!IconComp) return null;
  return <IconComp {...props} />;
}
