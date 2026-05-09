"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Presentation, PlusCircle, PieChart } from "lucide-react";

const teacherFeatures = [
  {
    title: "Student Performance Monitoring",
    description: "Deep dive into class-wide trends and individual student performance at a glance.",
    icon: Users,
  },
  {
    title: "Virtual Classrooms",
    description: "Create digital classes, invite students, and organize your teaching material efficiently.",
    icon: Presentation,
  },
  {
    title: "Test Creation Tools",
    description: "Quickly build custom tests and assignments from our extensive question bank.",
    icon: PlusCircle,
  },
  {
    title: "Weak Topic Analysis",
    description: "Instantly identify which topics the entire class is struggling with to focus your teaching.",
    icon: PieChart,
  },
];

export const TeacherFeatures = () => {
  return (
    <section id="teachers" className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Tools to Improve Teaching Impact</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empower your teaching with data-driven insights and easy-to-use classroom management tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teacherFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-[2rem] border border-border flex flex-col items-center text-center group hover:bg-secondary/50 transition-all"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-500 transition-colors">
                <feature.icon className="w-8 h-8 text-purple-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
