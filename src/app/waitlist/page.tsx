import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WaitlistHero } from "@/sections/waitlist/hero";
import { WaitlistForm } from "@/sections/waitlist/form";
import { WaitlistBenefits } from "@/sections/waitlist/benefits";
import { ViralShare } from "@/sections/waitlist/viral";
import { RoleInsights } from "@/sections/waitlist/role-insights";
import { LaunchCountdown } from "@/sections/waitlist/countdown";

export const metadata = {
  title: "Join the StudyPal Waitlist | Early Access to AI Learning",
  description: "Be the first to experience AI-powered learning in Ghana. Join the StudyPal waitlist for early access, free trial credits, and priority tools for students, parents, and teachers.",
};

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <WaitlistHero />
      <WaitlistForm />
      <div className="flex flex-col gap-24 py-24">
        <WaitlistBenefits />
        <ViralShare />
        <RoleInsights />
        <LaunchCountdown />
      </div>
      <Footer />
    </main>
  );
}
