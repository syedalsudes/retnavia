"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "DP World Logistics",
    category: "Web",
    img: "/websitepic.png",
    size: "md:col-span-2 md:row-span-2",
    desc: "Enterprise-grade supply chain solution."
  },
  {
    id: 2,
    title: "Fintech Mobile App",
    category: "App",
    img: "/appdev.png",
    size: "md:col-span-1 md:row-span-2",
    desc: "Secure biometric banking."
  },
  {
    id: 3,
    title: "Retnavia Branding",
    category: "Graphics",
    img: "/branding.png",
    size: "md:col-span-1 md:row-span-1",
    desc: "Modern visual identity."
  },
  {
    id: 4,
    title: "AI Automate Bot",
    category: "AI",
    img: "/ai.png",
    size: "md:col-span-1 md:row-span-1",
    desc: "Custom LLM integration."
  },
  {
    id: 5,
    title: "SaaS Marketing",
    category: "Web",
    img: "/seo.png",
    size: "md:col-span-2 md:row-span-1", 
    desc: "300% Growth in organic traffic."
  }
];

const filters = ["All", "Web", "App", "Graphics", "AI"];

const ModernPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = portfolioItems.filter((item) => 
    activeFilter === "All" ? true : item.category === activeFilter
  );

  return (
    <main className="bg-black min-h-screen text-white pt-24 pb-20 px-6 md:px-16 selection:bg-purple-500/30">
      
      {/* --- HEADER --- */}
      <div className="max-w-[1400px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-purple-500 font-mono text-xs uppercase tracking-[0.4em] mb-4"
          >
            Portfolio / 2024-25
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.85]"
          >
            Proof in <br /> <span className="italic font-serif text-zinc-500">Performance.</span>
          </motion.h1>
        </div>

        {/* --- FILTER TABS --- */}
        <div className="flex bg-zinc-900/50 p-1 rounded-full border border-white/5 backdrop-blur-md">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all ${
                activeFilter === f ? "bg-white text-black" : "text-white/40 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* --- BENTO GRID --- */}
      <div className="max-w-[1400px] mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className={`relative group rounded-[2rem] overflow-hidden border border-white/10 ${item.size}`}
              >
                {/* Image Component */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-purple-400 text-[9px] uppercase tracking-widest mb-2 font-bold italic">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                  <p className="text-white/50 text-xs font-light max-w-[200px] leading-relaxed">
                    {item.desc}
                  </p>
                  
                  {/* Small "Explore" link */}
                  <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/80">
                    <div className="w-6 h-[1px] bg-white/30" />
                    View Case Study
                  </div>
                </div>

                {/* Default Bottom-Left Badge (Visible without hover) */}
                <div className="absolute bottom-6 left-6 group-hover:opacity-0 transition-opacity">
                   <p className="text-[10px] bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white/70 tracking-tighter">
                     {item.title}
                   </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
};

export default ModernPortfolioPage;
