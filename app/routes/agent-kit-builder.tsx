import { MetaFunction } from "react-router";
import {
  Check,
  Zap,
  Cpu,
  Shield,
  Code,
  BarChart3,
  ArrowRight,
  ShoppingCart,
  DollarSign,
  HeartPulse,
  GraduationCap,
  Home,
} from "lucide-react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import FAQ from "~/sections/home/faq";
import UpArrow from "~/components/icons/upArrow";
export const meta: MetaFunction = () => [
  {
    title:
      "AI Agent Builder | RejoiceHub - Build Custom AI Agents with AgentKit",
  },
  {
    name: "description",
    content:
      "Build and deploy intelligent AI agents with RejoiceHub's expert AgentKit implementation. Automate workflows and enhance customer engagement with custom AI solutions.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/services/ai-agentkit-builder-services`,
  },
];

const features = [
  {
    icon: <Zap className="w-6 h-6 text-blue-500" />,
    title: "Rapid Deployment",
    description:
      "Launch custom AI agents quickly with our streamlined development process.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    title: "Advanced Intelligence",
    description: "Leverage cutting-edge AI models for smarter decision making.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-500" />,
    title: "Enterprise Security",
    description: "Built with security-first principles to protect your data.",
  },
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "Custom Development",
    description:
      "Tailored solutions that fit your specific business requirements.",
  },
];

const benefits = [
  "Automate repetitive operations and boost productivity",
  "Enhance customer engagement with smart conversational agents",
  "Integrate AI into commerce, CRM, and business tools",
  "Enable real-time decision-making and data-driven insights",
];

const steps = [
  {
    step: "1",
    title: "Discovery & Planning",
    description: "Define automation goals and agent capabilities",
  },
  {
    step: "2",
    title: "Custom Design",
    description: "Set up personality, workflows, and integration points",
  },
  {
    step: "3",
    title: "AgentKit Implementation",
    description: "Leverage the best AI agent builder tools",
  },
  {
    step: "4",
    title: "Testing & Optimization",
    description: "Ensure speed, accuracy, and reliability",
  },
  {
    step: "5",
    title: "Launch & Support",
    description: "Deploy and enhance your agent continuously",
  },
];

const featuresData = [
  {
    title: "Tailor-made AI Agent Design & Training",
    description: "We design and train AI agents that perfectly align with your brand's goals, workflows, and customer interactions for maximum efficiency."
  },
  {
    title: "Real-Time API and Data Integration",
    description: "Our AI agents seamlessly connect with your existing tools and databases, enabling instant data access and real-time automation."
  },
  {
    title: "Built-in Commerce and Workflow Automation",
    description: "We integrate smart automation into your sales and operational workflows to streamline processes and boost productivity."
  },
  {
    title: "Multimodal AI (text, image, and voice)",
    description: "Our AI agents understand and respond across multiple formats, text, images, and voice, for more natural and engaging user experiences."
  },
  {
    title: "Scalable Cloud-Based Deployment",
    description: "Deploy your AI agents on a secure, scalable cloud infrastructure that grows with your business needs."
  },
  {
    title: "Secure Authentication & Access Control",
    description: "We ensure enterprise-grade security with robust authentication systems and controlled access to protect your business data."
  }
];

const industries = [
  {
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    title: "E-Commerce",
    description: "Smart product recommendations and shopping assistants",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: "Finance",
    description: "Automated data analysis and reporting",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-white" />,
    title: "Healthcare",
    description: "AI-powered scheduling and patient support",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    title: "Education",
    description: "Virtual tutors and student assistance agents",
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: "Real Estate",
    description: "Intelligent property search and recommendation systems",
  },
];

