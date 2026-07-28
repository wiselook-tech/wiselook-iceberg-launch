import { Award } from "lucide-react";
import awardCeremony from "@/assets/hr_summit/hr-summit-award-ceremony.webp";
import summitStage from "@/assets/hr_summit/hr-summit-stage.webp";

const ANNOUNCEMENT_URL =
  "https://www.rrhhdigital.com/secciones/eventos-rrhhdigital/781586/hr-innovation-summit-2025-mas-talento-mas-ideas-y-una-asistencia-record/";

const photos = [
  {
    src: awardCeremony,
    alt: "The Wiselook team on stage receiving the HR Innovation Summit 2025 Startup of the Year award",
  },
  {
    src: summitStage,
    alt: "Wiselook presenting on the La Nave stage at HR Innovation Summit 2025",
  },
];

/** The award, its photos, and the research credential — the page's first proof point. */
const AwardsSection = () => (
  <section className="bg-muted/30 py-20 md:py-28">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <Award className="h-5 w-5 text-primary" />
            <span className="font-heading text-sm font-medium uppercase tracking-wider text-primary">Award winner</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-heading md:text-4xl">
            Winner, HR Innovation Summit 2025 — Startup of the Year
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Recognized for innovation in talent assessment
          </p>
          <a
            href={ANNOUNCEMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded text-sm text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Read the announcement →
          </a>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="h-48 w-full rounded-xl object-cover shadow-card"
              width={900}
              height={533}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Methodology developed with researchers from Universidad Autónoma de Madrid.
        </p>
      </div>
    </div>
  </section>
);

export default AwardsSection;
