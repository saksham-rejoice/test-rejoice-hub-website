import { MetaFunction } from "react-router";
import { useState, FormEvent } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import {
  Download,
  Mail,
  Phone,
  Globe,
  Award,
  Users,
  TrendingUp,
  FileText,
  Image,
  Video,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Press Kit & Media Resources | RejoiceHub" },
  {
    name: "description",
    content:
      "Media resources, company information, and press materials for journalists covering RejoiceHub's AI innovations and business transformation solutions.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/press`,
  },
];

const PressPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [selectedResource, setSelectedResource] = useState<{title: string; downloadUrl: string; fileSize?: string} | null>(null);

  const companyStats = [
    {
      number: "2019",
      label: "Founded",
      icon: <Calendar className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "120+",
      label: "Team Members",
      icon: <Users className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "500+",
      label: "Projects Delivered",
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "40+",
      label: "Countries Served",
      icon: <Globe className="w-6 h-6 text-amber-600" />,
    },
  ];

  const pressReleases = [
    {
      title: "RejoiceHub Launches Revolutionary AI Agent Platform",
      date: "December 2024",
      summary:
        "Company introduces next-generation AI agents designed to transform business operations and boost productivity by up to 40%.",
      link: "#",
    },
    {
      title: "RejoiceHub Secures $5M in Series A Funding",
      date: "November 2024",
      summary:
        "Investment round led by prominent venture capital firms to accelerate AI innovation and market expansion.",
      link: "#",
    },
    {
      title: "RejoiceHub Named Top AI Company by Tech Awards 2024",
      date: "October 2024",
      summary:
        "Recognition for outstanding contributions to AI technology and business transformation solutions.",
      link: "#",
    },
  ];

  const handleDownloadResource = (resource: {title: string; downloadUrl: string; fileSize?: string}) => {
    setSelectedResource(resource);
    setShowEmailModal(true);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return { isValid: false, message: 'Email is required' };
    if (!re.test(email)) return { isValid: false, message: 'Please enter a valid email address' };
    return { isValid: true, message: '' };
  };

  const handleSubmitEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedResource) return;

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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          filename: selectedResource.title,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to process download');
      }
      
      setShowEmailModal(false);
      setShowSuccess(true);
      setEmail('');
    } catch (error) {
      console.error('Error downloading resource:', error);
      setEmailError('Failed to process download. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mediaResources = [
    {
      title: "Company Logo Pack",
      description: "High-resolution logos in various formats (PNG, SVG, EPS)",
      icon: <Image className="w-6 h-6 text-amber-600" />,
      downloadUrl: "#",
      fileSize: "2.5 MB",
    },
    {
      title: "Executive Headshots",
      description: "Professional photos of leadership team members",
      icon: <Image className="w-6 h-6 text-amber-600" />,
      downloadUrl: "#",
      fileSize: "8.1 MB",
    },
    {
      title: "Product Screenshots",
      description: "High-quality screenshots of our AI platforms and solutions",
      icon: <Image className="w-6 h-6 text-amber-600" />,
      downloadUrl: "#",
      fileSize: "15.3 MB",
    },
    {
      title: "Company Fact Sheet",
      description:
        "Comprehensive overview of RejoiceHub's services and achievements",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      downloadUrl: "#",
      fileSize: "1.2 MB",
    },
    {
      title: "Case Study Collection",
      description:
        "Detailed case studies showcasing successful AI implementations",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      downloadUrl: "#",
      fileSize: "5.7 MB",
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand guidelines and style guide for media use",
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      downloadUrl: "#",
      fileSize: "3.8 MB",
    },
  ];

  const companyInfo = {
    name: "RejoiceHub LLP",
    description:
      "RejoiceHub is a leading AI technology company specializing in intelligent automation, custom AI development, and digital transformation solutions. Founded in 2019, we help businesses of all sizes leverage the power of artificial intelligence to drive growth, efficiency, and innovation.",
    founded: "2019",
    headquarters: "Gujarat, India",
    employees: "120+",
    website: "https://rejoicehub.com",
    industry:
      "Artificial Intelligence, Software Development, Digital Transformation",
  };

  const keyPeople = [
    {
      name: "Dipak Savaliya",
      title: "Founder & CEO",
      bio: "AI visionary and serial entrepreneur with 10+ years of experience in technology and business transformation.",
      email: "dipak@rejoicehub.com",
      phone: "+91 84606 66940",
    },
    {
      name: "Yash Makavana",
      title: "Co-Founder & CFO",
      bio: "With 10+ years in technology, I specialize in building smart, scalable solutions that solve complex problems.",
      email: "yash@rejoicehub.com",
      phone: "+91 97258 06843",
    },
    {
      name: "Bhargav Dhameliya",
      title: "COO",
      bio: "Focus on sustainable growth, strategic execution, and cross-functional collaboration.",
      email: "bhargav@rejoicehub.com",
      phone: "+91 78020 27530",
    }
  ];

  // Add these state variables at the top of your component, after the existing state


  // Add this function to your component
  const handleLeadSubmit = async (email?: string, resourceId?: string):Promise<any> => {
    try {
        if (!resourceId) {
        return;
      }
      setSelectedResource(resourceId);
      console.log('Submitting media inquiry from:', email, 'resource:', resourceId);

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

      const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/email-sending/send-study-file/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          filename: resourceId,
          
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit media inquiry. Please try again.');
      }

      setLeadMagnetSubmissions((prev) => ({ ...prev, [resourceId]: true }));
      setShowEmailModal(false);
      setShowSuccess(true);
      return true;
    } catch (error) {
      console.error('Error submitting media inquiry:', error);
      setEmailError('Failed to submit inquiry. Please try again or contact us directly.');
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Media Resources
          </p>

          <h1 className="text-primary text-center mb-4">
            Press Kit &<span className="text-gradient"> Media Resources</span>
          </h1>

          <p className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Everything journalists and media outlets need to cover RejoiceHub's
            AI innovations, company milestones, and industry impact.
          </p>

          <div className="flex pt-8 flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="#media-resources"
              variant="primary"
              size="md"
              icon="download"
            >
              Download Resources
            </CTAButton>
            <CTAButton
              href="#contact"
              variant="secondary"
              size="md"
              icon="mail"
            >
              Media Contact
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {companyStats.map((stat, index) => (
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

      {/* Company Information */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Company Overview"
            title="About RejoiceHub"
            subtitle="Comprehensive information about our company, mission, and achievements."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-navy-950 mb-4">
                {companyInfo.name}
              </h3>
              <p className="text-navy-700 leading-relaxed mb-6">
                {companyInfo.description}
              </p>

              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-navy-900">Founded:</span>
                  <span className="text-navy-700">{companyInfo.founded}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-navy-900">
                    Headquarters:
                  </span>
                  <span className="text-navy-700">
                    {companyInfo.headquarters}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-navy-900">Employees:</span>
                  <span className="text-navy-700">{companyInfo.employees}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-navy-900">Website:</span>
                  <a
                    href={companyInfo.website}
                    className="text-amber-600 hover:text-amber-700"
                  >
                    {companyInfo.website}
                  </a>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium text-navy-900">Industry:</span>
                  <span className="text-navy-700">{companyInfo.industry}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-950 mb-6">
                Key People
              </h3>
              <div className="space-y-3">
                {keyPeople.map((person, index) => (
                  <div
                    key={index}
                    className="border border-solid border-primary-200 rounded-lg bg-primary-100 p-5 h-full max-mobile:p-2"
                  >
                    <div className="flex pb-2 items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-white">
                          {person.name}
                        </h4>
                        <p className="text-amber-600 font-semibold">
                          {person.title}
                        </p>
                      </div>
                      <div>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Mail className="w-4 h-4 text-light mr-2" />
                            <a
                              href={`mailto:${person.email}`}
                              className="text-light hover:text-amber-700"
                            >
                              {person.email}
                            </a>
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="w-4 h-4 text-light mr-2" />
                            <a
                              href={`tel:${person.phone}`}
                              className="text-light hover:text-amber-700"
                            >
                              {person.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-light text-sm">{person.bio}</p>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section id="media-resources" className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Download Resources"
            title="Media Resources & Assets"
            subtitle="High-quality media assets and resources for journalists and media outlets."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaResources.map((resource, index) => (
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

                <p className="text-navy-700 text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {resource.fileSize}
                  </span>
                  <CTAButton
                    onClick={() => handleDownloadResource(resource)}
                    variant="secondary"
                    size="sm"
                    icon="download"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && selectedResource?.title === resource.title ? 'Processing...' : 'Download'}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      {/* <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Press Releases"
            title="Latest News & Announcements"
            subtitle="Recent press releases and company announcements for media coverage."
          />

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2"
              >
                <div className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {release.title}
                      </h3>
                      <p className="text-light mb-3">{release.summary}</p>
                      <span className="text-sm text-light">{release.date}</span>
                    </div>
                    <CTAButton
                      href={release.link}
                      variant="primary"
                      size="sm"
                      icon="arrow"
                    >
                      Read More
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Media Contact */}
      <section id="contact" className="py-20 max-mobile:py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Media Contact"
            title="Get in Touch"
            subtitle="Contact our media relations team for interviews, quotes, and press inquiries."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <h3 className="text-xl font-bold text-primary-200 mb-4">
                Media Relations
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-amber-400 mr-3" />
                  <a
                    href="mailto:press@rejoicehub.com"
                    className="text-primary hover:text-amber-400"
                  >
                    press@rejoicehub.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-amber-400 mr-3" />
                  <a
                    href="tel:+919825122840"
                    className="text-primary hover:text-amber-400"
                  >
                    +91 98251 22840
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-amber-400 mr-3" />
                  <a
                    href="https://rejoicehub.com"
                    className="text-primary hover:text-amber-400"
                  >
                    rejoicehub.com
                  </a>
                </div>
              </div>
            </div>

            <LeadMagnetForm
              title="Media Access"
              description="Get your Media Access inquiry and we'll get back to you within 24 hours."
              buttonText="Submit Inquiry"
              placeholder="Enter your email"
              resourceId="media-inquiry"
              onSubmit={(email) => handleLeadSubmit(email, "Media Access")}
              variant="default"
              className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Stay Updated
          </p>

          <h2 className="heading3 text-primary text-center mb-4">
            Follow Our Journey
          </h2>

          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            Stay connected with RejoiceHub for the latest AI innovations,
            company updates, and industry insights.
          </p>

          <div className="flex pt-10   flex-col sm:flex-row gap-4 justify-center">
            <CTAButton to="/blogs" variant="primary" size="md" icon="arrow">
              Read Our Blog
            </CTAButton>
            <CTAButton to="/case-studies" variant="secondary" size="md">
              View Case Studies
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Email Collection Modal */}
      {showEmailModal && selectedResource && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Resource</h3>
              <p className="text-gray-600 mb-6">
                Enter your email to receive "{selectedResource.title}" directly to your inbox.
              </p>

              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
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
                    className="flex-1 px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Download Now'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowEmailModal(false);
                      setEmailError('');
                    }}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                    disabled={isSubmitting}
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
      {showSuccess && selectedResource && (
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">Check Your Inbox!</h3>
              <p className="text-gray-600 mb-6">
                We've sent "{selectedResource.title}" to your email. The download should start automatically.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowSuccess(false)}
                  className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
                >
                  Close
                </button>
              </div>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressPage;
