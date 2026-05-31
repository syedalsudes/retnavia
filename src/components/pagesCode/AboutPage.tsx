"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

// --- DATA ARRAYS FOR CLEANER CODE ---
const SKILLS_DATA = [
  { name: "Digital Strategy", value: "95%", gradient: "from-primary via-accent to-secondary" },
  { name: "UI/UX & Branding", value: "90%", gradient: "from-accent via-secondary to-primary" },
  { name: "Development", value: "85%", gradient: "from-secondary via-primary to-accent" },
];

const PILLARS_DATA = [
  {
    title: "Strategy",
    description: "We don't just build, we plan. Every project starts with a deep dive into your business goals to ensure maximum digital impact.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    gradient: "from-primary/20 to-transparent",
  },
  {
    title: "Design",
    description: "Pixel-perfect, user-centric interfaces. We craft immersive visual experiences that connect emotionally with your audience.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    gradient: "from-accent/20 to-transparent",
  },
  {
    title: "Engineering",
    description: "Scalable architecture and clean code. We build robust, high-performance applications tailored for the modern web.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    gradient: "from-secondary/20 to-transparent",
  },
];

const STATS_DATA = [
  { value: "100%", label: "Client Satisfaction", color: "text-primary" },
  { value: "Full", label: "Commitment", color: "text-accent" },
  { value: "3+", label: "Global Markets", color: "text-secondary" },
  { value: "24/7", label: "Dedicated Support", color: "text-primary" },
];

// --- FRAMER MOTION VARIANTS ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Ab TS isko accept kar lega
  },
};

const fadeLeftVariant: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeRightVariant: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutPage = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 600], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 600], [1, 1.15]);

  return (
    <div className="bg-background font-sans selection:bg-primary/30 overflow-hidden relative text-foreground">

      {/* ANIMATED AMBIENT GLOWS */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-accent/15 blur-[120px] rounded-full pointer-events-none"
      />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <Image
            src="/allheader.png"
            alt="About Us Background"
            fill
            className="object-cover opacity-30 grayscale-[0.3] contrast-[1.2] mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />
        </motion.div>

        <div className="relative z-10 max-w-7xl px-8 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center md:justify-start gap-4 mb-6 overflow-hidden"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[2px] bg-gradient-to-r from-primary to-accent"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-primary text-[11px] uppercase tracking-[0.5em] font-bold"
            >
              Who We Are
            </motion.span>
          </motion.div>

          <motion.h1
            style={{ y: yText, opacity: opacityHero }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-[10vw] md:text-[8.5vw] font-light leading-none tracking-tighter uppercase whitespace-nowrap"
          >
            ABOUT <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary font-medium">US.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 md:mt-10 max-w-xl border-l-2 border-primary/50 pl-6 md:pl-8 mx-auto md:mx-0"
          >
            <p className="text-muted-foreground text-sm md:text-lg font-light leading-relaxed tracking-wide">
              We are a collective of strategists, designers, and engineers
              dedicated to building digital products that leave a lasting impact.
              Through purposeful code and visionary design, we transform ideas
              into world-class experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: ABOUT US */}
      <section className="relative py-24 px-6 md:px-12 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(var(--primary-glow),0.1)] border border-white/10 group"
          >
            <Image
              src="/aboutbg.png"
              alt="Retnavia Workspace"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.h4 variants={fadeUpVariant} className="text-accent text-sm font-bold tracking-widest uppercase">
              About Retnavia
            </motion.h4>
            <motion.h2 variants={fadeUpVariant} className="text-4xl md:text-5xl font-medium tracking-tight leading-tight text-foreground">
              We Deliver <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Digital Excellence</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-md">
              We architect scalable web, mobile, and AI solutions that empower businesses globally. From startups to enterprises across the UAE, USA, and Europe, we bring your vision to life with a commitment to 100% client satisfaction.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="pt-2">
              <Link
                href="/contact"
                className="inline-block mt-4 bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(var(--primary-glow),0.3)] hover:shadow-[0_0_40px_rgba(var(--primary-glow),0.7)] hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: SKILLS & STATS */}
      {/* Changed border-border/50 to border-white/10 here */}
      <section className="relative py-24 px-6 md:px-12 z-10 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left: Skills */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3 variants={fadeUpVariant} className="text-3xl font-medium mb-4 text-foreground">
              Our <span className="text-primary">Capabilities</span>
            </motion.h3>
            <motion.p variants={fadeUpVariant} className="text-muted-foreground text-sm mb-12 max-w-md">
              We blend strategic thinking with high-performance engineering to deliver exceptional digital experiences across all platforms.
            </motion.p>

            <div className="space-y-8">
              {SKILLS_DATA.map((skill, index) => (
                <motion.div key={index} variants={fadeUpVariant}>
                  <div className="flex justify-between text-xs font-bold mb-3 text-foreground tracking-wide">
                    <span>{skill.name}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{skill.value}</span>
                  </div>
                  {/* Changed border for progress bar track to border-white/10 */}
                  <div className="w-full h-[4px] bg-white/5 border border-white/10 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + (index * 0.1), ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-y-12 gap-x-6 items-center text-center mt-4"
          >
            {STATS_DATA.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                // Changed border-white/[0.05] to border-white/5 and added hover effect
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
              >
                <h4 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </h4>
                <p className={`text-[10px] ${stat.color} uppercase tracking-[0.2em] font-medium mt-3`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* SECTION 3: OUR PILLARS / CARDS */}
      <section className="relative py-24 px-6 md:px-12 z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h4 className="text-accent text-sm font-bold tracking-widest uppercase mb-3">Our Core Pillars</h4>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">
            How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Operate</span>
          </h2>
        </motion.div>

        {/* 3 Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PILLARS_DATA.map((pillar, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariant}
              className="relative group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${pillar.gradient} rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500 group-hover:text-primary">
                {pillar.icon}
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-4 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;