"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ease-in-out py-4">
      <motion.div
        initial={false}
        animate={{
          width: isScrolled ? "85%" : "95%",
          marginTop: isScrolled ? "10px" : "0px",
          borderRadius: isScrolled ? "50px" : "0px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.05)" : "transparent",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
        }}
        className={`flex items-center justify-between px-8 py-3 transition-all duration-500 ${
          isScrolled ? "backdrop-blur-md shadow-2xl" : ""
        }`}
      >
        {/* Logo Section */}
        <div className="text-2xl font-bold text-white tracking-tighter">
          retnavia<span className="text-purple-500">.</span>
        </div>

        {/* Links Section */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {["Services", "Industry", "Our Work", "About", "Blog", "Career"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform active:scale-95 shadow-lg">
            Get a Consultant
          </button>
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-colors border border-white/10">
              <Mail size={18} className="text-white" />
            </div>
            <div className="p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer transition-colors border border-white/10">
              <Phone size={18} className="text-white" />
            </div>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;