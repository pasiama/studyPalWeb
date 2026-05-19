"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-09-01T00:00:00Z");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: String(timeLeft.days).padStart(2, "0") },
    { label: "Hours", value: String(timeLeft.hours).padStart(2, "0") },
    { label: "Minutes", value: String(timeLeft.minutes).padStart(2, "0") },
    { label: "Seconds", value: String(timeLeft.seconds).padStart(2, "0") },
  ];

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

            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tight">
              Preparing for National Rollout
            </h2>
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em] mb-12">
              June &ndash; August 2026
            </p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
              {units.map((item) => (
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
