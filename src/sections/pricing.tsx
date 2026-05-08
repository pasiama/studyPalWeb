"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for casual learners exploring AI education.",
    features: ["5 AI tutoring sessions/mo", "Basic assessment tools", "Community support", "Progress tracking"],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious students who want to excel in their studies.",
    features: [
      "Unlimited AI tutoring",
      "Advanced predictive analytics",
      "Priority AI response time",
      "Custom learning roadmaps",
      "Offline mode support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Institution",
    price: "Custom",
    description: "Enterprise features for schools and learning centers.",
    features: [
      "Bulk student accounts",
      "Admin dashboard & reporting",
      "API integration",
      "Dedicated account manager",
      "Custom AI model training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your learning goals. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 rounded-3xl flex flex-col relative ${
                tier.popular ? "border-primary/50 shadow-2xl shadow-primary/10" : "border-white/5"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground text-sm">/month</span>}
                </div>
                <p className="text-muted-foreground text-sm">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.popular ? "default" : "outline"} 
                className={`w-full h-12 font-bold ${tier.popular ? "shadow-lg shadow-primary/20" : ""}`}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
