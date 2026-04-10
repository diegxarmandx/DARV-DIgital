export const siteConfig = {
  name: "DARV Digital",
  shortName: "DARV",
  tagline: "Technical web solutions for local businesses that want to grow smarter online.",
  description:
    "DARV Digital builds fast, modern websites and practical lead systems for local businesses across Puerto Rico.",
  email: "hello@darvdigital.com",
  phone: "+1 (787) 555-0148",
  location: "Puerto Rico",
  primaryCta: "Book a Free Strategy Call",
  secondaryCta: "See Pricing"
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
] as const;

export const trustPoints = [
  "Fast, modern websites",
  "Built for local business growth",
  "Smart lead systems",
  "Clear process",
  "Ongoing support"
] as const;

export type ServiceItem = {
  title: string;
  summary: string;
  outcome: string;
  details: string[];
};

export const services: ServiceItem[] = [
  {
    title: "Website Design",
    summary: "Build a modern website that communicates trust from the first click.",
    outcome: "A polished digital presence that helps you win better leads.",
    details: ["UX-focused page structure", "Clear service messaging", "Responsive on all devices"]
  },
  {
    title: "Website Redesign",
    summary: "Upgrade outdated sites into high-performance, conversion-ready platforms.",
    outcome: "Better user experience, stronger trust, and improved lead quality.",
    details: ["Content and structure audit", "Design and code refresh", "SEO-ready foundation"]
  },
  {
    title: "Landing Pages",
    summary: "Campaign-specific pages designed to convert traffic into action.",
    outcome: "Higher conversion rates for paid ads, promos, and local campaigns.",
    details: ["Single-goal page strategy", "Conversion-focused copy blocks", "A/B testing ready layout"]
  },
  {
    title: "Lead Capture Systems",
    summary: "Turn more visitors into qualified inquiries with practical lead flows.",
    outcome: "A reliable pipeline of inquiries without adding operational friction.",
    details: ["Lead forms with routing", "Inquiry tracking setup", "CRM-ready data capture"]
  },
  {
    title: "Quote Request Forms",
    summary: "Build structured quote forms to reduce back-and-forth and speed up sales.",
    outcome: "Faster qualification and more complete client requests.",
    details: ["Conditional field logic", "Service-based branching", "Clean request summaries"]
  },
  {
    title: "Booking Flow Setup",
    summary: "Create smooth appointment flows for consultations, visits, or service calls.",
    outcome: "More bookings with fewer drop-offs.",
    details: ["Calendar integration", "Confirmation touchpoints", "Follow-up reminder wiring"]
  },
  {
    title: "Basic Automations",
    summary: "Connect your site with practical automations that save time every week.",
    outcome: "Less manual admin and faster lead response.",
    details: ["Form-to-email automations", "Lead routing rules", "Status update notifications"]
  },
  {
    title: "Local Business Website Support",
    summary: "Keep your site updated, secure, and aligned with your business changes.",
    outcome: "A dependable website that stays current and performs over time.",
    details: ["Content updates", "Performance checks", "Technical issue handling"]
  }
];

export const addOnCapabilities = [
  "Google Business Profile and map embed optimization",
  "WhatsApp click-to-chat and direct call CTA setup",
  "Lightweight analytics dashboards for lead visibility",
  "Email capture with segmented follow-up lists",
  "Technical SEO cleanup for local search discoverability"
] as const;

export type PortfolioProject = {
  title: string;
  category: "Professional Services" | "Logistics" | "E-commerce";
  summary: string;
  challenge: string;
  result: string;
  accent: string;
  url: string;
  snapshot: string;
};

export const featuredProjects: PortfolioProject[] = [
  {
    title: "IPPS Puerto Rico",
    category: "Professional Services",
    summary:
      "Corporate site with clear service structure and conversion-focused contact pathways for Puerto Rico operations.",
    challenge: "The business needed a modern website that communicated credibility and services quickly.",
    result: "Stronger first impression and a clearer path for qualified inquiries.",
    accent: "from-blue-500/40 to-cyan-400/20",
    url: "https://www.ippspr.com/",
    snapshot: "/project-snapshots/ippsHero.png"
  },
  {
    title: "Isla Prime Logistics",
    category: "Logistics",
    summary:
      "Operational business website designed to present logistics capabilities clearly and route new client requests efficiently.",
    challenge: "The team needed a cleaner digital presence that made service scope easy to understand.",
    result: "Improved clarity for prospects and a more structured request flow from the site.",
    accent: "from-cyan-500/40 to-teal-300/20",
    url: "https://www.islaprimelogistics.com/",
    snapshot: "/project-snapshots/islaprimelogisticsHero.png"
  },
  {
    title: "Lucky Fragrances",
    category: "E-commerce",
    summary:
      "Product-focused shopping experience with stronger merchandising structure and a cleaner path from browse to purchase.",
    challenge: "The brand needed a polished storefront experience that felt trustworthy and easy to navigate.",
    result: "More consistent product discovery and a better user path to checkout.",
    accent: "from-sky-500/40 to-indigo-400/20",
    url: "https://www.luckyfragrances.com/",
    snapshot: "/project-snapshots/LuckyFragranceHero.png"
  }
];

