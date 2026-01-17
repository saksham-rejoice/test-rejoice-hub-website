import { realpath } from "fs";
import { Banknote, Factory, GraduationCap, HeartPulse, Home, ShoppingCart } from "lucide-react";
import { he } from "zod/v4/locales";
import { ServiceContent } from "~/components/services/ServiceLayout";
const healthcare = "/assets/icons/Healthcare (1).svg"
const fianancialService = "/assets/icons/Financial Services.svg"
const Ecommerce = "/assets/icons/E-commerce.svg"
const Manufacturing = "/assets/icons/Manufacturing.svg"
const RealEstate = "/assets/icons/Real Estate.svg"
const Education = "/assets/icons/Education.svg"
const Marketing = "/assets/icons/MarketingAdvertising.svg"
const LegalService = "/assets/icons/legalService.svg"
const Logistics = "/assets/icons/Logistics.svg"
const EntertainmentMedia = "/assets/icons/Entertainment & Media.svg"
const Agriculture = "/assets/icons/Agriculture.svg"
const MobileApplications = "/assets/icons/Mobile Applications.svg"
const Energy = "/assets/icons/Energy.svg"
const ProfessionalServices = "/assets/icons/Professional Services.svg"
const NonProfitOrganizations = "/assets/icons/Non-Profit Organizations.svg"
const Technology = "/assets/icons/Technology.svg"
const IOTSmartDevices = "/assets/icons/IOT & Smart Devices.svg"
const EnterpriseSoftware = "/assets/icons/Enterprise Software.svg"




// Type for service content registry
export interface ServiceContentRegistry {
  [serviceId: string]: ServiceContent;
}

