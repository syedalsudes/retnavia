"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "DP World Logistics Platform",
    category: "Web",
    img: "/websitepic.png",
    desc: "A comprehensive, enterprise-grade supply chain solution designed for global freight forwarding. Focuses on real-time tracking, resource optimization, and seamless API integrations.",
    tech: ["Next.js", "GraphQL", "Google Maps API", "Docker"],
    year: "2024",
  },
  {
    id: 2,
    title: "Secure Fintech Mobile App",
    category: "App",
    img: "/appdev.png",
    desc: "A robust mobile banking application with multi-factor biometric authentication. Engineered for high-frequency transactions and strict financial compliance standards.",
    tech: ["React Native", "Node.js", "Firebase Security", "AWS Lambda"],
    year: "2023",
  },
  {
    id: 3,
    title: "Retnavia Brand Identity",
    category: "Graphics",
    img: "/branding.png",
    desc: "A modern, cohesive visual system created for a leading tech consultancy. From logo design to digital brand guidelines, focusing on innovation and trust.",
    tech: ["Adobe CC", "Figma", "Motion Graphics", "Strategy"],
    year: "2024",
  },
  {
    id: 4,
    title: "AI Automate Chatbot",
    category: "AI",
    img: "/ai.png",
    desc: "A custom Large Language Model (LLM) integrated into a customer support dashboard. Automates 70% of initial support queries using advanced vector embeddings.",
    tech: ["Python", "LangChain", "OpenAI API", "Pinecone DB"],
    year: "2023",
  },
  {
    id: 5,
    title: "SaaS Marketing Campaign",
    category: "Web",
    img: "/seo.png",
    desc: "A multifaceted SEO and content strategy that achieved 300% growth in organic traffic. Focused on conversion rate optimization (CRO) for a B2B SaaS product.",
    tech: ["SEO Strategy", "Google Analytics", "Content Marketing", "CRO"],
    year: "2024",
  },
];

const filters = ["All", "Web", "App", "Graphics", "AI"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    },
  },
};
const ModernPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = portfolioItems.filter((item) =>
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <main className="bg-background min-h-screen text-foreground pb-20 md:pb-32 selection:bg-primary/30 font-sans">
      <section className="relative h-[90vh] md:h-screen mb-10 w-full flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <Image
            src="/allheader.png"
            alt="Selected Works Background"
            fill
            className="object-cover opacity-40 grayscale-[0.8] contrast-[1.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl px-6 md:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6 md:mb-8"
          >
            <div className="w-8 md:w-10 h-[1px] bg-primary animate-pulse" />
            <span className="text-muted-foreground text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-medium">
              Our Selected Works
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-[14vw] md:text-[8vw] font-light leading-[0.9] md:leading-[0.85] tracking-tighter"
          >
            ENGINEERING <br />
            <span className="italic text-primary/90 font-extralight">Digital </span>
            <span className="font-medium">Excellence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 md:mt-8 text-muted-foreground text-xs md:text-base max-w-[280px] md:max-w-md font-light leading-relaxed border-l border-primary/30 pl-4 md:pl-6"
          >
            A curated selection of projects where innovative code meets strategic
            design to solve complex, real-world problems.
          </motion.p>
        </div>
      </section>
      <div className="sticky top-[95px] md:top-[110px] z-40 flex justify-center mb-12 md:mb-20 px-4 w-full pointer-events-none">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center bg-background/60 p-1 md:p-1.5 rounded-full border border-white/[0.1] backdrop-blur-2xl shadow-2xl pointer-events-auto ring-1 ring-white/[0.05] overflow-x-auto no-scrollbar max-w-full"
        >
          {filters.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="relative px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group whitespace-nowrap"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-foreground"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-background" : "text-muted-foreground group-hover:text-foreground"
                  }`}>
                  {f}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>

      <section className="max-w-[1300px] mx-auto space-y-16 md:space-y-40 px-6 md:px-16">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
                className={`flex flex-col gap-8 md:gap-20 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div className="flex-1 w-full space-y-4 md:space-y-6">
                  <div className="flex items-center gap-4 text-[10px] md:text-xs font-mono tracking-wider text-primary">
                    <span className="bg-background px-3 py-1 rounded-full border border-border">
                      {item.category}
                    </span>
                    <span className="text-muted-foreground/50">{item.year}</span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-lg">
                    {item.title}
                  </h2>

                  <p className="text-muted-foreground text-xs md:text-base leading-relaxed max-w-xl font-light">
                    {item.desc}
                  </p>

                  <div className="pt-2 md:pt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground bg-overlay px-2.5 py-1 md:px-3 md:py-1.5 rounded-md border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 10 }}
                    className="pt-4 md:pt-8 flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-widest text-foreground cursor-pointer group w-max"
                  >
                    <div className="w-8 md:w-10 h-[1px] bg-foreground group-hover:bg-primary transition-colors" />
                    <span>Explore Project</span>
                    <span className="text-xs group-hover:text-primary transition-colors">→</span>
                  </motion.div>
                </div>

                <div className="flex-1 w-full aspect-video md:aspect-auto md:h-[500px] relative rounded-2xl md:rounded-3xl overflow-hidden border border-border group bg-background">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      <footer className="mt-24 md:mt-48 text-center border-t border-border/50 pt-10 md:pt-20 px-6">
        <p className="text-muted font-mono text-[9px] md:text-[10px] tracking-widest uppercase">
          Retnavia © 2026 — Built for Performance
        </p>
      </footer>
    </main>
  );
};

export default ModernPortfolioPage;