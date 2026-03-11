import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Anta } from "next/font/google"; 
import "./globals.css";
import MouseTrail from "@/components/MouseTrail";

const anta = Anta({ 
  weight: '400', 
  subsets: ["latin"],
  variable: '--font-anta',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: {
    default: "retnavia | Digital Product Studio",
    template: "%s | retnavia"
  },
  description: "Architecting the next digital frontier. retnavia offers high-end Web Development, Mobile Apps, AI Integration, and UI/UX Design services for global brands.",
  keywords: ["Software Development", "Web Design", "Mobile Apps", "AI Solutions", "UI/UX Design", "retnavia agency"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
      </body>
    </html>
  );
}