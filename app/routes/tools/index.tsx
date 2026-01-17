import { MetaFunction } from "react-router";
import { useState } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import {
  Wrench,
  Calculator,
  Code,
  Brain,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  Search,
  Star,
  Download,
  ExternalLink,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";

const AIROICalculator = '/assets/images/AI ROI Calculator.webp'
const AIReadinessAssessment = '/assets/images/AI Readiness Assessment.webp'
const AIAgentGenerator = '/assets/images/AI Agent Generator.webp'

export const meta: MetaFunction = () => [
  { title: "AI Tools & Calculators | RejoiceHub - Free AI Resources" },
  {
    name: "description",
    content:
      "Access RejoiceHub's free AI tools, calculators, and utilities. Calculate ROI, assess AI readiness, generate code, and explore AI solutions for your business.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/tools`,
  },
];

const ToolsPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const toolCategories = [
    {
      title: "AI Calculators",
      description: "Calculate ROI, costs, and benefits of AI implementation",
      icon: <Calculator className="w-6 h-6 text-amber-600" />,
      count: "5+",
      tools: [
        {
          name: "AI ROI Calculator",
          description: "Calculate return on investment for AI projects",
          status: "Live",
          usage: "2.5k+",
        },
        {
          name: "Cost-Benefit Analyzer",
          description: "Analyze costs vs benefits of AI solutions",
          status: "Live",
          usage: "1.8k+",
        },
        {
          name: "Implementation Timeline",
          description: "Estimate AI project timelines",
          status: "Live",
          usage: "1.2k+",
        },
      ],
    },
    {
      title: "AI Assessment Tools",
      description: "Evaluate your organization's AI readiness and capabilities",
      icon: <Target className="w-6 h-6 text-amber-600" />,
      count: "3+",
      tools: [
        {
          name: "AI Readiness Assessment",
          description: "Evaluate your AI readiness level",
          status: "Live",
          usage: "3.2k+",
        },
        {
          name: "Technology Stack Analyzer",
          description: "Analyze your current tech stack",
          status: "Live",
          usage: "1.5k+",
        },
        {
          name: "Skills Gap Assessment",
          description: "Identify AI skills gaps in your team",
          status: "Coming Soon",
          usage: "0",
        },
      ],
    },
    {
      title: "Code Generators",
      description: "Generate AI code snippets and templates",
      icon: <Code className="w-6 h-6 text-amber-600" />,
      count: "8+",
      tools: [
        {
          name: "AI Agent Generator",
          description: "Generate custom AI agent code",
          status: "Live",
          usage: "4.1k+",
        },
        {
          name: "API Integration Templates",
          description: "Ready-to-use API integration code",
          status: "Live",
          usage: "2.8k+",
        },
        {
          name: "Chatbot Code Generator",
          description: "Generate chatbot implementation code",
          status: "Live",
          usage: "3.5k+",
        },
      ],
    },
    {
      title: "No-Code Tools",
      description: "Build AI solutions without coding",
      icon: <Wrench className="w-6 h-6 text-amber-600" />,
      count: "6+",
      tools: [
        {
          name: "AI Workflow Builder",
          description: "Create AI workflows visually",
          status: "Live",
          usage: "2.1k+",
        },
        {
          name: "Chatbot Builder",
          description: "Build chatbots without coding",
          status: "Live",
          usage: "3.8k+",
        },
        {
          name: "Data Pipeline Designer",
          description: "Design data processing pipelines",
          status: "Coming Soon",
          usage: "0",
        },
      ],
    },
  ];

  const featuredTools = [
    {
      name: "AI ROI Calculator",
      description:
        "Calculate the potential return on investment for your AI projects with our comprehensive calculator.",
      category: "Calculator",
      usage: "2.5k+",
      rating: 4.8,
      isNew: false,
      isPopular: true,
      link: "/ai-calculators",
      image:AIROICalculator
    },
    {
      name: "AI Agent Generator",
      description:
        "Generate custom AI agent code for your specific use case with our intelligent code generator.",
      category: "Code Generator",
      usage: "4.1k+",
      rating: 4.9,
      isNew: false,
      isPopular: true,
      link: "/services/ai-agents-services",
      image :AIAgentGenerator
    },
    {
      name: "AI Readiness Assessment",
      description:
        "Evaluate your organization's readiness for AI implementation with our comprehensive assessment tool.",
      category: "Assessment",
      usage: "3.2k+",
      rating: 4.7,
      isNew: false,
      isPopular: true,
      link: "/free-ai-assessment",
      image :AIReadinessAssessment
    },
  ];

  const toolStats = [
    {
      number: "22+",
      label: "Free Tools",
      icon: <Wrench className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "15k+",
      label: "Tool Usage",
      icon: <Users className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "4.8",
      label: "Average Rating",
      icon: <Star className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "100%",
      label: "Free Access",
      icon: <Shield className="w-6 h-6 text-amber-600" />,
    },
  ];

 const handleLeadSubmit = async (email?: string, resourceId?: string): Promise<any> => {
  try {
  
    if (!resourceId) {
      setEmailError('Resource ID is required');
      return;
    }
    
    setSelectedResource(resourceId);
    console.log('Submitting tool request from:', email, 'resource:', resourceId);
    
    if (!email) {
      setEmailError('Please enter your email address');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    setEmailError(null);
    
    const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/email-sending/newsletter-access/', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        filename:resourceId,
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to process your request. Please try again.');
    }
    
    setLeadMagnetSubmissions((prev) => ({ ...prev, [resourceId]: true }));
    setShowEmailModal(false);
    setShowSuccess(true);
    return true;
  } catch (error) {
    console.error('Error processing request:', error);
    setEmailError('Failed to process your request. Please try again or contact support.');
    throw error;
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
          Free AI Tools
        </p>
        <h1 className="text-primary text-center mb-4">
          AI Tools &<span className="text-gradient"> Calculators</span>
        </h1>
        <div className="">
          <p className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Access our comprehensive collection of free AI tools, calculators,
            and utilities to accelerate your AI transformation journey.
          </p>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2.5 h-12 focus:outline-none border-none bg-white w-full pl-10 rounded-xl"
              />
            </div>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="#featured" variant="primary" size="lg" icon="star">
              Popular Tools
            </CTAButton>
            {/* <CTAButton
              href="#categories"
              variant="secondary"
              size="lg"
              icon="filter"
            >
              Browse Categories
            </CTAButton> */}
          </div>
        </div>
      </section>

      {/* Tool Stats */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {toolStats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary text-center mb-2">
                  {stat.number}
                </div>
                <div className="text-primary text-center font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section id="featured" className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Popular Tools"
            title="Most Used AI Tools"
            subtitle="Our most popular and highly-rated tools to help you get started with AI implementation."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTools.map((tool, index) => (
              <div
                key={index}
                className="border border-solid border-primary-200 rounded-[14px] bg-primary-300 p-6"
              >
                <div className="aspect-video border border-solid border-primary-200 rounded-[10px] bg-primary-100 p-6 max-mobile:p-3 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src={tool.image} alt={tool.name} className="w-full h-full object-cover" />
                  </div>
                  {tool.isPopular && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  {tool.isNew && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full">
                        New
                      </span>
                    </div>
                  )}
                </div>

                <div className="py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 border border-solid border-primary-200 text-white bg-primary-100 p-6 text-xs font-medium rounded-full">
                      {tool.category}
                    </span>
                    <span className="text-sm text-light">
                      {tool.usage} uses
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-light text-sm mb-4">{tool.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-amber-500 fill-current" />
                      <span className="text-sm text-light">{tool.rating}</span>
                    </div>
                  </div>

                  <CTAButton
                    to={tool.link}
                    variant="primary"
                    size="md"
                    icon="arrow"
                    className="w-full bg-white text-primary"
                  >
                    Use Tool
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      {/* <section id="categories" className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Tool Categories"
            title="Browse by Category"
            subtitle="Find the right tools for your AI journey, organized by purpose and functionality."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {toolCategories.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <div>
                    <h3 className="text-xl font-bold text-navy-950">
                      {category.title}
                    </h3>
                    <p className="text-navy-700">{category.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full">
                    {category.count} tools
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-navy-900 text-sm">
                          {tool.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {tool.description}
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-xs px-2 py-1 rounded ${
                            tool.status === "Live"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {tool.status}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {tool.usage}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <CTAButton
                  to={`/${category.title.toLowerCase().replace(/\s+/g, "-")}`}
                  variant="secondary"
                  size="md"
                  icon="arrow"
                  className="w-full"
                >
                  View All {category.title}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Tool Benefits */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Why Use Our Tools"
            title="Benefits of RejoiceHub Tools"
            subtitle="Discover why thousands of businesses and developers trust our AI tools and calculators."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-amber-600" />}
              title="100% Free Access"
              description="All our tools are completely free to use, with no hidden costs or premium tiers."
              variant="highlight"
              layout="horizontal"
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-amber-600" />}
              title="Enterprise-Grade"
              description="Built with enterprise security and reliability standards for professional use."
              variant="highlight"
              layout="horizontal"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6 text-amber-600" />}
              title="Community Driven"
              description="Tools developed based on real user feedback and industry best practices."
              variant="highlight"
              layout="horizontal"
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-amber-600" />}
              title="Regular Updates"
              description="Tools are continuously updated with the latest AI technologies and methodologies."
              variant="highlight"
              layout="horizontal"
            />
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 max-mobile:py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Stay Updated"
            title="Get Tool Updates"
            subtitle="Subscribe to receive updates about new tools, features, and AI insights."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadMagnetForm
              title="Tool Updates Newsletter"
              description="Get notified about new tools, features, and improvements to existing tools."
              buttonText="Subscribe"
              placeholder="Enter your email"
              resourceId="tool-updates-newsletter"
             onSubmit={(email) => handleLeadSubmit(email, "Tool Updates Newsletter")}
              variant="default"
            />

            <LeadMagnetForm
              title="Early Access"
              description="Get early access to new tools and beta features before public release."
              buttonText="Join Beta"
              placeholder="Enter your email"
              resourceId="tool-beta-access"
             onSubmit={(email) => handleLeadSubmit(email, "Early Access")}
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Ready to Start?
          </p>

          <h2 className="heading3 text-center mb-4 text-primary">
            Start Using Our AI Tools Today
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
            Join thousands of businesses and developers who are already using
            our tools to accelerate their AI transformation journey.
          </p>

          <div className="flex pt-10 flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              to="/ai-calculators"
              variant="primary"
              size="md"
              icon="calculator"
            >
              Try AI Calculator
            </CTAButton>
            <CTAButton to="/contact" variant="secondary" size="md" icon="mail">
              Get Support
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;
