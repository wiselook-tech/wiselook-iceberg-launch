import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { withdrawConsent } from "@/lib/consent";
import { TRUST_CENTER_URL } from "@/lib/constants";
import TrustBadges from "@/components/landing/TrustBadges";
import wiselookIcon from "@/assets/Wiselook_RGB_Iso_Positive_Color.svg";

const SiteFooter = () => (
  // pb-24 leaves room for the mobile sticky CTA so it never covers these links.
  <footer className="pt-12 pb-24 md:pb-12 bg-background border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left flex items-center gap-3">
          <img
            src={wiselookIcon}
            alt="Wiselook"
            className="h-10 w-10"
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
          />
          <div>
            <p className="font-heading font-bold text-xl text-heading">Wiselook</p>
            <p className="text-sm text-muted-foreground mt-1">The measurement layer for people decisions.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground items-center">
          <button
            onClick={() => scrollToSection("problem")}
            className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
          >
            Product
          </button>
          <button
            onClick={() => scrollToSection("security")}
            className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
          >
            Security
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
          >
            Contact
          </button>
          <a
            href="https://www.linkedin.com/company/wiselook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors min-h-[44px] flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
            aria-label="Follow Wiselook on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
      {/* Compliance strip: framework badges only name the standards we pursue —
          the Trust Center holds the live status of each, so no claims are made here. */}
      <div className="mt-10 pt-8 border-t border-border">
        <p className="text-center font-heading text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Security &amp; compliance
        </p>
        <TrustBadges className="mt-5" />
        <p className="mt-5 text-center">
          <a
            href={TRUST_CENTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded text-sm text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Visit our Trust Center
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </p>
      </div>

      <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2025 Wiselook Talent Lab S.L. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="/privacy/" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <span>•</span>
          <a href="/terms/" className="hover:text-foreground transition-colors">
            Terms and Conditions
          </a>
          <span>•</span>
          <Link to="/support" className="hover:text-foreground transition-colors">
            Support
          </Link>
          <span>•</span>
          <button
            type="button"
            onClick={withdrawConsent}
            className="hover:text-foreground transition-colors"
          >
            Cookie preferences
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
