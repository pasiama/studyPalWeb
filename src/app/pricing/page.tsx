import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PricingHero } from "@/sections/pricing-page/hero";
import { ComparisonTable } from "@/sections/pricing-page/comparison";
import { WhyUpgrade } from "@/sections/pricing-page/why-upgrade";
import { PaymentMethods } from "@/sections/pricing-page/payments";
import { ReferralDiscount } from "@/sections/pricing-page/referral-discount";
import { PricingFAQ } from "@/sections/pricing-page/faq";
import { CTASection } from "@/sections/cta";

export const metadata = {
  title: "Pricing | Simple Plans for Powerful Learning | StudyPal",
  description: "Choose the right StudyPal plan for your learning journey. Flexible subscription plans for students, parents, teachers, and schools in Ghana.",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <PricingHero />
      <div className="flex flex-col gap-24 py-12">
        <WhyUpgrade />
        <ComparisonTable />
        <PaymentMethods />
        <ReferralDiscount />
        <PricingFAQ />
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
