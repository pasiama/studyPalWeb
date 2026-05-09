"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Target, Map, Lightbulb } from "lucide-react";

const aiFeatures = [
  {
    title: "AI Essay Grading",
    description: "Submit your English or French compositions and get instant scoring based on WAEC standards.",
    icon: MessageSquare,
  },
  {
    title: "AI Tutor Chat",
    description: "Stuck on a problem? Our 24/7 AI tutor explains concepts in a way that's easy to understand.",
    icon: Sparkles,
  },
  {
    title: "Weakness Detection",
    description: "Our algorithm scans your test results to identify exactly which topics are holding you back.",
    icon: Target,
  },
  {
    title: "Personalized Paths",
    description: "Receive a study plan tailored specifically to your weak areas and exam schedule.",
    icon: Map,
  },
  {
    title: "Smart Explanations",
    description: "Every wrong answer comes with a deep, AI-generated explanation so you never repeat a mistake.",
    icon: Lightbulb,
  },
];

export const AIFeatures = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              Intelligence Layer
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-foreground">
              Powered by Next-Gen <span className="text-primary">Artificial Intelligence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              StudyPal isn't just a test bank. It's a living learning assistant that understands your academic fingerprint and helps you improve where it matters most.
            </p>
            <button className="px-8 py-4 bg-secondary border border-border rounded-2xl font-bold hover:bg-secondary/80 text-foreground transition-all">
              Explore AI Capabilities
            </button>
          </motion.div>

          <div className="lg:w-1/2 flex flex-col gap-4">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex items-start gap-6 group hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <feature.icon className="text-primary w-6 h-6 group-hover:text-background" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
