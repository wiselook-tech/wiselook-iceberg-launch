import { useCallback, useEffect, useRef, useState } from "react";

interface Competitor {
  id: string;
  label: string;
  /** 0-1, left to right: subjective → objective. */
  x: number;
  /** 0-1, bottom to top: low scale → high scale. */
  y: number;
  description: string;
  isWiselook?: boolean;
}

const competitors: Competitor[] = [
  {
    id: "traditional-consulting",
    label: "Traditional Consulting",
    x: 0.2,
    y: 0.3,
    description: "High human judgment, low throughput",
  },
  {
    id: "mcq-assessments",
    label: "MCQ Assessments",
    x: 0.3,
    y: 0.7,
    description: "Standardized questions, limited depth",
  },
  {
    id: "taxonomy-platforms",
    label: "Taxonomy Platforms",
    x: 0.6,
    y: 0.4,
    description: "Structured frameworks, moderate scale",
  },
  {
    id: "hr-suites",
    label: "HR Suites",
    x: 0.4,
    y: 0.6,
    description: "Comprehensive tools, mixed objectivity",
  },
  {
    id: "point-tools",
    label: "Point Tools",
    x: 0.5,
    y: 0.2,
    description: "Specialized solutions, limited integration",
  },
  {
    id: "wiselook",
    label: "Wiselook",
    x: 0.85,
    y: 0.85,
    description: "Objective evidence at scale",
    isWiselook: true,
  },
];

const svgWidth = 800;
const svgHeight = 600;
const margin = 80;
const chartWidth = svgWidth - 2 * margin;
const chartHeight = svgHeight - 2 * margin;

const getX = (x: number) => margin + x * chartWidth;
/** Y grows downwards in SVG, so the axis is flipped. */
const getY = (y: number) => margin + (1 - y) * chartHeight;

/**
 * Where each approach to assessment sits on objectivity vs. scalability.
 *
 * Accessibility: the SVG is labelled by its `<title>` and the sr-only paragraph
 * below spells out every position, so nothing here is sight-only. Markers are
 * focusable and carry their own labels, which is why the SVG is deliberately
 * *not* `role="img"` — that role prunes its descendants from the accessibility
 * tree, and tab stops that announce nothing are worse than no tab stops.
 */
