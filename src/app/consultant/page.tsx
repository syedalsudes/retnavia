import { Metadata } from 'next';
import ConsultantForm from '@/components/pagesCode/ConsultantPage';

export const metadata: Metadata = {
  title: 'Book a Strategy Consultation | Retnavia Expert Solutions',
  description: 'Schedule a high-level discovery call with Retnavia`s expert engineers. Define your project roadmap, explore AI integrations, and start your journey towards digital dominance today.',
  keywords: [
    'Book Tech Consultation', 
    'Schedule Discovery Call', 
    'Project Roadmap Planning', 
    'Retnavia Strategy Session', 
    'AI Implementation Audit', 
    'Enterprise Web Consultation Dubai',
    'Custom Software Strategy USA'
  ],
  openGraph: {
    title: 'Schedule Your Expert Strategy Session | Retnavia',
    description: 'Transform your business goals into a technical reality. Book your slot for a dedicated project consultation.',
    url: 'https://retnavia.com/consultant',
    siteName: 'Retnavia Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Consult with Retnavia | Engineering the Future',
    description: 'Direct access to world-class strategists and engineers for your next big project.',
  },
};

export default function ConsultantPage() {
  return <ConsultantForm />;
}