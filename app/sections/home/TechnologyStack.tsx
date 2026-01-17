import { useState } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Brain,
  Zap,
  ArrowRight,
} from "lucide-react";
import RightIcon from "/assets/icons/right.svg";
import TensorFlowIcon from "/assets/icons/TensorFlow1.svg";
import { NavLink } from "react-router-dom";

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState("ai");

  const techCategories = [
    { id: "ai", name: "AI & ML", icon: <Brain className="w-5 h-5" /> },
    { id: "web", name: "Web Development", icon: <Code className="w-5 h-5" /> },
    {
      id: "mobile",
      name: "Mobile Development",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      id: "data",
      name: "Data & Analytics",
      icon: <Database className="w-5 h-5" />,
    },
  ];

  const technologyStack = {
    ai: [
      {
        name: "OpenAI",
        category: "LLM",
        expertise: "Advanced",
        logo: "/assets/icons/gpt4.svg",
      },
      {
        name: "Claude",
        category: "LLM",
        expertise: "Advanced",
        logo: "/assets/icons/claude.svg",
      },
      {
        name: "LangChain",
        category: "Framework",
        expertise: "Expert",
        logo: "/assets/icons/lungchain.svg",
      },
      {
        name: "TensorFlow",
        category: "ML Framework",
        expertise: "Advanced",
        logo: "/assets/icons/tensorFlow.svg",
      },
      {
        name: "PyTorch",
        category: "ML Framework",
        expertise: "Advanced",
        logo: "/assets/icons/pyTorch.svg",
      },
      {
        name: "Hugging Face",
        category: "Model Hub",
        expertise: "Expert",
        logo: "/assets/icons/huggingface.svg",
      },
      {
        name: "Pinecone",
        category: "Vector DB",
        expertise: "Advanced",
        logo: "/assets/icons/pinecone.svg",
      },
      {
        name: "Weaviate",
        category: "Vector DB",
        expertise: "Advanced",
        logo: "/assets/icons/weaviate.svg",
      },
      {
        name: "AutoGPT",
        category: "Agent Framework",
        expertise: "Expert",
        logo: "/assets/icons/autogpt.svg",
      },
      {
        name: "Langflow",
        category: "Visual AI",
        expertise: "Advanced",
        logo: "/assets/icons/langflow.svg",
      },
      {
        name: "RAG Systems",
        category: "Architecture",
        expertise: "Expert",
        logo: "/assets/icons/RAG.png",
      },
      {
        name: "Fine-tuning",
        category: "Custom Models",
        expertise: "Expert",
        logo: "/assets/icons/finetuning.svg",
      },
    ],
    web: [
      {
        name: "React.js",
        category: "Frontend",
        expertise: "Expert",
        logo: "/assets/icons/reactjs.svg",
      },
      {
        name: "Next.js",
        category: "Full-Stack",
        expertise: "Expert",
        logo: "/assets/icons/nextJS.svg",
      },
      {
        name: "Node.js",
        category: "Backend",
        expertise: "Advanced",
        logo: "/assets/icons/NodeJS.svg",
      },
      {
        name: "Python",
        category: "Backend",
        expertise: "Expert",
        logo: "/assets/icons/python.svg",
      },
      {
        name: "TypeScript",
        category: "Language",
        expertise: "Advanced",
        logo: "/assets/icons/typescript.svg",
      },
      {
        name: "Vue.js",
        category: "Frontend",
        expertise: "Advanced",
        logo: "/assets/icons/vueJS.svg",
      },
      {
        name: "Angular",
        category: "Frontend",
        expertise: "Advanced",
        logo: "/assets/icons/angular.svg",
      },
      {
        name: "Django",
        category: "Framework",
        expertise: "Advanced",
        logo: "/assets/icons/django.svg",
      },
      {
        name: "FastAPI",
        category: "API Framework",
        expertise: "Expert",
        logo: "/assets/icons/FastAPI.svg",
      },
      {
        name: "GraphQL",
        category: "API",
        expertise: "Advanced",
        logo: "/assets/icons/gaphql.svg",
      },
      {
        name: "WebSocket",
        category: "Real-time",
        expertise: "Advanced",
        logo: "/assets/icons/websocket.svg",
      },
      {
        name: "PWA",
        category: "Progressive Web",
        expertise: "Advanced",
        logo: "/assets/icons/pwa.svg",
      },
    ],
    mobile: [
      {
        name: "React Native",
        category: "Cross-Platform",
        expertise: "Expert",
        logo: "/assets/icons/reactjs.svg",
      },
      {
        name: "Flutter",
        category: "Cross-Platform",
        expertise: "Advanced",
        logo: "/assets/icons/flutter.svg",
      },
      {
        name: "iOS Development",
        category: "Native",
        expertise: "Advanced",
        logo: "/assets/icons/ios.svg",
      },
      {
        name: "Android Development",
        category: "Native",
        expertise: "Advanced",
        logo: "/assets/icons/android.svg",
      },
      {
        name: "Kotlin",
        category: "Language",
        expertise: "Advanced",
        logo: "/assets/icons/kotlin.svg",
      },
      {
        name: "Swift",
        category: "Language",
        expertise: "Advanced",
        logo: "/assets/icons/swift.svg",
      },
      {
        name: "Firebase",
        category: "Backend",
        expertise: "Expert",
        logo: "/assets/icons/firebase.svg",
      },
      {
        name: "App Store Optimization",
        category: "Marketing",
        expertise: "Advanced",
        logo: "/assets/icons/appstore.svg",
      },
      {
        name: "Mobile UI/UX",
        category: "Design",
        expertise: "Expert",
        logo: "/assets/icons/uiux.svg",
      },
      {
        name: "Push Notifications",
        category: "Engagement",
        expertise: "Advanced",
        logo: "/assets/icons/pushnotification.png",
      },
      {
        name: "Offline Support",
        category: "Performance",
        expertise: "Advanced",
        logo: "/assets/icons/offlinesupport.svg",
      },
      {
        name: "App Security",
        category: "Security",
        expertise: "Expert",
        logo: "/assets/icons/appsecurity.svg",
      },
    ],
    cloud: [
      {
        name: "AWS",
        category: "Cloud Platform",
        expertise: "Expert",
        logo: "/assets/icons/awsIcon.svg",
      },
      {
        name: "Google Cloud",
        category: "Cloud Platform",
        expertise: "Advanced",
        logo: "/assets/icons/googleCloudIcon.svg",
      },
      {
        name: "Azure",
        category: "Cloud Platform",
        expertise: "Advanced",
        logo: "/assets/icons/Azure.svg",
      },
      {
        name: "Docker",
        category: "Containerization",
        expertise: "Expert",
        logo: "/assets/icons/Docker.svg",
      },
      {
        name: "Kubernetes",
        category: "Orchestration",
        expertise: "Advanced",
        logo: "/assets/icons/Kubernetes.svg",
      },
      {
        name: "Terraform",
        category: "Infrastructure",
        expertise: "Advanced",
        logo: "/assets/icons/Terraform.svg",
      },
      {
        name: "CI/CD",
        category: "DevOps",
        expertise: "Expert",
        logo: "/assets/icons/CICD.svg",
      },
      {
        name: "Microservices",
        category: "Architecture",
        expertise: "Advanced",
        logo: "/assets/icons/Microservices.svg",
      },
      {
        name: "Serverless",
        category: "Architecture",
        expertise: "Advanced",
        logo: "/assets/icons/Serverlees.svg",
      },
      {
        name: "Monitoring",
        category: "Observability",
        expertise: "Advanced",
        logo: "/assets/icons/Monitoring.svg",
      },
      {
        name: "Load Balancing",
        category: "Performance",
        expertise: "Advanced",
        logo: "/assets/icons/loadbalancing.svg",
      },
      {
        name: "Auto Scaling",
        category: "Performance",
        expertise: "Advanced",
        logo: "/assets/icons/autoscalling.svg",
      },
    ],
    data: [
      {
        name: "PostgreSQL",
        category: "Database",
        expertise: "Expert",
        logo: "/assets/icons/postgresql.svg",
      },
      {
        name: "MongoDB",
        category: "NoSQL",
        expertise: "Advanced",
        logo: "/assets/icons/MongoDB.svg",
      },
      {
        name: "Redis",
        category: "Cache",
        expertise: "Advanced",
        logo: "/assets/icons/redis.svg",
      },
      {
        name: "Elasticsearch",
        category: "Search",
        expertise: "Advanced",
        logo: "/assets/icons/elasticsearch.svg",
      },
      {
        name: "Apache Kafka",
        category: "Streaming",
        expertise: "Advanced",
        logo: "/assets/icons/kafka.svg",
      },
      {
        name: "Apache Spark",
        category: "Big Data",
        expertise: "Advanced",
        logo: "/assets/icons/apachespark.svg",
      },
      {
        name: "Data Warehousing",
        category: "Analytics",
        expertise: "Advanced",
        logo: "/assets/icons/warehousing.svg",
      },
      {
        name: "ETL Pipelines",
        category: "Data Processing",
        expertise: "Expert",
        logo: "/assets/icons/etlpipelines.svg",
      },
      {
        name: "Business Intelligence",
        category: "Analytics",
        expertise: "Advanced",
        logo: "/assets/icons/businessintelligenece.svg",
      },
      {
        name: "Real-time Analytics",
        category: "Analytics",
        expertise: "Advanced",
        logo: "/assets/icons/realtimeanalytics.svg",
      },
      {
        name: "Data Visualization",
        category: "Analytics",
        expertise: "Advanced",
        logo: "/assets/icons/datavisulization.svg",
      },
      {
        name: "Predictive Analytics",
        category: "ML",
        expertise: "Expert",
        logo: "/assets/icons/predictiveanalytics.svg",
      },
    ],
  };

  const getExpertiseColor = (expertise: string) => {
    switch (expertise) {
      case "Expert":
        return "bg-amber-100 text-black border-amber-200";
      case "Advanced":
        return "bg-amber-500 text-black border-amber-500";
      case "Intermediate":
        return "bg-yellow-100 text-black border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 max-mobile:py-12 relative overflow-hidden">
      <div className="container-lg">
        <div className="grid grid-cols-2 gap-5 pb-[60px] max-mobile:grid-cols-1">
          <div>
            <span className="bloxk text-base font-medium text-blue-100 pb-3">
              Technology Stack
            </span>
            <h2 className="heading3 text-primary">Cutting-Edge Technologies</h2>
          </div>
          <div>
            <p className="text-lg text-grey-600  max-mobile:text-base">
              We leverage the latest technologies and frameworks to build
              scalable, secure, and innovative AI-powered solutions that drive
              business growth.
            </p>
          </div>
        </div>
        <div className="grid pb-20 grid-cols-[410px_1fr] max-tab:grid-cols-1 max-mobile:grid-cols-1 gap-6 max-mobile:pb-16">
          <div>
            {techCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={` p-5 max-mobile:p-3 max-mobile:mb-3 border mb-5 last:mb-0 transition ease-in-out duration-300 cursor-pointer border-solid border-border-color text-primary max-mobile:text-base max-mobile:rounded-lg font-medium text-lg rounded-xl w-full flex items-center justify-between  ${
                  activeCategory === category.id
                    ? "bg-primary-300 text-white shadow-lg"
                    : "bg-white text-black "
                }`}
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
                <img
                  className={`block transition ease-in-out duration-300 ${activeCategory === category.id ? "opacity-100" : "opacity-0"}`}
                  src={RightIcon}
                  alt="RightIcon"
                />
              </button>
            ))}
          </div>
          <div>
            <div className="bg-primary-300 max-mobile:p-3 max-mobile:rounded-lg rounded-2xl p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {technologyStack[
                  activeCategory as keyof typeof technologyStack
                ]?.map((tech, index) => (
                  <div
                    key={index}
                    className="group p-5 max-mobile:p-3 max-mobile:rounded-lg border border-solid border-border-color2 bg-light-blue rounded-xl"
                  >
                    <div className="flex items-start justify-between ">
                      <div>
                        <h3 className="text-lg max-mobile:text-base font-semibold text-white mb-1">
                          {tech.name}
                        </h3>
                        <p className="text-white text-base font-medium max-mobile:text-sm">
                          {tech.category}
                        </p>
                      </div>
                      <div>
                        <img
                          src={tech.logo}
                          alt="TensorFlowIcon"
                          className="w-12 h-12"
                        />
                      </div>
                    </div>

                    {/* <div className="flex items-center text-amber-400 text-sm font-medium group-hover:text-amber-300 transition-colors">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 p-[30px] max-mobile:grid-cols-1 max-mobile:grid max-mobile:p-5 max-mobile:rounded-lg border border-solid border-border-color3 rounded-2xl flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-medium text-primary mb-2">
              Ready to Start Your Partnership?
            </h3>
            <p className="text-lg max-mobile:text-base text-primary">
              Let's discuss how our partnership approach can transform your
              business and drive measurable results.
            </p>
          </div>
          <div className="flex items-center gap-3 max-mobile:pt-4 max-mobile:grid max-mobile:grid-cols-1">
            <a
              href="https://calendly.com/dipak-rejoicehub"
              target="_blank"
              aria-label="Start Your Project"
              rel="noopener noreferrer"
              className="py-3.5 flex max-mobile:justify-center items-center gap-1 px-6 cursor-pointer text-base font-semibold text-white tracking-[0.4px] rounded-full bg-primary-300 border border-solid border-primary-300 hover:bg-transparent hover:text-primary-300 transition ease-in-out duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <NavLink
              to="/case-studies"
              aria-label="View Our Work"
              className="py-3.5 flex max-mobile:justify-center items-center gap-1 px-6 cursor-pointer text-base font-semibold text-orange tracking-[0.4px] rounded-full bg-white border border-solid border-orange hover:bg-transparent hover:text-orange transition ease-in-out duration-300"
            >
              View Our Work
            </NavLink>
          </div>
        </div>

        {/* Technology Grid */}

        {/* Expertise Levels Legend */}
        {/* <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-16">
          <h3 className="text-xl font-semibold text-primary mb-4">
            Expertise Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-primary">Expert - 5+ years experience</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-primary">
                Advanced - 3+ years experience
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-primary">
                Intermediate - 1+ years experience
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TechnologyStack;
