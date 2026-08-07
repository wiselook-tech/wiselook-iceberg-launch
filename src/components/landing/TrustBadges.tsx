import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";
import { TRUST_CENTER_URL } from "@/lib/constants";

/**
 * Certificate marks for the frameworks tracked in the Wiselook Trust Center,
 * drawn in the brand palette instead of the auditors' stock art: the ISO
 * seals follow the classic laurel-wreath certification badge, GDPR follows
 * the EU twelve-star circle with the GDPR wordmark, and the EU AI Act mark —
 * a regulation with no official emblem — pairs the same star circle with an
 * "intelligence" spark. Navy (--heading) shapes, warm accent (--brand-accent)
 * details, and the site's heading font for the lettering.
 * The badges carry framework names only — no "certified" claims — and every
 * badge links to the Trust Center, which shows the live status of each one.
 */

const navy = "hsl(var(--heading))";
const warm = "hsl(var(--brand-accent))";

type IconProps = SVGProps<SVGSVGElement>;

/** Upright five-point star (r = 3), used for the EU rings and seal crowns. */
const EU_STAR =
  "M0 -3 L0.68 -0.93 L2.85 -0.93 L1.09 0.36 L1.76 2.43 L0 1.15 L-1.76 2.43 L-1.09 0.36 L-2.85 -0.93 L-0.68 -0.93 Z";

/** 12 stars, EU-flag style, all upright (R = 17 from center 24,24). */
const STAR_POINTS: Array<[number, number]> = [
  [24, 7],
  [32.5, 9.28],
  [38.72, 15.5],
  [41, 24],
  [38.72, 32.5],
  [32.5, 38.72],
  [24, 41],
  [15.5, 38.72],
  [9.28, 32.5],
  [7, 24],
  [9.28, 15.5],
  [15.5, 9.28],
];

/** Circle of 12 upright stars shared by the two EU-regulation marks. */
const StarRing = () => (
  <g fill={navy}>
    {STAR_POINTS.map(([x, y]) => (
      <path key={`${x}-${y}`} d={EU_STAR} transform={`translate(${x} ${y})`} />
    ))}
  </g>
);

/** Laurel-leaf positions along the lower arc of the ISO seals.
 *  SVG angles: 0° = right of the badge, 90° = bottom, 180° = left.
 *  Leaves sit just outside the stem arc and splay ~35° away from it,
 *  the way wreath leaves feather outward rather than beading the stem. */
const LAUREL_R = 18.6;
const laurelPoint = (deg: number): [number, number] => {
  const rad = (deg * Math.PI) / 180;
  return [24 + LAUREL_R * Math.cos(rad), 24 + LAUREL_R * Math.sin(rad)];
};
const LAUREL_LEAVES: Array<{ x: number; y: number; rot: number }> = [
  // Left branch, bottom → up (tangent is a + 90; −35° tilts tips outward).
  ...[100, 122, 144, 166].map((a) => {
    const [x, y] = laurelPoint(a);
    return { x, y, rot: a + 55 };
  }),
  // Right branch, mirrored.
  ...[80, 58, 36, 14].map((a) => {
    const [x, y] = laurelPoint(a);
    return { x, y, rot: a - 55 };
  }),
];

/** Classic certification-seal base: ring, laurel wreath, star crown, and the
 *  standard's designation lettered in the site's heading font. */
const IsoSeal = ({ number }: { number: string }) => (
  <>
    <circle cx={24} cy={24} r={14.5} fill="none" stroke={navy} strokeWidth={1.6} />
    {/* Laurel stems */}
    <path
      d="M20.96 41.23 A17.5 17.5 0 0 1 6.67 26.44"
      fill="none"
      stroke={navy}
      strokeWidth={1}
      strokeLinecap="round"
    />
    <path
      d="M27.04 41.23 A17.5 17.5 0 0 0 41.33 26.44"
      fill="none"
      stroke={navy}
      strokeWidth={1}
      strokeLinecap="round"
    />
    {/* Laurel leaves */}
    <g fill={navy}>
      {LAUREL_LEAVES.map(({ x, y, rot }) => (
        <ellipse
          key={`${x.toFixed(1)}-${y.toFixed(1)}`}
          rx={2.5}
          ry={1.05}
          transform={`translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${rot})`}
        />
      ))}
    </g>
    {/* Star crown */}
    <path d={EU_STAR} transform="translate(24 6.8)" fill={warm} stroke={navy} strokeWidth={0.6} />
    {/* Designation */}
    <text
      x={24}
      y={22}
      textAnchor="middle"
      className="font-heading font-bold"
      fontSize={7}
      letterSpacing={0.4}
      fill={navy}
    >
      ISO
    </text>
    <rect x={19.5} y={23.7} width={9} height={1.4} rx={0.7} fill={warm} />
    <text
      x={24}
      y={31.6}
      textAnchor="middle"
      className="font-heading font-bold"
      fontSize={7}
      letterSpacing={0.2}
      fill={navy}
    >
      {number}
    </text>
  </>
);

