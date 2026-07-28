import TalentPyramid from "@/components/landing/TalentPyramid";

const ProblemSection = () => (
  <section id="problem" className="py-20 md:py-28 bg-background scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Content */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
              Go beyond multiple‑choice tests and expensive executive assessments
            </h2>
            <p className="text-lg text-muted-foreground">
              Companies model, forecast, and audit every decision about money. People decisions — who to hire, who to
              promote, who's ready for what's next — still run on a CV, a few interviews, and gut feel. Wiselook brings
              the same rigor to the people side of the business.
            </p>
          </div>

          {/* Who gets assessed today */}
          <div className="flex justify-center lg:justify-end">
            <TalentPyramid />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSection;
