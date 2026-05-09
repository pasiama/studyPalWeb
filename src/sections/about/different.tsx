"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, BarChart2, ShieldCheck, PenTool } from "lucide-react";

const diffFeatures = [
  {
    title: "AI-Powered Learning",
    description: "Personalized explanations and feedback that adapt to your pace.",
    icon: Sparkles,
  },
  {
    title: "Parent Visibility",
    description: "Real-time student performance tracking directly on the parent dashboard.",
    icon: Eye,
  },
  {
    title: "Teacher Insights",
    description: "Identify weak topics instantly for the entire class or individual students.",
    icon: BarChart2,
  },
  {
    title: "School Performance",
    description: "Compare academic performance across schools with subject rankings.",
    icon: ShieldCheck,
  },
  {
    title: "Essay Intelligence",
    description: "AI grading for both objective and written answers following WAEC standards.",
    icon: PenTool,
  },
];

export const DifferentFeatures = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Not Just Another Learning App</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            StudyPal is built from the ground up to address the unique needs of the West African educational landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diffFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-[2rem] border border-border group hover:border-primary/30 transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
