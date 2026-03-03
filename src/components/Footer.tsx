"use client";

import React from "react";
import { Instagram, Twitter, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Next.js Link use karna behtar hai
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Aapki provided navLinks array
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-[#030303] text-white pt-24 pb-12 px-6 border-t border-white/[0.05] relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        <nav className="flex flex-wrap justify-center gap-6 md:gap-14 mb-20">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="group relative text-gray-500 hover:text-white text-[11px] font-black uppercase tracking-[0.3em] transition-colors duration-300"
            >
              <span className="relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="w-full text-center mb-20 relative">
          <h2 className="text-[15vw] font-black tracking-[-0.08em] leading-none select-none opacity-[0.03] text-white">
            retnavia
          </h2>
          
          {/* Main Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-4 md:pt-8">
            <div className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              retnavia<span className="text-purple-500">.</span>
            </div>
            <p className="text-gray-500 text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold opacity-60">
              Building the future, one pixel at a time
            </p>
          </div>
        </div>

        {/* 3. Social Icons */}
        <div className="flex items-center gap-4 mb-20">
          {[
            { icon: <Instagram size={18} />, link: "#" },
            { icon: <Twitter size={18} />, link: "#" },
            { icon: <Linkedin size={18} />, link: "#" },
            { icon: <Github size={18} />, link: "#" },
            { icon: <Mail size={18} />, link: "#" },
          ].map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              className="w-12 h-12 flex items-center justify-center bg-white/[0.03] border border-white/[0.08] rounded-full text-gray-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:-translate-y-1 transition-all duration-500"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* 4. Bottom Section: Legal & Back to Top */}
        <div className="w-full pt-10 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} retnavia <span className="mx-2 opacity-20">|</span> 
            <span className="text-gray-700">All rights reserved.</span>
          </div>

          <div className="flex gap-8 items-center">
            {["Terms", "Policy"].map(item => (
              <Link key={item} href="#" className="text-gray-600 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">
                {item}
              </Link>
            ))}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ml-4 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:border-purple-500 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUpRight size={14} className="text-gray-500 group-hover:text-purple-500 transition-colors" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;