"use client";

import React from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { servicesData, ServiceKey } from "@/data/servicesData";

type Props = {
  params: {
    slug: string;
  };
};

// Animation Variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function DynamicServicePage({ params }: Props) {
  const serviceKey = params.slug as ServiceKey;
  const service = servicesData[serviceKey];

  if (!service) {
    notFound();
  }

  return (
    <main className="relative bg-[#050505] min-h-screen text-white pt-32 pb-20 selection:bg-purple-500/30 overflow-hidden">
      
      {/* BACKGROUND EFFECTS (Grid & Ambient Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-purple-400" />
          <span className="text-purple-200 text-[11px] uppercase tracking-[0.3em] font-medium">
            Service Details
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter mb-8 leading-[1.1]"
        >
          {service.title}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400">.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl italic font-serif leading-relaxed"
        >
          "{service.subtitle}"
        </motion.p>
      </section>

      {/* 2. IMAGE & DESCRIPTION SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Our <span className="font-serif italic text-purple-400">Approach</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg font-light mb-10">
              {service.description}
            </p>
            
            <motion.ul 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {service.capabilities.map((cap, idx) => (
                <motion.li 
                  key={idx} 
                  variants={itemVariants}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all">
                    <Layers size={18} />
                  </div>
                  <span className="text-zinc-300 text-sm font-medium pt-1 leading-snug">
                    {cap}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Image Right with Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 blur-2xl rounded-3xl opacity-50 pointer-events-none" />
            <div className="relative h-[450px] md:h-[650px] rounded-[2.5rem] overflow-hidden border border-white/10 ring-1 ring-white/5 shadow-2xl">
              <Image 
                src={service.mainImage} 
                alt={service.title}
                fill
                className="object-cover brightness-90 hover:scale-105 hover:brightness-100 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. TECH STACK SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-40 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden p-10 md:p-20 rounded-[3rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] backdrop-blur-xl"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

          <div className="text-center mb-14">
            <h3 className="text-[12px] uppercase tracking-[0.4em] text-zinc-500 mb-4 font-semibold">Tools of the Trade</h3>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Technologies We Master</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {service.techStack.map((tech, index) => (
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                key={index}
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 bg-black/50 backdrop-blur-md shadow-lg hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 cursor-default"
              >
                <CheckCircle2 size={16} className="text-purple-500/70 group-hover:text-purple-400 transition-colors" />
                <span className="text-zinc-400 group-hover:text-white font-medium text-sm transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. CTA */}
      <section className="text-center py-32 px-6 relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-10">
            Ready to scale with <br className="hidden md:block" />
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
              {service.title}?
            </span>
          </h2>
          <Link 
            href="/contact"
            className="relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-white text-black text-[13px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-white border border-transparent hover:border-white/20 transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}