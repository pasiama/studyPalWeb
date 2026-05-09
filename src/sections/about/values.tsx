"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Maximize, Search, HeartHandshake } from "lucide-react";

const values = [
  {
    title: "Innovation",
    description: "We use AI to transform learning into an intelligent, guided experience.",
    icon: Lightbulb,
  },
  {
    title: "Accessibility",
    description: "Education should be available to every student, regardless of their location.",
    icon: Maximize,
  },
  {
    title: "Transparency",
    description: "Students, parents, and teachers stay informed with clear, honest data.",
    icon: Search,
  },
  {
    title: "Impact",
    description: "We aim to improve real academic outcomes for the future of Ghana.",
    icon: HeartHandshake,
  },
];

export const ValuesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">What We Stand For</h2>
          <p className="text-muted-foreground text-lg">Our core values drive every decision we make.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((v, index) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-secondary rounded-3xl flex items-center justify-center mb-8 border border-border group hover:bg-primary transition-all duration-300">
                <v.icon className="w-10 h-10 text-primary group-hover:text-background transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed px-4">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
