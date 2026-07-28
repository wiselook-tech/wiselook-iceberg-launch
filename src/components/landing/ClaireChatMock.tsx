const competencies = [
  { name: "Judgment", level: "Level 4 of 5", width: "w-[80%]" },
  { name: "Communication", level: "Level 4 of 5", width: "w-[76%]" },
  { name: "Adaptability", level: "Level 3 of 5", width: "w-[58%]" },
];

/**
 * Decorative illustration of a Claire assessment: a short chat exchange plus the
 * competency report it produces. Static and hidden from assistive tech — the
 * sr-only paragraph carries the equivalent description.
 */
const ClaireChatMock = () => (
  <div className="relative">
    <p className="sr-only">
      Illustration of a Wiselook assessment: Claire asks how the person delivered difficult news to their team, the
      person answers in their own words, and Claire asks an adaptive follow-up. The resulting competency report scores
      Judgment, Communication, and Adaptability.
    </p>

    <div aria-hidden="true" className="relative">
      {/* Chat window */}
      <div className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
        <div className="flex items-center gap-3 border-b border-border bg-muted/40 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="ml-2 flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 font-heading text-xs font-bold text-primary">
              C
            </span>
            <span className="font-heading text-sm font-semibold text-heading">Claire</span>
            <span className="text-xs text-muted-foreground">AI assessor</span>
          </div>
        </div>

        {/* pb-14 keeps the report card below from covering the last message */}
        <div className="space-y-4 p-5 pb-14">
          <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm text-foreground">
            Tell me about a time you had to deliver difficult news to your team.
          </div>

          <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-primary px-4 py-3 text-sm text-primary-foreground">
            We cancelled a project three weeks before launch. I told the team the morning I knew, before the client call,
            and gave everyone their next assignment the same day.
          </div>

          <div className="max-w-[88%] space-y-1.5">
            <span className="text-[11px] font-medium uppercase tracking-wider text-primary">Adaptive follow-up</span>
            <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm text-foreground">
              What made you choose that moment rather than waiting?
            </div>
          </div>
        </div>
      </div>

      {/* Competency report */}
      <div
        className="animate-fade-up [animation-fill-mode:backwards] relative z-10 -mt-12 ml-auto mr-3 w-64 rounded-xl border border-border bg-background p-4 shadow-soft sm:mr-6"
        style={{ animationDelay: "200ms" }}
      >
        <p className="font-heading text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Competency report
        </p>
        <div className="mt-3 space-y-3">
          {competencies.map((competency) => (
            <div key={competency.name} className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium text-foreground">{competency.name}</span>
                <span className="text-[11px] text-muted-foreground">{competency.level}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className={`h-full rounded-full bg-primary ${competency.width}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ClaireChatMock;
