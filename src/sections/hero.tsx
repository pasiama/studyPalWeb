"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-white/5 border-white/10 text-primary gap-2 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Gen AI Learning Platform</span>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
        >
          Master any subject <br />
          <span className="text-gradient">with your AI Pal.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          StudyPal uses advanced AI to personalize your learning journey. 
          Understand complex concepts, practice with smart assessments, 
          and excel in your studies like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20 gap-2">
            Start Learning Free <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-medium glass border-white/10 gap-2">
            <Play className="w-5 h-5 fill-current" /> Watch Demo
          </Button>
        </motion.div>

        {/* Hero Image/Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="glass-card rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-slate-900/50 flex items-center justify-center border-t border-white/10">
               {/* I'll use a CSS pattern here for now since I can't generate images yet without a specific tool call, but wait, I HAVE a generate_image tool! */}
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 opacity-50 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8 p-12 w-full h-full opacity-20">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-full bg-white/10 rounded-xl" />
                    ))}
                  </div>
               </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-bounce" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
