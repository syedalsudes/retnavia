import { Metadata } from 'next'
import AboutPage from '@/components/pagesCode/AboutPage'

export const metadata: Metadata = {
  title: 'About Retnavia | Leading-Edge Digital Agency for USA, UAE & EU',
  description: 'Meet the visionaries at Retnavia Solutions. We are a collective of engineers and designers building high-impact AI solutions, web architectures, and digital products for global markets.',
  keywords: [
    'Digital Agency Dubai', 
    'Software Engineering USA', 
    'Retnavia Team', 
    'Tech Consultants Saudi Arabia', 
    'Innovative AI Solutions', 
    'Web Development Agency EU'
  ],
  openGraph: {
    title: 'About Retnavia | Vision to Navigate the Digital Shift',
    description: 'Purposeful code and visionary design. Discover how Retnavia builds world-class digital experiences.',
    url: 'https://retnavia.com/about',
    siteName: 'Retnavia Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retnavia | Meet the Best Digital Agency',
    description: 'Transforming ideas into world-class experiences through strategic planning and innovation.',
  },
}

export default function Page() {
  return <AboutPage />
}