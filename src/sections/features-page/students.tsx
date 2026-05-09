"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, PenTool, Sparkles, TrendingUp, Search } from "lucide-react";

const studentFeatures = [
  {
    title: "AI Practice Tests",
    description: "Timed exams with instant scoring and detailed AI feedback on every answer.",
    icon: BookOpen,
  },
  {
    title: "Essay & Composition Marking",
    description: "AI evaluates your grammar, structure, and content using West African exam standards.",
    icon: PenTool,
  },
  {
    title: "Smart Explanations",
    description: "Don't just see the right answer—understand why it's right with clear AI explanations.",
    icon: Sparkles,
  },
  {
    title: "Progress Tracking",
    description: "Visual dashboards that show your improvement across all subjects and topics over time.",
    icon: TrendingUp,
  },
  {
    title: "Weakness Detection",
    description: "Our AI automatically identifies specific topics where you need more practice.",
    icon: Search,
  },
];

export const StudentFeatures = () => {
  return (
    <section id="students" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Powerful Learning Tools for Students</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Master your subjects with interactive tools designed to make learning intuitive and effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border group hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-background transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
