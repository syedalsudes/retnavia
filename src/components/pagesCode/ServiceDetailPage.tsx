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
    <main className="relative bg-background min-h-screen text-foreground pb-20 selection:bg-primary/30 overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-glow/10 blur-[120px] rounded-full pointer-events-none" />

      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/allheader.png" 
            alt={service.title}
            fill
            className="object-cover opacity-40 grayscale-[0.6] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-muted-foreground text-[10px] uppercase tracking-[0.5em] font-medium">
              Expertise In {service.title}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-[10vw] md:text-[8.5vw] font-light leading-[0.85] tracking-tighter uppercase"
          >
            {service.title.split(' ')[0]} <br />
            <span className="italic text-primary/90 font-extralight">
              {service.title.split(' ').slice(1).join(' ') || "SOLUTIONS."}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-xl border-l border-primary/30 pl-8"
          >
            <p className="text-muted-foreground text-sm md:text-lg font-light italic leading-relaxed tracking-wide">
              "{service.subtitle}"
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute -bottom-24 md:-bottom-16 left-8"
        >
          <p className="text-muted-foreground/40 text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left">
            Scroll to analyze
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto pt-11 px-6 md:px-12 mb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Our <span className="italic text-primary">Approach</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-light mb-10">
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
                  className="flex items-start gap-4 p-5 rounded-2xl bg-overlay/50 border border-white/[0.1] hover:bg-overlay transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Layers size={18} />
                  </div>
                  <span className="text-foreground/90 text-sm font-medium pt-1 leading-snug">
                    {cap}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl rounded-3xl opacity-50 pointer-events-none" />
            <div className="relative h-[450px] md:h-[650px] rounded-[2.5rem] overflow-hidden border-white/[0.1] ring-1 ring-border/50 shadow-2xl">
              <Image 
                src={service.mainImage} 
                alt={service.title}
                fill
                className="object-cover brightness-90 hover:scale-105 hover:brightness-100 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-40 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden p-10 md:p-20 rounded-[3rem] bg-gradient-to-b from-overlay to-transparent border border-white/[0.1] backdrop-blur-xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          <div className="text-center mb-14">
            <h3 className="text-[12px] uppercase tracking-[0.4em] text-muted mb-4 font-semibold">Tools of the Trade</h3>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight">Technologies We Master</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {service.techStack.map((tech, index) => (
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }}
                key={index}
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.1] bg-background/50 backdrop-blur-md shadow-lg hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <CheckCircle2 size={16} className="text-primary/70 group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground font-medium text-sm transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="text-center py-32 px-6 relative overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-glow/15 blur-[150px] rounded-full pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-10">
            Ready to scale with <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              {service.title}?
            </span>
          </h2>
          <Link 
            href="/contact"
            className="relative inline-flex items-center gap-4 px-10 py-5 rounded-full bg-foreground text-background text-[13px] uppercase tracking-[0.2em] font-bold hover:bg-transparent hover:text-foreground border border-transparent hover:border-border transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}