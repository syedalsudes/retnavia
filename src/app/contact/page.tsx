import { Metadata } from 'next';
import Contact from '@/components/pagesCode/ContactPage';

export const metadata: Metadata = {
  title: 'Partner with Retnavia | Project Inquiry & Tech Consultation',
  description: 'Ready to scale your business with world-class engineering? Contact Retnavia Solutions to discuss your next project. From Custom AI to Enterprise Web Systems, let’s build what defines tomorrow.',
  keywords: [
    'Project Inquiry Retnavia', 
    'Business Tech Partnership', 
    'Custom AI Consultancy Dubai', 
    'Enterprise Software Solutions', 
    'Digital Strategy Consultation', 
    'Software Engineering USA UAE',
    'Retnavia Business Inquiry'
  ],
  openGraph: {
    title: 'Contact Retnavia | Let`s Engineer Your Success',
    description: 'Discuss your project goals with our expert engineering team. Serving global markets from our Dubai headquarters.',
    url: 'https://retnavia.com/contact',
    siteName: 'Retnavia Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retnavia Solutions | Project Consultation',
    description: 'Transforming complex business problems into elegant digital solutions.',
  },
};

export default function ContactPage() {
  return <Contact />;
}