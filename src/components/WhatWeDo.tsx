"use client";

import React from "react";
import {
  Globe,
  Cloud,
  Sparkles,
  Database,
  Zap,
  Code2,
  Boxes,
  Terminal,
  Layers,
  Cpu,
  ShieldCheck,
  Workflow
} from "lucide-react";

const upperCompanies = [
  { name: "Vercel", icon: <Globe className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" /> },
  { name: "AWS", icon: <Cloud className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "OpenAI", icon: <Sparkles className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" /> },
  { name: "Supabase", icon: <Database className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "Stripe", icon: <Zap className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "Next.js", icon: <Code2 className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" /> },
  { name: "Docker", icon: <Boxes className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "PostgreSQL", icon: <Terminal className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" /> },
];

const lowerCompanies = [
  { name: "Tailwind CSS", icon: <Layers className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "Google Cloud", icon: <Cloud className="w-5 h-5 text-red-400 group-hover:rotate-12 transition-transform duration-300" /> },
  { name: "GitHub", icon: <Code2 className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "Redis", icon: <Cpu className="w-5 h-5 text-rose-400 group-hover:rotate-12 transition-transform duration-300" /> },
  { name: "Clerk", icon: <ShieldCheck className="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "GraphQL", icon: <Workflow className="w-5 h-5 text-pink-400 group-hover:rotate-12 transition-transform duration-300" /> },
  { name: "Prisma", icon: <Database className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" /> },
  { name: "Figma", icon: <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" /> },
];

const ClientMarquee = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col justify-center items-center py-20 bg-background overflow-hidden ">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-right-fast {
          display: flex;
          width: max-content;
          animation: marquee-right 25s linear infinite;
        }
        .animate-marquee-left-fast {
          display: flex;
          width: max-content;
          animation: marquee-left 25s linear infinite;
        }
      ` }} />

      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Side Fade Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

      {/* Heading Section */}
      <div className="relative z-10 text-center px-6 mb-12 max-w-5xl mx-auto">

        <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
          TRUSTED TECHNOLOGY PARTNERS
        </h2>

        <p className="text-gray-400 text-sm md:text-base font-normal mt-3 max-w-xl mx-auto leading-normal">
          Industry-proven software stack driving modern digital products.
        </p>
      </div>

      {/* Marquee Rows Container */}
      <div className="marquee-container relative z-10 w-full flex flex-col gap-6">
        {/* Row 1: Left to Right */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-right-fast flex items-center gap-4 pr-4">
            {[...upperCompanies, ...upperCompanies, ...upperCompanies].map((item, idx) => (
              <div
                key={`top-${idx}`}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-gray-300 font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/[0.08] hover:text-white hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="overflow-hidden flex">
          <div className="animate-marquee-left-fast flex items-center gap-4 pr-4">
            {[...lowerCompanies, ...lowerCompanies, ...lowerCompanies].map((item, idx) => (
              <div
                key={`bot-${idx}`}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md text-gray-300 font-medium text-sm md:text-base whitespace-nowrap transition-all duration-300 hover:border-purple-500/50 hover:bg-white/[0.08] hover:text-white hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;