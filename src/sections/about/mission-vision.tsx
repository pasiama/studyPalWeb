"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export const MissionVision = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card p-10 rounded-[2.5rem] border border-border shadow-xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To empower students in Ghana with AI-driven learning tools that improve understanding, performance, and confidence. We believe every student has potential that can be unlocked through personalized guidance.
            </p>
          </div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card p-10 rounded-[2.5rem] border border-border shadow-xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To become the leading AI education ecosystem in Africa, where every student, teacher, and parent is connected through intelligent learning systems that make excellence reachable for everyone.
            </p>
          </div>
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-blue-500/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
        </motion.div>
      </div>
    </section>
  );
};
