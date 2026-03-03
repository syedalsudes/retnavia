"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Terminal, Cpu } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white selection:bg-blue-500/30 overflow-hidden font-sans">
      
      {/* 1. Tech Background: Subtle Grid & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      {/* 2. Abstract Tech Elements (Floating Code Snippets) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 right-[10%] hidden lg:block border border-white/10 bg-white/5 p-3 rounded-lg backdrop-blur-sm"
      >
        <div className="flex gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-green-500/50" />
        </div>
        <code className="text-[10px] text-blue-400 font-mono">status: 404_NOT_FOUND</code>
      </motion.div>

      {/* 3. Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl md:text-[12rem] font-medium tracking-tighter leading-none bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-md"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white mt-4">
            The resource you requested is unavailable.
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base font-light leading-relaxed">
            The page might have been moved, deleted, or you might have mistyped the URL. 
            Our systems suggest returning to the dashboard.
          </p>
        </motion.div>

        {/* Tech-Style Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10"
        >
          <Link href="/">
            <button className="group relative flex items-center gap-2 px-8 py-3 bg-white text-black rounded-md font-medium text-sm hover:bg-blue-50 transition-all duration-200">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Return to System
            </button>
          </Link>
        </motion.div>
      </div>

      {/* 4. Footer Branding */}
      <footer className="absolute bottom-8 w-full px-10 flex justify-between items-center opacity-40">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400">
          <Cpu size={12} />
          <span>Retnavia Core v2.4</span>
        </div>
        <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <p className="text-[10px] uppercase tracking-widest text-gray-400">© 2026</p>
      </footer>
    </main>
  );
};

export default NotFound;