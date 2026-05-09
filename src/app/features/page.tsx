import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FeaturesHero } from "@/sections/features-page/hero";
import { FeaturesNav } from "@/sections/features-page/nav";
import { StudentFeatures } from "@/sections/features-page/students";
import { ParentFeatures } from "@/sections/features-page/parents";
import { TeacherFeatures } from "@/sections/features-page/teachers";
import { AIFeaturesDetailed } from "@/sections/features-page/ai";
import { AnalyticsSystem } from "@/sections/features-page/analytics";
import { SchoolRankingFeatures } from "@/sections/features-page/school-ranking";
import { ReferralSystem } from "@/sections/features-page/referrals";
import { CTASection } from "@/sections/cta";

export const metadata = {
  title: "StudyPal Features | AI-Powered Learning Tools for Ghana",
  description: "Explore the comprehensive features of StudyPal, including AI practice tests, parent tracking, teacher tools, and school ranking systems.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <FeaturesHero />
      <FeaturesNav />
      <div className="flex flex-col gap-24 py-24">
        <StudentFeatures />
        <ParentFeatures />
        <TeacherFeatures />
        <AIFeaturesDetailed />
        <AnalyticsSystem />
        <SchoolRankingFeatures />
        <ReferralSystem />
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
