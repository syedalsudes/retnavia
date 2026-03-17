"use client";

import React from "react";
import { Instagram, Twitter, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <Instagram size={18} />, link: "#" },
    { icon: <Twitter size={18} />, link: "#" },
    { icon: <Linkedin size={18} />, link: "#" },
    { icon: <Github size={18} />, link: "#" },
    { icon: <Mail size={18} />, link: "#" },
  ];

  return (
    <footer className="bg-background text-foreground pt-20 md:pt-32 pb-10 px-6 border-t border-white/[0.03] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-14 mb-16 md:mb-24">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="group relative text-muted-foreground hover:text-foreground text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-300"
            >
              <span className="relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="w-full text-center mb-16 md:mb-24 relative">
          <h2 className="text-[18vw] md:text-[15vw] font-black tracking-[-0.08em] leading-none select-none opacity-[0.04] text-foreground uppercase">
            retnavia
          </h2>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl md:text-7xl font-black tracking-tighter mb-2 md:mb-4">
              retnavia<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground text-[8px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold opacity-40 px-4">
              Building the future, one pixel at a time
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 md:mb-24">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.link} 
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/[0.02] border border-white/[0.05] rounded-full text-muted-foreground hover:bg-primary/10 hover:text-foreground hover:border-primary/30 hover:-translate-y-1 transition-all duration-500"
            >
              {React.cloneElement(social.icon as React.ReactElement, { size: 16 })}
            </a>
          ))}
        </div>

        <div className="w-full pt-8 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-muted-foreground text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-center md:text-left order-2 md:order-1">
            © {currentYear} retnavia <span className="mx-2 opacity-20 hidden md:inline">|</span> 
            <br className="md:hidden" />
            <span className="text-muted-foreground/50">All rights reserved.</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center order-1 md:order-2">
            <div className="flex gap-6">
              {["Terms", "Policy"].map(item => (
                <Link key={item} href="#" className="text-muted-foreground hover:text-foreground text-[10px] font-bold uppercase tracking-[0.2em] transition-colors">
                  {item}
                </Link>
              ))}
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group hover:border-primary transition-all duration-300 bg-white/[0.02]"
              aria-label="Back to top"
            >
              <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-transform duration-300 group-hover:rotate-[-45deg]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;