"use server";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import wiselookIcon from "@/assets/favicon.png";

const MainNav = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={wiselookIcon} alt="Wiselook" className="h-8 w-8" />
            <span className="font-heading font-bold text-xl text-foreground">
              Wiselook
            </span>
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Learn about our talent assessment solutions"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("security")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View our security and compliance features"
            >
              Security
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Meet our team and learn about Wiselook"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Get in touch with our team"
            >
              Contact
            </button>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="hero"
              size="sm"
              className="group"
              onClick={() =>
                window.open(
                  "https://calendar.app.google/NvJxzr9aQzB77DeHA",
                  "_blank",
                )
              }
            >
              Let's talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { MainNav };
