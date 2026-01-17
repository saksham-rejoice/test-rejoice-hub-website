import type { ReactNode } from "react";
import {
  BrainCircuit,
  Users,
  Mail,
  BarChart3,
  Image as ImageIcon,
  Cog,
  Target,
  Wrench,
  Rocket,
  Laptop,
  Calculator,
  Bot,
  Sparkles,
  Link as LinkIcon,
  ClipboardList,
  Globe,
  Smartphone,
  Network,
  Signal,
  Code2,
  Zap,
  Unlock,
  RefreshCw,
  Palette,
  Tag,
  Search,
  FileText,
  TrendingUp,
  FileBadge,
  BookOpen,
  DollarSign,
  Building2,
  UsersRound,
  Briefcase,
  Phone,
  Handshake,
  Newspaper,
  BotMessageSquare,
  Aperture,
  PhoneCall,
  FolderCode,
  BookOpenCheck,
} from "lucide-react";
const hrAgent = "/assets/icons/HRAgent.svg";
const upworkAgent = "/assets/icons/UpworkAgent.svg";
const callAgent = "/assets/icons/CallAgent.svg";
const aiStudio = "/assets/icons/AlStudio.svg";

// ## Updated Type Definitions ##
// The 'icon' property is now 'ReactNode' to accept JSX components.
export interface SubItem {
  label: string;
  href: string;
  description?: string;
  icon?: ReactNode; // Changed from string to ReactNode
}

export interface Section {
  title: string;
  items: SubItem[];
}

export type NavSubItems = SubItem[] | Section[];

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItems;
  isExternal?: boolean;
}

