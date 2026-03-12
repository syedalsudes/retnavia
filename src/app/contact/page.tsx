"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

const Contact = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  const [activeService, setActiveService] = useState("");

  const servicesList = [
    "Web Development", "Mobile App", "UI/UX Design", "AI Integration", "SEO / Marketing", "Other"
  ];

  return (
    <div className="bg-background selection:bg-primary/30">
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        <motion.div className="absolute inset-0 z-0">
          <Image
            src="/allheader.png"
            alt="Contact Background"
            fill
            className="object-cover opacity-40 grayscale-[0.6] contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/20 to-background" />
        </motion.div>

        <div className="relative z-10 max-w-7xl px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-muted-foreground text-[10px] uppercase tracking-[0.5em] font-medium">
              Let's Collaborate
            </span>
          </motion.div>

          <motion.h1
            style={{ y: yText, opacity: opacityHero }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-[10vw] md:text-[8.5vw] font-light leading-none tracking-tighter uppercase whitespace-nowrap"
          >
            GET IN <span className="italic text-primary/90 font-extralight">TOUCH.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-xl border-l border-primary/30 pl-8"
          >
            <p className="text-muted-foreground text-sm md:text-lg font-light leading-relaxed tracking-wide">
              Have a groundbreaking idea or a complex problem? We're here to help
              you engineer the solution. Reach out and let's build something
              extraordinary together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute -bottom-24 md:-bottom-16 left-8"
          >
            <p className="text-muted-foreground/40 text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left">
              Scroll to reach out
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-glow/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-secondary/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-12 sticky top-32"
            >
              <div className="space-y-6">
                <h2 className="text-foreground text-5xl md:text-6xl font-bold tracking-tight leading-[1]">
                  Let's build <br /> something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent italic font-light">epic.</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light max-w-sm leading-relaxed">
                  Have a project in mind, need technical consultation, or just want to say hi? Drop us a line.
                </p>
              </div>

              <div className="space-y-8 pt-8 border-t border-border">
                {[
                  { icon: <Mail />, label: "Direct Email", val: "discover@retnavia.com" },
                  { icon: <Phone />, label: "Call Us", val: "+971 4 242 1375" },
                  { icon: <MapPin />, label: "Headquarters", val: "Sheikh Zayed Road, Dubai" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-overlay border border-border flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                      {React.cloneElement(item.icon, { size: 22, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <p className="text-muted text-xs uppercase tracking-[0.2em] font-bold mb-1">{item.label}</p>
                      <p className="text-foreground text-lg font-medium tracking-tight">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bg-overlay/30 border border-border p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -mr-32 -mt-32 transition-opacity group-hover:opacity-100 opacity-50"></div>

                <form className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Work Email</label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">I'm interested in...</label>
                    <div className="flex flex-wrap gap-3">
                      {servicesList.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setActiveService(service)}
                          className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${activeService === service
                              ? "bg-primary border-primary text-background shadow-[0_0_15px_var(--primary-glow)]"
                              : "bg-overlay border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                            }`}
                        >
                          {activeService === service && <CheckCircle2 size={14} className="text-background" />}
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Company / Website</label>
                      <input type="text" placeholder="company.com (optional)" className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted" />
                    </div>

                    <div className="space-y-2 relative">
                      <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Project Timeline</label>
                      <div className="relative">
                        <select className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all appearance-none cursor-pointer">
                          <option value="" disabled selected className="text-muted bg-background">When to start?</option>
                          <option value="asap" className="bg-background text-foreground">As soon as possible</option>
                          <option value="1-3-months" className="bg-background text-foreground">Within 1-3 months</option>
                          <option value="3-6-months" className="bg-background text-foreground">Within 3-6 months</option>
                          <option value="exploring" className="bg-background text-foreground">Just exploring options</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-muted-foreground text-xs font-bold tracking-widest uppercase ml-1">Project Details</label>
                    <textarea rows={4} placeholder="Tell us about your goals, current challenges, and what you want to achieve..." className="w-full bg-overlay border border-border rounded-2xl px-6 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none placeholder:text-muted"></textarea>
                  </div>

                  <button className="w-full group bg-primary text-background py-5 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative mt-4">
                    <span className="relative z-10 flex items-center gap-2 tracking-widest uppercase text-sm text-foreground">
                      Submit Request <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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