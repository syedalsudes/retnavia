"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Users, Award, Briefcase, Zap, Rocket, Sparkles } from "lucide-react";

const AboutPage = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects for the hero section
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="bg-black font-sans selection:bg-purple-500/30">
      
      {/* 1. Hero Banner Section - Matching Contact Style */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutbg.png" 
            alt="Office Banner"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
        </div>

        <motion.div 
          style={{ y: yText, opacity: opacityHero }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-purple-300 text-[10px] font-black uppercase tracking-[0.3em]">
              Who We Are
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 italic font-light">Us</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-gray-500 text-[10px] uppercase tracking-[0.5em] rotate-90 mb-8">Scroll</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-purple-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. Introduction Section - Dark & Clean */}
      <section className="relative bg-[#050505] py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                Meet The Best <br /> 
                <span className="text-gray-600 font-light italic">Digital Agency.</span>
              </h2>
              <div className="border-l-2 border-purple-500 pl-6 space-y-4">
                <p className="text-gray-400 text-lg font-light leading-relaxed">
                  Harum quisquam amet debitis pariatur quas? Nemo excepturi duis minus nostrud officiis dolorem fugit itaque.
                </p>
                <p className="text-gray-500 text-sm font-medium">
                  Odio velit, odit, est, euismod condimentum, nostrum mi venenatis, mollit odio mi.
                </p>
              </div>
            </div>

            {/* Feature Cards - Glassmorphism Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Best Price", icon: <Award />, color: "text-red-500" },
                { label: "Finance", icon: <CheckCircle2 />, color: "text-blue-400" },
                { label: "Pro Team", icon: <Users />, color: "text-orange-500" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-purple-500/30 transition-all duration-500 group">
                  <div className={`w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${item.color}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <h4 className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{item.label}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Intro Images - Floating Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-video shadow-2xl">
              <Image src="/aboutbg2.png" alt="Main Work" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 aspect-video rounded-[2rem] overflow-hidden border-8 border-[#050505] shadow-2xl hidden md:block">
              <Image src="/aboutbg.png" alt="Support Work" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Why Choose Us - Ultra Dark Cards */}
      <section className="py-32 bg-black px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <span className="text-purple-400 text-[10px] font-black uppercase tracking-widest">Core Values</span>
          </div>
          <h2 className="text-white text-5xl md:text-7xl font-bold tracking-tighter">
            Our Commitment To <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Your Success</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { 
              title: "Innovative Solutions", 
              desc: "Hum hamesha latest technology use karte hain taake aapka business futuristic lage.", 
              icon: <Zap />,
              color: "from-purple-600/20 to-purple-900/20"
            },
            { 
              title: "Strategic Planning", 
              desc: "Har project shuru karne se pehle hum aik solid strategy banate hain taake koi ghalti na ho.", 
              icon: <Rocket />,
              color: "from-blue-600/20 to-blue-900/20"
            },
            { 
              title: "24/7 Premium Support", 
              desc: "Aapke har sawal aur masle ka hal nikalne ke liye hamari support team hamesha hazir hai.", 
              icon: <Briefcase />,
              color: "from-gray-600/20 to-gray-900/20"
            }
          ].map((value, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative group p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-8 border border-white/10 group-hover:rotate-6 transition-transform text-white`}>
                {React.cloneElement(value.icon as React.ReactElement, { size: 28 })}
              </div>
              <h4 className="text-white text-2xl font-bold mb-4 tracking-tight">{value.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light text-sm">{value.desc}</p>
              
              <div className="mt-8 w-10 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-purple-500/50 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;