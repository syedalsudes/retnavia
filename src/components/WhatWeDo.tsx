"use client";

import React from "react";
import { 
  Code2, Figma, Smartphone, Cloud, 
  Palette, Megaphone, Cpu, Sparkles, Orbit 
} from "lucide-react";

const WhatWeDo = () => {
  const techItems = [
    { name: "Web Systems", icon: <Code2 size={18} /> },
    { name: "UI/UX Strategy", icon: <Figma size={18} /> },
    { name: "iOS & Android", icon: <Smartphone size={18} /> },
    { name: "Cloud Infra", icon: <Cloud size={18} /> },
    { name: "Visual Design", icon: <Palette size={18} /> },
    { name: "Growth Hacking", icon: <Megaphone size={18} /> },
    { name: "AI & Neural", icon: <Cpu size={18} /> },
    { name: "Blockchain", icon: <Orbit size={18} /> },
  ];

  return (
    <section className="relative min-h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden py-32 bg-[#020202]">
      
      {/* 1. Subtle Background Depth */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/wa.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
      </div>

      {/* 2. Top Badge & Heading */}
      <div className="relative z-10 text-center px-6 mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-8 shadow-inner">
          <Sparkles size={14} className="text-purple-400" />
          <span className="text-white/60 font-medium tracking-[0.2em] uppercase text-[10px]">
            Capabilities
          </span>
        </div>
        
        <h1 className="text-white text-5xl md:text-7xl font-bold max-w-5xl leading-[1.1] tracking-tighter">
          Architecting the next <br />
          <span className="text-white/40 font-light italic">digital frontier.</span>
        </h1>
      </div>

      {/* 3. Infinite Marquee with Refined Styling */}
      <div className="relative z-10 w-full overflow-hidden border-y border-white/[0.05] py-12">
        {/* Subtle blur edges for marquee */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20"></div>

        <div className="flex whitespace-nowrap animate-marquee-fast hover:[animation-play-state:paused] cursor-default">
          {/* Pehla Set */}
          <div className="flex items-center">
            {techItems.map((item, index) => (
              <div key={index} className="flex items-center gap-6 mx-10 group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-all duration-500 shadow-xl">
                  {item.icon}
                </div>
                <span className="text-white/30 text-lg md:text-2xl font-bold tracking-tight group-hover:text-white transition-colors duration-500">
                  {item.name}
                </span>
                <div className="ml-10 w-1 h-1 rounded-full bg-white/10 group-hover:bg-purple-500 transition-colors"></div>
              </div>
            ))}
          </div>
          
          {/* Duplicate Set */}
          <div className="flex items-center">
            {techItems.map((item, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-6 mx-10 group">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-all duration-500 shadow-xl">
                  {item.icon}
                </div>
                <span className="text-white/30 text-lg md:text-2xl font-bold tracking-tight group-hover:text-white transition-colors duration-500">
                  {item.name}
                </span>
                <div className="ml-10 w-1 h-1 rounded-full bg-white/10 group-hover:bg-purple-500 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;