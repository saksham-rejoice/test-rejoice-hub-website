import {
  MdFastfood,
  MdShoppingCart,
  MdLibraryBooks,
  MdWeb,
  MdSensors,
  MdHome,
  MdLocalShipping,
} from "react-icons/md";
import {
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaMobileAlt,
  FaSyncAlt,
  FaRegFileAlt,
  FaCog,
  FaCodeBranch,
  FaExchangeAlt,
  FaFileContract,
  FaUsers,
  FaPenFancy,
  FaImages,
  FaComments,
  FaUserTie,
  FaUserCheck,
  FaShoppingCart,
} from "react-icons/fa";
import { FaCode, FaMicrophone } from "react-icons/fa6";
import { FaPalette, FaTools, FaCloud, FaMicrochip } from "react-icons/fa";
import { SiOpenai, SiUpwork, SiMicrodotblog, SiPhonepe } from "react-icons/si";

type PromptItem = { label: string; Icon: React.ElementType };

export const placeholderMap: Record<string, string> = {
  "mobile-app-development-services": "Describe your mobile app idea...",
  "web-development-services": "Describe your web project...",
  "ui-ux-design-services": "Describe your UI/UX requirement...",
  "iot-development-services": "Describe your IOT concept...",
  "devops-consulting-services": "Describe your DevOps challenge...",
  "open-source-consulting": "Describe your open-source goal...",
  "generative-ai-development-services": "Describe your generative AI idea...",
  "ai-agents-services": "Describe your AI agent project...",
};

export const suggestionPrompts: Record<string, PromptItem[]> = {
  "mobile-app-development-services": [
    { label: "Develop a fitness tracker app", Icon: FaSyncAlt },
    { label: "Build a meditation journal app", Icon: FaRegFileAlt },
    { label: "Create an AI flashcard learning app", Icon: FaChartLine },
    { label: "Develop an AR product viewer app", Icon: FaImages },
    { label: "Build a mental health support bot app", Icon: FaUserTie },
  ],
  "web-development-services": [
    { label: "Build a CMS with AI Blogging Tool", Icon: FaCodeBranch },
    { label: "Develop an Admin Portal", Icon: FaCog },
    { label: "Create a Freelancer Marketplace", Icon: FaExchangeAlt },
    { label: "Design a Community Forum Platform", Icon: FaComments },
    { label: "Develop a Fintech Reporting Tool", Icon: FaFileContract },
  ],
  "ui-ux-design-services": [
    { label: "Mobile App Wireframes", Icon: FaMobileAlt },
    { label: "B2B Web App UI Kit", Icon: FaCodeBranch },
    { label: "Dark Mode SaaS Dashboard", Icon: FaRegFileAlt },
    { label: "Retail POS UX Flows", Icon: FaShoppingCart },
    { label: "Multi-step Checkout UX", Icon: FaSyncAlt },
    { label: "Figma Design System Setup", Icon: FaCog },
    { label: "Prototype for Fintech App", Icon: FaFileContract },
  ],
  "iot-development-services": [
    { label: "Fleet Monitoring Platform", Icon: MdLocalShipping },
    { label: "Industrial Sensor Agent", Icon: MdSensors },
    { label: "Smart Farming Dashboard", Icon: MdHome },
    { label: "HealthMonitoring Wearable", Icon: MdFastfood },
    { label: "Vehicle Access Control App", Icon: MdWeb },
  ],
  "devops-consulting-services": [
    { label: "Kubernetes Pipeline Setup", Icon: FaCog },
    { label: "Dockerized App Architecture", Icon: FaCodeBranch },
    { label: "Monitoring + Alerting Infra", Icon: FaCode },
    { label: "SRE Best Practices Setup", Icon: FaCodeBranch },
    { label: "Multi-Region Rollout Plan", Icon: FaCodeBranch },
  ],
  "open-source-consulting": [
    { label: "GitLab Self-Hosted", Icon: FaCodeBranch },
    { label: "Rocket.Chat Deployment", Icon: FaUsers },
    { label: "Mattermost for Teams", Icon: FaUsers },
    { label: "Redash for Analytics", Icon: FaChartLine },
    { label: "Wiki.js Knowledge Base", Icon: MdLibraryBooks },
  ],
  "generative-ai-development-services": [
    { label: "AI Article Generator", Icon: FaPenFancy },
    { label: "Code Assistant Bot", Icon: FaCode },
    { label: "AI Video Script Writer", Icon: FaComments },
    { label: "Image-to-Text Gen Agent", Icon: FaImages },
    { label: "Voice Synthesizer Agent", Icon: FaMicrophone },
  ],
  "ai-agents-services": [
    { label: "Object Detection Engine", Icon: FaUserTie },
    { label: "ML Model for Churn Prediction", Icon: FaUserCheck },
    { label: "Custom NLP Agent", Icon: MdShoppingCart },
    { label: "Learning Classifier", Icon: MdShoppingCart },
    { label: "Behavioral Pattern Engine", Icon: MdShoppingCart },
  ],
};

export const services = [
  {
    icon: <FaRobot className="text-amber-500 text-3xl" />,
    title: "AI & ML Solutions",
    description:
      "Cutting-edge AI agent platforms including Personas AI, Upwork AI Agent, Call AI Agent, and Newsletter AI Agent. We deliver intelligent automation solutions that transform business operations.",
    platforms: [
      { name: "Personas AI", icon: <SiOpenai className="text-blue-600" /> },
      {
        name: "Upwork AI Agent",
        icon: <SiUpwork className="text-green-600" />,
      },
      {
        name: "Call AI Agent",
        icon: <SiPhonepe className="text-purple-600" />,
      },
      {
        name: "Newsletter AI Agent",
        icon: <SiMicrodotblog className="text-red-600" />,
      },
    ],
  },
  {
    icon: <FaCode className="text-amber-500 text-3xl" />,
    title: "Software Development",
    description:
      "Comprehensive web, mobile, and IOT development using the latest tech stacks. From concept to deployment, we build scalable, secure, and high-performance applications.",
    technologies: ["React", "Node.js", "Python", "Flutter", "AWS", "Docker"],
  },
  {
    icon: <FaPalette className="text-amber-500 text-3xl" />,
    title: "UI/UX Design",
    description:
      "User-centered design approach creating intuitive, beautiful, and functional interfaces. We focus on delivering exceptional user experiences that drive engagement and satisfaction.",
    deliverables: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
  },
  {
    icon: <FaTools className="text-amber-500 text-3xl" />,
    title: "Open Source Consulting",
    description:
      "Expert guidance on open source technologies, licensing, and community engagement. We help organizations leverage open source solutions for maximum impact and sustainability.",
    areas: [
      "Technology Selection",
      "License Compliance",
      "Community Strategy",
      "Governance Models",
    ],
  },
  {
    icon: <FaCloud className="text-amber-500 text-3xl" />,
    title: "DevOps",
    description:
      "End-to-end DevOps solutions including CI/CD pipelines, infrastructure automation, monitoring, and security. We ensure rapid, reliable, and secure software delivery.",
    services: [
      "CI/CD Setup",
      "Cloud Migration",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security Scanning",
    ],
  },
  {
    icon: <FaMicrochip className="text-amber-500 text-3xl" />,
    title: "IOT Development",
    description:
      "Complete IOT solutions from device firmware to cloud platforms. We build connected systems that collect, analyze, and act on real-time data for smarter operations.",
    capabilities: [
      "Device Development",
      "Cloud Integration",
      "Data Analytics",
      "Real-time Monitoring",
      "Edge Computing",
    ],
  },
];
