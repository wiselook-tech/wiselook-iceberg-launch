import { Shield } from "lucide-react";
import enisaCertificada from "@/assets/enisa-certificada.png";
import fueLogo from "@/assets/fue-logo.png";
import celeraLogo from "@/assets/celera-logo.svg";
import incibeEmprendeLogo from "@/assets/incibe-emprende-logo.png";

const TrustStrip = () => (
  <>
    {/* Security Badge */}
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>GDPR-ready</span>
          </div>
          <span className="text-border">•</span>
          <span>Built for the EU AI Act</span>
          <span className="text-border">•</span>
          <span>Enterprise-grade security</span>
        </div>
      </div>
    </section>

    {/* Recognized By */}
    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">Recognized by</p>
        <div className="flex items-center justify-center gap-12 flex-wrap">
          <a href="https://www.enisa.es/" target="_blank" rel="noopener noreferrer">
            <img
              src={enisaCertificada}
              alt="Empresa Emergente Certificada por ENISA"
              title="Empresa Emergente Certificada por ENISA (Ley 28/2022)"
              className="h-12 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-[50%] transition-all duration-200"
            />
          </a>
          <a href="https://fundacionuniversidadempresa.es/" target="_blank" rel="noopener noreferrer">
            <img
              src={fueLogo}
              alt="Fundación Universidad Empresa"
              title="Fundación Universidad Empresa"
              className="h-12 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-[50%] transition-all duration-200"
            />
          </a>
          <a href="https://acelerame.org/" target="_blank" rel="noopener noreferrer">
            <img
              src={celeraLogo}
              alt="Fundación Celera"
              title="Fundación Celera"
              className="h-12 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-[50%] transition-all duration-200"
            />
          </a>
          <a href="https://www.incibe.es/incibe-emprende" target="_blank" rel="noopener noreferrer">
            <img
              src={incibeEmprendeLogo}
              alt="INCIBE Emprende Ventures"
              title="Sello Ventures INCIBE Emprende"
              className="h-12 w-auto opacity-50 grayscale hover:opacity-80 hover:grayscale-[50%] transition-all duration-200"
            />
          </a>
        </div>
      </div>
    </section>
  </>
);

export default TrustStrip;
