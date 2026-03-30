export interface ProjectSection {
  type: "image-left" | "image-right" | "full-width";
  title?: string;
  description?: string;
  image: string;
  alt: string;
}

export interface ProjectDetail {
  id: number;
  slug: string;
  title: string;
  category: "Web" | "App" | "AI" | "Graphics";
  year: string;
  client: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;

  listImage: string;
  heroImage: string;
  overview: string;

  sections: ProjectSection[];

  techStack: string[];
  metrics: { label: string; value: string }[];
}

export const portfolioItems: ProjectDetail[] = [

  {
    id: 1,
    slug: "bizzpos-merchant-suite",
    title: "BizzPOS - Merchant Onboarding Platform",
    category: "Web",
    year: "2026",
    client: "BizzPOS Solutions",
    role: "Lead Full Stack Developer",
    liveUrl: "https://bizzpos.vercel.app",

    listImage: "/portfolioimages/bizzposlogo.png",
    heroImage: "/portfolioimages/bizzposhero.png",
    overview:
      "BizzPOS is an enterprise-grade merchant onboarding and verification platform designed to streamline business registration, document processing, and compliance workflows.",

    sections: [
      {
        type: "image-right",
        title: "Structured Onboarding System",
        description:
          "Built a multi-step onboarding pipeline enabling merchants to securely submit business information and KYC documents. Integrated real-time validation and cloud storage to ensure data accuracy and reliability.",
        image: "/portfolioimages/bizzposform.png",
        alt: "Merchant Onboarding Form",
      },
      {
        type: "image-left",
        title: "Admin Review & Approval System",
        description:
          "Developed an internal admin dashboard for reviewing and approving merchant applications. The system includes notification triggers for new submissions, improving operational efficiency.",
        image: "/portfolioimages/bizzposadmin.png",
        alt: "Admin Approval Dashboard",
      },
      {
        type: "full-width",
        title: "Security & Compliance",
        description:
          "Implemented secure data handling practices aligned with modern compliance standards, including encrypted storage and controlled access to sensitive business information.",
        image: "/portfolioimages/bizzpossecurity.png",
        alt: "Security and Compliance section",
      },
    ],

    techStack: [
      "Next.js",
      "Node.js",
      "Prisma",
      "AWS S3",
      "Tailwind CSS",
      "Zod Validation",
    ],

    metrics: [
      { label: "Onboarding Time", value: "Under 5 Mins" },
      { label: "Encryption Standard", value: "AES-256" },
      { label: "Workflow", value: "Automated" },
    ],
  },

  {
    id: 2,
    slug: "auroxa-ecommerce",
    title: "Auroxa - Premium E-commerce Platform",
    category: "Web",
    year: "2026",
    client: "Confidential Retail Client",
    role: "Full Stack Engineer",
    liveUrl: "https://auroxa.vercel.app",
    listImage: "/portfolioimages/auroxalogo.png",
    heroImage: "/portfolioimages/auroxahero.png",
    overview:
      "Auroxa is a scalable e-commerce platform built for modern fashion retail, combining high-performance architecture with advanced analytics and seamless user experience.",

    sections: [
      {
        type: "image-right",
        title: "Advanced Analytics Dashboard",
        description:
          "Designed and developed a real-time analytics dashboard to monitor orders, revenue trends, and user behavior. The interface prioritizes clarity and performance, enabling faster business decision-making through actionable insights.",
        image: "/portfolioimages/auroxaadmin.png",
        alt: "Auroxa Admin Dashboard",
      },
      {
        type: "image-left",
        title: "Optimized Product Discovery",
        description:
          "Implemented a high-performance product discovery system with dynamic filtering and debounced search. The experience is optimized for speed, allowing users to navigate large product catalogs with minimal latency.",
        image: "/portfolioimages/auroxaproduct.png",
        alt: "Product Filtering System",
      },
      {
        type: "full-width",
        title: "Mobile-Optimized Experience",
        description:
          "Developed a fully responsive, mobile-first interface with touch-optimized components and smooth animations, ensuring consistent performance across all devices.",
        image: "/portfolioimages/auroxamobile.png",
        alt: "Mobile responsiveness showcase",
      },
    ],

    techStack: [
      "Next.js 14",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Framer Motion",
      "Recharts",
    ],

    metrics: [
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Lighthouse Score", value: "99" },
      { label: "Architecture", value: "Full Stack" },
    ],
  },


  {
    id: 3,
    slug: "gym24-fitness-landing",
    title: "Gym24 - Fitness Platform",
    category: "Web",
    year: "2026",
    client: "Fitness Brand (Confidential)",
    role: "Frontend Developer",
    liveUrl: "https://gym024.netlify.app/",

    listImage: "/portfolioimages/gym24logo.png",
    heroImage: "/portfolioimages/gym24landing.png",
    overview:
      "Gym24 is a modern fitness landing platform designed to establish a strong digital presence, communicate brand value clearly, and drive user engagement through structured, conversion-focused design.",

    sections: [
      {
        type: "image-right",
        title: "Conversion-Focused Hero Section",
        description:
          "Designed a visually impactful hero section with clear call-to-actions, strategically structured to capture attention and encourage membership sign-ups.",
        image: "/portfolioimages/gym24hero.png",
        alt: "Gym24 Hero Section",
      },
      {
        type: "image-left",
        title: "About & Brand Positioning",
        description:
          "Developed a dedicated about section to communicate the gym`s mission, training philosophy, and core value proposition, helping build trust and brand credibility.",
        image: "/portfolioimages/gym24about.png",
        alt: "About Section",
      },
      {
        type: "full-width",
        title: "Membership Plans Section",
        description:
          "Structured a clear and engaging membership plans section using card-based layout, allowing users to easily compare offerings and choose the most suitable plan.",
        image: "/portfolioimages/gym24membership.png",
        alt: "Membership Plans Section",
      },
    ],

    techStack: ["HTML", "CSS", "Responsive Design", "Flexbox", "CSS Grid"],

    metrics: [
      { label: "Performance", value: "Optimized" },
      { label: "Responsiveness", value: "100%" },
      { label: "Use Case", value: "Landing Platform" },
    ],
  },
];