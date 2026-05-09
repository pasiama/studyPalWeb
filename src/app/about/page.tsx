import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutHero } from "@/sections/about/hero";
import { OurStory } from "@/sections/about/story";
import { MissionVision } from "@/sections/about/mission-vision";
import { DifferentFeatures } from "@/sections/about/different";
import { WhoWeServe } from "@/sections/about/who-we-serve";
import { ImpactSection } from "@/sections/about/impact";
import { ValuesSection } from "@/sections/about/values";
import { TechStack } from "@/sections/about/tech-stack";
import { CTASection } from "@/sections/cta";

export const metadata = {
  title: "About StudyPal | Reimagining Education in Ghana",
  description: "Learn about StudyPal's mission to empower students in Ghana with AI-driven learning tools, personalized feedback, and comprehensive exam preparation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <DifferentFeatures />
      <WhoWeServe />
      <ImpactSection />
      <ValuesSection />
      <TechStack />
      <CTASection />
      <Footer />
    </main>
  );
}
