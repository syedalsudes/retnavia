"use client";
import AboutUs from '@/components/AboutUs';
import CTA from '@/components/CatchTheSuccess';
import FAQ from '@/components/Faq';
import HeroSection from '@/components/HeroSection';
import OurWork from '@/components/OurWork';
import WhatWeDo from '@/components/WhatWeDo';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30">
      
      <div className="relative z-10">
        <HeroSection />
      </div>

      <section className="sticky top-0 z-30 min-h-screen bg-background shadow-[0_-50px_100px_rgba(0,0,0,0.9)]">
        <ScrollReveal>
          <WhatWeDo />
        </ScrollReveal>
      </section>

      <div className="relative z-40 bg-background">
        <ScrollReveal>
          <OurWork />
        </ScrollReveal>

        <ScrollReveal>
          <AboutUs />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
        </ScrollReveal>

        <ScrollReveal>
          <CTA />
        </ScrollReveal>
      </div>

    </main>
  );
}