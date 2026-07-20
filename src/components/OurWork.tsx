"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Code,
  Smartphone,
  Search,
  Palette,
  Bot,
  ArrowUpRight,
  Video
} from "lucide-react";

const services = [
  {
    title: "Engineered DP World",
    category: "Web Development",
    desc: "Achieved 98% speed optimization and 100% security for international reach.",
    icon: Code,
    glowColor: "from-secondary/20 via-primary/10 to-transparent",
    url: "/services/web-development",
  },
  {
    title: "Fintech Mobile App",
    category: "App Development",
    desc: "Secure, real-time banking experience with biometric authentication.",
    icon: Smartphone,
    glowColor: "from-emerald-500/20 via-accent/10 to-transparent",
    url: "/services/mobile-app",
  },
  {
    title: "Organic Search Growth",
    category: "SEO & Content",
    desc: "Increased organic traffic by 300% for a global SaaS platform.",
    icon: Search,
    glowColor: "from-amber-500/20 via-primary/10 to-transparent",
    url: "/services/seo",
  },
  {
    title: "Modern Brand Identity",
    category: "Graphic Design",
    desc: "Complete visual rebranding and guidelines for a tech startup.",
    icon: Palette,
    glowColor: "from-pink-500/20 via-accent/10 to-transparent",
    url: "/services/graphic-design",
  },
  {
    title: "AI Chatbot Integration",
    category: "AI Solutions",
    desc: "Automating customer support with custom trained LLM models.",
    icon: Bot,
    glowColor: "from-primary-glow/25 via-primary/10 to-transparent",
    url: "/services/ai",
  },
  {
    title: "Video Editing",
    category: "Post-Production",
    desc: "Professional video editing, color grading, and cinematic transitions for high-impact content.",
    icon: Video,
    glowColor: "from-secondary/20 via-accent/10 to-transparent",
    url: "/services/video-editing",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const OurServices = () => {
  return (
    <section className="bg-background py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-foreground">
      {/* Background Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary-glow/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-secondary/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 md:mb-28">
          {/* Left Column: Badge & Heading */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-border backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-primary font-bold tracking-wider uppercase text-[11px]">
                Featured Services
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-foreground text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              A Wide Range of <br className="hidden sm:block" />
              Digital Solutions
            </motion.h2>
          </div>

          {/* Right Column: Description with Left Vertical Accent Line */}
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4 max-w-sm lg:pb-2 text-left"
          >
            <div className="w-[3px] h-16 bg-gradient-to-b from-primary via-accent to-primary rounded-full shrink-0" />
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
              We craft high-impact web platforms, mobile apps, and intelligent automation built to scale your business globally.
            </p>
          </motion.div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {services.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={item.url}
                  className="group relative bg-overlay hover:bg-white/[0.05] backdrop-blur-xl border border-border hover:border-primary/50 rounded-3xl p-8 pt-12 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary-glow/10 flex flex-col justify-between h-full block"
                >
                  {/* Custom Gradient Accent Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${item.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

                  {/* Top Badge Icon */}
                  <div className="absolute -top-6 left-8 z-20">
                    <div className="w-14 h-14 rounded-2xl bg-background border border-border group-hover:border-primary/60 shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-primary-glow/20">
                      <IconComponent className="w-6 h-6 text-primary group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Card Main Body */}
                  <div className="relative z-10 flex flex-col items-start text-left pt-2">
                    <span className="text-primary text-[11px] font-bold tracking-widest uppercase mb-2">
                      {item.category}
                    </span>

                    <h3 className="text-foreground text-xl font-bold tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Action Section */}
                  <div className="relative z-10 mt-8 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-medium text-muted group-hover:text-foreground transition-colors duration-200">
                      Learn More
                    </span>
                    <div className="w-9 h-9 rounded-full bg-primary/10 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background group-hover:border-primary transition-all duration-300">
                      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default OurServices;