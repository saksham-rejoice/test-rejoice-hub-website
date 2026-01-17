import { MetaFunction } from "react-router";
import { useState } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import Breadcrumb from "~/components/ui/Breadcrumb";
import {
  BookOpen,
  Code,
  FileText,
  Download,
  Search,
  Users,
  Zap,
  Globe,
  Database,
  Shield,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Documentation & Technical Guides | RejoiceHub" },
  {
    name: "description",
    content:
      "Comprehensive technical documentation, API guides, and developer resources for RejoiceHub's AI platforms and solutions.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/docs`,
  },
];

const DocsPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const docCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and tutorials for new users",
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      guides: [
        {
          title: "Quick Start Guide",
          description: "Get up and running in 5 minutes",
          difficulty: "Beginner",
          time: "5 min",
        },
        {
          title: "Installation Guide",
          description: "Step-by-step installation instructions",
          difficulty: "Beginner",
          time: "10 min",
        },
        {
          title: "First AI Agent",
          description: "Create your first AI agent",
          difficulty: "Beginner",
          time: "15 min",
        },
      ],
    },
    {
      title: "API Reference",
      description: "Complete API documentation and endpoints",
      icon: <Code className="w-6 h-6 text-amber-600" />,
      guides: [
        {
          title: "Authentication",
          description: "API keys and authentication methods",
          difficulty: "Intermediate",
          time: "10 min",
        },
        {
          title: "REST API",
          description: "Complete REST API reference",
          difficulty: "Advanced",
          time: "30 min",
        },
        {
          title: "Webhooks",
          description: "Set up and manage webhooks",
          difficulty: "Intermediate",
          time: "20 min",
        },
      ],
    },
    {
      title: "AI Agents",
      description: "Comprehensive guides for AI agent development",
      icon: <Users className="w-6 h-6 text-amber-600" />,
      guides: [
        {
          title: "Agent Architecture",
          description: "Understanding agent structure and components",
          difficulty: "Intermediate",
          time: "25 min",
        },
        {
          title: "Custom Agents",
          description: "Build custom AI agents from scratch",
          difficulty: "Advanced",
          time: "45 min",
        },
        {
          title: "Agent Deployment",
          description: "Deploy agents to production",
          difficulty: "Advanced",
          time: "30 min",
        },
      ],
    },
    {
      title: "Integrations",
      description: "Connect with third-party services and platforms",
      icon: <Globe className="w-6 h-6 text-amber-600" />,
      guides: [
        {
          title: "CRM Integration",
          description: "Integrate with popular CRM systems",
          difficulty: "Intermediate",
          time: "20 min",
        },
        {
          title: "Database Setup",
          description: "Configure databases for your agents",
          difficulty: "Intermediate",
          time: "25 min",
        },
        {
          title: "Cloud Services",
          description: "Deploy on AWS, Azure, and Google Cloud",
          difficulty: "Advanced",
          time: "40 min",
        },
      ],
    },
  ];

  const popularGuides = [
    {
      title: "AI Agent Best Practices",
      description: "Learn the best practices for building effective AI agents",
      category: "AI Agents",
      difficulty: "Intermediate",
      time: "30 min",
      views: "2.5k",
    },
    {
      title: "API Rate Limiting",
      description: "Understanding and managing API rate limits",
      category: "API Reference",
      difficulty: "Intermediate",
      time: "15 min",
      views: "1.8k",
    },
    {
      title: "Security Guidelines",
      description: "Security best practices for AI applications",
      category: "Getting Started",
      difficulty: "Beginner",
      time: "20 min",
      views: "1.2k",
    },
  ];

  const developerResources = [
    {
      title: "SDK Downloads",
      description: "Official SDKs for popular programming languages",
      icon: <Download className="w-6 h-6 text-amber-600" />,
      items: [
        { name: "Python SDK", version: "v2.1.0", downloads: "15k+" },
        { name: "JavaScript SDK", version: "v1.8.2", downloads: "12k+" },
        { name: "Java SDK", version: "v1.5.1", downloads: "8k+" },
      ],
    },
    {
      title: "Code Examples",
      description: "Ready-to-use code examples and templates",
      icon: <Code className="w-6 h-6 text-amber-600" />,
      items: [
        {
          name: "Basic Agent Template",
          language: "Python",
          complexity: "Beginner",
        },
        {
          name: "CRM Integration",
          language: "JavaScript",
          complexity: "Intermediate",
        },
        {
          name: "Advanced Analytics",
          language: "Python",
          complexity: "Advanced",
        },
      ],
    },
    {
      title: "Community Resources",
      description: "Community-contributed resources and tutorials",
      icon: <Users className="w-6 h-6 text-amber-600" />,
      items: [
        { name: "GitHub Repository", type: "Open Source", stars: "500+" },
        { name: "Community Forum", type: "Discussion", members: "2k+" },
        { name: "Video Tutorials", type: "Learning", videos: "50+" },
      ],
    },
  ];

const handleLeadSubmit = async (email?: string, resourceId?: string):Promise<any> => {
    try {
        if (!resourceId) {
        return;
      }
      setSelectedResource(resourceId);
      console.log('Submitting developer resource request from:', email, 'resource:', resourceId);
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

  const filteredCategories = docCategories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className=" max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: "Resources", href: "/resources" },
                { label: "Documentation", href: "/docs" },
              ]}
              className="text-white/80"
            />
          </div>

          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Technical Documentation
          </div>

          <h1 className="text-primary text-center mb-4">
            Developer
            <span className="text-gradient"> Documentation</span>
          </h1>

          <p className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Comprehensive guides, API references, and technical resources to
            help you build powerful AI solutions with RejoiceHub.
          </p>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 z-[9] top-1/2 transform -translate-y-1/2 text-primary w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white backdrop-blur-sm border border-white/20 rounded-xl text-primary placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div> */}

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="#getting-started"
              variant="primary"
              size="md"
              icon="book"
            >
              Get Started
            </CTAButton>
            <CTAButton
              href="#api-reference"
              variant="secondary"
              size="md"
              icon="code"
            >
              API Reference
            </CTAButton>
          </div> */}
        </div>
      </section>

      {/* Popular Guides */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Popular Guides"
            title="Most Viewed Documentation"
            subtitle="Start with these popular guides to get up to speed quickly."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {popularGuides.map((guide, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                    {guide.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {guide.views} views
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-950 mb-2">
                  {guide.title}
                </h3>
                <p className="text-navy-700 text-sm mb-4">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{guide.difficulty}</span>
                    <span>•</span>
                    <span>{guide.time}</span>
                  </div>
                  <CTAButton
                    href="#"
                    variant="secondary"
                    size="sm"
                    icon="arrow"
                  >
                    Read
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section
        id="getting-started"
        className="py-20 max-mobile:py-12 bg-blue-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Documentation"
            title="Browse by Category"
            subtitle="Find the documentation you need organized by topic and difficulty level."
          />

          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-primary-300 p-3 rounded-xl ">
                <div className="flex items-center gap-4 mb-6">
                  {category.icon}
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-light">{category.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {category.guides.map((guide, guideIndex) => (
                    <div
                      key={guideIndex}
                      className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3"
                    >
                      <h4 className="font-semibold text-white mb-2">
                        {guide.title}
                      </h4>
                      <p className="text-light text-sm mb-3">
                        {guide.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-white">
                        <span className="px-2 py-1 bg-primary-300 rounded">
                          {guide.difficulty}
                        </span>
                        <span>{guide.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Developer Tools"
            title="Resources for Developers"
            subtitle="SDKs, code examples, and community resources to accelerate your development."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {developerResources.map((resource, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  {resource.icon}
                  <h3 className="text-lg font-bold text-navy-950">
                    {resource.title}
                  </h3>
                </div>

                <p className="text-navy-700 text-sm mb-6">
                  {resource.description}
                </p>

                <div className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between p-3 bg-white rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-navy-900">
                          {item.name}
                        </div>
                        {'version' in item && (
                          <div className="text-sm text-gray-500">
                            v{item.version}
                          </div>
                        )}
                        {'language' in item && (
                          <div className="text-sm text-gray-500">
                            {item.language}
                          </div>
                        )}
                        {'type' in item && (
                          <div className="text-sm text-gray-500">
                            {item.type}
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        {'downloads' in item && (
                          <div className="text-sm text-gray-500">
                            {item.downloads}
                          </div>
                        )}
                        {'complexity' in item && (
                          <div className="text-sm text-gray-500">
                            {item.complexity}
                          </div>
                        )}
                        {'stars' in item && (
                          <div className="text-sm text-gray-500">
                            ⭐ {item.stars}
                          </div>
                        )}
                        {'members' in item && (
                          <div className="text-sm text-gray-500">
                            {item.members}
                          </div>
                        )}
                        {'videos' in item && (
                          <div className="text-sm text-gray-500">
                            {item.videos}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Stay Updated"
            title="Get Developer Updates"
            subtitle="Receive the latest documentation updates, API changes, and developer news."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <LeadMagnetForm
              title="Developer Newsletter"
              description="Weekly updates on new features, API changes, and developer resources."
              buttonText="Subscribe"
              placeholder="Enter your email"
              resourceId="developer-newsletter"
              onSubmit={(email) => handleLeadSubmit(email, "Developer Newsletter")}
              variant="default"
            />

            <LeadMagnetForm
              title="API Early Access"
              description="Get early access to new APIs and beta features before public release."
              buttonText="Join Beta"
              placeholder="Enter your email"
              resourceId="api-beta"
              onSubmit={(email) => handleLeadSubmit(email, "API Early Access")}
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Need Help?
          </div>

          <h2 className="heading3 text-center mb-4 text-primary">
            Can't Find What You're Looking For?
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
            Our developer support team is here to help you with any technical
            questions or implementation challenges.
          </p>

          <div className="flex flex-col pt-10 sm:flex-row gap-4 justify-center">
            <CTAButton to="/contact" variant="primary" size="md" icon="mail">
              Contact Support
            </CTAButton>
            <CTAButton
              href="https://github.com/rejoicehub"
              variant="secondary"
              size="md"
              icon="external"
            >
              GitHub
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
