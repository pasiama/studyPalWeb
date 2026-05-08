"use client";

import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  MessageSquare, 
  Zap, 
  Target, 
  TrendingUp, 
  ShieldCheck 
} from "lucide-react";

const features = [
  {
    title: "Adaptive AI Tutoring",
    description: "Our AI adjusts its teaching style based on your learning speed and comprehension level.",
    icon: BrainCircuit,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Interactive Q&A",
    description: "Ask anything, anytime. Get instant, clear explanations for even the toughest concepts.",
    icon: MessageSquare,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    title: "Instant Feedback",
    description: "Receive real-time analysis of your practice answers to identify and fix mistakes immediately.",
    icon: Zap,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    title: "Smart Goal Setting",
    description: "Define your academic targets and let StudyPal create a personalized roadmap to achieve them.",
    icon: Target,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    title: "Progress Analytics",
    description: "Visualize your growth with detailed insights into your strengths and areas for improvement.",
    icon: TrendingUp,
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    title: "Secure Learning",
    description: "Your data and progress are protected with enterprise-grade security and privacy standards.",
    icon: ShieldCheck,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Supercharge Your Learning</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience education like never before with our cutting-edge AI features designed for modern students.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
