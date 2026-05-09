"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart2, PieChart, TrendingUp } from "lucide-react";

const analyticsModules = [
  {
    title: "Student Analytics",
    items: ["Subject-specific scores", "Topic weakness breakdown", "Daily progress trends"],
    icon: BarChart2,
    color: "text-primary",
  },
  {
    title: "Parent Analytics",
    items: ["Child performance overview", "Activity alerts", "Learning improvement tracking"],
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    title: "Teacher Analytics",
    items: ["Class performance summary", "Subject-wide weak points", "Student engagement metrics"],
    icon: PieChart,
    color: "text-purple-500",
  },
];

export const AnalyticsSystem = () => {
  return (
    <section id="analytics" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Understand Performance at Every Level</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Data-driven insights tailored for everyone involved in the student's success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {analyticsModules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border group hover:bg-secondary transition-all"
            >
              <div className={`${module.color} mb-8 group-hover:scale-110 transition-transform`}>
                <module.icon className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{module.title}</h3>
              <ul className="space-y-4">
                {module.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full bg-current ${module.color}`} />
                    <span className="text-sm font-medium">{item}</span>
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
