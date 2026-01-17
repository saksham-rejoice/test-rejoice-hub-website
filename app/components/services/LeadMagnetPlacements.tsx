import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { LeadMagnetBlock, LeadMagnet } from "./LeadMagnetBlock";
import { trackLeadMagnetEvent } from "~/api/aiAgentLeadApi";
import LeadMagnetCard from "~/components/ui/LeadMagnetCard";
import {
  Calculator,
  ClipboardCheck,
  FileText,
  Palette,
  Search,
  Smartphone,
  Globe,
  Settings,
  Code,
  Target,
  Users,
  TrendingUp,
  Shield,
  Award,
  Lightbulb,
  Phone,
  Calendar,
  Download,
  BookOpen,
  BarChart3,
  Zap,
} from "lucide-react";
import CTAButton from "../ui/CTAButton";

interface LeadMagnetPlacementsProps {
  serviceId: string;
  leadMagnets: LeadMagnet[];
  enabledPlacements?: ("inline" | "sticky" | "exit-intent")[];
}

export const LeadMagnetPlacements: React.FC<LeadMagnetPlacementsProps> = ({
  serviceId,
  leadMagnets,
  enabledPlacements = ["inline", "sticky", "exit-intent"],
}) => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(false);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  // Get lead magnets for different placements
  const inlineMagnets = leadMagnets.filter(
    (m) => m.type === "ebook" || m.type === "tool" || m.type === "template"
  );
  const stickyMagnet =
    leadMagnets.find(
      (m) => m.type === "calculator" || m.type === "assessment"
    ) || leadMagnets[0];
  const exitIntentMagnet =
    leadMagnets.find((m) => m.type === "ebook" || m.type === "tool") ||
    leadMagnets[0];

  // Track time on page
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeOnPage((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Track scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const percentage = Math.round((scrollTop / scrollHeight) * 100);
      setScrollPercentage(percentage);

      // Show sticky after 20% scroll
      if (percentage > 20 && enabledPlacements.includes("sticky")) {
        setStickyVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabledPlacements]);

  // Exit intent detection
  useEffect(() => {
    if (!enabledPlacements.includes("exit-intent") || exitIntentShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && timeOnPage >= 30 && scrollPercentage >= 50) {
        setShowExitIntent(true);
        setExitIntentShown(true);
        trackLeadMagnetEvent("exit_intent_triggered", {
          serviceId,
          timeOnPage,
          scrollPercentage,
          magnetId: exitIntentMagnet?.id,
        });
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [
    timeOnPage,
    scrollPercentage,
    exitIntentShown,
    serviceId,
    exitIntentMagnet,
    enabledPlacements,
  ]);

  const handleExitIntentClose = () => {
    setShowExitIntent(false);
  };

  const handleStickyClose = () => {
    setStickyVisible(false);
    trackLeadMagnetEvent("sticky_closed", {
      serviceId,
      magnetId: stickyMagnet?.id,
    });
  };

  return (
    <>
      {/* Inline Lead Magnet Block */}
      {enabledPlacements.includes("inline") && inlineMagnets.length > 0 && (
        <LeadMagnetBlock
          leadMagnets={inlineMagnets}
          title="Accelerate Your AI Implementation"
          subtitle="Get expert resources and tools to fast-track your AI journey with proven frameworks and strategies."
          badge="🎁 Free Expert Resources"
          placement="inline"
          variant="default"
          showTabs={inlineMagnets.length > 3}
        />
      )}

      {/* Sticky Sidebar Lead Magnet */}
      <AnimatePresence>
        {enabledPlacements.includes("sticky") &&
          stickyVisible &&
          stickyMagnet && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40 max-w-sm"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 relative">
                <button
                  onClick={handleStickyClose}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-100 to-warning-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-accent-600 uppercase tracking-wide">
                      Free Resource
                    </div>
                    <div className="text-sm font-bold text-navy-950">
                      Quick Access
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-bold text-navy-950 mb-2 leading-tight">
                  {stickyMagnet.title}
                </h3>

                <p className="text-sm text-navy-700 mb-4 leading-relaxed">
                  {stickyMagnet.description.slice(0, 80)}...
                </p>

                <div className="flex items-center justify-between mb-4">
                  <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {stickyMagnet.value}
                  </span>
                  <span className="text-xs text-gray-500">
                    {stickyMagnet.estimatedTime}
                  </span>
                </div>

                <LeadMagnetBlock
                  leadMagnets={[stickyMagnet]}
                  placement="modal"
                  variant="compact"
                  showTabs={false}
                />
              </div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* Exit Intent Modal */}
      <AnimatePresence>
        {enabledPlacements.includes("exit-intent") &&
          showExitIntent &&
          exitIntentMagnet && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
              onClick={handleExitIntentClose}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleExitIntentClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-to-br from-accent-100 to-warning-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <Download className="w-8 h-8 text-accent-600" />
                  </motion.div>

                  <h2 className="text-2xl font-bold text-navy-950 mb-3">
                    Wait! Don't Leave Empty-Handed
                  </h2>

                  <p className="text-lg text-navy-700 mb-6">
                    Get our <strong>{exitIntentMagnet.title}</strong> before you
                    go - it's completely free and will help you get started
                    immediately.
                  </p>

                  <div className="bg-gradient-to-r from-accent-50 to-warning-50 rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-bold text-navy-950 mb-3">
                      What You'll Get:
                    </h3>
                    <ul className="space-y-2 text-left">
                      {exitIntentMagnet.features
                        .slice(0, 4)
                        .map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-xs font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-navy-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-4 mb-4">
                    <span className="bg-accent-500 text-white font-bold px-4 py-2 rounded-full">
                      {exitIntentMagnet.value}
                    </span>
                    <span className="text-accent-600 font-semibold">
                      Yours FREE in {exitIntentMagnet.estimatedTime}
                    </span>
                  </div>

                  <LeadMagnetBlock
                    leadMagnets={[exitIntentMagnet]}
                    placement="modal"
                    variant="compact"
                    showTabs={false}
                  />

                  <p className="text-xs text-gray-500 mt-4">
                    Join 10,000+ professionals already using our resources • No
                    spam, unsubscribe anytime
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
};

// Helper component for service-specific lead magnet integration
interface ServiceLeadMagnetsProps {
  serviceId: string;
  onSubmit: (email: string, resourceId: string) => void;
  className?: string;
}

export const ServiceLeadMagnets: React.FC<ServiceLeadMagnetsProps> = ({
  serviceId,
  onSubmit,
  className = "",
}) => {
  // Define lead magnets for each service
  const serviceLeadMagnets: {
    [key: string]: Array<{
      title: string;
      description: string;
      value: string;
      icon: React.ReactNode;
      features: string[];
      resourceId: string;
    }>;
  } = {
    "ai-agents-services": [
      {
        title: "AI Automation ROI Calculator",
        description:
          "Calculate your potential AI investment returns and implementation timeline with our industry-specific tool.",
        value: "$2,500 Value",
        icon: <Calculator className="w-6 h-6 text-white" />,
        features: [
          "Industry-specific calculations",
          "ROI projections",
          "Implementation timeline",
        ],
        resourceId: "ai-roi-calculator",
      },
      {
        title: "AI Readiness Assessment",
        description:
          "Get a personalized AI readiness score and custom implementation roadmap for your organization.",
        value: "$1,500 Value",
        icon: <ClipboardCheck className="w-6 h-6 text-white" />,
        features: [
          "20-question evaluation",
          "Personalized scoring",
          "Custom roadmap",
        ],
        resourceId: "ai-readiness-assessment",
      },
      {
        title: "AI Implementation Guide",
        description:
          "Comprehensive playbook with best practices, case studies, and step-by-step implementation strategies.",
        value: "$1,200 Value",
        icon: <FileText className="w-6 h-6 text-white" />,
        features: ["50+ pages", "Case studies", "Best practices"],
        resourceId: "ai-implementation-guide",
      },
    ],
    "generative-ai-development-services": [
      {
        title: "AI Content Strategy Guide",
        description:
          "Learn how to leverage generative AI for content creation, marketing, and customer engagement.",
        value: "$1,800 Value",
        icon: <BookOpen className="w-6 h-6 text-white" />,
        features: [
          "Content strategy framework",
          "AI tool recommendations",
          "Implementation tips",
        ],
        resourceId: "ai-content-strategy",
      },
      {
        title: "Generative AI Use Cases",
        description:
          "Discover 50+ practical use cases for generative AI across different industries and business functions.",
        value: "$1,200 Value",
        icon: <Lightbulb className="w-6 h-6 text-white" />,
        features: [
          "Industry-specific examples",
          "ROI calculations",
          "Implementation roadmap",
        ],
        resourceId: "ai-use-cases",
      },
    ],
    "mobile-app-development-services": [
      {
        title: "Mobile App Development Guide",
        description:
          "Complete guide to mobile app development including planning, design, development, and launch strategies.",
        value: "$2,000 Value",
        icon: <Smartphone className="w-6 h-6 text-white" />,
        features: [
          "Development roadmap",
          "Technology selection",
          "Launch checklist",
        ],
        resourceId: "mobile-app-guide",
      },
      {
        title: "App Store Optimization Guide",
        description:
          "Learn how to optimize your app for better visibility and downloads in app stores.",
        value: "$1,500 Value",
        icon: <TrendingUp className="w-6 h-6 text-white" />,
        features: [
          "ASO strategies",
          "Keyword optimization",
          "Performance tracking",
        ],
        resourceId: "app-store-optimization",
      },
    ],
    "iot-development-services": [
      {
        title: "IOT Implementation Roadmap",
        description:
          "Step-by-step guide to implementing IOT solutions in your business operations.",
        value: "$2,200 Value",
        icon: <Globe className="w-6 h-6 text-white" />,
        features: [
          "Technology selection",
          "Implementation phases",
          "ROI analysis",
        ],
        resourceId: "iot-roadmap",
      },
      {
        title: "IOT Security Best Practices",
        description:
          "Essential security guidelines for IOT implementations to protect your data and systems.",
        value: "$1,800 Value",
        icon: <Shield className="w-6 h-6 text-white" />,
        features: [
          "Security protocols",
          "Risk assessment",
          "Compliance guidelines",
        ],
        resourceId: "iot-security",
      },
    ],
    "devops-consulting-services": [
      {
        title: "DevOps Maturity Assessment",
        description:
          "Evaluate your current DevOps practices and get a roadmap for improvement.",
        value: "$1,800 Value",
        icon: <Settings className="w-6 h-6 text-white" />,
        features: ["Maturity evaluation", "Gap analysis", "Improvement plan"],
        resourceId: "devops-assessment",
      },
      {
        title: "CI/CD Pipeline Guide",
        description:
          "Complete guide to building and optimizing continuous integration and deployment pipelines.",
        value: "$1,500 Value",
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        features: ["Pipeline design", "Tool selection", "Best practices"],
        resourceId: "cicd-guide",
      },
    ],
    "open-source-consulting": [
      {
        title: "Open Source Cost Calculator",
        description:
          "Calculate the true cost of open source solutions including implementation, maintenance, and support.",
        value: "$1,500 Value",
        icon: <Calculator className="w-6 h-6 text-white" />,
        features: [
          "Cost analysis",
          "ROI comparison",
          "Implementation planning",
        ],
        resourceId: "open-source-calculator",
      },
      {
        title: "Open Source Security Checklist",
        description:
          "Essential security considerations when implementing open source solutions.",
        value: "$1,200 Value",
        icon: <Shield className="w-6 h-6 text-white" />,
        features: [
          "Security audit",
          "Vulnerability assessment",
          "Compliance check",
        ],
        resourceId: "open-source-security",
      },
    ],
    "ui-ux-design-services": [
      {
        title: "UX Audit Checklist",
        description:
          "Comprehensive checklist to evaluate and improve your website or app user experience.",
        value: "$1,800 Value",
        icon: <Users className="w-6 h-6 text-white" />,
        features: [
          "UX evaluation",
          "Usability testing",
          "Improvement recommendations",
        ],
        resourceId: "ux-audit-checklist",
      },
      {
        title: "Design System Guide",
        description:
          "Learn how to create and maintain a scalable design system for consistent user experiences.",
        value: "$2,000 Value",
        icon: <Palette className="w-6 h-6 text-white" />,
        features: ["Design tokens", "Component library", "Documentation"],
        resourceId: "design-system-guide",
      },
    ],
    "digital-marketing-services": [
      {
        title: "Digital Marketing Audit",
        description:
          "Comprehensive audit of your current digital marketing efforts with actionable recommendations.",
        value: "$2,500 Value",
        icon: <Target className="w-6 h-6 text-white" />,
        features: [
          "Performance analysis",
          "Gap identification",
          "Strategy recommendations",
        ],
        resourceId: "marketing-audit",
      },
      {
        title: "Marketing ROI Calculator",
        description:
          "Calculate the return on investment for different digital marketing channels and campaigns.",
        value: "$1,500 Value",
        icon: <Calculator className="w-6 h-6 text-white" />,
        features: [
          "Channel analysis",
          "ROI calculations",
          "Budget optimization",
        ],
        resourceId: "marketing-roi-calculator",
      },
    ],
    "brand-design": [
      {
        title: "Brand Strategy Template",
        description:
          "Complete brand strategy framework to define your brand identity, values, and positioning.",
        value: "$2,000 Value",
        icon: <Palette className="w-6 h-6 text-white" />,
        features: [
          "Brand positioning",
          "Value proposition",
          "Visual identity guide",
        ],
        resourceId: "brand-strategy-template",
      },
      {
        title: "Logo Design Guide",
        description:
          "Essential guide to creating effective logos that build brand recognition and trust.",
        value: "$1,500 Value",
        icon: <Download className="w-6 h-6 text-white" />,
        features: ["Design principles", "Color psychology", "File formats"],
        resourceId: "logo-design-guide",
      },
    ],
    "user-research": [
      {
        title: "User Research Framework",
        description:
          "Comprehensive framework for conducting effective user research and gathering actionable insights.",
        value: "$2,200 Value",
        icon: <Search className="w-6 h-6 text-white" />,
        features: [
          "Research methods",
          "Data collection",
          "Analysis techniques",
        ],
        resourceId: "research-framework",
      },
      {
        title: "Usability Testing Guide",
        description:
          "Step-by-step guide to conducting usability tests and gathering user feedback effectively.",
        value: "$1,800 Value",
        icon: <Users className="w-6 h-6 text-white" />,
        features: [
          "Test planning",
          "Participant recruitment",
          "Result analysis",
        ],
        resourceId: "usability-testing-guide",
      },
    ],
    "digital-transformation": [
      {
        title: "Digital Transformation Guide",
        description:
          "Comprehensive guide to digital transformation including strategy, implementation, and change management.",
        value: "$3,000 Value",
        icon: <Zap className="w-6 h-6 text-white" />,
        features: [
          "Transformation framework",
          "Implementation roadmap",
          "ROI calculator",
        ],
        resourceId: "transformation-guide",
      },
      {
        title: "Digital Maturity Assessment",
        description:
          "Evaluate your current digital maturity and get a personalized transformation roadmap.",
        value: "$2,500 Value",
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        features: [
          "Maturity evaluation",
          "Gap analysis",
          "Strategy recommendations",
        ],
        resourceId: "digital-assessment",
      },
    ],
    "ai-integration": [
      {
        title: "AI Integration Guide",
        description:
          "Comprehensive guide to integrating AI capabilities into existing systems and workflows.",
        value: "$2,800 Value",
        icon: <Settings className="w-6 h-6 text-white" />,
        features: [
          "Integration strategies",
          "System compatibility",
          "Implementation roadmap",
        ],
        resourceId: "integration-guide",
      },
      {
        title: "AI Integration Assessment",
        description:
          "Evaluate your current systems and get a personalized AI integration roadmap.",
        value: "$2,200 Value",
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        features: [
          "System evaluation",
          "Integration planning",
          "Risk assessment",
        ],
        resourceId: "ai-assessment",
      },
    ],
    "ai-strategy-consulting": [
      {
        title: "AI Strategy Guide",
        description:
          "Comprehensive guide to developing AI strategies that align with business goals.",
        value: "$3,500 Value",
        icon: <Target className="w-6 h-6 text-white" />,
        features: [
          "Strategy framework",
          "ROI planning",
          "Implementation roadmap",
        ],
        resourceId: "strategy-guide",
      },
      {
        title: "AI Strategy Assessment",
        description:
          "Evaluate your AI readiness and get a personalized strategy roadmap.",
        value: "$2,800 Value",
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        features: [
          "AI readiness assessment",
          "Strategy planning",
          "ROI framework",
        ],
        resourceId: "ai-assessment",
      },
    ],
    "api-development": [
      {
        title: "API Development Guide",
        description:
          "Comprehensive guide to building robust, scalable APIs for your applications.",
        value: "$2,500 Value",
        icon: <Code className="w-6 h-6 text-white" />,
        features: [
          "API design patterns",
          "Security best practices",
          "Performance optimization",
        ],
        resourceId: "api-guide",
      },
      {
        title: "API Integration Guide",
        description:
          "Guide to integrating APIs with existing systems and third-party services.",
        value: "$2,000 Value",
        icon: <Settings className="w-6 h-6 text-white" />,
        features: [
          "Integration strategies",
          "Authentication methods",
          "Error handling",
        ],
        resourceId: "integration-guide",
      },
    ],
  };

  const leadMagnets = serviceLeadMagnets[serviceId] || [];

  if (leadMagnets.length === 0) {
    return null;
  }

  return (
    <section className={`py-20 max-mobile:py-12 blue-line-bg ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-base block text-center pb-4 font-medium text-white max-mobile:pb-2 max-mobile:text-sm">
            Free Resources
          </p>
          <h2 className="heading3 text-center mb-4 text-white">
            Accelerate Your Success
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-white max-mobile:text-base">
            Get instant access to our premium tools and guides designed by
            experts for business leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 max-mobile:gap-5">
          {leadMagnets.map((magnet, index) => (
            <LeadMagnetCard
              key={index}
              title={magnet.title}
              description={magnet.description}
              value={magnet.value}
              icon={magnet.icon}
              features={magnet.features}
              resourceId={magnet.resourceId}
              onSubmit={onSubmit}
            />
          ))}
        </div>

        <div className="text-center mt-12  max-mobile:mt-6">
          <p className="text-gray-400 text-sm mb-4">
            Need personalized guidance? Schedule a free consultation with our
            experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/dipak-rejoicehub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CTAButton variant="primary" size="lg" icon="calendar">
                <Calendar className="w-4 h-4" />
                Book Free Consultation
              </CTAButton>
            </a>
            <a href="tel:+919825122840">
              <CTAButton variant="secondary" size="lg" icon="external">
                <Phone className="w-4 h-4" />
                Call: +91 98251 22840
              </CTAButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
