"use client";

import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Smartphone, ShieldCheck } from "lucide-react";

const methods = [
  { name: "Mobile Money", icon: Smartphone, description: "MTN, Vodafone, AirtelTigo" },
  { name: "Bank Cards", icon: CreditCard, description: "Visa, Mastercard" },
  { name: "Bank Transfer", icon: ShieldCheck, description: "Instant verification" },
];

export const PaymentMethods = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-secondary p-12 md:p-20 rounded-[4rem] border border-border overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Flexible Payments for Everyone</h2>
            <p className="text-muted-foreground text-lg">We use Paystack to ensure secure local payments in Ghana.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {methods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-3xl border border-border flex flex-col items-center text-center group hover:border-primary transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{method.name}</h4>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-black">{method.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center items-center gap-2 text-muted-foreground text-sm font-medium">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            Secure local payments powered by Paystack
          </div>
        </div>
      </div>
    </section>
  );
};
