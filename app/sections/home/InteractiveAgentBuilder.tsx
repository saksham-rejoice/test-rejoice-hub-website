import StarIcon from "~/components/icons/starIcon";
import PlayIcon from "~/components/icons/playIcon";
import TrueIcon from "~/components/icons/trueIcon";
import AgentIcon from "~/components/icons/agentIcon";
import BotIcon from "~/components/icons/botIcon";
import UpArrow from "~/components/icons/upArrow";
import StarGroupIcon from "~/components/icons/starGroupIcon";
import TrueOutlineIcon from "~/components/icons/trueOutlineIcon";
import { motion } from "framer-motion";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";
import { aiAgentBuild } from "~/api/toolsApi";
import { sendMail } from "~/api/toolsApi"; // Import the sendMail API call
import { BuildingAnimation } from "~/components/ui/BuildingAnimation";
import { LeadCaptureBlueprintModal } from "~/components/ui/LeadCaptureBlueprintModal";
import { AgentBlueprint, AgentCategory } from "~/types/aiAgentBuilderTypes";
import {
  Sparkles,
  Zap,
  CheckCircle,
  ArrowRight,
  Bot,
  Brain,
  FileText,
  Download,
  Code,
  Lightbulb,
  Settings,
  Database,
  Target,
  MapPin,
  Search,
  Shield,
} from "lucide-react";
import { serviceContentRegistry } from "~/lib/serviceContentLoader";
import { Link } from "react-router-dom";

interface ServiceBuilderState {
  currentStep: "input" | "building" | "blueprint" | "complete";
  userInput: string;
  isGenerating: boolean;
  showLeadCapture: boolean;
  selectedTemplate?: ServiceTemplate;
  generatedBlueprint?: AgentBlueprint;
  error?: string;
}

interface ServiceTemplate {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  estimatedTime: string;
  complexity: "Simple" | "Intermediate" | "Advanced";
}

