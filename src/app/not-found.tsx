"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center bg-background text-foreground selection:bg-primary/30 overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[25vw] font-black tracking-tighter leading-none select-none text-transparent [-webkit-text-stroke:1px_var(--border)] md:[-webkit-text-stroke:2px_var(--border)] opacity-60"
        >
          404
        </motion.h1>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <motion.p 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs md:text-sm uppercase tracking-[0.5em] text-primary font-bold mb-6"
          >
            Error 404
          </motion.p>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6">
            Page Not <span className="italic text-primary">Found.</span>
          </h2>
          
          <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link href="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-overlay/50 border border-border rounded-full text-foreground text-[10px] uppercase tracking-[0.3em] hover:bg-foreground hover:text-background transition-all duration-500 overflow-hidden backdrop-blur-md"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform duration-500" />
              <span className="font-bold">Go Back Home</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute left-10 bottom-10 hidden md:flex items-center gap-4 rotate-[-90deg] origin-left opacity-30">
        <Zap size={12} className="text-primary" />
        <span className="text-[9px] uppercase tracking-[0.5em] text-foreground">Retnavia System</span>
      </div>

      <div className="absolute right-10 bottom-10 hidden md:block opacity-30">
        <p className="text-[9px] uppercase tracking-[0.5em] text-foreground">Est. 2026</p>
      </div>

    </main>
  );
};

export default NotFound;