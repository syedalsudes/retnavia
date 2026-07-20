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
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-background py-16 md:py-24 lg:py-0">
      {/* Background Image Fix for All Screen Heights/Widths */}
      <Image
        src="/ho.jpg"
        alt="Hero Background Image"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 select-none pointer-events-none"
      />

      {/* Dynamic Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/30 to-background/90 pointer-events-none" />

      {/* Main Content Container with Ultra-Wide Scale Support */}
      <div className="relative z-10 w-full max-w-7xl 2xl:max-w-[90rem] px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center gap-8 text-center pt-20 md:pt-28 lg:pt-16">
        
        <div className="flex-1 text-center max-w-4xl 2xl:max-w-6xl mx-auto">
          {/* Responsive Scaling H1 Heading */}
          <h1
            className="text-foreground font-black tracking-tight leading-[1.05] mb-6 uppercase"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}
          >
            Build the Future.
          </h1>

          {/* Description Paragraph */}
          <p className="text-muted-foreground font-medium mb-10 max-w-2xl 2xl:max-w-4xl mx-auto text-base sm:text-lg md:text-xl 2xl:text-2xl leading-relaxed">
            Architecting high-performance digital solutions for brands that refuse to settle in an ever-evolving world.
          </p>

          {/* Buttons with Smooth Scales */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 w-full max-w-md sm:max-w-none mx-auto">
            <Link href="/consultant" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 sm:px-10 py-4 bg-foreground text-background font-bold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] active:scale-95">
                Start Project
              </button>
            </Link>

            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-8 sm:px-10 py-4 border border-foreground/30 text-foreground font-semibold text-sm sm:text-base rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:border-foreground hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:bg-foreground/5 active:scale-95">
                <span>View Work</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Stats Bar Component */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 max-w-lg 2xl:max-w-2xl mx-auto pt-4">
            {STATS_DATA.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-base sm:text-xl md:text-2xl 2xl:text-3xl font-bold text-foreground whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-semibold leading-tight mt-1 text-center">
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