"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { api } from "@/lib/api";

export const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    setError(null);
    setStatus("loading");

    const data = new FormData(e.currentTarget);

    try {
      await api.sendContact({
        name: data.get("name") as string,
        email: data.get("email") as string,
        role: data.get("role") as string,
        subject: data.get("subject") as string,
        message: data.get("message") as string,
      });
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section id="form" className="scroll-mt-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-card p-8 md:p-12 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-foreground">Send Us a Message</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
          </motion.div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent!</h3>
                <p className="text-muted-foreground mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-primary font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Your Role</label>
                    <select
                      required
                      name="role"
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                    >
                      <option value="student">Student</option>
                      <option value="parent">Parent</option>
                      <option value="teacher">Teacher</option>
                      <option value="school">School / Institution</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Subject</label>
                    <input
                      required
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-foreground ml-1">Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 px-4 py-3 rounded-xl">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full bg-primary text-background font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
