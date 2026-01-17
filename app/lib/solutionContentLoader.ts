import { SolutionContent } from '~/components/solutions/SolutionLayout';
import { solutionsDetail } from '~/data/solutions/solutionsDetail';

// Type for solution content registry
export interface SolutionContentRegistry {
  [solutionId: string]: SolutionContent;
}

// Central registry of all solution content
export const solutionContentRegistry: SolutionContentRegistry = {
  'persona': {
    solutionId: 'persona',
    title: 'Personas AI',
    subhead: 'AI-Powered Virtual Assistant',
    description: 'Simplify your workflow with our AI-powered Virtual Assistant, designed to provide instant support and guidance. Whether it\'s answering queries or assisting with tasks, our AI Agent enhances productivity with real-time, intelligent responses.',
    bannerImage: 'https://cms.rejoicehub.com/uploads/Personas_Image_992f70bdc8.png',
    overviewTitle: 'Personas AI',
    overviewDescription: 'Our AI-powered Virtual Assistant is designed to provide seamless assistance, enhancing productivity and user experience. It efficiently handles queries, guides users with expert insights, and streamlines tasks with real-time intelligence. Whether for customer support, business operations, or personal assistance, our AI Agent ensures smooth interactions, reducing workload and improving response accuracy.',
    overviewImage: 'https://cms.rejoicehub.com/uploads/Personas_56fe9dfed3.png',
    featuresTitle: 'Benefits of Our Personas AI',
    features: [
      {
        title: 'Instant Assistance',
        description: 'Provides quick and accurate responses to queries, ensuring seamless user support.',
        icon: '⚡'
      },
      {
        title: 'Increased Productivity',
        description: 'Automates repetitive tasks, freeing up time for high-value activities.',
        icon: '📈'
      },
      {
        title: 'Effortless Deployment',
        description: 'Easily set up and customize without complex integrations or technical expertise.',
        icon: '🚀'
      },
      {
        title: 'Enhanced User Experience',
        description: 'Engages users with human-like interactions, improving satisfaction and efficiency.',
        icon: '😊'
      },
      {
        title: 'Scalable Solutions',
        description: 'Grows with your business needs, handling increased workload seamlessly.',
        icon: '📊'
      },
      {
        title: '24/7 Availability',
        description: 'Provides round-the-clock support without breaks or downtime.',
        icon: '🕐'
      }
    ],
    benefits: [
      {
        title: 'Response Time Reduction',
        description: 'Cut response times by up to 80% with instant AI-powered assistance.',
        metric: '80%',
        icon: '⚡'
      },
      {
        title: 'Cost Savings',
        description: 'Reduce operational costs by automating routine tasks and queries.',
        metric: '60%',
        icon: '💰'
      },
      {
        title: 'Customer Satisfaction',
        description: 'Improve customer satisfaction with consistent, accurate responses.',
        metric: '95%',
        icon: '😊'
      }
    ],
    useCases: [
      {
        title: 'Customer Support',
        description: 'Handle customer inquiries, provide product information, and resolve common issues automatically.',
        icon: '🎧'
      },
      {
        title: 'Business Operations',
        description: 'Streamline internal processes, manage schedules, and assist with administrative tasks.',
        icon: '🏢'
      },
      {
        title: 'Personal Assistance',
        description: 'Provide personalized recommendations, reminders, and daily task management.',
        icon: '👤'
      },
      {
        title: 'Sales Support',
        description: 'Qualify leads, provide product demos, and assist with the sales process.',
        icon: '💼'
      }
    ],
    industries: [
      {
        name: 'E-commerce',
        outcome: 'Enhanced customer experience with instant product support and recommendations.',
        icon: '🛒'
      },
      {
        name: 'Healthcare',
        outcome: 'Improved patient care with 24/7 health information and appointment scheduling.',
        icon: '🏥'
      },
      {
        name: 'Education',
        outcome: 'Personalized learning experiences with intelligent tutoring and support.',
        icon: '🎓'
      },
      {
        name: 'Finance',
        outcome: 'Secure financial guidance and transaction support with advanced security.',
        icon: '🏦'
      },
      {
        name: 'Real Estate',
        outcome: 'Streamlined property inquiries and virtual property tours.',
        icon: '🏠'
      },
      {
        name: 'Travel',
        outcome: 'Personalized travel recommendations and booking assistance.',
        icon: '✈️'
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Discovery & Analysis',
        description: 'We analyze your business needs and current processes to design the perfect AI solution.',
        duration: '1-2 weeks',
        deliverables: ['Requirements analysis', 'Process mapping', 'Solution design']
      },
      {
        step: 2,
        title: 'Development & Training',
        description: 'Our team develops and trains the AI model with your specific data and requirements.',
        duration: '2-4 weeks',
        deliverables: ['AI model development', 'Data training', 'Integration setup']
      },
      {
        step: 3,
        title: 'Testing & Optimization',
        description: 'Comprehensive testing and optimization to ensure peak performance and accuracy.',
        duration: '1-2 weeks',
        deliverables: ['Performance testing', 'Accuracy optimization', 'Security validation']
      },
      {
        step: 4,
        title: 'Deployment & Support',
        description: 'Seamless deployment with ongoing support and continuous improvement.',
        duration: 'Ongoing',
        deliverables: ['Live deployment', 'Training sessions', '24/7 support']
      }
    ],
    caseStudies: [
      {
        title: 'E-commerce Customer Support',
        industry: 'Online Retail',
        metric: '75%',
        result: 'Faster Response',
        description: 'Implemented AI assistant for product inquiries, reducing response time from 2 hours to 30 seconds.'
      },
      {
        title: 'Healthcare Appointment System',
        industry: 'Medical Practice',
        metric: '90%',
        result: 'Satisfaction Rate',
        description: 'Automated appointment scheduling and patient inquiries, improving patient satisfaction and reducing administrative workload.'
      }
    ],
    techStack: [
      { name: 'OpenAI GPT', category: 'AI/ML',logo : "/assets/icon/gpt4.svg" },
      { name: 'React', category: 'Frontend',logo : "/assets/icon/reactjs.svg" },
      { name: 'Node.js', category: 'Backend',logo : "/assets/icon/NodeJS.svg" },
      { name: 'MongoDB', category: 'Database',logo : "/assets/icon/MongoDB.svg" },
      { name: 'AWS', category: 'Cloud',logo : "/assets/icon/aws.svg" },
      { name: 'Docker', category: 'DevOps' ,logo : "/assets/icon/docker.svg"}
    ],
    faqs: [
      {
        question: 'How quickly can the AI assistant be deployed?',
        answer: 'Our AI assistant can typically be deployed within 2-4 weeks, depending on your specific requirements and integration complexity.'
      },
      {
        question: 'Can the AI assistant be customized for our industry?',
        answer: 'Yes, our AI assistant is fully customizable and can be trained with industry-specific knowledge and terminology.'
      },
      {
        question: 'What kind of support do you provide after deployment?',
        answer: 'We provide 24/7 technical support, regular updates, and continuous optimization to ensure optimal performance.'
      },
      {
        question: 'Is the AI assistant secure and compliant?',
        answer: 'Yes, we implement enterprise-grade security measures and ensure compliance with relevant data protection regulations.'
      },
      {
        question: 'Can the AI assistant integrate with our existing systems?',
        answer: 'Absolutely! Our AI assistant is designed to integrate seamlessly with most existing business systems and platforms.'
      }
    ],
    primaryCTA: {
      text: 'Get Started Today',
      href: '/contact',
      type: 'link'
    },
    secondaryCTA: {
      text: 'Schedule Demo',
      href: '/contact',
      type: 'link'
    },
    seoTitle: 'Personas AI | RejoiceHub Solutions',
    seoDescription: 'Simplify your workflow with our AI-powered Virtual Assistant, designed to provide instant support and guidance. Whether it\'s answering queries or assisting with tasks, our AI Agent enhances productivity with real-time, intelligent responses.',
    ogImage: 'https://cms.rejoicehub.com/uploads/Personas_Image_992f70bdc8.png',
    relatedSolutions: ['ai-agent-development', 'generative-ai-solutions']
  }
};

