"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, BookOpen, UserCheck } from "lucide-react";

const metrics = [
  { label: "Improved Test Scores", value: "35%", icon: TrendingUp, color: "text-green-500" },
  { label: "Faster Learning Cycles", value: "2.4x", icon: Clock, color: "text-blue-500" },
  { label: "Subject Mastery", value: "88%", icon: BookOpen, color: "text-primary" },
  { label: "Teacher Visibility", value: "100%", icon: UserCheck, color: "text-purple-500" },
];

export const ImpactSection = () => {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Changing How Students Learn</h2>
          <p className="text-muted-foreground text-lg">Measured results that speak for themselves.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[2rem] border border-border text-center flex flex-col items-center group"
            >
              <div className={`${metric.color} mb-6 group-hover:scale-110 transition-transform`}>
                <metric.icon className="w-10 h-10" />
              </div>
              <div className="text-4xl font-black text-foreground mb-2">{metric.value}</div>
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
