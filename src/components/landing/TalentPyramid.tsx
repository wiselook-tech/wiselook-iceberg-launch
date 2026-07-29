import { useState } from "react";

interface Tier {
  id: string;
  name: string;
  /** Always visible — the tier's one-line verdict. */
  summary: string;
  /** Revealed on hover / tap / Enter. */
  detail: string;
  width: string;
  rest: string;
  active: string;
  bodyTone: string;
}

const tiers: Tier[] = [
  {
    id: "execs",
    name: "Execs",
    summary: "Human skills get tested",
    detail: "Leadership level. Deep, expensive assessments — for a handful of people.",
    width: "w-1/2",
    rest: "bg-primary/85 text-primary-foreground",
    active: "bg-primary text-primary-foreground",
    bodyTone: "text-primary-foreground/80",
  },
  {
    id: "workforce",
    name: "Rest of the workforce",
    summary: "Human skills get debated",
    detail: "Rising talent. Potential gets argued over in calibration meetings, rarely measured.",
    width: "w-3/4",
    rest: "bg-secondary/80 text-secondary-foreground",
    active: "bg-secondary text-secondary-foreground",
    bodyTone: "text-secondary-foreground/70",
  },
  {
    id: "line",
    name: "Line workers",
    summary: "Human skills get ignored",
    detail: "Foundation of the workforce. Where potential begins — and where nobody looks.",
    width: "w-full",
    rest: "bg-muted text-foreground",
    // The widest, most-ignored tier is the one Wiselook exists to reach, so its
    // active state lands in the accent rather than another pale blue.
    active: "bg-brand-accent text-brand-accent-foreground",
    bodyTone: "text-brand-accent-foreground/80",
  },
];

const liftShadow = "shadow-[0_14px_30px_-12px_rgba(23,11,107,0.35)]";

/**
 * Pyramid of who gets assessed today. Every tier's name and verdict are always
 * visible; the extra line of context is what the interaction reveals, so nothing
 * is hover-only.
 *
 * Two independent sources of "expanded": `hovered` (mouse pointers only — a tap
 * must not open the tier and then have the click close it again) and `pinned`
 * (click / Enter / Space, which is how touch and keyboard get there). Deriving
 * `aria-expanded` from both keeps the announced state honest.
 *
 * The stack reserves the tallest tier's height so expanding never nudges the
 * rest of the page.
 */
const TalentPyramid = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);

  return (
    <div className="w-full max-w-md space-y-3">
      <p className="text-center font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Who gets assessed today
      </p>
      <div className="flex min-h-[15.5rem] flex-col items-center justify-center gap-2 sm:min-h-[17.5rem]">
        {tiers.map((tier) => {
          const expanded = pinned === tier.id || hovered === tier.id;

          return (
            <button
              key={tier.id}
              type="button"
              aria-expanded={expanded}
              aria-controls={`${tier.id}-detail`}
              onClick={() => setPinned((current) => (current === tier.id ? null : tier.id))}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setHovered(tier.id);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") setHovered((current) => (current === tier.id ? null : current));
              }}
              className={`flex flex-col items-center justify-center rounded-lg px-4 py-3 text-center transition-[transform,box-shadow,background-color] duration-300 ease-out focus:outline-none focus-visible:-translate-y-1 focus-visible:scale-[1.02] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 motion-reduce:!transform-none motion-reduce:!transition-none ${
                tier.width
              } ${expanded ? `-translate-y-1 scale-[1.02] ${tier.active} ${liftShadow}` : `${tier.rest} shadow-card`}`}
            >
              <span className="font-heading text-base font-semibold sm:text-lg">{tier.name}</span>
              <span className={`mt-1 text-xs sm:text-sm ${tier.bodyTone}`}>{tier.summary}</span>
              {/* `invisible` (not just max-h-0) so a collapsed detail leaves the
                  accessibility tree too — otherwise it would stay part of the
                  button's accessible name while `aria-expanded` says false.
                  `visibility` is special-cased in transitions, so it still
                  flips at the right end of the fade. */}
              <span
                id={`${tier.id}-detail`}
                className={`block overflow-hidden pt-1.5 text-xs transition-[max-height,opacity,visibility] duration-300 ease-out motion-reduce:transition-none sm:text-sm ${
                  tier.bodyTone
                } ${expanded ? "visible max-h-24 opacity-100" : "invisible max-h-0 opacity-0"}`}
              >
                {tier.detail}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TalentPyramid;
