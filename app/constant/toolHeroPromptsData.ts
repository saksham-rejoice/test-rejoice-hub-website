import {
  FaPlug, FaMousePointer, FaRandom, FaDatabase, FaRobot, FaBook, FaGlobe, FaWpforms,
  FaCalendarAlt, FaLink, FaTable, FaFileAlt, FaPen, FaCogs, FaFirefoxBrowser, FaRegBuilding,
  FaShoppingCart, FaLayerGroup, FaUserAstronaut, FaFilePdf, FaCodeBranch, FaComments,
  FaChartLine, FaShareSquare, FaEnvelope, FaImages, FaCode, FaCog
} from "react-icons/fa";

export type PromptItem = { label: string; Icon?: React.ElementType };

export const noCodePrompts: PromptItem[] = [
  { label: "Zapier Alternative", Icon: FaPlug },
  { label: "Drag-and-Drop App Builder", Icon: FaMousePointer },
  { label: "Workflow Automation with Webhooks", Icon: FaRandom },
  { label: "Airtable-like Database Tool", Icon: FaDatabase },
  { label: "No-code AI Chatbot Generator", Icon: FaRobot },
  { label: "Notion-style CMS for Teams", Icon: FaBook },
  { label: "Webflow-style Static Site Builder", Icon: FaGlobe },
  { label: "AI Form Generator", Icon: FaWpforms },
  { label: "Calendly-like Scheduling Tool", Icon: FaCalendarAlt },
  { label: "Visual API Connector", Icon: FaLink },
  { label: "Spreadsheet to Dashboard Tool", Icon: FaTable },
  { label: "Notion to Website Converter", Icon: FaFileAlt },
  { label: "No-code GPT Prompt Tool", Icon: FaPen },
  { label: "One-click Internal Tool Builder", Icon: FaCogs },
  { label: "Browser Automation Tool", Icon: FaFirefoxBrowser },
  { label: "No-code CRM Builder", Icon: FaRegBuilding },
  { label: "E-commerce Store Builder", Icon: FaShoppingCart },
  { label: "Multi-step Form Creator", Icon: FaLayerGroup },
  { label: "AI Persona Generator", Icon: FaUserAstronaut },
  { label: "PDF Data Extractor (No-code)", Icon: FaFilePdf },
];

export const openSourcePrompts: PromptItem[] = [
  { label: "Open-source CRM", Icon: FaRegBuilding },
  { label: "Self-hosted GPT Chatbot", Icon: FaRobot },
  { label: "Notion-like Docs Tool", Icon: FaBook },
  { label: "GitHub Alternative", Icon: FaCodeBranch },
  { label: "Project Management Platform", Icon: FaLayerGroup },
  { label: "Knowledge Base System", Icon: FaBook },
  { label: "Customer Support Chat System", Icon: FaComments },
  { label: "AI Workflow Builder", Icon: FaCogs },
  { label: "Visual Data Analytics Tool", Icon: FaChartLine },
  { label: "PDF Data Extraction System", Icon: FaFilePdf },
  { label: "Self-hosted Web Analytics", Icon: FaChartLine },
  { label: "Online Form Builder", Icon: FaWpforms },
  { label: "API Gateway and Rate Limiter", Icon: FaLink },
  { label: "Headless CMS", Icon: FaBook },
  { label: "File Sharing and Collaboration Tool", Icon: FaShareSquare },
  { label: "Email Marketing Automation", Icon: FaEnvelope },
  { label: "Chatbot Builder", Icon: FaRobot },
  { label: "Image Annotation Tool", Icon: FaImages },
  { label: "Code Review Dashboard", Icon: FaCode },
  { label: "DevOps Monitoring and Alerting Stack", Icon: FaCog },
];
