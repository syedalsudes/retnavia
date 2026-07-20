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

        <ScrollReveal>
          <WhatWeDo />
        </ScrollReveal>

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

    </main>
  );
}