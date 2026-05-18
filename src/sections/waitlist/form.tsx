"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Phone, School, CheckCircle2, Loader2, ArrowRight, AlertCircle } from "lucide-react";
import { api } from "@/lib/api";

export const WaitlistForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);
  const [role, setRole] = useState("student");

  const handleSubmit = async (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    setError(null);
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await api.joinWaitlist({
        name: data.get("name") as string,
        email: data.get("email") as string,
        phone: data.get("phone") as string,
        role,
        school: (data.get("school") as string) || undefined,
      });
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section id="waitlist-form" className="py-12 scroll-mt-32">
      <div className="max-w-xl mx-auto px-6">
        <div className="bg-card p-8 md:p-12 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">You're on the List!</h3>
                <p className="text-muted-foreground mb-8">We'll notify you as soon as early access begins. Check your email for a special confirmation.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-secondary text-foreground px-6 py-3 rounded-xl font-bold hover:bg-secondary/80 transition-all"
                >
                  Join with another account
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Join the Waitlist</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Role Selector */}
                  <div className="grid grid-cols-3 gap-2 bg-secondary p-1.5 rounded-2xl border border-border mb-8">
                    {["student", "parent", "teacher"].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                          role === r ? "bg-primary text-background shadow-sm" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="w-full bg-secondary border border-border rounded-2xl pl-12 pr-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-secondary border border-border rounded-2xl pl-12 pr-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="Phone Number (for SMS alerts)"
                        className="w-full bg-secondary border border-border rounded-2xl pl-12 pr-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div className="relative">
                      <School className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        name="school"
                        type="text"
                        placeholder="School Name (Optional)"
                        className="w-full bg-secondary border border-border rounded-2xl pl-12 pr-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
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
                    className="w-full bg-primary text-background font-black py-5 rounded-[2rem] flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/20 disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-6 h-6" />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest font-bold px-4">
                    By joining, you agree to our privacy policy and terms of early access.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
