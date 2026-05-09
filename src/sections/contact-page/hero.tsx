"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export const ContactHero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden text-center">
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
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Contact Us</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-foreground">
            Get in Touch with <span className="text-primary">StudyPal</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            We’re here to support students, parents, teachers, and schools. Reach out for help, partnerships, or feedback.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
