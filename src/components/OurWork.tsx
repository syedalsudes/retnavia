"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Ecosystem",
    category: "Web Development",
    desc: "A high-performance scalable store built with Next.js and Headless CMS.",
    image: "/websitepic.png",
  },
  {
    title: "Fintech Mobile App",
    category: "App Development",
    desc: "Secure, real-time banking experience with biometric authentication.",
    image: "/appdev.png",
  },
  {
    title: "Organic Search Growth",
    category: "SEO & Content",
    desc: "Increased organic traffic by 300% for a global SaaS platform.",
    image: "/seo.png",
  },
  {
    title: "Modern Brand Identity",
    category: "Graphic Design",
    desc: "Complete visual rebranding and guidelines for a tech startup.",
    image: "/branding.png",
  },
  {
    title: "AI Chatbot Integration",
    category: "AI Solutions",
    desc: "Automating customer support with custom trained LLM models.",
    image: "/ai.png",
  },
  {
    title: "Cloud Infrastructure",
    category: "DevOps",
    desc: "Zero-downtime migration to AWS for a high-traffic media house.",
    image: "/cloude.png",
  },
];

const OurWork = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Header Section - Left Aligned */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-purple-500 font-bold uppercase tracking-[0.3em] text-[10px]">Case Studies</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl md:text-7xl font-bold tracking-tighter leading-none"
            >
              Our Work. <br />
              <span className="text-white/20 italic font-light">Digital Masterpieces.</span>
            </motion.h1>
          </div>
          
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-gray-500 text-sm max-w-[280px] leading-relaxed border-l border-white/10 pl-6"
          >
            We blend aesthetic excellence with technical durability to build products that last.
          </motion.p>
        </div>

        
        {/* 2. Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-purple-500 text-xs font-bold uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-semibold mt-2 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Explore Link */}
                <div className="mt-6 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Project <div className="h-[1px] w-8 bg-purple-500"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;