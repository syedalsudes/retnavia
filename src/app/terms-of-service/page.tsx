import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Retnavia Solutions',
  description: 'Legal terms for Retnavia services including AI, Mobile Apps, and Enterprise ERP.',
}

export default function TermsAndConditions() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 bg-background text-foreground">
      <h1 className="text-5xl font-extrabold mb-10 text-primary">Terms & Conditions</h1>
      <p className="mb-6 text-muted-foreground italic">Effective Date: March 28, 2026</p>
      
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-accent">1. Scope of Work</h2>
          <p className="text-muted-foreground leading-relaxed">
            Retnavia Solutions agrees to provide technical and creative services including but not limited to **E-commerce scaling, Mobile App development, UI/UX Design, and 2D/3D Animation**. Specific project milestones and deliverables are defined in individual Service Level Agreements (SLA).
          </p>
        </div>

        <div className="p-6 bg-overlay rounded-xl border border-border">
          <h2 className="text-2xl font-bold mb-4">2. Intellectual Property & Code Ownership</h2>
          <p className="text-muted-foreground">
            Upon final payment, full ownership of custom code, designs, and digital assets is transferred to the client. Retnavia retains the right to display project summaries in our global portfolio at <strong>retnavia.com/portfolio</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-accent">3. Global Operations</h2>
          <p className="text-muted-foreground leading-relaxed">
            These terms are governed by the laws of the United Arab Emirates (UAE) and applicable international trade laws. Any disputes will be handled under the jurisdiction of Dubai/KSA courts to ensure professional transparency for our global clients.
          </p>
        </div>
      </section>
    </main>
  )
}