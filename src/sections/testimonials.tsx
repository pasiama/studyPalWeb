"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "StudyPal's AI marking helped me understand why I was losing marks in English compositions. My grades jumped from a C to an A within one term!",
    author: "Kofi Mensah",
    role: "SHS Student, Accra",
  },
  {
    quote: "As a parent, I finally have peace of mind. I can see my daughter's progress every day on my dashboard without having to ask her constantly.",
    author: "Mrs. Evelyn Boateng",
    role: "Parent",
  },
  {
    quote: "Identifying weak topics across 50 students used to take me weeks. Now, StudyPal shows me the common gaps in seconds. It's a game changer for teachers.",
    author: "Mr. Samuel Adu",
    role: "JHS Teacher",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            What Students & Teachers Say
          </h2>
          <p className="text-muted-foreground text-lg">Real impact across Ghana's educational landscape.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] relative group hover:border-primary/20 transition-all duration-500"
            >
              <div className="absolute -top-6 left-10 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Quote className="text-background w-6 h-6 fill-background" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 pt-4">
                "{testimonial.quote}"
              </p>
              <div className="pt-6 border-t border-border">
                <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                <p className="text-xs text-primary font-medium uppercase tracking-widest mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
