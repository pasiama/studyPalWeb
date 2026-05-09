"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Rocket, Users, ShieldCheck, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Student",
    id: "student",
    priceMonthly: 20,
    priceYearly: 200,
    description: "Perfect for students preparing for BECE & WASSCE.",
    icon: GraduationCap,
    btnText: "Start Learning",
    features: [
      "Unlimited practice tests",
      "AI explanations for every question",
      "Essay + composition marking",
      "Progress tracking",
      "Weak topic detection",
      "Study recommendations",
    ],
    color: "bg-primary/10 text-primary",
    accent: "bg-primary",
  },
  {
    name: "Parent",
    id: "parent",
    priceMonthly: 15,
    priceYearly: 150,
    description: "Stay connected to your child's academic journey.",
    icon: Users,
    btnText: "Track Your Child",
    features: [
      "Link multiple children",
      "Real-time performance tracking",
      "AI performance insights",
      "Alerts for low performance",
      "School comparison view",
    ],
    color: "bg-blue-500/10 text-blue-500",
    accent: "bg-blue-500",
    recommended: true,
  },
  {
    name: "Teacher",
    id: "teacher",
    priceMonthly: 25,
    priceYearly: 250,
    description: "Tools to manage classrooms and improve outcomes.",
    icon: Rocket,
    btnText: "Start Teaching Smarter",
    features: [
      "Classroom dashboards",
      "Student performance tracking",
      "Create & assign tests",
      "Weak topic analytics",
      "Virtual classroom tools",
      "Student grouping tools",
    ],
    color: "bg-purple-500/10 text-purple-500",
    accent: "bg-purple-500",
  },
];

export const PricingHero = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pt-40 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground mb-8">
              Simple Pricing. <br />
              <span className="text-primary">Powerful Learning.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Choose a plan that fits your learning journey. Whether you’re a student, parent, or teacher — StudyPal has a plan for you.
            </p>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-bold ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="w-16 h-8 bg-secondary border border-border rounded-full relative p-1 transition-all"
              >
                <motion.div
                  animate={{ x: isYearly ? 32 : 0 }}
                  className="w-6 h-6 bg-primary rounded-full shadow-lg"
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>Yearly</span>
                <span className="bg-green-500/10 text-green-500 text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest">
                  Save ₵40+
                </span>
              </div>
            </div>

            <Link href="/waitlist">
              <button className="bg-primary text-background px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                Start Free Trial
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-card rounded-[3rem] border p-10 flex flex-col transition-all duration-300 ${
                plan.recommended ? "border-primary shadow-2xl shadow-primary/10 scale-105 z-10" : "border-border hover:border-primary/30"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  Recommended
                </div>
              )}

              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 ${plan.color} rounded-2xl flex items-center justify-center`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Plan</p>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black text-foreground">₵{isYearly ? plan.priceYearly : plan.priceMonthly}</span>
                  <span className="text-muted-foreground font-medium">/{isYearly ? "year" : "month"}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full ${plan.accent} text-background flex items-center justify-center shrink-0 mt-0.5`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/waitlist">
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  plan.recommended ? "bg-primary text-background shadow-lg shadow-primary/20" : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                }`}>
                  {plan.btnText}
                </button>
              </Link>
            </motion.div>
          ))}

          {/* Institution Plan (Custom) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card rounded-[3rem] border border-border p-10 flex flex-col border-dashed group hover:border-primary/50 transition-all"
          >
            <div className="flex items-center gap-4 mb-8 text-muted-foreground group-hover:text-primary transition-colors">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-all">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Institution</h3>
                <p className="text-xs uppercase tracking-widest font-bold">Custom Scale</p>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-3xl font-black text-foreground">Custom Pricing</span>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">For schools and educational organizations requiring bulk student management.</p>
            </div>

            <div className="space-y-4 mb-10 flex-grow">
              {["School-wide analytics", "Ranking system access", "Bulk student management", "Teacher dashboards", "API / reporting tools"].map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary text-muted-foreground flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-snug">{f}</span>
                </div>
              ))}
            </div>

            <Link href="/contact">
              <button className="w-full py-4 rounded-xl font-bold text-lg bg-secondary border border-border text-foreground hover:bg-secondary/80 transition-all">
                Contact Sales
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Free vs Paid Mini Explanation */}
        <div className="mt-24 pt-24 border-t border-border">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Start Free. Upgrade When Ready.</h2>
            <p className="text-muted-foreground">Experience the basics before committing to a full plan.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-secondary p-8 rounded-3xl border border-border">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="text-muted-foreground w-5 h-5" />
                Free Tier
              </h4>
              <ul className="space-y-4">
                {["3 free tests total", "Basic results only", "Limited AI explanations", "No advanced analytics"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20">
              <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-primary">
                <Rocket className="w-5 h-5" />
                Paid Tier
              </h4>
              <ul className="space-y-4">
                {["Unlimited tests", "Full AI tutoring", "Essay marking", "Parent & teacher dashboards", "School ranking access", "Full analytics"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
