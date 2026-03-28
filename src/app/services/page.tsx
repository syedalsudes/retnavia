import { Metadata } from 'next';
import Services from '@/components/pagesCode/ServicesPage';

export const metadata: Metadata = {
  title: 'Full-Stack Engineering & AI Services | Retnavia Solutions',
  description: 'Explore Retnavia`s core expertise: from Enterprise Web Engineering and Mobile Apps to Custom AI Solutions and ERP Systems. We build the technical backbone for global businesses.',
  keywords: [
    'Web Engineering Dubai', 
    'AI Automation Services', 
    'Enterprise ERP Solutions', 
    'Mobile App Development USA', 
    'Digital Branding Agency', 
    'Next.js Development EU'
  ],
};

export default function ServicesPage() {
  return <Services />;
}