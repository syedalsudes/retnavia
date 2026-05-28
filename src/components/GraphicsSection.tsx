"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const graphicFilters = [
  "All",
  "Social Media Posts",
  "Logos",
  "Thumbnails",
  "Product Design",
];


const graphicsData = [
  { id: 1, src: "/graphicimages/social1.png", category: "Social Media Posts" },
  { id: 2, src: "/graphicimages/social2.png", category: "Social Media Posts" },
  { id: 3, src: "/graphicimages/social3.png", category: "Social Media Posts" },
  { id: 4, src: "/graphicimages/social4.png", category: "Social Media Posts" },
  { id: 5, src: "/graphicimages/social5.png", category: "Social Media Posts" },
  { id: 6, src: "/graphicimages/social6.png", category: "Social Media Posts" },
  { id: 7, src: "/graphicimages/social7.png", category: "Social Media Posts" },
  { id: 8, src: "/graphicimages/logo1.png", category: "Logos" },
  { id: 9, src: "/graphicimages/logo2.png", category: "Logos" },
  { id: 10, src: "/graphicimages/logo3.png", category: "Logos" },
  { id: 11, src: "/graphicimages/logo4.png", category: "Logos" },
  { id: 12, src: "/graphicimages/logo5.png", category: "Logos" },
  { id: 13, src: "/graphicimages/thumb1.png", category: "Thumbnails" },
  { id: 14, src: "/graphicimages/thumb2.png", category: "Thumbnails" },
  { id: 15, src: "/graphicimages/thumb3.png", category: "Thumbnails" },
  { id: 16, src: "/graphicimages/thumb4.png", category: "Thumbnails" },
  { id: 17, src: "/graphicimages/thumb5.png", category: "Thumbnails" },
  { id: 18, src: "/graphicimages/thumb6.png", category: "Thumbnails" },
  { id: 19, src: "/graphicimages/product1.png", category: "Product Design" },
  { id: 20, src: "/graphicimages/product2.png", category: "Product Design" },
  { id: 21, src: "/graphicimages/product3.png", category: "Product Design" },
  { id: 22, src: "/graphicimages/product4.png", category: "Product Design" },
  { id: 23, src: "/graphicimages/product5.png", category: "Product Design" },
  { id: 24, src: "/graphicimages/product6.png", category: "Product Design" },
  { id: 25, src: "/graphicimages/product7.png", category: "Product Design" },
];

const GraphicsSection = () => {
  const [activeGraphicFilter, setActiveGraphicFilter] = useState("All");

  const filteredGraphics = graphicsData.filter((img) =>
    activeGraphicFilter === "All" ? true : img.category === activeGraphicFilter
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full flex flex-col items-center max-w-7xl mx-auto p-4 md:p-8"
    >
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 text-left w-full">
        Playful, bold & on-brand visuals
      </h2>

      {/* Sub-filters */}
      <div className="flex flex-wrap gap-3 mb-12 w-full">
        {graphicFilters.map((subFilter) => {
          const isSubActive = activeGraphicFilter === subFilter;
          return (
            <button
              key={subFilter}
              onClick={() => setActiveGraphicFilter(subFilter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  isSubActive
                    ? "bg-foreground text-background border-foreground shadow-md scale-105"
                    : "bg-transparent text-foreground border-white/10 hover:border-white/30 hover:bg-white/5"
                }
              `}
            >
              {subFilter}
            </button>
          );
        })}
      </div>

      {/* Pinterest-Style Masonry Layout */}
      <motion.div
        layout
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full space-y-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredGraphics.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full rounded-2xl overflow-hidden border border-white/10 group bg-white/5 break-inside-avoid shadow-lg hover:shadow-xl transition-shadow"
            >
              
              {/* 
                Yahan humne standard img tag use kiya hai with w-full aur h-auto.
                Is se picture apni original height khud le legi bina stretch hue.
                loading="lazy" lagaya hai taake website slow na ho.
              */}
              <img 
                src={img.src} 
                alt={`${img.category} design`} 
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 block"
              />

              {/* Hover par halka sa dark overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
              
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default GraphicsSection;