import { Navbar } from "@/components/navbar";
import { Hero } from "@/sections/hero";
import { ProblemSection } from "@/sections/problem";
import { Features } from "@/sections/features";
import { UserRoles } from "@/sections/user-roles";
import { HowItWorks } from "@/sections/how-it-works";
import { AIFeatures } from "@/sections/ai-features";
import { SchoolRankingPreview } from "@/sections/school-ranking";
import { Testimonials } from "@/sections/testimonials";
import { CTASection } from "@/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-background">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Features />
      <UserRoles />
      <HowItWorks />
      <AIFeatures />
      <SchoolRankingPreview />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