// ## Navigation Items with React Icons ##
export const navItems: NavItem[] = [
  {
    label: "AI Solutions",
    href: "/solutions",
    subItems: [
      {
        title: "AI Agents",
        items: [
          {
            label: "HR Agent",
            href: "/solutions/hr-agent",
            description: "Hiring Automation",
            icon: hrAgent,
          },
          {
            label: "Upwork Agent",
            href: "/solutions/upwork-agent",
            description: "Proposal Engine",
            icon: upworkAgent,
          },
          {
            label: "AI Studio",
            href: "/solutions/ai-studio",
            description: "Content Generation",
            icon: aiStudio,
          },
          {
            label: "AI Call Agent",
            href: "/solutions/call-agent",
            description: "Voice Intelligence",
            icon: callAgent,
          },

          // { label: 'Operations Agent', href: '/solutions/operations', description: 'Process automation', icon: <Cog /> },
          // { label: 'Decision Agent', href: '/solutions/decision', description: 'Strategic planning', icon: <Target /> },
        ],
      },
      {
        title: "",
        items: [
          {
            label: "Learning Experience Platform (LXP)",
            href: "/solutions/learning-experience-platform",
            description: "Taking learning beyond the typical LMS",
            icon: <BookOpenCheck />,
          },
          {
            label: "AI Voice agent for Customer Service",
            href: "/solutions/smart-call-automation",
            description: "Smart call automation",
            icon: upworkAgent,
          },
        ],
      },
      {
        title: "AI Tools",
        items: [
          {
            label: "AI Tools Directory",
            href: "/tools",
            description: "Curated AI tools collection",
            icon: <Wrench />,
          },
          {
            label: "No-Code AI Tools",
            href: "/no-code-tools",
            description: "AI without coding",
            icon: <Rocket />,
          },
          {
            label: "Open Source AI",
            href: "/open-source-tools",
            description: "Free AI solutions",
            icon: <Laptop />,
          },
          {
            label: "AI Calculators",
            href: "/ai-calculators",
            description: "ROI & cost calculators",
            icon: <Calculator />,
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    subItems: [
      {
        title: "AI Development",
        items: [
          {
            label: "AI Agent Development",
            href: "/services/ai-agents-services",
            description: "Custom AI agents",
            icon: <Bot />,
          },
          {
            label: "Generative AI Solutions",
            href: "/services/generative-ai-development-services",
            description: "Content & code generation",
            icon: <Sparkles />,
          },
          {
            label: "AI Integration",
            href: "/services/ai-integration",
            description: "Seamless AI integration",
            icon: <LinkIcon />,
          },
          {
            label: "AI Strategy Consulting",
            href: "/services/ai-strategy-consulting",
            description: "Strategic AI planning",
            icon: <ClipboardList />,
          },
          {
            label: "Fintech Software Development Services",
            href: "/services/fintech-software-development",
            description: "Custom banking & financial platforms",
            icon: <FolderCode />,
          },
          // {
          //   label: "AgentKit Builder",
          //   href: "/services/ai-agentkit-builder-services",
          //   description: "AgentKit Builder",
          //   icon: <BotMessageSquare />,
          // },
          // {
          //   label: "Customize ChatGPT",
          //   href: "/services/chatgpt-customize-services",
          //   description: "Customize ChatGPT",
          //   icon: <Aperture />,
          // },
        ],
      },
      {
        title: "Digital Development",
        items: [
          {
            label: "Web Development",
            href: "/services/web-development-services",
            description: "Modern web applications",
            icon: <Globe />,
          },
          {
            label: "Mobile App Development",
            href: "/services/mobile-app-development-services",
            description: "iOS & Android apps",
            icon: <Smartphone />,
          },
          {
            label: "API Development",
            href: "/services/api-development",
            description: "RESTful APIs",
            icon: <Network />,
          },
          {
            label: "IOT Development",
            href: "/services/iot-development-services",
            description: "Connected devices",
            icon: <Signal />,
          },
          {
            label: "Vibe Coding Development",
            href: "/services/vibe-coding-development-company",
            description: "AI-driven digital solutions",
            icon: <Code2 />,
          },
        ],
      },
      {
        title: "Consulting & Strategy",
        items: [
          {
            label: "DevOps Consulting",
            href: "/services/devops-consulting-services",
            description: "CI/CD & automation",
            icon: <Zap />,
          },
          {
            label: "Open Source Solutions",
            href: "/services/open-source-consulting",
            description: "Open source strategy",
            icon: <Unlock />,
          },
          {
            label: "Digital Transformation",
            href: "/services/digital-transformation",
            description: "Business transformation",
            icon: <RefreshCw />,
          },
        ],
      },
      {
        title: "Design & Experience",
        items: [
          {
            label: "UI/UX Design",
            href: "/services/ui-ux-design-services",
            description: "User experience design",
            icon: <Palette />,
          },
          {
            label: "Brand Design",
            href: "/services/brand-design",
            description: "Brand identity",
            icon: <Tag />,
          },
          {
            label: "User Research",
            href: "/services/user-research",
            description: "User insights",
            icon: <Search />,
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    subItems: [
      {
        title: "Learning",
        items: [
          {
            label: "Blog & Insights",
            href: "/blogs",
            description: "AI trends & insights",
            icon: <FileText />,
          },
          {
            label: "Case Studies",
            href: "/case-studies",
            description: "Success stories",
            icon: <TrendingUp />,
          },
          {
            label: "Whitepapers",
            href: "/whitepapers",
            description: "In-depth research",
            icon: <FileBadge />,
          },
          {
            label: "Documentation",
            href: "/docs",
            description: "Technical guides",
            icon: <BookOpen />,
          },
        ],
      },
      {
        title: "Tools & Assessments",
        items: [
          {
            label: "Free AI Assessment",
            href: "/free-ai-assessment",
            description: "Evaluate AI readiness",
            icon: <BarChart3 />,
          },
          {
            label: "AI ROI Calculator",
            href: "/ai-calculators",
            description: "Calculate AI returns",
            icon: <DollarSign />,
          },
          {
            label: "AI Implementation Guide",
            href: "/resources",
            description: "Step-by-step guide",
            icon: <ClipboardList />,
          },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    subItems: [
      {
        title: "About",
        items: [
          {
            label: "About Us",
            href: "/about-us",
            description: "Our story & mission",
            icon: <Building2 />,
          },
          {
            label: "Our Team",
            href: "/team",
            description: "Meet our experts",
            icon: <UsersRound />,
          },
          {
            label: "Careers",
            href: "/career",
            description: "Join our team",
            icon: <Briefcase />,
          },
        ],
      },
      {
        title: "Connect",
        items: [
          {
            label: "Contact",
            href: "/contact",
            description: "Get in touch",
            icon: <Phone />,
          },
          {
            label: "Partners",
            href: "/partners",
            description: "Partnership opportunities",
            icon: <Handshake />,
          },
          {
            label: "Press Kit",
            href: "/press",
            description: "Media resources",
            icon: <Newspaper />,
          },
        ],
      },
    ],
  },
];

export const endpoints = [
  {
    slug: "/services/ai-agents-services",
    endpoint: "/agentic-ai-project/ai-agent",
  },
  {
    slug: "/services/web-development-services",
    endpoint: "/web-development-project/web-development",
  },
  {
    slug: "/services/mobile-app-development-services",
    endpoint: "/mobile-app-development/mobile-application",
  },
  {
    slug: "/services/ai-strategy-consulting",
    endpoint: "/prd/prd-generator",
  },
  {
    slug: "/services/generative-ai-development-services",
    endpoint: "/generative-ai/generative-ai",
  },
  {
    slug: "/services/devops-consulting-services",
    endpoint: "/prd/prd-generator",
  },
  {
    slug: "/services/open-source-consulting",
    endpoint: "/prd/prd-generator",
  },
  {
    slug: "/services/digital-transformation",
    endpoint: "/prd/prd-generator",
  },
  {
    slug: "/services/api-development",
    endpoint: "/api-development/api-development",
  },
  {
    slug: "/services/ui-ux-design-services",
    endpoint: "/prd/ui-ux-design-prd-generator",
  },
  {
    slug: "/services/brand-design",
    endpoint: "/prd/brand-design-prd-generator",
  },
  {
    slug: "/services/user-research",
    endpoint: "/prd/user-research-prd-generator",
  },
];
