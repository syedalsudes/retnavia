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
  // Hero Section
  heroImage: string;
  overview: string;

  // The "Meat" - Dynamic Sections
  sections: ProjectSection[];

  // Tech & Stats
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export const portfolioItems: ProjectDetail[] = [
  {
    id: 1,
    slug: "auroxa-ecommerce",
    title: "Auroxa - Premium E-commerce",
    category: "Web",
    year: "2026",
    client: "Internal Showcase",
    role: "Full Stack Engineer",
    liveUrl: "https://auroxa.vercel.app",
    listImage: "/portfolioimages/auroxalogo.png",
    heroImage: "/portfolioimages/auroxahero.png",
    overview: "Auroxa is a high-performance fashion engine built to bridge the gap between premium aesthetics and robust back-end scalability.",

    sections: [
      {
        type: "image-right",
        title: "The Intelligent Dashboard",
        description: "Auroxa's nerve center. We built a real-time analytics suite that tracks orders, revenue growth, and conversion rates. The interface uses a custom-built 'Dark Frost' theme to keep data readable yet visually striking.",
        image: "/portfolioimages/auroxaadmin.png",
        alt: "Auroxa Admin Dashboard"
      },
      {
        type: "image-left",
        title: "Seamless Product Discovery",
        description: "Using advanced filtering logic, users can navigate through categories like 'Footwear' and 'Accessories' instantly. We implemented debounced search and optimistic UI updates for a zero-lag experience.",
        image: "/portfolioimages/auroxaproduct.png",
        alt: "Product Filtering System"
      },
      {
        type: "full-width",
        title: "Mobile-First Excellence",
        description: "60% of users shop on mobile. Auroxa features a fully responsive design with touch-optimized components and fluid animations using Framer Motion.",
        image: "/portfolioimages/auroxamobile.png",
        alt: "Mobile responsiveness showcase"
      }
    ],

    techStack: ["Next.js 14", "Tailwind CSS", "Prisma", "PostgreSQL", "Framer Motion", "Recharts"],

    metrics: [
      { label: "Page Load Speed", value: "0.8s" },
      { label: "Lighthouse Score", value: "99" },
      { label: "Tech Stack", value: "Full Stack" }
    ]
  },

  {
    id: 3,
    slug: "bizzpos-merchant-suite",
    title: "BizzPOS - Digital Dominance",
    category: "Web",
    year: "2026",
    client: "BizzPOS Solutions",
    role: "Lead Full Stack Developer",
    liveUrl: "https://bizzpos.vercel.app",

    listImage: "/portfolioimages/bizzposlogo.png",

    heroImage: "/portfolioimages/bizzposhero.png",
    overview: "BizzPOS is an enterprise-grade merchant onboarding and payment solution designed to streamline retail transactions and business document verification.",

    sections: [
      {
        type: "image-right",
        title: "Intelligent Onboarding Pipeline",
        description: "We engineered a multi-step, form-based onboarding system where merchants can upload sensitive business documents (KYC). The system features real-time file validation and secure cloud storage integration to ensure data integrity.",
        image: "/portfolioimages/bizzposform.png",
        alt: "Merchant Onboarding Form"
      },
      {
        type: "image-left",
        title: "Admin Decision Intelligence",
        description: "Built a robust Admin Dashboard that allows internal teams to review, verify, and approve merchant applications. It features a custom notification system that alerts admins the moment a new document is uploaded.",
        image: "/portfolioimages/bizzposadmin.png",
        alt: "Admin Approval Dashboard"
      },
      {
        type: "full-width",
        title: "Enterprise-Grade Compliance",
        description: "Security was our top priority. The platform is built with PCI-DSS standards in mind, ensuring that every piece of merchant data is encrypted and handled through secure enterprise protocols.",
        image: "/portfolioimages/bizzpossecurity.png",
        alt: "Security and Compliance section"
      }
    ],

    techStack: ["Next.js", "Node.js", "Prisma", "AWS S3", "Tailwind CSS", "Zod Validation"],

    metrics: [
      { label: "Onboarding Time", value: "Under 5 Mins" },
      { label: "Data Encryption", value: "AES-256" },
      { label: "Approval Flow", value: "Automated" }
    ]
  },
  {
    id: 4,
    slug: "nike-dynamic-storefront",
    title: "SwiftStep - Nike Concept Store",
    category: "Web",
    year: "2026",
    client: "UI/UX Case Study",
    role: "Frontend Architect",
    liveUrl: "https://soleflex.vercel.app",

    listImage: "/portfolioimages/soleflexlogo.png",
    heroImage: "/portfolioimages/soleflexhero.png",
    overview: "A premium, high-performance footwear storefront focused on an immersive shopping experience. Built to handle dynamic data streams from external APIs with zero-lag interactions.",

    sections: [
      {
        type: "image-right",
        title: "Curated Popularity Engine",
        description: "We implemented a dynamic 'Popular Products' section that prioritizes high-demand items based on real-time API data. The layout uses a clean card-based design with micro-interactions on hover to drive engagement and visual interest.",
        image: "/portfolioimages/soleflexpopular.png",
        alt: "Nike Popular Products Section"
      },
      {
        type: "image-left",
        title: "Advanced Category Filtering",
        description: "To ensure a seamless discovery experience, we built a high-speed sidebar filter. Even without a database, the client-side logic processes API data instantly, allowing users to sort by size, color, and price with zero latency.",
        image: "/portfolioimages/soleflexfilters.png",
        alt: "Nike Product Filtering System"
      },
      {
        type: "full-width",
        title: "Detail-Oriented UX: The Product View",
        description: "The product detail page was designed for high fidelity. It features an immersive sneaker gallery, interactive size pickers, and a clean typography hierarchy that highlights technical specs, making the transition from browsing to buying effortless.",
        image: "/portfolioimages/soleflexproductdetail.png",
        alt: "Nike Product Detail Page"
      },
      {
        type: "image-right",
        title: "Real-Time Cart Management",
        description: "Using Zustand for lightweight state management, we engineered a shopping bag that updates in real-time. Users can adjust quantities or remove items with instant total calculations, providing a smooth, app-like experience without page reloads.",
        image: "/portfolioimages/soleflexcart.png",
        alt: "Nike Shopping Cart Interface"
      },
      {
        type: "image-left",
        title: "Personalized Wishlist Persistence",
        description: "The 'Favorites' section allows users to curate their desired collection. We implemented LocalStorage persistence to ensure that their curated list remains saved even after a refresh, bridging the gap between a guest user and a personalized experience.",
        image: "/portfolioimages/soleflexfavorites.png",
        alt: "Nike Favorites and Wishlist Section"
      }
    ],

    techStack: ["Next.js 14", "Tailwind CSS", "Framer Motion", "REST API", "Zustand (State)"],

    metrics: [
      { label: "UI Fidelity", value: "99.9%" },
      { label: "API Latency", value: "<150ms" },
      { label: "Design System", value: "Atomic" }
    ]
  },
];