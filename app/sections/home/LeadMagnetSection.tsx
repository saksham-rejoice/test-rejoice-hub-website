import { useState } from "react";
import {
  FaCalculator,
  FaClipboardCheck,
  FaBook,
  FaFileAlt,
  FaDownload,
  FaChartLine,
  FaProjectDiagram,
  FaBrain,
  FaTimes,
} from "react-icons/fa";
import { Link, redirect, useNavigate } from "react-router-dom";
import { supabase } from "~/Supabase/supabaseClient";
import CalculatorIcon from "/assets/icons/Calculator.svg";
import RightIcon from "/assets/icons/right.svg";
import UpArrow from "~/components/icons/upArrow";
import { NavLink } from "react-router-dom";

const LeadMagnetSection = () => {
  const [activeTab, setActiveTab] = useState("tools");
  const [selectedResource, setSelectedResource] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [modalMessage, setModalMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const navigate = useNavigate();

  const tabs = [
    { id: "tools", label: "Interactive Tools", icon: FaCalculator },
    { id: "resources", label: "Downloads", icon: FaDownload },
    { id: "templates", label: "Templates", icon: FaFileAlt },
    { id: "ebooks", label: "eBooks", icon: FaBook },
  ];

  const leadMagnets = {
    tools: [
      {
        id: "ai-roi-calculator",
        title: "AI ROI Calculator",
        description:
          "Calculate potential savings and project your implementation timeline with our industry-specific tool.",
        icon: FaCalculator,
        value: "$500 Value",
        cta: "Access Tool",
        features: [
          "Industry-specific calculations",
          "ROI projections",
          "Implementation timeline",
          "Cost-benefit analysis",
        ],
        redirect: "/ai-calculators",
      },
      {
        id: "ai-readiness-assessment",
        title: "AI Readiness Assessment",
        description:
          "Our 20-question assessment provides personalized scores and a custom implementation roadmap.",
        icon: FaClipboardCheck,
        value: "$2,500 Value",
        cta: "Start Assessment",
        features: [
          "20-question evaluation",
          "Personalized scoring",
          "Custom roadmap",
          "Industry benchmarks",
        ],
        redirect: "/free-ai-assessment",
      },
    ],
    resources: [
      {
        id: "ai-implementation-playbook",
        title: "AI Implementation Playbook",
        description:
          "A step-by-step guide with best practices, case studies, and ROI calculation templates.",
        icon: FaBook,
        value: "$1,200 Value",
        cta: "Download Now",
        features: [
          "Step-by-step guide",
          "Best practices",
          "Case studies",
          "ROI templates",
        ],
      },
      {
        id: "ai-case-studies",
        title: "AI Case Studies Collection",
        description:
          "Explore 20+ real-world examples of AI implementation with ROI metrics and lessons learned.",
        icon: FaChartLine,
        value: "$1,500 Value",
        cta: "Get Collection",
        features: [
          "20+ case studies",
          "ROI metrics",
          "Lessons learned",
          "Industry examples",
        ],
      },
    ],
    templates: [
      {
        id: "ai-project-planning",
        title: "AI Project Planning Template",
        description:
          "An Excel/Google Sheets template for timelines, budgets, risk assessment, and stakeholder comms.",
        icon: FaProjectDiagram,
        value: "$300 Value",
        cta: "Download Template",
        features: [
          "Timeline planning",
          "Budget tracking",
          "Risk assessment",
          "Stakeholder communication",
        ],
      },
    ],
    ebooks: [
      {
        id: "ai-transformation-guide",
        title: '"The Complete AI Transformation Guide"',
        description:
          "A 50+ page guide with actionable content, industry insights, and expert interviews.",
        icon: FaBrain,
        value: "$2,000 Value",
        cta: "Get the eBook",
        features: [
          "50+ pages",
          "Actionable content",
          "Industry insights",
          "Expert interviews",
        ],
      },
    ],
  };

  const handleResourceSelect = (resourceId: string) => {
    setSelectedResource(resourceId);
  };

  // Add these state variables at the top of your component with other state declarations

  // Update the handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !selectedResource) return;

    // Reset errors
    setEmailError(null);

    const validation = validateEmail(email);
    if (!validation.isValid) {
      setEmailError(validation.message);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/email-sending/send-study-file/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          filename: selectedResource,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const data = await response.json();
      if (data) {
        setEmail("");
        setSelectedResource(null);
        setShowSuccess(true);
      } else {
        throw new Error('Failed to process your request');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setEmailError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalMessage(null);
  };

  const validateEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateCompanyEmail = (email: string): boolean => {
    const personalEmailDomains = [
      "gmail.com",
      "yahoo.com",
      "hotmail.com",
      "outlook.com",
      "aol.com",
      "icloud.com",
      "protonmail.com",
      "mail.com",
      "yandex.com",
      "zoho.com",
      "inbox.com",
      "me.com",
      "mac.com",
      "live.com",
      "msn.com",
      "yahoo.co.uk",
      "googlemail.com",
      "gmx.com",
      "web.de",
      "mail.ru",
    ];

    const domain = email.split("@")[1]?.toLowerCase();
    return domain ? !personalEmailDomains.includes(domain) : false;
  };

  const validateEmail = (
    email: string
  ): { isValid: boolean; message: string } => {
    if (!email.trim()) {
      return { isValid: false, message: "Email is required." };
    }

    if (!validateEmailFormat(email)) {
      return { isValid: false, message: "Please enter a valid email address." };
    }

    if (!validateCompanyEmail(email)) {
      return {
        isValid: false,
        message: "Please use your company email address.",
      };
    }

    return { isValid: true, message: "" };
  };

  return (
    <>
      <section className="py-20  blue-line-bg max-mobile:py-12">
        <div className="container-lg">
          <span className="block text-base text-white text-center font-medium pb-1">
            Our Services
          </span>
          <h2 className="heading2 text-center text-white mb-3">
            Unlock Your AI Potential with Our Free Resources
          </h2>
          <p className="text-lg max-mobile:text-base font-normal text-white text-center mb-[30px]">
            Gain a competitive edge with our curated collection of tools,
            guides, and reports designed to accelerate your AI journey.
          </p>
          <div className="flex max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-4 items-center justify-center pb-10">
            <div className="px-[50px] max-mobile:px-0 max-mobile:border-none border-solid border-r border-white">
              <div className="flex items-center gap-2">
                <span className="text-orange text-base">★</span>
                <p className="text-lg max-mobile:text-base text-white">
                  10,000+ Downloads
                </p>
              </div>
            </div>
            <div className="px-[50px] border-solid border-r border-white max-mobile:px-0 max-mobile:border-none">
              <div className="flex items-center gap-2">
                <span className="text-orange text-base">★</span>
                <p className="text-lg max-mobile:text-base text-white">
                  4.9/5 Rating
                </p>
              </div>
            </div>
            <div className="px-[50px] max-mobile:p-0">
              <div className="flex items-center gap-2">
                <span className="text-orange text-base">★</span>
                <p className="text-lg max-mobile:text-base text-white">
                  Free Forever
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 pb-10">
            <div
              style={{ scrollbarWidth: "none" }}
              className="bg-white w-full overflow-auto max-mobile:p-1 max-mobile:rounded-lg p-2 border border-solid cursor-pointer border-border-color flex items-center gap-2 rounded-2xl"
            >
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 max-mobile:whitespace-nowrap max-mobile:text-sm cursor-pointer rounded-xl font-medium text-lg max-mobile:px-3 max-mobile:py-3 px-6 py-3 text-primary border-none ${
                      activeTab === tab.id ? "bg-primary-300 text-white" : " "
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <div className="max-w-[1178px] mx-auto w-full">
              {leadMagnets[activeTab as keyof typeof leadMagnets]?.map(
                (resource) => (
                  <div
                    key={resource.id}
                    className="border mb-4 max-mobile:p-3 max-mobile:grid max-mobile:grid-cols-1 last:mb-0 border-solid border-primary-200 rounded-[14px] bg-primary-100 py-6 px-10 flex items-center justify-between transition-all duration-300"
                  >
                    <div className="flex items-center gap-[30px] max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                      <div className="min-w-16 w-16 max-w-16">
                        <img src={CalculatorIcon} alt="CalculatorIcon" />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-xl font-medium text-white mb-1">
                          {resource.title}
                        </h3>
                        <p className="text-base text-white-80 mb-2">
                          {resource.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {resource.features.map((feature, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-4 py-2 rounded-full cursor-pointer text-base font-medium border border-solid border-primary-200  bg-primary-100 text-white"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="">
                      <span className="text-lg pb-5 max-mobile:py-3 max-mobile:text-base max-mobile:text-left font-semibold tracking-[0.4px] text-gradient block text-center">
                        {resource.value}
                      </span>
                      <button
                        onClick={() => {
                          if ('redirect' in resource && resource.redirect) {
                            navigate(resource.redirect);
                          } else {
                            handleResourceSelect(resource.title);
                          }
                        }}
                        className="rounded-[30px] flex items-center gap-2 cursor-pointer bg-gradient-to-r from-[#FF5C00] to-[#FF9504] text-base font-semibold tracking-[0.4px] px-5 py-2.5 text-white"
                      >
                        <span>{resource.cta}</span>
                        <UpArrow stroke="white" />
                        {/* <FaDownload className="w-4 h-4" /> */}
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <div className="pt-20 max-mobile:pt-16">
        <div className="container-lg">
          <div className="rounded-2xl max-mobile:rounded-xl border border-[#FF5F011A] bg-gradient-to-r from-[rgba(255,93,1,0.1)] to-[rgba(255,149,4,0.1)] p-8 max-tab:p-5">
            <div className="flex items-center justify-between max-tab:grid max-tab:grid-cols-1 max-tab:gap-5">
              <div>
                <h2 className="text-2xl font-medium text-primary mb-2">
                  Ready to Accelerate Your AI Journey?
                </h2>
                <p className="text-lg text-primary">
                  Join 10,000+ professionals who are already using our resources
                  to transform their businesses with AI.
                </p>
              </div>
              <div className="flex items-center gap-3 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-2">
                <a
                  className="py-[14px] px-6 max-mobile:justify-center text-base font-semibold cursor-pointer tracking-[0.4px] bg-gradient-to-r from-[#FF5C00] to-[#FF9504] rounded-full flex items-center gap-2 text-white"
                  href="https://calendly.com/dipak-rejoicehub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Consultation
                  <UpArrow stroke="#fff" />
                </a>
                <NavLink
                  to="/contact"
                  className="py-[14px] transition-all max-mobile:justify-center ease-in-out duration-300 hover:bg-primary hover:text-white px-6 text-base font-semibold cursor-pointer tracking-[0.4px] bg-transparent rounded-full flex items-center gap-2 text-primary-300 border border-solid border-primary-300"
                >
                  Learn More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedResource && (
        <div className="fixed inset-0 modal-bg bg-opacity-20 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDownload className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Get Your Free Resource
              </h3>
              <p className="text-gray-600 mb-6">
                Enter your email to instantly access this valuable resource and
                join our community of AI innovators.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      // Clear error when user types
                      if (emailError) setEmailError(null);
                    }}
                    placeholder="Enter your email address"
                    required
                    className={`w-full px-4 py-3 border ${
                      emailError ? "border-red-500" : "border-gray-300"
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
                    onClick={() => handleResourceSelect(selectedResource)}
                  >
                    {isSubmitting ? "Submitting..." : "Get Access"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedResource(null)}
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
      {showSuccess && (
        <div className="fixed inset-0 modal-bg bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">
                Thank you! Check your email for the download link.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadMagnetSection;
