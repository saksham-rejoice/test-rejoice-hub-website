import { MetaFunction, useNavigate } from "react-router";
import { useState } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import Breadcrumb from "~/components/ui/Breadcrumb";
import {
  FileText,
  Download,
  TrendingUp,
  Users,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  BookOpen,
  BarChart3,
  Brain,
  Zap,
} from "lucide-react";
import LeadMagnetSection from "~/sections/home/LeadMagnetSection";
import { FaDownload, FaTimes } from "react-icons/fa";
import { supabase } from "~/Supabase/supabaseClient";
import { getDownloadLink } from "~/api/whitePaperApi";

const TheFuture = '/assets/images/The Future of AI in Business A Comprehensive Guide to Digital Transformation.webp'
const TheStateodAIAdoption = '/assets/images/The state od AI Adoption.webp'
const AIEthicsinenterprise = '/assets/images/AI Ethics in enterprise.webp'
const AutomationROI = '/assets/images/Automation ROI.webp'
const BuildingScalableAIInfrastructure = '/assets/images/Building Scalable AI Infrastructure.webp'
const CustomerExperiencerevolution = '/assets/images/Customer Experience revolution.webp'

export const meta: MetaFunction = () => [
  { title: "Whitepapers & Research | RejoiceHub - AI Industry Insights" },
  {
    name: "description",
    content:
      "Access exclusive whitepapers, research reports, and industry insights on AI transformation, automation trends, and digital innovation from RejoiceHub experts.",
  },
  {
    tagName: "link",
    rel: "canonical",

  },
];

const WhitepapersPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedWhitepaper, setSelectedWhitepaper] = useState<string | null>(null);
  const [modalMessage, setModalMessage] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const navigate = useNavigate();

  interface ValidationResult {
    isValid: boolean;
    message: string;
  }

  const validateEmail = (email: string): ValidationResult => {
    if (!email) {
      return { isValid: false, message: 'Please enter your email address.' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, message: 'Please enter a valid email address.' };
    }

    return { isValid: true, message: '' };
  };
  console.log(showEmailModal,selectedWhitepaper)

  const whitepapers = [
    {
      id: 1,
      title:
        "The Future of AI in Business: A Comprehensive Guide to Digital Transformation",
      description:
        "Explore how artificial intelligence is reshaping business operations, customer experiences, and competitive landscapes across industries.",
      category: "ai-transformation",
      author: "Dipak Savaliya",
      publishDate: "December 2024",
      readTime: "45 min",
      downloads: "2.3k",
      image: TheFuture,
      tags: ["AI Strategy", "Digital Transformation", "Business Innovation"],
      isFeatured: true,
      
    },
    {
      id: 2,
      title: "Automation ROI: Measuring the True Impact of AI Implementation",
      description:
        "Learn how to calculate and measure the real return on investment from AI automation projects, including hidden costs and benefits.",
      category: "automation",
      author: "Yash Makavana",
      publishDate: "November 2024",
      readTime: "30 min",
      downloads: "1.8k",
      image: AutomationROI,
      tags: ["ROI", "Automation", "Metrics"],
      isFeatured: false,
    },
    {
      id: 3,
      title:
        "AI Ethics in Enterprise: Balancing Innovation with Responsibility",
      description:
        "A deep dive into ethical considerations, governance frameworks, and best practices for responsible AI deployment in enterprise environments.",
      category: "technology",
      author: "Rajesh Kumar",
      publishDate: "October 2024",
      readTime: "40 min",
      downloads: "1.5k",
      image: AIEthicsinenterprise,
      tags: ["AI Ethics", "Governance", "Responsible AI"],
      isFeatured: false,
    },
    {
      id: 4,
      title: "The State of AI Adoption: Industry Benchmarks and Trends 2024",
      description:
        "Comprehensive analysis of AI adoption rates, success factors, and emerging trends across different industries and company sizes.",
      category: "industry-insights",
      author: "RejoiceHub Research Team",
      publishDate: "September 2024",
      readTime: "35 min",
      downloads: "2.1k",
      image: TheStateodAIAdoption,
      tags: ["Market Research", "Trends", "Adoption"],
      isFeatured: true,
    },
    {
      id: 5,
      title:
        "Building Scalable AI Infrastructure: Technical Architecture Guide",
      description:
        "Technical deep-dive into designing and implementing scalable AI infrastructure for enterprise applications.",
      category: "technology",
      author: "Engineering Team",
      publishDate: "August 2024",
      readTime: "50 min",
      downloads: "1.2k",
      image: BuildingScalableAIInfrastructure,
      tags: ["Architecture", "Infrastructure", "Scalability"],
      isFeatured: false,
    },
    {
      id: 6,
      title:
        "Customer Experience Revolution: AI-Powered Personalization Strategies",
      description:
        "How AI is transforming customer experience through personalization, predictive analytics, and intelligent automation.",
      category: "ai-transformation",
      author: "UX Research Team",
      publishDate: "July 2024",
      readTime: "25 min",
      downloads: "1.9k",
      image: CustomerExperiencerevolution,
      tags: ["CX", "Personalization", "Customer Experience"],
      isFeatured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Whitepapers", count: whitepapers.length },
    { id: "ai-transformation", name: "AI Transformation", count: whitepapers.filter((paper) => paper.category === "ai-transformation").length },
    { id: "automation", name: "Automation", count: whitepapers.filter((paper) => paper.category === "automation").length },
    { id: "industry-insights", name: "Industry Insights", count: whitepapers.filter((paper) => paper.category === "industry-insights").length },
    { id: "technology", name: "Technology", count: whitepapers.filter((paper) => paper.category === "technology").length },
  ];

  const featuredStats = [
    {
      number: "12+",
      label: "Whitepapers Published",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "15k+",
      label: "Downloads",
      icon: <Download className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "45+",
      label: "Industry Experts",
      icon: <Users className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "500+",
      label: "Research Hours",
      icon: <Clock className="w-6 h-6 text-amber-600" />,
    },
  ];

  const handleLeadSubmit = async (email?: string, resourceId?: string): Promise<any> => {
    try {
      if (!resourceId) {
        return;
      }
      setSelectedResource(resourceId);
      console.log('Submitting whitepaper request from:', email, 'resource:', resourceId);
      if (!email) {
        setEmailError('Please enter your email address');
        return;
      }
      const validation = validateEmail(email);
      if (!validation.isValid) {
        setEmailError(validation.message);
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


  const filteredWhitepapers =
    selectedCategory === "all"
      ? whitepapers
      : whitepapers.filter((paper) => paper.category === selectedCategory);

  const featuredWhitepapers = whitepapers.filter((paper) => paper.isFeatured);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedResource) return;

    const validation = validateEmail(email);
    if (!validation.isValid) {
      setModalMessage({ type: 'error', message: validation.message });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("downloadEmails").insert({
        email,
        title: selectedResource,
      });

      if (error) {
        console.error("Error submitting lead magnet form:", error);
        setModalMessage({ type: 'error', message: 'Error submitting form. Please try again.' });
      } else {
        setEmail("");
        setSelectedResource(null);
        setModalMessage({ type: 'success', message: 'Thank you! Check your email for the download link.' });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setModalMessage({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalMessage(null);
  };

  // Removed duplicate validation function

  const handleDownloadPDF = (title: string) => {
    setSelectedWhitepaper(title);
    setShowEmailModal(true);
  };


  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedWhitepaper) return;

    // Validate email
    const validation = validateEmail(email);
    if (!validation.isValid) {
      setEmailError(validation.message);
      return;
    }

    setIsSubmitting(true);
    setEmailError(null);

    try {
      const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/email-sending/send-study-file/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          filename: selectedWhitepaper,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const data = await response.json();
      if (data) {
        setShowEmailModal(false);
        setShowSuccess(true);
        setEmail('');
      } else {
        throw new Error(data.message || 'Failed to process your request');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError(error instanceof Error ? error.message : 'Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className=" max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: "Resources", href: "/resources" },
                { label: "Whitepapers", href: "/whitepapers" },
              ]}
              className="!text-primary"
            />
          </div>

          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Research & Insights
          </div>

          <h1 className="text-primary mb-4 text-center">
            AI Research &
            <span className="text-gradient"> Industry Insights</span>
          </h1>

          <p className="text-lg max-w-[612px] text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Access exclusive whitepapers, research reports, and thought
            leadership content from RejoiceHub's AI experts and industry
            leaders.
          </p>

          {/* <div className="flex flex-col sm:flex-row pt-10 gap-4 justify-center">
            <CTAButton
              // href="#featured"
              variant="primary"
              size="md"
              icon="download"
              onClick={() => handleLeadSubmit(email, "latest whitepaper")}
            >
              Download Latest
            </CTAButton>
            <CTAButton
              href="#all-whitepapers"
              variant="secondary"
              size="md"
              icon="book"
              
            >
              Browse All
            </CTAButton>
          </div> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-20 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {featuredStats.map((stat, index) => (
              <div
                key={index}
                className=" text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
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

      {/* Featured Whitepapers */}
      <section id="featured" className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Featured Research"
            title="Latest Whitepapers"
            subtitle="Our most popular and recently published research papers on AI transformation and industry trends."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {featuredWhitepapers.map((paper, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="aspect-video bg-gradient-to-b from-[rgba(255,100,0,0.14)] to-[rgba(255,145,4,0.14)] rounded-[14px] relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img src={paper.image} alt={paper.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 border border-solid border-primary-200 text-white bg-primary-100 text-xs font-medium rounded-full">
                      {paper.category.replace("-", " ").toUpperCase()}
                    </span>
                    <span className="text-sm text-primary">
                      {paper.downloads} downloads
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-primary text-sm mb-4 line-clamp-3">
                    {paper.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-primary">
                      <span>{paper.author}</span>
                      <span>•</span>
                      <span>{paper.publishDate}</span>
                      <span>•</span>
                      <span>{paper.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 border border-solid border-primary-200 text-primary text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <CTAButton
                    // href="#"
                    variant="primary"
                    size="md"
                    icon="download"
                    className="w-full"
                    onClick={() => handleDownloadPDF(paper.title)}
                  >
                    Download Whitepaper
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="All Whitepapers"
            title="Browse by Category"
            subtitle="Filter our comprehensive collection of whitepapers by topic and research area."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? "bg-primary-300 text-white shadow-lg"
                  : "bg-white text-navy-700 hover:bg-amber-50 border border-gray-200"
                  }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Whitepapers Grid */}
          <div
            id="all-whitepapers"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredWhitepapers.map((paper, index) => (
              <div
                key={index}
                className="bg-primary-300 p-3 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video border bg-primary-100 rounded-xl border-solid border-primary-200 relative overflow-hidden">
                  <div className="absolute inset-0">
                    <img src={paper.image} alt={paper.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 border bg-primary-100 text-white border-solid border-primary-200 text-xs font-medium rounded">
                      {paper.category.replace("-", " ").toUpperCase()}
                    </span>
                    <span className="text-sm text-white">
                      {paper.downloads}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-light text-sm mb-4 line-clamp-3">
                    {paper.description}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-light">
                      <div>{paper.author}</div>
                      <div>
                        {paper.publishDate} • {paper.readTime}
                      </div>
                    </div>
                  </div>

                  <CTAButton
                    variant="outline"
                    size="sm"
                    icon="download"
                    className="w-full"
                    onClick={() => {
                      handleDownloadPDF(paper.title);
                      return false;
                    }}
                  >
                    Download Whitepaper
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 max-mobile:py-12 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Stay Informed"
            title="Get Latest Research Updates"
            subtitle="Subscribe to receive new whitepapers, research insights, and industry analysis directly to your inbox."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadMagnetForm
              title="Research Newsletter"
              description="Weekly digest of the latest AI research, industry insights, and exclusive whitepaper previews."
              buttonText="Subscribe"
              placeholder="Enter your email"
              resourceId="research-newsletter"
              onSubmit={(email) => handleLeadSubmit(email, "Research Newsletter")}
              variant="default"
            />

            <LeadMagnetForm
              title="Early Access"
              description="Get early access to new whitepapers and research reports before public release."
              buttonText="Join Waitlist"
              placeholder="Enter your email"
              resourceId="whitepaper-early-access"
              onSubmit={(email) => handleLeadSubmit(email, "Early Access")}
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Research Partnership
          </div>

          <h2 className="heading3 text-center mb-4 text-primary">
            Contribute to Our Research
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
            Are you an AI researcher, industry expert, or thought leader? We're
            always looking for contributors to our whitepaper series.
          </p>

          <div className="flex flex-col pt-10 sm:flex-row gap-4 justify-center">
            <CTAButton to="/contact" variant="primary" size="md" icon="mail">
              Submit Research
            </CTAButton>
            <CTAButton to="/blogs" variant="secondary" size="md" icon="book">
              Read Our Blog
            </CTAButton>
          </div>
        </div>
      </section>

      {modalMessage && (
        <div className="fixed inset-0 modal-bg bg-opacity-20 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${modalMessage.type === 'success'
                ? 'bg-green-100'
                : 'bg-red-100'
                }`}>
                {modalMessage.type === 'success' ? (
                  <FaDownload className="h-8 w-8 text-green-600" />
                ) : (
                  <FaTimes className="h-8 w-8 text-red-600" />
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${modalMessage.type === 'success'
                ? 'text-green-600'
                : 'text-red-600'
                }`}>
                {modalMessage.type === 'success' ? 'Success!' : 'Error'}
              </h3>
              <p className="text-gray-600 mb-6">
                {modalMessage.message}
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Status Modal */}
      {/* {modalMessage && (
                  <div className="fixed inset-0 modal-bg bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
                      <div className="text-center">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                          modalMessage.type === 'success' 
                            ? 'bg-green-100' 
                            : 'bg-red-100'
                        }`}>
                          {modalMessage.type === 'success' ? (
                            <FaDownload className="h-8 w-8 text-green-600" />
                          ) : (
                            <FaTimes className="h-8 w-8 text-red-600" />
                          )}
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${
                          modalMessage.type === 'success' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {modalMessage.type === 'success' ? 'Success!' : 'Error'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {modalMessage.message}
                        </p>
                        <button
                          onClick={closeModal}
                          className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
                        >
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                )} */}

      {/* Email Collection Modal */}
      {showEmailModal && selectedWhitepaper && (
       <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Whitepaper</h3>
              <p className="text-gray-600 mb-6">
                Enter your email to receive "{selectedWhitepaper}" directly to your inbox.
              </p>

              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(null);
                    }}
                    placeholder="Enter your email address"
                    required
                    className={`w-full px-4 py-3 border ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600">{emailError}</p>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Whitepaper'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowEmailModal(false);
                      setEmailError(null);
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && selectedWhitepaper && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Check Your Email!</h3>
              <p className="text-gray-600 mb-6">
                We've sent "{selectedWhitepaper}" to your email address.
              </p>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  setSelectedWhitepaper(null);
                }}
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhitepapersPage;
