import { 
  AgentBlueprint, 
  AgentCategory, 
  BlueprintComponent,
  AgentPromptSuggestion
} from '~/types/aiAgentBuilderTypes';

// Predefined blueprint templates based on common agent types
const BLUEPRINT_TEMPLATES: Record<AgentCategory, AgentBlueprint> = {
  'customer-support': {
    id: 'cs-blueprint-001',
    title: 'Intelligent Customer Support Agent',
    description: 'An AI-powered customer support system that handles inquiries, tickets, and provides 24/7 assistance with natural language understanding.',
    category: 'customer-support',
    estimatedDevelopmentTime: '4-6 weeks',
    core_components: {}, 
    components: [
      {
        id: 'nlp-engine',
        name: 'Natural Language Processing Engine',
        description: 'Core NLP system for understanding customer queries and intent recognition',
        type: 'core',
        estimatedTime: '1-2 weeks',
        technologies: ['OpenAI GPT-4', 'spaCy', 'NLTK']
      },
      {
        id: 'knowledge-base',
        name: 'Dynamic Knowledge Base',
        description: 'Searchable repository of company information, FAQs, and product documentation',
        type: 'core',
        estimatedTime: '1 week',
        technologies: ['Vector Database', 'Elasticsearch', 'RAG Architecture']
      },
      {
        id: 'ticket-system',
        name: 'Automated Ticket Management',
        description: 'Intelligent ticket routing, priority assignment, and escalation workflows',
        type: 'feature',
        estimatedTime: '1-2 weeks',
        technologies: ['REST API', 'Database Integration', 'Workflow Engine']
      },
      {
        id: 'multi-channel',
        name: 'Multi-Channel Integration',
        description: 'Seamless integration across chat, email, and social media platforms',
        type: 'integration',
        estimatedTime: '1 week',
        technologies: ['Webhook APIs', 'Socket.io', 'Platform SDKs']
      }
    ],
    deliverables: [
      'AI-powered chat interface with natural language understanding',
      'Automated ticket creation and routing system',
      'Knowledge base integration with intelligent search',
      'Analytics dashboard for support metrics',
      'Multi-channel deployment guide',
      'Admin panel for configuration and training'
    ],
    keyFeatures: [
      '24/7 automated customer support',
      'Intelligent query understanding and routing',
      'Escalation to human agents when needed',
      'Multilingual support capabilities',
      'Real-time analytics and reporting',
      'Continuous learning from interactions'
    ],
    technicalSpecs: [
      'React/Next.js frontend with real-time chat',
      'Node.js/Python backend with NLP processing',
      'Vector database for knowledge retrieval',
      'RESTful APIs with webhook support',
      'Cloud deployment (AWS/Azure/GCP)',
      'Scalable architecture for high concurrent users'
    ]
  },
  
  'data-analysis': {
    id: 'da-blueprint-002',
    title: 'Advanced Data Analysis Agent',
    description: 'An intelligent data analyst that processes complex datasets, generates insights, and creates automated reports with natural language explanations.',
    category: 'data-analysis',
    estimatedDevelopmentTime: '5-7 weeks',
    core_components: {}, 
    components: [
      {
        id: 'data-processor',
        name: 'Intelligent Data Processing Engine',
        description: 'Advanced data cleaning, transformation, and statistical analysis capabilities',
        type: 'core',
        estimatedTime: '2-3 weeks',
        technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Apache Spark']
      },
      {
        id: 'ml-insights',
        name: 'Machine Learning Insights Generator',
        description: 'Automated pattern detection, anomaly identification, and predictive modeling',
        type: 'core',
        estimatedTime: '2 weeks',
        technologies: ['TensorFlow', 'PyTorch', 'XGBoost', 'Statistical Models']
      },
      {
        id: 'visualization',
        name: 'Dynamic Visualization Suite',
        description: 'Interactive charts, graphs, and dashboard generation with export capabilities',
        type: 'feature',
        estimatedTime: '1-2 weeks',
        technologies: ['D3.js', 'Plotly', 'Tableau API', 'Custom Charts']
      },
      {
        id: 'report-generator',
        name: 'Automated Report Generation',
        description: 'Natural language report writing with insights and recommendations',
        type: 'feature',
        estimatedTime: '1 week',
        technologies: ['GPT-4', 'Template Engine', 'PDF Generation']
      }
    ],
    deliverables: [
      'Intelligent data processing and cleaning system',
      'Automated insight generation and pattern detection',
      'Interactive visualization dashboard',
      'Natural language report generation',
      'Data source integration capabilities',
      'Scheduled analysis and alerting system'
    ],
    keyFeatures: [
      'Automated data quality assessment',
      'Machine learning-powered insights',
      'Natural language query interface',
      'Real-time data processing capabilities',
      'Customizable visualization templates',
      'Predictive analytics and forecasting'
    ],
    technicalSpecs: [
      'Python-based analytics engine with Jupyter integration',
      'React dashboard with real-time data updates',
      'Microservices architecture for scalable processing',
      'Data pipeline orchestration with Apache Airflow',
      'Cloud-native deployment with auto-scaling',
      'API-first design for easy integration'
    ]
  },

  'marketing-automation': {
    id: 'ma-blueprint-003',
    title: 'Intelligent Marketing Automation Agent',
    description: 'A comprehensive marketing AI that manages campaigns, personalizes content, and optimizes engagement across multiple channels.',
    category: 'marketing-automation',
    estimatedDevelopmentTime: '6-8 weeks',
    core_components: {}, 
    components: [
      {
        id: 'campaign-engine',
        name: 'Smart Campaign Management Engine',
        description: 'Automated campaign creation, scheduling, and optimization with A/B testing',
        type: 'core',
        estimatedTime: '2-3 weeks',
        technologies: ['Marketing APIs', 'Campaign Logic', 'A/B Testing Framework']
      },
      {
        id: 'personalization',
        name: 'AI-Powered Personalization System',
        description: 'Dynamic content personalization based on user behavior and preferences',
        type: 'core',
        estimatedTime: '2 weeks',
        technologies: ['Recommendation Engine', 'User Profiling', 'Content AI']
      },
      {
        id: 'analytics-insights',
        name: 'Marketing Analytics & Insights',
        description: 'Comprehensive tracking, attribution modeling, and performance optimization',
        type: 'feature',
        estimatedTime: '1-2 weeks',
        technologies: ['Analytics APIs', 'Attribution Models', 'Performance Tracking']
      },
      {
        id: 'multi-channel',
        name: 'Multi-Channel Integration Hub',
        description: 'Unified management across email, social media, SMS, and web channels',
        type: 'integration',
        estimatedTime: '1-2 weeks',
        technologies: ['Email APIs', 'Social APIs', 'SMS Gateway', 'Web Integration']
      }
    ],
    deliverables: [
      'Automated campaign creation and management system',
      'AI-driven content personalization engine',
      'Multi-channel marketing orchestration platform',
      'Advanced analytics and attribution dashboard',
      'Lead scoring and nurturing workflows',
      'Marketing ROI optimization tools'
    ],
    keyFeatures: [
      'Intelligent campaign optimization',
      'Behavioral-based personalization',
      'Cross-channel customer journey mapping',
      'Automated lead scoring and qualification',
      'Dynamic content generation',
      'Real-time performance monitoring'
    ],
    technicalSpecs: [
      'Cloud-based microservices architecture',
      'Event-driven marketing automation workflows',
      'Real-time data processing and analytics',
      'API integrations with major marketing platforms',
      'Scalable message queue system',
      'Advanced security and compliance features'
    ]
  },

  'sales-optimization': {
    id: 'so-blueprint-004',
    title: 'AI Sales Optimization Agent',
    description: 'An intelligent sales assistant that qualifies leads, predicts deal outcomes, and provides personalized sales strategies.',
    category: 'sales-optimization',
    estimatedDevelopmentTime: '5-7 weeks',
    core_components: {}, 
    components: [
      {
        id: 'lead-qualification',
        name: 'Intelligent Lead Qualification System',
        description: 'AI-powered lead scoring, qualification, and routing to appropriate sales teams',
        type: 'core',
        estimatedTime: '2 weeks',
        technologies: ['Machine Learning', 'Lead Scoring Algorithms', 'CRM Integration']
      },
      {
        id: 'sales-predictions',
        name: 'Predictive Sales Analytics',
        description: 'Deal outcome prediction, pipeline forecasting, and revenue optimization',
        type: 'core',
        estimatedTime: '2-3 weeks',
        technologies: ['Predictive Models', 'Time Series Analysis', 'Statistical Forecasting']
      },
      {
        id: 'conversation-ai',
        name: 'Sales Conversation Intelligence',
        description: 'Call analysis, sentiment tracking, and next-best-action recommendations',
        type: 'feature',
        estimatedTime: '1-2 weeks',
        technologies: ['Speech Recognition', 'NLP', 'Sentiment Analysis']
      },
      {
        id: 'crm-integration',
        name: 'Advanced CRM Integration Suite',
        description: 'Seamless integration with major CRM platforms and sales tools',
        type: 'integration',
        estimatedTime: '1 week',
        technologies: ['Salesforce API', 'HubSpot API', 'Custom CRM Connectors']
      }
    ],
    deliverables: [
      'AI-powered lead qualification and scoring system',
      'Predictive analytics dashboard for sales forecasting',
      'Conversation intelligence and coaching tools',
      'Automated follow-up and nurturing sequences',
      'CRM integration with data synchronization',
      'Sales performance optimization recommendations'
    ],
    keyFeatures: [
      'Automated lead qualification and routing',
      'AI-driven deal outcome predictions',
      'Sales conversation analysis and insights',
      'Personalized sales strategy recommendations',
      'Pipeline health monitoring and alerts',
      'Revenue forecasting and goal tracking'
    ],
    technicalSpecs: [
      'Machine learning pipeline for continuous model improvement',
      'Real-time CRM data synchronization',
      'Scalable cloud infrastructure for high-volume processing',
      'Advanced security for sensitive sales data',
      'API-first architecture for easy integrations',
      'Mobile-responsive interface for sales teams'
    ]
  },

  'content-generation': {
    id: 'cg-blueprint-005',
    title: 'AI Content Generation Agent',
    description: 'A sophisticated content creation AI that generates, optimizes, and manages content across multiple formats and platforms.',
    category: 'content-generation',
    estimatedDevelopmentTime: '4-6 weeks',
    core_components: {}, 
    components: [
      {
        id: 'content-engine',
        name: 'Advanced Content Generation Engine',
        description: 'Multi-format content creation with style adaptation and brand consistency',
        type: 'core',
        estimatedTime: '2-3 weeks',
        technologies: ['GPT-4', 'Content Templates', 'Style Transfer', 'Brand Guidelines AI']
      },
      {
        id: 'seo-optimization',
        name: 'SEO & Performance Optimization',
        description: 'Automated SEO optimization, keyword integration, and content performance tracking',
        type: 'feature',
        estimatedTime: '1-2 weeks',
        technologies: ['SEO APIs', 'Keyword Analysis', 'Content Scoring', 'SERP Analysis']
      },
      {
        id: 'content-calendar',
        name: 'Intelligent Content Calendar',
        description: 'Automated content planning, scheduling, and cross-platform publishing',
        type: 'feature',
        estimatedTime: '1 week',
        technologies: ['Scheduling Engine', 'Platform APIs', 'Content Management']
      },
      {
        id: 'analytics-insights',
        name: 'Content Performance Analytics',
        description: 'Comprehensive content performance tracking and optimization insights',
        type: 'integration',
        estimatedTime: '1 week',
        technologies: ['Analytics APIs', 'Performance Tracking', 'A/B Testing']
      }
    ],
    deliverables: [
      'Multi-format AI content generation system',
      'SEO-optimized content creation workflows',
      'Automated content calendar and scheduling',
      'Brand consistency and style guide enforcement',
      'Content performance analytics dashboard',
      'Cross-platform publishing automation'
    ],
    keyFeatures: [
      'Multi-format content generation (blog, social, email, etc.)',
      'Automated SEO optimization and keyword integration',
      'Brand voice and style consistency maintenance',
      'Content calendar management and scheduling',
      'Performance tracking and optimization suggestions',
      'Plagiarism detection and originality verification'
    ],
    technicalSpecs: [
      'Cloud-based content generation pipeline',
      'Advanced NLP models for content quality assessment',
      'API integrations with major publishing platforms',
      'Content versioning and revision management',
      'Scalable storage for content assets and templates',
      'Real-time collaboration features for content teams'
    ]
  },

  'process-automation': {
    id: 'pa-blueprint-006',
    title: 'Intelligent Process Automation Agent',
    description: 'A comprehensive RPA solution that automates complex business processes with AI-enhanced decision making.',
    category: 'process-automation',
    estimatedDevelopmentTime: '6-8 weeks',
    core_components: {}, 
    components: [
      {
        id: 'workflow-engine',
        name: 'AI-Enhanced Workflow Engine',
        description: 'Intelligent process orchestration with dynamic decision-making capabilities',
        type: 'core',
        estimatedTime: '3-4 weeks',
        technologies: ['Workflow Orchestration', 'Decision Trees', 'Process Mining', 'AI Logic']
      },
      {
        id: 'document-processing',
        name: 'Intelligent Document Processing',
        description: 'OCR, data extraction, and document understanding for automated processing',
        type: 'core',
        estimatedTime: '2 weeks',
        technologies: ['OCR Technology', 'Document AI', 'Data Extraction', 'Form Processing']
      },
      {
        id: 'system-integration',
        name: 'Enterprise System Integration',
        description: 'Seamless integration with existing business systems and applications',
        type: 'integration',
        estimatedTime: '1-2 weeks',
        technologies: ['API Integrations', 'Database Connectors', 'Legacy System Adapters']
      },
      {
        id: 'monitoring-analytics',
        name: 'Process Monitoring & Analytics',
        description: 'Real-time process monitoring, performance analytics, and optimization insights',
        type: 'feature',
        estimatedTime: '1 week',
        technologies: ['Process Analytics', 'Performance Monitoring', 'Optimization Algorithms']
      }
    ],
    deliverables: [
      'Intelligent workflow automation engine',
      'Document processing and data extraction system',
      'Enterprise system integration framework',
      'Process monitoring and analytics dashboard',
      'Exception handling and human escalation workflows',
      'Compliance and audit trail management'
    ],
    keyFeatures: [
      'Drag-and-drop workflow designer',
      'AI-powered decision making in processes',
      'Intelligent document and data processing',
      'Real-time process monitoring and alerting',
      'Exception handling and human-in-the-loop workflows',
      'Comprehensive audit trails and compliance reporting'
    ],
    technicalSpecs: [
      'Microservices architecture for scalable automation',
      'Cloud-native deployment with high availability',
      'Advanced security and compliance frameworks',
      'Real-time monitoring and alerting systems',
      'API-first design for easy integration',
      'Containerized deployment with Kubernetes support'
    ]
  },

  'custom': {
    id: 'custom-blueprint-007',
    title: 'Custom AI Agent Solution',
    description: 'A tailored AI solution designed specifically for your unique business requirements and use cases.',
    category: 'custom',
    estimatedDevelopmentTime: '8-12 weeks',
    core_components: {}, 
    components: [
      {
        id: 'requirements-analysis',
        name: 'Comprehensive Requirements Analysis',
        description: 'In-depth analysis of your specific needs and custom solution design',
        type: 'core',
        estimatedTime: '1-2 weeks',
        technologies: ['Business Analysis', 'Technical Architecture', 'Use Case Modeling']
      },
      {
        id: 'custom-ai-engine',
        name: 'Custom AI Engine Development',
        description: 'Bespoke AI models and algorithms tailored to your specific domain',
        type: 'core',
        estimatedTime: '4-6 weeks',
        technologies: ['Custom ML Models', 'Domain-Specific AI', 'Advanced Algorithms']
      },
      {
        id: 'integration-framework',
        name: 'Custom Integration Framework',
        description: 'Tailored integrations with your existing systems and workflows',
        type: 'integration',
        estimatedTime: '2-3 weeks',
        technologies: ['Custom APIs', 'System Adapters', 'Data Pipelines']
      },
      {
        id: 'ui-ux-design',
        name: 'Custom User Experience Design',
        description: 'Bespoke user interface and experience design for your specific needs',
        type: 'feature',
        estimatedTime: '1-2 weeks',
        technologies: ['Custom UI Components', 'UX Design', 'Responsive Design']
      }
    ],
    deliverables: [
      'Comprehensive technical specification document',
      'Custom-built AI engine tailored to your domain',
      'Bespoke user interface and experience design',
      'Full integration with your existing systems',
      'Custom analytics and reporting dashboard',
      'Complete documentation and training materials'
    ],
    keyFeatures: [
      'Fully customized to your specific requirements',
      'Domain-specific AI models and algorithms',
      'Seamless integration with existing workflows',
      'Scalable architecture for future growth',
      'Comprehensive testing and quality assurance',
      'Ongoing support and maintenance options'
    ],
    technicalSpecs: [
      'Architecture design based on your infrastructure',
      'Custom technology stack selection',
      'Performance optimization for your use cases',
      'Security implementation per your requirements',
      'Deployment strategy aligned with your policies',
      'Scalability planning for future expansion'
    ]
  }
};

