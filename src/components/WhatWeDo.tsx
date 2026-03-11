"use client";

import React from "react";
import { 
  Code2, Figma, Smartphone, Cloud, 
  Palette, Megaphone, Cpu, Sparkles, Orbit 
} from "lucide-react";

const WhatWeDo = () => {
  const techItems = [
    { name: "Web Systems", icon: <Code2 size={16} />, color: "text-blue-400" },
    { name: "UI/UX Strategy", icon: <Figma size={16} />, color: "text-pink-500" },
    { name: "iOS & Android", icon: <Smartphone size={16} />, color: "text-green-400" },
    { name: "Cloud Infra", icon: <Cloud size={16} />, color: "text-cyan-400" },
    { name: "Visual Design", icon: <Palette size={16} />, color: "text-orange-400" },
    { name: "Growth Hacking", icon: <Megaphone size={16} />, color: "text-yellow-400" },
    { name: "AI & Neural", icon: <Cpu size={16} />, color: "text-primary" },
    { name: "Blockchain", icon: <Orbit size={16} />, color: "text-indigo-400" },
  ];

  return (
    <section className="relative min-h-[80vh] w-full flex flex-col justify-center items-center overflow-hidden py-20 bg-background">
      
      <div className="relative z-10 text-center px-6 mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-overlay border border-white/[0.03] mb-6">
          <Sparkles size={12} className="text-primary" />
          <span className="text-muted-foreground font-bold tracking-[0.4em] uppercase text-[8px]">
            Capabilities
          </span>
        </div>
        
        <h2 className="text-foreground text-4xl md:text-6xl font-bold max-w-4xl leading-tight tracking-tighter uppercase">
          Architecting the next <br />
          <span className="text-foreground/20 font-light italic">digital frontier.</span>
        </h2>
      </div>

      <div className="relative z-10 w-full overflow-hidden border-y border-white/[0.03] py-10 bg-overlay/50">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-background to-transparent z-20"></div>

        <div className="flex animate-marquee-super-fast will-change-transform">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex items-center">
              {techItems.map((item, index) => (
                <div key={index} className="flex items-center gap-6 mx-12 group">
                  <div className={`w-12 h-12 rounded-xl bg-overlay border border-white/[0.03] flex items-center justify-center ${item.color} group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500`}>
                    {item.icon}
                  </div>
                  <span className="text-muted-foreground text-sm md:text-lg font-bold tracking-[0.2em] uppercase group-hover:text-foreground transition-colors duration-300">
                    {item.name}
                  </span>
                  <div className="ml-12 w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary/50"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="h-20"></div>
    </section>
  );
};

export default WhatWeDo;