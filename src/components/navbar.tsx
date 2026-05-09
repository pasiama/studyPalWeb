"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Schools", href: "/#schools" },
  { name: "Contact", href: "/contact" },
];

import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Rocket className="text-background w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">StudyPal</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/waitlist">
            <button className="text-sm font-medium text-foreground px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
              Get Started
            </button>
          </Link>
          <button className="bg-primary text-background text-sm font-bold px-5 py-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20">
            Download App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <div className="flex items-center justify-between px-2 mb-2">
                <span className="text-sm font-medium text-muted-foreground">Appearance</span>
                <ThemeToggle />
              </div>
              <Link href="/waitlist" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-3 text-foreground border border-border rounded-xl">
                  Get Started
                </button>
              </Link>
              <button className="w-full py-3 bg-primary text-background font-bold rounded-xl">
                Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