export default function AgentKitBuilder() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-light pb-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Your AI Agent Quickly with{" "}
              <span className="text-amber-600 ">AgentKit Builder</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Empower your business with next-generation AI automation. Build
              and deploy intelligent AI agents using OpenAI's AgentKit, the most
              advanced framework for real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" className="">
                Get Started
              </CTAButton>
              <CTAButton variant="secondary" href="#learn-more" className="">
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      {/* What is AgentKit Section */}
      <section
        id="learn-more"
        className="rounded-2xl relative bg-gradient-to-b from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12"
      >

        <div className="container-lg relative">
          <SectionHeader
            title="What Is AgentKit and Why It Matters"
            subtitle="AgentKit is OpenAI's innovative framework that enables developers to create intelligent agents capable of performing real tasks, connecting APIs, and managing workflows automatically."
            className="text-center mb-12"
          />

          {/* <div className=" p-0 max-w-6xl mx-auto rounded-2xl">
            <div className="grid md:grid-row-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  With AgentKit, you can:
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-solid border-orange-border p-5 rounded-lg">
               
                <img src="/landing/agentkit.png" alt="agentkit"/>
              </div>
            </div>
          </div> */}

          <div className="bg-white/80 backdrop-blur-sm px-8 py-12 rounded-2xl shadow-lg max-w-8xl mx-auto">
            <div className="grid md:grid-cols-[40%_55%] gap-12 items-center">
              {/* Benefits List */}
              <div className="space-y-8 px-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FF6400] to-[#FF9104] bg-clip-text text-transparent">
                  With AgentKit, you can:
                </h3>
                <ul className="space-y-5">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="flex-shrink-0 mr-4 mt-1">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#FF6400] to-[#FF9104] flex items-center justify-center">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Card */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6400] to-[#FF9104] rounded-xl opacity-20 blur-md  transition-all duration-500"></div>
                <div className="relative bg-white p-1 rounded-xl border border-orange-border overflow-hidden h-full">
                  <img
                    src="/landing/agentkit.png"
                    alt="AgentKit in Action"
                    className="w-full h-auto rounded-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0  transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="font-bold text-xl mb-2">Experience the Future of AI</h4>
                      <p className="text-white/90 text-sm">Discover how AgentKit can transform your workflow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-10 pt-20 pb-16 max-mobile:py-12 max-mobile:px-4">
        <div className="blue-line-bg rounded-[30px] max-mobile:rounded-xl py-20 max-mobile:py-12">
          <div className="container-lg">
            <SectionHeader
              titleClassName="text-white"
              headingClassName="text-white"
              subtitleClassName="text-white"
              title="Why Choose RejoiceHub as Your AI Agent Builder Partner"
              subtitle="We turn your automation goals into intelligent systems that work 24/7 for your success."
              className="text-center mb-12"
            />
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 items-center">
              <div className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]">
                <h3 className="text-2xl font-medium text-white mb-2.5">
                  End-to-End AgentKit Integration
                </h3>
                <p className="text-lg text-white-80 font-light">
                  From initial concept to final deployment, we handle every step
                  of the process with precision and expertise.
                </p>
              </div>
              <div className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]">
                <h3 className="text-2xl font-medium text-white mb-2.5">
                  Custom AI Architecture
                </h3>
                <p className="text-lg text-white-80 font-light">
                  We design AI solutions that align perfectly with your unique
                  business requirements and workflows.
                </p>
              </div>
              <div className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]">
                <h3 className="text-2xl font-medium text-white mb-2.5">
                  Secure API Handling
                </h3>
                <p className="text-lg text-white-80 font-light">
                  Your data security is our top priority, with enterprise-grade
                  encryption and compliance measures.
                </p>
              </div>
              <div className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]">
                <h3 className="text-2xl font-medium text-white mb-2.5">
                  Multimodal Capabilities
                </h3>
                <p className="text-lg text-white-80 font-light">
                  Create rich, interactive experiences with support for text,
                  images, and data-driven interactions.
                </p>
              </div>
              <div className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]">
                <h3 className="text-2xl font-medium text-white mb-2.5">
                  Continuous Optimization
                </h3>
                <p className="text-lg text-white-80 font-light">
                  We don't stop at deployment - we continuously monitor and
                  improve your AI agents' performance.
                </p>
              </div>
              <div className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]">
                <h3 className="text-2xl font-medium text-white mb-2.5">
                  Expert Support
                </h3>
                <p className="text-lg text-white-80 font-light">
                  Our team of AI experts is always available to help you get the
                  most out of your AI agents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-lg mb-16">
        <div className="rounded-2xl max-mobile:rounded-xl border border-[#FF5F011A] bg-gradient-to-r from-[rgba(255,93,1,0.1)] to-[rgba(255,149,4,0.1)] p-8 max-tab:p-5">
          <div className="flex items-center justify-between max-tab:grid max-tab:grid-cols-1 max-tab:gap-5">
            <div>
              <h2 className="text-2xl max-mobile:text-xl text-pretty font-medium mb-2.5 text-gradient-animated animate-fade-in-up">
                Ready to Build Your AI Agent?
              </h2>
              <p className="text-lg max-mobile:text-base  font-normal text-primary leading-6 animate-fade-in-up anim-delay-200">
                Schedule a free consultation with our AI experts to discuss how
                we can help you build and deploy custom AI agents for your
                business.
              </p>
            </div>
            <div className="flex items-center gap-3 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-2">
              <button
                className="py-[14px] px-6 max-mobile:justify-between text-base font-semibold cursor-pointer tracking-[0.4px] bg-gradient-to-r from-[#FF5C00] to-[#FF9504] rounded-full flex items-center gap-2 text-white"
                onClick={() =>
                  window.open("https://calendly.com/dipak-rejoicehub")
                }
              >
                Get Started with AgentKit
                <UpArrow stroke="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How We Build Section */}
      <section className="rounded-2xl relative bg-gradient-to-b from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">

        <div className="container-lg relative">
          <SectionHeader
            title="How We Build Your Custom AI Agent"
            subtitle="We follow a transparent and strategic process to ensure your AI agent is built with precision and purpose"
            className="text-center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-3 "
              >
                <div className="relative py-[30px] px-5 rounded-xl p-3  border border-solid border-orange-border transition-all duration-500 h-full overflow-hidden">
                  <div className="w-16 h-16 rounded-full border border-solid border-orange-border bg-[#FFF4EA]  flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-orange font-bold text-xl">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-primary line-clamp-1 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container-lg">
          <SectionHeader
            title="Key Features of RejoiceHub's AI Agent Builder Solutions"
            subtitle="Our AI agent builder platform helps businesses of all sizes achieve automation excellence, whether you need a simple task-based agent or a fully integrated enterprise solution."
            className="text-center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl p-5 max-mobile:rounded-lg max-mobile:p-3 border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                {/* <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" /> */}
                <div>
                  <h3 className="text-lg mt-3 font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="px-10 pb-20">
        <div className="blue-line-bg rounded-[30px] py-20 max-mobile:py-12">
          <div className="container-lg">
            <SectionHeader
              titleClassName="text-white"
              headingClassName="text-white"
              subtitleClassName="text-white"
              title="Industries We Serve"
              subtitle="We deliver industry-specific AI agent solutions that solve real-world problems"
              className="text-center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]"
                >
                  <div className="w-16 h-16 bg-gradient-to-b from-[#FF5E01] to-[#FF9404] rounded-full flex items-center justify-center mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2.5">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-white-80 font-light">
                    {industry.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 max-mobile:py-12 light-blue-line w-full bg-no-repeat bg-cover ">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Get Your Questions Answered"
            subtitle="Everything you need to know about our solution and implementation process"
          />
          <FAQ serviceId="agent-kit-builder" />
        </div>
      </section>
    </div>
  );
}
