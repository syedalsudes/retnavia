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
  ];

  const servicesList = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app" },
    { name: "Ecommerce Development", href: "/services/ecommerce" },
    { name: "UI/UX Design", href: "/services/ui-ux" },
    { name: "ERP Software", href: "/services/erp" },
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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => setMobileView("main"), 300);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[100] flex flex-col items-center py-0 lg:py-4"
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      <div
        className={`
          flex items-center justify-between py-3 transition-all duration-500 ease-in-out relative z-[110]
          w-full bg-overlay/90 backdrop-blur-md border-b border-border px-6
          ${isScrolled
            ? "lg:w-[90%] lg:mt-2 lg:rounded-full lg:border lg:border-border lg:bg-overlay/80 lg:shadow-2xl lg:px-10"
            : "lg:w-full lg:mt-0 lg:rounded-none lg:border-transparent lg:bg-transparent lg:backdrop-blur-none lg:px-20"
          }
        `}
      >
        <Link href="/" className="text-2xl font-bold text-foreground tracking-tighter" onClick={closeMobileMenu}>
          retnavia<span className="text-primary">.</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-foreground uppercase tracking-wider h-full">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative py-2"
              onMouseEnter={() => link.hasDropdown ? setIsServicesOpen(true) : setIsServicesOpen(false)}
            >
              <Link
                href={link.href}
                onClick={() => setIsServicesOpen(false)}
                className="group relative py-2 hover:text-foreground transition-colors duration-200"
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden sm:block bg-gradient-to-r from-primary-glow to-secondary text-foreground px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg uppercase tracking-wide">
            Get a Consultant
          </button>
          <div className="hidden md:flex items-center gap-3">
            <div className="relative flex items-center bg-overlay rounded-full border border-border cursor-pointer overflow-hidden group h-10">
              <div className="p-2.5 bg-overlay text-foreground z-10"><Phone size={18} /></div>
              <div className="max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-5 group-hover:pl-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                <span className="text-foreground text-xs font-bold tracking-tighter">+971 4 242 1375</span>
              </div>
            </div>

            <div className="relative flex items-center bg-overlay rounded-full border border-border cursor-pointer overflow-hidden group h-10">
              <div className="p-2.5 bg-overlay text-foreground z-10"><Mail size={18} /></div>
              <div className="max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:pr-5 group-hover:pl-2 transition-all duration-500 overflow-hidden whitespace-nowrap">
                <span className="text-foreground text-xs font-bold tracking-tighter">info@retnavia.com</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground z-[120]"
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
      </div>

      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block fixed top-0 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border z-[80] pt-[120px] pb-16 shadow-2xl"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="max-w-[1400px] mx-auto px-12 grid grid-cols-12 items-center relative">
              <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-x-10 gap-y-2">
                {servicesList.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    onClick={() => setIsServicesOpen(false)}
                    className="flex items-center justify-between group/item p-4 rounded-xl hover:bg-overlay transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary-glow)]" />
                      <span className="text-muted-foreground text-[15px] font-normal group-hover/item:text-foreground transition-colors uppercase tracking-wide">
                        {service.name}
                      </span>
                    </div>
                    <ChevronRight size={18} className="text-muted group-hover/item:text-primary group-hover/item:translate-x-2 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 w-full h-screen bg-background z-[90] flex flex-col pt-28 px-6 pb-10 overflow-y-auto"
          >
            <AnimatePresence mode="wait">
              {mobileView === "main" && (
                <motion.div
                  key="main"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex flex-col w-full"
                >
                  {navLinks.map((link, idx) => (
                    <div key={idx} className="border-b border-border flex items-center justify-between">
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="flex-1 py-6 text-xl font-bold text-foreground"
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <button
                          onClick={() => setMobileView("services")}
                          className="p-4 border-l border-border ml-2"
                        >
                          <div className="border border-border p-1 rounded-sm">
                            <ChevronRight size={20} className="text-foreground" />
                          </div>
                        </button>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}

              {mobileView === "services" && (
                <motion.div
                  key="services"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col w-full"
                >
                  <div className="border-b border-border pb-6 mb-2">
                    <button onClick={() => setMobileView("main")} className="flex items-center gap-2 text-foreground text-lg font-medium">
                      <ChevronLeft size={20} /> Back
                    </button>
                  </div>
                  {servicesList.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={closeMobileMenu}
                      className="flex items-center justify-between py-5 border-b border-border"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        <span className="text-foreground text-[16px] font-medium">{service.name}</span>
                      </div>
                      <ChevronRight size={18} />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

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