"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/wallpaper.png"
          alt="Success Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-primary-glow text-xs font-bold uppercase tracking-widest">
            Let's Build Together
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-foreground text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Catch the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Success</span> <br /> 
          with retnavia.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light"
        >
          Aapka vision aur hamari technical expertise—mil kar banate hain kuch behtareen. 
          Kya aap apne business ko agle level par le jaane ke liye tayyar hain?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <button className="bg-foreground text-background px-10 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-foreground transition-all duration-300 shadow-2xl flex items-center gap-3">
            Start Your Project <ArrowRight size={20} />
          </button>
          
          <button className="border border-border backdrop-blur-md text-foreground px-10 py-4 rounded-full font-bold text-lg hover:bg-overlay transition-all">
            Schedule a Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;