import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Retnavia Solutions',
  description: 'Global legal framework and service level agreements for Retnavia software engineering and AI partnerships.',
}

export default function TermsAndConditions() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 bg-background text-foreground font-sans">
      
      <div className="mb-20">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground tracking-tighter uppercase italic">
          Terms of <span className="text-primary">Service</span>
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest">Global Framework</span>
          <span>Effective Date: March 30, 2026</span>
        </div>
      </div>

      <div className="mb-20 p-8 border border-border bg-overlay/20 rounded-3xl backdrop-blur-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Master Service Agreement</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground underline-offset-4 decoration-primary/30">
          <li><a href="#engagement" className="hover:text-primary transition-colors hover:underline">01. Service Engagement</a></li>
          <li><a href="#ip-rights" className="hover:text-primary transition-colors hover:underline">02. IP & Asset Ownership</a></li>
          <li><a href="#payment" className="hover:text-primary transition-colors hover:underline">03. Financial Obligations</a></li>
          <li><a href="#liability" className="hover:text-primary transition-colors hover:underline">04. Professional Liability</a></li>
          <li><a href="#termination" className="hover:text-primary transition-colors hover:underline">05. Termination Protocols</a></li>
          <li><a href="#law" className="hover:text-primary transition-colors hover:underline">06. Dispute Resolution</a></li>
        </ul>
      </div>

      <section className="space-y-24">
        
        <div id="engagement" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <span className="text-primary font-mono text-sm border border-border px-2 py-1 rounded">01</span>
            Global Service Engagement
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Retnavia Solutions operates as a specialized digital engineering studio. By engaging our services, the Client acknowledges that software development is an iterative process. 
            </p>
            <p>
              All project-specific deliverables, technical sprints, and milestones are strictly governed by a separate **Statement of Work (SOW)** or **Service Level Agreement (SLA)**. In the event of a conflict between these Terms and an SOW, the project-specific SOW shall take precedence.
            </p>
          </div>
        </div>

        <div id="ip-rights" className="scroll-mt-24 p-10 bg-overlay/30 border border-border rounded-[3rem] relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-primary text-6xl font-bold italic group-hover:opacity-10 transition-opacity uppercase">Ownership</div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <span className="text-primary font-mono text-sm border border-border px-2 py-1 rounded">02</span>
            Intellectual Property & Assets
          </h2>
          <div className="space-y-6 text-muted-foreground relative z-10">
            <p>
              We engineer for your competitive advantage. Upon **full and final settlement of all financial obligations**, Retnavia Solutions transfers all legal rights, titles, and interests in the custom-developed source code, UI/UX designs, and specific digital assets to the Client.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-background/50 rounded-2xl border border-border italic text-sm">
                Retnavia retains ownership of internal pre-existing libraries, modular components, and core architectural frameworks used across multiple projects.
              </div>
              <div className="p-6 bg-background/50 rounded-2xl border border-border italic text-sm">
                We reserve the right to display project highlights in our global portfolio unless a specialized Non-Disclosure Agreement (NDA) is executed.
              </div>
            </div>
          </div>
        </div>

        <div id="liability" className="scroll-mt-24">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <span className="text-primary font-mono text-sm border border-border px-2 py-1 rounded">04</span>
            Professional Liability & Warranty
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            While we strive for 99.9% system uptime and code integrity, services are provided on an **&quot;As-Is&quot;** and **&quot;As-Available&quot;** basis. 
          </p>
          <div className="bg-overlay p-8 rounded-2xl border-l-4 border-primary italic">
            <p className="text-sm text-muted-foreground">
              Retnavia Solutions shall not be liable for indirect, incidental, or consequential damages resulting from third-party server failures, API deprecations by external providers (e.g., OpenAI, AWS, Stripe), or unauthorized security breaches on client-managed infrastructure.
            </p>
          </div>
        </div>

        {/* --- SECTION 06: THE LAW --- */}
        <div id="law" className="scroll-mt-24 text-center py-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-6 italic tracking-tighter">Governing Law & Arbitration</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
            Our partnerships are built on professional trust. These terms are governed by **International Commercial Law**. Any disputes arising from our services shall be resolved through:
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 text-sm font-mono">
            <div className="px-6 py-4 border border-border rounded-xl bg-primary/5">
              Phase 1: Professional Mediation
            </div>
            <div className="flex items-center justify-center text-primary">→</div>
            <div className="px-6 py-4 border border-border rounded-xl bg-primary/5">
              Phase 2: International Arbitration
            </div>
          </div>
          
          <p className="mt-12 text-xs text-muted-foreground/60 uppercase tracking-widest">
            Neutral Venue Selection to Ensure Fair & Fast Resolution
          </p>
        </div>

      </section>

      <footer className="mt-32 pt-10 border-t border-border text-center">
        <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          Retnavia Solutions © 2026 — Engineering Digital Sovereignty.
        </p>
      </footer>
    </main>
  )
}