"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Presentation, School } from "lucide-react";

const beneficiaries = [
  {
    role: "Students",
    icon: GraduationCap,
    items: ["Practice exams", "AI explanations", "Progress tracking"],
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    role: "Parents",
    icon: Heart,
    items: ["Monitor performance", "Receive alerts", "Understand weaknesses"],
    color: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    role: "Teachers",
    icon: Presentation,
    items: ["Track student progress", "Identify weak topics", "Improve outcomes"],
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    role: "Schools",
    icon: School,
    items: ["Benchmarking", "Ranking systems", "Academic insights"],
    color: "bg-green-500/10",
    iconColor: "text-green-500",
  },
];

export const WhoWeServe = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Built for the Entire Ecosystem</h2>
          <p className="text-muted-foreground text-lg">StudyPal is a collaborative platform that brings everyone together.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficiaries.map((b, index) => (
            <motion.div
              key={b.role}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-[2.5rem] border border-border flex flex-col items-center text-center group hover:bg-secondary/50 transition-all"
            >
              <div className={`w-20 h-20 ${b.color} ${b.iconColor} rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <b.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{b.role}</h3>
              <ul className="space-y-3">
                {b.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2 justify-center">
                    <div className={`w-1.5 h-1.5 rounded-full ${b.iconColor} bg-current`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
