interface ComparisonRow {
  factor: string;
  traditional: string;
  consulting: string;
  wiselook: string;
}

const rows: ComparisonRow[] = [
  {
    factor: "What's measured",
    traditional: "Standardized questions, limited depth",
    consulting: "Expert judgment, one interview at a time",
    wiselook: "Judgment, behavior, and competence, in people's own words",
  },
  {
    factor: "Format",
    traditional: "Multiple-choice questionnaires",
    consulting: "Interviews and assessment centers",
    wiselook: "Structured conversation with Claire, our AI assessor",
  },
  {
    factor: "Time to insight",
    traditional: "Quick to run, thin on evidence",
    consulting: "Weeks of scheduling per cohort",
    wiselook: "Minutes per person, not weeks",
  },
  {
    factor: "Scale",
    traditional: "Scales, if a questionnaire is enough",
    consulting: "Low throughput, high cost per person",
    wiselook: "Whole populations, the same rubric every time",
  },
  {
    factor: "Evidence quality",
    traditional: "What people self-report",
    consulting: "Subjective judgment, assessor to assessor",
    wiselook: "Validated rubrics, with the reasoning behind every level",
  },
];

const headerCell = "px-5 py-4 align-bottom font-heading text-sm font-semibold";
const bodyCell = "px-5 py-4 align-top text-sm text-muted-foreground";
const wiselookColumn = "border-x border-primary";

/** Semantic comparison table; scrolls horizontally inside its wrapper on narrow screens. */
const ComparisonTable = () => (
  <div
    tabIndex={0}
    role="region"
    aria-label="Comparison table"
    className="overflow-x-auto rounded-xl border border-border bg-background shadow-card"
  >
    <table className="w-full min-w-[720px] border-collapse text-left">
      <caption className="sr-only">
        How Wiselook compares with traditional tests and consulting assessments.
      </caption>
      <thead>
        <tr className="border-b border-border">
          <th scope="col" className={`${headerCell} text-muted-foreground`}>
            Factor
          </th>
          <th scope="col" className={`${headerCell} text-foreground`}>
            Traditional tests
          </th>
          <th scope="col" className={`${headerCell} text-foreground`}>
            Consulting assessments
          </th>
          <th scope="col" className={`${headerCell} ${wiselookColumn} border-t bg-primary/10 text-primary`}>
            Wiselook
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={row.factor} className={index < rows.length - 1 ? "border-b border-border" : undefined}>
            <th scope="row" className={`${bodyCell} font-heading font-semibold text-foreground`}>
              {row.factor}
            </th>
            <td className={bodyCell}>{row.traditional}</td>
            <td className={bodyCell}>{row.consulting}</td>
            <td
              className={`${bodyCell} ${wiselookColumn} bg-primary/5 font-medium text-foreground ${
                index === rows.length - 1 ? "border-b" : ""
              }`}
            >
              {row.wiselook}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ComparisonTable;
