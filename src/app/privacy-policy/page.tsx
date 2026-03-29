import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Retnavia Solutions',
  description: 'Retnavia Solutions global privacy framework and data protection protocols for enterprise clients.',
}

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 bg-background text-foreground font-sans">
      <div className="mb-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground tracking-tighter uppercase italic">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest">Version 2.1</span>
          <span>Last Updated: March 30, 2026</span>
        </div>
      </div>

      <div className="mb-20 p-8 border border-border bg-overlay/20 rounded-3xl backdrop-blur-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Table of Contents</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground underline-offset-4 decoration-primary/30">
          <li><a href="#collection" className="hover:text-primary transition-colors hover:underline">01. Information Collection</a></li>
          <li><a href="#usage" className="hover:text-primary transition-colors hover:underline">02. Data Processing & Usage</a></li>
          <li><a href="#ai-security" className="hover:text-primary transition-colors hover:underline">03. AI Safety & IP Isolation</a></li>
          <li><a href="#retention" className="hover:text-primary transition-colors hover:underline">04. Data Retention & Erasure</a></li>
          <li><a href="#cookies" className="hover:text-primary transition-colors hover:underline">05. Tracking & Analytics</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors hover:underline">06. Legal & Compliance Support</a></li>
        </ul>
      </div>

      <section className="space-y-24">
        
        <div id="collection" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <span className="text-primary font-mono text-sm border border-border px-2 py-1 rounded">01</span>
            Data Collection Protocols
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Retnavia Solutions (&quot;The Agency&quot;) operates as a premium tech studio. We collect professional data essential for project lifecycle management, including:
            </p>
            <ul className="list-disc ml-6 space-y-2 italic">
              <li>Direct Identifiers: Name, Business Email, and Corporate Contact Numbers.</li>
              <li>Technical Metadata: IP Address, Browser Archetype, and Navigation Patterns via Meta Pixel.</li>
              <li>Project Data: Technical requirements, business logic, and architectural preferences provided during consultations.</li>
            </ul>
          </div>
        </div>

        <div id="usage" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
             <span className="text-primary font-mono text-sm border border-border px-2 py-1 rounded">02</span>
             Processing & Operational Usage
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We process data under the legal basis of **Contractual Necessity** and **Legitimate Interest**. Your data is utilized to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-2xl bg-overlay/40">
              <h3 className="font-bold text-accent mb-2 uppercase text-xs tracking-widest italic">Service Delivery</h3>
              <p className="text-sm">Managing technical sprints, software deployment, and AI system maintenance for your organization.</p>
            </div>
            <div className="p-6 border border-border rounded-2xl bg-overlay/40">
              <h3 className="font-bold text-accent mb-2 uppercase text-xs tracking-widest italic">Optimization</h3>
              <p className="text-sm">Monitoring studio performance and optimizing our digital outreach in the USA, EU, and UAE markets.</p>
            </div>
          </div>
        </div>

        <div id="ai-security" className="scroll-mt-24 p-10 bg-primary/5 border border-border rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-primary text-6xl font-bold italic">AI SAFE</div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
             <span className="text-primary font-mono text-sm border border-border px-2 py-1 rounded">03</span>
             AI Safety & Enterprise Isolation
          </h2>
          <p className="text-muted-foreground leading-relaxed relative z-10">
            Retnavia specializes in high-end AI Integration. We maintain a strict **Zero-Data-Leakage** policy. 
            <br /><br />
            <strong className="text-foreground">Code Isolation:</strong> All client-proprietary source code and internal business datasets are stored in encrypted silos. 
            <br /><br />
            <strong className="text-foreground">Training Exclusion:</strong> We explicitly prohibit the use of client data for training public Large Language Models (LLMs). Your business logic and trade secrets remain your exclusive Intellectual Property.
          </p>
        </div>

        <div id="contact" className="scroll-mt-24 text-center py-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-6">Data Protection Officer (DPO)</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12 italic font-light">
            For formal Subject Access Requests (SAR) or to exercise your &quot;Right to be Forgotten&quot; under global privacy laws, please contact our legal desk.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-12">
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Enterprise Support</p>
              <p className="text-xl font-medium border-b border-primary/30 pb-1">contact@retnavia.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase">Direct Legal Line</p>
              <p className="text-xl font-medium border-b border-primary/30 pb-1">+1 (747) 217-7426</p>
            </div>
          </div>
        </div>

      </section>

      <footer className="mt-32 pt-10 border-t border-border text-center">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          Retnavia Solutions © 2026 — Secure. Scalable. Sovereign.
        </p>
      </footer>
    </main>
  )
}