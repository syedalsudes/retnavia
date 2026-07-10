"use client";

import React from "react";
import { Instagram, ArrowUpRight, Facebook, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms", href: "/terms-of-service" },
    { name: "Policy", href: "/privacy-policy" },
  ];

  const socialLinks = [
    {
      icon: <Instagram size={16} />,
      link: "https://www.instagram.com/retnaviasolutions/",
      colorClass: "hover:bg-white/20 hover:text-white hover:border-white/40"
    },
    {
      icon: <Facebook size={16} />,
      link: "https://www.facebook.com/retnaviasolutions",
      colorClass: "hover:bg-white/20 hover:text-white hover:border-white/40"
    },
    // {
    //   icon: <MessageCircle size={16} />,
    //   link: "https://wa.me/17472177426",
    //   colorClass: "hover:bg-white/20 hover:text-white hover:border-white/40"
    // },
    {
      icon: <Mail size={16} />,
      link: "mailto:info@retnavia.com",
      colorClass: "hover:bg-white/20 hover:text-white hover:border-white/40"
    },
  ];

  return (
    <footer className="w-full py-16 md:pt-24 pb-10 px-6 relative overflow-hidden bg-gradient-to-br from-purple-600 via-fuchsia-500 to-pink-500 text-white">
      
      <div className="absolute inset-0 z-0 opacity-[0.07]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #FFF 1px, transparent 1px),
            linear-gradient(to bottom, #FFF 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px'
        }}
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-14 mb-10 md:mb-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-purple-100 hover:text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-300"
            >
              <span className="relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </span>
            </Link>
          ))}
        </nav>

        <div className="w-full text-center mb-4 md:mb-6 relative">
          <h2 className="text-[18vw] md:text-[15vw] font-black tracking-[-0.08em] leading-none select-none opacity-10 text-white uppercase">
            retnavia
          </h2>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl md:text-7xl font-black tracking-tighter mb-2 md:mb-4 text-white">
              retnavia<span>.</span>
            </div>
            <p className="text-purple-100 text-[8px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold opacity-90 px-4">
              Building the future, one pixel at a time
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-4 md:mb-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/10 border border-white/20 rounded-full text-purple-50 transition-all duration-500 hover:-translate-y-1 shadow-sm ${social.colorClass}`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="w-full pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-purple-100 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-center md:text-left order-2 md:order-1">
            © {currentYear} retnavia <span className="mx-2 opacity-20 hidden md:inline">|</span>
            <br className="md:hidden" />
            <span className="text-purple-200">All rights reserved.</span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center order-1 md:order-2">
            <div className="flex gap-6">
              {legalLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-purple-100 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group hover:border-white transition-all duration-300 bg-white/10 shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUpRight size={14} className="text-purple-100 group-hover:text-white transition-transform duration-300 group-hover:rotate-[-45deg]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;