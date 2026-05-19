"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 -z-10" />
      
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-[3rem] text-center border-primary/20 relative overflow-hidden"
        >
          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-foreground">
            Start Improving Your <br /> <span className="text-primary">Learning Today</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12">
            Join thousands of students across Ghana who are already using StudyPal to master their exams and reach their full potential.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button
              disabled
              title="Coming Soon"
              className="w-full md:w-auto bg-primary/40 text-background px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 opacity-50 cursor-not-allowed shadow-2xl shadow-primary/10"
            >
              <Download className="w-6 h-6" />
              Download App
            </button>
            <Link href="/waitlist" className="w-full md:w-auto">
              <button className="w-full bg-secondary border border-border text-foreground px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-secondary/80 transition-all">
                Join Waitlist
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
