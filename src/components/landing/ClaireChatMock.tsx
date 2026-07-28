/*
 * The hexes below are the product UI's chat palette (wiselook-platform-tenant-ui):
 * #f8fbff secondary-50 bubble fill, #e2e8f0 background-200 hairline, #3e4247 ink,
 * #ececf1 neutral-500 track, #9aa6c9 typing dots, and the #7c8dff family the
 * liquid avatar is built from. They have no equivalent in this site's token set
 * (whose neutrals are pure grays), so they stay literal here on purpose — the
 * point of this mock is to look exactly like the real assessment surface.
 */

const competencies = [
  { name: "Judgment", level: "Level 4 of 5", width: "w-[80%]" },
  { name: "Communication", level: "Level 4 of 5", width: "w-[76%]" },
  { name: "Adaptability", level: "Level 3 of 5", width: "w-[58%]" },
];

/** Claire's signature morphing liquid avatar. */
const ClaireBlob = ({ className }: { className: string }) => (
  <span
    className={`block flex-none animate-blob-morph bg-[linear-gradient(140deg,#e4e8ff,#bcc6ff_60%,#a7b3ff)] shadow-[0_16px_38px_-16px_rgba(124,141,255,0.4),inset_8px_10px_22px_rgba(255,255,255,0.55)] motion-reduce:animate-none ${className}`}
    // The keyframes animate this same property, and animations outrank inline
    // styles — so this is purely the resting shape for motion-reduce users.
    style={{ borderRadius: "42% 58% 62% 38% / 46% 44% 56% 54%" }}
  />
);

const claireBubble =
  "rounded-[4px_16px_16px_16px] border border-[#e2e8f0] bg-[#f8fbff] px-4 py-3 text-[15px] leading-[1.55] text-[#3e4247]";

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
      {/* Cool wash behind the panel, as on the product's assessment screen. */}
      <div className="pointer-events-none absolute -left-16 -top-24 h-[420px] w-[calc(100%+8rem)] bg-[radial-gradient(1100px_420px_at_80%_-10%,#f1f5ff_0%,rgba(241,245,255,0)_60%)]" />

      {/* Assessment panel */}
      <div className="relative animate-fade-up overflow-hidden rounded-3xl border border-[#e2e8f0] bg-background shadow-[0_18px_44px_-30px_rgba(23,11,107,0.35)]">
        <div className="flex items-center gap-3 border-b border-[#e2e8f0] px-5 py-4">
          <ClaireBlob className="h-8 w-8" />
          <div className="min-w-0">
            <p className="font-heading text-sm font-bold leading-tight text-heading">Claire</p>
            <p className="text-[11px] leading-tight text-muted-foreground">AI assessor</p>
          </div>
          <div className="ml-auto flex flex-col items-end gap-1.5">
            <span className="text-[13px] font-bold text-primary">72% complete</span>
            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-[#ececf1] sm:w-24">
              <div className="h-full w-[72%] rounded-full bg-primary" />
            </div>
          </div>
        </div>

        {/* pb-16 keeps the report card below from covering the typing indicator */}
        <div className="space-y-4 p-5 pb-16">
          <div className="flex max-w-[88%] items-start gap-2.5">
            <ClaireBlob className="mt-1 h-[34px] w-[34px]" />
            <p className={claireBubble}>Tell me about a time you had to deliver difficult news to your team.</p>
          </div>

          <div className="flex items-start justify-end gap-2.5">
            <p className="max-w-[80%] rounded-[16px_4px_16px_16px] bg-primary px-4 py-3 text-[15px] leading-[1.55] text-primary-foreground">
              We cancelled a project three weeks before launch. I told the team the morning I knew, before the client
              call, and gave everyone their next assignment the same day.
            </p>
            <span className="mt-1 flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-brand-accent font-heading text-xs font-bold text-brand-accent-foreground shadow-[0_4px_12px_-4px_rgba(255,153,102,0.7)]">
              M
            </span>
          </div>

          <div className="flex max-w-[88%] items-start gap-2.5">
            <ClaireBlob className="mt-1 h-[34px] w-[34px]" />
            <p className={claireBubble}>What made you choose that moment rather than waiting?</p>
          </div>

          {/* Claire composing her next adaptive probe */}
          <div className="flex items-center gap-2.5">
            <ClaireBlob className="h-[34px] w-[34px]" />
            <div className="flex gap-[5px] rounded-2xl border border-[#e2e8f0] bg-[#f8fbff] px-4 py-3">
              {[0, 0.2, 0.4].map((delay) => (
                <span
                  key={delay}
                  className="h-2 w-2 animate-typing-dot rounded-full bg-[#9aa6c9] motion-reduce:animate-none"
                  style={{ animationDelay: `${delay}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Competency report */}
      <div
        className="animate-fade-up [animation-fill-mode:backwards] relative z-10 -mt-12 ml-auto mr-3 w-64 rounded-xl border border-[#e2e8f0] bg-background p-4 shadow-[0_6px_18px_-14px_rgba(23,11,107,0.3)] sm:mr-6"
        style={{ animationDelay: "200ms" }}
      >
        <p className="font-heading text-[10px] uppercase tracking-wide text-muted-foreground">Competency report</p>
        <div className="mt-3 space-y-3">
          {competencies.map((competency) => (
            <div key={competency.name} className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-heading">{competency.name}</span>
                <span className="text-[11px] text-muted-foreground">{competency.level}</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#ececf1]">
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
