"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do I register my school?",
    answer: "Schools can register by reaching out via our School Partnerships channel or filling out the contact form. Our team will guide you through the onboarding process.",
  },
  {
    question: "How does payment work for the app?",
    answer: "We use Paystack for secure local payments. You can pay via Mobile Money (MoMo) or card directly within the StudyPal mobile app.",
  },
  {
    question: "Can teachers join individually?",
    answer: "Yes! Teachers can create accounts independently to manage their classes and track their students' progress.",
  },
  {
    question: "How do parents track their children?",
    answer: "Parents can link to their child's account using a unique invite code generated in the student's app. Once linked, performance data is synced in real-time.",
  },
];

export const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">Common Questions</h2>
          <p className="text-muted-foreground">Quick answers to things you might be wondering about.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-secondary transition-colors"
              >
                <span className="font-bold text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted-foreground text-sm leading-relaxed border-t border-border/50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
