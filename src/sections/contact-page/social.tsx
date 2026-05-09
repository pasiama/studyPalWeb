"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, MessageCircle, Send, Users } from "lucide-react";

const socials = [
  { name: "WhatsApp Channel", icon: MessageCircle, link: "#", color: "hover:text-green-500" },
  { name: "Instagram", icon: Globe, link: "#", color: "hover:text-pink-500" },
  { name: "Twitter / X", icon: Send, link: "#", color: "hover:text-blue-400" },
  { name: "LinkedIn", icon: Users, link: "#", color: "hover:text-blue-700" },
];

export const SocialSection = () => {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Follow StudyPal</h2>
          <p className="text-muted-foreground">Stay updated with the latest in Ghanaian education technology.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center gap-4 group transition-all ${social.color}`}
            >
              <div className="w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-current transition-all shadow-sm">
                <social.icon className="w-8 h-8" />
              </div>
              <span className="text-sm font-bold text-muted-foreground group-hover:text-current">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
