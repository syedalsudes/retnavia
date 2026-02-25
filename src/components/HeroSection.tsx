"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end items-center pb-12">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
        
        <h1 className="text-white text-5xl md:text-6xl font-medium tracking-tight mb-4">
          Code That Defines Tomorrow
        </h1>

        <p className="text-white/80 text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto">
          Next-gen technology solutions for brands ready to lead the digital revolution.
        </p>

        <div className="inline-flex items-center bg-white/[0.08] backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          
          <button className="flex items-center gap-3 bg-white text-black pl-6 pr-2 py-2 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 group">
            <span className="text-sm tracking-tight">Start Your Project</span>
            
            <div className="relative h-9 rounded-full overflow-hidden border-2 border-black/5 shadow-inner">
               
            </div>
          </button>

          <button className="group flex items-center gap-1.5 text-white/90 text-sm font-semibold px-6 py-2 transition-all hover:text-white">
            <span>See our work</span>
            <div className="relative overflow-hidden w-4 h-4">
               <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <div className="absolute bottom-3 left-1/2 w-0 h-[1px] bg-white/40 transition-all duration-300 group-hover:w-1/3 group-hover:left-[40%]"></div>
          </button>
        </div>
      </div>

      {/* Subtle Bottom Overlay for Text Readability */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent z-[1]" />
    </section>
  );
};

export default HeroSection;