// Predefined prompt suggestions for the hero section
export const AGENT_PROMPT_SUGGESTIONS: AgentPromptSuggestion[] = [
  {
    id: 'cs-001',
    label: 'Customer Support Chatbot',
    description: 'An AI agent to handle customer inquiries and support tickets 24/7',
    category: 'customer-support'
  },
  {
    id: 'da-001', 
    label: 'Data Analysis Agent',
    description: 'An AI agent to analyze data and generate actionable business insights',
    category: 'data-analysis'
  },
  {
    id: 'ma-001',
    label: 'Email Marketing Automation',
    description: 'An AI agent to personalize and automate email marketing campaigns',
    category: 'marketing-automation'
  },
  {
    id: 'so-001',
    label: 'Sales Lead Qualification',
    description: 'An AI agent to qualify leads and optimize sales processes',
    category: 'sales-optimization'
  },
  {
    id: 'cg-001',
    label: 'Content Generation Bot',
    description: 'An AI agent to create engaging content across multiple formats',
    category: 'content-generation'
  },
  {
    id: 'pa-001',
    label: 'Process Automation Agent',
    description: 'An AI agent to automate repetitive business processes',
    category: 'process-automation'
  }
];

/**
 * Generates a blueprint based on user input or selected prompt
 */
export function generateAgentBlueprint(
  userInput: string, 
  selectedPrompt?: AgentPromptSuggestion
): AgentBlueprint {
  // If a specific prompt is selected, use its category
  if (selectedPrompt && selectedPrompt.category && selectedPrompt.category !== 'custom') {
    const category = selectedPrompt.category as keyof typeof BLUEPRINT_TEMPLATES;
    return BLUEPRINT_TEMPLATES[category];
  }
  
  // Otherwise, analyze the user input to determine the best matching category
  const detectedCategory = detectAgentCategory(userInput);
  return BLUEPRINT_TEMPLATES[detectedCategory];
}