export const InteractiveAgentBuilder: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [project, setProject] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [builderState, setBuilderState] = useState<ServiceBuilderState>({
    currentStep: "input",
    userInput: "",
    isGenerating: false,
    showLeadCapture: false,
  });
  const serviceContent = serviceContentRegistry["ai-agents-services"];

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  // Service-specific templates based on the service type
  const getServiceTemplates = (): ServiceTemplate[] => {
    const serviceId = serviceContent.serviceId;

    // Service-specific template mappings
    const serviceTemplates: { [key: string]: ServiceTemplate[] } = {
      "ai-agents-services": [
        {
          id: "customer-service-agent",
          label: "Customer Service AI Agent",
          description:
            "24/7 intelligent customer support with natural language processing",
          icon: <Bot className="w-4 h-4" />,
          category: "customer-service",
          estimatedTime: "2-3 weeks",
          complexity: "Intermediate",
        },
        {
          id: "sales-automation-agent",
          label: "Sales Automation Agent",
          description:
            "Lead qualification, follow-ups, and sales process automation",
          icon: <Zap className="w-4 h-4" />,
          category: "sales",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "data-processing-agent",
          label: "Data Processing Agent",
          description:
            "Automated data analysis, reporting, and insights generation",
          icon: <Brain className="w-4 h-4" />,
          category: "data-processing",
          estimatedTime: "4-6 weeks",
          complexity: "Advanced",
        },
      ],
      "generative-ai-development-services": [
        {
          id: "content-generation",
          label: "Content Generation AI",
          description:
            "Automated content creation for marketing, blogs, and social media",
          icon: <Sparkles className="w-4 h-4" />,
          category: "content",
          estimatedTime: "3-5 weeks",
          complexity: "Intermediate",
        },
        {
          id: "chatbot-solution",
          label: "Advanced Chatbot",
          description:
            "Intelligent conversational AI for customer interactions",
          icon: <Bot className="w-4 h-4" />,
          category: "chatbot",
          estimatedTime: "2-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "image-generation",
          label: "Image Generation AI",
          description: "Custom image creation and visual content generation",
          icon: <Brain className="w-4 h-4" />,
          category: "image-generation",
          estimatedTime: "4-6 weeks",
          complexity: "Advanced",
        },
      ],
      "web-development-services": [
        {
          id: "ecommerce-platform",
          label: "E-commerce Platform",
          description: "Full-featured online store with payment integration",
          icon: <Code className="w-4 h-4" />,
          category: "ecommerce",
          estimatedTime: "6-8 weeks",
          complexity: "Advanced",
        },
        {
          id: "business-website",
          label: "Business Website",
          description: "Professional corporate website with modern design",
          icon: <Code className="w-4 h-4" />,
          category: "business-website",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "web-application",
          label: "Custom Web Application",
          description:
            "Tailored web application for your specific business needs",
          icon: <Brain className="w-4 h-4" />,
          category: "web-app",
          estimatedTime: "4-8 weeks",
          complexity: "Advanced",
        },
      ],
      "mobile-app-development-services": [
        {
          id: "ios-app",
          label: "iOS Mobile App",
          description: "Native iOS application with modern UI/UX design",
          icon: <Code className="w-4 h-4" />,
          category: "ios",
          estimatedTime: "6-10 weeks",
          complexity: "Advanced",
        },
        {
          id: "android-app",
          label: "Android Mobile App",
          description: "Native Android application with Material Design",
          icon: <Code className="w-4 h-4" />,
          category: "android",
          estimatedTime: "6-10 weeks",
          complexity: "Advanced",
        },
        {
          id: "cross-platform-app",
          label: "Cross-Platform App",
          description: "Single codebase for iOS and Android platforms",
          icon: <Zap className="w-4 h-4" />,
          category: "cross-platform",
          estimatedTime: "4-8 weeks",
          complexity: "Intermediate",
        },
      ],
      "ui-ux-design-services": [
        {
          id: "website-design",
          label: "Website UI/UX Design",
          description:
            "Complete website design with user experience optimization",
          icon: <Code className="w-4 h-4" />,
          category: "website-design",
          estimatedTime: "2-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "mobile-app-design",
          label: "Mobile App Design",
          description:
            "Mobile app interface design with intuitive user experience",
          icon: <Code className="w-4 h-4" />,
          category: "mobile-design",
          estimatedTime: "3-5 weeks",
          complexity: "Intermediate",
        },
        {
          id: "design-system",
          label: "Design System",
          description: "Comprehensive design system for brand consistency",
          icon: <Brain className="w-4 h-4" />,
          category: "design-system",
          estimatedTime: "4-6 weeks",
          complexity: "Advanced",
        },
      ],
      "devops-consulting-services": [
        {
          id: "ci-cd-pipeline",
          label: "CI/CD Pipeline",
          description:
            "Automated deployment pipeline for continuous integration",
          icon: <Zap className="w-4 h-4" />,
          category: "ci-cd",
          estimatedTime: "2-3 weeks",
          complexity: "Intermediate",
        },
        {
          id: "cloud-migration",
          label: "Cloud Migration",
          description: "Migrate your infrastructure to cloud platforms",
          icon: <Brain className="w-4 h-4" />,
          category: "cloud-migration",
          estimatedTime: "4-8 weeks",
          complexity: "Advanced",
        },
        {
          id: "infrastructure-automation",
          label: "Infrastructure Automation",
          description: "Automate infrastructure provisioning and management",
          icon: <Bot className="w-4 h-4" />,
          category: "infrastructure",
          estimatedTime: "3-5 weeks",
          complexity: "Intermediate",
        },
      ],
      "brand-design": [
        {
          id: "brand-identity",
          label: "Brand Identity Design",
          description:
            "Complete brand identity including logo, colors, and guidelines",
          icon: <Brain className="w-4 h-4" />,
          category: "brand-identity",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "logo-design",
          label: "Logo Design",
          description: "Professional logo design with multiple variations",
          icon: <Code className="w-4 h-4" />,
          category: "logo-design",
          estimatedTime: "1-2 weeks",
          complexity: "Simple",
        },
        {
          id: "brand-guidelines",
          label: "Brand Guidelines",
          description: "Comprehensive brand guidelines and style guide",
          icon: <Code className="w-4 h-4" />,
          category: "brand-guidelines",
          estimatedTime: "2-3 weeks",
          complexity: "Intermediate",
        },
      ],
      "user-research": [
        {
          id: "user-personas",
          label: "User Personas",
          description: "Detailed user personas and behavior analysis",
          icon: <Brain className="w-4 h-4" />,
          category: "user-personas",
          estimatedTime: "2-3 weeks",
          complexity: "Intermediate",
        },
        {
          id: "usability-testing",
          label: "Usability Testing",
          description:
            "Comprehensive usability testing and user feedback analysis",
          icon: <Code className="w-4 h-4" />,
          category: "usability-testing",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "user-journey-mapping",
          label: "User Journey Mapping",
          description: "Complete user journey mapping and optimization",
          icon: <Zap className="w-4 h-4" />,
          category: "user-journey",
          estimatedTime: "2-4 weeks",
          complexity: "Intermediate",
        },
      ],
      "digital-transformation": [
        {
          id: "process-automation",
          label: "Process Automation",
          description:
            "End-to-end business process automation and optimization",
          icon: <Zap className="w-4 h-4" />,
          category: "process-automation",
          estimatedTime: "4-8 weeks",
          complexity: "Advanced",
        },
        {
          id: "digital-strategy",
          label: "Digital Strategy",
          description:
            "Comprehensive digital transformation strategy and roadmap",
          icon: <Brain className="w-4 h-4" />,
          category: "digital-strategy",
          estimatedTime: "3-5 weeks",
          complexity: "Advanced",
        },
        {
          id: "technology-modernization",
          label: "Technology Modernization",
          description: "Legacy system modernization and cloud migration",
          icon: <Bot className="w-4 h-4" />,
          category: "technology-modernization",
          estimatedTime: "6-12 weeks",
          complexity: "Advanced",
        },
      ],
      "ai-integration": [
        {
          id: "legacy-ai-integration",
          label: "Legacy System AI Enhancement",
          description:
            "Add AI capabilities to existing systems without disruption",
          icon: <Settings className="w-4 h-4" />,
          category: "integration",
          estimatedTime: "6-12 weeks",
          complexity: "Advanced",
        },
        {
          id: "workflow-automation",
          label: "Workflow Automation Integration",
          description:
            "Integrate AI-powered automation into existing workflows",
          icon: <Zap className="w-4 h-4" />,
          category: "automation",
          estimatedTime: "3-6 weeks",
          complexity: "Intermediate",
        },
        {
          id: "data-pipeline",
          label: "Data Pipeline Integration",
          description: "Connect data sources for AI processing and analysis",
          icon: <Database className="w-4 h-4" />,
          category: "data",
          estimatedTime: "2-4 weeks",
          complexity: "Intermediate",
        },
      ],
      "ai-strategy-consulting": [
        {
          id: "strategy-development",
          label: "AI Strategy Development",
          description:
            "Develop comprehensive AI strategy aligned with business goals",
          icon: <Target className="w-4 h-4" />,
          category: "strategy",
          estimatedTime: "6-10 weeks",
          complexity: "Advanced",
        },
        {
          id: "technology-roadmap",
          label: "Technology Roadmap",
          description: "Create detailed implementation roadmap with milestones",
          icon: <MapPin className="w-4 h-4" />,
          category: "planning",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "vendor-selection",
          label: "Vendor Selection",
          description:
            "Expert guidance in selecting AI technologies and vendors",
          icon: <Search className="w-4 h-4" />,
          category: "consulting",
          estimatedTime: "2-3 weeks",
          complexity: "Intermediate",
        },
      ],
      "api-development": [
        {
          id: "rest-api",
          label: "RESTful API Development",
          description:
            "Design and develop RESTful APIs following best practices",
          icon: <Code className="w-4 h-4" />,
          category: "development",
          estimatedTime: "4-8 weeks",
          complexity: "Intermediate",
        },
        {
          id: "graphql-api",
          label: "GraphQL API Development",
          description:
            "Build flexible GraphQL APIs for efficient data querying",
          icon: <Database className="w-4 h-4" />,
          category: "development",
          estimatedTime: "3-6 weeks",
          complexity: "Intermediate",
        },
        {
          id: "api-security",
          label: "API Security & Authentication",
          description:
            "Implement comprehensive security measures and authentication",
          icon: <Shield className="w-4 h-4" />,
          category: "security",
          estimatedTime: "2-4 weeks",
          complexity: "Intermediate",
        },
      ],
    };

    // Return service-specific templates or fallback to default templates
    return (
      serviceTemplates[serviceId] || [
        {
          id: "custom-solution",
          label: "Custom Solution",
          description:
            "Tailored solution designed specifically for your business needs",
          icon: <Brain className="w-4 h-4" />,
          category: "custom",
          estimatedTime: "4-8 weeks",
          complexity: "Advanced",
        },
        {
          id: "automation-workflow",
          label: "Process Automation",
          description: "Streamline your workflows with intelligent automation",
          icon: <Zap className="w-4 h-4" />,
          category: "automation",
          estimatedTime: "2-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "system-integration",
          label: "System Integration",
          description: "Integrate capabilities into your existing systems",
          icon: <Bot className="w-4 h-4" />,
          category: "integration",
          estimatedTime: "3-6 weeks",
          complexity: "Intermediate",
        },
      ]
    );
  };

  const serviceTemplates = getServiceTemplates();

  // Placeholder suggestions based on service type
  const getPlaceholderSuggestions = (): string[] => {
    const serviceId = serviceContent.serviceId;

    // Service-specific placeholder suggestions
    const servicePlaceholders: { [key: string]: string[] } = {
      "ai-agents-services": [
        "I need an AI agent that can handle customer support inquiries 24/7...",
        "Build an AI agent to automate our sales lead qualification process...",
        "Create an AI agent for automated data processing and reporting...",
        "Develop an intelligent chatbot for our website...",
        "Build an AI assistant for internal team productivity...",
      ],
      "generative-ai-development-services": [
        "I need a generative AI solution for content creation and marketing...",
        "Build an AI system to generate personalized customer communications...",
        "Create a content generation platform for our marketing team...",
        "Develop an AI system for automated report generation...",
        "Build an image generation tool for our design team...",
      ],
      "web-development-services": [
        "I need a modern e-commerce website with payment integration...",
        "Build a professional business website with lead generation...",
        "Create a custom web application for our business processes...",
        "Develop a responsive website that works on all devices...",
        "Build a web platform for our online services...",
      ],
      "mobile-app-development-services": [
        "I need a native iOS app for our business...",
        "Build an Android app with modern Material Design...",
        "Create a cross-platform app for iOS and Android...",
        "Develop a mobile app for our customer engagement...",
        "Build a mobile solution for our field team...",
      ],
      "ui-ux-design-services": [
        "I need a complete website redesign with better user experience...",
        "Design a mobile app interface that is intuitive and engaging...",
        "Create a design system for our brand consistency...",
        "Redesign our user interface to improve conversion rates...",
        "Build a user experience strategy for our digital products...",
      ],
      "devops-consulting-services": [
        "I need help setting up automated deployment pipelines...",
        "Migrate our infrastructure to the cloud...",
        "Automate our infrastructure provisioning and management...",
        "Set up monitoring and alerting for our applications...",
        "Optimize our development and deployment processes...",
      ],
      "brand-design": [
        "I need a complete brand identity design including logo and guidelines...",
        "Create a professional logo design for our business...",
        "Develop comprehensive brand guidelines for consistency...",
        "Design a brand identity that reflects our company values...",
        "Create a visual identity system for our products...",
      ],
      "user-research": [
        "I need user personas and behavior analysis for our product...",
        "Conduct usability testing to improve our user experience...",
        "Create user journey maps for our customer touchpoints...",
        "Analyze user behavior to optimize our conversion funnel...",
        "Research user needs to inform our product development...",
      ],
      "digital-transformation": [
        "I need a comprehensive digital transformation strategy...",
        "Automate our business processes to improve efficiency...",
        "Modernize our technology infrastructure and systems...",
        "Create a digital roadmap for our organization...",
        "Transform our business operations with digital solutions...",
      ],
      "ai-integration": [
        "I need to integrate AI capabilities into our existing systems...",
        "Add AI features to our legacy applications without disruption...",
        "Connect our data sources for AI processing and analysis...",
        "Automate our workflows with AI-powered solutions...",
        "Enhance our current systems with intelligent capabilities...",
      ],
      "ai-strategy-consulting": [
        "I need help developing a comprehensive AI strategy...",
        "Create an AI roadmap aligned with our business goals...",
        "Evaluate AI technologies and vendors for our needs...",
        "Develop an AI implementation plan for our organization...",
        "Build an AI strategy that delivers measurable ROI...",
      ],
      "api-development": [
        "I need to build RESTful APIs for our applications...",
        "Create GraphQL APIs for efficient data querying...",
        "Develop secure APIs with authentication and authorization...",
        "Build APIs that integrate with our existing systems...",
        "Create comprehensive API documentation and developer guides...",
      ],
    };

    // Return service-specific placeholders or fallback to generic ones
    return (
      servicePlaceholders[serviceId] || [
        `I need help with ${serviceContent.title.toLowerCase()}...`,
        `Build a solution that can improve our ${serviceContent.serviceId.replace(/-/g, " ")}...`,
        `Create a custom solution for our ${serviceContent.serviceId.replace(/-/g, " ")} requirements...`,
        `Develop a ${serviceContent.serviceId.replace(/-/g, " ")} solution for our business...`,
      ]
    );
  };

  const placeholderSuggestions = getPlaceholderSuggestions();

  // Cycling placeholder animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder(
        (prev) => (prev + 1) % placeholderSuggestions.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholderSuggestions.length]);

  const handleTemplateSelect = (template: ServiceTemplate) => {
    setBuilderState((prev) => ({
      ...prev,
      selectedTemplate: template,
      userInput: template.description,
    }));
  };

  const handleInputChange = (value: string) => {
    setBuilderState((prev) => ({
      ...prev,
      userInput: value,
      selectedTemplate: undefined,
      error: undefined,
    }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const leftStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const rightStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  };

  const scaleHover = { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  const TiltCard: React.FC<{
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
  }> = ({ className = "", children, onClick }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), {
      stiffness: 200,
      damping: 20,
    });
    const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), {
      stiffness: 200,
      damping: 20,
    });

    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      x.set(Math.max(-50, Math.min(50, relX)));
      y.set(Math.max(-50, Math.min(50, relY)));
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        className={className}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ z: 12, boxShadow: "0 18px 40px rgba(0,0,0,0.18)" }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  };

  const agentTypes = [
    {
      title: "Customer Support Chatbot",
      description:
        "An AI agent to handle customer inquiries and support tickets 24/7",
    },
    {
      title: "Data Analysis Agent",
      description:
        "An AI agent to analyze data and generate actionable business insights",
    },
    {
      title: "Email Marketing Automation",
      description:
        "An AI agent to personalize and automate email marketing campaigns",
    },
    {
      title: "Sales Lead Qualification",
      description: "An AI agent to qualify leads and optimize sales processes",
    },
    {
      title: "Content Generation Bot",
      description:
        "An AI agent to create engaging content across multiple formats",
    },
    {
      title: "Process Automation Agent",
      description: "An AI agent to automate repetitive business processes",
    },
  ];

  const generateBlueprintFromResponse = (response: any): AgentBlueprint => {
    const blueprintId = `blueprint-${Date.now()}`;
    const category: AgentCategory = "custom";

    return {
      id: blueprintId,
      title:
        response.attributes?.project_title ||
        `${serviceContent.title} - Custom Solution`,
      category,
      description:
        response.attributes?.small_description || builderState.userInput,
      components: response.attributes.components_count,
      estimatedDevelopmentTime:
        response.attributes?.development_time || "3-4 Months",
      deliverables: response.plan,
      core_components: response.attributes.core_components,
      keyFeatures: response.attributes?.key_features || [],
      technicalSpecs: [
        "Cloud-native deployment (AWS/Azure/GCP)",
        "Microservices architecture",
        "Auto-scaling capabilities",
        "End-to-end encryption",
        "API rate limiting and authentication",
        "Comprehensive logging and monitoring",
        "Backup and disaster recovery",
      ],
    };
  };

  const handleBuildAgent = async () => {
    if (!builderState.userInput.trim() || builderState.isGenerating) return;
    setLoading(true);

    setBuilderState((prev) => ({
      ...prev,
      isGenerating: true,
      error: undefined,
    }));

    try {
      const response = await aiAgentBuild({
        project_description: builderState.userInput,
      });

      if (response.success && response.plan && response.attributes) {
        // Generate blueprint from response data
        const blueprint = generateBlueprintFromResponse(response);

        setProject(response.project_id);
        setBuilderState((prev) => ({
          ...prev,
          currentStep: "building",
          generatedBlueprint: blueprint,
          isGenerating: false,
          showLeadCapture: true,
        }));
      }
    } catch (error) {
      console.error("Error generating solution:", error);
      setBuilderState((prev) => ({
        ...prev,
        isGenerating: false,
        error: "Failed to generate solution. Please try again.",
      }));
    } finally {
      setLoading(false);
    }
  };

  const generateServiceBlueprint = (
    input: string,
    template?: ServiceTemplate
  ): AgentBlueprint | any => {
    const blueprintId = `blueprint-${Date.now()}`;
    const category: AgentCategory = "custom";

    return {
      id: blueprintId,
      title: `${serviceContent.title} - Custom Solution`,
      category,
      description: input,
      components: [
        {
          id: "ai-core",
          name: "AI Core Engine",
          description:
            "Main AI processing component tailored for your requirements",
          type: "core",
          estimatedTime: "1-2 weeks",
          technologies: ["Python", "TensorFlow", "FastAPI"],
        },
        {
          id: "data-pipeline",
          name: "Data Processing Pipeline",
          description: "Automated data ingestion and processing system",
          type: "core",
          estimatedTime: "5-7 days",
          technologies: ["Apache Kafka", "PostgreSQL", "Redis"],
        },
        {
          id: "user-interface",
          name: "User Interface",
          description: "Intuitive dashboard for monitoring and control",
          type: "feature",
          estimatedTime: "1 week",
          technologies: ["React", "TypeScript", "Tailwind CSS"],
        },
        {
          id: "integration-layer",
          name: "Integration Layer",
          description: "APIs and connectors for seamless system integration",
          type: "integration",
          estimatedTime: "3-5 days",
          technologies: ["REST API", "GraphQL", "WebSockets"],
        },
      ],
      estimatedDevelopmentTime: template?.estimatedTime || "4-6 weeks",
      deliverables: [
        "Complete source code and documentation",
        "Deployment and setup guide",
        "Training and onboarding session",
        "30-day support and maintenance",
        "Performance monitoring dashboard",
      ],
      keyFeatures: [
        "Advanced AI processing capabilities",
        "Real-time data analysis",
        "Scalable cloud architecture",
        "Enterprise-grade security",
        "Custom integrations",
        "24/7 monitoring and alerts",
      ],
      technicalSpecs: [
        "Cloud-native deployment (AWS/Azure/GCP)",
        "Microservices architecture",
        "Auto-scaling capabilities",
        "End-to-end encryption",
        "API rate limiting and authentication",
        "Comprehensive logging and monitoring",
        "Backup and disaster recovery",
      ],
    };
  };

  const handleBuildingComplete = () => {
    try {
      // Only generate blueprint if we don't already have one from the API response
      if (!builderState.generatedBlueprint) {
        const blueprint = generateServiceBlueprint(
          builderState.userInput,
          builderState.selectedTemplate
        );

        setBuilderState((prev) => ({
          ...prev,
          currentStep: "blueprint",
          generatedBlueprint: blueprint,
          isGenerating: false,
          showLeadCapture: true,
        }));
      } else {
        // Blueprint already generated from API response
        setBuilderState((prev) => ({
          ...prev,
          currentStep: "blueprint",
          isGenerating: false,
          showLeadCapture: true,
        }));
      }
    } catch (error) {
      console.error("Blueprint generation error:", error);
      setBuilderState((prev) => ({
        ...prev,
        currentStep: "input",
        isGenerating: false,
        error: "Failed to generate blueprint. Please try again.",
      }));
    }
  };

  const handleEmailSubmit = async (email: string): Promise<void> => {
    try {
     const response=   await sendMail({
        email,
        project_id: project,
      });

   
    } catch (error) {
      console.error("Lead submission error:", error);
      throw new Error("Failed to submit lead. Please try again.");
    }
  };

  const handleModalClose = () => {
    setBuilderState((prev) => ({
      ...prev,
      showLeadCapture: false,
      currentStep: "input",
      userInput: "",
      selectedTemplate: undefined,
      generatedBlueprint: undefined,
      error: undefined,
    }));
  };

  return (
    <motion.section
      className="pt-28 bg-white min-h-screen pb-10 relative max-tab:before:hidden before:absolute before:w-1/2 before:right-0 before:top-0 before:h-full before:bg-light before:content-['']"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container-lg  ">
        <div className="grid grid-cols-[710px_1fr] max-tab:grid-cols-1 max-tab:gap-10 max-mobile:gap-5 gap-0 items-center z-auto">
          <motion.div
            className="bg-[url('/assets/images/line.png')] bg-no-repeat bg-cover w-full pr-10 max-tab:pr-0"
            variants={leftStagger}
          >
            <motion.div
              className="py-2 max-mobile:text-sm flex items-center gap-1 px-4 bg-light-900 text-primary text-base font-semibold w-fit rounded-full"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <StarIcon />
              Trusted by 100+ Companies Worldwide
            </motion.div>
            <div className="py-6">
              <motion.h1
                className="text-primary"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                Build Your Custom
              </motion.h1>
              <motion.h2
                className="bg-[linear-gradient(90deg,#FF5C00_0%,#FF9504_100%)] max-tab:hidden rounded-xl w-fit text-white font-semibold px-2 text-[64px] leading-normal"
                variants={fadeInUp}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                AI Agent
              </motion.h2>
              <motion.h2
                className="text-primary text-[36px] leading-[46px] font-semibold hidden max-tab:block"
                variants={fadeInUp}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                AI Agent
              </motion.h2>
            </div>
            <motion.p
              className="text-lg max-w-[612px] mb-6 text-grey-500 tracking-[-0.32px] max-mobile:text-base"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              Describe your needs, get an instant blueprint, and accelerate your
              AI journey with our expert-crafted solutions.
            </motion.p>
            <Link to="/case-studies">
              <motion.button
                className="p-1 bg-black flex items-center gap-2 text-white cursor-pointer rounded-full border-none"
                {...scaleHover}
              >
                <span className="block pl-4 text-base font-medium text-white">
                  View Success Stories
                </span>

                <div className="w-[72px] h-12 bg-white rounded-full flex items-center justify-center">
                  <PlayIcon />
                </div>
              </motion.button>
            </Link>
            <div className="py-9 max-tab:py-5">
              <motion.p
                className="text-lg text-black font-medium"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                Powering innovation for industry leaders
              </motion.p>
            </div>
            <div className="flex justify-between pb-9 max-mobile:grid max-mobile:grid-cols-2 max-mobile:gap-5">
              <motion.div variants={fadeInUp} viewport={{ once: true }}>
                <h2 className="heading2 text-black text-center max-mobile:text-2xl">
                  500+
                </h2>
                <span className="block text-center text-grey-500 font-normal">
                  AI Agents Built
                </span>
              </motion.div>
              <motion.div variants={fadeInUp} viewport={{ once: true }}>
                <h2 className="heading2 text-black text-center max-mobile:text-2xl">
                  99%
                </h2>
                <span className="block text-center text-grey-500 font-normal">
                  Client Satisfaction
                </span>
              </motion.div>
              <motion.div variants={fadeInUp} viewport={{ once: true }}>
                <h2 className="heading2 text-black text-center max-mobile:text-2xl">
                  24/7
                </h2>
                <span className="block text-center text-grey-500 font-normal">
                  Expert Support
                </span>
              </motion.div>
              <motion.div variants={fadeInUp} viewport={{ once: true }}>
                <h2 className="heading2 text-black text-center max-mobile:text-2xl">
                  10x
                </h2>
                <span className="block text-center text-grey-500 font-normal">
                  Faster Deployment
                </span>
              </motion.div>
            </div>
            <div className="flex items-center gap-2.5 max-mobile:flex-wrap max-mobile:justify-center">
              <motion.button
                className="px-1 py text-base font-medium flex items-center gap-1.5 tracking-wide bg-light-900 rounded-full text-primary"
                {...scaleHover}
              >
                <span className="block p-2.5">
                  Instant Blueprint Generation
                </span>
                <div className="w-[48px] flex items-center justify-center h-8 bg-white rounded-full">
                  <TrueIcon />
                </div>
              </motion.button>
              <motion.button
                className="px-1 py text-base font-medium flex items-center gap-1.5 tracking-wide bg-light-900 rounded-full text-primary"
                {...scaleHover}
              >
                <span className="block p-2.5">Expert-Crafted Solutions</span>
                <div className="w-[48px] flex items-center justify-center h-8 bg-white rounded-full">
                  <TrueIcon />
                </div>
              </motion.button>
            </div>
          </motion.div>
          <motion.div className="relative" variants={rightStagger}>
            <motion.div
              className="bg-primary-300 rounded-tr-[24px] max-tab:rounded-xl rounded-br-[24px] p-5 max-mobile:p-2"
              variants={fadeInUp}
              viewport={{ once: true }}
            >
              <motion.div
                className="border bg-primary-100 max-mobile:p-2 border-solid border-primary-200 rounded-2xl p-5"
                variants={fadeInUp}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center gap-2 justify-center pb-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-2"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  <AgentIcon />
                  <h2 className="text-white max-mobile:text-base text-[26px] font-extrabold">
                    AI Agent Builder
                  </h2>
                </motion.div>
                <motion.p
                  className="text-lg max-mobile:text-base max-mobile:text-left text-grey-700 max-w-[642px] mx-auto text-center mb-7 max-mobile:mb-4"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  Describe your AI agent requirements and get a comprehensive
                  blueprint with implementation details
                </motion.p>
                <div className="pb-6 max-mobile:pb-4">
                  <label className="text-lg max-mobile:text-base text-white font-semibold block pb-2.5">
                    What AI agent do you want to build?
                  </label>
                  <motion.textarea
                    placeholder="an AI agent to automate customer support... "
                    className="h-[110px] p-4 text-base placeholder:text-base placeholder:text-grey-700 text-white w-full border border-solid border-primary-500 bg-light-blue rounded-xl resize-none outline-none transition-all ease-in-out duration-300 focus:border-white"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    value={builderState.userInput}
                    onChange={(e) =>
                      setBuilderState({
                        ...builderState,
                        userInput: e.target.value,
                      })
                    }
                  ></motion.textarea>
                </div>
                <div>
                  <label className="text-lg max-mobile:text-base text-white font-semibold block pb-4">
                    Or choose from popular AI agent types.
                  </label>
                  <div className="grid grid-cols-3 gap-2.5 max-mobile:pb-4 max-mobile:grid-cols-1 pb-7 max-tab:grid-cols-2">
                    {agentTypes.map((agentType, i) => {
                      return (
                        <TiltCard
                          className="p-2.5 border border-solid border-primary-500 bg-light-blue rounded-xl cursor-pointer"
                          key={i}
                          onClick={() =>
                            setBuilderState({
                              ...builderState,
                              userInput: agentType.title,
                            })
                          }
                        >
                          <div className="grid grid-cols-[20px_1fr] pb-2 gap-1 items-center">
                            <BotIcon />
                            <h3 className="text-sm text-white font-semibold">
                              {agentType.title}
                            </h3>
                          </div>
                          <p className="text-sm text-grey-700">
                            {agentType.description}
                          </p>
                        </TiltCard>
                      );
                    })}
                  </div>
                </div>
                <div className="pb-7 max-mobile:pb-4">
                  <motion.button
                    className="bg-white text-base font-extrabold text-primary-300 p-4 max-mobile:text-sm max-mobile:p-3 flex items-center w-full justify-center gap-2 border-none cursor-pointer rounded-full disabled:opacity-50 !disabled:cursor-not-allowed"
                    {...scaleHover}
                    onClick={() => handleBuildAgent()}
                    disabled={
                      Boolean(!builderState.userInput.trim()) || loading
                    }
                  >
                    {loading ? "Building..." : "Build My Agent"}
                    <UpArrow stroke="#0B2B6B" />
                  </motion.button>
                </div>
                <motion.div
                  className="border border-solid border-primary-500 p-5 bg-light-blue rounded-xl max-mobile:p-3"
                  variants={fadeInUp}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-1.5 pb-5">
                    <StarGroupIcon />
                    <p className="text-lg max-mobile:text-sm font-semibold text-white">
                      What you'll receive instantly.
                    </p>
                  </div>
                  <motion.div
                    className="flex items-center justify-between max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3"
                    variants={leftStagger}
                  >
                    <motion.div
                      className="flex items-center gap-2"
                      variants={fadeInUp}
                      viewport={{ once: true }}
                    >
                      <TrueOutlineIcon />
                      <p className="text-white text-base max-mobile:text-sm font-medium">
                        Detailed technical blueprint
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      variants={fadeInUp}
                      viewport={{ once: true }}
                    >
                      <TrueOutlineIcon />
                      <p className="text-white text-base max-mobile:text-sm font-medium">
                        implementation roadmap
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-2"
                      variants={fadeInUp}
                      viewport={{ once: true }}
                    >
                      <TrueOutlineIcon />
                      <p className="text-white text-base max-mobile:text-sm font-medium">
                        Free consultation call
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <BuildingAnimation
          isVisible={builderState.currentStep === "building"}
          onComplete={handleBuildingComplete}
          userInput={builderState.userInput}
          project_id={project}
        />

        {/* Lead Capture Modal */}
        <LeadCaptureBlueprintModal
          isVisible={builderState.currentStep === "blueprint"}
          blueprint={builderState.generatedBlueprint || null}
          onClose={handleModalClose}
          onEmailSubmit={handleEmailSubmit}
          userInput={builderState.userInput}
        />
      </div>
    </motion.section>
  );
};
