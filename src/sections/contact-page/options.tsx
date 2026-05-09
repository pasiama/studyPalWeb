"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, School, Presentation } from "lucide-react";

const options = [
  {
    title: "WhatsApp Support",
    description: "Best for fast, instant support for students and parents.",
    icon: MessageCircle,
    btnText: "Chat on WhatsApp",
    link: "https://wa.me/233000000000", // Placeholder
    color: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    title: "Email Support",
    description: "For detailed inquiries or technical issues.",
    icon: Mail,
    btnText: "Send Email",
    link: "mailto:support@studypal.edu.gh",
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    title: "School Partnerships",
    description: "For schools interested in onboarding their students.",
    icon: School,
    btnText: "Partner With Us",
    link: "#form",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Teacher Support",
    description: "Dedicated onboarding channel for educators.",
    icon: Presentation,
    btnText: "Teacher Help",
    link: "#form",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
];

export const ContactOptions = () => {
  return (
    <section className="scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Choose How You Want to Reach Us</h2>
          <p className="text-muted-foreground text-lg">We have dedicated channels for every member of our ecosystem.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-[2.5rem] border border-border flex flex-col items-center text-center group hover:bg-secondary transition-all"
            >
              <div className={`w-20 h-20 ${option.color} ${option.iconColor} rounded-[2rem] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <option.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{option.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">{option.description}</p>
              <a 
                href={option.link}
                className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all border border-border hover:bg-primary hover:text-background flex items-center justify-center gap-2`}
              >
                {option.btnText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
