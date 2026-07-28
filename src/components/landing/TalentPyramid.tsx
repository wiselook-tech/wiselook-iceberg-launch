const tiers = [
  {
    name: "Execs",
    detail: "Human skills get tested",
    width: "w-1/2",
    tone: "bg-primary text-primary-foreground",
    detailTone: "text-primary-foreground/80",
  },
  {
    name: "Rest of the workforce",
    detail: "Human skills get debated",
    width: "w-3/4",
    tone: "bg-secondary text-secondary-foreground",
    detailTone: "text-secondary-foreground/70",
  },
  {
    name: "Line workers",
    detail: "Human skills get ignored",
    width: "w-full",
    tone: "bg-muted text-foreground",
    detailTone: "text-muted-foreground",
  },
];

/** Static, always-labelled pyramid of who gets assessed today. */
const TalentPyramid = () => (
  <div className="w-full max-w-md space-y-3">
    <p className="text-center font-heading text-xs font-semibold uppercase tracking-widest text-muted-foreground">
      Who gets assessed today
    </p>
    <div className="flex flex-col items-center gap-2">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`flex flex-col items-center justify-center rounded-lg px-4 py-3 text-center shadow-card ${tier.width} ${tier.tone}`}
        >
          <h3 className="font-heading text-base font-semibold sm:text-lg">{tier.name}</h3>
          <p className={`mt-1 text-xs sm:text-sm ${tier.detailTone}`}>{tier.detail}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TalentPyramid;
