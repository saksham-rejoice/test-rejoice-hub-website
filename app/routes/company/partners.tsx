import { MetaFunction } from "react-router";
import { useState } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import {
  Handshake,
  Building2,
  Users,
  Award,
  Globe,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Mail,
  Phone,
  Calendar,
  Star,
  TrendingUp,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Partnerships | RejoiceHub - Strategic AI Partnerships" },
  {
    name: "description",
    content:
      "Join RejoiceHub's partnership ecosystem. Discover technology partnerships, channel opportunities, and strategic alliances to accelerate AI adoption and business growth.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/partners`,
  },
];

const PartnersPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const partnershipStats = [
    {
      number: "50+",
      label: "Technology Partners",
      icon: <Building2 className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "25+",
      label: "Channel Partners",
      icon: <Users className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "15+",
      label: "Strategic Alliances",
      icon: <Handshake className="w-6 h-6 text-amber-600" />,
    },
    {
      number: "200+",
      label: "Joint Projects",
      icon: <Award className="w-6 h-6 text-amber-600" />,
    },
  ];

  const technologyPartners = [
    {
      name: "OpenAI",
      logo: "/partners/openai.png",
      category: "AI & Machine Learning",
      description: "Leading AI research and deployment company",
      benefits: [
        "GPT-4 Integration",
        "Advanced AI Models",
        "Research Collaboration",
      ],
      tier: "Platinum",
    },
    {
      name: "Microsoft Azure",
      logo: "/partners/azure.png",
      category: "Cloud Infrastructure",
      description: "Enterprise cloud computing platform",
      benefits: [
        "Azure AI Services",
        "Scalable Infrastructure",
        "Enterprise Security",
      ],
      tier: "Gold",
    },
    {
      name: "Google Cloud",
      logo: "/partners/gcp.png",
      category: "Cloud & AI",
      description: "Advanced cloud computing and AI services",
      benefits: ["Vertex AI", "BigQuery", "Cloud ML"],
      tier: "Gold",
    },
    {
      name: "AWS",
      logo: "/partners/aws.png",
      category: "Cloud Computing",
      description: "Leading cloud services provider",
      benefits: ["SageMaker", "Lambda", "CloudFormation"],
      tier: "Gold",
    },
    {
      name: "NVIDIA",
      logo: "/partners/nvidia.png",
      category: "Hardware & AI",
      description: "GPU computing and AI acceleration",
      benefits: ["GPU Optimization", "CUDA Support", "AI Acceleration"],
      tier: "Silver",
    },
    {
      name: "Databricks",
      logo: "/partners/databricks.png",
      category: "Data & Analytics",
      description: "Unified analytics platform",
      benefits: ["Data Engineering", "ML Platform", "Real-time Analytics"],
      tier: "Silver",
    },
  ];

  const partnershipTypes = [
    {
      title: "Technology Partnerships",
      description:
        "Strategic alliances with leading technology providers to deliver cutting-edge AI solutions.",
      benefits: [
        "Access to latest AI technologies",
        "Joint product development",
        "Technical expertise sharing",
        "Co-marketing opportunities",
      ],
      icon: <Zap className="w-6 h-6 text-white" />,
    },
    {
      title: "Channel Partnerships",
      description:
        "Collaborate with system integrators, consultants, and resellers to expand market reach.",
      benefits: [
        "Extended market presence",
        "Local expertise and support",
        "Revenue sharing opportunities",
        "Training and certification programs",
      ],
      icon: <Users className="w-6 h-6 text-white" />,
    },
    {
      title: "Strategic Alliances",
      description:
        "Long-term partnerships with industry leaders to create innovative solutions and market opportunities.",
      benefits: [
        "Joint go-to-market strategies",
        "Shared research and development",
        "Industry-specific solutions",
        "Thought leadership collaboration",
      ],
      icon: <Target className="w-6 h-6 text-white" />,
    },
  ];

  const successStories = [
    {
      partner: "TechCorp Solutions",
      industry: "Healthcare",
      outcome:
        "40% reduction in patient wait times through AI-powered scheduling",
      description:
        "Collaborated with TechCorp to implement intelligent patient management systems.",
    },
    {
      partner: "DataFlow Analytics",
      industry: "Retail",
      outcome: "25% increase in customer retention using predictive analytics",
      description: "Joint development of customer behavior analysis platform.",
    },
    {
      partner: "CloudScale Systems",
      industry: "Manufacturing",
      outcome: "30% improvement in production efficiency with IOT integration",
      description:
        "Strategic partnership to deliver end-to-end manufacturing automation.",
    },
  ];

  const partnershipBenefits = [
    {
      title: "Access to Cutting-Edge Technology",
      description:
        "Get early access to the latest AI innovations and research breakthroughs.",
      icon: <Zap className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "Joint Go-to-Market",
      description:
        "Collaborate on marketing initiatives and share market opportunities.",
      icon: <Target className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "Technical Support",
      description:
        "Receive comprehensive technical support and training for your team.",
      icon: <Users className="w-6 h-6 text-amber-600" />,
    },
    {
      title: "Revenue Sharing",
      description:
        "Benefit from our proven revenue-sharing model and growth opportunities.",
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
    },
  ];

 const handleLeadSubmit = async (email?: string, resourceId?: string):Promise<any> => {
    try {
        if (!resourceId) {
        return;
      }
      setSelectedResource(resourceId);
      console.log('Submitting partnership inquiry from:', email, 'resource:', resourceId);
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
          filename : resourceId
        })
      });
      if (!response.ok) {
        throw new Error('Failed to submit inquiry. Please try again.');
      }
      setLeadMagnetSubmissions((prev) => ({ ...prev, [resourceId]: true }));
      setShowEmailModal(false);
      setShowSuccess(true);
      return true;
    } catch (error) {
      console.error('Error submitting partnership inquiry:', error);
      setEmailError('Failed to submit inquiry. Please try again.');
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
            Strategic Partnerships
          </p>

          <h1 className="text-primary mb-4 text-center">
            Join Our
            <span className="text-gradient"> Partnership Ecosystem</span>
          </h1>

          <p className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Collaborate with RejoiceHub to accelerate AI adoption, expand market
            reach, and create innovative solutions that drive business
            transformation.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <CTAButton
              href="#partnership-types"
              variant="primary"
              size="md"
              icon="handshake"
            >
              Explore Partnerships
            </CTAButton>
            <CTAButton
              href="#become-partner"
              variant="secondary"
              size="md"
              icon="mail"
            >
              Become a Partner
            </CTAButton>
          </div> */}
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partnershipStats.map((stat, index) => (
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

      {/* Partnership Types */}
      <section
        id="partnership-types"
        className="py-20 max-mobile:py-12 bg-blue-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Partnership Types"
            title="Choose Your Partnership Path"
            subtitle="Discover the different ways to collaborate with RejoiceHub and accelerate your growth."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3"
              >
                <div className="flex items-center gap-3 mb-6">
                  {type.icon}
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                </div>

                <p className="text-light mb-6 leading-relaxed">
                  {type.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-white mb-3">
                    Key Benefits:
                  </h4>
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-white mt-1 flex-shrink-0" />
                      <span className="text-white text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Technology Partners"
            title="Leading Technology Alliances"
            subtitle="Strategic partnerships with world-class technology providers to deliver cutting-edge AI solutions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyPartners.map((partner, index) => (
              <div
                key={index}
                className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-amber-600" />
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${partner.tier === "Platinum"
                      ? "bg-purple-100 text-purple-700"
                      : partner.tier === "Gold"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {partner.tier}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-950 mb-2">
                  {partner.name}
                </h3>
                <p className="text-amber-600 text-sm font-medium mb-3">
                  {partner.category}
                </p>
                <p className="text-navy-700 text-sm mb-4">
                  {partner.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-navy-900 text-sm">
                    Key Benefits:
                  </h4>
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <Star className="w-3 h-3 text-amber-500" />
                      <span className="text-navy-700 text-xs">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Success Stories"
            title="Partnership Success Stories"
            subtitle="Real results from our strategic partnerships across different industries."
          />

          <div className="grid md:grid-cols-3 gap-5">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-primary-300 p-5 rounded-2xl border-solid border-primary-200 border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border flex items-center justify-center border-solid border-primary-200 rounded-[14px] bg-primary-100 text-white font-bold">
                    {story.partner.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{story.partner}</h3>
                    <p className="text-light text-sm">{story.industry}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Outcome:</h4>
                  <p className="text-navy-700 text-light font-medium">
                    {story.outcome}
                  </p>
                </div>

                <p className="text-light text-sm">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Partner Benefits"
            title="Why Partner With RejoiceHub"
            subtitle="Discover the advantages of joining our partnership ecosystem and accelerating your business growth."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                variant="highlight"
                layout="horizontal"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section
        id="become-partner"
        className="py-20 max-mobile:py-12 bg-blue-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="🚀 Join Us"
            title="Become a RejoiceHub Partner"
            subtitle="Ready to join our partnership ecosystem? Let's discuss how we can create value together."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadMagnetForm
              title="Partnership Inquiry"
              description="Tell us about your organization and partnership goals. We'll get back to you within 24 hours."
              buttonText="Submit Inquiry"
              placeholder="Enter your email"
              resourceId="partnership-inquiry"
              onSubmit={(email) => handleLeadSubmit(email, "Partnership Inquiry")}
              variant="default"
            />

            <LeadMagnetForm
              title="Partner Newsletter"
              description="Stay updated with partnership opportunities, success stories, and exclusive partner events."
              buttonText="Subscribe"
              placeholder="Enter your email"
              resourceId="partner-newsletter"
              onSubmit={(email) => handleLeadSubmit(email, "Partner Newsletter")}
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Ready to Partner?
          </p>

          <h2 className="heading3 text-primary text-center mb-4">
            Let's Create Something Amazing Together
          </h2>

          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            Join our growing network of partners and help shape the future of AI
            technology. Together, we can deliver innovative solutions that
            transform businesses worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <CTAButton to="/contact" variant="primary" size="lg" icon="mail">
              Contact Partnership Team
            </CTAButton>
            <CTAButton
              to="/services"
              variant="secondary"
              size="lg"
              icon="arrow"
            >
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
