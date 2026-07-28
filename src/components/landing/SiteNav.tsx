import { useRef, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CALENDAR_URL, trackCtaClick } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll";
import wiselookIcon from "@/assets/Wiselook_RGB_Iso_Positive_Color.svg";

interface NavLink {
  id: string;
  label: string;
}

// No aria-labels here: the visible text is the accessible name, so voice control
// and screen readers announce the same words the user reads (WCAG 2.5.3).
const navLinks: NavLink[] = [
  { id: "problem", label: "Product" },
  { id: "use-cases", label: "Use cases" },
  { id: "security", label: "Security" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact" },
];

const openCalendar = (location: string) => {
  trackCtaClick(location);
  window.open(CALENDAR_URL, "_blank");
};

const SiteNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingSection = useRef<string | null>(null);

  // The sheet locks page scrolling while it is open, so the target is remembered
  // and scrolled to once the sheet has closed and released the lock.
  const handleMenuNavigate = (sectionId: string) => {
    pendingSection.current = sectionId;
    setMenuOpen(false);
  };

  const handleMenuClosed = () => {
    const sectionId = pendingSection.current;
    pendingSection.current = null;
    if (sectionId) {
      requestAnimationFrame(() => scrollToSection(sectionId));
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 rounded transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <img
              src={wiselookIcon}
              alt="Wiselook"
              className="h-8 w-8"
              width={32}
              height={32}
              loading="eager"
              decoding="async"
            />
            <span className="font-heading font-bold text-xl text-heading">Wiselook</span>
          </button>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="rounded text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="sm" className="group" onClick={() => openCalendar("nav")}>
              Talk to us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]" onCloseAutoFocus={handleMenuClosed}>
              <SheetHeader>
                <SheetTitle className="font-heading">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleMenuNavigate(link.id)}
                    className="flex min-h-[44px] items-center rounded-md px-2 text-left font-heading text-base text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  variant="hero"
                  size="lg"
                  className="group mt-4 w-full min-h-[44px]"
                  onClick={() => {
                    setMenuOpen(false);
                    openCalendar("nav-mobile");
                  }}
                >
                  Talk to us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
