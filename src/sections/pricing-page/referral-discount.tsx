"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, Share2 } from "lucide-react";

export const ReferralDiscount = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary p-12 md:p-20 rounded-[4rem] text-background text-center relative overflow-hidden"
        >
          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="w-20 h-20 bg-background/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Gift className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Earn While You Learn</h2>
            <p className="text-background/80 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Earn ₵5 for every friend who joins StudyPal. Once you reach ₵50, you can withdraw your earnings directly.
            </p>

            <div className="bg-background/10 border border-white/20 p-6 rounded-3xl max-w-lg mx-auto">
              <div className="flex justify-between items-center mb-4 px-2">
                <span className="text-xs font-black uppercase tracking-widest text-background/60">Referral Goal</span>
                <span className="text-xs font-black uppercase tracking-widest">3 / 10 Referrals</span>
              </div>
              <div className="h-4 bg-background/20 rounded-full overflow-hidden mb-8 border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "30%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-background"
                />
              </div>
              <button className="w-full bg-background text-primary py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all">
                <Share2 className="w-6 h-6" />
                Share Referral Link
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
