"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { name: "AI Practice Tests", student: true, parent: false, teacher: true },
  { name: "Essay Marking", student: true, parent: false, teacher: true },
  { name: "Child Tracking", student: false, parent: true, teacher: true },
  { name: "Detailed Analytics", student: true, parent: true, teacher: true },
  { name: "School Ranking", student: true, parent: true, teacher: true },
  { name: "Classroom Tools", student: false, parent: false, teacher: true },
  { name: "AI Tutor Access", student: true, parent: false, teacher: true },
];

export const ComparisonTable = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Compare Plans</h2>
          <p className="text-muted-foreground text-lg">Find the perfect plan for your specific needs.</p>
        </motion.div>

        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="py-6 px-4 text-left text-foreground font-bold uppercase tracking-widest text-xs">Feature</th>
                <th className="py-6 px-4 text-center text-foreground font-bold uppercase tracking-widest text-xs">Student</th>
                <th className="py-6 px-4 text-center text-foreground font-bold uppercase tracking-widest text-xs">Parent</th>
                <th className="py-6 px-4 text-center text-foreground font-bold uppercase tracking-widest text-xs">Teacher</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.name} className={`border-b border-border/50 hover:bg-secondary/30 transition-colors ${i === features.length - 1 ? "border-b-0" : ""}`}>
                  <td className="py-6 px-4 text-sm font-medium text-foreground">{f.name}</td>
                  <td className="py-6 px-4">
                    <div className="flex justify-center">
                      {f.student ? <Check className="w-5 h-5 text-primary" /> : <X className="w-5 h-5 text-muted-foreground/30" />}
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex justify-center">
                      {f.parent ? <Check className="w-5 h-5 text-blue-500" /> : <X className="w-5 h-5 text-muted-foreground/30" />}
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex justify-center">
                      {f.teacher ? <Check className="w-5 h-5 text-purple-500" /> : <X className="w-5 h-5 text-muted-foreground/30" />}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
