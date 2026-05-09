"use client";

import React from "react";
import { motion } from "framer-motion";
import { School, Users, Award, TrendingUp } from "lucide-react";

const schools = [
  { name: "Achimota School", students: "1,240", rating: "A+", performance: 94 },
  { name: "Wesley Girls' High", students: "1,100", rating: "A+", performance: 96 },
  { name: "Prempeh College", students: "1,350", rating: "A", performance: 92 },
  { name: "Presby Boys (Presec)", students: "1,420", rating: "A+", performance: 95 },
];

export const SchoolRankingPreview = () => {
  return (
    <section id="schools" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              See How Schools Perform
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Healthy academic competition drives excellence. View real-time rankings based on student performance across Mathematics, Science, and more.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <Award className="text-primary w-5 h-5" />
                <span>Subject-based leaderboards</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Users className="text-primary w-5 h-5" />
                <span>Student participation counts</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <TrendingUp className="text-primary w-5 h-5" />
                <span>Grade distribution insights</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 w-full"
          >
            <div className="bg-card rounded-[2.5rem] overflow-hidden border border-border shadow-xl">
              <div className="bg-secondary p-6 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-foreground flex items-center gap-2">
                  <School className="w-5 h-5 text-primary" />
                  National School Leaderboard
                </h3>
                <span className="text-xs text-muted-foreground font-medium">Updated 5m ago</span>
              </div>
              <div className="p-6 flex flex-col gap-4">
                {schools.map((school, index) => (
                  <div 
                    key={school.name}
                    className="flex items-center justify-between p-4 bg-secondary rounded-2xl hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-black text-muted-foreground group-hover:text-primary transition-colors">0{index + 1}</span>
                      <div>
                        <h4 className="font-bold text-foreground">{school.name}</h4>
                        <p className="text-xs text-muted-foreground">{school.students} Active Students</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="hidden md:block">
                        <div className="w-32 h-1.5 bg-background rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${school.performance}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-primary" 
                          />
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center font-bold text-primary">
                        {school.rating}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-secondary border-t border-border text-center">
                <button className="text-sm font-bold text-primary hover:underline">View All Schools</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
