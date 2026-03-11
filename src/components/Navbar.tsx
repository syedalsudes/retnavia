"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const [mobileView, setMobileView] = useState<"main" | "services">("main");

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    // { name: "Blog", href: "/blog" },
  ];

  const servicesList = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "Ecommerce Development", href: "/services/ecommerce" },
    { name: "UI/UX Design", href: "/services/ui-ux" },
    { name: "ERP Software", href: "/services/erp" },
    { name: "IT Resource Outsourcing", href: "/services/outsourcing" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Artificial Intelligence", href: "/services/ai" },
    { name: "Search Engine Optimization", href: "/services/seo" },
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

  // Mobile menu close karne par view reset karne ka function
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setMobileView("main"), 300);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] flex flex-col items-center py-4"
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      <motion.div
        initial={false}
        animate={{
          width: isScrolled ? "90%" : "95%",
          marginTop: isScrolled ? "10px" : "0px",
          borderRadius: isScrolled ? "50px" : "0px",
          backgroundColor: isScrolled ? "var(--bg-overlay)" : "transparent",
          border: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
        }}
        className={`flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-500 relative z-[100] ${
          isScrolled ? "backdrop-blur-md shadow-2xl" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-foreground tracking-tighter" onClick={closeMobileMenu}>
          retnavia<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground uppercase tracking-wider">
          {navLinks.map((link) => (
            <li
              key={link.name}
              onMouseEnter={() => link.hasDropdown ? setIsServicesOpen(true) : setIsServicesOpen(false)}
            >
              <Link
                href={link.href}
                className="group relative py-2 hover:text-foreground transition-colors duration-300"
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side UI (Desktop) */}
        <div className="flex items-center gap-2 md:gap-4 z-[70]">
          <button className="hidden sm:block bg-gradient-to-r from-primary-glow to-secondary text-foreground px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg uppercase tracking-wide">
            Get a Consultant
          </button>

          <div className="hidden md:flex items-center gap-3">
            <motion.div whileHover="hover" initial="initial" className="relative flex items-center bg-overlay rounded-full border border-border cursor-pointer overflow-hidden group">
              <div className="p-2.5 bg-overlay text-foreground z-10"><Phone size={18} /></div>
              <motion.div variants={{ initial: { width: 0, opacity: 0 }, hover: { width: "auto", opacity: 1, paddingRight: "20px", paddingLeft: "10px" } }} className="overflow-hidden whitespace-nowrap">
                <span className="text-foreground text-xs font-bold tracking-tighter">+971 4 242 1375</span>
              </motion.div>
            </motion.div>
            <motion.div whileHover="hover" initial="initial" className="relative flex items-center bg-overlay rounded-full border border-border cursor-pointer overflow-hidden group">
              <div className="p-2.5 bg-overlay text-foreground z-10"><Mail size={18} /></div>
              <motion.div variants={{ initial: { width: 0, opacity: 0 }, hover: { width: "auto", opacity: 1, paddingRight: "20px", paddingLeft: "10px" } }} className="overflow-hidden whitespace-nowrap">
                <span className="text-foreground text-xs font-bold tracking-tighter">hello@retnavia.com</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Hamburger / Close Toggle (Mobile) */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="lg:hidden p-2 text-foreground z-[110] transition-transform duration-300"
          >
            {isMobileMenuOpen ? (
              <div className="bg-foreground text-background rounded-full p-1 shadow-lg">
                <X size={20} strokeWidth={3} />
              </div>
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </motion.div>

      {/* ========================================= */}
      {/* 1. DESKTOP SERVICES MEGA MENU (Dropdown)  */}
      {/* ========================================= */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="hidden lg:block fixed top-0 left-0 w-full h-auto bg-background/80 backdrop-blur-xl border-b border-border z-[80] pt-[120px] pb-16 shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
            onMouseEnter={() => setIsServicesOpen(true)}
          >
            <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-12 items-center relative">
              <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-x-10 gap-y-2">
                {servicesList.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="flex items-center justify-between group/item p-4 rounded-xl hover:bg-overlay transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary-glow)]" />
                      <span className="text-muted-foreground text-[15px] font-normal group-hover/item:text-foreground transition-colors uppercase tracking-wide">
                        {service.name}
                      </span>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-muted group-hover/item:text-primary group-hover/item:translate-x-2 transition-all"
                    />
                  </Link>
                ))}
              </div>

              <div className="hidden lg:flex col-span-4 justify-end items-center absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none">
                <h2 className="text-[10vw] font-black tracking-[-0.05em] leading-none select-none opacity-[0.03] text-foreground uppercase italic">
                  retnavia
                </h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-background z-[90] flex flex-col pt-28 px-6 pb-10 overflow-y-auto custom-scrollbar"
          >
            <AnimatePresence mode="wait">
              {mobileView === "main" && (
                <motion.div
                  key="main"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col w-full"
                >
                  {navLinks.map((link, idx) => (
                    <div key={idx} className="border-b border-border">
                      {link.hasDropdown ? (
                        <button
                          onClick={() => setMobileView("services")}
                          className="w-full flex items-center justify-between py-6 text-xl font-bold text-foreground"
                        >
                          {link.name}
                          <div className="border border-border p-1 rounded-sm">
                            <ChevronRight size={20} className="text-foreground" />
                          </div>
                        </button>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="w-full flex items-center justify-between py-6 text-xl font-bold text-foreground"
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}

              {/* --- SERVICES NESTED VIEW --- */}
              {mobileView === "services" && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col w-full"
                >
                  {/* Back Button */}
                  <div className="border-b border-border pb-6 mb-2">
                    <button
                      onClick={() => setMobileView("main")}
                      className="flex items-center gap-2 text-foreground text-lg font-medium hover:text-primary transition-colors"
                    >
                      <ChevronLeft size={20} />
                      Back
                    </button>
                  </div>

                  {/* Services List matching the screenshot */}
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between py-5 border-b border-border group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary-glow)]" />
                        <span className="text-foreground text-[16px] font-medium group-hover:text-primary transition-colors">
                          {service.name}
                        </span>
                      </div>
                      <ChevronRight size={18} className="text-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Footer / Contact Info */}
            <div className="mt-auto pt-10 flex flex-col gap-4">
              <span className="text-muted-foreground text-sm uppercase tracking-widest">Get in touch</span>
              <a href="mailto:hello@retnavia.com" className="text-foreground text-lg font-medium">hello@retnavia.com</a>
              <a href="tel:+97142421375" className="text-foreground text-lg font-medium">+971 4 242 1375</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;