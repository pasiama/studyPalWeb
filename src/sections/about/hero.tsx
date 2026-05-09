"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Rocket } from "lucide-react";
import Link from "next/link";

export const AboutHero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden text-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full w-fit">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Mission</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
            Reimagining Education for <br />
            <span className="text-primary">Every Student</span> in Ghana
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            StudyPal is an AI-powered learning platform designed to help students practice smarter, learn faster, and improve continuously through personalized feedback, teacher support, and parent involvement.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="#features">
              <button className="bg-primary text-background px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                Explore Features
              </button>
            </Link>
            <Link href="/">
              <button className="bg-secondary border border-border text-foreground px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-secondary/80 transition-all">
                Start Learning
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
