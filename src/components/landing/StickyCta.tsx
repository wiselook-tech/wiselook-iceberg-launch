import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CALENDAR_URL, trackCtaClick } from "@/lib/constants";
import { setStickyCtaVisible } from "@/lib/sticky-cta";

interface StickyCtaProps {
  /** Id of the section the bar hides behind — it slides in once that scrolls away. */
  heroId?: string;
}

/**
 * Mobile-only sticky booking bar. Hidden while the hero is on screen so it never
 * competes with the hero CTA, and it publishes its state so the cookie banner can
 * sit above it.
 */
const StickyCta = ({ heroId = "home" }: StickyCtaProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);

    return () => observer.disconnect();
  }, [heroId]);

  useEffect(() => {
    setStickyCtaVisible(visible);
  }, [visible]);

  useEffect(() => () => setStickyCtaVisible(false), []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-4 shadow-soft backdrop-blur-sm transition-transform duration-300 md:hidden motion-reduce:transition-none",
        visible ? "translate-y-0" : "pointer-events-none translate-y-full",
      )}
    >
      <Button
        variant="hero"
        size="lg"
        tabIndex={visible ? undefined : -1}
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
};

export default StickyCta;
