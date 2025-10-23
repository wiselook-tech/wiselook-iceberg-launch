import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { motion } from "motion/react";
import React, { useState } from "react";

interface CompetitorData {
  id: string;
  label: string;
  x: number; // 0-1 normalized position
  y: number; // 0-1 normalized position
  description: string;
  isWiselook?: boolean;
}

const competitors: CompetitorData[] = [
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

const CompetitorQuadrant: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const svgWidth = 800;
  const svgHeight = 600;
  const margin = 80;
  const chartWidth = svgWidth - 2 * margin;
  const chartHeight = svgHeight - 2 * margin;

  const getX = (x: number) => margin + x * chartWidth;
  const getY = (y: number) => margin + (1 - y) * chartHeight; // Flip Y axis

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center space-y-6 mb-12">
          <Title text="Why Us?" />
          <Subtitle text="Because we are born to provide objective evidence at scale" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Context */}
          <div className="space-y-6">
            <div>
              <motion.h4
                className="relative font-heading font-semibold text-2xl text-foreground mb-4"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Why this matters
              </motion.h4>
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Most tools either rely on subjective judgement or don't scale.
                We combine validated, objective evidence with AI so
                organizations can make fair decisions at speed.
              </motion.p>
            </div>
          </div>

          {/* Right column - Graph */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="relative border border-gray-200 rounded-lg p-4 bg-white">
              <svg
                width={svgWidth}
                height={svgHeight}
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                className="w-full max-w-4xl h-auto"
                style={{ backgroundColor: "#ffffff" }}
              >
                {/* Subtle quadrant tinting */}
                <defs>
                  <filter
                    id="halo"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Quadrant tinting */}
                <rect
                  x={margin}
                  y={margin}
                  width={chartWidth / 2}
                  height={chartHeight / 2}
                  fill="#f9fafb"
                  opacity="0.3"
                />
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
                  stroke="#e5e7eb"
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

                {/* Competitor markers */}
                {competitors.map((competitor) => {
                  const x = getX(competitor.x);
                  const y = getY(competitor.y);
                  const isHovered = hoveredItem === competitor.id;
                  const isWiselook = competitor.isWiselook;

                  return (
                    <g key={competitor.id}>
                      {/* Halo effect for Wiselook */}
                      {isWiselook && (
                        <circle
                          cx={x}
                          cy={y}
                          r="12"
                          fill="hsl(var(--primary))"
                          opacity="0.2"
                          filter="url(#halo)"
                        />
                      )}

                      {/* Marker circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isWiselook || isHovered ? "8" : "6"}
                        fill={isWiselook ? "hsl(var(--primary))" : "#6b7280"}
                        stroke={isWiselook ? "hsl(var(--primary))" : "#374151"}
                        strokeWidth={isWiselook ? "2" : "1"}
                        className="cursor-pointer transition-all duration-200"
                        style={{
                          filter: isHovered
                            ? "drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                            : "none",
                        }}
                        onMouseEnter={() => setHoveredItem(competitor.id)}
                        onMouseLeave={() => setHoveredItem(null)}
                      />

                      {/* Label */}
                      <text
                        x={x}
                        y={y - 15}
                        textAnchor="middle"
                        className={`text-xs font-medium transition-all duration-200 ${
                          isWiselook ? "fill-primary" : "fill-gray-700"
                        }`}
                        style={{
                          fontWeight: isWiselook ? "600" : "500",
                          fontSize: isWiselook ? "13px" : "12px",
                        }}
                      >
                        {competitor.label}
                      </text>
                    </g>
                  );
                })}

                {/* X-axis label */}
                <text
                  x={margin + chartWidth / 2}
                  y={svgHeight - 20}
                  textAnchor="middle"
                  className="text-sm font-medium fill-gray-700"
                >
                  Objectivity
                </text>
                <text
                  x={margin - 10}
                  y={svgHeight - 20}
                  textAnchor="start"
                  className="text-xs fill-gray-500"
                >
                  Subjective
                </text>
                <text
                  x={margin + chartWidth + 10}
                  y={svgHeight - 20}
                  textAnchor="end"
                  className="text-xs fill-gray-500"
                >
                  Objective
                </text>

                {/* Y-axis label */}
                <text
                  x={20}
                  y={margin + chartHeight / 2}
                  textAnchor="middle"
                  className="text-sm font-medium fill-gray-700"
                  transform={`rotate(-90, 20, ${margin + chartHeight / 2})`}
                >
                  Scalability
                </text>
                <text
                  x={20}
                  y={margin + chartHeight + 10}
                  textAnchor="middle"
                  className="text-xs fill-gray-500"
                  transform={`rotate(-90, 20, ${margin + chartHeight + 10})`}
                >
                  Low
                </text>
                <text
                  x={20}
                  y={margin - 10}
                  textAnchor="middle"
                  className="text-xs fill-gray-500"
                  transform={`rotate(-90, 20, ${margin - 10})`}
                >
                  High
                </text>
              </svg>

              {/* Hover tooltip */}
              {hoveredItem && (
                <div className="absolute top-4 left-4 bg-background border border-border rounded-lg px-3 py-2 shadow-lg z-10">
                  <p className="text-sm text-foreground font-medium">
                    {competitors.find((c) => c.id === hoveredItem)?.description}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorQuadrant;
