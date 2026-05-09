import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/sections/contact-page/hero";
import { ContactOptions } from "@/sections/contact-page/options";
import { ContactForm } from "@/sections/contact-page/form";
import { SocialSection } from "@/sections/contact-page/social";
import { ContactFAQ } from "@/sections/contact-page/faq";

export const metadata = {
  title: "Contact StudyPal | We're Here to Support You",
  description: "Reach out to StudyPal for support, partnerships, or feedback. We're here to help students, parents, teachers, and schools across Ghana.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <ContactHero />
      <div className="flex flex-col gap-24 py-24">
        <ContactOptions />
        <ContactForm />
        <SocialSection />
        <ContactFAQ />
      </div>
      <Footer />
    </main>
  );
}
