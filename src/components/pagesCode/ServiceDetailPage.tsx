"use client";

import React, { useRef } from "react";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import { servicesData, ServiceKey } from "@/data/servicesData";

type Props = {
  params: {
    slug: string;
  };
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1] as const,
      duration: 0.6,
    },
  },
};

export default function DynamicServicePage({ params }: Props) {
  const serviceKey = params.slug as ServiceKey;
  const service = servicesData[serviceKey];

  if (!service) {
    notFound();
  }

  const imageContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <main className="relative bg-background min-h-screen text-foreground pb-20 selection:bg-primary/20 overflow-hidden">
      {/* Structural Tech Grid Line Overlay - Dark Theme */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Background Ambient Glowing Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-primary-glow/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-secondary/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Premium Fullscreen Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl px-6 text-center pt-20 flex flex-col items-center justify-center">
          {/* Top Tag Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <div className="w-8 h-[1.5px] bg-primary" />
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-[0.4em] font-black">
              Expertise Hub
            </span>
            <div className="w-8 h-[1.5px] bg-primary" />
          </motion.div>

          {/* Elite Giant Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-[9vw] md:text-[7vw] font-black leading-[0.95] tracking-tighter uppercase mb-4"
          >
            {service.title.split(" ")[0]}{" "}
            <span className="italic text-primary font-semibold">
              {service.title.split(" ").slice(1).join(" ") || "SYSTEMS."}
            </span>
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl mx-auto text-center"
          >
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg font-normal leading-relaxed tracking-wide italic">
              "{service.subtitle}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Approach & Parallax Image */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 mb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column - Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-primary text-[11px] font-black uppercase tracking-[0.25em] mb-3 block">
              Strategic Framework
            </span>

            <h2 className="text-foreground text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase leading-tight">
              Our <span className="italic text-primary">Approach.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-normal mb-8 max-w-xl">
              {service.description}
            </p>

            {/* Capabilities Cards */}
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
                  className="flex items-start gap-4 p-5 rounded-2xl bg-overlay backdrop-blur-xl border border-border hover:border-primary/50 transition-all duration-300 group shadow-lg"
                >
                  <div className="p-2 rounded-xl bg-background border border-border text-primary group-hover:border-primary/50 transition-all">
                    <Layers size={16} />
                  </div>
                  <span className="text-foreground/90 text-xs md:text-sm font-bold pt-1 leading-snug group-hover:text-primary transition-colors">
                    {cap}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Column - Image Box */}
          <div ref={imageContainerRef} className="lg:col-span-6">
            <div className="relative aspect-[4/3] md:aspect-[16/11] rounded-[2rem] overflow-hidden border border-border bg-overlay backdrop-blur-xl shadow-xl group">
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-[2rem] transition-all duration-500 z-20 pointer-events-none" />

              <motion.div
                style={{ y: yImage }}
                className="-inset-y-14 inset-x-0 relative w-full h-[125%]"
              >
                <Image
                  src={service.mainImage || "/websitepic.png"}
                  alt={service.title}
                  fill
                  className="object-cover object-center scale-100 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden p-8 md:p-16 rounded-[2.5rem] bg-overlay backdrop-blur-xl border border-border"
        >
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground mb-3 block font-black">
              Engine Ecosystem
            </span>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-foreground uppercase">
              Technologies We Master
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {service.techStack.map((tech, index) => (
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                key={index}
                className="group flex items-center gap-3 px-5 py-2.5 rounded-full border border-border bg-background shadow-sm hover:border-primary/30 hover:bg-white/[0.05] transition-all duration-300 cursor-default"
              >
                <CheckCircle2
                  size={15}
                  className="text-primary/70 group-hover:text-primary transition-colors"
                />
                <span className="text-muted-foreground group-hover:text-foreground font-medium text-xs md:text-sm transition-colors">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Option 3: Ultra Clean Horizontal Strip */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="rounded-3xl border border-border bg-overlay backdrop-blur-md p-8 md:py-10 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
              Scale Your <span className="text-primary italic font-serif font-normal">{service.title}</span> Product
            </h3>
            <p className="text-muted-foreground text-sm">
              Tailored architecture, clean codebases, and zero downtime execution.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
            <Link
              href="/consultant"
              className="w-full md:w-auto px-8 py-4 rounded-full bg-primary text-background font-bold text-xs uppercase tracking-widest hover:bg-primary-glow transition-all text-center shadow-lg shadow-primary-glow/10"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}