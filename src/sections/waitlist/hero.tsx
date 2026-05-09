"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

export const WaitlistHero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden text-center">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full w-fit">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Limited Early Access</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold leading-tight tracking-tight text-foreground">
            Be the First to <br />
            <span className="text-primary">Experience AI</span> <br />
            Learning in Ghana
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            Join the StudyPal early access list and get notified before launch. Be part of the future of education in the West African landscape.
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-8 cursor-pointer"
            onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground opacity-50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
