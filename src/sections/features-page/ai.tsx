"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, PenTool, GitBranch, Zap } from "lucide-react";

const aiFeatures = [
  {
    title: "AI Tutor",
    description: "Always-on assistant providing interactive explanations for any subject or complex concept.",
    icon: Bot,
  },
  {
    title: "Essay Grading AI",
    description: "Evaluates written compositions with detailed reasoning and actionable improvement feedback.",
    icon: PenTool,
  },
  {
    title: "Personalized Paths",
    description: "Intelligently suggests exactly what topics you should study next based on your performance.",
    icon: GitBranch,
  },
  {
    title: "Smart Explanations Cache",
    description: "Lightning-fast access to millions of AI-generated answers, optimized for performance.",
    icon: Zap,
  },
];

export const AIFeaturesDetailed = () => {
  return (
    <section id="ai" className="scroll-mt-32 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-primary/10 via-background to-blue-500/10 border border-primary/20 overflow-hidden">
          {/* Animated Background Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">AI That Understands How You Learn</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proprietary intelligence layer transforms passive study into an active, guided learning journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0 border border-primary/30">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
