import { MetaFunction, useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import HeroSection from "~/components/comman/herosection";
import { servicesData } from "../../data/services/services";
import { ServiceResponse } from "~/types/servicesTypes";
import FAQ from "~/sections/home/faq";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetCard from "~/components/ui/LeadMagnetCard";
import { Container } from "~/components/ui/Container";
import { Section } from "~/components/ui/Section";
import { WEB_URL } from "~/utils/config";
import {
  Bot,
  Zap,
  Brain,
  TrendingUp,
  Shield,
  Users,
  Calculator,
  ClipboardCheck,
  FileText,
  Lightbulb,
  Phone,
  Palette,
  Search,
  Smartphone,
  Globe,
  Settings,
  Code,
  Eye,
  Target,
  Award,
  BotMessageSquare,
  Aperture,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "AI Automation & Custom Solutions | RejoiceHub Services" },
  {
    name: "description",
    content:
      "Transform your business with expert AI automation & custom digital services at RejoiceHub. Drive growth, cut costs, and get a free strategy call now.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/services`,
  },
];

export const loader = async () => {
  return {
    data: {
      service: {
        data: servicesData,
      },
    },
  };
};

export default function Services() {
  const loaderData = useLoaderData() as ServiceResponse;
  const services = loaderData.data.service.data;
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});

  // Enhanced service data with dynamic CTAs and lead magnets
  const enhancedServices = [
    {
      icon: <Bot className="w-6 h-6 text-amber-600" />,
      title: "AI Agents & Automation",
      description:
        "Custom AI agents that work 24/7 to automate your workflows, reduce manual tasks, and boost productivity by up to 40%.",
      cta: "Book AI Agent Consultation",
      leadMagnet: "AI Automation ROI Calculator",
      slug: "ai-agents-services",
    },
    {
      icon: <Brain className="w-6 h-6 text-amber-600" />,
      title: "Generative AI Solutions",
      description:
        "Harness the power of GPT, Claude, and custom models to create content, analyze data, and enhance customer experiences.",
      cta: "Get Generative AI Demo",
      leadMagnet: "AI Content Strategy Guide",
      slug: "generative-ai-development-services",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-amber-600" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences and drive business growth.",
      cta: "Start Mobile App Project",
      leadMagnet: "Mobile App Development Guide",
      slug: "mobile-app-development-services",
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-600" />,
      title: "IOT Development Services",
      description:
        "Connect your business with smart IOT solutions that provide real-time insights and automate complex processes.",
      cta: "IOT Strategy Consultation",
      leadMagnet: "IOT Implementation Roadmap",
      slug: "iot-development-services",
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-600" />,
      title: "DevOps Consulting",
      description:
        "Streamline your development lifecycle with automation, collaboration, and continuous delivery practices.",
      cta: "DevOps Assessment",
      leadMagnet: "DevOps Maturity Assessment",
      slug: "devops-consulting-services",
    },
    {
      icon: <Code className="w-6 h-6 text-amber-600" />,
      title: "Open Source Consulting",
      description:
        "Leverage open-source solutions to reduce costs and boost efficiency with expert guidance and implementation.",
      cta: "Open Source Strategy Call",
      leadMagnet: "Open Source Cost Calculator",
      slug: "open-source-consulting",
    },
    {
      icon: <Palette className="w-6 h-6 text-amber-600" />,
      title: "UI/UX Design Services",
      description:
        "User-centered design solutions that enhance engagement, improve conversions, and create memorable experiences.",
      cta: "Design Portfolio Review",
      leadMagnet: "UX Audit Checklist",
      slug: "ui-ux-design-services",
    },
    {
      icon: <Target className="w-6 h-6 text-amber-600" />,
      title: "Digital Marketing Services",
      description:
        "Data-driven marketing strategies that boost your online presence and drive measurable business growth.",
      cta: "Marketing Strategy Session",
      leadMagnet: "Digital Marketing Audit",
      slug: "digital-marketing-services",
    },
    {
      icon: <Palette className="w-6 h-6 text-amber-600" />,
      title: "Brand Design",
      description:
        "Comprehensive brand identity creation including logos, typography, guidelines, and visual systems that build trust and recognition.",
      cta: "Brand Identity Workshop",
      leadMagnet: "Brand Strategy Template",
      slug: "brand-design",
    },
    {
      icon: <Search className="w-6 h-6 text-amber-600" />,
      title: "User Research",
      description:
        "Data-driven user research including persona development, usability testing, and customer journey mapping for informed design decisions.",
      cta: "User Research Consultation",
      leadMagnet: "User Research Framework",
      slug: "user-research",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      title: "Digital Transformation",
      description:
        "End-to-end digital transformation services to modernize processes, implement cutting-edge technologies, and create a digital-first culture that drives growth.",
      cta: "Start Digital Transformation",
      leadMagnet: "Digital Transformation Guide",
      slug: "digital-transformation",
    },
    {
      icon: <Settings className="w-6 h-6 text-amber-600" />,
      title: "AI Integration",
      description:
        "Seamlessly integrate AI capabilities into your existing systems and workflows without disrupting operations.",
      cta: "Start AI Integration",
      leadMagnet: "AI Integration Guide",
      slug: "ai-integration",
    },
    {
      icon: <Target className="w-6 h-6 text-amber-600" />,
      title: "AI Strategy Consulting",
      description:
        "Develop comprehensive AI strategies that align with business goals and create roadmaps for successful AI adoption.",
      cta: "Start AI Strategy Consulting",
      leadMagnet: "AI Strategy Guide",
      slug: "ai-strategy-consulting",
    },
    {
      icon: <Code className="w-6 h-6 text-amber-600" />,
      title: "API Development",
      description:
        "Build robust, scalable APIs that power your applications and enable seamless integrations across systems.",
      cta: "Start API Development",
      leadMagnet: "API Development Guide",
      slug: "api-development",
    },
    {
      icon: <BotMessageSquare className="w-6 h-6 text-amber-600" />,
      title: "AgentKit Builder",
      description:
        "Build custom AI agents with RejoiceHub's AgentKit Builder. Create intelligent agents for customer support, sales, and more.",
      cta: "Start AgentKit Builder",
      leadMagnet: "AgentKit Builder Guide",
      slug: "ai-agentkit-builder-services",
    },
    {
      icon: <Aperture className="w-6 h-6 text-amber-600" />,
      title: "Customize ChatGPT",
      description:
        "Build custom AI agents with RejoiceHub's AgentKit Builder. Create intelligent agents for customer support, sales, and more.",
      cta: "Start Customize ChatGPT",
      leadMagnet: "Customize ChatGPT Guide",
      slug: "chatgpt-customize-services",
    }
  ];

  const leadMagnets = [
    {
      title: "AI ROI Calculator",
      description:
        "Calculate your potential AI investment returns and implementation timeline with our industry-specific tool.",
      value: "$2,500 Value",
      icon: <Calculator className="w-6 h-6 text-amber-600" />,
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
      icon: <ClipboardCheck className="w-6 h-6 text-amber-600" />,
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
      icon: <FileText className="w-6 h-6 text-amber-600" />,
      features: ["50+ pages", "Case studies", "Best practices"],
      resourceId: "ai-implementation-guide",
    },
  ];

  const handleLeadSubmit = async (email: string, resourceId: string) => {
    setLeadMagnetSubmissions((prev) => ({ ...prev, [resourceId]: true }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Enhanced Value Prop */}
      <section className="pt-28 pb-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Complete Digital Solutions
          </div>

          <h1 className="text-primary text-center mb-4">
            Transform Your Business with
            <span className="text-gradient">Expert Solutions</span>
          </h1>

          <p className="text-lg max-w-[612px]  text-grey-500 tracking-[-0.32px] mx-auto text-center">
            From AI automation to brand design, we deliver comprehensive
            solutions that drive growth, reduce costs, and create competitive
            advantages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <CTAButton
              to="/contact"
              variant="primary"
              size="md"
              icon="calendar"
            >
              Get Free Strategy Consultation
            </CTAButton>
            <CTAButton href="#services-overview" variant="secondary" size="md">
              Explore All Services
            </CTAButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-primary pt-5">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>120+ Projects Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>40% Average Cost Reduction</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>99% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <div id="services-overview" className="max-w-6xl mx-auto px-6">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Digital Solutions"
          subtitle="End-to-end services from strategy to implementation, ensuring your digital transformation is successful and sustainable."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {enhancedServices.map((service, index) => (
            <div
              key={index}
              className="group  rounded-2xl  border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] transition-all duration-300 hover:-translate-y-2 p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-b from-[rgba(255,100,0,0.14)] to-[rgba(255,145,4,0.14)] rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-navy-700 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4">
                <CTAButton
                  to={`/services/${service.slug}`}
                  variant="secondary"
                  size="sm"
                  fullWidth
                >
                  {service.cta}
                </CTAButton>

                <div className="text-center">
                  <span className="text-xs text-gray-500">Free Resource:</span>
                  <p className="text-sm font-medium text-primary-200">
                    {service.leadMagnet}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton to="/contact" variant="primary" size="lg" icon="arrow">
            Discuss Your Project
          </CTAButton>
        </div>
      </div>

      {/* Lead Magnets Section */}
      {/* <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Free Resources"
            title="Accelerate Your Success"
            subtitle="Get instant access to our premium tools and guides designed by experts for business leaders."
            variant="amber"
          />

          <div className="grid md:grid-cols-1 gap-6">
            {leadMagnets.map((magnet, index) => (
              <LeadMagnetCard
                key={index}
                title={magnet.title}
                description={magnet.description}
                value={magnet.value}
                icon={magnet.icon}
                features={magnet.features}
                resourceId={magnet.resourceId}
                onSubmit={handleLeadSubmit}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}
      <Section className="">
        <SectionHeader
          badge=" Why Choose Us"
          title="Trusted by 500+ Companies Worldwide"
          subtitle="Our proven approach and commitment to excellence make us the preferred partner for digital transformation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Award className="w-6 h-6 text-amber-600" />}
            title="Proven Track Record"
            description="120+ successful projects across diverse industries with measurable results and client satisfaction."
            variant="default"
            layout="vertical"
          />
          <FeatureCard
            icon={<Users className="w-6 h-6 text-amber-600" />}
            title="Expert Team"
            description="Experienced professionals with deep expertise in AI, design, development, and digital marketing."
            variant="default"
            layout="vertical"
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-amber-600" />}
            title="Quality Assurance"
            description="Rigorous testing and quality control processes ensure reliable, scalable, and secure solutions."
            variant="default"
            layout="vertical"
          />
          <FeatureCard
            icon={<TrendingUp className="w-6 h-6 text-amber-600" />}
            title="Results-Driven"
            description="Focus on measurable outcomes and ROI, not just deliverables. Your success is our success."
            variant="default"
            layout="vertical"
          />
          <FeatureCard
            icon={<Lightbulb className="w-6 h-6 text-amber-600" />}
            title="Innovation Focus"
            description="Stay ahead with cutting-edge technologies and innovative approaches to solve complex challenges."
            variant="default"
            layout="vertical"
          />
          <FeatureCard
            icon={<Phone className="w-6 h-6 text-amber-600" />}
            title="24/7 Support"
            description="Round-the-clock support and maintenance to ensure your solutions run smoothly and efficiently."
            variant="default"
            layout="vertical"
          />
        </div>
      </Section>

      {/* FAQ Section */}
      <div className="py-20 max-mobile:py-12 bg-blue-900">
        <SectionHeader
          badge=" Frequently Asked Questions"
          title="Get Your Questions Answered"
          subtitle="Everything you need to know about our services and implementation process."
        />
        <FAQ />
      </div>

      {/* Enhanced CTA Section */}
      <div className="py-20 max-mobile:py-12 ">
        <Container className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Ready to Transform?
          </div>

          <h2 className="heading3 text-center mb-4 text-primary">
            Start Your Digital Journey Today
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
            Join 500+ forward-thinking companies who've already transformed
            their operations with our solutions. Get your free consultation and
            custom roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center py-10 max-mobile:py-5">
            <CTAButton
              to="/contact"
              variant="primary"
              size="md"
              icon="calendar"
            >
              Book Free Strategy Call
            </CTAButton>
            <CTAButton href="tel:+919825122840" variant="secondary" size="md">
              <Phone /> Call: +91 98251 22840
            </CTAButton>
          </div>

          {/* Social Proof */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-100 mb-2">
                120+
              </div>
              <div className="text-grey-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-100 mb-2">
                40%
              </div>
              <div className="text-grey-600">Average Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-100 mb-2">
                99%
              </div>
              <div className="text-grey-600">Client Satisfaction</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
