import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Retnavia Solutions',
  description: 'How Retnavia handles your data for AI Solutions, Web Development, and Digital Branding.',
}

export default function PrivacyPolicy() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 bg-background text-foreground">
      <h1 className="text-5xl font-extrabold mb-10 text-primary">Privacy Policy</h1>
      <p className="mb-6 text-muted-foreground italic">Last Updated: March 28, 2026</p>
      
      <section className="space-y-10">
        <div className="border-l-4 border-primary pl-6">
          <h2 className="text-2xl font-bold mb-3">1. Data Collection & Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Retnavia Solutions provides a comprehensive suite of services including **AI Solutions, Web Development, ERP Systems, and Digital Marketing**. When you interact with our platform for scheduling consultations or project inquiries, we collect professional data (Name, Email, Business Phone) to provide tailored technical solutions.
          </p>
        </div>

        <div className="border-l-4 border-accent pl-6">
          <h2 className="text-2xl font-bold mb-3">2. Ad Tracking & Meta Pixel</h2>
          <p className="text-muted-foreground leading-relaxed">
            As a data-driven agency, we use Meta Pixel and advanced tracking to optimize our outreach in the USA, EU, and UAE. This data is strictly used for performance analysis and is never sold to third parties.
          </p>
        </div>

        <div className="bg-background p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">3. Contact Global Support</h2>
          <p className="mb-2 text-foreground">For any privacy-related concerns, our global direct line is open:</p>
          <p className="font-mono text-primary-glow font-bold text-xl">+1 (747) 217-7426</p>
          <p className="mt-2">Email: <span className="underline italic text-accent">contact@retnavia.com</span></p>
        </div>
      </section>
    </main>
  )
}