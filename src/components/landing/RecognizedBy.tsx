import enisaCertificada from "@/assets/enisa-certificada.png";
import fueLogo from "@/assets/fue-logo.png";
import celeraLogo from "@/assets/celera-logo.svg";
import incibeEmprendeLogo from "@/assets/incibe-emprende-logo.png";

const badges = [
  {
    href: "https://www.enisa.es/",
    src: enisaCertificada,
    alt: "Empresa Emergente Certificada por ENISA",
    title: "Empresa Emergente Certificada por ENISA (Ley 28/2022)",
    width: 98,
    height: 72,
  },
  {
    href: "https://fundacionuniversidadempresa.es/",
    src: fueLogo,
    alt: "Fundación Universidad Empresa",
    title: "Fundación Universidad Empresa",
    width: 200,
    height: 47,
  },
  {
    href: "https://acelerame.org/",
    src: celeraLogo,
    alt: "Fundación Celera",
    title: "Fundación Celera",
    width: 127,
    height: 36,
  },
  {
    href: "https://www.incibe.es/incibe-emprende",
    src: incibeEmprendeLogo,
    alt: "INCIBE Emprende Ventures",
    title: "Sello Ventures INCIBE Emprende",
    width: 72,
    height: 72,
  },
];

/** Compact institutional-backing band, directly above the footer. */
const RecognizedBy = () => (
  <section className="border-t border-border bg-muted/30 py-12">
    <div className="container mx-auto px-6">
      <h2 className="mb-8 text-center font-heading text-sm uppercase tracking-widest text-muted-foreground">
        Recognized by
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {badges.map((badge) => (
          <a
            key={badge.href}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <img
              src={badge.src}
              alt={badge.alt}
              title={badge.title}
              className="h-12 w-auto opacity-50 grayscale transition-all duration-200 hover:opacity-80 hover:grayscale-[50%]"
              width={badge.width}
              height={badge.height}
              loading="lazy"
              decoding="async"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default RecognizedBy;
