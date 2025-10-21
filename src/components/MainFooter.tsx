"use server";

import wiselookIcon from "@/assets/favicon.png";

const MainFooter = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left flex items-center gap-3">
              <img src={wiselookIcon} alt="Wiselook" className="h-10 w-10" />
              <div>
                <p className="font-heading font-bold text-xl text-foreground">Wiselook</p>
                <p className="text-sm text-muted-foreground mt-1">Strategic Workforce Intelligence</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button 
                onClick={() => scrollToSection('problem')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                Security
              </button>
              <button 
                onClick={() => scrollToSection('FAQ')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-foreground transition-colors min-h-[44px] min-w-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Wiselook. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export { MainFooter };
