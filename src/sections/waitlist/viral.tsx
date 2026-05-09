"use client";

import React from "react";
import { motion } from "framer-motion";
import { Share2, Copy, MessageCircle, Send } from "lucide-react";

export const ViralShare = () => {
  const shareLink = "https://studypal.edu.gh/waitlist?ref=user123";

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <Share2 className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Invite Friends & Get Priority</h2>
          <p className="text-muted-foreground text-lg">Every friend who joins using your link moves you up the queue for earlier access.</p>
        </motion.div>

        <div className="bg-card p-6 rounded-3xl border border-border flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto">
          <div className="flex-grow bg-secondary border border-border rounded-xl px-4 py-3 text-sm font-mono text-muted-foreground truncate w-full md:w-auto text-left">
            {shareLink}
          </div>
          <button className="bg-primary text-background px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-all w-full md:w-auto justify-center">
            <Copy className="w-4 h-4" />
            Copy Link
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button className="p-4 bg-green-500/10 text-green-500 rounded-2xl hover:bg-green-500 hover:text-white transition-all shadow-lg shadow-green-500/5">
            <MessageCircle className="w-6 h-6" />
          </button>
          <button className="p-4 bg-blue-500/10 text-blue-500 rounded-2xl hover:bg-blue-500 hover:text-white transition-all shadow-lg shadow-blue-500/5">
            <Send className="w-6 h-6" />
          </button>
          <button className="p-4 bg-primary/10 text-primary rounded-2xl hover:bg-primary hover:text-background transition-all shadow-lg shadow-primary/5">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};