export const portfolioProjects: PortfolioProject[] = [
  ...featuredProjects
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "We map your business goals, services, and current bottlenecks before writing code."
  },
  {
    step: "02",
    title: "Strategy",
    description: "We define pages, lead pathways, and technical requirements around clear business outcomes."
  },
  {
    step: "03",
    title: "Build",
    description: "We design and develop a modern website with performance, clarity, and reliability in mind."
  },
  {
    step: "04",
    title: "Review",
    description: "You review the full build with structured checkpoints and focused revision rounds."
  },
  {
    step: "05",
    title: "Launch & Support",
    description: "We launch cleanly and stay available for updates, fixes, and future growth improvements."
  }
];

export type PricingPlan = {
  name: string;
  price: string;
  note: string;
  idealFor: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Foundation",
    price: "$1,800",
    note: "Starting price",
    idealFor: "Local businesses launching a clean, professional web presence.",
    features: [
      "Up to 5 core pages",
      "Mobile-optimized responsive design",
      "Lead capture contact form",
      "Basic on-page SEO setup",
      "Launch support"
    ]
  },
  {
    name: "Growth",
    price: "$3,400",
    note: "Most selected",
    idealFor: "Businesses ready for stronger conversion pathways and smarter lead systems.",
    features: [
      "Up to 10 custom pages",
      "Advanced quote or booking flow",
      "Conversion-focused landing section",
      "Technical SEO baseline + speed optimization",
      "30 days post-launch support"
    ],
    highlighted: true
  },
  {
    name: "Scale",
    price: "$5,800+",
    note: "Custom scope",
    idealFor: "Teams that need custom workflows, automations, and deeper technical integration.",
    features: [
      "Custom architecture and page count",
      "Multi-step lead systems",
      "Automation and integration setup",
      "Priority technical support",
      "Quarterly optimization roadmap"
    ]
  }
];

export const pricingComparison = [
  { feature: "Custom Design", foundation: "Yes", growth: "Yes", scale: "Yes" },
  { feature: "Responsive Build", foundation: "Yes", growth: "Yes", scale: "Yes" },
  { feature: "Quote / Booking Flow", foundation: "Basic", growth: "Advanced", scale: "Custom" },
  { feature: "Automations", foundation: "Optional", growth: "Light", scale: "Extended" },
  { feature: "SEO Foundation", foundation: "Basic", growth: "Enhanced", scale: "Enhanced" },
  { feature: "Post-launch Support", foundation: "14 days", growth: "30 days", scale: "90 days" }
] as const;

export const faqs = [
  {
    question: "How much does a website cost?",
    answer:
      "Project pricing depends on scope, page count, and technical complexity. Most projects start around our Foundation package and scale based on the systems you need."
  },
  {
    question: "What\'s included?",
    answer:
      "Every package includes strategy, design, development, responsive QA, and launch guidance. Higher tiers include advanced lead flows, integrations, and extended support."
  },
  {
    question: "Do you work with local businesses only?",
    answer:
      "We focus on local and regional businesses, especially service-based teams that need practical web systems and clear lead pathways."
  },
  {
    question: "Can you redesign an existing site?",
    answer:
      "Yes. We can audit your current website, identify conversion and technical issues, and rebuild it into a cleaner, higher-performing version."
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. We provide post-launch support windows and ongoing support options for updates, fixes, and iterative improvements."
  },
  {
    question: "Can you add forms, booking, or automations?",
    answer:
      "Absolutely. We can implement quote forms, booking flows, and basic automations that route leads and reduce manual work."
  },
  {
    question: "How long does a project take?",
    answer:
      "Most websites launch in 3 to 7 weeks depending on scope, feedback speed, and integrations required."
  }
] as const;

export const pricingFaqs = [
  {
    question: "Can pricing be customized?",
    answer:
      "Yes. Each package is a starting framework. We adjust deliverables based on your goals, operations, and timeline."
  },
  {
    question: "Do you require full payment upfront?",
    answer:
      "No. Most projects are split into milestone-based payments tied to clear deliverables."
  },
  {
    question: "What if I need more pages later?",
    answer:
      "We can add pages and new sections after launch through a scoped update phase."
  },
  {
    question: "Are integrations included?",
    answer:
      "Basic integrations can be included in Growth and Scale. More advanced workflows are scoped separately."
  }
] as const;

export const aboutPrinciples = [
  {
    title: "Technical clarity",
    description:
      "We explain what is being built, why it matters, and how it supports business outcomes without unnecessary complexity."
  },
  {
    title: "Practical systems",
    description:
      "We focus on useful tools like lead routing, quote intake, and booking flows that save time and improve follow-up."
  },
  {
    title: "Clean execution",
    description:
      "We ship polished experiences with strong performance, accessible structure, and maintainable code."
  }
] as const;

export const contactExpectations = [
  "Reply within 1 business day",
  "Clear scope and timeline recommendations",
  "No-pressure strategy call",
  "Transparent pricing direction"
] as const;
