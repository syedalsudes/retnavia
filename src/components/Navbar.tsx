"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Our Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const servicesList = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Ecommerce Development", href: "/services/ecommerce" },
    { name: "ERP Software", href: "/services/erp" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Search Engine Optimization", href: "/services/seo" },
    { name: "Artificial Intelligence", href: "/services/ai" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "UI/UX Design", href: "/services/ui-ux" },
    { name: "Social Media Marketing", href: "/services/smm" },
    { name: "Digital Branding & Creatives", href: "/services/branding" },
    { name: "2D/3D Video Animation", href: "/services/animation" },
    { name: "Video Editing", href: "/services/video-editing" },
    { name: "Graphic Design Services", href: "/services/graphic-design" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 flex flex-col items-center py-4"
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      <motion.div
        initial={false}
        animate={{
          width: isScrolled ? "90%" : "95%",
          marginTop: isScrolled ? "10px" : "0px",
          borderRadius: isScrolled ? "50px" : "0px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.05)" : "transparent",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
        }}
        className={`flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-500 relative z-[100] ${
          isScrolled ? "backdrop-blur-md shadow-2xl" : ""
        }`}
      >
        <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
          retnavia<span className="text-purple-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onMouseEnter={() => link.hasDropdown ? setIsServicesOpen(true) : setIsServicesOpen(false)}
            >
              <Link
                href={link.href}
                className="group relative py-2 hover:text-white transition-colors duration-300"
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-purple-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side UI */}
        <div className="flex items-center gap-2 md:gap-4 z-[70]">
          <button className="hidden sm:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg">
            Get a Consultant
          </button>

          <div className="hidden md:flex items-center gap-3">
            <motion.div whileHover="hover" initial="initial" className="relative flex items-center bg-white/10 rounded-full border border-white/10 cursor-pointer overflow-hidden group">
              <div className="p-2.5 bg-white/10 text-white z-10"><Phone size={18} /></div>
              <motion.div variants={{ initial: { width: 0, opacity: 0 }, hover: { width: "auto", opacity: 1, paddingRight: "20px", paddingLeft: "10px" } }} className="overflow-hidden whitespace-nowrap">
                <span className="text-white text-xs font-bold tracking-tighter">+971 4 242 1375</span>
              </motion.div>
            </motion.div>
            <motion.div whileHover="hover" initial="initial" className="relative flex items-center bg-white/10 rounded-full border border-white/10 cursor-pointer overflow-hidden group">
              <div className="p-2.5 bg-white/10 text-white z-10"><Mail size={18} /></div>
              <motion.div variants={{ initial: { width: 0, opacity: 0 }, hover: { width: "auto", opacity: 1, paddingRight: "20px", paddingLeft: "10px" } }} className="overflow-hidden whitespace-nowrap">
                <span className="text-white text-xs font-bold tracking-tighter">hello@retnavia.com</span>
              </motion.div>
            </motion.div>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-white z-[80]">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
  {isServicesOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "circOut" }}
      // Yahan humne bg-black/60 (transparency) aur backdrop-blur-xl add kiya hai
      className="fixed top-0 left-0 w-full h-auto bg-black/60 backdrop-blur-xl border-b border-white/10 z-[80] pt-[120px] pb-16 shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
      onMouseEnter={() => setIsServicesOpen(true)}
    >
      <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-12 items-center relative">
        {/* Services Grid */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-x-10 gap-y-2">
          {servicesList.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="flex items-center justify-between group/item p-4 rounded-xl hover:bg-white/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,1)]" />
                <span className="text-gray-300 text-lg font-normal group-hover/item:text-white transition-colors">
                  {service.name}
                </span>
              </div>
              <ChevronRight
                size={18}
                className="text-gray-600 group-hover/item:text-purple-500 group-hover/item:translate-x-2 transition-all"
              />
            </Link>
          ))}
        </div>

        {/* Right: Large Watermark (Retnavia) */}
        <div className="hidden lg:flex col-span-4 justify-end items-center absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none">
          <h2 className="text-[10vw] font-black tracking-[-0.05em] leading-none select-none opacity-[0.05] text-white uppercase italic">
            retnavia
          </h2>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;