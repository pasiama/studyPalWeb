"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Layout, Database, Server, Sparkles, CreditCard } from "lucide-react";

const techs = [
  { name: "React Native", role: "Mobile App", icon: Smartphone },
  { name: "Next.js", role: "Web Platform", icon: Layout },
  { name: "Node.js", role: "Backend API", icon: Server },
  { name: "Prisma", role: "Database ORM", icon: Database },
  { name: "Gemini AI", role: "Intelligence", icon: Sparkles },
  { name: "Paystack", role: "Secure Payments", icon: CreditCard },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Powered by Modern Technology</h2>
          <p className="text-muted-foreground text-lg">We use world-class tools to build a world-class platform.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techs.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border flex flex-col items-center justify-center text-center group hover:border-primary/50 transition-all"
            >
              <t.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1 font-bold">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