/**
 * Analyzes user input to detect the most appropriate agent category
 */
function detectAgentCategory(userInput: string): AgentCategory {
  const input = userInput.toLowerCase();
  
  // Keywords for each category
  const categoryKeywords = {
    'customer-support': ['support', 'help', 'customer', 'service', 'ticket', 'inquiry', 'chat', 'assistant'],
    'data-analysis': ['data', 'analysis', 'analytics', 'report', 'insight', 'dashboard', 'metrics', 'statistics'],
    'marketing-automation': ['marketing', 'email', 'campaign', 'promotion', 'lead', 'nurture', 'automation', 'engagement'],
    'sales-optimization': ['sales', 'qualify', 'lead', 'crm', 'deal', 'pipeline', 'revenue', 'conversion'],
    'content-generation': ['content', 'writing', 'blog', 'social', 'copy', 'article', 'creative', 'generate'],
    'process-automation': ['process', 'workflow', 'automate', 'task', 'routine', 'efficiency', 'operation', 'streamline']
  };
  
  // Score each category based on keyword matches
  let maxScore = 0;
  let bestCategory: AgentCategory = 'custom';
  
  Object.entries(categoryKeywords).forEach(([category, keywords]) => {
    const score = keywords.reduce((acc, keyword) => {
      return acc + (input.includes(keyword) ? 1 : 0);
    }, 0);
    
    if (score > maxScore) {
      maxScore = score;
      bestCategory = category as AgentCategory;
    }
  });
  
  return bestCategory;
}

/**
 * Gets cycling placeholder suggestions for the input field
 */
export function getPlaceholderSuggestions(): string[] {
  return [
    "an AI agent to find top engineering talent...",
    "an AI agent to automate customer support...",
    "an AI agent to analyze sales data and trends...", 
    "an AI agent to generate marketing content...",
    "an AI agent to qualify and score leads...",
    "an AI agent to automate invoice processing...",
    "an AI agent to personalize user experiences...",
    "an AI agent to monitor system performance..."
  ];
}