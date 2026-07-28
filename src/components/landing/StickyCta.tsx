import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALENDAR_URL, trackCtaClick } from "@/lib/constants";

/** Mobile-only sticky booking bar. */
const StickyCta = () => (
  <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-soft z-50">
    <Button
      variant="hero"
      size="lg"
      className="w-full group min-h-[44px]"
      onClick={() => {
        trackCtaClick("sticky");
        window.open(CALENDAR_URL, "_blank");
      }}
    >
      Book a 30-min demo
      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
    </Button>
  </div>
);

export default StickyCta;
