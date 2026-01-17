import React from "react";
import {
  Award,
  Users,
  Shield,
  TrendingUp,
  Lightbulb,
  Phone,
  Clock,
  CheckCircle,
  Star,
  Zap,
  Globe,
  Heart,
  Search,
  Smartphone,
  Target,
  Code,
} from "lucide-react";
import { cn } from "~/lib/utils";

interface WhyChooseUsProps {
  serviceId?: string;
  className?: string;
}

const WhyChooseRejoicehub: React.FC<WhyChooseUsProps> = ({
  serviceId,
  className = "",
}) => {
  // Service-specific benefits
  const serviceBenefits: {
    [key: string]: Array<{
      icon: React.ReactNode;
      title: string;
      description: string;
    }>;
  } = {
    "ai-agents-services": [
      {
        icon: <Zap className="w-6 h-6 text-amber-600" />,
        title: "AI Expertise",
        description:
          "Deep expertise in AI/ML technologies with proven track record of successful AI implementations across industries.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        title: "Proven ROI",
        description:
          "Our AI solutions deliver measurable results with 30-50% cost reduction and 40%+ productivity improvements.",
      },
      {
        icon: <Shield className="w-6 h-6 text-amber-600" />,
        title: "Enterprise Security",
        description:
          "Enterprise-grade security and compliance standards to protect your data and ensure regulatory compliance.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Expert Team",
        description:
          "Experienced AI engineers and data scientists with deep knowledge of cutting-edge AI technologies.",
      },
    ],
    "generative-ai-development-services": [
      {
        icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
        title: "Innovation Focus",
        description:
          "Stay ahead with the latest generative AI models and technologies including GPT-4, Claude, and custom solutions.",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
        title: "Quality Assurance",
        description:
          "Rigorous quality control processes ensure AI-generated content meets your brand standards and accuracy requirements.",
      },
      {
        icon: <Globe className="w-6 h-6 text-amber-600" />,
        title: "Scalable Solutions",
        description:
          "Build scalable AI solutions that grow with your business and handle increasing demands efficiently.",
      },
      {
        icon: <Star className="w-6 h-6 text-amber-600" />,
        title: "Custom Training",
        description:
          "Custom model training and fine-tuning to ensure AI solutions understand your industry and specific requirements.",
      },
    ],
    "mobile-app-development-services": [
      {
        icon: <Smartphone className="w-6 h-6 text-amber-600" />,
        title: "Cross-Platform Expertise",
        description:
          "Expertise in native and cross-platform development using React Native, Flutter, and native technologies.",
      },
      {
        icon: <Award className="w-6 h-6 text-amber-600" />,
        title: "App Store Success",
        description:
          "Proven track record of successful app launches with high ratings and positive user feedback.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        title: "Performance Optimization",
        description:
          "Focus on app performance, user experience, and scalability to ensure long-term success.",
      },
      {
        icon: <Shield className="w-6 h-6 text-amber-600" />,
        title: "Security & Compliance",
        description:
          "Implement security best practices and ensure compliance with app store guidelines and data protection regulations.",
      },
    ],
    "iot-development-services": [
      {
        icon: <Globe className="w-6 h-6 text-amber-600" />,
        title: "IOT Expertise",
        description:
          "Deep expertise in IOT technologies, protocols, and platforms for various industry applications.",
      },
      {
        icon: <Shield className="w-6 h-6 text-amber-600" />,
        title: "Security First",
        description:
          "Security-first approach with encryption, authentication, and compliance with IOT security standards.",
      },
      {
        icon: <Zap className="w-6 h-6 text-amber-600" />,
        title: "Real-time Solutions",
        description:
          "Build real-time IOT solutions that provide instant insights and enable data-driven decision making.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Integration Expertise",
        description:
          "Seamless integration with existing systems and platforms to maximize the value of IOT investments.",
      },
    ],
    "devops-consulting-services": [
      {
        icon: <Zap className="w-6 h-6 text-amber-600" />,
        title: "DevOps Excellence",
        description:
          "Proven DevOps methodologies and best practices to streamline development and deployment processes.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        title: "Performance Optimization",
        description:
          "Optimize infrastructure and processes for better performance, reliability, and cost efficiency.",
      },
      {
        icon: <Shield className="w-6 h-6 text-amber-600" />,
        title: "Security & Compliance",
        description:
          "Implement security best practices and ensure compliance with industry standards and regulations.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Team Training",
        description:
          "Comprehensive training and knowledge transfer to empower your team with DevOps skills and practices.",
      },
    ],
    "open-source-consulting": [
      {
        icon: <Globe className="w-6 h-6 text-amber-600" />,
        title: "Open Source Expertise",
        description:
          "Deep knowledge of open source technologies and communities to recommend the best solutions for your needs.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        title: "Cost Optimization",
        description:
          "Help you reduce licensing costs by 60-80% while maintaining functionality and avoiding vendor lock-in.",
      },
      {
        icon: <Shield className="w-6 h-6 text-amber-600" />,
        title: "Security & Maintenance",
        description:
          "Ensure security, provide ongoing maintenance, and keep your open source solutions up-to-date.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Community Support",
        description:
          "Leverage open source communities and provide expert support for implementation and troubleshooting.",
      },
    ],
    "ui-ux-design-services": [
      {
        icon: <Heart className="w-6 h-6 text-amber-600" />,
        title: "User-Centered Design",
        description:
          "Focus on user needs and behaviors to create intuitive, engaging, and conversion-optimized experiences.",
      },
      {
        icon: <Award className="w-6 h-6 text-amber-600" />,
        title: "Design Excellence",
        description:
          "Award-winning design team with expertise in modern design trends and best practices.",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
        title: "Accessibility Compliance",
        description:
          "Ensure your designs are accessible to all users, including those with disabilities, following WCAG guidelines.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        title: "Performance Focus",
        description:
          "Design with performance in mind to ensure fast loading times and optimal user experience.",
      },
    ],
    "digital-marketing-services": [
      {
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        title: "Data-Driven Results",
        description:
          "Data-driven approach with measurable results and continuous optimization to maximize ROI.",
      },
      {
        icon: <Globe className="w-6 h-6 text-amber-600" />,
        title: "Multi-Channel Expertise",
        description:
          "Expertise across all major marketing channels including SEO, PPC, social media, and content marketing.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Industry Experience",
        description:
          "Proven experience across various industries with tailored strategies for each sector.",
      },
      {
        icon: <Award className="w-6 h-6 text-amber-600" />,
        title: "Proven Track Record",
        description:
          "Track record of successful campaigns with significant improvements in traffic, conversions, and revenue.",
      },
    ],
    "brand-design": [
      {
        icon: <Award className="w-6 h-6 text-amber-600" />,
        title: "Strategic Branding",
        description:
          "Strategic approach to brand design that aligns with your business goals and resonates with your target audience.",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
        title: "Comprehensive Systems",
        description:
          "Create complete brand systems including logos, typography, color palettes, and guidelines for consistency.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Industry Expertise",
        description:
          "Deep experience across various industries with understanding of unique branding challenges and opportunities.",
      },
      {
        icon: <Heart className="w-6 h-6 text-amber-600" />,
        title: "Collaborative Process",
        description:
          "Collaborative design process ensuring your vision and feedback are incorporated at every stage.",
      },
    ],
    "user-research": [
      {
        icon: <Search className="w-6 h-6 text-amber-600" />,
        title: "Comprehensive Research",
        description:
          "Mix of qualitative and quantitative research methods to provide complete user insights and understanding.",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
        title: "Actionable Insights",
        description:
          "Transform research data into actionable recommendations that can be directly implemented to improve user experience.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Experienced Team",
        description:
          "Experienced research team with years of experience conducting user research across various industries.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        title: "Proven Methodologies",
        description:
          "Follow industry best practices and proven methodologies to ensure reliable and valid research results.",
      },
    ],
    "digital-transformation": [
      {
        icon: <Zap className="w-6 h-6 text-amber-600" />,
        title: "End-to-End Expertise",
        description:
          "Comprehensive digital transformation services from strategy to implementation, covering technology, processes, and culture change.",
      },
      {
        icon: <Award className="w-6 h-6 text-amber-600" />,
        title: "Proven Framework",
        description:
          "Proven digital transformation framework with measurable results and sustainable outcomes across various industries.",
      },
      {
        icon: <Globe className="w-6 h-6 text-amber-600" />,
        title: "Technology Agnostic",
        description:
          "Recommend the best technologies for your specific needs, ensuring optimal solutions aligned with business objectives.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Change Management",
        description:
          "Expert change management ensuring smooth adoption, user acceptance, and cultural transformation success.",
      },
    ],
    "ai-integration": [
      {
        icon: <Zap className="w-6 h-6 text-amber-600" />,
        title: "Seamless Integration",
        description:
          "Specialize in integrating AI capabilities into existing systems without disrupting current operations.",
      },
      {
        icon: <Shield className="w-6 h-6 text-amber-600" />,
        title: "Legacy Compatibility",
        description:
          "Expertise in legacy system integration ensuring AI capabilities work harmoniously with existing infrastructure.",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
        title: "Phased Approach",
        description:
          "Use phased implementation that minimizes disruption and allows incremental AI adoption while maintaining business continuity.",
      },
      {
        icon: <Globe className="w-6 h-6 text-amber-600" />,
        title: "Data Integration",
        description:
          "Excel at connecting and harmonizing data from multiple sources to enable effective AI processing and analysis.",
      },
    ],
    "ai-strategy-consulting": [
      {
        icon: <Target className="w-6 h-6 text-amber-600" />,
        title: "Strategic Expertise",
        description:
          "Deep expertise in AI strategy development, helping create comprehensive roadmaps aligned with business objectives.",
      },
      {
        icon: <Users className="w-6 h-6 text-amber-600" />,
        title: "Industry Knowledge",
        description:
          "Extensive experience across multiple industries, providing tailored AI strategies for specific challenges and opportunities.",
      },
      {
        icon: <Globe className="w-6 h-6 text-amber-600" />,
        title: "Technology Agnostic",
        description:
          "Provide unbiased technology recommendations based on specific needs, ensuring optimal solutions aligned with business goals.",
      },
      {
        icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
        title: "ROI Focus",
        description:
          "Develop strategies that prioritize measurable business outcomes and ROI, ensuring AI investments deliver tangible value.",
      },
    ],
    "api-development": [
      {
        icon: <Code className="w-6 h-6 text-amber-600" />,
        title: "Expert Architecture",
        description:
          "Design robust, scalable API architectures following industry best practices for optimal performance and maintainability.",
      },
      {
        icon: <Shield className="w-6 h-6 text-amber-600" />,
        title: "Security First",
        description:
          "Implement enterprise-grade security measures including authentication, authorization, rate limiting, and data encryption.",
      },
      {
        icon: <CheckCircle className="w-6 h-6 text-amber-600" />,
        title: "Comprehensive Testing",
        description:
          "Conduct thorough testing including unit tests, integration tests, security tests, and performance tests for reliability.",
      },
      {
        icon: <Award className="w-6 h-6 text-amber-600" />,
        title: "Detailed Documentation",
        description:
          "Provide comprehensive API documentation, developer guides, and code examples for easy integration and maintenance.",
      },
    ],
  };

  // Default benefits for general services
  const defaultBenefits = [
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Proven Track Record",
      description:
        "120+ successful projects across diverse industries with measurable results and client satisfaction.",
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "Expert Team",
      description:
        "Experienced professionals with deep expertise in AI, design, development, and digital marketing.",
    },
    {
      icon: <Shield className="w-6 h-6 text-amber-600" />,
      title: "Quality Assurance",
      description:
        "Rigorous testing and quality control processes ensure reliable, scalable, and secure solutions.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      title: "Results-Driven",
      description:
        "Focus on measurable outcomes and ROI, not just deliverables. Your success is our success.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      title: "Innovation Focus",
      description:
        "Stay ahead with cutting-edge technologies and innovative approaches to solve complex challenges.",
    },
    {
      icon: <Phone className="w-6 h-6 text-amber-600" />,
      title: "24/7 Support",
      description:
        "Round-the-clock support and maintenance to ensure your solutions run smoothly and efficiently.",
    },
  ];

  const benefits = serviceId
    ? serviceBenefits[serviceId] || defaultBenefits
    : defaultBenefits;

  return (
    <section className={cn("py-20 max-mobile:py-12 bg-gray-50", className)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-mobile:mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 font-semibold text-sm mb-4">
            ⭐ Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
            Trusted by 500+ Companies Worldwide
          </h2>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto">
            Our proven approach and commitment to excellence make us the
            preferred partner for digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-navy-950 mb-4">
                {benefit.title}
              </h3>

              <p className="text-navy-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">120+</div>
            <div className="text-navy-700">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">40%</div>
            <div className="text-navy-700">Average Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">99%</div>
            <div className="text-navy-700">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
            <div className="text-navy-700">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseRejoicehub;
