import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <body className="antialiased bg-black selection:bg-purple-500/30">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}