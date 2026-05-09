"use client";

import React from "react";
import Link from "next/link";
import { Rocket, Mail, MessageCircle, Globe, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Rocket className="text-background w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">StudyPal</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Empowering students in Ghana with AI-driven learning tools, personalized feedback, and comprehensive exam preparation.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors group border border-border">
                <Globe className="w-4 h-4 text-muted-foreground group-hover:text-background" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors group border border-border">
                <Send className="w-4 h-4 text-muted-foreground group-hover:text-background" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-colors group border border-border">
                <MessageCircle className="w-4 h-4 text-muted-foreground group-hover:text-background" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Product</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/#schools" className="text-sm text-muted-foreground hover:text-primary transition-colors">School Rankings</Link></li>
              <li><Link href="/features#ai" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Tutor</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Support</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@studypal.edu.gh</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span>WhatsApp Support</span>
              </div>
              <div className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground/60">
                <p>Available Mon-Fri</p>
                <p>8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          <p>© 2026 StudyPal Education. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