const CompetitorQuadrant = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const clearTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback((competitorId: string) => {
    if (clearTimeoutRef.current) clearTimeout(clearTimeoutRef.current);
    setActiveItem(competitorId);
  }, []);

  // Small delay so moving between a marker and its neighbour doesn't flicker.
  const hide = useCallback(() => {
    clearTimeoutRef.current = setTimeout(() => setActiveItem(null), 100);
  }, []);

  useEffect(
    () => () => {
      if (clearTimeoutRef.current) clearTimeout(clearTimeoutRef.current);
    },
    [],
  );

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="rounded-xl bg-background p-8 shadow-card">
        <div className="mb-8 space-y-4 text-center">
          <h3 className="font-heading text-2xl font-bold text-heading md:text-3xl">Competitor landscape</h3>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground">
            Objective evidence, at scale — that's the gap we exist to close.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h4 className="mb-4 font-heading text-xl font-semibold text-heading">Why this matters</h4>
              <p className="leading-relaxed text-muted-foreground">
                Most tools either rely on subjective judgment or don't scale. We combine validated, objective evidence
                with AI so organizations can make fair decisions at speed.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-lg border border-border bg-background p-4">
              <p className="sr-only">
                Six approaches plotted against objectivity (horizontal) and scalability (vertical). Traditional
                consulting is the most subjective and among the least scalable — high human judgment, low throughput.
                MCQ assessments are subjective but scale — standardized questions, limited depth. Point tools sit
                mid-objectivity and lowest for scale — specialized solutions, limited integration. HR suites sit in the
                middle of both — comprehensive tools, mixed objectivity. Taxonomy platforms are more objective at
                moderate scale — structured frameworks. Wiselook sits highest on both axes — objective evidence at
                scale.
              </p>

              <svg
                width={svgWidth}
                height={svgHeight}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                aria-labelledby="competitor-quadrant-title"
                className="h-auto w-full max-w-4xl"
              >
                <title id="competitor-quadrant-title">
                  Assessment approaches plotted by objectivity and scalability
                </title>

                <defs>
                  <filter id="halo" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Quadrant tinting */}
                <rect x={margin} y={margin} width={chartWidth / 2} height={chartHeight / 2} fill="#f9fafb" opacity="0.3" />
                <rect
                  x={margin + chartWidth / 2}
                  y={margin}
                  width={chartWidth / 2}
                  height={chartHeight / 2}
                  fill="#f0f9ff"
                  opacity="0.2"
                />
                <rect
                  x={margin}
                  y={margin + chartHeight / 2}
                  width={chartWidth / 2}
                  height={chartHeight / 2}
                  fill="#fef3c7"
                  opacity="0.2"
                />
                <rect
                  x={margin + chartWidth / 2}
                  y={margin + chartHeight / 2}
                  width={chartWidth / 2}
                  height={chartHeight / 2}
                  fill="#ecfdf5"
                  opacity="0.2"
                />

                {/* Chart area border */}
                <rect
                  x={margin}
                  y={margin}
                  width={chartWidth}
                  height={chartHeight}
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                />

                {/* Center lines */}
                <line
                  x1={margin + chartWidth / 2}
                  y1={margin}
                  x2={margin + chartWidth / 2}
                  y2={margin + chartHeight}
                  stroke="#d1d5db"
                  strokeWidth="1"
                />
                <line
                  x1={margin}
                  y1={margin + chartHeight / 2}
                  x2={margin + chartWidth}
                  y2={margin + chartHeight / 2}
                  stroke="#d1d5db"
                  strokeWidth="1"
                />

                {competitors.map((competitor) => {
                  const x = getX(competitor.x);
                  const y = getY(competitor.y);
                  const isActive = activeItem === competitor.id;
                  const isWiselook = competitor.isWiselook;

                  return (
                    <g
                      key={competitor.id}
                      // role="img" belongs here, on the focusable marker, not on
                      // the SVG root: it gives the group a deterministic name and
                      // prunes the plotted shapes and duplicated text beneath it.
                      role="img"
                      tabIndex={0}
                      aria-label={`${competitor.label}: ${competitor.description}`}
                      onMouseEnter={() => show(competitor.id)}
                      onMouseLeave={hide}
                      onFocus={() => show(competitor.id)}
                      onBlur={hide}
                      className="cursor-pointer focus:outline-none"
                    >
                      {/* Halo effect for Wiselook. The marker uses the second brand
                          colour so "us" separates from the grey field by hue, not
                          just by size — the one spot on the chart that should pop. */}
                      {isWiselook && (
                        <circle
                          cx={x}
                          cy={y}
                          r="12"
                          fill="hsl(var(--brand-accent))"
                          opacity="0.25"
                          filter="url(#halo)"
                        />
                      )}

                      {/* Larger invisible hit/focus area */}
                      <circle cx={x} cy={y} r="20" fill="transparent" />

                      {/* Focus/hover ring — also the visible focus indicator */}
                      {isActive && (
                        <circle
                          cx={x}
                          cy={y}
                          r="16"
                          fill="none"
                          stroke="hsl(var(--ring))"
                          strokeWidth="2"
                          opacity="0.5"
                        />
                      )}

                      {isActive && !isWiselook && (
                        <circle cx={x} cy={y} r="6" fill="hsl(var(--muted-foreground))" opacity="0.3" />
                      )}

                      <circle
                        cx={x}
                        cy={y}
                        r={isWiselook ? "8" : "6"}
                        fill={isWiselook ? "hsl(var(--brand-accent))" : "hsl(var(--muted-foreground))"}
                        stroke={isWiselook ? "hsl(var(--heading))" : "#374151"}
                        strokeWidth={isWiselook ? "2" : "1"}
                        // Without fill-box the scale would pull the marker toward
                        // the SVG origin instead of growing it in place.
                        className={`origin-center [transform-box:fill-box] transition-transform duration-200 motion-reduce:transition-none ${
                          isActive ? "scale-110" : "scale-100"
                        }`}
                      />

                      <text
                        x={x}
                        y={y - 15}
                        textAnchor="middle"
                        // The label stays dark: #ff9966 as text would only reach
                        // ~2.1:1 on this surface. The marker carries the accent.
                        className={`text-xs transition-all duration-200 ${
                          isWiselook ? "fill-heading" : "fill-gray-700"
                        } ${isWiselook || isActive ? "font-semibold" : "font-medium"}`}
                        style={{ fontSize: isWiselook ? "13px" : "12px" }}
                      >
                        {competitor.label}
                      </text>
                    </g>
                  );
                })}

                {/* X axis */}
                <text
                  x={margin + chartWidth / 2}
                  y={svgHeight - 20}
                  textAnchor="middle"
                  className="fill-gray-700 text-sm font-medium"
                >
                  Objectivity
                </text>
                <text x={margin - 10} y={svgHeight - 20} textAnchor="start" className="fill-gray-500 text-xs">
                  Subjective
                </text>
                <text
                  x={margin + chartWidth + 10}
                  y={svgHeight - 20}
                  textAnchor="end"
                  className="fill-gray-500 text-xs"
                >
                  Objective
                </text>

                {/* Y axis */}
                <text
                  x={20}
                  y={margin + chartHeight / 2}
                  textAnchor="middle"
                  className="fill-gray-700 text-sm font-medium"
                  transform={`rotate(-90, 20, ${margin + chartHeight / 2})`}
                >
                  Scalability
                </text>
                <text
                  x={20}
                  y={margin + chartHeight + 10}
                  textAnchor="middle"
                  className="fill-gray-500 text-xs"
                  transform={`rotate(-90, 20, ${margin + chartHeight + 10})`}
                >
                  Low
                </text>
                <text
                  x={20}
                  y={margin - 10}
                  textAnchor="middle"
                  className="fill-gray-500 text-xs"
                  transform={`rotate(-90, 20, ${margin - 10})`}
                >
                  High
                </text>
              </svg>

              {activeItem && (
                <div className="absolute left-4 top-4 z-10 rounded-lg border border-border bg-background px-3 py-2 shadow-lg">
                  <p className="text-sm font-medium text-foreground">
                    {competitors.find((competitor) => competitor.id === activeItem)?.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitorQuadrant;
