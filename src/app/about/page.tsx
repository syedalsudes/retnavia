"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Users, Award, Briefcase, Zap, Rocket, Sparkles } from "lucide-react";

const AboutPage = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for the hero section
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <div className="bg-[#050505] font-sans selection:bg-purple-500/30 overflow-hidden relative">
      
      {/* GLOBAL AMBIENT GLOWS */}
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 1. HERO BANNER SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <Image
            src="/aboutbg.png" 
            alt="Office Banner"
            fill
            className="object-cover"
            priority
          />
          {/* Refined Gradients for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent h-40 bottom-0 top-auto"></div>
        </motion.div>

        <motion.div 
          style={{ y: yText, opacity: opacityHero }}
          className="relative z-10 text-center px-6 mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-purple-200 text-[11px] font-semibold uppercase tracking-[0.3em]">
              Who We Are
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-white text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter uppercase leading-[0.9]"
          >
            About <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-500 italic font-serif">
              Us.
            </span>
          </motion.h1>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-32 md:-bottom-40 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
          >
            <span className="text-zinc-500 text-[9px] font-bold uppercase tracking-[0.4em] rotate-90 mb-6">Scroll</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-white text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                Meet The Best <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600 italic font-serif">Digital Agency.</span>
              </h2>
              <div className="border-l-[3px] border-purple-500/50 pl-6 space-y-5">
                <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                  Harum quisquam amet debitis pariatur quas? Nemo excepturi duis minus nostrud officiis dolorem fugit itaque.
                </p>
                <p className="text-zinc-500 text-sm md:text-base font-normal leading-relaxed">
                  Odio velit, odit, est, euismod condimentum, nostrum mi venenatis, mollit odio mi.
                </p>
              </div>
            </div>

            {/* Feature Mini-Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Best Price", icon: <Award />, color: "text-rose-400", bg: "bg-rose-400/10", border: "group-hover:border-rose-500/30" },
                { label: "Finance", icon: <CheckCircle2 />, color: "text-blue-400", bg: "bg-blue-400/10", border: "group-hover:border-blue-500/30" },
                { label: "Pro Team", icon: <Users />, color: "text-amber-400", bg: "bg-amber-400/10", border: "group-hover:border-amber-500/30" }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-[2rem] transition-all duration-500 group ${item.border} hover:bg-white/[0.04] cursor-default`}>
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ${item.color}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 22, strokeWidth: 1.5 })}
                  </div>
                  <h4 className="text-zinc-300 text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Floating Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            {/* Background Image (Support) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 right-0 md:-right-10 w-3/4 aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] z-0 hidden md:block"
            >
              <Image src="/aboutbg.png" alt="Support Work" fill className="object-cover brightness-[0.6] grayscale-[30%]" />
            </motion.div>

            {/* Foreground Image (Main) */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full md:w-4/5 aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border border-white/15 shadow-2xl z-10"
            >
              <Image src="/aboutbg2.png" alt="Main Work" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE VALUES SECTION */}
      <section className="py-32 px-6 relative z-10 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/5 border border-purple-500/20 mb-6 backdrop-blur-sm"
          >
            <span className="text-purple-400 text-[10px] font-bold uppercase tracking-[0.3em]">Core Values</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-light tracking-tight"
          >
            Our Commitment To <br className="hidden md:block"/>
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"> Your Success.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            { 
              title: "Innovative Solutions", 
              desc: "Hum hamesha latest technology use karte hain taake aapka business futuristic lage.", 
              icon: <Zap />,
              color: "text-purple-400",
              bgGlow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            },
            { 
              title: "Strategic Planning", 
              desc: "Har project shuru karne se pehle hum aik solid strategy banate hain taake koi ghalti na ho.", 
              icon: <Rocket />,
              color: "text-blue-400",
              bgGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            },
            { 
              title: "24/7 Premium Support", 
              desc: "Aapke har sawal aur masle ka hal nikalne ke liye hamari support team hamesha hazir hai.", 
              icon: <Briefcase />,
              color: "text-emerald-400",
              bgGlow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative group p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] hover:border-white/10 transition-all duration-500 ${value.bgGlow} overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className={`w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ${value.color} shadow-lg backdrop-blur-md`}>
                {React.cloneElement(value.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
              </div>
              
              <h4 className="text-zinc-100 text-2xl font-medium mb-4 tracking-tight">{value.title}</h4>
              <p className="text-zinc-500 leading-relaxed font-light text-sm md:text-base">{value.desc}</p>
              
              {/* Animated bottom line */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-white/10 group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-purple-500 transition-colors duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;