import { MetaFunction } from "react-router";
import {
  MessageSquare,
  Zap,
  Code,
  Settings,
  ArrowRight,
  Check,
  Box,
  MessageCircle,
  GitBranch,
  BarChart,
  ZapIcon,
  Palette,
  Layers,
  ShoppingCart,
  Link2,
  Cpu,
  Shield,
  Headset,
  ShoppingBag,
  Users,
  BookOpen,
  HeartPulse,
  Briefcase,
} from "lucide-react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FAQ from "~/sections/home/faq";
export const meta: MetaFunction = () => [
  {
    title: "Custom ChatGPT Solutions | RejoiceHub - AI-Powered Chat Solutions",
  },
  {
    name: "description",
    content:
      "Custom ChatGPT development solutions to automate processes, enhance user engagement, and drive business growth with AI-powered chat experiences.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/services/chatgpt-customize-services`,
  },
];

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "Custom Chat Experiences",
    description:
      "Tailored AI chat solutions that match your brand voice and business needs.",
  },
  {
    icon: <Code className="w-6 h-6 text-white" />,
    title: "Seamless Integration",
    description: "Easy integration with your existing systems and workflows.",
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Rapid Deployment",
    description: "Quick setup and deployment of your custom ChatGPT solution.",
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: "Custom Development",
    description:
      "Bespoke AI solutions designed specifically for your business requirements.",
  },
];

const benefits = [
  "Automate customer support and reduce response times",
  "Enhance user engagement with intelligent conversations",
  "Streamline business processes with AI automation",
  "Gain valuable insights from customer interactions",
];

const customizationFeatures = [
  "Tailor the AI's tone, personality, and responses to match your brand",
  "Expand your ChatGPT's capabilities with custom applications",
  "Enable seamless transactions and bookings within chat interfaces",
  "Connect with CRMs, websites, and SaaS tools for a unified experience",
];

const featureData = [
  {
    icon: <Palette className="w-8 h-8 text-white" />,
    title: "Personalized AI Personality & Tone",
    description:
      "Ensure that ChatGPT's answers reflect your brand's style, professional, friendly, and educational.",
  },
  {
    icon: <Layers className="w-8 h-8 text-white" />,
    title: "Multi-Modal Capabilities",
    description:
      "Support text, image, and audio inputs for richer conversations.",
  },
  {
    icon: <Code className="w-8 h-8 text-white" />,
    title: "Build Apps to Extend ChatGPT",
    description:
      "Elevate your AI by including tailor-made apps for process automations and real-time data pulls.",
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    title: "Build Commerce Flows Within ChatGPT",
    description:
      "Transform dialog into action with checklist conversion flows to facilitate payment, sales, or bookings in chat.",
  },
  {
    icon: <Link2 className="w-8 h-8 text-white" />,
    title: "Third-Party App Integration",
    description:
      "Integrate ChatGPT with existing tools and systems such as Canva, Spotify, Zillow, or custom APIs.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-white" />,
    title: "Fine-Tuning & Training",
    description:
      "Train ChatGPT on your own data for context-specific and accurate answers.",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Enterprise-Grade Security",
    description:
      "Utilize SSO, encryption technology, and role-based access to keep your data secure.",
  },
];

const solutions = [
  "Smarter Conversations: Boost user interaction using smart responses.",
  "Automated Workflows: Minimize manual execution with AI.",
  "Revenue Opportunities: Increase sales with in-chat commerce flows.",
  "Scalable Solutions: Grow your AI as your business grows.",
  "Cost-Effective AI: Get custom ChatGPT development services without high costs.",
];

const useCases = [
  {
    icon: <Headset className="w-8 h-8 text-amber-600" />,
    title: "Customer Support",
    description: "Handle queries 24/7 with AI-powered assistance.",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-amber-600" />,
    title: "E-commerce & Sales",
    description: "Sell products directly in chat with commerce flows.",
  },
  {
    icon: <Users className="w-8 h-8 text-amber-600" />,
    title: "Lead Generation",
    description: "Qualify leads and automate outreach effectively.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-amber-600" />,
    title: "Education & Tutoring",
    description: "Offer personalized learning experiences at scale.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-amber-600" />,
    title: "Healthcare Assistance",
    description: "Book appointments and provide accurate information.",
  },
  {
    icon: <Briefcase className="w-8 h-8 text-amber-600" />,
    title: "Business Workflows",
    description: "Automate repetitive tasks and internal support.",
  },
];

const services = [
  {
    step: "1",
    title: "Consultation & Strategy",
    description:
      "We start by understanding your business goals, target audience, and specific requirements to create a tailored AI strategy.",
  },
  {
    step: "2",
    title: "AI Model Selection & Training",
    description:
      "We select and fine-tune the optimal AI model, training it on your data for context-specific performance.",
  },
  {
    step: "3",
    title: "Customization & Development",
    description:
      "We design the AI's personality, build custom apps, and integrate with your existing systems and workflows.",
  },
  {
    step: "4",
    title: "Testing & Optimization",
    description:
      "Rigorous testing ensures accuracy, performance, and alignment with your brand voice and requirements.",
  },
  {
    step: "5",
    title: "Launch & Continuous Support",
    description:
      "We deploy your AI solution and provide ongoing monitoring, updates, and optimizations.",
  },
];

