"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, ChevronRight, Star, BarChart3, Heart } from "lucide-react";
import Link from "next/link";

export const FeaturesHero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full w-fit mb-8">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">All-In-One Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground mb-8">
            Everything You Need to <span className="text-primary">Learn, Teach & Track</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
            StudyPal combines AI-powered learning, real-time analytics, school ranking systems, and smart communication tools for students, parents, and teachers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="#students">
              <button className="bg-primary text-background px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Get Started
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-secondary border border-border text-foreground px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-secondary/80 transition-all">
                Explore App
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Dashboard Preview Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative bg-card rounded-[3rem] border border-border p-8 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                  <Star className="text-background w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">AI Tutor Pro</h3>
                  <p className="text-xs text-muted-foreground">Always available to help</p>
                </div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-secondary flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-primary/20" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="p-6 bg-secondary rounded-3xl border border-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <BarChart3 className="text-blue-500 w-8 h-8" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Overall Score</p>
                    <p className="text-2xl font-black text-foreground">84%</p>
                  </div>
                </div>
                <div className="text-green-500 text-sm font-bold">+12%</div>
              </div>

              <div className="p-6 bg-secondary rounded-3xl border border-border flex items-center gap-4">
                <Heart className="text-red-500 w-8 h-8" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Parent Insight</p>
                  <p className="text-sm text-foreground">"Your child improved in Integrated Science!"</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};
