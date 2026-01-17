import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Globe,
} from "lucide-react";
import { ServiceContent } from "./ServiceLayout";
import { BuildingAnimation } from "~/components/ui/BuildingAnimation";
import { LeadCaptureBlueprintModal } from "~/components/ui/LeadCaptureBlueprintModal";
import { AgentBlueprint, AgentCategory } from "~/types/aiAgentBuilderTypes";
import { prdGenerate, sendMail } from '~/api/toolsApi';
import { useLocation } from "react-router";
import { endpoints } from "~/constant/navitem";

interface ServiceAIBuilderProps {
  serviceContent: ServiceContent;
  onSubmit?: (data: {
    userInput: string;
    email: string;
    serviceCategory: string;
  }) => Promise<void>;
}

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

export const ServiceAIBuilder: React.FC<ServiceAIBuilderProps> = ({
  serviceContent,
  onSubmit,
}) => {
  const [project, setProject] = useState<string>('');
  const [builderState, setBuilderState] = useState<ServiceBuilderState>({
    currentStep: "input",
    userInput: "",
    isGenerating: false,
    showLeadCapture: false,
  });

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

  const location = useLocation();
  const currentPath = location.pathname;
  const endpoint = endpoints.find(e => currentPath.startsWith(e.slug))?.endpoint || "";

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
            "Automated data analysis, insights generation, and reporting",
          icon: <Database className="w-4 h-4" />,
          category: "data-analysis",
          estimatedTime: "3-4 weeks",
          complexity: "Advanced",
        },
        {
          id: "content-generation-agent",
          label: "Content Generation Agent",
          description:
            "AI-powered content creation for blogs, social media, and marketing",
          icon: <FileText className="w-4 h-4" />,
          category: "content-generation",
          estimatedTime: "2-3 weeks",
          complexity: "Intermediate",
        },
      ],
      "generative-ai-development-services": [
        {
          id: "custom-gpt-model",
          label: "Custom GPT Model",
          description:
            "Fine-tuned GPT model for your specific domain and use case",
          icon: <Brain className="w-4 h-4" />,
          category: "nlp",
          estimatedTime: "4-6 weeks",
          complexity: "Advanced",
        },
        {
          id: "image-generation-api",
          label: "Image Generation API",
          description:
            "DALL-E style image generation integrated into your applications",
          icon: <Sparkles className="w-4 h-4" />,
          category: "computer-vision",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "voice-synthesis-service",
          label: "Voice Synthesis Service",
          description:
            "Text-to-speech and voice cloning for personalized audio content",
          icon: <Bot className="w-4 h-4" />,
          category: "audio",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
      ],
      "web-development-services": [
        {
          id: "ecommerce-platform",
          label: "E-commerce Platform",
          description:
            "Full-featured online store with payment processing and inventory management",
          icon: <Target className="w-4 h-4" />,
          category: "ecommerce",
          estimatedTime: "6-8 weeks",
          complexity: "Advanced",
        },
        {
          id: "saas-application",
          label: "SaaS Application",
          description:
            "Scalable software-as-a-service platform with user management",
          icon: <Settings className="w-4 h-4" />,
          category: "saas",
          estimatedTime: "8-10 weeks",
          complexity: "Advanced",
        },
        {
          id: "corporate-website",
          label: "Corporate Website",
          description:
            "Professional website with CMS, blog, and contact forms",
          icon: <Globe className="w-4 h-4" />,
          category: "corporate",
          estimatedTime: "4-6 weeks",
          complexity: "Intermediate",
        },
      ],
      "mobile-app-development-services": [
        {
          id: "ios-app",
          label: "iOS Mobile App",
          description:
            "Native iOS application with modern UI/UX design",
          icon: <Bot className="w-4 h-4" />,
          category: "ios",
          estimatedTime: "8-10 weeks",
          complexity: "Advanced",
        },
        {
          id: "android-app",
          label: "Android Mobile App",
          description:
            "Native Android application with material design",
          icon: <Bot className="w-4 h-4" />,
          category: "android",
          estimatedTime: "8-10 weeks",
          complexity: "Advanced",
        },
        {
          id: "cross-platform-app",
          label: "Cross-Platform App",
          description:
            "React Native or Flutter app for both iOS and Android",
          icon: <Bot className="w-4 h-4" />,
          category: "cross-platform",
          estimatedTime: "6-8 weeks",
          complexity: "Intermediate",
        },
      ],
      "ui-ux-design-services": [
        {
          id: "web-design-system",
          label: "Web Design System",
          description:
            "Comprehensive design system for web applications",
          icon: <Sparkles className="w-4 h-4" />,
          category: "design-system",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
        {
          id: "mobile-app-design",
          label: "Mobile App Design",
          description:
            "User-centered design for mobile applications",
          icon: <Bot className="w-4 h-4" />,
          category: "mobile-design",
          estimatedTime: "4-5 weeks",
          complexity: "Intermediate",
        },
        {
          id: "dashboard-design",
          label: "Dashboard Design",
          description:
            "Data visualization and admin dashboard design",
          icon: <Target className="w-4 h-4" />,
          category: "dashboard",
          estimatedTime: "3-4 weeks",
          complexity: "Intermediate",
        },
      ],
      "devops-consulting-services": [
        {
          id: "ci-cd-pipeline",
          label: "CI/CD Pipeline",
          description:
            "Automated deployment pipeline with testing and monitoring",
          icon: <Settings className="w-4 h-4" />,
          category: "ci-cd",
          estimatedTime: "2-3 weeks",
          complexity: "Intermediate",
        },
        {
          id: "cloud-infrastructure",
          label: "Cloud Infrastructure",
          description:
            "Scalable cloud architecture with auto-scaling and monitoring",
          icon: <Database className="w-4 h-4" />,
          category: "cloud",
          estimatedTime: "3-4 weeks",
          complexity: "Advanced",
        },
        {
          id: "microservices-architecture",
          label: "Microservices Architecture",
          description:
            "Distributed system design with service mesh and orchestration",
          icon: <Code className="w-4 h-4" />,
          category: "microservices",
          estimatedTime: "4-6 weeks",
          complexity: "Advanced",
        },
      ],
    };

    return serviceTemplates[serviceId] || [];
  };

  const serviceTemplates = getServiceTemplates();

  const placeholderSuggestions = [
    "I want to build an AI-powered customer service chatbot that can handle inquiries 24/7",
    "Create a custom GPT model trained on our company's knowledge base",
    "Build a mobile app for inventory management with barcode scanning",
    "Develop a web application for project management and team collaboration",
    "Design a modern e-commerce website with payment integration",
    "Create a data visualization dashboard for business analytics",
    "Build a voice-activated assistant for smart home automation",
    "Develop a recommendation system for personalized content delivery",
  ];

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

  const generateBlueprintFromResponse = (response: any): AgentBlueprint => {
    const blueprintId = `blueprint-${Date.now()}`;
    const category: AgentCategory = "custom";

    return {
      id: blueprintId,
      title: response.attributes?.project_title || `${serviceContent.title} - Custom Solution`,
      category,
      description: response.attributes?.small_description || builderState.userInput,
      components: response.attributes.components_count,
      estimatedDevelopmentTime: response.attributes?.development_time || "3-4 Months",
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

  const handleBuildSolution = async () => {
    if (!builderState.userInput.trim() || builderState.isGenerating) return;
  
    setBuilderState((prev) => ({
      ...prev,
      isGenerating: true,
      error: undefined,
    }));
  
    try {
      const response = await prdGenerate({
        project_description: builderState.userInput,
        url: endpoint // This will be the endpoint based on the current URL
      });
      
      if(response.success && response.plan && response.attributes){
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
    }
  };

  const generateServiceBlueprint = (
    input: string,
    template?: ServiceTemplate
  ): any => {
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
      if (onSubmit) {
        await sendMail({
          email,
          project_id: project,
        });
      }

  
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
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full"
      >
        <div className="">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="flex items-center gap-3 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-2">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-10 h-10 bg-gradient-to-r from-accent-400 to-warning-400 rounded-full flex items-center justify-center"
              >
                <Brain className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl max-mobile:text-base sm:text-2xl font-bold text-white">
                {serviceContent.title} Builder
              </h3>
            </div>
          </div>

          <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg px-4 max-mobile:px-0">
            Describe your specific {serviceContent.serviceId.replace(/-/g, " ")}{" "}
            requirements and get a detailed implementation blueprint
          </p>

          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <label
                htmlFor="service-input"
                className="block text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-left"
              >
                What do you want to build?
              </label>
              <div className="relative">
                <textarea
                  id="service-input"
                  value={builderState.userInput}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder={placeholderSuggestions[currentPlaceholder]}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl sm:rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none transition-all duration-300 text-sm sm:text-base"
                  style={{ minHeight: "100px" }}
                  rows={4}
                  disabled={builderState.isGenerating}
                />
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex items-center gap-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-accent-400 rounded-full"
                  />
                  <span className="text-xs text-gray-300 hidden sm:inline">
                    AI-powered
                  </span>
                </div>
              </div>
            </div>

            {builderState.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-500/20 border border-red-500/30 rounded-xl p-4"
              >
                <p className="text-red-300 text-sm">{builderState.error}</p>
              </motion.div>
            )}

            <div>
              <p className="text-gray-300 mb-3 sm:mb-4 text-sm text-left">
                Or choose from popular{" "}
                {serviceContent.serviceId.replace(/-/g, " ")} solutions:
              </p>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {serviceTemplates.map((template) => (
                  <motion.button
                    key={template.id}
                    type="button"
                    onClick={() => handleTemplateSelect(template)}
                    disabled={builderState.isGenerating}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 sm:p-4 bg-white/10 backdrop-blur-sm border cursor-pointer border-white/20 rounded-lg sm:rounded-xl text-white hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm text-left group disabled:opacity-50 disabled:cursor-not-allowed ${builderState.selectedTemplate?.id === template.id
                        ? "bg-accent-500/30 border-accent-400"
                        : ""
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {template.icon}
                        <span className="font-medium">{template.label}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="bg-white/20 px-2 py-1 rounded">
                          {template.complexity}
                        </span>
                        <span className="text-gray-300">
                          {template.estimatedTime}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-300 group-hover:text-white transition-colors">
                      {template.description}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.button
              type="button"
              onClick={handleBuildSolution}
              disabled={
                builderState.isGenerating || !builderState.userInput.trim()
              }
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-base max-mobile:text-sm max-mobile:p-3 font-extrabold text-primary-300 p-4 flex items-center w-full justify-center gap-2 border-none cursor-pointer rounded-full"
            >
              {builderState.isGenerating ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Building Your Solution...</span>
                </>
              ) : (
                <>
                  <Zap className="w-5 sm:w-6 h-5 sm:h-6" />
                  <span>Build My Solution</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>

            {/* What You'll Get Section */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-accent-400" />
                What you'll receive instantly:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: FileText, text: "Detailed technical blueprint" },
                  { icon: Code, text: "Implementation roadmap" },
                  { icon: Lightbulb, text: "Technology recommendations" },
                  { icon: Download, text: "Free consultation call" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 text-white text-xs sm:text-sm"
                    >
                      <Icon className="w-3 sm:w-4 h-3 sm:h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Building Animation */}
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
    </>
  );
};

export default ServiceAIBuilder;