/**
 * Get solution content by ID
 */
export function getSolutionContent(solutionId: string): SolutionContent | null {
  return solutionContentRegistry[solutionId] || null;
}

/**
 * Get all solution IDs
 */
export function getAllSolutionIds(): string[] {
  return Object.keys(solutionContentRegistry);
}

/**
 * Generate solution meta tags
 */
export function generateSolutionMeta(solutionContent: SolutionContent) {
  return [
    { title: solutionContent.seoTitle },
    { name: "description", content: solutionContent.seoDescription },
    { name: "keywords", content: `AI solution, ${solutionContent.title}, virtual assistant, automation, business intelligence` },
    { name: "author", content: "RejoiceHub" },
    { name: "robots", content: "index, follow" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    ...(solutionContent.ogImage ? [{ property: "og:image", content: solutionContent.ogImage }] : [])
  ];
}

/**
 * Generate JSON-LD structured data for solution
 */
export function generateSolutionJsonLd(solutionContent: SolutionContent) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": solutionContent.title,
    "description": solutionContent.seoDescription,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "RejoiceHub",
      "url": "https://rejoicehub.com",
      "logo": "https://rejoicehub.com/rejoice-main-logo.svg"
    },
    "featureList": solutionContent.features.map(feature => feature.title),
    "screenshot": solutionContent.ogImage,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
}

/**
 * Generate breadcrumb structured data for solution
 */
export function generateSolutionBreadcrumbJsonLd(solutionContent: SolutionContent) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rejoicehub.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": "https://rejoicehub.com/solutions"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": solutionContent.title,
        "item": `https://rejoicehub.com/solutions/${solutionContent.solutionId}`
      }
    ]
  };
}

/**
 * Generate FAQ structured data for solution
 */
export function generateSolutionFaqJsonLd(solutionContent: SolutionContent) {
  if (!solutionContent.faqs || solutionContent.faqs.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": solutionContent.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
