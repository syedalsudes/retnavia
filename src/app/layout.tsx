import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Anta } from "next/font/google"; 
import "./globals.css";
import MouseTrail from "@/components/MouseTrail";
import { Analytics } from "@vercel/analytics/next"

const anta = Anta({ 
  weight: '400', 
  subsets: ["latin"],
  variable: '--font-anta',
  display: 'swap',
  adjustFontFallback: false,
});


export const metadata: Metadata = {
  metadataBase: new URL('https://retnavia.com'),
  title: {
    default: "Retnavia | Global Engineering & AI Product Studio",
    template: "%s | Retnavia"
  },
  description: "Architecting the future of digital business. Retnavia delivers high-performance Web Engineering, Custom AI Solutions, and Enterprise ERP Systems for global brands in the USA, UAE, and EU.",
  keywords: [
    "Software Engineering Agency Dubai", 
    "Custom AI Solutions USA", 
    "Enterprise Web Development", 
    "Mobile App Studio London", 
    "ERP Systems Saudi Arabia", 
    "Retnavia Solutions",
    "Digital Product Design Agency"
  ],
  authors: [{ name: "Retnavia Team", url: "https://retnavia.com" }],
  creator: "Retnavia Solutions",
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://retnavia.com',
    siteName: 'Retnavia Solutions',
    title: 'Retnavia | Engineering the Next Digital Frontier',
    description: 'Transforming complex business ideas into scalable digital products. Expert AI, Web, and Mobile development.',
    images: [
      {
        url: '/og-home.png', 
        width: 1200,
        height: 630,
        alt: 'Retnavia Global Tech Agency',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Retnavia | Digital Product Studio',
    description: 'Scalable software and AI solutions for modern enterprises.',
    creator: '@retnavia',
    images: ['/og-home.png'],
  },

  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${anta.variable} font-sans bg-background text-foreground`}>
        <MouseTrail />
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}