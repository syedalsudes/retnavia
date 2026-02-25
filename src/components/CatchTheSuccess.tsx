"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* 1. Background Image using Next.js Image Component */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wa.png" // Aapka wallpaper path
          alt="Success Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay taake content nazar aaye */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles size={14} className="text-purple-400" />
          <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">
            Let's Build Together
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Catch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Success</span> <br /> 
          with retnavia.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light"
        >
          Aapka vision aur hamari technical expertise—mil kar banate hain kuch behtareen. 
          Kya aap apne business ko agle level par le jaane ke liye tayyar hain?
        </motion.p>

        {/* Buttons Group */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-2xl flex items-center gap-3">
            Start Your Project <ArrowRight size={20} />
          </button>
          
          <button className="border border-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            Schedule a Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;