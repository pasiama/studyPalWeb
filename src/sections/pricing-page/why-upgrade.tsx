"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Eye, BookOpen } from "lucide-react";

const valueCards = [
  {
    title: "Smarter Learning",
    description: "Our AI doesn't just grade—it explains every mistake so you learn concepts, not just answers.",
    icon: Sparkles,
    color: "text-primary",
  },
  {
    title: "Better Performance",
    description: "Students who use StudyPal regularly see a significant improvement in their test scores.",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    title: "Real Insights",
    description: "Parents and teachers get a clear view of where students are struggling and how to help.",
    icon: Eye,
    color: "text-blue-500",
  },
  {
    title: "Exam Readiness",
    description: "Practice with questions that match the exact format of national exams (BECE & WASSCE).",
    icon: BookOpen,
    color: "text-purple-500",
  },
];

export const WhyUpgrade = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Why Upgrade?</h2>
          <p className="text-muted-foreground text-lg">Unlock the full power of AI-driven education.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border group hover:bg-secondary transition-all"
            >
              <div className={`${card.color} mb-8 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
