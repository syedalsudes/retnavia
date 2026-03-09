"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

const NotFound = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center bg-black text-white selection:bg-purple-500/30 overflow-hidden">
      
      {/* 1. Dynamic Background Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`,
        }}
      />

      {/* 2. Abstract Grid (Matches your Portfolio) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* 3. Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Animated "404" with Glitch Feel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <h1 className="text-[15rem] md:text-[22rem] font-light tracking-tighter leading-none text-white/5 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs md:text-sm uppercase tracking-[1em] text-purple-500 font-bold ml-[1em]"
            >
              System Offline
            </motion.p>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-xl -mt-10 md:-mt-20"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            Lost in the <span className="italic font-serif text-purple-400">Void.</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-md mx-auto mb-10">
            The page you are looking for has been moved to another dimension or never existed in ours.
          </p>

          {/* Luxury Button */}
          <Link href="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-transparent border border-white/10 rounded-full text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 overflow-hidden"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-500" />
              <span>Initiate Recovery</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* 4. Minimal Sidebar Branding */}
      <div className="absolute left-10 bottom-10 hidden md:flex items-center gap-4 rotate-[-90deg] origin-left opacity-30">
        <Zap size={12} className="text-purple-500" />
        <span className="text-[9px] uppercase tracking-[0.5em] text-white">Retnavia Engine v2.0</span>
      </div>

      {/* 5. Right Side Year */}
      <div className="absolute right-10 bottom-10 hidden md:block opacity-30">
        <p className="text-[9px] uppercase tracking-[0.5em] text-white">Est. 2026</p>
      </div>

    </main>
  );
};

export default NotFound;