// Central registry of all service content
export const serviceContentRegistry: ServiceContentRegistry = {
  "ai-agents-services": {
    serviceId: "ai-agents-services",
    title: "Custom AI Agents & Intelligent Automation",
    subhead:
      "Build autonomous AI agents that work 24/7 to automate workflows, enhance customer experiences, and boost productivity by 40% or more.",
    problems: [
      {
        title: "Manual, Repetitive Tasks Consuming Resources",
        description:
          "Teams spend 60% of their time on repetitive tasks that could be automated, reducing focus on high-value strategic work.",
      },
      {
        title: "Inconsistent Customer Support Experiences",
        description:
          "Human-only support leads to inconsistent responses, long wait times, and 24/7 availability challenges.",
      },
      {
        title: "Data Processing Bottlenecks",
        description:
          "Manual data analysis and processing creates delays in decision-making and limits business agility.",
      },
      {
        title: "Scaling Operational Capacity Issues",
        description:
          "Growing demand requires proportional hiring increases, leading to unsustainable cost growth.",
      },
    ],
    outcomes: [
      {
        title: "Operational Efficiency Boost",
        description:
          "Automate routine tasks and workflows, freeing up your team for strategic initiatives.",
        metric: "40%+",
      },
      {
        title: "24/7 Intelligent Operations",
        description:
          "AI agents work around the clock, ensuring continuous productivity and customer support.",
        metric: "24/7",
      },
      {
        title: "Cost Reduction Achievement",
        description:
          "Significantly reduce operational costs while maintaining or improving service quality.",
        metric: "30-50%",
      },
      {
        title: "Response Time Improvement",
        description:
          "Instant AI responses for customer queries and internal process automation.",
        metric: "90%+",
      },
    ],
    capabilities: [
      {
        title: "Conversational AI Agents",
        description:
          "Advanced chatbots and virtual assistants powered by GPT-4 and custom language models.",
        features: [
          "Natural language processing",
          "Multi-channel deployment",
          "Custom training",
          "Integration APIs",
        ],
      },
      {
        title: "Workflow Automation Agents",
        description:
          "Intelligent process automation that handles complex business workflows end-to-end.",
        features: [
          "Process mining",
          "Decision trees",
          "Exception handling",
          "Audit trails",
        ],
      },
      {
        title: "Data Analysis Agents",
        description:
          "AI-powered data processing and insights generation for faster decision-making.",
        features: [
          "Real-time analytics",
          "Predictive modeling",
          "Report generation",
          "Anomaly detection",
        ],
      },
      {
        title: "Custom AI Solutions",
        description:
          "Tailored AI implementations designed specifically for your industry and use cases.",
        features: [
          "Industry expertise",
          "Custom algorithms",
          "Proprietary data training",
          "Scalable architecture",
        ],
      },
    ],
    industries: [
      {
        name: "Healthcare",
        icon: healthcare,
        outcome:
          "Automate patient scheduling, medical record processing, and treatment recommendations.",
      },
      {
        name: "Financial Services",
        icon: fianancialService,
        outcome:
          "Implement fraud detection, loan processing, and personalized financial advisory agents.",
      },
      {
        name: "E-commerce",
        icon: Ecommerce,
        outcome:
          "Deploy shopping assistants, inventory management, and personalized recommendation engines.",
      },
      {
        name: "Manufacturing",
        icon: Manufacturing,
        outcome:
          "Optimize supply chain management, quality control, and predictive maintenance systems.",
      },
      {
        name: "Real Estate",
        icon: RealEstate,
        outcome:
          "Automate lead qualification, property matching, and market analysis processes.",
      },
      {
        name: "Education",
        icon: Education,
        outcome:
          "Create personalized learning assistants and automated administrative workflows.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Analysis",
        description:
          "Deep dive into your workflows, pain points, and automation opportunities to design the perfect AI solution.",
        duration: "1-2 weeks",
        deliverables: [
          "Process audit report",
          "AI opportunity assessment",
          "Technical requirements",
          "Project roadmap",
        ],
      },
      {
        step: 2,
        title: "Design & Architecture",
        description:
          "Create detailed AI agent specifications, system architecture, and integration plans.",
        duration: "2-3 weeks",
        deliverables: [
          "AI agent specifications",
          "System architecture",
          "Integration blueprints",
          "UI/UX designs",
        ],
      },
      {
        step: 3,
        title: "Development & Training",
        description:
          "Build, train, and fine-tune your AI agents using your data and industry best practices.",
        duration: "4-8 weeks",
        deliverables: [
          "Custom AI agents",
          "Training datasets",
          "Integration APIs",
          "Testing results",
        ],
      },
      {
        step: 4,
        title: "Deployment & Optimization",
        description:
          "Deploy agents to production, monitor performance, and continuously optimize for maximum efficiency.",
        duration: "Ongoing",
        deliverables: [
          "Production deployment",
          "Monitoring dashboards",
          "Performance reports",
          "Optimization updates",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Healthcare System Automation",
        industry: "Healthcare",
        metric: "60%",
        result: "Reduction in Administrative Time",
        description:
          "Deployed AI agents for patient scheduling, medical record processing, and treatment recommendations, allowing healthcare professionals to focus more on patient care.",
      },
      {
        title: "E-commerce Customer Support",
        industry: "E-commerce",
        metric: "85%",
        result: "Customer Query Resolution",
        description:
          "Implemented intelligent customer support agents that handle product inquiries, order tracking, and returns processing with human-level accuracy.",
      },
      {
        title: "Financial Services Automation",
        industry: "FinTech",
        metric: "$2.5M",
        result: "Annual Cost Savings",
        description:
          "Automated loan processing, fraud detection, and customer onboarding processes, reducing processing time from days to minutes.",
      },
    ],
    techStack: [
      { name: "GPT-4", category: "AI/ML", logo: "/assets/icons/gpt4.svg" },
      { name: "Claude", category: "AI/ML", logo: "/assets/icons/claude.svg" },
      { name: "LangChain", category: "AI/ML", logo: "/assets/icons/lungchain.svg" },
      { name: "TensorFlow", category: "AI/ML", logo: "/assets/icons/tensorFlow.svg" },
      { name: "PyTorch", category: "AI/ML", logo: "/assets/icons/pyTorch.svg" },
      { name: "AWS", category: "Cloud", logo: "/assets/icons/aws.svg" },
      { name: "Google Cloud", category: "Cloud", logo: "/assets/icons/GoogleCloud.svg" },
      { name: "MongoDB", category: "Database", logo: "/assets/icons/MongoDB.svg" },
      { name: "PostgreSQL", category: "Database", logo: "/assets/icons/postgresql.svg" },
      { name: "React", category: "Framework", logo: "/assets/icons/reactjs.svg" },
      { name: "Node.js", category: "Framework", logo: "/assets/icons/NodeJS.svg" },
      { name: "FastAPI", category: "Framework", logo: "/assets/icons/FastAPI.svg" },
    ],
    pricingNotes: {
      model: "Custom Development Engagement",
      description:
        "Pricing varies based on complexity, integration requirements, and ongoing support needs. Most projects start with a discovery phase to provide accurate estimates.",
      startingPrice: "$25,000",
      features: [
        "Comprehensive discovery and analysis phase",
        "Custom AI agent development and training",
        "Full system integration and deployment",
        "3 months of optimization and support",
        "Performance monitoring and analytics",
        "Team training and documentation",
        "Ongoing maintenance and updates",
        "Priority technical support",
      ],
    },
    faqs: [
      {
        question:
          "How long does it take to develop and deploy custom AI agents?",
        answer:
          "Most AI agent projects take 6-12 weeks from discovery to deployment, depending on complexity and integration requirements. We provide detailed timelines during the discovery phase.",
      },
      {
        question: "Can AI agents integrate with our existing business systems?",
        answer:
          "Yes, our AI agents are designed to integrate seamlessly with existing CRM, ERP, database, and workflow systems through APIs and custom connectors.",
      },
      {
        question: "What kind of data is needed to train the AI agents?",
        answer:
          "We work with your existing data including historical conversations, process documentation, transaction records, and business rules. We also help identify and collect additional data if needed.",
      },
      {
        question: "How do you ensure AI agent accuracy and reliability?",
        answer:
          "We implement rigorous testing, validation frameworks, human oversight mechanisms, and continuous monitoring to maintain high accuracy rates above 95%.",
      },
      {
        question: "What ongoing support do you provide after deployment?",
        answer:
          "We provide 3 months of optimization support, performance monitoring, regular updates, and team training. Extended support packages are available for ongoing maintenance.",
      },
    ],
    primaryCTA: {
      text: "Get Free AI Agent Consultation",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
        secondaryCTA: {
          text: "View AI Agent Demos",
          href: "/resources/case-studies",
          type: "link",
        },
    seoTitle: "Custom AI Agents & Automation Services | RejoiceHub",
    seoDescription:
      "Build intelligent AI agents that automate workflows, enhance customer experiences, and boost productivity by 40%+. Custom development with enterprise-grade security.",
    leadMagnetIds: ["ai-agent-blueprint", "automation-roi-calculator"],
    relatedServices: ["automation-services", "generative-ai-solutions"],
  },

  "generative-ai-development-services": {
    serviceId: "generative-ai-development-services",
    title: "Generative AI Development & Integration Services",
    subhead:
      "Harness the power of GPT, Claude, and custom AI models to create intelligent content, automate workflows, and transform customer experiences with cutting-edge generative AI solutions.",
    problems: [
      {
        title: "Content Creation Bottlenecks",
        description:
          "Teams spend countless hours creating content, documentation, and communications that could be generated instantly.",
      },
      {
        title: "Limited Personalization at Scale",
        description:
          "Difficulty creating personalized experiences for thousands of customers without massive resource investment.",
      },
      {
        title: "Complex Data Analysis Requirements",
        description:
          "Need for advanced insights from unstructured data that traditional analytics tools cannot handle.",
      },
      {
        title: "Innovation and Competitive Pressure",
        description:
          "Falling behind competitors who are leveraging AI to create superior products and experiences.",
      },
    ],
    outcomes: [
      {
        title: "Content Generation Speed",
        description:
          "Generate high-quality content, documentation, and communications 100x faster than manual methods.",
        metric: "100x",
      },
      {
        title: "Personalization at Scale",
        description:
          "Create personalized experiences for millions of users automatically.",
        metric: "Unlimited",
      },
      {
        title: "Operational Efficiency Gain",
        description:
          "Reduce time spent on creative and analytical tasks by up to 80%.",
        metric: "80%",
      },
      {
        title: "Innovation Acceleration",
        description:
          "Rapidly prototype and deploy AI-powered features and products.",
        metric: "5x",
      },
    ],
    capabilities: [
      {
        title: "Custom Language Models",
        description:
          "Fine-tuned AI models trained on your specific data, industry knowledge, and business requirements.",
        features: [
          "Custom model training",
          "Domain-specific knowledge",
          "Brand voice alignment",
          "Proprietary data integration",
        ],
      },
      {
        title: "Content Generation Systems",
        description:
          "Automated content creation for marketing, documentation, communications, and creative assets.",
        features: [
          "Multi-format content",
          "Brand consistency",
          "SEO optimization",
          "Quality control",
        ],
      },
      {
        title: "Conversational AI Platforms",
        description:
          "Advanced chatbots and virtual assistants powered by latest generative AI models.",
        features: [
          "Natural conversations",
          "Context awareness",
          "Multi-language support",
          "Integration APIs",
        ],
      },
      {
        title: "AI-Powered Analytics",
        description:
          "Extract insights from unstructured data using generative AI for reports, summaries, and recommendations.",
        features: [
          "Document analysis",
          "Trend identification",
          "Automated reporting",
          "Predictive insights",
        ],
      },
    ],
    industries: [
      {
        name: "Marketing & Advertising",
        icon : Marketing,
        outcome:
          "Generate personalized campaigns, ad copy, and content at scale across all channels.",
      },
      {
        name: "E-commerce",
        icon : Ecommerce,
        outcome:
          "Create product descriptions, personalized recommendations, and dynamic pricing strategies.",
      },
      {
        name: "Education",
        icon : Education,
        outcome:
          "Develop personalized learning content, automated grading, and intelligent tutoring systems.",
      },
      {
        name: "Healthcare",
        icon : healthcare,
        outcome:
          "Generate medical documentation, patient communications, and research summaries.",
      },
      {
        name: "Legal Services",
        icon : LegalService,
        outcome:
          "Automate contract analysis, legal research, and document generation.",
      },
      {
        name: "Financial Services",
        icon : fianancialService,
        outcome:
          "Create personalized financial advice, risk assessments, and compliance reports.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "AI Strategy & Assessment",
        description:
          "Evaluate your data, use cases, and requirements to design the optimal generative AI strategy.",
        duration: "1-2 weeks",
        deliverables: [
          "AI readiness assessment",
          "Use case prioritization",
          "Data audit",
          "ROI projections",
        ],
      },
      {
        step: 2,
        title: "Model Selection & Customization",
        description:
          "Choose and fine-tune the best AI models for your specific requirements and data.",
        duration: "2-4 weeks",
        deliverables: [
          "Model selection report",
          "Custom training datasets",
          "Fine-tuned models",
          "Performance benchmarks",
        ],
      },
      {
        step: 3,
        title: "Development & Integration",
        description:
          "Build production-ready applications and integrate them with your existing systems.",
        duration: "4-8 weeks",
        deliverables: [
          "AI applications",
          "API integrations",
          "User interfaces",
          "Testing results",
        ],
      },
      {
        step: 4,
        title: "Deployment & Optimization",
        description:
          "Deploy to production with monitoring, feedback loops, and continuous model improvement.",
        duration: "Ongoing",
        deliverables: [
          "Production deployment",
          "Monitoring systems",
          "Performance analytics",
          "Model updates",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Product Content",
        industry: "E-commerce",
        metric: "95%",
        result: "Reduction in Content Creation Time",
        description:
          "Implemented AI system that generates product descriptions, SEO content, and marketing copy, reducing content creation time from hours to seconds.",
      },
      {
        title: "Healthcare Documentation",
        industry: "Healthcare",
        metric: "70%",
        result: "Faster Clinical Documentation",
        description:
          "Deployed AI-powered documentation system that generates patient summaries, treatment plans, and medical reports from clinical notes.",
      },
      {
        title: "Legal Document Analysis",
        industry: "Legal",
        metric: "$800K",
        result: "Annual Cost Savings",
        description:
          "Automated contract analysis and legal research, reducing lawyer hours spent on document review by 60% while improving accuracy.",
      },
    ],
    techStack: [
      { name: "GPT-4", category: "AI/ML", logo: "/assets/icons/gpt4.svg" },
      { name: "Claude", category: "AI/ML", logo: "/assets/icons/claude.svg" },
      { name: "LangChain", category: "AI/ML", logo: "/assets/icons/lungchain.svg" },
      { name: "TensorFlow", category: "AI/ML", logo: "/assets/icons/tensorFlow.svg" },
      { name: "PyTorch", category: "AI/ML", logo: "/assets/icons/pyTorch.svg" },
      { name: "AWS", category: "Cloud", logo: "/assets/icons/aws.svg" },
      { name: "Google Cloud", category: "Cloud", logo: "/assets/icons/GoogleCloud.svg" },
      { name: "MongoDB", category: "Database", logo: "/assets/icons/MongoDB.svg" },
      { name: "PostgreSQL", category: "Database", logo: "/assets/icons/postgresql.svg" },
      { name: "React", category: "Framework", logo: "/assets/icons/reactjs.svg" },
      { name: "Node.js", category: "Framework", logo: "/assets/icons/NodeJS.svg" },
      { name: "FastAPI", category: "Framework", logo: "/assets/icons/FastAPI.svg" },
    ],
    pricingNotes: {
      model: "Custom AI Development",
      description:
        "Pricing based on model complexity, training requirements, and integration scope. Most projects include model training, development, and 6 months of optimization.",
      startingPrice: "$30,000",
      features: [
        "Comprehensive AI strategy and assessment",
        "Custom model selection and fine-tuning",
        "Production-ready application development",
        "Full system integration and APIs",
        "6 months of monitoring and optimization",
        "Team training and knowledge transfer",
        "Ongoing model performance improvement",
        "Priority support and maintenance",
      ],
    },
    faqs: [
      {
        question: "What types of generative AI models do you work with?",
        answer:
          "We work with all major models including GPT-4, Claude, Gemini, Mistral, and can fine-tune open-source models like Llama for specific use cases and data requirements.",
      },
      {
        question:
          "How do you ensure the AI-generated content aligns with our brand?",
        answer:
          "We fine-tune models on your brand guidelines, style guides, and existing content to ensure consistent voice, tone, and messaging across all AI-generated materials.",
      },
      {
        question:
          "Can you integrate generative AI with our existing business systems?",
        answer:
          "Yes, we create seamless integrations with CRM, CMS, marketing platforms, and other business systems through APIs and custom connectors.",
      },
      {
        question:
          "What measures do you take to ensure AI-generated content quality?",
        answer:
          "We implement multi-layer quality control including human-in-the-loop validation, automated quality checks, fact verification, and continuous feedback mechanisms.",
      },
      {
        question:
          "How long does it take to develop and deploy generative AI solutions?",
        answer:
          "Most projects take 6-12 weeks from strategy to deployment, depending on complexity, data preparation requirements, and integration scope.",
      },
    ],
    primaryCTA: {
      text: "Get Free AI Strategy Consultation",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "View AI Case Studies",
      href: "/resources/case-studies",
      type: "link",
    },
    seoTitle:
      "Generative AI Development Services | Custom AI Solutions | RejoiceHub",
    seoDescription:
      "Transform your business with custom generative AI solutions. GPT-4, Claude & custom model development for content generation, automation & intelligent workflows.",
    leadMagnetIds: ["ai-strategy-guide", "generative-ai-roi-calculator"],
    relatedServices: ["ai-agents-services", "automation-services"],
  },

  "mobile-app-development-services": {
    serviceId: "mobile-app-development-services",
    title: "Mobile App Development Services & Solutions",
    subhead:
      "Build scalable, custom mobile apps for Android, iOS, and cross-platform using Flutter and React Native. Help your business grow and engage customers with modern, high-performance applications.",
    problems: [
      {
        title: "Poor Mobile User Experience",
        description:
          "Businesses struggle with mobile apps that are slow, buggy, or provide inconsistent user experiences across different devices.",
      },
      {
        title: "Cross-Platform Development Complexity",
        description:
          "Managing separate codebases for iOS and Android increases development time, costs, and maintenance overhead.",
      },
      {
        title: "Outdated Technology Stack",
        description:
          "Legacy mobile applications built with outdated frameworks struggle with performance and modern device compatibility.",
      },
      {
        title: "Scalability and Performance Issues",
        description:
          "Apps that cannot handle growing user bases or integrate with business systems limit growth potential.",
      },
    ],
    outcomes: [
      {
        title: "Development Speed Increase",
        description:
          "Cross-platform development reduces time-to-market by building once for multiple platforms.",
        metric: "50%",
      },
      {
        title: "User Engagement Boost",
        description:
          "Modern, intuitive apps increase user retention and daily active users.",
        metric: "75%",
      },
      {
        title: "Maintenance Cost Reduction",
        description:
          "Single codebase for multiple platforms significantly reduces ongoing maintenance costs.",
        metric: "60%",
      },
      {
        title: "Performance Optimization",
        description:
          "Native-like performance with faster load times and smooth user interactions.",
        metric: "3x",
      },
    ],
    capabilities: [
      {
        title: "Cross-Platform Development",
        description:
          "Build once, deploy everywhere with Flutter and React Native for maximum efficiency.",
        features: [
          "Flutter development",
          "React Native apps",
          "Code sharing",
          "Platform optimization",
        ],
      },
      {
        title: "Native iOS & Android Development",
        description:
          "Platform-specific development for maximum performance and native feature integration.",
        features: [
          "Swift/Objective-C",
          "Kotlin/Java",
          "Native APIs",
          "Platform guidelines",
        ],
      },
      {
        title: "Backend Integration & APIs",
        description:
          "Seamless integration with existing systems, databases, and third-party services.",
        features: [
          "REST APIs",
          "GraphQL",
          "Database integration",
          "Cloud services",
        ],
      },
      {
        title: "UI/UX Design & Development",
        description:
          "User-centered design with intuitive interfaces and optimized user experiences.",
        features: [
          "User research",
          "Wireframing",
          "Prototyping",
          "Usability testing",
        ],
      },
    ],
    industries: [
      {
        name: "E-commerce & Retail",
        icon : Ecommerce,
        outcome:
          "Build shopping apps with payment integration, inventory management, and customer engagement features.",
      },
      {
        name: "Healthcare & Fitness",
        icon : healthcare,
        outcome:
          "Develop patient portals, telemedicine apps, and health tracking applications with HIPAA compliance.",
      },
      {
        name: "Finance & FinTech",
        icon : fianancialService,

        outcome:
          "Create secure banking apps, payment systems, and financial management tools with encryption.",
      },
      {
        name: "Education & E-learning",
        icon : Education,
        
        outcome:
          "Build interactive learning platforms, course management, and student engagement applications.",
      },
      {
        name: "Transportation & Logistics",
        icon : Logistics,

        outcome:
          "Develop fleet management, delivery tracking, and route optimization mobile solutions.",
      },
      {
        name: "Entertainment & Media",
        icon : EntertainmentMedia,
        outcome:
          "Create streaming apps, social platforms, and content management solutions.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "Requirements analysis, user research, technical planning, and project roadmap development.",
        duration: "1-2 weeks",
        deliverables: [
          "Requirements document",
          "User personas",
          "Technical architecture",
          "Project timeline",
        ],
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "UI/UX design, wireframing, interactive prototypes, and user experience optimization.",
        duration: "2-3 weeks",
        deliverables: [
          "Design mockups",
          "Interactive prototypes",
          "Design system",
          "User flow diagrams",
        ],
      },
      {
        step: 3,
        title: "Development & Testing",
        description:
          "App development, backend integration, quality assurance, and performance optimization.",
        duration: "6-12 weeks",
        deliverables: [
          "Mobile applications",
          "Backend APIs",
          "Test reports",
          "Performance benchmarks",
        ],
      },
      {
        step: 4,
        title: "Deployment & Support",
        description:
          "App store submission, deployment, user training, and ongoing maintenance support.",
        duration: "Ongoing",
        deliverables: [
          "App store listings",
          "Deployment guide",
          "User documentation",
          "Support plan",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Mobile App Platform",
        industry: "Retail",
        metric: "200%",
        result: "Increase in Mobile Sales",
        description:
          "Developed cross-platform shopping app with personalized recommendations, payment integration, and inventory management, resulting in doubled mobile conversion rates.",
      },
      {
        title: "Healthcare Patient Portal App",
        industry: "Healthcare",
        metric: "85%",
        result: "Patient Engagement Increase",
        description:
          "Built HIPAA-compliant patient portal with appointment scheduling, medical records access, and telemedicine capabilities, improving patient satisfaction significantly.",
      },
      {
        title: "FinTech Banking Application",
        industry: "Finance",
        metric: "90%",
        result: "Faster Transaction Processing",
        description:
          "Created secure mobile banking app with biometric authentication, real-time transactions, and financial analytics, reducing transaction processing time by 90%.",
      },
    ],
    techStack: [
      { name: "Flutter", category: "Framework",logo : "/assets/icons/flutter.svg" },
      { name: "React Native", category: "Framework",logo : "/assets/icons/reactjs.svg" },
      { name: "Swift", category: "iOS",logo : "/assets/icons/swift.svg" },
      { name: "Kotlin", category: "Android",logo : "/assets/icons/kotlin.svg" },
      { name: "Firebase", category: "Backend",logo : "/assets/icons/firebase.svg" },
      { name: "AWS Amplify", category: "Backend",logo : "/assets/icons/aws.svg" },
      { name: "Node.js", category: "Backend",logo : "/assets/icons/NodeJS.svg" },
      { name: "PostgreSQL", category: "Database",logo : "/assets/icons/postgresql.svg" },
      { name: "MongoDB", category: "Database",logo : "/assets/icons/MongoDB.svg" },
      { name: "Docker", category: "DevOps",logo : "/assets/icons/Docker.svg" },
      { name: "Jenkins", category: "DevOps",logo : "/assets/icons/jenkins.svg"  },
      { name: "Fastlane", category: "DevOps",logo : "/assets/icons/fastlane.svg"  },
    ],
    pricingNotes: {
      model: "Fixed-Price Mobile Development",
      description:
        "Transparent pricing based on app complexity, platform requirements, and feature set. Most projects include design, development, testing, and deployment.",
      startingPrice: "$15,000",
      features: [
        "Complete app discovery and planning phase",
        "UI/UX design and interactive prototypes",
        "Cross-platform or native app development",
        "Backend development and API integration",
        "Quality assurance and performance testing",
        "App store submission and deployment",
        "3 months of post-launch support and updates",
        "Training and documentation delivery",
      ],
    },
    faqs: [
      {
        question:
          "Should I choose native development or cross-platform for my mobile app?",
        answer:
          "Cross-platform (Flutter/React Native) is ideal for faster development and cost efficiency. Native development is better for apps requiring platform-specific features or maximum performance. We recommend based on your specific requirements.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "Development time varies: simple apps take 2-3 months, complex apps take 4-6 months. Timeline depends on features, platforms, integrations, and design complexity. We provide detailed timelines after requirements analysis.",
      },
      {
        question:
          "Do you provide ongoing maintenance and updates after app launch?",
        answer:
          "Yes, we offer comprehensive post-launch support including bug fixes, OS updates, feature enhancements, performance monitoring, and app store compliance. Support packages are tailored to your needs.",
      },
      {
        question:
          "Can you integrate the mobile app with our existing business systems?",
        answer:
          "Absolutely! We specialize in integrating mobile apps with CRM, ERP, databases, payment systems, and third-party APIs. Our backend development ensures seamless data flow between systems.",
      },
      {
        question: "What platforms and devices do you develop apps for?",
        answer:
          "We develop for iOS (iPhone/iPad), Android phones/tablets, and cross-platform solutions. Our apps are tested across multiple device sizes and OS versions to ensure compatibility and performance.",
      },
    ],
    primaryCTA: {
      text: "Get Free App Consultation",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "View App Portfolio",
      href: "/resources/case-studies",
      type: "link",
    },
    seoTitle:
      "Mobile App Development Services | iOS & Android Apps | RejoiceHub",
    seoDescription:
      "Professional mobile app development services for iOS, Android & cross-platform. Build scalable, custom apps with Flutter, React Native & native technologies.",
    leadMagnetIds: ["mobile-app-strategy-guide", "app-cost-calculator"],
    relatedServices: ["ui-ux-design-services", "web-development-services"],
  },

  "iot-development-services": {
    serviceId: "iot-development-services",
    title: "IOT Development Services & Smart Solutions",
    subhead:
      "Simplify your operations and connect your business like never before. Our IOT solutions help you work smarter, save time, and make better decisions with real-time insights and intelligent automation.",
    problems: [
      {
        title: "Disconnected Business Operations",
        description:
          "Manual processes and isolated systems prevent real-time visibility into operations, inventory, and performance metrics.",
      },
      {
        title: "Inefficient Resource Management",
        description:
          "Lack of real-time monitoring leads to energy waste, equipment downtime, and suboptimal resource utilization.",
      },
      {
        title: "Limited Data Collection and Analysis",
        description:
          "Businesses miss opportunities for optimization due to insufficient data collection from physical assets and environments.",
      },
      {
        title: "Reactive Maintenance Approach",
        description:
          "Equipment failures and maintenance issues are addressed reactively, leading to costly downtime and repairs.",
      },
    ],
    outcomes: [
      {
        title: "Operational Efficiency Gain",
        description:
          "Real-time monitoring and automation reduce manual oversight and optimize operations.",
        metric: "40%",
      },
      {
        title: "Energy Cost Reduction",
        description:
          "Smart energy management and automated controls significantly reduce utility costs.",
        metric: "35%",
      },
      {
        title: "Predictive Maintenance Savings",
        description:
          "Preventive maintenance based on IOT data reduces equipment downtime and repair costs.",
        metric: "50%",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Real-time analytics and insights enable faster, more informed business decisions.",
        metric: "5x",
      },
    ],
    capabilities: [
      {
        title: "Industrial IOT Solutions",
        description:
          "Smart manufacturing, equipment monitoring, and industrial automation systems.",
        features: [
          "Machine monitoring",
          "Production analytics",
          "Quality control",
          "Supply chain optimization",
        ],
      },
      {
        title: "Smart Building & Facility Management",
        description:
          "Intelligent building systems for energy management, security, and environmental control.",
        features: [
          "HVAC automation",
          "Smart lighting",
          "Security systems",
          "Space optimization",
        ],
      },
      {
        title: "Fleet & Asset Tracking",
        description:
          "Real-time tracking and management of vehicles, equipment, and valuable assets.",
        features: [
          "GPS tracking",
          "Route optimization",
          "Fuel monitoring",
          "Maintenance scheduling",
        ],
      },
      {
        title: "Environmental Monitoring",
        description:
          "Smart sensors for air quality, temperature, humidity, and environmental compliance.",
        features: [
          "Sensor networks",
          "Data logging",
          "Alert systems",
          "Compliance reporting",
        ],
      },
    ],
    industries: [
      {
        name: "Manufacturing",
        icon : Manufacturing,
        outcome:
          "Implement smart factory solutions with predictive maintenance, quality control, and production optimization.",
      },
      {
        name: "Healthcare",
        icon : healthcare,
        outcome:
          "Deploy patient monitoring, medical equipment tracking, and smart healthcare facility management.",
      },
      {
        name: "Agriculture",
        icon :  Agriculture,
        outcome:
          "Create precision farming solutions with soil monitoring, irrigation control, and crop management.",
      },
      {
        name: "Transportation & Logistics",
        icon : Logistics,
        outcome:
          "Build fleet management, cargo tracking, and smart logistics optimization systems.",
      },
      {
        name: "Smart Cities",
        icon : MobileApplications,
        outcome:
          "Develop traffic management, waste monitoring, and urban infrastructure optimization solutions.",
      },
      {
        name: "Energy & Utilities",
        icon : Energy ,
        outcome:
          "Implement smart grid monitoring, energy optimization, and utility management systems.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "IOT Strategy & Assessment",
        description:
          "Evaluate current infrastructure, identify IOT opportunities, and develop implementation strategy.",
        duration: "1-2 weeks",
        deliverables: [
          "IOT readiness assessment",
          "Use case identification",
          "ROI analysis",
          "Implementation roadmap",
        ],
      },
      {
        step: 2,
        title: "Solution Design & Architecture",
        description:
          "Design IOT architecture, select sensors and devices, and plan connectivity and data flow.",
        duration: "2-3 weeks",
        deliverables: [
          "System architecture",
          "Device specifications",
          "Connectivity plan",
          "Security framework",
        ],
      },
      {
        step: 3,
        title: "Development & Integration",
        description:
          "Develop IOT applications, integrate devices, and build analytics and visualization platforms.",
        duration: "6-10 weeks",
        deliverables: [
          "IOT applications",
          "Device integration",
          "Analytics platform",
          "Mobile/web dashboards",
        ],
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description:
          "Deploy IOT infrastructure, provide training, and establish ongoing monitoring and support.",
        duration: "Ongoing",
        deliverables: [
          "Production deployment",
          "User training",
          "Monitoring setup",
          "Support documentation",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Smart Manufacturing Plant",
        industry: "Manufacturing",
        metric: "45%",
        result: "Reduction in Downtime",
        description:
          "Implemented comprehensive IOT monitoring system for production equipment, enabling predictive maintenance and real-time performance optimization.",
      },
      {
        title: "Smart Building Energy Management",
        industry: "Real Estate",
        metric: "30%",
        result: "Energy Cost Savings",
        description:
          "Deployed intelligent HVAC and lighting control systems with occupancy sensors, resulting in significant energy savings and improved comfort.",
      },
      {
        title: "Fleet Management Solution",
        industry: "Transportation",
        metric: "25%",
        result: "Fuel Cost Reduction",
        description:
          "Built comprehensive fleet tracking and optimization system with route planning, fuel monitoring, and maintenance scheduling.",
      },
    ],
    techStack: [
      { name: "Arduino", category: "Hardware" },
      { name: "Raspberry Pi", category: "Hardware" },
      { name: "ESP32", category: "Hardware" },
      { name: "AWS IOT Core", category: "Cloud", logo: "/assets/icons/aws.svg" },
      { name: "Azure IOT Hub", category: "Cloud", logo: "/assets/icons/Azure.svg" },
      { name: "Google Cloud IOT", category: "Cloud", logo: "/assets/icons/GoogleCloud.svg" },
      { name: "MQTT", category: "Protocol" },
      { name: "LoRaWAN", category: "Protocol" },
      { name: "Node.js", category: "Backend", logo: "/assets/icons/NodeJS.svg" },
      { name: "Python", category: "Backend", logo: "/assets/icons/python.svg" },
      { name: "InfluxDB", category: "Database" },
      { name: "Grafana", category: "Analytics" },
    ],
    pricingNotes: {
      model: "Scalable IOT Implementation",
      description:
        "Flexible pricing based on number of devices, complexity of sensors, data processing requirements, and cloud infrastructure needs.",
      startingPrice: "$20,000",
      features: [
        "Comprehensive IOT strategy and assessment",
        "Custom sensor and device integration",
        "Cloud platform setup and configuration",
        "Real-time analytics and visualization",
        "Mobile and web dashboard development",
        "Security implementation and monitoring",
        "6 months of technical support and optimization",
        "Training and knowledge transfer",
      ],
    },
    faqs: [
      {
        question: "What types of IOT sensors and devices do you work with?",
        answer:
          "We work with a wide range of sensors including temperature, humidity, motion, pressure, GPS, cameras, and custom sensors. We support Arduino, Raspberry Pi, ESP32, and industrial-grade IOT devices.",
      },
      {
        question: "How do you ensure IOT data security and privacy?",
        answer:
          "We implement end-to-end encryption, secure device authentication, regular security updates, and compliance with industry standards like ISO 27001 and data protection regulations.",
      },
      {
        question:
          "Can IOT solutions integrate with our existing business systems?",
        answer:
          "Yes, we design IOT solutions to integrate seamlessly with ERP, CRM, SCADA, and other business systems through APIs and standard protocols for unified data management.",
      },
      {
        question: "What connectivity options are available for IOT devices?",
        answer:
          "We support WiFi, Ethernet, cellular (4G/5G), LoRaWAN, Zigbee, Bluetooth, and satellite connectivity depending on range, power, and data requirements of your application.",
      },
      {
        question: "How scalable are your IOT solutions?",
        answer:
          "Our IOT architectures are designed for scalability, supporting everything from pilot projects with dozens of devices to enterprise deployments with thousands of connected sensors and devices.",
      },
    ],
    primaryCTA: {
      text: "Get IOT Consultation",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "View IOT Case Studies",
      href: "/resources/case-studies",
      type: "link",
    },
    seoTitle:
      "IOT Development Services | Smart Solutions & Device Integration | RejoiceHub",
    seoDescription:
      "Professional IOT development services for smart manufacturing, building automation, and connected device solutions. Custom IOT applications with real-time analytics.",
    leadMagnetIds: ["iot-strategy-guide", "iot-roi-calculator"],
    relatedServices: [
      "web-development-services",
      "mobile-app-development-services",
    ],
  },

  "web-development-services": {
    serviceId: "web-development-services",
    title: "Web Development Services & Digital Solutions",
    subhead:
      "Boost your online presence with expert web development services tailored to your business needs. Get a stunning, responsive website that drives conversions and engages your audience.",
    problems: [
      {
        title: "Outdated Website Design and Functionality",
        description:
          "Old websites that look unprofessional, load slowly, and provide poor user experiences hurt business credibility and conversions.",
      },
      {
        title: "Poor Mobile Responsiveness",
        description:
          "Websites that don't work well on mobile devices lose potential customers and hurt search engine rankings.",
      },
      {
        title: "Low Search Engine Visibility",
        description:
          "Poorly optimized websites struggle to rank on Google and other search engines, limiting organic traffic and growth.",
      },
      {
        title: "Lack of Integration with Business Systems",
        description:
          "Websites that don't integrate with CRM, e-commerce, or other business tools create operational inefficiencies.",
      },
    ],
    outcomes: [
      {
        title: "Conversion Rate Improvement",
        description:
          "Modern, optimized websites significantly increase visitor-to-customer conversion rates.",
        metric: "150%",
      },
      {
        title: "Search Traffic Increase",
        description:
          "SEO-optimized websites attract more organic traffic from search engines.",
        metric: "200%",
      },
      {
        title: "Page Load Speed Enhancement",
        description:
          "Performance-optimized websites load faster, improving user experience and SEO.",
        metric: "3x",
      },
      {
        title: "Mobile User Engagement",
        description:
          "Responsive design ensures excellent user experience across all devices.",
        metric: "80%",
      },
    ],
    capabilities: [
      {
        title: "Custom Website Development",
        description:
          "Tailored websites built with modern technologies for optimal performance and user experience.",
        features: [
          "Responsive design",
          "Performance optimization",
          "SEO implementation",
          "Security measures",
        ],
      },
      {
        title: "E-commerce Development",
        description:
          "Complete online store solutions with payment integration, inventory management, and customer analytics.",
        features: [
          "Shopping cart",
          "Payment gateways",
          "Inventory tracking",
          "Order management",
        ],
      },
      {
        title: "Content Management Systems",
        description:
          "User-friendly CMS solutions that allow easy content updates and website management.",
        features: [
          "WordPress",
          "Custom CMS",
          "Content workflows",
          "User permissions",
        ],
      },
      {
        title: "Web Applications",
        description:
          "Complex web applications with advanced functionality, user authentication, and data management.",
        features: [
          "User dashboards",
          "Database integration",
          "API development",
          "Real-time features",
        ],
      },
    ],
    industries: [
      {
        name: "E-commerce & Retail",
        icon : Ecommerce,
        outcome:
          "Build online stores with advanced features, payment integration, and inventory management systems.",
      },
      {
        name: "Healthcare & Medical",
        icon : healthcare,
        outcome:
          "Develop patient portals, appointment booking systems, and HIPAA-compliant medical websites.",
      },
      {
        name: "Real Estate",
        icon : RealEstate,
        outcome:
          "Create property listing websites, virtual tour integration, and lead generation systems.",
      },
      {
        name: "Education & E-learning",
        icon : Education,
        outcome:
          "Build learning management systems, course platforms, and educational content delivery.",
      },
      {
        name: "Professional Services",
        icon : ProfessionalServices,
        outcome:
          "Develop service booking systems, client portals, and professional showcase websites.",
      },
      {
        name: "Non-Profit Organizations",
        icon : NonProfitOrganizations,
        outcome:
          "Create donation platforms, volunteer management, and community engagement websites.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Planning",
        description:
          "Requirements gathering, competitor analysis, user research, and technical planning.",
        duration: "1-2 weeks",
        deliverables: [
          "Project requirements",
          "Site architecture",
          "Technical specifications",
          "Project timeline",
        ],
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "UI/UX design, wireframing, visual design, and interactive prototypes.",
        duration: "2-3 weeks",
        deliverables: [
          "Design mockups",
          "Style guide",
          "Interactive prototypes",
          "Design approval",
        ],
      },
      {
        step: 3,
        title: "Development & Integration",
        description:
          "Frontend and backend development, CMS setup, third-party integrations, and testing.",
        duration: "4-8 weeks",
        deliverables: [
          "Functional website",
          "CMS setup",
          "Integrations",
          "Quality testing",
        ],
      },
      {
        step: 4,
        title: "Launch & Optimization",
        description:
          "Website deployment, SEO setup, performance optimization, and ongoing support.",
        duration: "Ongoing",
        deliverables: [
          "Live website",
          "SEO setup",
          "Analytics configuration",
          "Maintenance plan",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        industry: "Retail",
        metric: "180%",
        result: "Increase in Online Sales",
        description:
          "Redesigned and optimized e-commerce website with improved user experience, faster checkout, and mobile optimization, resulting in significant sales growth.",
      },
      {
        title: "Professional Services Website",
        industry: "Consulting",
        metric: "250%",
        result: "Lead Generation Increase",
        description:
          "Developed modern, SEO-optimized website with lead capture forms, service showcases, and client testimonials, dramatically increasing qualified leads.",
      },
      {
        title: "Healthcare Patient Portal",
        industry: "Healthcare",
        metric: "90%",
        result: "Patient Satisfaction Score",
        description:
          "Built comprehensive patient portal with appointment booking, medical records access, and telemedicine integration, improving patient experience significantly.",
      },
    ],
    techStack: [
      { name: "GPT-4", category: "AI/ML", logo: "/assets/icons/gpt4.svg" },
      { name: "Claude", category: "AI/ML", logo: "/assets/icons/claude.svg" },
      { name: "LangChain", category: "AI/ML", logo: "/assets/icons/lungchain.svg" },
      { name: "TensorFlow", category: "AI/ML", logo: "/assets/icons/tensorFlow.svg" },
      { name: "PyTorch", category: "AI/ML", logo: "/assets/icons/pyTorch.svg" },
      { name: "AWS", category: "Cloud", logo: "/assets/icons/aws.svg" },
      { name: "Google Cloud", category: "Cloud", logo: "/assets/icons/GoogleCloud.svg" },
      { name: "MongoDB", category: "Database", logo: "/assets/icons/MongoDB.svg" },
      { name: "PostgreSQL", category: "Database", logo: "/assets/icons/postgresql.svg" },
      { name: "React", category: "Framework", logo: "/assets/icons/reactjs.svg" },
      { name: "Node.js", category: "Framework", logo: "/assets/icons/NodeJS.svg" },
      { name: "FastAPI", category: "Framework", logo: "/assets/icons/FastAPI.svg" },

    ],
    pricingNotes: {
      model: "Project-Based Web Development",
      description:
        "Transparent pricing based on website complexity, features, and design requirements. Most projects include design, development, testing, and launch.",
      startingPrice: "$8,000",
      features: [
        "Complete website discovery and planning",
        "Custom UI/UX design and prototyping",
        "Responsive frontend and backend development",
        "Content management system setup",
        "SEO optimization and performance tuning",
        "Third-party integrations and APIs",
        "3 months of post-launch support and updates",
        "Training and documentation delivery",
      ],
    },
    faqs: [
      {
        question: "How long does it take to build a custom website?",
        answer:
          "Timeline varies based on complexity: simple websites take 4-6 weeks, complex sites take 8-12 weeks. E-commerce and custom applications may take longer. We provide detailed timelines after requirements analysis.",
      },
      {
        question: "Will my website be mobile-friendly and responsive?",
        answer:
          "Yes, all our websites are built with responsive design to ensure optimal viewing and functionality across all devices including smartphones, tablets, and desktops.",
      },
      {
        question: "Do you provide website hosting and domain services?",
        answer:
          "We can help with hosting recommendations and setup, but we typically recommend clients manage their own hosting for better control. We provide guidance on selecting reliable hosting providers.",
      },
      {
        question:
          "Can you integrate my website with existing business systems?",
        answer:
          "Absolutely! We specialize in integrating websites with CRM systems, e-commerce platforms, payment processors, email marketing tools, and other business applications through APIs.",
      },
      {
        question: "What ongoing maintenance and support do you provide?",
        answer:
          "We offer comprehensive maintenance packages including security updates, content updates, performance monitoring, backup management, and technical support tailored to your needs.",
      },
    ],
    primaryCTA: {
      text: "Get Free Website Consultation",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "View Website Portfolio",
      href: "/resources/case-studies",
      type: "link",
    },
    seoTitle:
      "Web Development Services | Custom Websites & E-commerce | RejoiceHub",
    seoDescription:
      "Professional web development services for custom websites, e-commerce platforms, and web applications. Responsive design, SEO optimization, and modern technologies.",
    leadMagnetIds: ["website-strategy-guide", "web-cost-calculator"],
    relatedServices: [
      "ui-ux-design-services",
      "mobile-app-development-services",
    ],
  },

  "ui-ux-design-services": {
    serviceId: "ui-ux-design-services",
    title: "UI/UX Design Services & User Experience Consulting",
    subhead:
      "Deliver innovative UI and UX design services to help businesses build interactive, user-centric websites and mobile apps that engage users and drive conversions.",
    problems: [
      {
        title: "Poor User Experience and Low Engagement",
        description:
          "Confusing navigation, cluttered interfaces, and poor usability lead to high bounce rates and low user engagement.",
      },
      {
        title: "Inconsistent Brand Experience",
        description:
          "Lack of design consistency across platforms creates confusion and weakens brand recognition and trust.",
      },
      {
        title: "Low Conversion Rates",
        description:
          "Poorly designed user flows and interfaces fail to guide users toward desired actions, resulting in lost opportunities.",
      },
      {
        title: "Accessibility and Usability Issues",
        description:
          "Designs that don't consider accessibility standards and diverse user needs exclude potential customers and users.",
      },
    ],
    outcomes: [
      {
        title: "User Engagement Increase",
        description:
          "Intuitive, user-centered designs significantly improve user engagement and time spent on platform.",
        metric: "120%",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "Strategic UX design optimizes user flows to increase conversions and goal completions.",
        metric: "85%",
      },
      {
        title: "User Satisfaction Improvement",
        description:
          "Well-designed interfaces and experiences lead to higher user satisfaction and retention.",
        metric: "90%",
      },
      {
        title: "Development Efficiency Gain",
        description:
          "Clear design systems and prototypes reduce development time and iteration cycles.",
        metric: "40%",
      },
    ],
    capabilities: [
      {
        title: "User Research & Analysis",
        description:
          "Comprehensive user research to understand target audiences, behaviors, and pain points.",
        features: [
          "User interviews",
          "Surveys & analytics",
          "Persona development",
          "Journey mapping",
        ],
      },
      {
        title: "UI/UX Design & Prototyping",
        description:
          "Creating intuitive interfaces and seamless user experiences through design and prototyping.",
        features: [
          "Wireframing",
          "Visual design",
          "Interactive prototypes",
          "Design systems",
        ],
      },
      {
        title: "Usability Testing & Optimization",
        description:
          "Testing designs with real users to identify issues and optimize for better performance.",
        features: [
          "User testing",
          "A/B testing",
          "Heatmap analysis",
          "Conversion optimization",
        ],
      },
      {
        title: "Design Systems & Guidelines",
        description:
          "Creating comprehensive design systems for consistent, scalable, and maintainable designs.",
        features: [
          "Component libraries",
          "Style guides",
          "Brand guidelines",
          "Design tokens",
        ],
      },
    ],
    industries: [
      {
        name: "E-commerce & Retail",
        icon : Ecommerce,
        outcome:
          "Design intuitive shopping experiences with optimized checkout flows and product discovery.",
      },
      {
        name: "FinTech & Banking",
        icon : MobileApplications,
        outcome:
          "Create secure, trustworthy interfaces for financial applications with seamless user onboarding.",
      },
      {
        name: "Healthcare & MedTech",
        icon : healthcare,
        outcome:
          "Design patient-centered interfaces that simplify complex healthcare processes and improve outcomes.",
      },
      {
        name: "SaaS & Technology",
        icon : Technology,
        outcome:
          "Build user-friendly dashboards and interfaces that reduce learning curves and increase adoption.",
      },
      {
        name: "Education & E-learning",
        icon : Education,
        outcome:
          "Design engaging learning experiences that improve student outcomes and course completion rates.",
      },
      {
        name: "Entertainment & Media",
        icon : EntertainmentMedia,
        outcome:
          "Create immersive, engaging interfaces for content consumption and social interaction.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Research & Discovery",
        description:
          "User research, competitive analysis, and requirement gathering to inform design strategy.",
        duration: "1-2 weeks",
        deliverables: [
          "User research report",
          "Competitive analysis",
          "User personas",
          "Project requirements",
        ],
      },
      {
        step: 2,
        title: "Strategy & Architecture",
        description:
          "Information architecture, user flows, and design strategy development.",
        duration: "1-2 weeks",
        deliverables: [
          "Site map",
          "User flows",
          "Design strategy",
          "Content strategy",
        ],
      },
      {
        step: 3,
        title: "Design & Prototyping",
        description:
          "Wireframing, visual design, and interactive prototype creation.",
        duration: "3-4 weeks",
        deliverables: [
          "Wireframes",
          "Visual designs",
          "Interactive prototypes",
          "Design system",
        ],
      },
      {
        step: 4,
        title: "Testing & Refinement",
        description:
          "User testing, feedback collection, and design refinement based on insights.",
        duration: "1-2 weeks",
        deliverables: [
          "Test results",
          "Design iterations",
          "Final designs",
          "Implementation guide",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce UX Redesign",
        industry: "Retail",
        metric: "160%",
        result: "Conversion Rate Increase",
        description:
          "Redesigned e-commerce platform with improved product discovery, streamlined checkout, and mobile optimization, resulting in significant conversion improvements.",
      },
      {
        title: "SaaS Dashboard Optimization",
        industry: "Technology",
        metric: "75%",
        result: "User Adoption Increase",
        description:
          "Simplified complex SaaS dashboard with better information hierarchy, clearer navigation, and improved onboarding flow, leading to higher user adoption.",
      },
      {
        title: "Healthcare App Interface",
        industry: "Healthcare",
        metric: "95%",
        result: "User Satisfaction Score",
        description:
          "Designed patient-friendly mobile app interface with intuitive navigation, clear information display, and accessibility features for diverse user needs.",
      },
    ],
    techStack: [
      { name: "Figma", category: "Design", logo: "/assets/icons/figma.svg" },
      { name: "Adobe XD", category: "Design" },
      { name: "Sketch", category: "Design" },
      { name: "InVision", category: "Prototyping" },
      { name: "Principle", category: "Prototyping" },
      { name: "Framer", category: "Prototyping" },
      { name: "Miro", category: "Collaboration" },
      { name: "Hotjar", category: "Analytics" },
      { name: "Google Analytics", category: "Analytics" },
      { name: "Maze", category: "Testing" },
      { name: "UserTesting", category: "Testing" },
      { name: "Optimal Workshop", category: "Research" },
    ],
    pricingNotes: {
      model: "Design Project Packages",
      description:
        "Flexible pricing based on project scope, complexity, and deliverables. Most projects include research, design, prototyping, and testing phases.",
      startingPrice: "$5,000",
      features: [
        "Comprehensive user research and analysis",
        "Information architecture and user flows",
        "Custom UI/UX design and prototyping",
        "Design system and component library",
        "Usability testing and optimization",
        "Developer handoff with specifications",
        "2 rounds of revisions included",
        "Design file ownership and documentation",
      ],
    },
    faqs: [
      {
        question: "What's the difference between UI and UX design?",
        answer:
          "UX (User Experience) focuses on overall user journey, research, and functionality, while UI (User Interface) focuses on visual design, layout, and interactive elements. Both are essential for successful digital products.",
      },
      {
        question: "How do you ensure designs work for our target audience?",
        answer:
          "We conduct thorough user research including interviews, surveys, and analytics analysis to understand your audience. We also create user personas and test designs with real users to validate our approach.",
      },
      {
        question: "Do you provide designs for both web and mobile platforms?",
        answer:
          "Yes, we design for all platforms including responsive websites, mobile apps (iOS/Android), tablets, and desktop applications. We ensure consistent experience across all touchpoints.",
      },
      {
        question: "How do you handle design revisions and feedback?",
        answer:
          "We include structured revision rounds in our process and use collaborative tools like Figma for real-time feedback. We work closely with your team to ensure designs meet your vision and requirements.",
      },
      {
        question: "Do you provide design files and assets for development?",
        answer:
          "Yes, we provide complete design files, asset exports, style guides, and detailed specifications for developers. We also offer developer handoff sessions to ensure smooth implementation.",
      },
    ],
    primaryCTA: {
      text: "Get Design Consultation",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "View Design Portfolio",
      href: "/resources/case-studies",
      type: "link",
    },
    seoTitle: "UI/UX Design Services | User Experience Consulting | RejoiceHub",
    seoDescription:
      "Professional UI/UX design services for websites and mobile apps. User research, interface design, prototyping, and usability testing for better user experiences.",
    leadMagnetIds: ["ux-design-checklist", "design-audit-tool"],
    relatedServices: [
      "web-development-services",
      "mobile-app-development-services",
    ],
  },

  "automation-services": {
    serviceId: "automation-services",
    title: "Business Process Automation & Workflow Intelligence",
    subhead:
      "Streamline operations with intelligent automation that reduces manual work, eliminates errors, and scales your business without proportional cost increases.",
    problems: [
      {
        title: "Time-Consuming Manual Processes",
        description:
          "Critical business processes require excessive manual intervention, creating bottlenecks and reducing operational efficiency.",
      },
      {
        title: "Human Error in Repetitive Tasks",
        description:
          "Manual data entry and processing leads to costly errors, compliance issues, and inconsistent outcomes.",
      },
      {
        title: "Difficulty Scaling Operations",
        description:
          "Growing business demands require proportional increases in staff, making growth expensive and unsustainable.",
      },
      {
        title: "Lack of Process Visibility",
        description:
          "Poor visibility into workflow status, bottlenecks, and performance metrics limits optimization opportunities.",
      },
    ],
    outcomes: [
      {
        title: "Processing Speed Increase",
        description:
          "Automate routine tasks to complete processes 10x faster than manual methods.",
        metric: "10x",
      },
      {
        title: "Error Rate Reduction",
        description:
          "Eliminate human errors in data processing and repetitive tasks.",
        metric: "99%+",
      },
      {
        title: "Operational Cost Savings",
        description:
          "Reduce operational costs while maintaining or improving service quality.",
        metric: "30-60%",
      },
      {
        title: "Scalability Without Linear Costs",
        description:
          "Handle increased volume without proportional staff increases.",
        metric: "5x",
      },
    ],
    capabilities: [
      {
        title: "Robotic Process Automation (RPA)",
        description:
          "Automate repetitive tasks across multiple systems and applications.",
        features: [
          "Screen scraping",
          "Data extraction",
          "System integration",
          "Exception handling",
        ],
      },
      {
        title: "Workflow Orchestration",
        description:
          "Design and implement intelligent workflows that adapt to business rules and conditions.",
        features: [
          "Business rules engine",
          "Conditional logic",
          "Approval workflows",
          "Escalation management",
        ],
      },
      {
        title: "Document Processing",
        description:
          "Intelligent document analysis, data extraction, and automated processing.",
        features: [
          "OCR technology",
          "Data validation",
          "Classification",
          "Archive management",
        ],
      },
      {
        title: "Integration & APIs",
        description:
          "Connect disparate systems and create seamless data flows across your organization.",
        features: [
          "API development",
          "System connectors",
          "Data synchronization",
          "Real-time updates",
        ],
      },
    ],
    industries: [
      {
        name: "Banking & Finance",
        outcome:
          "Automate loan processing, compliance reporting, and customer onboarding workflows.",
      },
      {
        name: "Insurance",
        outcome:
          "Streamline claims processing, policy management, and risk assessment procedures.",
      },
      {
        name: "Healthcare",
        outcome:
          "Automate patient registration, billing processes, and medical record management.",
      },
      {
        name: "Manufacturing",
        outcome:
          "Optimize supply chain, inventory management, and quality control processes.",
      },
      {
        name: "Retail",
        outcome:
          "Automate order processing, inventory updates, and customer service workflows.",
      },
      {
        name: "Government",
        outcome:
          "Streamline permit processing, compliance reporting, and citizen service workflows.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Process Discovery",
        description:
          "Comprehensive analysis of current workflows to identify automation opportunities and ROI potential.",
        duration: "1-2 weeks",
        deliverables: [
          "Process maps",
          "Automation assessment",
          "ROI analysis",
          "Implementation roadmap",
        ],
      },
      {
        step: 2,
        title: "Solution Design",
        description:
          "Design automation workflows, system integrations, and user interfaces for optimal efficiency.",
        duration: "2-3 weeks",
        deliverables: [
          "Workflow designs",
          "Technical specifications",
          "Integration plans",
          "UI mockups",
        ],
      },
      {
        step: 3,
        title: "Development & Integration",
        description:
          "Build and test automation solutions with your existing systems and data sources.",
        duration: "4-6 weeks",
        deliverables: [
          "Automation bots",
          "System integrations",
          "Testing results",
          "Documentation",
        ],
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description:
          "Deploy solutions to production with comprehensive monitoring and continuous optimization.",
        duration: "Ongoing",
        deliverables: [
          "Production deployment",
          "Monitoring setup",
          "Performance metrics",
          "Optimization reports",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Insurance Claims Processing",
        industry: "Insurance",
        metric: "75%",
        result: "Faster Claims Processing",
        description:
          "Automated end-to-end claims processing workflow, reducing processing time from 5 days to 6 hours while improving accuracy and customer satisfaction.",
      },
      {
        title: "Banking Loan Approval",
        industry: "Banking",
        metric: "90%",
        result: "Reduction in Processing Time",
        description:
          "Implemented automated loan approval system that processes applications, verifies documents, and makes approval decisions in minutes instead of days.",
      },
      {
        title: "Manufacturing Quality Control",
        industry: "Manufacturing",
        metric: "$1.2M",
        result: "Annual Cost Savings",
        description:
          "Automated quality control processes and defect detection, reducing manual inspection time and improving product quality consistency.",
      },
    ],
    techStack: [
      { name: "UiPath", category: "Integration" },
      { name: "Blue Prism", category: "Integration" },
      { name: "Microsoft Power Automate", category: "Integration" },
      { name: "Zapier", category: "Integration" },
      { name: "Apache Airflow", category: "Framework",logo : "/assets/icons/apachespark.svg" },
      { name: "Python", category: "Framework",logo : "/assets/icons/python.svg" },
      { name: "Node.js", category: "Framework",logo : "/assets/icons/NodeJS.svg" },
      { name: "AWS Lambda", category: "Cloud",logo : "/assets/icons/aws.svg" },
      { name: "Azure Functions", category: "Cloud",logo : "/assets/icons/Azure.svg" },
      { name: "PostgreSQL", category: "Database",logo : "/assets/icons/postgresql.svg" },
      { name: "Redis", category: "Database",logo : "/assets/icons/redis.svg" },
      { name: "Docker", category: "DevOps" ,logo : "/assets/icons/docker.svg"},
    ],
    pricingNotes: {
      model: "ROI-Based Automation Packages",
      description:
        "Our pricing is designed to ensure positive ROI within 6 months. We offer flexible packages based on process complexity and expected savings.",
      startingPrice: "$15,000",
      features: [
        "Comprehensive process analysis and ROI assessment",
        "Custom automation development and testing",
        "Full system integration and deployment",
        "6 months of monitoring and optimization",
        "Training for your team on automation management",
        "Detailed performance analytics and reporting",
        "Priority support and maintenance",
        "Quarterly process review and optimization",
      ],
    },
    faqs: [
      {
        question: "Which business processes are best suited for automation?",
        answer:
          "Ideal processes are repetitive, rule-based, high-volume, and involve data transfer between systems. Examples include data entry, invoice processing, report generation, and approval workflows.",
      },
      {
        question: "How quickly can we see ROI from automation investments?",
        answer:
          "Most clients see positive ROI within 3-6 months. The exact timeline depends on process complexity and volume, but we design solutions to achieve payback as quickly as possible.",
      },
      {
        question: "Will automation replace our existing staff?",
        answer:
          "Automation typically augments staff by eliminating repetitive tasks, allowing employees to focus on higher-value work. We help you redeploy resources to more strategic activities.",
      },
      {
        question:
          "How do you handle exceptions and edge cases in automated processes?",
        answer:
          "We design robust exception handling mechanisms that can route unusual cases to human review, log exceptions for analysis, and continuously improve automation rules.",
      },
      {
        question: "What ongoing maintenance do automated processes require?",
        answer:
          "Automated processes require minimal maintenance, mainly monitoring performance and updating rules as business requirements change. We provide ongoing support and optimization services.",
      },
    ],
    primaryCTA: {
      text: "Get Free Process Automation Assessment",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download Automation ROI Calculator",
      href: "#lead-magnet-automation-roi",
      type: "link",
    },
    seoTitle: "Business Process Automation Services | RejoiceHub",
    seoDescription:
      "Streamline operations with intelligent automation. Reduce costs by 30-60%, eliminate errors, and scale without proportional staff increases.",
    leadMagnetIds: [
      "automation-roi-calculator",
      "process-automation-checklist",
    ],
    relatedServices: ["ai-agents-services", "custom-ai-integrations"],
  },

  "generative-ai-solutions": {
    serviceId: "generative-ai-solutions",
    title: "Generative AI Solutions & Content Intelligence",
    subhead:
      "Harness the power of GPT, Claude, and custom models to create content, analyze data, and enhance customer experiences with cutting-edge AI technology.",
    problems: [
      {
        title: "Content Creation Bottlenecks",
        description:
          "Manual content creation is time-consuming, expensive, and struggles to keep pace with market demands and customer expectations.",
      },
      {
        title: "Inconsistent Brand Voice",
        description:
          "Multiple content creators lead to inconsistent messaging, tone, and quality across different channels and campaigns.",
      },
      {
        title: "Data Analysis Limitations",
        description:
          "Large volumes of unstructured data remain untapped due to limited analysis capabilities and resource constraints.",
      },
      {
        title: "Personalization at Scale Challenges",
        description:
          "Creating personalized experiences for thousands of customers manually is impossible without significant resource investment.",
      },
    ],
    outcomes: [
      {
        title: "Content Production Speed",
        description:
          "Generate high-quality content 10x faster than traditional methods.",
        metric: "10x",
      },
      {
        title: "Content Creation Cost Reduction",
        description:
          "Dramatically reduce content creation costs while maintaining quality.",
        metric: "70%",
      },
      {
        title: "Personalization Scale",
        description:
          "Deliver personalized experiences to unlimited customer segments.",
        metric: "Unlimited",
      },
      {
        title: "Data Processing Capability",
        description:
          "Analyze and extract insights from massive datasets in real-time.",
        metric: "100x",
      },
    ],
    capabilities: [
      {
        title: "Content Generation & Optimization",
        description:
          "AI-powered content creation for marketing, documentation, and customer communications.",
        features: [
          "Blog posts & articles",
          "Marketing copy",
          "Product descriptions",
          "Technical documentation",
        ],
      },
      {
        title: "Conversational AI Development",
        description:
          "Advanced chatbots and virtual assistants with natural language understanding.",
        features: [
          "GPT-4 integration",
          "Custom training",
          "Multi-language support",
          "Context awareness",
        ],
      },
      {
        title: "Data Analysis & Insights",
        description:
          "Extract meaningful insights from unstructured data using advanced AI models.",
        features: [
          "Document analysis",
          "Sentiment analysis",
          "Trend identification",
          "Predictive insights",
        ],
      },
      {
        title: "Custom Model Development",
        description:
          "Fine-tuned AI models specifically trained for your industry and use cases.",
        features: [
          "Domain-specific training",
          "Proprietary datasets",
          "Performance optimization",
          "Continuous learning",
        ],
      },
    ],
    industries: [
      {
        name: "Marketing Agencies",
        outcome:
          "Generate compelling content, ad copy, and campaign materials at scale.",
      },
      {
        name: "E-learning",
        outcome:
          "Create educational content, assessments, and personalized learning paths.",
      },
      {
        name: "Legal Services",
        outcome:
          "Automate document review, contract analysis, and legal research processes.",
      },
      {
        name: "Healthcare",
        outcome:
          "Generate patient education materials and clinical documentation.",
      },
      {
        name: "Technology",
        outcome:
          "Create technical documentation, API guides, and user manuals.",
      },
      {
        name: "Media & Publishing",
        outcome:
          "Accelerate content production and automate editing workflows.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Use Case Discovery",
        description:
          "Identify specific generative AI opportunities and define success metrics for your organization.",
        duration: "1-2 weeks",
        deliverables: [
          "Use case inventory",
          "Success metrics",
          "Technical requirements",
          "Implementation strategy",
        ],
      },
      {
        step: 2,
        title: "Model Selection & Fine-tuning",
        description:
          "Choose optimal AI models and fine-tune them with your data for maximum effectiveness.",
        duration: "2-4 weeks",
        deliverables: [
          "Model architecture",
          "Training datasets",
          "Fine-tuned models",
          "Performance benchmarks",
        ],
      },
      {
        step: 3,
        title: "Integration & Deployment",
        description:
          "Integrate AI solutions into your existing workflows and deploy to production environments.",
        duration: "3-6 weeks",
        deliverables: [
          "Production deployment",
          "API integrations",
          "User interfaces",
          "Security implementation",
        ],
      },
      {
        step: 4,
        title: "Optimization & Scaling",
        description:
          "Monitor performance, optimize results, and scale solutions across your organization.",
        duration: "Ongoing",
        deliverables: [
          "Performance monitoring",
          "Model optimization",
          "Scale planning",
          "Continuous improvement",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Marketing Content Automation",
        industry: "Marketing Agency",
        metric: "80%",
        result: "Faster Content Production",
        description:
          "Implemented AI-powered content generation system that creates blog posts, social media content, and ad copy, reducing production time from days to hours.",
      },
      {
        title: "Legal Document Analysis",
        industry: "Legal Services",
        metric: "90%",
        result: "Document Review Efficiency",
        description:
          "Deployed AI system for contract analysis and legal document review, enabling lawyers to process 10x more documents with higher accuracy.",
      },
      {
        title: "E-learning Content Creation",
        industry: "Education",
        metric: "5x",
        result: "Course Development Speed",
        description:
          "Built AI-powered course creation platform that generates educational content, quizzes, and assessments, accelerating course development by 5x.",
      },
    ],
    techStack: [
      { name: "GPT-4", category: "AI/ML", logo: "/assets/icons/gpt4.svg" },
      { name: "Claude", category: "AI/ML", logo: "/assets/icons/claude.svg" },
      { name: "LangChain", category: "AI/ML", logo: "/assets/icons/lungchain.svg" },
      { name: "TensorFlow", category: "AI/ML", logo: "/assets/icons/tensorFlow.svg" },
      { name: "PyTorch", category: "AI/ML", logo: "/assets/icons/pyTorch.svg" },
      { name: "AWS", category: "Cloud", logo: "/assets/icons/aws.svg" },
      { name: "Google Cloud", category: "Cloud", logo: "/assets/icons/GoogleCloud.svg" },
      { name: "MongoDB", category: "Database", logo: "/assets/icons/MongoDB.svg" },
      { name: "PostgreSQL", category: "Database", logo: "/assets/icons/postgresql.svg" },
      { name: "React", category: "Framework", logo: "/assets/icons/reactjs.svg" },
      { name: "Node.js", category: "Framework", logo: "/assets/icons/NodeJS.svg" },
      { name: "FastAPI", category: "Framework", logo: "/assets/icons/FastAPI.svg" },
    ],
    pricingNotes: {
      model: "Flexible AI Implementation Packages",
      description:
        "Pricing based on model complexity, usage volume, and integration requirements. We offer both fixed-price projects and usage-based models.",
      startingPrice: "$20,000",
      features: [
        "Comprehensive use case analysis and strategy",
        "Custom model selection and fine-tuning",
        "Full integration with existing systems",
        "Performance monitoring and optimization",
        "Team training on AI tools and workflows",
        "Ongoing model maintenance and updates",
        "Technical support and troubleshooting",
        "Quarterly performance reviews and improvements",
      ],
    },
    faqs: [
      {
        question:
          "What types of content can generative AI create for our business?",
        answer:
          "Generative AI can create blog posts, marketing copy, product descriptions, technical documentation, social media content, email campaigns, and more. We customize solutions based on your specific content needs.",
      },
      {
        question:
          "How do you ensure the AI-generated content aligns with our brand voice?",
        answer:
          "We fine-tune models using your existing content, brand guidelines, and style preferences. This ensures consistent brand voice and tone across all AI-generated content.",
      },
      {
        question:
          "Can generative AI work with proprietary or sensitive company data?",
        answer:
          "Yes, we implement secure, private deployments that keep your data confidential. We can deploy models on-premises or in private cloud environments for maximum security.",
      },
      {
        question: "How accurate and reliable is AI-generated content?",
        answer:
          "With proper fine-tuning and oversight, AI-generated content achieves 90%+ accuracy. We implement review workflows and quality controls to ensure high standards.",
      },
      {
        question: "What ongoing maintenance do generative AI systems require?",
        answer:
          "Regular model updates, performance monitoring, and occasional retraining with new data. We provide ongoing maintenance services to keep your AI solutions optimized.",
      },
    ],
    primaryCTA: {
      text: "Explore Generative AI Opportunities",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download AI Use Case Guide",
      href: "#lead-magnet-genai-playbook",
      type: "link",
    },
    seoTitle: "Generative AI Solutions & Custom AI Development | RejoiceHub",
    seoDescription:
      "Harness GPT-4, Claude, and custom AI models for content generation, data analysis, and intelligent automation. Custom development with enterprise security.",
    leadMagnetIds: ["genai-use-case-playbook", "ai-content-strategy"],
    relatedServices: ["ai-agents-services", "custom-ai-integrations"],
  },

  "devops-consulting-services": {
    serviceId: "devops-consulting-services",
    title: "DevOps Consulting Services & Cloud Infrastructure",
    subhead:
      "Accelerate software delivery and enhance operational efficiency with expert DevOps consulting. Achieve automation, collaboration, and continuous delivery for faster, more reliable deployments.",
    problems: [
      {
        title: "Slow Software Deployment Cycles",
        description:
          "Manual deployment processes and fragmented workflows create bottlenecks that delay product releases and reduce competitive advantage.",
      },
      {
        title: "Poor Collaboration Between Teams",
        description:
          "Siloed development and operations teams lead to communication gaps, blame games, and reduced overall productivity.",
      },
      {
        title: "Unreliable Production Environments",
        description:
          "Frequent system outages, performance issues, and security vulnerabilities damage customer trust and business reputation.",
      },
      {
        title: "Inefficient Resource Utilization",
        description:
          "Poor infrastructure management leads to over-provisioning, wasted resources, and unnecessarily high operational costs.",
      },
    ],
    outcomes: [
      {
        title: "Deployment Frequency Increase",
        description:
          "Achieve multiple daily deployments with automated CI/CD pipelines and streamlined workflows.",
        metric: "10x",
      },
      {
        title: "Faster Recovery Times",
        description:
          "Reduce mean time to recovery (MTTR) through automated monitoring and incident response.",
        metric: "80%",
      },
      {
        title: "Infrastructure Cost Reduction",
        description:
          "Optimize cloud resources and eliminate waste through automation and right-sizing.",
        metric: "40%",
      },
      {
        title: "System Reliability Improvement",
        description:
          "Achieve enterprise-grade uptime with robust monitoring and automated failover systems.",
        metric: "99.9%",
      },
    ],
    capabilities: [
      {
        title: "CI/CD Pipeline Implementation",
        description:
          "Automated build, test, and deployment pipelines for faster, more reliable software delivery.",
        features: [
          "Automated testing",
          "Deployment automation",
          "Release management",
          "Quality gates",
        ],
      },
      {
        title: "Cloud Infrastructure Optimization",
        description:
          "Design and implement scalable, cost-effective cloud architectures on AWS, Azure, and GCP.",
        features: [
          "Auto-scaling",
          "Load balancing",
          "Cost optimization",
          "Multi-cloud strategies",
        ],
      },
      {
        title: "Monitoring & Observability",
        description:
          "Comprehensive monitoring solutions for proactive issue detection and resolution.",
        features: [
          "Real-time monitoring",
          "Log aggregation",
          "Performance metrics",
          "Alerting systems",
        ],
      },
      {
        title: "Security & Compliance",
        description:
          "Implement security best practices and compliance frameworks throughout the development lifecycle.",
        features: [
          "Security scanning",
          "Compliance automation",
          "Access control",
          "Vulnerability management",
        ],
      },
    ],
    industries: [
      {
        name: "Financial Services",
        icon : fianancialService,
        outcome:
          "Achieve regulatory compliance while accelerating digital transformation initiatives.",
      },
      {
        name: "Healthcare Technology",
        icon : healthcare,
        outcome:
          "Ensure HIPAA compliance while enabling rapid feature deployment and scaling.",
      },
      {
        name: "E-commerce",
        icon : Ecommerce,
        outcome:
          "Handle traffic spikes seamlessly with auto-scaling infrastructure and zero-downtime deployments.",
      },
      {
        name: "SaaS Companies",
        icon : RealEstate,
        outcome:
          "Achieve multi-tenant scalability with automated provisioning and monitoring.",
      },
      {
        name: "Startups",
        icon : NonProfitOrganizations,
        outcome:
          "Build scalable infrastructure from day one without over-engineering or over-spending.",
      },
      {
        name: "Enterprise",
        icon : EnterpriseSoftware,
        outcome:
          "Modernize legacy systems while maintaining stability and regulatory compliance.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Infrastructure Assessment",
        description:
          "Comprehensive analysis of current infrastructure, workflows, and pain points to identify optimization opportunities.",
        duration: "1-2 weeks",
        deliverables: [
          "Infrastructure audit",
          "Performance analysis",
          "Security assessment",
          "Optimization roadmap",
        ],
      },
      {
        step: 2,
        title: "DevOps Strategy & Design",
        description:
          "Design CI/CD pipelines, infrastructure architecture, and automation workflows tailored to your needs.",
        duration: "2-3 weeks",
        deliverables: [
          "CI/CD design",
          "Infrastructure blueprints",
          "Automation strategy",
          "Security framework",
        ],
      },
      {
        step: 3,
        title: "Implementation & Migration",
        description:
          "Deploy new infrastructure, implement automation, and migrate workloads with minimal downtime.",
        duration: "4-8 weeks",
        deliverables: [
          "Production deployment",
          "Automated pipelines",
          "Monitoring setup",
          "Documentation",
        ],
      },
      {
        step: 4,
        title: "Optimization & Support",
        description:
          "Monitor performance, optimize costs, and provide ongoing support and training.",
        duration: "Ongoing",
        deliverables: [
          "Performance monitoring",
          "Cost optimization",
          "Team training",
          "Continuous improvement",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Platform Modernization",
        industry: "E-commerce",
        metric: "75%",
        result: "Deployment Time Reduction",
        description:
          "Implemented automated CI/CD pipelines and cloud infrastructure that reduced deployment time from hours to minutes while improving system reliability and scalability.",
      },
      {
        title: "FinTech Compliance Automation",
        industry: "Financial Services",
        metric: "90%",
        result: "Compliance Process Automation",
        description:
          "Built automated compliance and security scanning into CI/CD pipelines, reducing manual compliance work by 90% while maintaining SOC 2 and PCI DSS certifications.",
      },
      {
        title: "SaaS Startup Scaling Solution",
        industry: "SaaS",
        metric: "60%",
        result: "Infrastructure Cost Savings",
        description:
          "Designed auto-scaling cloud architecture that reduced infrastructure costs by 60% while supporting 10x user growth without performance degradation.",
      },
    ],
   techStack: [
  { 
    name: "AWS", 
    category: "Cloud",
    logo: "/assets/icons/aws.svg" 
  },
  { 
    name: "Azure", 
    category: "Cloud",
    logo: "/assets/icons/Azure.svg" 
  },
  { 
    name: "Google Cloud", 
    category: "Cloud",
    logo: "/assets/icons/GoogleCloud.svg" 
  },
  { 
    name: "Kubernetes", 
    category: "DevOps",
    logo: "/assets/icons/Kubernetes.svg" 
  },
  { 
    name: "Docker", 
    category: "DevOps",
    logo: "/assets/icons/Docker.svg" 
  },
  { 
    name: "Terraform", 
    category: "DevOps",
    logo: "/assets/icons/Terraform.svg" 
  },
  { 
    name: "Jenkins", 
    category: "DevOps",
    logo: "/assets/icons/jenkins.svg" 
  },
  { 
    name: "GitLab CI", 
    category: "DevOps",
    // logo: "/assets/icons/gitlab.svg" 
  },
  { 
    name: "Prometheus", 
    category: "Analytics",
    // logo: "/assets/icons/prometheus.svg" 
  },
  { 
    name: "Grafana", 
    category: "Analytics",
    // logo: "/assets/icons/grafana.svg" 
  },
  { 
    name: "ELK Stack", 
    category: "Analytics",
    // logo: "/assets/icons/elasticsearch.svg" 
  },
  { 
    name: "Ansible", 
    category: "DevOps",
    // logo: "/assets/icons/ansible.svg" 
  },
],
    pricingNotes: {
      model: "Consulting Retainer & Project-Based",
      description:
        "Flexible engagement models including strategic consulting, implementation projects, and ongoing managed services.",
      startingPrice: "$20,000",
      features: [
        "Comprehensive infrastructure assessment",
        "Custom DevOps strategy and roadmap",
        "CI/CD pipeline implementation",
        "Cloud infrastructure setup and optimization",
        "Monitoring and alerting configuration",
        "24/7 support during implementation",
        "Team training and knowledge transfer",
        "Ongoing optimization and support options",
      ],
    },
    faqs: [
      {
        question:
          "How long does it take to implement a complete DevOps transformation?",
        answer:
          "A complete DevOps transformation typically takes 3-6 months, depending on current infrastructure complexity and organizational readiness. We start with quick wins and gradually implement more advanced automation.",
      },
      {
        question: "Can you work with our existing tools and infrastructure?",
        answer:
          "Yes, we specialize in working with existing technology stacks and can integrate new DevOps practices with your current tools. We recommend migrations only when they provide clear business value.",
      },
      {
        question:
          "How do you ensure security and compliance during DevOps implementation?",
        answer:
          "Security and compliance are built into every aspect of our DevOps implementations. We use security scanning, automated compliance checks, and follow industry best practices like DevSecOps.",
      },
      {
        question:
          "What kind of training do you provide for our internal teams?",
        answer:
          "We provide comprehensive training covering new tools, processes, and best practices. This includes hands-on workshops, documentation, and ongoing mentoring to ensure your team can maintain and improve the systems.",
      },
      {
        question: "How do you measure the success of DevOps implementations?",
        answer:
          "We track key metrics like deployment frequency, lead time for changes, mean time to recovery, and change failure rate. We also measure business metrics like cost savings and system reliability improvements.",
      },
    ],
    primaryCTA: {
      text: "Get DevOps Assessment",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download Cloud Migration Guide",
      href: "#lead-magnet-cloud-migration",
      type: "link",
    },
    seoTitle: "DevOps Consulting Services | Cloud Infrastructure | RejoiceHub",
    seoDescription:
      "Accelerate software delivery with expert DevOps consulting. Implement CI/CD, cloud infrastructure, and automation for faster, more reliable deployments.",
    leadMagnetIds: [
      "cloud-migration-checklist",
      "integration-architecture-guide",
    ],
    relatedServices: ["custom-ai-integrations", "automation-services"],
  },

  "open-source-consulting": {
    serviceId: "open-source-consulting",
    title: "Expert Open Source Consulting Services",
    subhead:
      "Take advantage of open-source tools and our expert guidance to save costs and boost efficiency. We help you choose the right solutions and set them up seamlessly, so you can focus on growing your business.",
    problems: [
      {
        title: "High Software Licensing Costs",
        description:
          "Expensive proprietary software licenses eating into your budget with limited flexibility and vendor lock-in.",
      },
      {
        title: "Limited Customization Options",
        description:
          "Proprietary solutions that don't fit your unique business needs and can't be modified or extended.",
      },
      {
        title: "Vendor Lock-in Concerns",
        description:
          "Being dependent on single vendors for critical business systems with limited migration options.",
      },
      {
        title: "Complex Open Source Selection",
        description:
          "Overwhelming choices in open source ecosystem without clear guidance on best solutions for your needs.",
      },
    ],
    outcomes: [
      {
        title: "Cost Reduction",
        description:
          "Reduce software licensing costs by up to 70% while maintaining enterprise-grade functionality.",
        metric: "70%",
      },
      {
        title: "Implementation Speed",
        description:
          "Deploy open source solutions 3x faster with our proven methodologies and expertise.",
        metric: "3x",
      },
      {
        title: "Customization Capability",
        description:
          "Achieve unlimited customization potential with open source flexibility.",
        metric: "Unlimited",
      },
      {
        title: "Vendor Independence",
        description:
          "Eliminate vendor lock-in and gain complete control over your technology stack.",
        metric: "100%",
      },
    ],
    capabilities: [
      {
        title: "Open Source Strategy Consulting",
        description:
          "Comprehensive assessment and strategic planning for open source adoption and migration.",
        features: [
          "Technology assessment",
          "Migration planning",
          "Risk analysis",
          "ROI calculations",
        ],
      },
      {
        title: "Solution Architecture & Selection",
        description:
          "Expert guidance in selecting and architecting the right open source tools for your needs.",
        features: [
          "Technology comparison",
          "Architecture design",
          "Compatibility analysis",
          "Scalability planning",
        ],
      },
      {
        title: "Implementation & Deployment",
        description:
          "End-to-end implementation of open source solutions with best practices and optimization.",
        features: [
          "Installation & configuration",
          "Performance optimization",
          "Security hardening",
          "Integration setup",
        ],
      },
      {
        title: "Training & Support",
        description:
          "Comprehensive training and ongoing support to ensure successful adoption and operation.",
        features: [
          "Team training",
          "Documentation",
          "Ongoing support",
          "Community engagement",
        ],
      },
    ],
    industries: [
      {
        name: "Startups & SMBs",
        icon : RealEstate,
        outcome:
          "Reduce infrastructure costs while scaling rapidly with enterprise-grade open source tools.",
      },
      {
        name: "Enterprise",
        icon : EnterpriseSoftware,
        outcome:
          "Replace expensive proprietary systems with customizable open source alternatives.",
      },
      {
        name: "Educational Institutions",
        icon : Education,
        outcome:
          "Implement cost-effective learning management and collaboration platforms.",
      },
      {
        name: "Healthcare",
        icon: healthcare,
        outcome:
          "Deploy secure, compliant open source solutions for patient data management.",
      },
      {
        name: "Government",
        icon :RealEstate,
        outcome:
          "Achieve transparency and cost savings with open source digital infrastructure.",
      },
      {
        name: "Non-Profit Organizations",
        icon : NonProfitOrganizations,

        outcome:
          "Maximize impact with budget-friendly open source technology solutions.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Discovery & Assessment",
        description:
          "Analyze current systems, requirements, and identify open source opportunities.",
        duration: "1-2 weeks",
        deliverables: [
          "Current state analysis",
          "Requirements gathering",
          "Technology audit",
          "Cost-benefit analysis",
        ],
      },
      {
        step: 2,
        title: "Strategy & Planning",
        description:
          "Develop comprehensive open source adoption strategy and implementation roadmap.",
        duration: "1-2 weeks",
        deliverables: [
          "Migration strategy",
          "Technology selection",
          "Implementation roadmap",
          "Risk mitigation plan",
        ],
      },
      {
        step: 3,
        title: "Implementation & Integration",
        description:
          "Deploy and configure selected open source solutions with seamless integration.",
        duration: "2-6 weeks",
        deliverables: [
          "System deployment",
          "Configuration setup",
          "Data migration",
          "Integration testing",
        ],
      },
      {
        step: 4,
        title: "Training & Handover",
        description:
          "Comprehensive training and knowledge transfer for long-term success.",
        duration: "1-2 weeks",
        deliverables: [
          "Team training",
          "Documentation",
          "Support procedures",
          "Maintenance guidelines",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Enterprise CRM Migration",
        industry: "Technology",
        metric: "$250K",
        result: "Annual Savings",
        description:
          "Migrated from expensive proprietary CRM to SuiteCRM, achieving 80% cost reduction with enhanced customization.",
      },
      {
        title: "Educational Platform Deployment",
        industry: "Education",
        metric: "95%",
        result: "Cost Reduction",
        description:
          "Implemented Moodle-based learning management system, replacing costly proprietary solution for 10,000+ students.",
      },
      {
        title: "Communication Suite Implementation",
        industry: "Healthcare",
        metric: "60%",
        result: "Productivity Improvement",
        description:
          "Deployed Rocket.Chat and Nextcloud for secure team collaboration, ensuring HIPAA compliance.",
      },
    ],
    techStack: [
      { name: "GitLab", category: "Development" },
      { name: "Rocket.Chat", category: "Communication" },
      { name: "Nextcloud", category: "Collaboration" },
      { name: "SuiteCRM", category: "CRM" },
      { name: "Moodle", category: "LMS" },
      { name: "Redash", category: "Analytics" },
      { name: "Mattermost", category: "Communication" },
      { name: "Wiki.js", category: "Documentation" },
      { name: "Jenkins", category: "CI/CD",logo : "/assets/icons/jenkins.svg"  },
      { name: "Docker", category: "Containerization",logo : "/assets/icons/Docker.svg" },
      { name: "Kubernetes", category: "Orchestration",logo : "/assets/icons/Kubernetes.svg" },
      { name: "PostgreSQL", category: "Database",logo : "/assets/icons/postgresql.svg" },
    ],
    pricingNotes: {
      model: "Open Source Consulting",
      description:
        "Flexible pricing based on project scope, complexity, and implementation timeline. Most projects include strategy, implementation, and training.",
      startingPrice: "$15,000",
      features: [
        "Comprehensive technology assessment",
        "Strategic migration planning",
        "Full implementation and configuration",
        "Team training and knowledge transfer",
        "3 months of post-implementation support",
        "Documentation and best practices",
        "Community engagement guidance",
        "Ongoing maintenance recommendations",
      ],
    },
    faqs: [
      {
        question:
          "How do you ensure open source solutions meet enterprise requirements?",
        answer:
          "We conduct thorough assessments of enterprise needs and select mature, well-supported open source projects with strong communities and enterprise features.",
      },
      {
        question: "What ongoing support do you provide after implementation?",
        answer:
          "We provide 3 months of optimization support, help establish internal processes, and can arrange ongoing support contracts for complex implementations.",
      },
      {
        question: "How do you handle security and compliance requirements?",
        answer:
          "We implement security best practices, conduct security audits, and ensure compliance with relevant standards like HIPAA, GDPR, or industry-specific requirements.",
      },
      {
        question:
          "Can you help with gradual migration from proprietary systems?",
        answer:
          "Yes, we specialize in phased migrations that minimize disruption, allow for parallel operations, and ensure smooth transitions with comprehensive testing.",
      },
      {
        question: "What if we need customizations to open source software?",
        answer:
          "We provide custom development services to extend open source solutions, ensuring all modifications are maintainable and compatible with future updates.",
      },
    ],
    primaryCTA: {
      text: "Get Open Source Assessment",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download Cost Analysis Guide",
      href: "#lead-magnet-cost-analysis",
      type: "link",
    },
    seoTitle:
      "Open Source Consulting Services | Expert Solutions & Guidance | RejoiceHub",
    seoDescription:
      "Unlock the power of open source with our consulting services. Reduce costs by 70%, eliminate vendor lock-in, and gain unlimited customization potential.",
    leadMagnetIds: ["cost-analysis-calculator", "implementation-guide"],
    relatedServices: ["devops-consulting-services", "custom-ai-integrations"],
  },

  "digital-marketing-services": {
    serviceId: "digital-marketing-services",
    title: "Exceptional Digital Marketing Services to Elevate Your Brand",
    subhead:
      "Boost your online presence and drive conversions with our data-driven digital marketing strategies. We deliver measurable results that grow your business and maximize your ROI.",
    problems: [
      {
        title: "Low Online Visibility",
        description:
          "Your target audience can't find you online, resulting in missed opportunities and poor brand awareness.",
      },
      {
        title: "Poor Conversion Rates",
        description:
          "Traffic isn't converting into leads or sales, wasting your marketing budget and effort.",
      },
      {
        title: "Inconsistent Brand Messaging",
        description:
          "Fragmented marketing efforts across channels leading to confused brand perception.",
      },
      {
        title: "Limited Marketing ROI Visibility",
        description:
          "Lack of clear metrics and insights into which marketing efforts are actually driving results.",
      },
    ],
    outcomes: [
      {
        title: "Increased Website Traffic",
        description:
          "Drive qualified traffic with strategic SEO, content marketing, and paid advertising campaigns.",
        metric: "300%",
      },
      {
        title: "Higher Conversion Rates",
        description:
          "Optimize user journeys and landing pages to convert more visitors into customers.",
        metric: "150%",
      },
      {
        title: "Enhanced Brand Awareness",
        description:
          "Build consistent brand presence across all digital channels and touchpoints.",
        metric: "250%",
      },
      {
        title: "Measurable ROI",
        description:
          "Track and optimize marketing performance with advanced analytics and reporting.",
        metric: "400%",
      },
    ],
    capabilities: [
      {
        title: "Search Engine Optimization (SEO)",
        description:
          "Comprehensive SEO strategies to improve organic search rankings and drive qualified traffic.",
        features: [
          "Keyword research",
          "On-page optimization",
          "Technical SEO",
          "Link building",
        ],
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        description:
          "Strategic paid advertising campaigns across Google, Facebook, LinkedIn, and other platforms.",
        features: [
          "Campaign strategy",
          "Ad creation",
          "Bid optimization",
          "Landing page design",
        ],
      },
      {
        title: "Content Marketing",
        description:
          "Engaging content strategies that attract, educate, and convert your target audience.",
        features: [
          "Content strategy",
          "Blog writing",
          "Video production",
          "Social media content",
        ],
      },
      {
        title: "Marketing Analytics & Automation",
        description:
          "Advanced analytics and automation tools to optimize performance and scale efficiently.",
        features: [
          "Performance tracking",
          "Lead nurturing",
          "Email automation",
          "Conversion optimization",
        ],
      },
    ],
    industries: [
      {
        name: "E-commerce",
        outcome:
          "Increase online sales with targeted campaigns, conversion optimization, and retention strategies.",
      },
      {
        name: "SaaS & Technology",
        outcome:
          "Generate qualified leads and reduce customer acquisition costs with strategic digital marketing.",
      },
      {
        name: "Healthcare",
        outcome:
          "Build trust and patient acquisition through compliant digital marketing and content strategies.",
      },
      {
        name: "Professional Services",
        outcome:
          "Establish thought leadership and generate high-value leads through targeted campaigns.",
      },
      {
        name: "Manufacturing",
        outcome:
          "Reach B2B buyers and showcase capabilities through digital channels and content marketing.",
      },
      {
        name: "Real Estate",
        outcome:
          "Generate leads and showcase properties through targeted advertising and virtual marketing.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Strategy & Planning",
        description:
          "Comprehensive analysis of your market, competitors, and digital marketing opportunities.",
        duration: "1-2 weeks",
        deliverables: [
          "Market analysis",
          "Competitor research",
          "Marketing strategy",
          "Channel recommendations",
        ],
      },
      {
        step: 2,
        title: "Campaign Development",
        description:
          "Create compelling campaigns, content, and creative assets optimized for your target audience.",
        duration: "2-3 weeks",
        deliverables: [
          "Campaign assets",
          "Landing pages",
          "Ad creatives",
          "Content calendar",
        ],
      },
      {
        step: 3,
        title: "Launch & Optimization",
        description:
          "Deploy campaigns across channels and continuously optimize for maximum performance.",
        duration: "Ongoing",
        deliverables: [
          "Campaign launch",
          "Performance monitoring",
          "A/B testing",
          "Regular optimizations",
        ],
      },
      {
        step: 4,
        title: "Analysis & Scaling",
        description:
          "Analyze performance data and scale successful campaigns while refining strategy.",
        duration: "Ongoing",
        deliverables: [
          "Performance reports",
          "Strategy refinements",
          "Scaling plans",
          "ROI analysis",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce Revenue Growth",
        industry: "E-commerce",
        metric: "350%",
        result: "Revenue Increase",
        description:
          "Implemented comprehensive digital marketing strategy including SEO, PPC, and email marketing, resulting in 350% revenue growth over 12 months.",
      },
      {
        title: "SaaS Lead Generation",
        industry: "SaaS",
        metric: "80%",
        result: "Reduction in CAC",
        description:
          "Optimized funnel and implemented targeted content marketing, reducing customer acquisition cost by 80% while tripling lead quality.",
      },
      {
        title: "Healthcare Practice Growth",
        industry: "Healthcare",
        metric: "250%",
        result: "Patient Acquisition",
        description:
          "Developed compliant digital marketing strategy that increased new patient appointments by 250% through local SEO and targeted advertising.",
      },
    ],
    techStack: [
      { name: "Google Analytics", category: "Analytics" },
      { name: "Google Ads", category: "Advertising" },
      { name: "Facebook Ads", category: "Advertising" },
      { name: "LinkedIn Ads", category: "Advertising" },
      { name: "Mailchimp", category: "Email Marketing" },
      { name: "HubSpot", category: "Marketing Automation" },
      { name: "SEMrush", category: "SEO Tools" },
      { name: "Hootsuite", category: "Social Media" },
      { name: "Canva", category: "Design" },
      { name: "Hotjar", category: "User Analytics" },
      { name: "Zapier", category: "Automation" },
      { name: "WordPress", category: "Content Management" },
    ],
    pricingNotes: {
      model: "Digital Marketing Services",
      description:
        "Flexible pricing based on campaign scope, channels, and business goals. Most packages include strategy, implementation, and ongoing optimization.",
      startingPrice: "$5,000",
      features: [
        "Comprehensive marketing strategy",
        "Multi-channel campaign development",
        "Professional creative assets",
        "Landing page optimization",
        "Advanced analytics and reporting",
        "Ongoing campaign optimization",
        "Monthly strategy consultations",
        "Dedicated account management",
      ],
    },
    faqs: [
      {
        question:
          "How long does it take to see results from digital marketing?",
        answer:
          "SEO typically shows results in 3-6 months, while PPC and social media advertising can generate leads within days. We provide monthly reports to track progress and ROI.",
      },
      {
        question: "Do you work with businesses in all industries?",
        answer:
          "Yes, we have experience across various industries including e-commerce, SaaS, healthcare, professional services, and more. We tailor strategies to each industry's unique requirements.",
      },
      {
        question: "How do you measure the success of marketing campaigns?",
        answer:
          "We track key metrics like traffic growth, conversion rates, cost per acquisition, return on ad spend (ROAS), and overall ROI. Monthly reports provide detailed insights.",
      },
      {
        question: "Can you help with marketing automation and lead nurturing?",
        answer:
          "Absolutely. We implement marketing automation workflows, email sequences, and lead nurturing campaigns to maximize conversion rates and customer lifetime value.",
      },
      {
        question: "Do you provide ongoing support and optimization?",
        answer:
          "Yes, digital marketing requires continuous optimization. We provide ongoing monitoring, A/B testing, strategy refinements, and monthly consultations to ensure optimal performance.",
      },
    ],
    primaryCTA: {
      text: "Get Marketing Strategy Consultation",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download ROI Calculator",
      href: "#lead-magnet-roi-calculator",
      type: "link",
    },
    seoTitle: "Digital Marketing Services | Drive Growth & ROI | RejoiceHub",
    seoDescription:
      "Boost your online presence and drive conversions with data-driven digital marketing. Increase traffic by 300%, improve conversions by 150%, and maximize ROI.",
    leadMagnetIds: ["marketing-roi-calculator", "strategy-template"],
    relatedServices: ["web-development-services", "ui-ux-design-services"],
  },

  "brand-design": {
    serviceId: "brand-design",
    title: "Professional Brand Design & Identity Services",
    subhead:
      "Create a powerful brand identity that resonates with your audience and builds lasting trust. Our comprehensive brand design services include logo design, typography, brand guidelines, and visual systems.",
    problems: [
      {
        title: "Inconsistent Brand Identity",
        description:
          "Lack of cohesive visual identity across all touchpoints creates confusion and weakens brand recognition.",
      },
      {
        title: "Poor Brand Differentiation",
        description:
          "Generic or outdated branding fails to stand out in competitive markets and connect with target audiences.",
      },
      {
        title: "Limited Brand Recognition",
        description:
          "Weak visual identity and messaging prevent customers from remembering and trusting your brand.",
      },
      {
        title: "Scaling Brand Assets Issues",
        description:
          "Inconsistent design systems make it difficult to maintain quality across growing marketing needs.",
      },
    ],
    outcomes: [
      {
        title: "Strong Brand Recognition",
        description:
          "Memorable visual identity that customers instantly recognize and trust.",
        metric: "85%+",
      },
      {
        title: "Consistent Brand Experience",
        description:
          "Unified visual language across all platforms and touchpoints.",
        metric: "100%",
      },
      {
        title: "Increased Customer Trust",
        description:
          "Professional branding builds credibility and customer confidence.",
        metric: "60%+",
      },
      {
        title: "Competitive Differentiation",
        description:
          "Unique brand identity that sets you apart from competitors.",
        metric: "3x",
      },
    ],
    capabilities: [
      {
        title: "Logo Design & Brand Identity",
        description:
          "Professional logo design and complete brand identity systems that reflect your values and resonate with your audience.",
        features: [
          "Custom logo design",
          "Brand identity guidelines",
          "Visual style guides",
          "Brand architecture",
        ],
      },
      {
        title: "Typography & Color Systems",
        description:
          "Comprehensive typography and color palettes that enhance readability and brand recognition.",
        features: [
          "Font selection",
          "Color psychology",
          "Accessibility compliance",
          "Cross-platform consistency",
        ],
      },
      {
        title: "Brand Guidelines & Standards",
        description:
          "Detailed brand guidelines ensuring consistent application across all marketing materials.",
        features: [
          "Usage guidelines",
          "Do's and don'ts",
          "Asset libraries",
          "Implementation examples",
        ],
      },
      {
        title: "Visual Asset Creation",
        description:
          "Complete set of brand assets including business cards, letterheads, and marketing materials.",
        features: [
          "Business collateral",
          "Digital assets",
          "Social media templates",
          "Print-ready files",
        ],
      },
    ],
    industries: [
      {
        name: "Startups & SMBs",
        icon : RealEstate,
        outcome:
          "Establish strong brand foundation and professional market presence.",
      },
      {
        name: "E-commerce",
        icon : Ecommerce,
        outcome:
          "Create memorable brand experiences that drive customer loyalty and repeat purchases.",
      },
      {
        name: "Professional Services",
        icon : ProfessionalServices,
        outcome:
          "Build trust and credibility through sophisticated, professional branding.",
      },
      {
        name: "Technology",
        icon : Technology,
        outcome:
          "Modern, innovative brand identity that reflects cutting-edge capabilities.",
      },
      {
        name: "Healthcare",
        icon : healthcare,
        outcome:
          "Trustworthy, caring brand identity that puts patients at ease.",
      },
      {
        name: "Education",
        icon : Education,
        outcome:
          "Engaging, trustworthy branding that appeals to students and parents.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Brand Discovery & Strategy",
        description:
          "Deep dive into your business, values, target audience, and competitive landscape.",
        duration: "1-2 weeks",
        deliverables: [
          "Brand strategy document",
          "Competitive analysis",
          "Target audience profiles",
        ],
      },
      {
        step: 2,
        title: "Concept Development",
        description:
          "Create multiple design concepts and visual directions for your brand identity.",
        duration: "2-3 weeks",
        deliverables: [
          "Logo concepts",
          "Color palette options",
          "Typography selections",
        ],
      },
      {
        step: 3,
        title: "Design Refinement",
        description:
          "Refine chosen concepts based on feedback and create comprehensive brand system.",
        duration: "2-3 weeks",
        deliverables: [
          "Final logo files",
          "Brand guidelines",
          "Visual style guide",
        ],
      },
      {
        step: 4,
        title: "Asset Creation & Delivery",
        description:
          "Create all necessary brand assets and provide implementation guidance.",
        duration: "1-2 weeks",
        deliverables: [
          "Complete asset library",
          "Implementation guide",
          "Brand training",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Tech Startup Rebrand",
        industry: "SaaS",
        metric: "300%",
        result: "Increase in brand recognition",
        description:
          "Complete rebrand for a B2B SaaS company resulted in significantly improved market positioning and customer trust.",
      },
      {
        title: "E-commerce Brand Identity",
        industry: "Retail",
        metric: "150%",
        result: "Increase in customer engagement",
        description:
          "Comprehensive brand design for an online retailer led to improved customer loyalty and repeat purchases.",
      },
      {
        title: "Professional Services Brand",
        industry: "Consulting",
        metric: "200%",
        result: "Increase in qualified leads",
        description:
          "Professional branding for a consulting firm resulted in higher-quality client inquiries and improved conversion rates.",
      },
    ],
    techStack: [
      {
        name: "Adobe Creative Suite",
        category: "Design Tools",
      },
      { name: "Figma",  category: "Design Tools", logo: "/assets/icons/figma.svg"  },
      { name: "Sketch", category: "Design Tools" },
      { name: "InVision",  category: "Prototyping" },
      {
        name: "Brand Guidelines",
        category: "Documentation",
      },
    ],
    pricingNotes: {
      model: "Project-based pricing",
      description: "Comprehensive brand design packages starting from $2,500",
      startingPrice: "$2,500",
      features: [
        "Logo design",
        "Brand guidelines",
        "Color palette",
        "Typography system",
        "Basic asset library",
      ],
    },
    faqs: [
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
    primaryCTA: {
      text: "Start Brand Design Project",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download Brand Strategy Template",
      href: "#lead-magnet-brand-strategy",
      type: "link",
    },
    seoTitle:
      "Professional Brand Design Services | Logo & Identity Design | RejoiceHub",
    seoDescription:
      "Create a powerful brand identity with our professional brand design services. Logo design, typography, brand guidelines, and visual systems that build trust and recognition.",
    leadMagnetIds: ["brand-strategy-template", "logo-design-guide"],
    relatedServices: ["ui-ux-design-services", "digital-marketing-services"],
  },

  "user-research": {
    serviceId: "user-research",
    title: "Data-Driven User Research & Insights",
    subhead:
      "Make informed design decisions with comprehensive user research. We help you understand your users through persona development, usability testing, customer journey mapping, and analytics-driven insights.",
    problems: [
      {
        title: "Design Decisions Based on Assumptions",
        description:
          "Making design choices without user data leads to poor user experiences and low conversion rates.",
      },
      {
        title: "Poor User Understanding",
        description:
          "Lack of user research results in products that don't meet real user needs and expectations.",
      },
      {
        title: "High User Abandonment Rates",
        description:
          "Without understanding user pain points, products fail to engage and retain users effectively.",
      },
      {
        title: "Ineffective User Experience",
        description:
          "Missing user insights leads to confusing interfaces and poor user satisfaction scores.",
      },
    ],
    outcomes: [
      {
        title: "Data-Driven Design Decisions",
        description:
          "Make informed design choices based on real user behavior and feedback.",
        metric: "90%+",
      },
      {
        title: "Improved User Satisfaction",
        description:
          "Designs that meet real user needs result in higher satisfaction and engagement.",
        metric: "75%+",
      },
      {
        title: "Reduced User Friction",
        description:
          "Identify and eliminate pain points that cause user abandonment.",
        metric: "60%+",
      },
      {
        title: "Higher Conversion Rates",
        description:
          "User-centered design leads to better conversion and business outcomes.",
        metric: "40%+",
      },
    ],
    capabilities: [
      {
        title: "User Persona Development",
        description:
          "Create detailed user personas based on research to guide design and marketing decisions.",
        features: [
          "Demographic analysis",
          "Behavioral patterns",
          "Pain points identification",
          "User journey mapping",
        ],
      },
      {
        title: "Usability Testing",
        description:
          "Evaluate product usability through moderated and unmoderated testing sessions.",
        features: [
          "Task analysis",
          "User feedback collection",
          "Usability metrics",
          "Recommendation reports",
        ],
      },
      {
        title: "Customer Journey Mapping",
        description:
          "Visualize user experiences across all touchpoints to identify opportunities for improvement.",
        features: [
          "Journey visualization",
          "Pain point analysis",
          "Opportunity identification",
          "Experience optimization",
        ],
      },
      {
        title: "Analytics & Insights",
        description:
          "Analyze user behavior data to uncover patterns and inform design decisions.",
        features: [
          "Behavioral analysis",
          "Conversion tracking",
          "A/B testing",
          "Performance optimization",
        ],
      },
    ],
    industries: [
      {
        name: "E-commerce",
        icon : Ecommerce,
        outcome:
          "Optimize user journeys and increase conversion rates through user research insights.",
      },
      {
        name: "SaaS & Technology",
        icon : Technology,
        outcome:
          "Improve product usability and user adoption through data-driven design decisions.",
      },
      {
        name: "Healthcare",
        icon : healthcare,
        outcome:
          "Enhance patient experiences and improve healthcare outcomes through user-centered design.",
      },
      {
        name: "Financial Services",
        icon : fianancialService,
        outcome:
          "Build trust and improve user experience in complex financial applications.",
      },
      {
        name: "Education",
        icon : Education,
        outcome:
          "Create engaging learning experiences that meet diverse student needs.",
      },
      {
        name: "Mobile Apps",
        icon : MobileApplications,
        outcome:
          "Optimize mobile user experiences for better engagement and retention.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Research Planning & Setup",
        description:
          "Define research objectives, select methodologies, and prepare research materials.",
        duration: "1 week",
        deliverables: [
          "Research plan",
          "Participant criteria",
          "Research questions",
          "Timeline",
        ],
      },
      {
        step: 2,
        title: "Data Collection",
        description:
          "Conduct interviews, surveys, usability tests, and analytics analysis.",
        duration: "2-3 weeks",
        deliverables: [
          "User interviews",
          "Survey results",
          "Usability test data",
          "Analytics insights",
        ],
      },
      {
        step: 3,
        title: "Analysis & Synthesis",
        description:
          "Analyze collected data and synthesize insights into actionable recommendations.",
        duration: "1-2 weeks",
        deliverables: [
          "User personas",
          "Journey maps",
          "Insight reports",
          "Recommendations",
        ],
      },
      {
        step: 4,
        title: "Reporting & Presentation",
        description:
          "Present findings and recommendations to stakeholders with actionable next steps.",
        duration: "1 week",
        deliverables: [
          "Research report",
          "Presentation deck",
          "Action plan",
          "Implementation guide",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce UX Optimization",
        industry: "Retail",
        metric: "45%",
        result: "Increase in conversion rate",
        description:
          "User research identified key friction points in the checkout process, leading to significant conversion improvements.",
      },
      {
        title: "SaaS Product Usability",
        industry: "Technology",
        metric: "60%",
        result: "Reduction in support tickets",
        description:
          "Usability testing revealed interface issues that were causing user confusion and support requests.",
      },
      {
        title: "Mobile App User Experience",
        industry: "Mobile",
        metric: "80%",
        result: "Increase in user retention",
        description:
          "User research insights led to app redesign that dramatically improved user engagement and retention.",
      },
    ],
    techStack: [
      {
        name: "UserTesting",
        category: "Usability Testing",
      },
      { name: "Hotjar",  category: "Analytics" },
      { name: "Google Analytics",  category: "Analytics" },
      { name: "Figma",  category: "Prototyping", logo: "/assets/icons/figma.svg"  },
      { name: "Miro", category: "Collaboration" },
    ],
    pricingNotes: {
      model: "Project-based pricing",
      description: "Comprehensive user research packages starting from $3,500",
      startingPrice: "$3,500",
      features: [
        "User interviews",
        "Persona development",
        "Usability testing",
        "Journey mapping",
        "Analytics analysis",
      ],
    },
    faqs: [
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
    primaryCTA: {
      text: "Start User Research Project",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download Research Framework",
      href: "#lead-magnet-research-framework",
      type: "link",
    },
    seoTitle: "User Research Services | UX Research & Insights | RejoiceHub",
    seoDescription:
      "Make data-driven design decisions with our comprehensive user research services. Persona development, usability testing, and customer journey mapping for better UX.",
    leadMagnetIds: ["research-framework", "usability-testing-guide"],
    relatedServices: ["ui-ux-design-services", "brand-design"],
  },

  "digital-transformation": {
    serviceId: "digital-transformation",
    title: "End-to-End Digital Transformation Services",
    subhead:
      "Transform your entire organization with our comprehensive digital transformation services. We help you modernize processes, implement cutting-edge technologies, and create a digital-first culture that drives growth and innovation.",
    problems: [
      {
        title: "Legacy Systems & Processes",
        description:
          "Outdated technology and manual processes are slowing down operations, increasing costs, and preventing scalability.",
      },
      {
        title: "Digital Skills Gap",
        description:
          "Lack of digital expertise and resistance to change are hindering technology adoption and digital innovation.",
      },
      {
        title: "Disconnected Systems & Data Silos",
        description:
          "Fragmented technology landscape with isolated data preventing insights and operational efficiency.",
      },
      {
        title: "Competitive Disadvantage",
        description:
          "Failure to embrace digital technologies is putting businesses at risk of being left behind by more agile competitors.",
      },
    ],
    outcomes: [
      {
        title: "Operational Excellence",
        description:
          "Streamlined processes, automated workflows, and improved efficiency across all business functions.",
        metric: "60%+",
      },
      {
        title: "Enhanced Customer Experience",
        description:
          "Digital-first customer interactions that improve satisfaction, engagement, and loyalty.",
        metric: "80%+",
      },
      {
        title: "Data-Driven Decision Making",
        description:
          "Unified data platform enabling real-time insights and informed strategic decisions.",
        metric: "90%+",
      },
      {
        title: "Competitive Advantage",
        description:
          "Digital capabilities that differentiate your business and create new market opportunities.",
        metric: "3x",
      },
    ],
    capabilities: [
      {
        title: "Digital Strategy & Roadmap",
        description:
          "Comprehensive digital transformation strategy aligned with business goals and market opportunities.",
        features: [
          "Current state assessment",
          "Future state vision",
          "Implementation roadmap",
          "Change management plan",
        ],
      },
      {
        title: "Technology Modernization",
        description:
          "Legacy system modernization and cloud migration to improve performance, security, and scalability.",
        features: [
          "Cloud migration",
          "API integration",
          "Microservices architecture",
          "Security enhancement",
        ],
      },
      {
        title: "Process Automation & Optimization",
        description:
          "End-to-end process automation using AI, RPA, and workflow optimization to eliminate manual tasks.",
        features: [
          "RPA implementation",
          "Workflow automation",
          "AI-powered processes",
          "Performance monitoring",
        ],
      },
      {
        title: "Digital Culture & Change Management",
        description:
          "Organizational change management and digital skills development to ensure successful transformation.",
        features: [
          "Change management",
          "Training programs",
          "Digital literacy",
          "Culture transformation",
        ],
      },
    ],
    industries: [
      {
        name: "Manufacturing",
        icon : Manufacturing,
        outcome:
          "Smart manufacturing with IOT, automation, and predictive maintenance for operational excellence.",
      },
      {
        name: "Healthcare",
        icon : healthcare,
        outcome:
          "Digital health solutions improving patient care, operational efficiency, and data security.",
      },
      {
        name: "Financial Services",
        icon : fianancialService,
        outcome:
          "Digital banking and fintech solutions enhancing customer experience and operational efficiency.",
      },
      {
        name: "Retail & E-commerce",
        icon : Ecommerce,
        outcome:
          "Omnichannel retail experiences with seamless online and offline customer journeys.",
      },
      {
        name: "Professional Services",
        icon : ProfessionalServices,
        outcome:
          "Digital service delivery platforms improving client collaboration and service quality.",
      },
      {
        name: "Education",
        icon : Education,
        outcome:
          "Digital learning platforms and educational technology for enhanced student experiences.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Digital Assessment & Strategy",
        description:
          "Comprehensive assessment of current digital maturity and development of transformation strategy.",
        duration: "2-4 weeks",
        deliverables: [
          "Digital maturity assessment",
          "Transformation strategy",
          "Technology roadmap",
          "ROI projections",
        ],
      },
      {
        step: 2,
        title: "Technology Architecture Design",
        description:
          "Design modern, scalable technology architecture that supports business objectives.",
        duration: "3-6 weeks",
        deliverables: [
          "Technology architecture",
          "Integration strategy",
          "Security framework",
          "Migration plan",
        ],
      },
      {
        step: 3,
        title: "Implementation & Integration",
        description:
          "Phased implementation of digital solutions with continuous integration and testing.",
        duration: "12-24 weeks",
        deliverables: [
          "System implementation",
          "Process automation",
          "Data migration",
          "User training",
        ],
      },
      {
        step: 4,
        title: "Optimization & Scale",
        description:
          "Continuous optimization, performance monitoring, and scaling of digital capabilities.",
        duration: "Ongoing",
        deliverables: [
          "Performance optimization",
          "Continuous improvement",
          "Scalability planning",
          "Innovation roadmap",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Manufacturing Digital Transformation",
        industry: "Manufacturing",
        metric: "45%",
        result: "Increase in operational efficiency",
        description:
          "Comprehensive digital transformation for a manufacturing company resulted in significant efficiency improvements and cost reductions.",
      },
      {
        title: "Healthcare System Modernization",
        industry: "Healthcare",
        metric: "60%",
        result: "Reduction in administrative overhead",
        description:
          "Digital transformation of healthcare systems improved patient care and reduced administrative burden.",
      },
      {
        title: "Retail Omnichannel Transformation",
        industry: "Retail",
        metric: "80%",
        result: "Increase in customer engagement",
        description:
          "Omnichannel digital transformation created seamless customer experiences across all touchpoints.",
      },
    ],
    techStack: [
      {
        name: "Cloud Platforms",
        category: "Infrastructure",
      },
      {
        name: "AI/ML Technologies",
        category: "Intelligence",
      },
      {
        name: "IOT Platforms",
        category: "Connectivity",
      },
      {
        name: "Data Analytics",
        category: "Insights",
      },
      { name: "RPA Tools", category: "Automation" },
    ],
    pricingNotes: {
      model: "Project-based pricing",
      description:
        "Comprehensive digital transformation packages starting from $50,000",
      startingPrice: "$50,000",
      features: [
        "Digital assessment",
        "Strategy development",
        "Technology implementation",
        "Change management",
        "Ongoing support",
      ],
    },
    faqs: [
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
    primaryCTA: {
      text: "Start Digital Transformation",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download Transformation Guide",
      href: "#lead-magnet-transformation-guide",
      type: "link",
    },
    seoTitle:
      "Digital Transformation Services | End-to-End Digital Solutions | RejoiceHub",
    seoDescription:
      "Transform your organization with our comprehensive digital transformation services. Modernize processes, implement cutting-edge technologies, and create a digital-first culture.",
    leadMagnetIds: ["transformation-guide", "digital-assessment"],
    relatedServices: ["ai-agents-services", "devops-consulting-services"],
  },

  "ai-integration": {
    serviceId: "ai-integration",
    title: "Seamless AI Integration Services",
    subhead:
      "Seamlessly integrate AI capabilities into your existing systems and workflows. Our AI integration services help you enhance current processes, improve efficiency, and unlock new possibilities without disrupting your operations.",
    problems: [
      {
        title: "Legacy System Limitations",
        description:
          "Existing systems lack AI capabilities and struggle to process complex data or provide intelligent insights.",
      },
      {
        title: "Integration Complexity",
        description:
          "Adding AI to existing workflows is complex and often requires significant system modifications.",
      },
      {
        title: "Data Silos & Incompatibility",
        description:
          "Data is scattered across different systems, making it difficult to leverage for AI applications.",
      },
      {
        title: "Performance Bottlenecks",
        description:
          "Manual processes and lack of automation create inefficiencies and slow down operations.",
      },
    ],
    outcomes: [
      {
        title: "Enhanced System Intelligence",
        description:
          "Your existing systems gain AI capabilities for better decision-making and automation.",
        metric: "60%+",
      },
      {
        title: "Seamless Workflow Integration",
        description:
          "AI features work harmoniously with your current processes without disruption.",
        metric: "90%+",
      },
      {
        title: "Improved Data Utilization",
        description:
          "Unlock the value of your existing data through AI-powered analysis and insights.",
        metric: "80%+",
      },
      {
        title: "Operational Efficiency",
        description:
          "Automate routine tasks and optimize processes for better productivity.",
        metric: "40%+",
      },
    ],
    capabilities: [
      {
        title: "Legacy System AI Enhancement",
        description:
          "Add AI capabilities to existing systems without major overhauls or disruptions.",
        features: [
          "API integration",
          "Data connectors",
          "Custom adapters",
          "Backward compatibility",
        ],
      },
      {
        title: "Workflow Automation Integration",
        description:
          "Integrate AI-powered automation into existing business processes and workflows.",
        features: [
          "Process mapping",
          "Automation design",
          "Integration testing",
          "Performance monitoring",
        ],
      },
      {
        title: "Data Pipeline Integration",
        description:
          "Connect and harmonize data from multiple sources for AI processing and analysis.",
        features: [
          "ETL processes",
          "Data validation",
          "Real-time streaming",
          "Quality assurance",
        ],
      },
      {
        title: "AI Model Deployment",
        description:
          "Deploy and manage AI models within your existing infrastructure and systems.",
        features: [
          "Model serving",
          "Version control",
          "Monitoring",
          "Scalability management",
        ],
      },
    ],
    industries: [
      {
        name: "Manufacturing",
        icon : Manufacturing,
        outcome:
          "AI-enhanced production systems with predictive maintenance and quality control.",
      },
      {
        name: "Healthcare",
        icon : healthcare,
        outcome:
          "AI-integrated medical systems for diagnosis, treatment planning, and patient care.",
      },
      {
        name: "Financial Services",
        icon : fianancialService,
        outcome:
          "AI-powered banking systems with fraud detection and risk assessment.",
      },
      {
        name: "Retail & E-commerce",
        icon: Ecommerce,
        outcome:
          "AI-enhanced customer experience with personalized recommendations and inventory management.",
      },
      {
        name: "Logistics",
        icon : Logistics,
        outcome:
          "AI-integrated supply chain systems with route optimization and demand forecasting.",
      },
      {
        name: "Energy",
        icon : Energy,
        outcome:
          "AI-enhanced energy management systems with predictive analytics and optimization.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "System Assessment & Planning",
        description:
          "Evaluate existing systems and create integration strategy that minimizes disruption.",
        duration: "1-2 weeks",
        deliverables: [
          "System audit",
          "Integration roadmap",
          "Risk assessment",
          "Timeline planning",
        ],
      },
      {
        step: 2,
        title: "Data Integration & Preparation",
        description:
          "Connect data sources and prepare data for AI processing and analysis.",
        duration: "2-4 weeks",
        deliverables: [
          "Data connectors",
          "ETL pipelines",
          "Data validation",
          "Quality checks",
        ],
      },
      {
        step: 3,
        title: "AI Model Integration",
        description:
          "Deploy AI models and integrate them with existing systems and workflows.",
        duration: "3-6 weeks",
        deliverables: [
          "Model deployment",
          "API integration",
          "Workflow updates",
          "Testing",
        ],
      },
      {
        step: 4,
        title: "Optimization & Monitoring",
        description:
          "Monitor performance, optimize integration, and ensure smooth operation.",
        duration: "Ongoing",
        deliverables: [
          "Performance monitoring",
          "Optimization",
          "Maintenance",
          "Support",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Manufacturing AI Integration",
        industry: "Manufacturing",
        metric: "45%",
        result: "Increase in production efficiency",
        description:
          "Integrated AI into existing manufacturing systems for predictive maintenance and quality control.",
      },
      {
        title: "Healthcare System Enhancement",
        industry: "Healthcare",
        metric: "60%",
        result: "Faster diagnosis accuracy",
        description:
          "Enhanced medical imaging systems with AI for improved diagnostic accuracy and speed.",
      },
      {
        title: "Retail AI Integration",
        industry: "Retail",
        metric: "35%",
        result: "Increase in sales conversion",
        description:
          "Integrated AI recommendation engine into existing e-commerce platform.",
      },
    ],
    techStack: [
      {
        name: "API Integration",
        category: "Integration",
      },
      {
        name: "Data Processing",
        category: "Analytics",
      },
      {
        name: "Cloud Platforms",
        category: "Infrastructure",
      },
      {
        name: "AI/ML Frameworks",
        category: "Intelligence",
      },
      {
        name: "Monitoring Tools",
        category: "Operations",
      },
    ],
    pricingNotes: {
      model: "Project-based pricing",
      description: "AI integration projects starting from $25,000",
      startingPrice: "$25,000",
      features: [
        "System assessment",
        "Integration planning",
        "AI model deployment",
        "Testing",
        "Ongoing support",
      ],
    },
    faqs: [
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
    primaryCTA: {
      text: "Start AI Integration",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download Integration Guide",
      href: "#lead-magnet-integration-guide",
      type: "link",
    },
    seoTitle:
      "AI Integration Services | Seamless AI System Integration | RejoiceHub",
    seoDescription:
      "Seamlessly integrate AI capabilities into your existing systems and workflows. Enhance processes and unlock new possibilities without disruption.",
    leadMagnetIds: ["integration-guide", "ai-assessment"],
    relatedServices: ["ai-agents-services", "devops-consulting-services"],
  },

  "ai-strategy-consulting": {
    serviceId: "ai-strategy-consulting",
    title: "Strategic AI Consulting & Roadmap",
    subhead:
      "Develop a comprehensive AI strategy that aligns with your business goals. Our AI strategy consulting helps you identify opportunities, plan implementation, and create a roadmap for successful AI adoption.",
    problems: [
      {
        title: "Lack of AI Strategy",
        description:
          "Organizations struggle to develop a clear AI strategy that aligns with business objectives and delivers measurable value.",
      },
      {
        title: "Technology Confusion",
        description:
          "Overwhelming number of AI technologies and vendors make it difficult to choose the right solutions.",
      },
      {
        title: "Implementation Uncertainty",
        description:
          "Unclear roadmap and implementation plan lead to failed AI projects and wasted resources.",
      },
      {
        title: "ROI Concerns",
        description:
          "Difficulty in quantifying AI investments and measuring return on investment.",
      },
    ],
    outcomes: [
      {
        title: "Clear AI Strategy",
        description:
          "Comprehensive AI strategy aligned with your business goals and market opportunities.",
        metric: "100%",
      },
      {
        title: "Technology Roadmap",
        description:
          "Detailed implementation roadmap with clear milestones and success metrics.",
        metric: "3-5 years",
      },
      {
        title: "ROI Framework",
        description:
          "Clear framework for measuring AI investments and tracking business impact.",
        metric: "200-400%",
      },
      {
        title: "Competitive Advantage",
        description:
          "Strategic positioning to gain competitive advantage through AI adoption.",
        metric: "2-3x",
      },
    ],
    capabilities: [
      {
        title: "AI Strategy Development",
        description:
          "Comprehensive AI strategy that aligns with business objectives and market opportunities.",
        features: [
          "Business alignment",
          "Market analysis",
          "Technology assessment",
          "Risk evaluation",
        ],
      },
      {
        title: "Technology Roadmap",
        description:
          "Detailed implementation roadmap with clear phases, milestones, and success metrics.",
        features: [
          "Phase planning",
          "Milestone definition",
          "Resource allocation",
          "Timeline creation",
        ],
      },
      {
        title: "Vendor Selection",
        description:
          "Expert guidance in selecting the right AI technologies and vendors for your needs.",
        features: [
          "Technology evaluation",
          "Vendor assessment",
          "Cost analysis",
          "Implementation planning",
        ],
      },
      {
        title: "ROI Framework",
        description:
          "Comprehensive framework for measuring AI investments and tracking business impact.",
        features: [
          "KPI definition",
          "Measurement methodology",
          "Reporting framework",
          "Optimization strategy",
        ],
      },
    ],
    industries: [
      {
        name: "Financial Services",
        icon : fianancialService,
        outcome:
          "AI strategy for risk management, fraud detection, and customer experience enhancement.",
      },
      {
        name: "Healthcare",
        icon : healthcare,
        outcome:
          "AI strategy for patient care, diagnosis, and operational efficiency improvement.",
      },
      {
        name: "Manufacturing",
        icon : Manufacturing,
        outcome:
          "AI strategy for predictive maintenance, quality control, and supply chain optimization.",
      },
      {
        name: "Retail & E-commerce",
        icon : Ecommerce,
        outcome:
          "AI strategy for customer personalization, inventory management, and sales optimization.",
      },
      {
        name: "Technology",
        icon : Technology,
        outcome:
          "AI strategy for product development, customer support, and competitive positioning.",
      },
      {
        name: "Energy",
        icon : Energy,
        outcome:
          "AI strategy for predictive maintenance, energy optimization, and sustainability.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "Business Assessment",
        description:
          "Evaluate current business processes, challenges, and opportunities for AI adoption.",
        duration: "2-3 weeks",
        deliverables: [
          "Business analysis",
          "Process mapping",
          "Opportunity identification",
          "Stakeholder interviews",
        ],
      },
      {
        step: 2,
        title: "AI Strategy Development",
        description:
          "Develop comprehensive AI strategy aligned with business goals and market opportunities.",
        duration: "3-4 weeks",
        deliverables: [
          "Strategy document",
          "Technology roadmap",
          "Implementation plan",
          "ROI framework",
        ],
      },
      {
        step: 3,
        title: "Technology Planning",
        description:
          "Define technology requirements, vendor selection criteria, and implementation approach.",
        duration: "2-3 weeks",
        deliverables: [
          "Technology requirements",
          "Vendor shortlist",
          "Implementation approach",
          "Risk mitigation",
        ],
      },
      {
        step: 4,
        title: "Execution Support",
        description:
          "Provide ongoing support for strategy execution and implementation guidance.",
        duration: "Ongoing",
        deliverables: [
          "Implementation support",
          "Progress monitoring",
          "Strategy refinement",
          "Success measurement",
        ],
      },
    ],
    caseStudies: [
      {
        title: "Financial Services AI Strategy",
        industry: "Financial Services",
        metric: "300%",
        result: "ROI on AI investments",
        description:
          "Developed comprehensive AI strategy for a major bank leading to significant ROI and competitive advantage.",
      },
      {
        title: "Healthcare AI Roadmap",
        industry: "Healthcare",
        metric: "50%",
        result: "Improvement in patient outcomes",
        description:
          "Created AI strategy for healthcare system resulting in improved patient care and operational efficiency.",
      },
      {
        title: "Manufacturing AI Strategy",
        industry: "Manufacturing",
        metric: "40%",
        result: "Reduction in operational costs",
        description:
          "Developed AI strategy for manufacturing company leading to significant cost savings and efficiency gains.",
      },
    ],
    techStack: [
      {
        name: "Strategy Frameworks",
        category: "Consulting",
      },
      {
        name: "AI Technologies",
        category: "Intelligence",
      },
      {
        name: "Analytics Platforms",
        category: "Insights",
      },
      {
        name: "Project Management",
        category: "Execution",
      },
      { name: "ROI Measurement", category: "Analytics" },
    ],
    pricingNotes: {
      model: "Consulting-based pricing",
      description: "AI strategy consulting packages starting from $15,000",
      startingPrice: "$15,000",
      features: [
        "Business assessment",
        "Strategy development",
        "Technology roadmap",
        "Implementation planning",
        "Ongoing support",
      ],
    },
    faqs: [
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
    primaryCTA: {
      text: "Start AI Strategy Consulting",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download Strategy Guide",
      href: "#lead-magnet-strategy-guide",
      type: "link",
    },
    seoTitle:
      "AI Strategy Consulting | Strategic AI Roadmap & Planning | RejoiceHub",
    seoDescription:
      "Develop a comprehensive AI strategy that aligns with your business goals. Expert consulting for AI adoption and implementation planning.",
    leadMagnetIds: ["strategy-guide", "ai-assessment"],
    relatedServices: ["ai-integration", "digital-transformation"],
  },

  "api-development": {
    serviceId: "api-development",
    title: "Custom API Development Services",
    subhead:
      "Build robust, scalable APIs that power your applications and enable seamless integrations. Our API development services create secure, high-performance interfaces that connect your systems and drive innovation.",
    problems: [
      {
        title: "System Integration Challenges",
        description:
          "Different systems and applications struggle to communicate effectively, leading to data silos and inefficiencies.",
      },
      {
        title: "Scalability Limitations",
        description:
          "Existing APIs lack the performance and scalability needed to handle growing user demands and data volumes.",
      },
      {
        title: "Security Vulnerabilities",
        description:
          "APIs without proper security measures are vulnerable to attacks and data breaches.",
      },
      {
        title: "Development Complexity",
        description:
          "Building and maintaining APIs requires significant development resources and expertise.",
      },
    ],
    outcomes: [
      {
        title: "Seamless System Integration",
        description:
          "Connect all your systems and applications through robust, well-designed APIs.",
        metric: "90%+",
      },
      {
        title: "High Performance & Scalability",
        description:
          "APIs that handle high traffic and scale with your business growth.",
        metric: "99.9%",
      },
      {
        title: "Enhanced Security",
        description:
          "Enterprise-grade security with authentication, authorization, and data protection.",
        metric: "100%",
      },
      {
        title: "Reduced Development Time",
        description:
          "Faster application development with reusable, well-documented APIs.",
        metric: "50%+",
      },
    ],
    capabilities: [
      {
        title: "RESTful API Development",
        description:
          "Design and develop RESTful APIs following industry best practices and standards.",
        features: [
          "API design",
          "RESTful architecture",
          "Documentation",
          "Testing",
        ],
      },
      {
        title: "GraphQL API Development",
        description:
          "Build flexible GraphQL APIs for efficient data querying and manipulation.",
        features: [
          "Schema design",
          "Resolver development",
          "Query optimization",
          "Performance tuning",
        ],
      },
      {
        title: "API Security & Authentication",
        description:
          "Implement comprehensive security measures including authentication and authorization.",
        features: [
          "OAuth 2.0",
          "JWT tokens",
          "Rate limiting",
          "Data encryption",
        ],
      },
      {
        title: "API Management & Monitoring",
        description:
          "Deploy, manage, and monitor APIs with comprehensive analytics and performance tracking.",
        features: [
          "API gateway",
          "Analytics dashboard",
          "Performance monitoring",
          "Error tracking",
        ],
      },
    ],
    industries: [
      {
        name: "E-commerce",
        icon : Ecommerce,
        outcome:
          "APIs for payment processing, inventory management, and customer data integration.",
      },
      {
        name: "Financial Services",
        icon : fianancialService,
        outcome:
          "Secure APIs for banking operations, payment processing, and financial data exchange.",
      },
      {
        name: "Healthcare",
        icon : healthcare,
        outcome:
          "HIPAA-compliant APIs for patient data, medical records, and healthcare system integration.",
      },
      {
        name: "IOT & Smart Devices",
        icon : IOTSmartDevices,
        outcome:
          "APIs for device communication, data collection, and IOT platform integration.",
      },
      {
        name: "Mobile Applications",
        icon : MobileApplications,
        outcome:
          "Backend APIs for mobile apps with real-time data synchronization and offline capabilities.",
      },
      {
        name: "Enterprise Software",
        icon : EnterpriseSoftware,
        outcome:
          "Enterprise APIs for internal system integration, data sharing, and workflow automation.",
      },
    ],
    processSteps: [
      {
        step: 1,
        title: "API Requirements & Design",
        description:
          "Define API requirements, design architecture, and create detailed specifications.",
        duration: "1-2 weeks",
        deliverables: [
          "Requirements document",
          "API design",
          "Architecture plan",
          "Security specifications",
        ],
      },
      {
        step: 2,
        title: "API Development & Testing",
        description:
          "Develop APIs with comprehensive testing including unit, integration, and security testing.",
        duration: "3-6 weeks",
        deliverables: [
          "API development",
          "Comprehensive testing",
          "Documentation",
          "Security implementation",
        ],
      },
      {
        step: 3,
        title: "Deployment & Integration",
        description:
          "Deploy APIs to production environment and integrate with existing systems.",
        duration: "1-2 weeks",
        deliverables: [
          "Production deployment",
          "System integration",
          "Performance optimization",
          "Monitoring setup",
        ],
      },
      {
        step: 4,
        title: "Maintenance & Support",
        description:
          "Provide ongoing maintenance, updates, and support for API performance and security.",
        duration: "Ongoing",
        deliverables: [
          "Performance monitoring",
          "Security updates",
          "Feature enhancements",
          "Technical support",
        ],
      },
    ],
    caseStudies: [
      {
        title: "E-commerce API Platform",
        industry: "E-commerce",
        metric: "300%",
        result: "Increase in integration speed",
        description:
          "Developed comprehensive API platform for e-commerce company enabling seamless third-party integrations.",
      },
      {
        title: "Financial Services API",
        industry: "Financial Services",
        metric: "99.99%",
        result: "API uptime",
        description:
          "Built secure, high-performance APIs for financial services company with enterprise-grade security.",
      },
      {
        title: "Healthcare API Integration",
        industry: "Healthcare",
        metric: "50%",
        result: "Reduction in data processing time",
        description:
          "Developed HIPAA-compliant APIs for healthcare system integration and patient data management.",
      },
    ],
    techStack: [
      { name: "REST APIs", category: "Architecture" },
      {
        name: "GraphQL",
        category: "Query Language",
      },
      { name: "Node.js", category: "Backend" },
      { name: "Python", category: "Development" },
      {
        name: "AWS/Azure",
        category: "Infrastructure",
      },
    ],
    pricingNotes: {
      model: "Project-based pricing",
      description: "API development projects starting from $20,000",
      startingPrice: "$20,000",
      features: [
        "API design",
        "Development",
        "Testing",
        "Documentation",
        "Deployment",
        "Support",
      ],
    },
    faqs: [
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
    primaryCTA: {
      text: "Start API Development",
      href: "https://calendly.com/dipak-rejoicehub",
      type: "external",
    },
    secondaryCTA: {
      text: "Download API Guide",
      href: "#lead-magnet-api-guide",
      type: "link",
    },
    seoTitle:
      "API Development Services | Custom REST & GraphQL APIs | RejoiceHub",
    seoDescription:
      "Build robust, scalable APIs that power your applications and enable seamless integrations. Secure, high-performance API development services.",
    leadMagnetIds: ["api-guide", "integration-guide"],
    relatedServices: ["web-development-services", "devops-consulting-services"],
  },
};

/**
 * Get service content by service ID
 */
export function getServiceContent(serviceId: string): ServiceContent | null {
  return serviceContentRegistry[serviceId] || null;
}

/**
 * Get all service IDs
 */
export function getAllServiceIds(): string[] {
  return Object.keys(serviceContentRegistry);
}

/**
 * Get related services content
 */
export function getRelatedServices(
  currentServiceId: string,
  limit: number = 3
): ServiceContent[] {
  const currentService = serviceContentRegistry[currentServiceId];
  if (!currentService || !currentService.relatedServices) {
    return [];
  }

  return currentService.relatedServices
    .map((id) => serviceContentRegistry[id])
    .filter(Boolean)
    .slice(0, limit);
}

/**
 * Get services by category/tag
 */
export function getServicesByCategory(category: string): ServiceContent[] {
  return Object.values(serviceContentRegistry).filter(
    (service) =>
      service.serviceId.includes(category) ||
      service.title.toLowerCase().includes(category.toLowerCase())
  );
}

/**
 * Generate meta tags for service page
 */
export function generateServiceMeta(serviceContent: ServiceContent) {
  return [
    { title: serviceContent.seoTitle },
    { name: "description", content: serviceContent.seoDescription },
    {
      name: "keywords",
      content: `${serviceContent.title}, AI automation, ${serviceContent.serviceId.replace(/-/g, " ")}, RejoiceHub`,
    },
    { name: "author", content: "RejoiceHub" },
    { name: "robots", content: "index, follow" },
    // Open Graph tags
    { property: "og:title", content: serviceContent.seoTitle },
    { property: "og:description", content: serviceContent.seoDescription },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "RejoiceHub" },
    { property: "og:locale", content: "en_US" },
    // Twitter tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: serviceContent.seoTitle },
    { name: "twitter:description", content: serviceContent.seoDescription },
    { name: "twitter:site", content: "@RejoiceHub" },
    ...(serviceContent.ogImage
      ? [
        { property: "og:image", content: serviceContent.ogImage },
        { name: "twitter:image", content: serviceContent.ogImage },
      ]
      : []),
  ];
}

/**
 * Generate JSON-LD structured data for service
 */
export function generateServiceJsonLd(serviceContent: ServiceContent) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",                      // ✅ Root type is Service
    "name": serviceContent.title,
    "description": serviceContent.seoDescription,
    "provider": {
      "@type": "Organization",
      "name": "RejoiceHub",
      "url": "https://rejoicehub.com",
      "logo": "https://rejoicehub.com/rejoice-main-logo.svg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-98251-22840",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    },
    "areaServed": "Worldwide",
    "serviceType": "AI Automation Services",
    "category": "Technology Consulting",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Enterprise, SMB, Startups"
    },
    "offers": {
      "@type": "Offer",
      "description": serviceContent.pricingNotes.description,
      "availability": "https://schema.org/InStock",
      ...(serviceContent.pricingNotes.startingPrice
        ? {
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": serviceContent.pricingNotes.startingPrice
                .replace("$", "")
                .replace(",", ""),
              "priceCurrency": "USD"
            }
          }
        : {})
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services Catalog",
      "itemListElement": serviceContent.capabilities.map((capability, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": capability.title,
          "description": capability.description
        },
        "position": index + 1
      }))
    }
  };
}

/**
 * Generate breadcrumb structured data for service
 */
export function generateServiceBreadcrumbJsonLd(
  serviceContent: ServiceContent
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rejoicehub.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://rejoicehub.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: serviceContent.title,
        item: `https://rejoicehub.com/services/${serviceContent.serviceId}`,
      },
    ],
  };
}

/**
 * Generate FAQ structured data for service
 */
export function generateServiceFaqJsonLd(serviceContent: ServiceContent) {
  if (!serviceContent.faqs || serviceContent.faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceContent.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
