"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  PenTool, 
  LayoutDashboard, 
  BarChart3, 
  Trophy, 
  Zap 
} from "lucide-react";

const features = [
  {
    title: "AI Practice Tests",
    description: "Practice with timed objective exams that simulate real BECE & WASSCE conditions.",
    icon: FileText,
  },
  {
    title: "Essay AI Marking",
    description: "Get instant feedback on your compositions with AI analysis of grammar and structure.",
    icon: PenTool,
  },
  {
    title: "Parent Dashboard",
    description: "Parents can link to their children's accounts and track academic growth in real-time.",
    icon: LayoutDashboard,
  },
  {
    title: "Teacher Insights",
    description: "Teachers identify class-wide weak topics and monitor individual student performance.",
    icon: BarChart3,
  },
  {
    title: "School Rankings",
    description: "See how your school compares across Ghana with subject-based leaderboards.",
    icon: Trophy,
  },
  {
    title: "Smart Analytics",
    description: "AI-driven insights that pinpoint exactly which topics you need to study next.",
    icon: Zap,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-primary font-bold text-sm uppercase tracking-widest mb-4">Features</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            How StudyPal Changes Everything
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            StudyPal turns traditional learning into a guided, data-driven, and AI-powered journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-[2rem] group cursor-default"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                <feature.icon className="text-primary w-7 h-7 group-hover:text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
