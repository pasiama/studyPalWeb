"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Heart, Presentation } from "lucide-react";

const roles = [
  {
    title: "Students",
    subtitle: "Learn Smarter",
    icon: GraduationCap,
    items: [
      "AI-powered practice tests",
      "Instant feedback on essays",
      "Track your personal growth",
    ],
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    title: "Parents",
    subtitle: "Support Better",
    icon: Heart,
    items: [
      "Real-time performance alerts",
      "View detailed subject reports",
      "Support child's learning journey",
    ],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    title: "Teachers",
    subtitle: "Teach Easier",
    icon: Presentation,
    items: [
      "Monitor class-wide performance",
      "Identify common weak topics",
      "Create virtual learning spaces",
    ],
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
  },
];

export const UserRoles = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Built for Everyone in Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            StudyPal connects the three pillars of education into a single, cohesive intelligent ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] bg-gradient-to-br ${role.color} border border-border overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className={`${role.iconColor} mb-6`}>
                  <role.icon className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">{role.title}</h3>
                <p className="text-muted-foreground font-medium mb-8 uppercase tracking-widest text-xs">{role.subtitle}</p>
                
                <ul className="space-y-4">
                  {role.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full ${role.iconColor} bg-current`} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-10 w-full py-4 bg-secondary hover:bg-secondary/80 border border-border text-foreground font-bold rounded-2xl transition-all">
                  Learn More
                </button>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
