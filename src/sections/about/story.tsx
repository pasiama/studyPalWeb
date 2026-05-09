"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const painPoints = [
  "Students memorize instead of understanding",
  "Teachers lack tools for personalized learning",
  "Parents cannot track academic progress in real time",
  "Schools lack performance transparency",
];

export const OurStory = () => {
  return (
    <section className="py-24 bg-background border-y border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">Why StudyPal Exists</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                The seed for StudyPal was planted when we noticed a recurring pattern in the Ghanaian education system: a heavy reliance on rote memorization over conceptual mastery.
              </p>
              <p>
                We realized that for students to truly excel, they needed more than just textbooks—they needed immediate feedback, personalized guidance, and a support system that connected them to their parents and teachers in real-time.
              </p>
              <p className="font-bold text-foreground">
                StudyPal bridges this gap using AI, analytics, and structured learning systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-secondary p-8 md:p-12 rounded-[3rem] border border-border shadow-inner"
          >
            <h3 className="text-xl font-bold mb-8 text-foreground uppercase tracking-widest text-center">The Challenge We're Solving</h3>
            <div className="space-y-6">
              {painPoints.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
