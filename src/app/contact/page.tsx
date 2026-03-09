"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, Send, Sparkles, Globe, ArrowRight } from "lucide-react";

const Contact = () => {
  const { scrollY } = useScroll();

  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="bg-black">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contactbg.png"
            alt="Contact Background"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>
        </div>

        <motion.div
          style={{ y: yText, opacity: opacityHero }}
          className="relative z-10 text-center px-6"
        >
          {/* <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8 backdrop-blur-md"
                    >
                        <Sparkles size={14} className="text-purple-400" />
                        <span className="text-purple-300 text-[10px] font-black uppercase tracking-[0.3em]">
                            Get in Touch
                        </span>
                    </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none"
          >
            GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-light">Touch</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-gray-500 text-[10px] uppercase tracking-[0.5em] rotate-90 mb-8">Scroll</span>
            <div className="w-[1px] h-24 bg-gradient-to-b from-purple-500 to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>


      <section className="relative bg-[#020202] py-24 px-6 md:px-12 overflow-hidden selection:bg-purple-500/30">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="space-y-6">
                <h2 className="text-white text-6xl md:text-6xl font-extrabold tracking-tight leading-[0.9]">
                  Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 italic">touch.</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light max-w-sm leading-relaxed">
                  Ready to transform your ideas into digital reality? We're just a message away.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <Mail />, label: "Email", val: "discover@retnavia.com" },
                  { icon: <Phone />, label: "Phone", val: "+971 4 242 1375" },
                  { icon: <MapPin />, label: "Office", val: "Sheikh Zayed Road, Dubai" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                      {React.cloneElement(item.icon, { size: 20 })}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-bold">{item.label}</p>
                      <p className="text-white text-lg font-medium">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Modern Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                {/* Subtle inner glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50"></div>

                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-gray-400 text-xs font-semibold ml-1">NAME</label>
                      <input type="text" placeholder="Your name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-gray-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-400 text-xs font-semibold ml-1">EMAIL</label>
                      <input type="email" placeholder="hello@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-gray-600" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-400 text-xs font-semibold ml-1">SUBJECT</label>
                    <input type="text" placeholder="How can we help?" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-gray-600" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-gray-400 text-xs font-semibold ml-1">MESSAGE</label>
                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none placeholder:text-gray-600"></textarea>
                  </div>

                  <button className="w-full group bg-purple-600 hover:bg-purple-500 text-white py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative">
                    <span className="relative z-10 flex items-center gap-2 tracking-wide">
                      SEND MESSAGE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;