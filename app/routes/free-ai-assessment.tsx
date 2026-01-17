import { MetaFunction } from "react-router";
import { useState, useEffect } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Clock,
  Award,
  Star,
  Download,
  Mail,
  Building2,
  Globe,
  Shield,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Free AI Assessment | RejoiceHub - Evaluate Your AI Readiness" },
  {
    name: "description",
    content:
      "Unlock your AI potential: Get a free AI Readiness Assessment from RejoiceHub,discover your score, get a personalized roadmap & expert consultation. Start now!",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/free-ai-assessment`,
  },
];

const FreeAiAssessmentPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const [assessmentData, setAssessmentData] = useState({
    email: "",
    companySize: "",
    industry: "",
    currentAIUsage: "",
    dataMaturity: "",
    teamReadiness: "",
    budget: "",
    timeline: "",
    primaryGoals: [] as string[],
    challenges: [] as string[],
  });

  const [results, setResults] = useState<{
    readinessScore: number;
    maturityLevel: string;
    key_recommendations: string[];
    nextSteps: string[];
    estimatedTimeline: string;
    priorityAreas: string[];
    industryBenchmark: number;
    competitiveAdvantage: string;
  } | null>(null);

  // Animate progress bar
  useEffect(() => {
    const targetProgress = (currentStep / 5) * 100;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          return prev + 2;
        }
        return targetProgress;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [currentStep]);

  const assessmentSteps = [
    {
      id: 1,
      title: "Contact Information",
      description: "Get your personalized results",
    },
    {
      id: 2,
      title: "Company Overview",
      description: "Tell us about your organization",
    },
    {
      id: 3,
      title: "Current State",
      description: "Assess your current AI capabilities",
    },
    {
      id: 4,
      title: "Goals & Challenges",
      description: "Define your objectives and obstacles",
    },
    {
      id: 5,
      title: "Results & Recommendations",
      description: "Get your personalized assessment",
    },
  ];

  const companySizes = [
    {
      value: "startup",
      label: "Startup (1-50 employees)",
      description: "Early-stage company looking to scale",
    },
    {
      value: "sme",
      label: "Small-Medium Business (51-500 employees)",
      description: "Growing business with established processes",
    },
    {
      value: "enterprise",
      label: "Enterprise (500+ employees)",
      description: "Large organization with complex operations",
    },
  ];

  const industries = [
    {
      value: "healthcare",
      label: "Healthcare",
      description: "Patient care, diagnostics, and medical services",
    },
    {
      value: "retail",
      label: "Retail & E-commerce",
      description: "Customer experience and sales optimization",
    },
    {
      value: "manufacturing",
      label: "Manufacturing",
      description: "Production efficiency and quality control",
    },
    {
      value: "financial",
      label: "Financial Services",
      description: "Risk management and customer service",
    },
    {
      value: "technology",
      label: "Technology",
      description: "Software development and digital services",
    },
    {
      value: "other",
      label: "Other",
      description: "Custom industry requirements",
    },
  ];

  const aiUsageLevels = [
    {
      value: "none",
      label: "No AI Implementation",
      description: "Starting from scratch",
    },
    {
      value: "basic",
      label: "Basic AI Tools",
      description: "Using some AI-powered software",
    },
    {
      value: "moderate",
      label: "Moderate AI Usage",
      description: "Several AI solutions in place",
    },
    {
      value: "advanced",
      label: "Advanced AI Implementation",
      description: "Comprehensive AI strategy",
    },
  ];

  const dataMaturityLevels = [
    {
      value: "low",
      label: "Low Data Maturity",
      description: "Limited data collection and organization",
    },
    {
      value: "medium",
      label: "Medium Data Maturity",
      description: "Some data infrastructure in place",
    },
    {
      value: "high",
      label: "High Data Maturity",
      description: "Comprehensive data strategy and infrastructure",
    },
  ];

  const teamReadinessLevels = [
    {
      value: "beginner",
      label: "Beginner",
      description: "Limited AI knowledge and skills",
    },
    {
      value: "intermediate",
      label: "Intermediate",
      description: "Some AI expertise in the team",
    },
    {
      value: "advanced",
      label: "Advanced",
      description: "Strong AI capabilities and expertise",
    },
  ];

  const budgetRanges = [
    {
      value: "low",
      label: "Under $50K",
      description: "Limited budget for AI initiatives",
    },
    {
      value: "medium",
      label: "$50K - $200K",
      description: "Moderate budget for AI projects",
    },
    {
      value: "high",
      label: "$200K+",
      description: "Significant budget for AI transformation",
    },
  ];

  const timelineOptions = [
    {
      value: "immediate",
      label: "Immediate (0-6 months)",
      description: "Ready to start right away",
    },
    {
      value: "short",
      label: "Short-term (6-12 months)",
      description: "Planning to implement soon",
    },
    {
      value: "medium",
      label: "Medium-term (1-2 years)",
      description: "Strategic long-term planning",
    },
    {
      value: "long",
      label: "Long-term (2+ years)",
      description: "Future consideration",
    },
  ];

  const primaryGoals = [
    "Cost Reduction",
    "Revenue Growth",
    "Customer Experience",
    "Operational Efficiency",
    "Product Innovation",
    "Risk Management",
    "Competitive Advantage",
    "Data Insights",
  ];

  const commonChallenges = [
    "Limited AI Expertise",
    "Data Quality Issues",
    "Budget Constraints",
    "Change Management",
    "Technology Integration",
    "Regulatory Compliance",
    "Scalability Concerns",
    "ROI Measurement",
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setAssessmentData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleGoalToggle = (goal: string) => {
    const currentGoals = assessmentData.primaryGoals;
    const updatedGoals = currentGoals.includes(goal)
      ? currentGoals.filter((g) => g !== goal)
      : [...currentGoals, goal];
    handleInputChange("primaryGoals", updatedGoals);
  };

  const handleChallengeToggle = (challenge: string) => {
    const currentChallenges = assessmentData.challenges;
    const updatedChallenges = currentChallenges.includes(challenge)
      ? currentChallenges.filter((c) => c !== challenge)
      : [...currentChallenges, challenge];
    handleInputChange("challenges", updatedChallenges);
  };

  const calculateAssessment = async () => {
    setIsSubmitting(true);
    // Validate email is present
    if (!assessmentData.email || !assessmentData.email.includes("@")) {
      alert("Please enter a valid email address to get your assessment.");
      setCurrentStep(1);
      return;
    }

    try {

      const payload = {
        email: assessmentData.email,
        company_size: assessmentData.companySize,
        industry: assessmentData.industry,
        current_ai_usage: assessmentData.currentAIUsage,
        data_maturity: assessmentData.dataMaturity,
        team_ai_readiness: assessmentData.teamReadiness,
        budget_for_ai_initiatives: assessmentData.budget,
        implementation_timeline: assessmentData.timeline,
        primary_goals: assessmentData.primaryGoals,
        key_challenges: assessmentData.challenges
      };

      const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/readiness/ai-readiness', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Failed to calculate AI readiness. Please try again.');
      }

      const data = await response.json();

      // Map the API response to your results format
      setResults({
        readinessScore: data.readiness_score,
        maturityLevel: data.maturity_level,
        key_recommendations: data.key_recommendations || [],
        nextSteps: data.next_steps || [],
        estimatedTimeline: data.estimated_timeline || '3-6 months', // Default fallback
        priorityAreas: data.priority_areas || [],
        industryBenchmark: data.industry_benchmark || 70, // Default fallback
        competitiveAdvantage: data.competitive_advantage || 'Medium' // Default fallback
      });

      // Send email to lead magnet system
      // handleLeadSubmit(assessmentData.email);

      setCurrentStep(5);
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error calculating assessment:', error);
      alert('An error occurred while calculating your assessment. Please try again later.');
    }
  };

  // const handleLeadSubmit = async (email: string) => {
  //   setEmail(email);
  //   setSelectedResource('ai_assessment');
  //   setShowEmailModal(true);
  // };

  const handleLeadSubmit = async (email: string, resourceId: string ):Promise<any> => {
    try {
         if (!resourceId) {
        return;
      }
      setSelectedResource(resourceId);
      console.log('Submitting email:', email, 'for resource:', resourceId);

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

      const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/email-sending/send-study-file/', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email , filename:resourceId})

      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setLeadMagnetSubmissions((prev) => ({ ...prev, [email]: true }));
      setShowEmailModal(false);
      setShowSuccess(true);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      setEmailError('Failed to send email. Please try again.');
      throw error; // Re-throw to let LeadMagnetForm handle the error
    } finally {
      setIsSubmitting(false);
    }
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">
                Get Your Personalized AI Assessment
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enter your email to receive your comprehensive AI readiness
                assessment and personalized recommendations.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <label className="block text-lg font-semibold text-navy-900 mb-4">
                Email Address
              </label>
              <input
                type="email"
                value={assessmentData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your work email"
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                We'll send your detailed assessment report to this email
                address.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div>
              <label className="block text-lg font-semibold text-navy-900 mb-6 flex items-center">
                <Building2 className="w-6 h-6 text-amber-600 mr-3" />
                Company Size
              </label>
              <div className="grid md:grid-cols-3 gap-4">
                {companySizes.map((size) => (
                  <label
                    key={size.value}
                    className={`relative group cursor-pointer transition-all duration-300 ${assessmentData.companySize === size.value
                      ? "ring-2 ring-amber-500 ring-offset-2"
                      : "hover:ring-2 hover:ring-amber-200 ring-offset-2"
                      }`}
                  >
                    <input
                      type="radio"
                      name="companySize"
                      value={size.value}
                      checked={assessmentData.companySize === size.value}
                      onChange={(e) =>
                        handleInputChange("companySize", e.target.value)
                      }
                      className="sr-only"
                    />
                    <div
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${assessmentData.companySize === size.value
                        ? "border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-amber-300 hover:shadow-md"
                        }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-amber-600" />
                        </div>
                        {assessmentData.companySize === size.value && (
                          <CheckCircle className="w-6 h-6 text-amber-600" />
                        )}
                      </div>
                      <div className="font-semibold text-navy-900 mb-2">
                        {size.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {size.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-navy-900 mb-6 flex items-center">
                <Globe className="w-6 h-6 text-amber-600 mr-3" />
                Industry
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <label
                    key={industry.value}
                    className={`relative group cursor-pointer transition-all duration-300 ${assessmentData.industry === industry.value
                      ? "ring-2 ring-amber-500 ring-offset-2"
                      : "hover:ring-2 hover:ring-amber-200 ring-offset-2"
                      }`}
                  >
                    <input
                      type="radio"
                      name="industry"
                      value={industry.value}
                      checked={assessmentData.industry === industry.value}
                      onChange={(e) =>
                        handleInputChange("industry", e.target.value)
                      }
                      className="sr-only"
                    />
                    <div
                      className={`p-6 rounded-xl border-2 transition-all duration-300 ${assessmentData.industry === industry.value
                        ? "border-amber-500 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg"
                        : "border-gray-200 bg-white hover:border-amber-300 hover:shadow-md"
                        }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          <Globe className="w-4 h-4 text-amber-600" />
                        </div>
                        {assessmentData.industry === industry.value && (
                          <CheckCircle className="w-6 h-6 text-amber-600" />
                        )}
                      </div>
                      <div className="font-semibold text-navy-900 mb-2">
                        {industry.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {industry.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-3">
                Current AI Usage
              </label>
              <div className="space-y-3">
                {aiUsageLevels.map((level) => (
                  <label
                    key={level.value}
                    className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-amber-500 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="currentAIUsage"
                      value={level.value}
                      checked={assessmentData.currentAIUsage === level.value}
                      onChange={(e) =>
                        handleInputChange("currentAIUsage", e.target.value)
                      }
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-navy-900">
                        {level.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {level.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-3">
                Data Maturity
              </label>
              <div className="space-y-3">
                {dataMaturityLevels.map((level) => (
                  <label
                    key={level.value}
                    className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-amber-500 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="dataMaturity"
                      value={level.value}
                      checked={assessmentData.dataMaturity === level.value}
                      onChange={(e) =>
                        handleInputChange("dataMaturity", e.target.value)
                      }
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-navy-900">
                        {level.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {level.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-3">
                Team AI Readiness
              </label>
              <div className="space-y-3">
                {teamReadinessLevels.map((level) => (
                  <label
                    key={level.value}
                    className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-amber-500 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="teamReadiness"
                      value={level.value}
                      checked={assessmentData.teamReadiness === level.value}
                      onChange={(e) =>
                        handleInputChange("teamReadiness", e.target.value)
                      }
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-navy-900">
                        {level.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {level.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-900 mb-3">
                Budget for AI Initiatives
              </label>
              <div className="space-y-3">
                {budgetRanges.map((budget) => (
                  <label
                    key={budget.value}
                    className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-amber-500 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="budget"
                      value={budget.value}
                      checked={assessmentData.budget === budget.value}
                      onChange={(e) =>
                        handleInputChange("budget", e.target.value)
                      }
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-navy-900">
                        {budget.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {budget.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-3">
                Implementation Timeline
              </label>
              <div className="space-y-3">
                {timelineOptions.map((timeline) => (
                  <label
                    key={timeline.value}
                    className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-amber-500 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="timeline"
                      value={timeline.value}
                      checked={assessmentData.timeline === timeline.value}
                      onChange={(e) =>
                        handleInputChange("timeline", e.target.value)
                      }
                      className="mt-1"
                    />
                    <div>
                      <div className="font-medium text-navy-900">
                        {timeline.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {timeline.description}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-3">
                Primary Goals (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {primaryGoals.map((goal) => (
                  <label
                    key={goal}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-amber-500 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={assessmentData.primaryGoals.includes(goal)}
                      onChange={() => handleGoalToggle(goal)}
                      className="rounded"
                    />
                    <span className="text-sm font-medium text-navy-900">
                      {goal}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-900 mb-3">
                Key Challenges (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {commonChallenges.map((challenge) => (
                  <label
                    key={challenge}
                    className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-amber-500 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={assessmentData.challenges.includes(challenge)}
                      onChange={() => handleChallengeToggle(challenge)}
                      className="rounded"
                    />
                    <span className="text-sm font-medium text-navy-900">
                      {challenge}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return results ? (
          <div className="space-y-6">
            {/* Email Confirmation */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-800">
                    Assessment Report Sent!
                  </h4>
                  <p className="text-green-700">
                    Your detailed AI readiness assessment has been sent to{" "}
                    <strong>{assessmentData.email}</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-navy-950 mb-4">
                Your AI Readiness Assessment
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    {results.readinessScore}/100
                  </div>
                  <div className="text-sm text-gray-600">Readiness Score</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-navy-950 mb-2">
                    {results.maturityLevel}
                  </div>
                  <div className="text-sm text-gray-600">Maturity Level</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-navy-900 mb-3">
                  Estimated Timeline
                </h4>
                <p className="text-lg font-medium text-amber-600">
                  {results.estimatedTimeline}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-navy-900 mb-4">
                Priority Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {results.priorityAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-amber-100 text-amber-700 text-sm font-medium rounded-full"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-navy-900 mb-4">
                Key Recommendations
              </h4>
              <ul className="space-y-2">
                {results.key_recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold text-navy-900 mb-4">Next Steps</h4>
              <ul className="space-y-2">
                {results.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className=" max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Free Assessment
          </div>

          <h1 className="text-primary text-center mb-4">
            Free AI
            <span className="text-gradient"> Readiness Assessment</span>
          </h1>

          <p className="text-lg max-w-[612px]  text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Evaluate your organization's AI readiness and get personalized
            recommendations for your AI transformation journey.
          </p>

          <div className="flex flex-col pt-10 sm:flex-row gap-4 justify-center">
            <CTAButton
              href="#assessment"
              variant="primary"
              size="md"
              icon="arrow"
            >
              Start Assessment
            </CTAButton>
            {/* <CTAButton
              href="#benefits"
              variant="secondary"
              size="md"
              icon="arrow"
            >
              Learn More
            </CTAButton> */}
          </div>
        </div>
      </section>

      {/* Assessment Section */}
      <section id="assessment" className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Interactive Assessment"
            title="Evaluate Your AI Readiness"
            subtitle="Answer a few questions to get your personalized AI readiness assessment and recommendations."
          />

          {/* Modern Progress Bar */}
          <div className="mb-12">
            <div className="relative">
              <div
                className="flex items-center justify-between mb-4 overflow-auto"
                style={{ scrollbarWidth: "none" }}
              >
                {assessmentSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex max-mobile:min-w-[180px] max-mobile:max-w-[180px] flex-col items-center "
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${currentStep >= step.id
                        ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                        : "bg-white text-gray-400 border-2 border-gray-200"
                        }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <div
                        className={`text-sm font-semibold transition-colors ${currentStep >= step.id
                          ? "text-navy-900"
                          : "text-gray-400"
                          }`}
                      >
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {step.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated Progress Bar */}
              <div className="absolute top-6 left-6 right-6 h-1 z-[-1] bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Assessment Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-[#d0d0d0] overflow-hidden">
            <div className="bg-gradient-to-r from-navy-950 to-navy-900 p-8 text-white">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Step {currentStep} of 5
              </h3>
              <p className="text-primary">
                {assessmentSteps[currentStep - 1]?.title}
              </p>
            </div>

            <div className="p-8">
              <div className="min-h-[400px]">{renderStep()}</div>

              <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                {currentStep > 1 && (
                  <CTAButton
                    onClick={() => setCurrentStep(currentStep - 1)}
                    variant="outline"
                    size="lg"
                    icon="arrow"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </CTAButton>
                )}

                {currentStep === 1 && (
                  <CTAButton
                    onClick={() => {
                      if (
                        assessmentData.email &&
                        assessmentData.email.includes("@")
                      ) {
                        setCurrentStep(currentStep + 1);
                      } else {
                        alert(
                          "Please enter a valid email address to continue."
                        );
                      }
                    }}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                    className="ml-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </CTAButton>
                )}

                {currentStep > 1 && currentStep < 4 && (
                  <CTAButton
                    onClick={() => setCurrentStep(currentStep + 1)}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                    className="ml-auto"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </CTAButton>
                )}

                {currentStep === 4 && (
                  <CTAButton
                    onClick={calculateAssessment}
                    variant="primary"
                    size="lg"
                    icon="arrow"
                    disabled={isSubmitting}
                    className={`ml-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Get Assessment
                      </>
                    )}
                  </CTAButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Assessment Benefits"
            title="What You'll Get"
            subtitle="Comprehensive insights and actionable recommendations to accelerate your AI journey."
            variant="amber"
          />

          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-primary-300 rounded-2xl p-8  group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Readiness Score
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Get a comprehensive score that evaluates your organization's
                current AI readiness level with detailed breakdowns.
              </p>
            </div>

            <div className="bg-primary-300 rounded-2xl p-8  group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Personalized Roadmap
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Receive a customized implementation roadmap based on your
                specific needs, goals, and industry requirements.
              </p>
            </div>

            <div className="bg-primary-300 rounded-2xl p-8  group">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Expert Consultation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Get access to AI experts who can help you implement the
                recommendations from your assessment effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Stats */}
      <section className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto">
              Join thousands of organizations that have transformed their AI
              strategy with our assessment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                5,000+
              </div>
              <div className="text-primary font-medium">
                Assessments Completed
              </div>
            </div>

            <div className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                95%
              </div>
              <div className="text-primary font-medium">Satisfaction Rate</div>
            </div>

            <div className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                15 min
              </div>
              <div className="text-primary font-medium">Average Time</div>
            </div>

            <div className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Free
              </div>
              <div className="text-primary font-medium">No Cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Detailed Analysis"
            title="Get Your Complete Assessment Report"
            subtitle="Receive a comprehensive report with detailed analysis, industry benchmarks, and implementation strategies."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadMagnetForm
              title="Detailed Assessment Report"
              description="Get a comprehensive report with detailed analysis, industry benchmarks, and step-by-step implementation guide."
              buttonText="Get Free Report"
              placeholder="Enter your email"
              onSubmit={(email) => handleLeadSubmit(email, "Detailed Assessment Report")}
              resourceId="ai_assessment"
              variant="default"
            />

            <LeadMagnetForm
              title="Expert Consultation"
              description="Schedule a free 30-minute consultation with our AI experts to discuss your assessment results."
              buttonText="Book Consultation"
              placeholder="Enter your email"
              onSubmit={( email ) => handleLeadSubmit(email, "Expert Consultation")}
              resourceId="expert_consultation" // Added this line
              variant="newsletter"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12 ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Ready to Transform?
          </div>

          <h2 className="heading3 text-primary text-center mb-4">
            Start Your AI Transformation Today
          </h2>

          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            Take the first step towards AI transformation. Complete your
            assessment and get personalized recommendations from our AI experts.
          </p>

          <div className="flex flex-col pt-10 sm:flex-row gap-4 justify-center">
            <CTAButton
              href="#assessment"
              variant="primary"
              size="md"
              icon="arrow"
            >
              Start Assessment
            </CTAButton>
            <CTAButton to="/contact" variant="secondary" size="md" icon="arrow">
              Contact Experts
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeAiAssessmentPage;
