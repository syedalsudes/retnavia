import AboutUs from '@/components/AboutUs';
import CTA from '@/components/CatchTheSuccess';
import FAQ from '@/components/Faq';
import HeroSection from '@/components/HeroSection';
import OurWork from '@/components/OurWork';
import WhatWeDo from '@/components/WhatWeDo';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-purple-500/30">
      
      <HeroSection />

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