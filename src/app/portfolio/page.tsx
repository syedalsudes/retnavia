"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "DP World",
    category: "Web Engineering",
    impact: "98% Performance",
    desc: "Achieved elite-level speed optimization and enterprise-grade security for global logistics.",
    services: ["Next.js", "Security Audit", "Cloud Hosting"],
    bg: "/websitepic.png",
  },
  {
    title: "Fintech App",
    category: "Mobile Solutions",
    impact: "Biometric Secure",
    desc: "A high-fidelity banking experience focused on real-time transactions and zero-latency UI.",
    services: ["React Native", "Fintech API", "AWS"],
    bg: "/appdev.png",
  },
  {
    title: "SaaS Growth",
    category: "SEO & Strategy",
    impact: "300% Traffic",
    desc: "Strategic search engine dominance for global platforms through data-driven content.",
    services: ["Organic SEO", "Market Analysis", "Content"],
    bg: "/seo.png",
  },
  {
    title: "Retnavia",
    category: "Brand Identity",
    impact: "Visual DNA",
    desc: "Crafting modern visual languages and brand guidelines for the next generation of tech.",
    services: ["Logo Design", "UI/UX Design", "Guidelines"],
    bg: "/branding.png",
  },
  {
    title: "AI Automate",
    category: "AI Solutions",
    impact: "24/7 Support",
    desc: "Integrating custom-trained LLMs to automate complex customer journeys seamlessly.",
    services: ["Custom LLMs", "Automation", "Python"],
    bg: "/ai.png",
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  return (
    <section ref={ref} className="h-[110vh] flex items-center justify-center sticky top-0 bg-black">
      <motion.div 
        style={{ opacity, scale }}
        className="relative w-[92%] h-[85vh] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
      >
        <Image
          src={project.bg}
          alt={project.title}
          fill
          className="object-cover brightness-[0.4]"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute inset-0 p-10 md:p-20 flex flex-col justify-end">
          <motion.div style={{ y }} className="w-full">
            <div className="flex items-center gap-3 mb-8">
               <span className="text-purple-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                 {project.category}
               </span>
               <div className="w-8 h-[1px] bg-white/20" />
               <span className="text-white/30 text-[10px] font-mono">0{index + 1}</span>
            </div>

            <h2 className="text-white text-6xl md:text-8xl font-medium tracking-tighter mb-8 leading-[0.9]">
              {project.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-5">
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {project.desc}
                </p>
              </div>

              <div className="md:col-span-4 flex gap-8">
                <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-widest mb-3">Capabilities</p>
                  <ul className="text-white/70 text-[11px] space-y-1 font-light">
                    {project.services.map((s) => <li key={s}>+ {s}</li>)}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-3 text-right">
                <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">Results</p>
                <p className="text-3xl font-light italic text-white">{project.impact}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const OurWorkScrollPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="bg-black selection:bg-purple-500/30">

      {/* --- RE-CRAFTED HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio.png" 
            alt="Work Portfolio Background"
            fill
            className="object-cover opacity-60 grayscale-[0.5] contrast-[1.1]"
            priority
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-10 h-[1px] bg-purple-500" />
            <span className="text-white/60 text-[10px] uppercase tracking-[0.5em] font-medium">Selected Works 2026</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white text-[12vw] md:text-[9vw] font-light leading-none tracking-tighter"
          >
            CRAFTING <br /> 
            <span className="italic font-serif text-purple-400/90">Impact.</span>
          </motion.h1>
          
          {/* Subtle scroll indicator */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1, duration: 1 }}
             className="absolute -bottom-32 md:-bottom-20 left-8"
          >
             <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left">Scroll to explore</p>
          </motion.div>
        </div>
      </section>
      {/* --- END HERO SECTION --- */}

      {/* Projects List */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      {/* Modern Compact CTA */}
      <section className="h-[80vh] flex flex-col items-center justify-center bg-black relative">
        <div className="text-center group">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.6em] mb-10 group-hover:text-purple-500 transition-colors">
            Have a vision?
          </p>
          
          <h2 className="text-white text-5xl md:text-8xl font-light tracking-tighter mb-16">
            Let’s build <span className="italic font-serif">something</span> real.
          </h2>

          <motion.a
            href="mailto:discover@retnavia.com"
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 rounded-full border border-white/10 text-white text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          >
            Start a Conversation
          </motion.a>
        </div>
        
        <div className="absolute bottom-12 text-white/20 text-[9px] uppercase tracking-widest">
          © 2026 Retnavia Studio
        </div>
      </section>
    </main>
  );
};

export default OurWorkScrollPage;