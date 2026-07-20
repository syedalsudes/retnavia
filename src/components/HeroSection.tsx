"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {

  const STATS_DATA = [
    { label: "Code Quality", value: "100%" },
    { label: "Design Sprint", value: "Fast Track" },
    { label: "Support", value: "24/7 Direct" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-background py-20 lg:py-0">
      <Image
        src="/ho.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-fit object-cover z-0 opacity-40 select-none"
      />

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/20 to-background/80 pointer-events-none" />

      {/* Added pt-16 md:pt-24 to shift content down */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center gap-8 text-center pt-16 md:pt-28">

        <div className="flex-1 text-center max-w-4xl mx-auto">
          {/* H1 in 1 line */}
          <h1
            className="text-foreground font-black tracking-tight leading-[1.1] mb-6 uppercase max-w-4xl mx-auto"
            style={{ fontSize: "clamp(1.75rem, 3.8vw, 3.2rem)" }}
          >
            Automate Your Business With AI Agents That Work 24/7
          </h1>

          {/* Description: Bigger & Clean 2 lines */}
          <p className="text-muted-foreground font-medium mb-10 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            We build AI agents, modern web apps, and automations that reduce manual work and help businesses grow.
          </p>

          {/* Buttons with Glow Effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Link href="/consultant" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-9 py-4 bg-foreground text-background font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] active:scale-95">
                Start Project
              </button>
            </Link>

            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 py-4 border border-foreground/30 text-foreground font-semibold rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:border-foreground hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:bg-foreground/5 active:scale-95">
                <span>View Work</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
            {STATS_DATA.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-lg md:text-2xl font-bold text-foreground whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold leading-tight mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;