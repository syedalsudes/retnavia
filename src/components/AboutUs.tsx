"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="relative bg-[#050505] py-32 px-6 md:px-12 overflow-hidden">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* 1. Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
            <Users size={14} className="text-purple-400" />
            <span className="text-purple-400 uppercase tracking-[0.2em] text-[10px] font-bold">
              Our Identity
            </span>
          </div>

          <h2 className="text-white text-5xl md:text-7xl font-bold leading-[1.05] tracking-tighter mb-10">
            We are the architects <br />
            <span className="text-white/20 italic font-light">of digital change.</span>
          </h2>

          <div className="space-y-6 text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
            <p>
              At <span className="text-white font-semibold">retnavia</span>, our mission is to bridge the gap between human 
              imagination and technical execution. We don't just build products; we craft 
              experiences that resonate.
            </p>
            <p>
              Our team of multidisciplinary experts thrives on complexity, turning 
              abstract ideas into high-performance digital ecosystems that scale.
            </p>
          </div>

          {/* Stats Section with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 pt-10 border-t border-white/5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-white mb-2">
                <Target size={20} className="text-purple-500" />
                <span className="text-3xl font-bold tracking-tight">150+</span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">Milestones Reached</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 text-white mb-2">
                <Zap size={20} className="text-purple-500" />
                <span className="text-3xl font-bold tracking-tight">99.9%</span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* 2. Right Side: Team Image with Premium Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          viewport={{ once: true }}
          className="relative group lg:ml-10"
        >
          {/* Decorative Glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>
          
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] md:aspect-[3/4] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <img 
              src="/aboutsection.png" 
              alt="retnavia Team"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;