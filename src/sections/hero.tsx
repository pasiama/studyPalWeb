"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star, ShieldCheck, GraduationCap, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-secondary border border-border px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">AI-Powered Education</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
            AI-Powered Learning for <span className="text-primary">JHS & SHS</span> Students in Ghana
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            StudyPal helps students practice exams, receive AI feedback, and improve faster with personalized learning insights for students, parents, and teachers.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/waitlist">
              <button className="bg-primary text-background px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 group">
                Start Learning Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <button className="bg-secondary border border-border text-foreground px-8 py-4 rounded-2xl font-bold text-lg hover:bg-secondary/80 transition-all">
              See How It Works
            </button>
          </div>

          <div className="flex flex-col gap-4 pt-8">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Trusted by students, parents & teachers</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm">BECE & WASSCE Prep</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm">Built for Ghana</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visual (Dashboard Mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-card p-6 rounded-[2.5rem] shadow-2xl border border-border">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Star className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Academic Progress</h3>
                  <p className="text-xs text-muted-foreground">Real-time AI Analysis</p>
                </div>
              </div>
              <div className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold">
                +14% This Week
              </div>
            </div>

            {/* Score Bars */}
            <div className="flex flex-col gap-6">
              {[
                { subject: "Mathematics", score: 88, color: "bg-primary" },
                { subject: "English Language", score: 75, color: "bg-blue-500" },
                { subject: "Integrated Science", score: 92, color: "bg-purple-500" },
              ].map((item) => (
                <div key={item.subject} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.subject}</span>
                    <span className="text-foreground font-bold">{item.score}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.score}%` }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insight Card Overlay */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -right-8 bottom-12 bg-card p-4 rounded-2xl border border-primary/20 w-64 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Rocket className="w-3.5 h-3.5 text-background" />
                </div>
                <span className="text-xs font-bold text-foreground uppercase tracking-tighter">AI Tutor Insight</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                "You're struggling with <span className="text-primary font-bold">Algebra</span>. Practice 5 more sets to master this topic."
              </p>
            </motion.div>
          </div>

          {/* Background Glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};


