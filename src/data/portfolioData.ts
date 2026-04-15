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
  // ==========================================
  // E-COMMERCE PROJECTS
  // ==========================================
  {
    id: 1,
    slug: "toyishland-ecommerce",
    title: "Toyishland - E-commerce Store",
    category: "Web",
    year: "2026",
    client: "Toyishland",
    role: "Full Stack Developer",
    liveUrl: "https://toyishland.com/",

    listImage: "/portfolioimages/toyishlandlogo.png",
    heroImage: "/portfolioimages/toyishlandhome.png",
    overview:
      "A vibrant and highly optimized e-commerce platform designed to handle diverse product catalogs while providing a seamless, fast checkout experience for customers.",

    sections: [
      {
        type: "image-right",
        title: "Dynamic Product Catalog",
        description:
          "Engineered a scalable product discovery interface with rapid filtering, allowing users to browse through vast inventories without performance lag.",
        image: "/portfolioimages/toyishlandshop.png",
        alt: "Toyishland Product Catalog",
      },
      {
        type: "image-left",
        title: "Optimized Checkout Flow",
        description:
          "Redesigned the cart and checkout process to minimize friction, integrating secure payment gateways to boost overall conversion rates.",
        image: "/portfolioimages/toyishlandcheckout.png",
        alt: "Secure Checkout Flow",
      },
    ],

    techStack: ["Next.js", "Tailwind CSS", "React", "Node.js"],
    metrics: [
      { label: "Load Time", value: "Under 1s" },
      { label: "Mobile Responsive", value: "100%" },
    ],
  },


 {
    id: 2,
    slug: "reyes-coffee",
    title: "Reyes Coffee",
    category: "Web",
    year: "2026",
    client: "Reyes Coffee",
    role: "Frontend Engineer",
    liveUrl: "https://reyescoffee.com/",

    listImage: "/portfolioimages/reyeslogo.png",
    heroImage: "/portfolioimages/reyeshome.png",
    overview:
      "A digital storefront and brand storytelling platform for a Los Angeles-based specialty coffee roaster, seamlessly connecting their rich family heritage in Nicaragua with a modern e-commerce experience.",

    sections: [
      {
        type: "image-right",
        title: "Digital Storytelling & Heritage",
        description:
          "Developed an engaging 'About Us' experience that beautifully presents the brand's journey from their farm in Nueva Segovia to roasting in LA, utilizing clean typography and immersive layouts to build community connection.",
        image: "/portfolioimages/reyesabout.png",
        alt: "Reyes Coffee Brand Story",
      },
      {
        type: "image-left",
        title: "Seamless Subscription & Shopping",
        description:
          "Implemented a robust shopping cart and subscription flow, making it effortless for users to purchase locally roasted, sustainably sourced coffee while supporting the local community.",
        image: "/portfolioimages/reyessub.png",
        alt: "Reyes Coffee E-commerce Flow",
      },
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion", "E-commerce Integration"],
    metrics: [
      { label: "Core Feature", value: "Subscriptions & Retail" },
      { label: "Performance", value: "98/100" },
    ],
  },
 {
    id: 3,
    slug: "more-life-project",
    title: "MoreLife - Digital Legacy Platform",
    category: "Web",
    year: "2026",
    client: "MoreLife",
    role: "Full Stack Engineer",
    liveUrl: "https://morelifeproject.com/",

    listImage: "/portfolioimages/morelife-logo.png",
    heroImage: "/portfolioimages/morelifehome.png",
    overview:
      "A secure, deeply personal digital legacy platform that allows users to create private profiles filled with stories, video messages, and family trees, which are safely stored and unlocked for loved ones after their passing.",

    sections: [
      {
        type: "image-right",
        title: "Secure Media & Profile Management",
        description:
          "Engineered a highly secure, private user dashboard allowing clients to upload sensitive media (videos and photos), write unlimited stories, and build interactive family trees with strict data privacy protocols.",
        image: "/portfolioimages/morelife-dashboard.png",
        alt: "MoreLife Secure Profile Dashboard",
      },
      {
        type: "image-left",
        title: "Tiered Packages & Unlock Mechanism",
        description:
          "Developed a seamless purchasing flow for different legacy packages and implemented a secure, unique code-based authentication system allowing bereaved family members to recover and unlock profiles.",
        image: "/portfolioimages/morelife-packages.png",
        alt: "MoreLife Packages and Profile Unlock Flow",
      },
    ],
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "AWS S3", "PostgreSQL"],
    metrics: [
      { label: "Data Security", value: "High Privacy" },
      { label: "Platform Type", value: "SaaS / Legacy" },
    ],
  },
  {
    id: 4,
    slug: "marianna-pascal",
    title: "Marianna Pascal Store",
    category: "Web",
    year: "2026",
    client: "Marianna Pascal",
    role: "Web Developer",
    liveUrl: "https://mariannapascal.com/",

    listImage: "/portfolioimages/marianna-logo.png",
    heroImage: "/portfolioimages/marianna-hero.png",
    overview:
      "A personalized e-commerce and professional branding site seamlessly combining content delivery with product sales.",

    sections: [
      {
        type: "image-left",
        title: "Integrated Content & Commerce",
        description:
          "Built a unified platform where users can engage with the creator's professional content while seamlessly transitioning into product purchases.",
        image: "/portfolioimages/marianna-content.png",
        alt: "Marianna Pascal Content Platform",
      },
    ],
    techStack: ["Next.js", "React", "CMS Integration"],
    metrics: [{ label: "Conversion", value: "Optimized" }],
  },

  {
    id: 5,
    slug: "vitacare-nurses",
    title: "VitaCare Nurses - Healthcare Portal",
    category: "Web",
    year: "2026",
    client: "VitaCare (Canada)",
    role: "Lead Developer",
    liveUrl: "https://vitacarenurses.com/",

    listImage: "/portfolioimages/vitacare-logo.png",
    heroImage: "/portfolioimages/vitacare-hero.png",
    overview:
      "A comprehensive digital platform for a Canadian nursing service, designed to connect healthcare professionals with clients through a secure, trustworthy interface.",

    sections: [
      {
        type: "image-right",
        title: "Trust-Driven Brand Identity",
        description:
          "Engineered the frontend experience to reflect clinical professionalism, strictly anchoring the UI with the brand's core #D72638 and #243E90 color palette to instill trust and visual consistency.",
        image: "/portfolioimages/vitacare-brand.png",
        alt: "VitaCare Branding & Interface",
      },
      {
        type: "full-width",
        title: "Service Discovery & Booking",
        description:
          "Developed streamlined user flows allowing patients and facilities to easily browse specialized nursing services and initiate contact securely.",
        image: "/portfolioimages/vitacare-services.png",
        alt: "VitaCare Services Dashboard",
      },
    ],

    techStack: ["React", "Tailwind CSS", "Node.js"],
    metrics: [
      { label: "Accessibility", value: "WCAG Compliant" },
      { label: "Region", value: "North America" },
    ],
  },
  {
    id: 6,
    slug: "merchfloww-bpo",
    title: "MerchFloww - BPO Custom Software",
    category: "App",
    year: "2026",
    client: "Confidential BPO (Karachi)",
    role: "Full Stack Developer",
    liveUrl: "https://merchfloww.vercel.app/",

    listImage: "/portfolioimages/merchfloww-logo.png",
    heroImage: "/portfolioimages/merchfloww-hero.png",
    overview:
      "A robust internal management and workflow automation software built specifically to handle the high-volume operational needs of a modern BPO agency.",

    sections: [
      {
        type: "image-left",
        title: "Workflow Automation",
        description:
          "Designed complex data pipelines and internal dashboards to track agent performance, client deliverables, and overall operational metrics in real-time.",
        image: "/portfolioimages/merchfloww-dashboard.png",
        alt: "MerchFloww Admin Dashboard",
      },
    ],

    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
    metrics: [
      { label: "Efficiency Boost", value: "40%" },
      { label: "Deployment", value: "Vercel" },
    ],
  },
  {
    id: 7,
    slug: "morgy-real-estate",
    title: "Morgy - Dubai Real Estate",
    category: "Web",
    year: "2026",
    client: "Lycan Solutions",
    role: "Frontend Engineer",
    liveUrl: "https://lycansolutions.com/morgy/",

    listImage: "/portfolioimages/morgy-logo.png",
    heroImage: "/portfolioimages/morgy-hero.png",
    overview:
      "An upscale property listing and real estate portal targeting the competitive Dubai market, focusing on high-quality property showcases and lead generation.",

    sections: [
      {
        type: "full-width",
        title: "Premium Property Showcases",
        description:
          "Implemented interactive property galleries and advanced search filters allowing investors and buyers to seamlessly locate high-end real estate.",
        image: "/portfolioimages/morgy-search.png",
        alt: "Morgy Property Search",
      },
    ],

    techStack: ["Next.js", "React", "Tailwind CSS"],
    metrics: [
      { label: "Market", value: "UAE / Dubai" },
      { label: "Performance", value: "Highly Optimized" },
    ],
  }
];