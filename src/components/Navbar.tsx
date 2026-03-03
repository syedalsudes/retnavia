"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Work", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col items-center transition-all duration-500 ease-in-out py-4">
      <motion.div
        initial={false}
        animate={{
          width: isScrolled ? "90%" : "95%",
          marginTop: isScrolled ? "10px" : "0px",
          borderRadius: isScrolled ? "50px" : "0px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.05)" : "transparent",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
        }}
        className={`flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-500 ${isScrolled ? "backdrop-blur-md shadow-2xl" : ""
          }`}
      >
        <Link href="/" className="text-2xl font-bold text-white tracking-tighter z-[60]">
          retnavia<span className="text-purple-500">.</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name}>
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

        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden sm:block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg">
            Get a Consultant
          </button>

          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileHover="hover"
              initial="initial"
              className="relative flex items-center bg-white/10 rounded-full border border-white/10 cursor-pointer overflow-hidden group"
            >
              <div className="p-2.5 bg-white/10 text-white z-10">
                <Phone size={18} />
              </div>
              <motion.div
                variants={{
                  initial: { width: 0, opacity: 0 },
                  hover: { width: "auto", opacity: 1, paddingRight: "20px", paddingLeft: "10px" }
                }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-white text-xs font-bold tracking-tighter">
                  +971 4 242 1375
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover="hover"
              initial="initial"
              className="relative flex items-center bg-white/10 rounded-full border border-white/10 cursor-pointer overflow-hidden group"
            >
              <div className="p-2.5 bg-white/10 text-white z-10">
                <Mail size={18} />
              </div>
              <motion.div
                variants={{
                  initial: { width: 0, opacity: 0 },
                  hover: { width: "auto", opacity: 1, paddingRight: "20px", paddingLeft: "10px" }
                }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-white text-xs font-bold tracking-tighter">
                  hello@retnavia.com
                </span>
              </motion.div>
            </motion.div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white z-[60]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden z-50"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-bold text-white uppercase tracking-widest">
              {navLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link href={link.href} className="hover:text-purple-500 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 flex gap-6">
              <div className="p-4 bg-white/5 rounded-full border border-white/10">
                <Mail size={24} className="text-white" />
              </div>
              <div className="p-4 bg-white/5 rounded-full border border-white/10">
                <Phone size={24} className="text-white" />
              </div>
            </div>

            <button className="mt-10 bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter">
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;