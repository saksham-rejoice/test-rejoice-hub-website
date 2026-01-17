import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "~/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  serviceId?: string;
  className?: string;
}

const FAQ: React.FC<FAQProps> = ({ serviceId, className = "" }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Service-specific FAQs
  const serviceFAQs: { [key: string]: FAQItem[] } = {
    "ai-agents-services": [
      {
        question: "What industries can benefit from AI agents?",
        answer:
          "AI agents can be tailored for industries including HR, sales, IT, marketing, and finance. They streamline operations, reduce manual errors, and enhance productivity across various sectors.",
      },
      {
        question: "Do AI agents require technical expertise to manage?",
        answer:
          "No, our AI platform is user-friendly with no coding required. It features an intuitive dashboard, enabling businesses to easily manage and optimize their AI agents.",
      },
      {
        question: "Can AI agents integrate with existing software?",
        answer:
          "Absolutely. Our AI agents are designed to seamlessly integrate with existing tech stacks, including CRM, ERP, and other enterprise tools.",
      },
      {
        question: "How quickly can I deploy an AI agent?",
        answer:
          "Deployment is fast and can be completed in a matter of days, allowing businesses to start benefiting from AI automation immediately.",
      },
      {
        question: "What kind of ROI can I expect from AI agents?",
        answer:
          "Our clients typically see 30-50% cost reduction and 40%+ productivity improvements within the first 3-6 months of implementation.",
      },
    ],
    "generative-ai-development-services": [
      {
        question: "What generative AI models do you work with?",
        answer:
          "We work with leading models including GPT-4, Claude, Gemini, and custom fine-tuned models. We select the best model for your specific use case and requirements.",
      },
      {
        question: "How do you ensure the quality of AI-generated content?",
        answer:
          "We implement robust quality control processes, human oversight, and custom training to ensure AI-generated content meets your brand standards and accuracy requirements.",
      },
      {
        question: "Can you customize AI models for our specific needs?",
        answer:
          "Yes, we can fine-tune existing models or train custom models on your data to ensure they understand your industry, terminology, and specific requirements.",
      },
      {
        question:
          "What are the costs involved in generative AI implementation?",
        answer:
          "Costs vary based on complexity, but typically range from $5,000 to $50,000+ for custom implementations. We provide detailed cost breakdowns during consultation.",
      },
    ],
    "mobile-app-development-services": [
      {
        question: "Do you develop for both iOS and Android?",
        answer:
          "Yes, we develop native apps for both platforms as well as cross-platform solutions using React Native and Flutter for cost-effective development.",
      },
      {
        question: "How long does mobile app development take?",
        answer:
          "Development time varies from 8-16 weeks for a typical app, depending on complexity, features, and platform requirements.",
      },
      {
        question: "Do you provide app store submission support?",
        answer:
          "Yes, we handle the complete app store submission process including optimization, metadata preparation, and compliance requirements.",
      },
      {
        question: "What ongoing support do you provide after launch?",
        answer:
          "We offer ongoing maintenance, updates, bug fixes, and feature enhancements to ensure your app continues to perform optimally.",
      },
    ],
    "iot-development-services": [
      {
        question: "What types of IOT solutions do you develop?",
        answer:
          "We develop IOT solutions for smart homes, industrial automation, healthcare monitoring, environmental sensing, and connected devices across various industries.",
      },
      {
        question: "How do you ensure IOT security?",
        answer:
          "We implement industry-standard security protocols including encryption, secure authentication, regular updates, and compliance with security standards.",
      },
      {
        question: "Can you integrate IOT with existing systems?",
        answer:
          "Yes, we design IOT solutions that seamlessly integrate with your existing infrastructure, databases, and business systems.",
      },
      {
        question: "What hardware platforms do you support?",
        answer:
          "We work with various IOT platforms including Arduino, Raspberry Pi, ESP32, and custom hardware solutions based on your requirements.",
      },
    ],
    "devops-consulting-services": [
      {
        question: "What DevOps tools and technologies do you work with?",
        answer:
          "We work with leading DevOps tools including Docker, Kubernetes, Jenkins, GitLab CI/CD, AWS, Azure, and Google Cloud Platform.",
      },
      {
        question: "How do you assess our current DevOps maturity?",
        answer:
          "We conduct comprehensive assessments covering culture, processes, tools, and automation to identify improvement opportunities and create a roadmap.",
      },
      {
        question: "Do you provide training for our team?",
        answer:
          "Yes, we offer customized training programs to help your team adopt DevOps practices and tools effectively.",
      },
      {
        question: "How long does DevOps transformation take?",
        answer:
          "DevOps transformation typically takes 6-12 months depending on your current state, team size, and complexity of systems.",
      },
    ],
    "open-source-consulting": [
      {
        question: "What open source solutions do you recommend?",
        answer:
          "We recommend solutions based on your specific needs, considering factors like functionality, community support, security, and long-term viability.",
      },
      {
        question: "How do you ensure open source security?",
        answer:
          "We conduct security audits, monitor vulnerabilities, implement best practices, and provide ongoing security maintenance for open source solutions.",
      },
      {
        question: "Do you provide ongoing support for open source solutions?",
        answer:
          "Yes, we provide ongoing support, updates, maintenance, and troubleshooting for all open source solutions we implement.",
      },
      {
        question: "What are the cost benefits of open source?",
        answer:
          "Open source solutions typically reduce licensing costs by 60-80% while providing flexibility and avoiding vendor lock-in.",
      },
    ],
    "ui-ux-design-services": [
      {
        question: "What is your design process?",
        answer:
          "Our process includes research, wireframing, prototyping, user testing, and iterative design to ensure optimal user experience and business outcomes.",
      },
      {
        question: "Do you provide ongoing design support?",
        answer:
          "Yes, we offer ongoing design support including updates, new features, and design system maintenance to keep your product current and effective.",
      },
      {
        question: "How do you ensure accessibility compliance?",
        answer:
          "We follow WCAG guidelines and conduct accessibility audits to ensure our designs are usable by people with disabilities.",
      },
      {
        question: "What design tools do you use?",
        answer:
          "We use industry-standard tools including Figma, Sketch, Adobe Creative Suite, and prototyping tools to create high-quality designs.",
      },
    ],
    "digital-marketing-services": [
      {
        question: "What marketing channels do you specialize in?",
        answer:
          "We specialize in SEO, PPC, social media marketing, content marketing, email marketing, and conversion rate optimization across all major platforms.",
      },
      {
        question: "How do you measure marketing success?",
        answer:
          "We track key metrics including traffic, conversions, ROI, customer acquisition cost, and lifetime value to ensure measurable results.",
      },
      {
        question: "Do you provide ongoing optimization?",
        answer:
          "Yes, we provide continuous optimization including A/B testing, performance monitoring, and strategy refinements to maximize results.",
      },
      {
        question: "What industries do you have experience in?",
        answer:
          "We have experience across various industries including e-commerce, SaaS, healthcare, professional services, and more.",
      },
    ],
    "brand-design": [
      {
        question: "How long does a complete brand design project take?",
        answer:
          "A comprehensive brand design project typically takes 6-8 weeks from discovery to final delivery, depending on complexity and feedback cycles.",
      },
      {
        question: "What files and formats do you deliver?",
        answer:
          "We deliver all logo files in vector formats (AI, EPS, SVG), high-resolution PNG/JPG files, brand guidelines PDF, and source files for all design tools used.",
      },
      {
        question: "Do you provide ongoing brand support after the project?",
        answer:
          "Yes, we offer ongoing brand support including asset creation, brand training, and consultation to ensure consistent implementation.",
      },
      {
        question:
          "Can you help with brand implementation across different platforms?",
        answer:
          "Absolutely. We provide implementation guidance for websites, social media, print materials, and digital platforms to ensure brand consistency.",
      },
      {
        question: "What if I need revisions to the brand design?",
        answer:
          "We include multiple rounds of revisions in our process to ensure you're completely satisfied with the final brand identity.",
      },
    ],
    "user-research": [
      {
        question: "How many participants do you recommend for user research?",
        answer:
          "For usability testing, we typically recommend 5-8 participants per user segment. For surveys, 100+ responses provide statistically significant insights.",
      },
      {
        question: "What research methods do you use?",
        answer:
          "We use a mix of qualitative and quantitative methods including user interviews, surveys, usability testing, analytics analysis, and customer journey mapping.",
      },
      {
        question: "How long does a typical user research project take?",
        answer:
          "A comprehensive user research project typically takes 4-6 weeks from planning to final report delivery, depending on scope and complexity.",
      },
      {
        question: "Do you provide ongoing research support?",
        answer:
          "Yes, we offer ongoing research support including regular usability testing, user feedback collection, and continuous improvement recommendations.",
      },
      {
        question: "Can you help implement research findings into design?",
        answer:
          "Absolutely. We work closely with design teams to ensure research insights are effectively translated into design improvements and product enhancements.",
      },
    ],
    "digital-transformation": [
      {
        question: "How long does a digital transformation project take?",
        answer:
          "Digital transformation is typically a 12-24 month journey, depending on scope and complexity. We implement in phases to ensure business continuity and quick wins.",
      },
      {
        question: "What is the typical ROI of digital transformation?",
        answer:
          "Our clients typically see 200-400% ROI within 2-3 years through improved efficiency, cost reduction, and new revenue opportunities.",
      },
      {
        question: "How do you handle change management during transformation?",
        answer:
          "We provide comprehensive change management including training, communication strategies, and cultural transformation to ensure successful adoption.",
      },
      {
        question: "Can you work with existing legacy systems?",
        answer:
          "Absolutely. We specialize in modernizing legacy systems through gradual migration, ensuring business continuity while improving capabilities.",
      },
      {
        question:
          "What technologies do you recommend for digital transformation?",
        answer:
          "We recommend technologies based on your specific needs, including cloud platforms, AI/ML, IOT, data analytics, and automation tools.",
      },
    ],
    "ai-integration": [
      {
        question: "How long does AI integration take?",
        answer:
          "AI integration typically takes 6-12 weeks depending on system complexity and integration scope. We ensure minimal disruption to your operations.",
      },
      {
        question: "Can you integrate AI with legacy systems?",
        answer:
          "Yes, we specialize in integrating AI with legacy systems using modern APIs, data connectors, and custom adapters to ensure compatibility.",
      },
      {
        question: "Will AI integration disrupt our current operations?",
        answer:
          "No, we use a phased approach that minimizes disruption. AI features are added incrementally without affecting existing workflows.",
      },
      {
        question: "What types of AI can be integrated?",
        answer:
          "We can integrate various AI capabilities including machine learning, natural language processing, computer vision, and predictive analytics.",
      },
      {
        question: "How do you ensure data security during integration?",
        answer:
          "We implement enterprise-grade security measures including encryption, access controls, and compliance with data protection regulations.",
      },
    ],
    "ai-strategy-consulting": [
      {
        question: "How long does AI strategy development take?",
        answer:
          "AI strategy development typically takes 6-10 weeks including business assessment, strategy development, and technology planning phases.",
      },
      {
        question: "What is included in AI strategy consulting?",
        answer:
          "Our consulting includes business assessment, AI strategy development, technology roadmap, vendor selection guidance, and ROI framework creation.",
      },
      {
        question: "How do you measure AI strategy success?",
        answer:
          "We create a comprehensive ROI framework with clear KPIs and measurement methodologies to track strategy success and business impact.",
      },
      {
        question: "Can you help with AI strategy execution?",
        answer:
          "Yes, we provide ongoing support for strategy execution including implementation guidance, progress monitoring, and strategy refinement.",
      },
      {
        question: "What industries do you specialize in for AI strategy?",
        answer:
          "We have expertise across industries including financial services, healthcare, manufacturing, retail, technology, and energy sectors.",
      },
    ],
    "api-development": [
      {
        question: "How long does API development take?",
        answer:
          "API development typically takes 4-8 weeks depending on complexity, features, and integration requirements.",
      },
      {
        question: "What types of APIs do you develop?",
        answer:
          "We develop RESTful APIs, GraphQL APIs, microservices APIs, and custom APIs for various use cases and industries.",
      },
      {
        question: "How do you ensure API security?",
        answer:
          "We implement comprehensive security measures including authentication, authorization, rate limiting, data encryption, and regular security audits.",
      },
      {
        question: "Can you integrate APIs with existing systems?",
        answer:
          "Yes, we specialize in integrating APIs with existing systems, databases, and third-party services to ensure seamless connectivity.",
      },
      {
        question: "Do you provide API documentation and support?",
        answer:
          "Yes, we provide comprehensive API documentation, developer guides, and ongoing technical support for API maintenance and updates.",
      },
    ],
    "agent-kit-builder": [
      {
        question: "What is an AI Agent Builder?",
        answer:
          "An AI agent builder is a no-code solution for developing and launching intelligent agents. You can use AI agents to automate business processes or engage users.",
      },
      {
        question: "Why should I use Agent Kit Builder?",
        answer:
          "Agent Kit Builder is the quickest way to develop AI agents without any coding or technical expertise.",
      },
      {
        question: "Can I build an AI agent without coding?",
        answer:
          "Yes, you can quickly build and customize your AI agents and workflows with our drag-and-drop agent builder - no coding skills needed.",
      },
      {
        question: "What can I do with AI agents?",
        answer:
          "With AI agents, you can automate customer support, lead generation, HR onboarding, and marketing.",
      },
      {
        question: "Which platforms do AI agents work on?",
        answer:
          "Your AI agents can operate on the web, in mobile applications, in chat applications, and in business tools you already use.",
      },
    ],
    "chatgpt-ai-solutions": [
      {
        question: "What is ChatGPT customization for businesses?",
        answer: "It's about customizing ChatGPT's behavior, tone, and workflows for specific business purposes to enhance customer interactions and automate processes."
      },
      {
        question: "Can I build apps to extend ChatGPT?",
        answer: "Yes! RejoiceHub provides custom ChatGPT development services to build apps that add new functionality and capabilities to your AI assistant."
      },
      {
        question: "Can I enable commerce flows inside ChatGPT?",
        answer: "Certainly. We can implement secure payment processing and booking systems directly within the chat interface to facilitate transactions."
      },
      {
        question: "What security measures are in place?",
        answer: "We implement enterprise-grade security including encryption, SSO, and role-based access controls to protect your data and user information."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we provide continuous monitoring, regular updates, and performance optimization to ensure your AI solution keeps delivering value."
      }
    ],
    "vibe-coding-company": [

      {
        question: "What is Vibe Coding?",
        answer: "Vibe Coding is an AI-enhanced code development method that leverages automation, collaboration, and intelligent code production to build products quickly and efficiently."
      },
      {
        question: "Why should I use your Vibe Coding agency?",
        answer: "We are an experienced Vibe Coding development agency, building high-performing and scalable solutions using the latest tools and frameworks."
      },
      {
        question: "Do you offer consulting before development?",
        answer: "Yes. Our Vibe Coding consulting services will support you in defining what you want to achieve, scope your project timeline, and choose the right tools before the development process begins."
      },
      {
        question: "Can you integrate Vibe Coding with existing systems?",
        answer: "Absolutely! Our Vibe Coding development services can easily integrate with your current tech stack and legacy infrastructure."
      }

    ]
  };

  // Default FAQs for general services page
  const defaultFAQs: FAQItem[] = [
    {
      question: "What industries do you serve?",
      answer:
        "We serve clients across various industries including technology, healthcare, finance, e-commerce, education, and professional services. Our solutions are tailored to meet the unique needs of each industry.",
    },
    {
      question: "How do you ensure project quality and delivery?",
      answer:
        "We follow industry best practices, use agile methodologies, conduct regular quality checks, and maintain transparent communication throughout the project lifecycle to ensure successful delivery.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer flexible pricing models including project-based pricing, retainer agreements, and milestone-based payments. Pricing depends on project scope, complexity, and requirements.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we provide comprehensive ongoing support including maintenance, updates, monitoring, and optimization to ensure your solutions continue to perform optimally.",
    },
    {
      question: "How do you handle project communication and updates?",
      answer:
        "We maintain regular communication through scheduled meetings, progress reports, and real-time collaboration tools to keep you informed throughout the project.",
    },
    {
      question: "What technologies and tools do you use?",
      answer:
        "We use cutting-edge technologies and industry-standard tools including AI/ML frameworks, cloud platforms, development tools, and design software to deliver high-quality solutions.",
    },
  ];

  const faqs = serviceId ? serviceFAQs[serviceId] || defaultFAQs : defaultFAQs;

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [index]
    );
  };

  return (
    <div className={cn("max-w-4xl mx-auto", className)}>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-primary-300 rounded-2xl p-3.5">
            <div className="bg-primary-100 p-5 rounded-[14px] border border-primary-200 overflow-hidden transition-shadow duration-300">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-white text-left flex items-center justify-between  transition-colors duration-200 cursor-pointer"
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-white flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="pt-3">
                  <p className="text-lg text-light-text-90">{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
