"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end items-center pb-12">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 w-full max-w-5xl px-6 text-center">

        <h1 className="text-foreground text-5xl md:text-6xl font-medium tracking-tight mb-4">
          Code That Defines
          <span className="text-primary/90"> Tomorrow.</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl font-light mb-10 max-w-3xl mx-auto">
          Next-gen technology solutions for brands ready to lead the digital revolution.
        </p>

        <div className="inline-flex items-center bg-overlay backdrop-blur-xl border border-border p-1.5 rounded-full shadow-[0_0_40px_rgba(0,0,0,0.3)]">

          <Link href="/contact">
            <button className="flex items-center gap-3 bg-foreground text-background pl-6 pr-2 py-2 rounded-full font-bold hover:bg-muted transition-all duration-300 group">
              <span className="text-sm tracking-tight">Start Your Project</span>

              <div className="relative h-9 rounded-full overflow-hidden border-2 border-background/10 shadow-inner">
              </div>
            </button>
          </Link>

          <Link
            href="/portfolio"
            className="group flex items-center gap-1.5 text-foreground/90 text-sm font-semibold px-6 py-2 transition-all hover:text-foreground relative"
          >
            <div className="relative">
              <span>See our work</span>
              <div className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-foreground scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </div>

            <div className="relative overflow-hidden w-4 h-4">
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background/80 to-transparent z-[1]" />
    </section>
  );
};

export default HeroSection;