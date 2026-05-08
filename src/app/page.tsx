import { Navbar } from "@/components/navbar";
import { Hero } from "@/sections/hero";
import { Features } from "@/sections/features";
import { Pricing } from "@/sections/pricing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}


function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto border-white/10 overflow-hidden relative">
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[100px] -z-10" />
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to transform your learning?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of students who are already excelling with StudyPal. 
            Start your personalized AI learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground font-bold py-4 px-8 rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Get Started for Free
            </button>
            <button className="glass py-4 px-8 rounded-xl font-medium hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

