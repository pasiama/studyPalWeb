"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, Wallet, BadgePercent, ShieldCheck } from "lucide-react";

const referralFeatures = [
  {
    title: "Unique Referral Codes",
    description: "Every student, parent, and teacher gets a unique code to invite others.",
    icon: Gift,
  },
  {
    title: "Rewards System",
    description: "Earn StudyPal credits or direct rewards for every successful new user signup.",
    icon: BadgePercent,
  },
  {
    title: "Group Incentives",
    description: "Special bonuses for teachers who onboard their entire class or department.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Wallet",
    description: "Track your earnings and progress towards rewards in your personal in-app wallet.",
    icon: Wallet,
  },
];

export const ReferralSystem = () => {
  return (
    <section id="referrals" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-secondary p-12 md:p-20 rounded-[3rem] border border-border text-center overflow-hidden relative">
          {/* Decorative Sparkles */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Earn While You Learn</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Share the power of AI learning with your friends and colleagues and get rewarded for every successful referral.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {referralFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border group hover:border-primary/50 transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
