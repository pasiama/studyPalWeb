"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes! You can cancel your subscription at any time directly within the app settings. You will continue to have access to your paid features until the end of your current billing period.",
  },
  {
    question: "What happens after I use my free tests?",
    answer: "Once you use your 3 free tests, you will still have access to your scores, but you will need to upgrade to a paid plan to take more tests and see detailed AI explanations.",
  },
  {
    question: "Can parents add multiple children to one plan?",
    answer: "Yes! The Parent Plan allows you to link multiple children using their unique invite codes, so you can monitor all of them from one dashboard.",
  },
  {
    question: "Do teachers get classroom tools for free?",
    answer: "Teachers can try basic features for free, but classroom management tools, student grouping, and advanced class analytics require a Teacher Plan subscription.",
  },
];

export const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Pricing FAQs</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about StudyPal billing.</p>
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
