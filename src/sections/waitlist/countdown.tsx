"use client";

import React from "react";
import { motion } from "framer-motion";

export const LaunchCountdown = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative p-12 md:p-20 rounded-[4rem] bg-gradient-to-br from-primary/20 via-background to-blue-500/20 border border-border overflow-hidden text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full w-fit mb-8 shadow-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-foreground">Launching Soon</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-12 tracking-tight">
              Preparing for National Rollout
            </h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
              {[
                { label: "Days", value: "24" },
                { label: "Hours", value: "12" },
                { label: "Minutes", value: "45" },
                { label: "Seconds", value: "30" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="text-4xl md:text-6xl font-black text-primary mb-2 tabular-nums">
                    {item.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-16 text-muted-foreground text-sm font-medium uppercase tracking-[0.2em]">
              Building the future of education in Ghana
            </p>
          </motion.div>

          {/* Background Animated Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};
