"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Students", id: "students" },
  { name: "Parents", id: "parents" },
  { name: "Teachers", id: "teachers" },
  { name: "AI System", id: "ai" },
  { name: "Analytics", id: "analytics" },
  { name: "School Ranking", id: "schools" },
  { name: "Referrals", id: "referrals" },
];

export const FeaturesNav = () => {
  const [activeTab, setActiveTab] = useState("students");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 600);

      // Simple active tab tracking
      const sections = tabs.map((tab) => document.getElementById(tab.id));
      const scrollPos = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section && scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveTab(tabs[index].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={cn(
        "z-40 w-full transition-all duration-300",
        isSticky ? "fixed top-20 left-0 bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4" : "relative py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-primary text-background shadow-lg shadow-primary/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border"
              )}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