/** ISO/IEC 27001 — laurel certification seal, information security. */
const Iso27001Icon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
    <IsoSeal number="27001" />
  </svg>
);

/** ISO/IEC 42001 — laurel certification seal, AI management. */
const Iso42001Icon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
    <IsoSeal number="42001" />
  </svg>
);

/** GDPR — the EU twelve-star circle around the GDPR wordmark, with the
 *  site's signature warm underline beneath the lettering. */
const GdprIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
    <StarRing />
    <text
      x={24}
      y={26.6}
      textAnchor="middle"
      className="font-heading font-bold"
      fontSize={8}
      letterSpacing={0.2}
      fill={navy}
    >
      GDPR
    </text>
    <rect x={19.5} y={28.8} width={9} height={1.4} rx={0.7} fill={warm} />
  </svg>
);

/** EU AI Act — EU star circle around an AI spark. Drawn from scratch: the
 *  regulation has no official mark, so this pairs the GDPR badge's star ring
 *  with the "intelligence" spark instead of the wordmark. */
const EuAiActIcon = (props: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
    <StarRing />
    <path
      d="M24 15.5 C24.9 20.3 27.7 23.1 32.5 24 C27.7 24.9 24.9 27.7 24 32.5 C23.1 27.7 20.3 24.9 15.5 24 C20.3 23.1 23.1 20.3 24 15.5 Z"
      fill={navy}
    />
    <path
      d="M30.6 14.6 C30.96 16.52 32.08 17.64 34 18 C32.08 18.36 30.96 19.48 30.6 21.4 C30.24 19.48 29.12 18.36 27.2 18 C29.12 17.64 30.24 16.52 30.6 14.6 Z"
      fill={warm}
    />
  </svg>
);

interface Framework {
  name: string;
  descriptor: string;
  Icon: ComponentType<IconProps>;
}

const frameworks: Framework[] = [
  { name: "ISO 27001", descriptor: "Information Security", Icon: Iso27001Icon },
  { name: "ISO 42001", descriptor: "AI Management", Icon: Iso42001Icon },
  { name: "GDPR", descriptor: "Data Protection", Icon: GdprIcon },
  { name: "EU AI Act", descriptor: "Responsible AI", Icon: EuAiActIcon },
];

interface TrustBadgesProps {
  /** "sm" for the footer strip, "md" for the Security section. */
  size?: "sm" | "md";
  className?: string;
}

const TrustBadges = ({ size = "sm", className }: TrustBadgesProps) => (
  <ul className={cn("flex flex-wrap items-center justify-center", size === "md" ? "gap-4" : "gap-3", className)}>
    {frameworks.map(({ name, descriptor, Icon }) => (
      <li key={name}>
        <a
          href={TRUST_CENTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          title={`${name} · ${descriptor} — see status in the Wiselook Trust Center`}
          aria-label={`${name}, ${descriptor} — see status in the Wiselook Trust Center (opens in a new tab)`}
          className={cn(
            "group flex min-h-[44px] items-center rounded-xl border border-border bg-background text-left",
            "transition-all duration-200 hover:border-primary/40 hover:shadow-soft",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            size === "md" ? "gap-3 px-4 py-2.5 shadow-card" : "gap-2.5 px-3.5 py-2",
          )}
        >
          <Icon className={cn("flex-shrink-0", size === "md" ? "h-10 w-10" : "h-7 w-7")} />
          <span>
            <span
              className={cn(
                "block font-heading font-semibold leading-tight text-heading",
                size === "md" ? "text-sm" : "text-[13px]",
              )}
            >
              {name}
            </span>
            <span className={cn("block leading-tight text-muted-foreground", size === "md" ? "text-xs" : "text-[11px]")}>
              {descriptor}
            </span>
          </span>
        </a>
      </li>
    ))}
  </ul>
);

export default TrustBadges;