export default function ChatAISolution() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-light pb-20 pt-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Customize Your ChatGPT with{" "}
              <span className="text-gradient">RejoiceHub's AI Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-10">
              We provide personalized ChatGPT development solutions to help
              companies automate processes, inspire or retain users, and foster
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" className="">
                Get Started
              </CTAButton>
              <CTAButton
                href="#customize"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50"
              >
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
              <div
                key={index}
                className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2"
              >
                <div className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6  h-full max-mobile:p-2">
                  <div className="text-white mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-white text-white">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white mt-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Custom ChatGPT Section */}
      <section
        id="customize"
        className=" relative bg-gradient-to-b from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12"
      >
       
        <div className="container-lg relative">
          <SectionHeader
            title="Integrate your Apps in ChatGPT with Rejoicehub"
            // subtitle="By collaborating with RejoiceHub, you are given more than just a chatbot - you are given a completely customized AI solution"
            className="text-center"
          />

          <div className="bg-white p-6 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Seamless ChatGPT Integration
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  With RejoiceHub, integrate your apps into ChatGPT and supercharge your business growth. Connect your apps directly into ChatGPT to streamline operations and automate workflows all through simple, natural conversation.
                </p>
                {/* <div className="flex flex-wrap gap-4 mt-8">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                    Get Started
                  </button>
                  <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div> */}
              </div>
              <div className="border border-solid border-orange-border p-5 rounded-lg">
                {/* <div className="border border-solid border-orange-border p-5 rounded-lg">
                  <div className="flex items-center mb-4 ">
                    <MessageCircle className="h-12 w-12 text-amber-600" />
                    <h4 className="text-lg font-semibold ml-3">
                      ChatGPT Customization
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Whether you'd like to improve customer support, enhance
                    sales, or build AI assistants tailored to your business, our
                    solutions will help apply ChatGPT to your unique needs.
                  </p>
                  <div className="flex justify-end">
                    <a
                      href="/contact"
                      className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
                    >
                      Get Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div> */}
                <img src="/landing/customizeChatgpt.png" alt="chatgpt" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features of Our Custom ChatGPT Development Services */}
      <section className="px-10 pt-20 pb-16">
        <div className="blue-line-bg rounded-[30px] py-20 max-mobile:py-12">
          <div className="container-lg">
            <SectionHeader
              titleClassName="text-white"
              headingClassName="text-white"
              subtitleClassName="text-white"
              title="Features of Our Custom ChatGPT Development Services"
              subtitle="Our Custom ChatGPT Development Services help you build AI-powered chat assistants tailored to your business needs"
              className="text-center "
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureData.map((feature, index) => (
                <div
                  key={index}
                  className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]"
                >
                  <div className="w-16 h-16 bg-gradient-to-b from-[#FF5E01] to-[#FF9404] rounded-full flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-white-80 font-light">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=""></div>
      </section>

      {/* Why Choose RejoiceHub */}
      <section className="relative bg-gradient-to-b from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
        <div className="container-lg">
          <SectionHeader
            title="Why Choose RejoiceHub for ChatGPT Customization for Businesses?"
            subtitle="Tailored AI, seamless integration, and expert support make your ChatGPT assistant truly business-ready."
            className="text-center mb-12"
          />

          <div className="bg-white p-6 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-8">
                  RejoiceHub helps businesses create personalized ChatGPT
                  solutions that boost efficiency, enhance customer engagement,
                  and automate workflows, all without technical hassle.
                </p>
                <ul className="space-y-5">
                  {solutions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-solid border-orange-border p-5 rounded-lg">
                <div className="border border-solid border-orange-border p-5 rounded-lg text-center">
                  <Zap className="h-6 w-6 text-amber-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-primary mb-6">
                    Transform your business with our custom ChatGPT solutions.
                    Schedule a free consultation today.
                  </p>
                  <CTAButton
                    href="/contact"
                    className="bg-amber-600 hover:bg-amber-700 text-white"
                  >
                    Contact Our Experts
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container-lg">
          <SectionHeader
            title="Use Cases of Custom ChatGPT Solutions"
            subtitle="Automate tasks, boost engagement, and deliver personalized experiences across industries"
            className="text-center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-2xl py-10 px-6 max-mobile:rounded-lg max-mobile:p-3 border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-medium text-primary mb-3">
                  {useCase.title}
                </h3>
                <p className="text-lg font-normal text-grey-600">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="px-10 pb-20 max-mobile:py-12 max-mobile:px-4">
        <div className="blue-line-bg rounded-[30px] py-20 max-mobile:py-12 max-mobile:rounded-xl">
          <div className="container-lg">
            <SectionHeader
              title="How We Deliver Custom ChatGPT Development Services"
              subtitle="Tailored AI solutions that align with your brand to enhance efficiency and growth"
              className="text-center"
              titleClassName="text-white"
              headingClassName="text-white"
              subtitleClassName="text-white"
            />
            <div className="grid grid-cols-3 gap-5 max-tab:grid-cols-2 max-mobile:grid-cols-1">
              {services.map((item) => (
                <div
                  key={item.step}
                  className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center text-lg font-bold mb-4">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-lg text-white-80 font-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-mobile:py-12 light-blue-line w-full bg-no-repeat bg-cover ">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Get Your Questions Answered"
            subtitle="Everything you need to know about our solution and implementation process"
          />
          <FAQ serviceId="services/chatgpt-customize-services" />
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our custom ChatGPT solutions can help you achieve your business goals.
          </p>
          <CTAButton href="/contact" size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
            Schedule a Free Consultation
          </CTAButton>
        </div>
      </section> */}
    </div>
  );
}
