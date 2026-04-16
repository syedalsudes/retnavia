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

    listImage: "/portfolioimages/morelifelogo.png",
    heroImage: "/portfolioimages/morelifehome.png",
    overview:
      "A secure, deeply personal digital legacy platform that allows users to create private profiles filled with stories, video messages, and family trees, which are safely stored and unlocked for loved ones after their passing.",

    sections: [
      {
        type: "image-right",
        title: "Tiered Packages & Unlock Mechanism",
        description:
          "Developed a seamless purchasing flow for different legacy packages and implemented a secure, unique code-based authentication system allowing bereaved family members to recover and unlock profiles.",
        image: "/portfolioimages/morelifepackages.png",
        alt: "MoreLife Packages and Profile Unlock Flow",
      },
      {
        type: "image-left",
        title: "Account Holder's Details",
        description:
          "Use this form to request access to a deceased loved one's profile. We take privacy seriously and will guide you through the necessary steps to verify your relationship and recover the account safely.",
        image: "/portfolioimages/morelifeacc.png",
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
    title: "Marianna Pascal - Influence With Words",
    category: "Web",
    year: "2026",
    client: "Marianna Pascal",
    role: "Web Developer",
    liveUrl: "https://mariannapascal.com/",

    listImage: "/portfolioimages/mariannalogo.png",
    heroImage: "/portfolioimages/mariannahome.png",
    overview:
      "A professional branding and booking platform showcasing Marianna Pascal's corporate communication solutions, engaging keynotes, and measurable results for global enterprise clients.",

    sections: [
      {
        type: "image-left",
        title: "USEFUL WORDS",
        description:
          "Integrated an e-commerce store to showcase and sell the 'Useful Words' book series, including individual books at $3.99 and a discounted 3-book bundle at $8.99.",
        image: "/portfolioimages/mariannaecommerce.png",
        alt: "Marianna Pascal Useful Words Book Store",
      },
      {
        type: "image-right",
        title: "Social Proof & Measurable Impact",
        description:
          "Integrated powerful testimonial sections, client success stories, and a diverse portfolio of global partner logos (like Amazon, Microsoft, and Intel) to build instant trust and authority.",
        image: "/portfolioimages/mariannatestimonials.png",
        alt: "Marianna Pascal Testimonials and Global Clients",
      }
    ],
    techStack: ["Next.js", "React", "CMS Integration"],
    metrics: [
      { label: "Corporate Inquiries", value: "Optimized" },
      { label: "Brand Authority", value: "Enhanced" }
    ],
  },


];