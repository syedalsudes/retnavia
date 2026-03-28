"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Users, Award, Briefcase, Zap, Rocket, Sparkles } from "lucide-react";

const AboutPage = () => {
  const { scrollY } = useScroll();

  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleImage = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <div className="bg-background font-sans selection:bg-primary/30 overflow-hidden relative">

      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-primary-glow/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        <motion.div style={{ scale: scaleImage }} className="absolute inset-0 z-0">
          <Image
            src="/allheader.png"
            alt="About Us Background"
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
              Who We Are
            </span>
          </motion.div>

          <motion.h1
            style={{ y: yText, opacity: opacityHero }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-foreground text-[10vw] md:text-[8.5vw] font-light leading-none tracking-tighter uppercase whitespace-nowrap"
          >
            ABOUT <span className="italic text-primary/90 font-extralight">US.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 max-w-xl border-l border-primary/30 pl-8"
          >
            <p className="text-muted-foreground text-sm md:text-lg font-light leading-relaxed tracking-wide">
              We are a collective of strategists, designers, and engineers
              dedicated to building digital products that leave a lasting impact.
              Through purposeful code and visionary design, we transform ideas
              into world-class experiences.
            </p>
          </motion.div>

        </div>
      </section>

      <section className="relative py-32 md:py-48 px-6 md:px-12 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-foreground text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-8">
                Meet The Best <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-muted-foreground to-muted italic">Digital Agency.</span>
              </h2>
              <div className="border-l-[3px] border-primary/50 pl-6 space-y-5">
                <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                  We are a collective of visionaries, strategists, and creators dedicated to redefining the digital landscape through purposeful design and cutting-edge technology.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Best Price", icon: <Award />, color: "text-rose-400", bg: "bg-rose-400/10", border: "group-hover:border-rose-500/30" },
                { label: "Finance", icon: <CheckCircle2 />, color: "text-secondary", bg: "bg-secondary/10", border: "group-hover:border-secondary/30" },
                { label: "Pro Team", icon: <Users />, color: "text-amber-400", bg: "bg-amber-400/10", border: "group-hover:border-amber-500/30" }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center justify-center p-6 bg-white/[0.02] border border-white/[0.03] rounded-[2rem] transition-all duration-500 group ${item.border} hover:bg-white/[0.04] cursor-default`}>
                  <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ${item.color}`}>
                    {React.cloneElement(item.icon as React.ReactElement, { size: 22, strokeWidth: 1.5 })}
                  </div>
                  <h4 className="text-foreground/80 text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</h4>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[400px] md:h-[600px] w-full"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute top-10 right-0 md:-right-10 w-3/4 aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/[0.05] shadow-[0_0_50px_rgba(0,0,0,0.8)] z-0 hidden md:block"
            >
              <Image src="/aboutbg.png" alt="Support Work" fill className="object-cover brightness-[0.6] grayscale-[30%]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full md:w-4/5 aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border border-border shadow-2xl z-10"
            >
              <Image src="/aboutbg2.png" alt="Main Work" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-6 relative z-10 border-t border-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-white/[0.1] mb-6 backdrop-blur-sm"
          >
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em]">Core Values</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground text-4xl md:text-6xl lg:text-7xl font-light tracking-tight"
          >
            Our Commitment To <br className="hidden md:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Your Success.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "Innovative Solutions",
              desc: "Hum hamesha latest technology use karte hain taake aapka business futuristic lage.",
              icon: <Zap />,
              color: "text-primary",
              bgGlow: "group-hover:shadow-[0_0_30px_#c084fc20]"
            },
            {
              title: "Strategic Planning",
              desc: "Har project shuru karne se pehle hum aik solid strategy banate hain taake koi ghalti na ho.",
              icon: <Rocket />,
              color: "text-secondary",
              bgGlow: "group-hover:shadow-[0_0_30px_#3b82f620]"
            },
            {
              title: "24/7 Premium Support",
              desc: "Aapke har sawal aur masle ka hal nikalne ke liye hamari support team hamesha hazir hai.",
              icon: <Briefcase />,
              color: "text-accent",
              bgGlow: "group-hover:shadow-[0_0_30px_#818cf820]"
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative group p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.03] hover:border-white/[0.06] transition-all duration-500 ${value.bgGlow} overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className={`w-14 h-14 rounded-2xl bg-background/50 border border-border flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ${value.color} shadow-lg backdrop-blur-md`}>
                {React.cloneElement(value.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
              </div>

              <h4 className="text-foreground text-2xl font-medium mb-4 tracking-tight">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed font-light text-sm md:text-base">{value.desc}</p>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-border group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-primary transition-colors duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;