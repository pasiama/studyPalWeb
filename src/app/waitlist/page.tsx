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

      {/* Survey Banner */}
      <section className="max-w-3xl mx-auto px-6 pb-4">
        <div className="rounded-2xl border border-primary/30 bg-primary/5 px-8 py-6 text-center">
          <p className="text-sm font-semibold text-foreground mb-1">Help shape StudyPal</p>
          <p className="text-muted-foreground text-sm mb-4">
            Got 2 minutes? Share your thoughts so we can build exactly what students in Ghana need.
          </p>
          <a
            href="https://forms.gle/PRFjVpRFUkfr9MpVA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-background text-sm font-bold px-6 py-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            Take the Survey →
          </a>
        </div>
      </section>
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
