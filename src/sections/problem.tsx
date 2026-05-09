"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, EyeOff, Users, MessageSquareOff } from "lucide-react";

const problems = [
  {
    title: "Memorization over Understanding",
    description: "Students often memorize answers without grasping core concepts.",
    icon: BrainCircuit,
  },
  {
    title: "Lack of Parent Insight",
    description: "Parents often don't know where their child is struggling until report cards arrive.",
    icon: EyeOff,
  },
  {
    title: "Manual Class Management",
    description: "Teachers are overwhelmed with manual marking and tracking for large classes.",
    icon: Users,
  },
  {
    title: "Zero Personalized Feedback",
    description: "Standard learning lacks the AI-driven feedback needed to fix specific weak topics.",
    icon: MessageSquareOff,
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            The Problem with Traditional Learning
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Education in Ghana is evolving, yet many students and parents still face these critical challenges every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="text-red-500 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
