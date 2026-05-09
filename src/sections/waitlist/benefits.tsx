"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Gift, Users, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Early Access",
    description: "Be among the first 1,000 users to experience the future of learning.",
    icon: Zap,
    color: "bg-yellow-500/10 text-yellow-500",
  },
  {
    title: "Free Trial Credits",
    description: "Receive 50 free AI tutor credits at launch for being an early supporter.",
    icon: Gift,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Teacher Priority",
    description: "Teachers on the waitlist get priority access to classroom analytics tools.",
    icon: Users,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Parent Insights",
    description: "Get early access to our dashboard for monitoring your child's progress.",
    icon: ShieldCheck,
    color: "bg-green-500/10 text-green-500",
  },
];

export const WaitlistBenefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Why Join Early?</h2>
          <p className="text-muted-foreground text-lg">Exclusive perks for our foundation members.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border group hover:bg-secondary transition-all"
            >
              <div className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
