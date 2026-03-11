"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Engineered DP World",
    category: "Web Development",
    desc: "Achieved 98% speed optimization and 100% security for international reach.",
    image: "/websitepic.png",
  },
  {
    title: "Fintech Mobile App",
    category: "App Development",
    desc: "Secure, real-time banking experience with biometric authentication.",
    image: "/appdev.png",
  },
  {
    title: "Organic Search Growth",
    category: "SEO & Content",
    desc: "Increased organic traffic by 300% for a global SaaS platform.",
    image: "/seo.png",
  },
  {
    title: "Modern Brand Identity",
    category: "Graphic Design",
    desc: "Complete visual rebranding and guidelines for a tech startup.",
    image: "/branding.png",
  },
  {
    title: "AI Chatbot Integration",
    category: "AI Solutions",
    desc: "Automating customer support with custom trained LLM models.",
    image: "/ai.png",
  },
  {
    title: "Cloud Infrastructure",
    category: "DevOps",
    desc: "Zero-downtime migration to AWS for a high-traffic media house.",
    image: "/cloude.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const OurWork = () => {
  return (
    <section className="bg-deep-purple-gradient py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-glow/20 blur-[120px] rounded-full pointer-events-none" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary-glow)]" />
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[9px]">Portfolio</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-foreground text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
            >
              Selected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic font-light">Works.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-sm max-w-[300px] leading-relaxed font-medium border-l border-border pl-8 mb-4"
          >
            We partner with global brands to engineer high-performance digital gateways.
          </motion.p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2.5rem] bg-overlay shadow-2xl transition-all duration-700 group-hover:shadow-primary/20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    className="w-20 h-20 rounded-full bg-foreground flex items-center justify-center text-background"
                  >
                    <ArrowUpRight size={32} />
                  </motion.div>
                </div>
              </div>

              <div className="mt-10 px-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-[10px] font-black uppercase tracking-widest">
                    {item.category}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    className="h-[1px] bg-border"
                  />
                </div>

                <h3 className="text-foreground text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurWork;