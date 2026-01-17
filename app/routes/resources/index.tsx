import { MetaFunction } from "react-router";
import { useState } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import {
  BookOpen,
  FileText,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Star,
  Download,
  ExternalLink,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Resources | RejoiceHub - AI Insights, Guides & Tools" },
  {
    name: "description",
    content:
      "Access 250+ AI guides, case studies & tools at RejoiceHub’s Resource Library,subscribe now to stay ahead of the curve and unlock your free consultation today!",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/resources`,
  },
];

const ResourcesPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedResource, setSelectedResource] = useState<string>('');
const [emailError, setEmailError] = useState<string | null>(null);
const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const resourceCategories = [
    {
      title: "Blog & Insights",
      description:
        "Latest AI trends, industry insights, and thought leadership content",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      count: "150+",
      link: "/blogs",
      featured: [
        {
          title: "The Future of AI in 2025",
          readTime: "5 min",
          category: "Trends",
        },
        {
          title: "Building Scalable AI Infrastructure",
          readTime: "8 min",
          category: "Technical",
        },
        {
          title: "AI Ethics in Enterprise",
          readTime: "6 min",
          category: "Thought Leadership",
        },
      ],
    },
    {
      title: "Case Studies",
      description: "Real-world success stories and implementation examples",
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      count: "25+",
      link: "/case-studies",
      featured: [
        {
          title: "Healthcare: 40% Efficiency Improvement",
          readTime: "10 min",
          category: "Healthcare",
        },
        {
          title: "Retail: AI-Powered Customer Experience",
          readTime: "12 min",
          category: "Retail",
        },
        {
          title: "Manufacturing: Smart Factory Transformation",
          readTime: "15 min",
          category: "Manufacturing",
        },
      ],
    },
    {
      title: "Whitepapers",
      description: "In-depth research reports and industry analysis",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      count: "12+",
      link: "/whitepapers",
      featured: [
        {
          title: "AI Transformation Guide",
          readTime: "45 min",
          category: "Strategy",
        },
        {
          title: "Automation ROI Analysis",
          readTime: "30 min",
          category: "ROI",
        },
        {
          title: "AI Ethics Framework",
          readTime: "40 min",
          category: "Ethics",
        },
      ],
    },
    {
      title: "Documentation",
      description: "Technical guides, API references, and developer resources",
      icon: <Users className="w-6 h-6 text-amber-600" />,
      count: "50+",
      link: "/docs",
      featured: [
        {
          title: "Getting Started with AI Agents",
          readTime: "15 min",
          category: "Tutorial",
        },
        {
          title: "API Reference Guide",
          readTime: "30 min",
          category: "Technical",
        },
        {
          title: "Best Practices for AI Implementation",
          readTime: "20 min",
          category: "Guide",
        },
      ],
    },
  ];

  const featuredResources = [
    {
      title: "AI Implementation Roadmap",
      description:
        "A comprehensive guide to planning and executing your AI transformation journey",
      type: "Whitepaper",
      readTime: "45 min",
      downloads: "2.3k",
      image: "/assets/images/AI Implementation Roadmap.webp",
      isPremium: true,
    },
    {
      title: "Customer Support AI: Complete Implementation Guide",
      description:
        "Step-by-step guide to building intelligent customer support systems",
      type: "Case Study",
      readTime: "25 min",
      downloads: "1.8k",
      image: "/assets/images/Customer Support AI Complete Implementation Guide.webp",
      isPremium: false,
    },
    {
      title: "AI Agent Architecture Best Practices",
      description:
        "Technical deep-dive into designing scalable AI agent systems",
      type: "Technical Guide",
      readTime: "35 min",
      downloads: "1.5k",
      image: "/assets/images/AI Agent Architecture Best Practices.webp",
      isPremium: true,
    },
  ];

  const resourceStats = [
    {
      number: "250+",
      label: "Total Resources",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "50k+",
      label: "Downloads",
      icon: <Download className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "25+",
      label: "Expert Authors",
      icon: <Users className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "15+",
      label: "Industries Covered",
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
    },
  ];

 const handleLeadSubmit = async (email?: string, resourceId?: string): Promise<any> => {
  try {
    if (!resourceId) {
      return;
    }
    setSelectedResource(resourceId);
    console.log('Submitting resource request from:', email, 'resource:', resourceId);
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
        <div className=" max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Resource Library
          </div>

          <h1 className="text-primary text-center mb-4">
            AI Resources &<span className="text-gradient">Insights Hub</span>
          </h1>

          <p className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Access our comprehensive library of AI insights, technical guides,
            case studies, and tools to accelerate your AI transformation
            journey.
          </p>

          {/* Search Bar */}
          {/* <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white backdrop-blur-sm border border-white/20 rounded-xl text-primary placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div> */}

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="#featured" variant="primary" size="md" icon="star">
              Featured Resources
            </CTAButton>
            <CTAButton
              href="#categories"
              variant="secondary"
              size="md"
              icon="filter"
            >
              Browse Categories
            </CTAButton>
          </div> */}
        </div>
      </section>

      {/* Resource Stats */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {resourceStats.map((stat, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-primary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section id="featured" className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Featured Resources"
            title="Most Popular Resources"
            subtitle="Our most downloaded and highly-rated resources to help you get started with AI transformation."
          />

          <div className="grid md:grid-cols-3 gap-5">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2"
              >
                <div className="aspect-video border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3 relative">
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-lg">
                    <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                  </div>
                  {resource.isPremium && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 border border-solid border-primary-200  text-white bg-primary-100  text-xs font-semibold rounded-full">
                        Premium
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 border border-solid border-primary-200 text-white bg-primary-100  text-xs font-medium rounded-full">
                      {resource.type}
                    </span>
                    <span className="text-sm text-white">
                      {resource.downloads} downloads
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-light text-sm mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-light">
                      <span>{resource.readTime}</span>
                    </div>
                    <CTAButton
                      href="#"
                      variant="primary"
                      size="sm"
                      icon="download"
                    >
                      Download
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="categories" className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Resource Categories"
            title="Browse by Category"
            subtitle="Find the resources you need organized by topic and content type."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
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
                    {category.count} resources
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-navy-900">Featured:</h4>
                  {category.featured.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-between p-3 bg-white rounded-lg"
                    >
                      <div>
                        <div className="font-medium text-navy-900 text-sm">
                          {item.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.category}
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.readTime}
                      </div>
                    </div>
                  ))}
                </div>

                <CTAButton
                  to={category.link}
                  variant="primary"
                  size="md"
                  icon="arrow"
                  className="w-full"
                >
                  Browse {category.title}
                </CTAButton>
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
            title="Get Latest Resources"
            subtitle="Subscribe to receive new resources, insights, and exclusive content directly to your inbox."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadMagnetForm
              title="Resource Newsletter"
              description="Weekly digest of the latest AI insights, technical guides, and exclusive resource previews."
              buttonText="Subscribe"
              placeholder="Enter your email"
              resourceId="resource-newsletter"
              onSubmit={(email) => handleLeadSubmit(email, "Resource Newsletter")}
              variant="default"
            />

            <LeadMagnetForm
              title="Premium Access"
              description="Get early access to premium resources and exclusive content before public release."
              buttonText="Join Waitlist"
              placeholder="Enter your email"
              resourceId="premium-access"
              onSubmit={(email) => handleLeadSubmit(email, "Premium Access")}
              variant="newsletter"
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

          <h2 className="heading3 text-primary text-center mb-4">
            Can't Find What You're Looking For?
          </h2>

          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            Our team of AI experts is here to help you find the right resources
            and answer any questions about AI implementation.
          </p>

          <div className="flex flex-col pt-10 sm:flex-row gap-4 justify-center">
            <CTAButton to="/contact" variant="primary" size="md" icon="mail">
              Contact Our Experts
            </CTAButton>
            <CTAButton
              to="/services"
              variant="secondary"
              size="md"
              icon="arrow"
            >
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
