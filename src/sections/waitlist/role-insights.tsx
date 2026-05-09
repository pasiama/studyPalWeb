"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Presentation } from "lucide-react";

const insights = [
  {
    role: "Students",
    benefit: "Access world-class BECE & WASSCE preparation tools powered by generative AI.",
    icon: GraduationCap,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    role: "Parents",
    benefit: "Finally understand your child's academic weaknesses with real-time analytics.",
    icon: Heart,
    color: "bg-red-500/10 text-red-500",
  },
  {
    role: "Teachers",
    benefit: "Save hours of marking and get instant insights into class-wide knowledge gaps.",
    icon: Presentation,
    color: "bg-purple-500/10 text-purple-500",
  },
];

export const RoleInsights = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.role}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 ${insight.color} rounded-[2.5rem] flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform`}>
                <insight.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{insight.role}</h3>
              <p className="text-muted-foreground leading-relaxed px-6">{insight.benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
