"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolioData";
import { motion, AnimatePresence, Variants } from "framer-motion";
import GraphicsSection from "@/components/GraphicsSection";

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

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">

        <motion.div className="absolute inset-0 z-0">
          <Image
            src="/allheader.png"
            alt="Contact Background"
            fill
            className="object-cover opacity-40 grayscale-[0.6] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background" />
        </motion.div>

        {/* Centered Content Block */}
        <div className="relative z-10 max-w-4xl px-6 text-center pt-16 lg:pt-20 flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1.5px] bg-primary" />
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.4em] font-black">
              Curated Milestones
            </span>
            <div className="w-8 h-[1.5px] bg-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-[14vw] md:text-[9vw] font-black leading-[0.9] tracking-tighter uppercase mb-2"
          >
            PORTFOLIO<span className="text-primary font-black">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-xl mx-auto text-center"
          >
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base font-normal leading-relaxed tracking-wide">
              A collection of high-impact digital products where {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary font-semibold italic">
                Digital Landscapes
              </span>{" "}
              meet ambitious engineering framework logic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[105px] md:top-[97px] z-40 flex justify-center mb-12 px-4 w-full pointer-events-none">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center bg-overlay/80 p-1 rounded-full border border-border backdrop-blur-2xl shadow-2xl pointer-events-auto ring-1 ring-white/[0.05] overflow-x-auto no-scrollbar max-w-full"
        >
          {filters.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => {
                  setActiveFilter(f);
                  window.scrollTo({
                    top: window.innerHeight * 0.75,
                    behavior: "smooth"
                  });
                }}
                className="relative px-5 md:px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 overflow-hidden group whitespace-nowrap"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-primary-glow to-secondary"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-300 ${isActive
                  ? "text-foreground font-black"
                  : "text-muted-foreground group-hover:text-primary"
                  }`}>
                  {f}
                </span>
              </button>
            );
          })}
        </motion.div>
      </div>

      {/* Portfolio Items Grid */}
      <section className="max-w-7xl mx-auto px-6">
        {activeFilter === "Graphics" ? (
          <GraphicsSection />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  className="group relative bg-overlay rounded-3xl overflow-hidden border border-border shadow-2xl hover:shadow-[0_20px_50px_rgba(147,51,234,0.15)] hover:border-primary/40 transition-all duration-500 flex flex-col"
                >
                  {/* Subtle Inner Mesh Effect for Card */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/[0.02] to-secondary/[0.03] pointer-events-none z-0" />

                  {/* Image Container */}
                  <div className="relative w-full h-64 md:h-72 overflow-hidden bg-overlay border-b border-border z-10">
                    <Image
                      src={item.listImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[0.22, 1, 0.36, 1] group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 flex flex-col p-6 gap-4 z-10 relative">

                    {/* Category Tag & Year */}
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="bg-gradient-to-r from-primary-glow to-secondary text-foreground px-3 py-1 rounded-full uppercase tracking-widest font-bold shadow-md shadow-primary-glow/20">
                        {item.category}
                      </span>
                      <span className="text-muted-foreground font-semibold tracking-wider">{item.year}</span>
                    </div>

                    {/* Typography Title */}
                    <h2 className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h2>

                    {/* Overview Text */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 font-normal">
                      {item.overview}
                    </p>

                    {/* Tech Stack Tags */}
                    {item.techStack?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.techStack.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-bold tracking-wider uppercase bg-overlay text-accent border border-border px-2.5 py-1 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Dynamic Action Buttons */}
                    <div className="mt-auto pt-4 flex items-center gap-3">
                      <Link href={`/portfolio/${item.slug}`} className="flex-1">
                        <button className="w-full py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-foreground bg-gradient-to-r from-primary-glow via-primary to-secondary bg-[size:200%_auto] hover:bg-right shadow-lg shadow-primary-glow/20 transition-all duration-500 transform active:scale-95">
                          View Case Study
                        </button>
                      </Link>

                      {item.liveUrl && (
                        <a
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <button className="w-full py-3 rounded-full text-[10px] font-black uppercase tracking-[0.15em] border border-border text-foreground hover:bg-gradient-to-r hover:from-primary-glow hover:to-secondary hover:text-foreground hover:border-transparent transition-all duration-300 transform active:scale-95 shadow-sm">
                            Live Preview
                          </button>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>
    </main>
  );
};

export default ModernPortfolioPage;