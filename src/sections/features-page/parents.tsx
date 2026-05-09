"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Users, Bell, LineChart } from "lucide-react";

const parentFeatures = [
  {
    title: "Real-Time Tracking",
    description: "Instantly view your child's scores, progress trends, and current weak subjects.",
    icon: Eye,
  },
  {
    title: "Child Linking System",
    description: "Easily link multiple children to one account using secure invite codes.",
    icon: Users,
  },
  {
    title: "Alerts & Notifications",
    description: "Receive instant mobile alerts when performance drops or significant improvements are made.",
    icon: Bell,
  },
  {
    title: "Comparative Insights",
    description: "See how your child's performance compares to their previous results and goals.",
    icon: LineChart,
  },
];

export const ParentFeatures = () => {
  return (
    <section id="parents" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-secondary/30 rounded-[3rem] p-8 md:p-16 border border-border">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Stay Connected to Your Child’s Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide parents with the transparency they need to support their child's academic growth effectively.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {parentFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-3xl border border-border flex items-start gap-6 group"
              >
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-500 transition-colors">
                  <feature.icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
