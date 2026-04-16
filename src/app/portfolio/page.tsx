"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolioData";
import { motion, AnimatePresence, Variants } from "framer-motion";

const filters = ["All", "Web", "App", "Graphics"];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const ModernPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = portfolioItems.filter((item) =>
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <main className="bg-background min-h-screen text-foreground pb-32 selection:bg-primary/30 font-sans">
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

                <span className={`relative z-10 transition-colors duration-300 ${
                  isActive ? "text-background" : "text-muted-foreground group-hover:text-foreground"
                }`}>
                  {f}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>

      <section className="max-w-7xl mx-auto space-y-40 px-6">
        <AnimatePresence mode="wait">
          {filteredItems.map((item, index) => (
            <motion.div key={item.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
              className={`flex flex-col gap-20 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 text-xs font-mono text-primary">
                  <span className="border border-border px-3 py-1 rounded-full uppercase">{item.category}</span>
                  <span className="opacity-100">{item.year}</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-light tracking-tight">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed max-w-lg">{item.overview}</p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map(t => <span key={t} className="text-[10px] bg-white/5 px-3 py-1 rounded-md border border-white/10">{t}</span>)}
                </div>

                <Link href={`/portfolio/${item.slug}`}>
                  <motion.div whileHover={{ x: 10 }} className="pt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-widest cursor-pointer group">
                    <div className="w-10 h-[1px] bg-foreground group-hover:bg-primary" />
                    <span>View Case Study</span>
                    <span>→</span>
                  </motion.div>
                </Link>
              </div>
              <div className="flex-1 w-full aspect-video md:h-[500px] relative rounded-3xl overflow-hidden border border-foreground/10 group bg-background">
                <Image
                  src={item.listImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default ModernPortfolioPage;