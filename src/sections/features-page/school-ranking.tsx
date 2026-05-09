"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, ShieldCheck, PieChart, Users } from "lucide-react";

const schoolFeatures = [
  {
    title: "School Leaderboards",
    description: "Real-time rankings showing how schools across Ghana perform in national exams.",
    icon: Trophy,
  },
  {
    title: "Subject Strength Analysis",
    description: "Identify which schools are performing best in specific subjects like Math or Science.",
    icon: ShieldCheck,
  },
  {
    title: "Grade Distribution",
    description: "Detailed A–F grade breakdown per school to visualize academic excellence.",
    icon: PieChart,
  },
  {
    title: "Student Volume Insights",
    description: "Track participation levels and see which schools have the most active learners.",
    icon: Users,
  },
];

export const SchoolRankingFeatures = () => {
  return (
    <section id="schools" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Compare Academic Performance</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our school ranking system brings transparency and healthy competition to the educational landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schoolFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl border border-border flex items-center gap-8 group hover:bg-secondary transition-all"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 border border-primary/20 group-hover:bg-primary transition-colors">
                <feature.icon className="w-10 h-10 text-primary group-hover:text-background transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
