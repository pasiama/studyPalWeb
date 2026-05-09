"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Sign Up",
    description: "Register as a student, parent, or teacher in seconds.",
  },
  {
    step: "02",
    title: "Take AI Tests",
    description: "Attempt objective or essay questions with AI guidance.",
  },
  {
    step: "03",
    title: "Get Insights",
    description: "Receive instant scoring and deep topic-level analysis.",
  },
  {
    step: "04",
    title: "Improve Faster",
    description: "Focus on identified weak spots and grow academically.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-background relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Simple. Smart. Powerful.</h2>
          <p className="text-muted-foreground text-lg">Four steps to a better educational future.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-background border border-border rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.1)] transition-all duration-300">
                <span className="text-2xl font-black text-primary">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed px-4">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
