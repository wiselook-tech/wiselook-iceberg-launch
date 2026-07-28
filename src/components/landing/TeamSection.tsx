import { ArrowRight, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import jaimePhoto from "@/assets/profiles/jaime.webp";
import rocioPhoto from "@/assets/profiles/rocio.webp";
import rafaPhoto from "@/assets/profiles/rafa.webp";

interface Founder {
  name: string;
  initials: string;
  role: string;
  bio: string;
  photo: string;
  linkedin: string;
}

const founders: Founder[] = [
  {
    name: "Jaime Oliver Huidobro, PhD",
    initials: "JO",
    role: "Co-Founder, Chief Product & Science Officer",
    bio: "Applied scientist and product leader. Former Founder of Epoch Metrics and Lead Data Scientist at Clarity AI. Holds a PhD in Mathematical Engineering and completed postdoctoral research at MIT. Specializing in AI and data-driven product development, he is recognized for integrating advanced technology and science with business strategy to empower organizations and unlock human potential.",
    photo: jaimePhoto,
    linkedin: "https://www.linkedin.com/in/jaime-oliver-huidobro/",
  },
  {
    name: "Rocío Fernández-Rubíes Aguirre",
    initials: "RF",
    role: "Co-Founder, Chief Executive Officer",
    bio: "Entrepreneur and executive leader in customer experience, business design, and organizational intelligence. CXO at Restaurant Brands Iberia, business connector at Klarna, and former startup founder; expert in leading strategic digital transformation and acclaimed for her innovative approaches to talent and workforce management.",
    photo: rocioPhoto,
    linkedin: "https://www.linkedin.com/in/rocio-fernandez-rubies-aguirre-b8b1373b/",
  },
  {
    name: "Rafael Sarandeses",
    initials: "RS",
    role: "Co-Founder, Non-Executive Chairman",
    bio: "Multidisciplinary leader with over 25 years of experience in investment banking, entrepreneurship, and motorsports. CEO and Partner at Talengo, advisor and coach, former Goldman Sachs executive, and author; highly regarded for his expertise in leadership development, talent strategy, and organizational transformation across world-class institutions and ventures.",
    photo: rafaPhoto,
    linkedin: "https://www.linkedin.com/in/rafaelsarandeses/",
  },
];

const TeamSection = () => (
  <section id="about" className="py-20 md:py-28 bg-muted/30 scroll-reveal scroll-mt-20">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading">About Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wiselook is the measurement layer for people decisions — helping organizations recognize and develop talent
            through structured, AI-led conversations delivered on Microsoft Teams, web, or embedded.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leaders combining deep expertise in AI, data science, and customer experience, applying the rigor of finance
            to how organizations understand their people.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {founders.map((founder) => (
            <Card key={founder.name} className="border-none bg-background shadow-card">
              <CardContent className="flex h-full flex-col items-center space-y-6 p-8 text-center">
                <Avatar className="h-32 w-32 shadow-soft">
                  <AvatarImage
                    src={founder.photo}
                    alt={founder.name}
                    className="object-cover"
                    width={256}
                    height={256}
                    loading="lazy"
                    decoding="async"
                  />
                  <AvatarFallback className="font-heading text-2xl text-muted-foreground">
                    {founder.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-2xl text-heading flex items-center justify-center">
                    {founder.name}
                  </h3>
                  <p className="text-lg text-primary font-medium flex items-center justify-center">{founder.role}</p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">{founder.bio}</p>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium mt-auto rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join the Team CTA */}
        <div className="text-center pt-8">
          <Button
            variant="outline"
            size="lg"
            className="group"
            onClick={() => window.open("https://www.linkedin.com/company/wiselook/jobs/", "_blank")}
          >
            Join the Team
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
