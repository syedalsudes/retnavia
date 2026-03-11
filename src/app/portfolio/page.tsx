"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }, 
  },
};

const ModernPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = portfolioItems.filter((item) =>
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <main className="bg-background min-h-screen text-foreground pb-32 selection:bg-primary/30 font-sans">
      
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col items-center text-center max-w-5xl mx-auto px-6 z-10">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-glow/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-overlay border border-border text-foreground/80 text-[10px] uppercase tracking-[0.2em] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Our Selected Works
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8"
        >
          Engineering <br className="hidden md:block" />
          <span className="italic text-muted font-light">Digital</span> Excellence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl font-light leading-relaxed"
        >
          A curated selection of projects where innovative code meets strategic design to solve complex, real-world problems.
        </motion.p>
      </section>

      <div className="sticky top-6 z-50 flex justify-center mb-24 px-6 w-full pointer-events-none">
        <div className="flex bg-overlay/60 p-1.5 rounded-full border border-border backdrop-blur-xl pointer-events-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 rounded-full text-[11px] font-medium uppercase tracking-widest transition-all duration-300 ${
                activeFilter === f
                  ? "bg-foreground text-background shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-overlay"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-[1300px] mx-auto space-y-24 md:space-y-40 px-6 md:px-16">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
                className={`flex flex-col gap-12 md:gap-20 items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4 text-xs font-mono tracking-wider text-primary">
                    <span className="bg-background px-3 py-1 rounded-full border border-border">
                      {item.category}
                    </span>
                    <span className="text-muted-foreground/50">{item.year}</span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight max-w-lg">
                    {item.title}
                  </h2>

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl font-light">
                    {item.desc}
                  </p>

                  <div className="pt-4 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider text-muted-foreground bg-overlay px-3 py-1.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="pt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest text-foreground cursor-pointer group w-max"
                  >
                    <div className="w-10 h-[1px] bg-foreground group-hover:bg-primary transition-colors" />
                    <span>Explore Project</span>
                    <span className="text-xs group-hover:text-primary transition-colors">→</span>
                  </motion.div>
                </div>

                <div className="flex-1 w-full aspect-[4/3] md:aspect-auto md:h-[500px] relative rounded-3xl overflow-hidden border border-border group bg-background">
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

      <footer className="mt-48 text-center border-t border-border/50 pt-20">
         <p className="text-muted font-mono text-[10px] tracking-widest uppercase">
           Retnavia © 2026 — Built for Performance
         </p>
      </footer>

    </main>
  );
};

export default ModernPortfolioPage;