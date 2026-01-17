export type ServiceKey =
  | "ai_agent_development"
  | "generative_ai_solutions"
  | "ai_integration"
  | "ai_strategy_consulting"
  | "web_development"
  | "mobile_app_development"
  | "api_development"
  | "iot_development"
  | "devops_consulting"
  | "open_source_solutions"
  | "digital_transformation"
  | "ui_ux_design"
  | "brand_design"
  | "user_research"
  | "digital_marketing_services";

export type Pricing = {
  key: ServiceKey;
  title: string;
  subtitle: string;
  startingFrom: string;
  showPrice: boolean;
  tier: "T1" | "T2" | "T3";
  primaryCTA: { label: string; href?: string; action?: "openModal" };
  secondaryCTA?: { label: string; href: string };
  features: string[];
  slug: string;
};

export const PRICING_MAP: Record<ServiceKey, Pricing> = {
  ai_agent_development: {
    key: "ai_agent_development",
    title: "AI Agent Development",
    subtitle: "Custom voice and chat agents for real workflows",
    startingFrom: "5,000 USD",
    showPrice: false,
    tier: "T2",
    primaryCTA: { label: "Book a strategy call", action: "openModal" },
    secondaryCTA: { label: "See a live demo", href: "/demos/ai-agent" },
    features: [
      "Discovery and prompt architecture",
      "Tool integration and guardrails",
      "Deploy with analytics and monitoring",
    ],
    slug: "/services/ai-agents-services",
  },
  generative_ai_solutions: {
    key: "generative_ai_solutions",
    title: "Generative AI Solutions",
    subtitle: "Content and code generation that ships",
    startingFrom: "2,500 USD or 500 USD per month",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Get a custom quote", action: "openModal" },
    secondaryCTA: {
      label: "View example solutions",
      href: "/solutions/generative",
    },
    features: [
      "Text, image, and code generation",
      "Evaluation and safety reviews",
      "MLOps ready deployment",
    ],
    slug: "/services/generative-ai-development-services",
  },
  ai_integration: {
    key: "ai_integration",
    title: "AI Integration",
    subtitle: "Seamless AI inside your stack",
    startingFrom: "3,000 USD",
    showPrice: false,
    tier: "T2",
    primaryCTA: { label: "Request integration plan", action: "openModal" },
    secondaryCTA: { label: "See supported tools", href: "/integrations" },
    features: [
      "APIs and webhooks",
      "RAG and data pipelines",
      "Security and compliance review",
    ],
    slug: "/services/ai-integration",
  },
  ai_strategy_consulting: {
    key: "ai_strategy_consulting",
    title: "AI Strategy Consulting",
    subtitle: "Roadmaps that create ROI",
    startingFrom: "200 USD per hour or 4,000 USD per month",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Book a strategy session", action: "openModal" },
    secondaryCTA: {
      label: "Download sample roadmap",
      href: "/assets/ai-roadmap.pdf",
    },
    features: [
      "Use case discovery",
      "Prioritization and TCO modeling",
      "Risk, security, and governance",
    ],
    slug: "/services/ai-strategy-consulting",
  },
  web_development: {
    key: "web_development",
    title: "Web Development",
    subtitle: "Modern web applications",
    startingFrom: "4,000 USD",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Start your build", action: "openModal" },
    secondaryCTA: { label: "See case studies", href: "/case-studies#web" },
    features: [
      "Next.js or preferred stack",
      "Performance and SEO first",
      "CI and automated testing",
    ],
    slug: "/services/web-development",
  },
  mobile_app_development: {
    key: "mobile_app_development",
    title: "Mobile App Development",
    subtitle: "iOS and Android apps",
    startingFrom: "6,000 USD",
    showPrice: false,
    tier: "T2",
    primaryCTA: { label: "Plan your app", action: "openModal" },
    secondaryCTA: {
      label: "View mobile showcase",
      href: "/case-studies#mobile",
    },
    features: [
      "Native or cross platform",
      "Secure auth and payments",
      "Store deployment support",
    ],
    slug: "/services/mobile-app-development-services",
  },
  api_development: {
    key: "api_development",
    title: "API Development",
    subtitle: "Reliable REST APIs",
    startingFrom: "2,500 USD per module",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Spec my API", action: "openModal" },
    secondaryCTA: { label: "Read API best practices", href: "/docs/api" },
    features: [
      "OpenAPI contracts",
      "Rate limits and observability",
      "Load and security tests",
    ],
    slug: "/services/api-development",
  },
  iot_development: {
    key: "iot_development",
    title: "IOT Development",
    subtitle: "Connected devices and cloud",
    startingFrom: "8,000 USD",
    showPrice: false,
    tier: "T3",
    primaryCTA: { label: "Discuss your device plan", action: "openModal" },
    secondaryCTA: {
      label: "See IOT reference arch",
      href: "/architecture/iot",
    },
    features: [
      "Edge to cloud pipelines",
      "Telemetry and control",
      "OTA and security",
    ],
    slug: "/services/iot-development-services",
  },
  devops_consulting: {
    key: "devops_consulting",
    title: "DevOps Consulting",
    subtitle: "CI and CD that speeds delivery",
    startingFrom: "100 USD per hour or 3,000 USD per package",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Assess my pipeline", action: "openModal" },
    secondaryCTA: { label: "View standard package", href: "/packages/devops" },
    features: [
      "Pipeline design",
      "Observability and SRE",
      "Cost and performance tuning",
    ],
    slug: "/services/devops-consulting-services",
  },
  open_source_solutions: {
    key: "open_source_solutions",
    title: "Open Source Solutions",
    subtitle: "Faster delivery with OSS",
    startingFrom: "2,000 USD",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Request OSS plan", action: "openModal" },
    secondaryCTA: { label: "Supported stacks", href: "/stacks/open-source" },
    features: [
      "Selection and licensing",
      "Customization and support",
      "Security hardening",
    ],
    slug: "/services/open-source-consulting",
  },
  digital_transformation: {
    key: "digital_transformation",
    title: "Digital Transformation",
    subtitle: "Enterprise programs that deliver",
    startingFrom: "10,000 USD",
    showPrice: false,
    tier: "T3",
    primaryCTA: { label: "Start a transformation brief", action: "openModal" },
    secondaryCTA: {
      label: "See transformation playbook",
      href: "/playbooks/digital-transformation",
    },
    features: [
      "Process mapping and automation",
      "Data and platform strategy",
      "Change management",
    ],
    slug: "/services/digital-transformation",
  },
  ui_ux_design: {
    key: "ui_ux_design",
    title: "UI and UX Design",
    subtitle: "Design that converts",
    startingFrom: "1,500 USD",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Redesign my journey", action: "openModal" },
    secondaryCTA: { label: "View design gallery", href: "/gallery/uiux" },
    features: [
      "Research based flows",
      "Design systems",
      "Prototypes with tests",
    ],
    slug: "/services/ui-ux-design-services",
  },
  brand_design: {
    key: "brand_design",
    title: "Brand Design",
    subtitle: "Identity that signals trust",
    startingFrom: "2,000 USD",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Build my brand", action: "openModal" },
    secondaryCTA: { label: "See brand kit samples", href: "/gallery/brand" },
    features: [
      "Logo and color system",
      "Guidelines and assets",
      "Launch templates",
    ],
    slug: "/services/brand-design",
  },
  user_research: {
    key: "user_research",
    title: "User Research",
    subtitle: "Decisions powered by insight",
    startingFrom: "1,000 USD per sprint",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Book a research sprint", action: "openModal" },
    secondaryCTA: { label: "Research methods", href: "/research" },
    features: [
      "Interviews and surveys",
      "Usability tests",
      "Insight reporting",
    ],
    slug: "/services/user-research",
  },
  digital_marketing_services: {
    key: "digital_marketing_services",
    title: "Digital Marketing Services",
    subtitle:
      "Data-driven marketing strategies that boost your online presence",
    startingFrom: "1,500 USD per month",
    showPrice: true,
    tier: "T1",
    primaryCTA: { label: "Get marketing strategy", action: "openModal" },
    secondaryCTA: {
      label: "View marketing case studies",
      href: "/case-studies#marketing",
    },
    features: [
      "SEO and content marketing",
      "Social media management",
      "Paid advertising campaigns",
    ],
    slug: "/services/digital-marketing-services",
  },
};

// Helper function to get pricing by slug
export function getPricingBySlug(slug: string): Pricing | null {
  const entry = Object.entries(PRICING_MAP).find(
    ([_, pricing]) => pricing.slug === slug
  );
  return entry ? entry[1] : null;
}

// Helper function to get pricing by key
export function getPricingByKey(key: ServiceKey): Pricing {
  return PRICING_MAP[key];
}

// Helper function to check if pricing should be shown (considering feature flag)
export function shouldShowPricing(pricing: Pricing): boolean {
  const sitewideFlag = import.meta.env.VITE_SHOW_PRICING;
  return pricing.showPrice && sitewideFlag !== "false";
}
