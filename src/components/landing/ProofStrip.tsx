import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import hrSummitAward from "@/assets/hr_summit/WhatsApp Image 2025-10-06 at 11.24.31.jpeg";
import enisaCertificada from "@/assets/enisa-certificada.png";
import fueLogo from "@/assets/fue-logo.png";
import celeraLogo from "@/assets/celera-logo.svg";
import incibeEmprendeLogo from "@/assets/incibe-emprende-logo.png";

const recognizedBy = [
  {
    href: "https://www.enisa.es/",
    src: enisaCertificada,
    alt: "Empresa Emergente Certificada por ENISA",
    title: "Empresa Emergente Certificada por ENISA (Ley 28/2022)",
  },
  {
    href: "https://fundacionuniversidadempresa.es/",
    src: fueLogo,
    alt: "Fundación Universidad Empresa",
    title: "Fundación Universidad Empresa",
  },
  {
    href: "https://acelerame.org/",
    src: celeraLogo,
    alt: "Fundación Celera",
    title: "Fundación Celera",
  },
  {
    href: "https://www.incibe.es/incibe-emprende",
    src: incibeEmprendeLogo,
    alt: "INCIBE Emprende Ventures",
    title: "Sello Ventures INCIBE Emprende",
  },
];

const ProofStrip = () => (
  <section className="border-y border-border bg-muted/30 py-8">
    <div className="container mx-auto px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 lg:flex-row lg:justify-center lg:gap-8">
        {/* Award */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <img
            src={hrSummitAward}
            alt="Wiselook team receiving the HR Innovation Summit 2025 award"
            className="h-10 w-10 rounded-full object-cover grayscale"
            loading="lazy"
          />
          <Badge variant="secondary" className="font-heading uppercase tracking-wider">
            Award winner
          </Badge>
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            Winner, HR Innovation Summit 2025 — Startup of the Year.{" "}
            <a
              href="https://www.rrhhdigital.com/secciones/eventos-rrhhdigital/781586/hr-innovation-summit-2025-mas-talento-mas-ideas-y-una-asistencia-record/"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
            >
              Read the announcement →
            </a>
          </p>
        </div>

        <Separator orientation="vertical" className="hidden h-10 lg:block" />

        {/* Recognized by */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {recognizedBy.map((logo) => (
            <a
              key={logo.href}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-9 w-auto opacity-50 grayscale transition-all duration-200 hover:opacity-80 hover:grayscale-[50%]"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Methodology developed with researchers from Universidad Autónoma de Madrid.
      </p>
    </div>
  </section>
);

export default ProofStrip;
