import { MetaFunction } from "react-router";
import { useState } from "react";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetForm from "~/components/ui/LeadMagnetForm";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  Share2,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "AI ROI Calculator | RejoiceHub - Calculate AI Investment Returns" },
  {
    name: "description",
    content:
      "Calculate the return on investment for your AI projects with our comprehensive ROI calculator. Get detailed cost-benefit analysis and implementation timelines.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/ai-calculators`,
  },
];

const AiRoiCalculatorPage = () => {
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const [calculatorData, setCalculatorData] = useState({
    projectType: "ai-agents",
    teamSize: 10,
    projectDuration: 6,
    currentCosts: 50000,
    expectedEfficiency: 30,
    expectedRevenue: 100000,
    email: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [results, setResults] = useState<{
    totalInvestment: number;
    annualSavings: number;
    annualRevenue: number;
    paybackPeriod: number;
    threeYearROI: number;
    fiveYearROI: number;
  } | null>(null);
  const [selectedResource, setSelectedResource] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const projectTypes = [
    {
      id: "ai-agents",
      name: "AI Agents & Automation",
      description:
        "Intelligent agents for customer service, sales, and process automation",
      avgInvestment: 75000,
      avgSavings: 40,
    },
    {
      id: "machine-learning",
      name: "Machine Learning Models",
      description: "Predictive analytics and data-driven insights",
      avgInvestment: 120000,
      avgSavings: 35,
    },
    {
      id: "chatbots",
      name: "AI Chatbots",
      description: "Intelligent customer support and engagement",
      avgInvestment: 45000,
      avgSavings: 25,
    },
    {
      id: "data-analytics",
      name: "Data Analytics & BI",
      description: "Advanced analytics and business intelligence",
      avgInvestment: 60000,
      avgSavings: 30,
    },
  ];

  // Map project type IDs to API expected values
  const getApiProjectType = (typeId: string) => {
    const typeMap: Record<string, string> = {
      'ai-agents': 'AI Agents & Automation',
      'machine-learning': 'Predictive Analytics',
      'chatbots': 'AI Chatbots',
      'data-analytics': 'Data Analytics'
    };
    return typeMap[typeId] || 'AI Agents & Automation';
  };

  const calculateROI = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/roi/roi-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          // email: calculatorData.email,
          projectType: getApiProjectType(calculatorData.projectType),
          teamSize: calculatorData.teamSize,
          projectDurationMonths: calculatorData.projectDuration,
          currentAnnualCosts: calculatorData.currentCosts,
          expectedEfficiencyImprovement: calculatorData.expectedEfficiency,
          expectedAnnualRevenueIncrease: calculatorData.expectedRevenue
        })
      });

      if (!response.ok) {
        throw new Error('Failed to calculate ROI. Please try again.');
      }

      const data = await response.json();

      setResults({
        totalInvestment: data.roiAnalysis.totalInvestment,
        annualSavings: data.roiAnalysis.annualSavings,
        annualRevenue: data.roiAnalysis.annualRevenueIncrease,
        paybackPeriod: data.roiAnalysis.paybackPeriodYears,
        threeYearROI: data.roiAnalysis.threeYearROI,
        fiveYearROI: data.roiAnalysis.fiveYearROI
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while calculating ROI');
      console.error('Error calculating ROI:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: number | string) => {
    setCalculatorData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLeadSubmit = async (email?: string, resourceId?
    : string):Promise<any> => {
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

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const handleGetAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const response = await fetch('https://api-rejoice.rejoicehub.com/api/v1/roi/roi-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          projectType: getApiProjectType(calculatorData.projectType),
          teamSize: calculatorData.teamSize,
          projectDurationMonths: calculatorData.projectDuration,
          currentAnnualCosts: calculatorData.currentCosts,
          expectedEfficiencyImprovement: calculatorData.expectedEfficiency,
          expectedAnnualRevenueIncrease: calculatorData.expectedRevenue
        })
      });

      if (!response.ok) {
        throw new Error('Failed to calculate ROI. Please try again.');
      }
      setIsSubmitting(false);
      setShowEmailModal(false);
      const data = await response.json();
      console.log(data);
      setShowSuccess(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className=" max-w-6xl mx-auto px-6 text-center">
          <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            ROI Calculator
          </p>

          <h1 className="text-primary text-center mb-4">
            AI ROI <span className="text-gradient">Calculator</span>
          </h1>

          <p className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Calculate the return on investment for your AI projects. Get
            detailed cost-benefit analysis, payback periods, and long-term ROI
            projections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="#calculator"
              variant="primary"
              size="md"
              icon="calculator"
            >
              Start Calculating
            </CTAButton>
            <CTAButton
              href="#benefits"
              variant="secondary"
              size="md"
              icon="chart"
            >
              View Benefits
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 max-mobile:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Interactive Calculator"
            title="Calculate Your AI ROI"
            subtitle="Input your project details to get a comprehensive ROI analysis and investment recommendations."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <h3 className="text-xl font-bold text-navy-950 mb-6">
                Project Details
              </h3>

              <div className="space-y-5">
                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-3">
                    AI Project Type
                  </label>
                  <select
                    value={calculatorData.projectType}
                    onChange={(e) =>
                      handleInputChange("projectType", e.target.value)
                    }
                    className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                  >
                    {projectTypes.map((type) => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-gray-600 mt-1">
                    {
                      projectTypes.find(
                        (p) => p.id === calculatorData.projectType
                      )?.description
                    }
                  </p>
                </div>

                {/* Team Size */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-3">
                    Team Size (People)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.teamSize}
                    onChange={(e) =>
                      handleInputChange("teamSize", parseInt(e.target.value))
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none"
                    min="1"
                    max="100"
                  />
                </div>

                {/* Project Duration */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-3">
                    Project Duration (Months)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.projectDuration}
                    onChange={(e) =>
                      handleInputChange(
                        "projectDuration",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none"
                    min="1"
                    max="24"
                  />
                </div>

                {/* Current Annual Costs */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-3">
                    Current Annual Costs ($)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.currentCosts}
                    onChange={(e) =>
                      handleInputChange(
                        "currentCosts",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none"
                    min="0"
                    step="1000"
                  />
                </div>

                {/* Expected Efficiency Improvement */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-3">
                    Expected Efficiency Improvement (%)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.expectedEfficiency}
                    onChange={(e) =>
                      handleInputChange(
                        "expectedEfficiency",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none"
                    min="0"
                    max="100"
                  />
                </div>

                {/* Expected Annual Revenue */}
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-3">
                    Expected Annual Revenue Increase ($)
                  </label>
                  <input
                    type="number"
                    value={calculatorData.expectedRevenue}
                    onChange={(e) =>
                      handleInputChange(
                        "expectedRevenue",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none"
                    min="0"
                    step="1000"
                  />
                </div>

                <div className="space-y-4">
                  <CTAButton
                    onClick={calculateROI}
                    variant="primary"
                    size="lg"
                    icon="calculator"
                    className="w-full"
                    disabled={isLoading}
                    loading={isLoading}
                  >
                    {isLoading ? 'Calculating...' : 'Calculate ROI'}
                  </CTAButton>

                  {error && (
                    <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                      {error}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <h3 className="text-xl font-bold text-navy-950 mb-6">
                ROI Analysis
              </h3>

              {results ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-amber-600 mb-1">
                        {formatCurrency(results.totalInvestment)}
                      </div>
                      <div className="text-sm text-gray-600">
                        Total Investment
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">
                        {formatCurrency(results.annualSavings)}
                      </div>
                      <div className="text-sm text-gray-600">
                        Annual Savings
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-navy-900 mb-4">
                      Key Metrics
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payback Period:</span>
                        <span className="font-semibold">
                          {results.paybackPeriod.toFixed(1)} years
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">3-Year ROI:</span>
                        <span className="font-semibold text-green-600">
                          {formatPercentage(results.threeYearROI)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">5-Year ROI:</span>
                        <span className="font-semibold text-green-600">
                          {formatPercentage(results.fiveYearROI)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6">
                    <h4 className="font-semibold text-navy-900 mb-4">
                      Recommendation
                    </h4>
                    <p className="text-sm text-gray-700 mb-4">
                      Based on your inputs, this AI project shows a{" "}
                      {results.paybackPeriod < 2
                        ? "strong"
                        : results.paybackPeriod < 3
                          ? "moderate"
                          : "conservative"}{" "}
                      ROI potential.
                    </p>
                    <CTAButton
                      variant="primary"
                      size="md"
                      icon="mail"
                      className="w-full"
                      onClick={() => setShowEmailModal(true)}
                    >
                      Get Detailed Analysis
                    </CTAButton>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Enter your project details and click "Calculate ROI" to see
                    your results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="AI Benefits"
            title="Why Invest in AI?"
            subtitle="Discover the key benefits and returns that AI projects typically deliver across different industries."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-amber-600" />}
              title="Cost Reduction"
              description="AI automation typically reduces operational costs by 20-40% through process optimization and efficiency gains."
              variant="default"
            />
            <FeatureCard
              icon={<DollarSign className="w-6 h-6 text-amber-600" />}
              title="Revenue Growth"
              description="AI-driven insights and automation can increase revenue by 15-30% through better customer engagement and decision-making."
              variant="default"
            />
            <FeatureCard
              icon={<Clock className="w-6 h-6 text-amber-600" />}
              title="Time Savings"
              description="Automation saves 20-50% of employee time, allowing focus on high-value strategic activities."
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* Industry Examples */}
      <section className="py-20 max-mobile:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Industry Examples"
            title="Real ROI Examples"
            subtitle="See how different industries have achieved significant returns from AI investments."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <h3 className="text-lg font-bold text-navy-950 mb-4">
                Healthcare
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Patient Wait Times:</span>
                  <span className="font-semibold text-green-600">-40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Administrative Costs:</span>
                  <span className="font-semibold text-green-600">-30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Timeline:</span>
                  <span className="font-semibold">18 months</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <h3 className="text-lg font-bold text-navy-950 mb-4">Retail</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer Retention:</span>
                  <span className="font-semibold text-green-600">+25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Inventory Costs:</span>
                  <span className="font-semibold text-green-600">-20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Timeline:</span>
                  <span className="font-semibold">12 months</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <h3 className="text-lg font-bold text-navy-950 mb-4">
                Manufacturing
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Production Efficiency:</span>
                  <span className="font-semibold text-green-600">+30%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quality Issues:</span>
                  <span className="font-semibold text-green-600">-50%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Timeline:</span>
                  <span className="font-semibold">24 months</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
              <h3 className="text-lg font-bold text-navy-950 mb-4">
                Financial Services
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Fraud Detection:</span>
                  <span className="font-semibold text-green-600">+90%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Time:</span>
                  <span className="font-semibold text-green-600">-60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Timeline:</span>
                  <span className="font-semibold">15 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Detailed Analysis"
            title="Get Your Custom ROI Report"
            subtitle="Receive a comprehensive ROI analysis tailored to your specific business needs and industry."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <LeadMagnetForm
              title="Custom ROI Analysis"
              description="Get a detailed ROI report with industry benchmarks, implementation roadmap, and risk assessment."
              buttonText="Get Free Report"
              placeholder="Enter your email"
              resourceId="roi-analysis"
              onSubmit={(email) => handleLeadSubmit(email, "Custom ROI Analysis")}
              variant="default"
            />

            <LeadMagnetForm
              title="AI Implementation Guide"
              description="Download our comprehensive guide to AI implementation and ROI optimization strategies."
              buttonText="Download Guide"
              placeholder="Enter your email"
              resourceId="implementation-guide"
              onSubmit={(email) => handleLeadSubmit(email, "AI Implementation Guide")}
              variant="newsletter"
            />
          </div>
        </div>
      </section>

      {/* Email Collection Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Get Your Detailed Analysis</h3>
              <p className="text-gray-600 mb-6">
                Enter your email to receive your custom ROI analysis report.
              </p>

              <form onSubmit={handleGetAnalysis} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(null);
                    }}
                    placeholder="Enter your email address"
                    required
                    className={`w-full px-4 py-3 border ${
                      emailError ? 'border-red-500' : 'border-gray-300'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500`}
                  />
                  {emailError && (
                    <p className="mt-1 text-sm text-red-600">{emailError}</p>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    
                  >
                    {isSubmitting ? 'Sending...' : 'Get Analysis'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEmailModal(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Success!</h3>
              <p className="text-gray-600 mb-6">
                Your analysis report has been sent to your email. Please check your inbox.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Ready to Start?
          </p>

          <h2 className="heading3 text-center mb-4 text-navy-950">
            Start Your AI Transformation Today
          </h2>

          <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
            Ready to turn your ROI calculations into reality? Our AI experts are
            here to help you implement the right solutions for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
            <CTAButton to="/contact" variant="primary" size="md" icon="mail">
              Schedule Consultation
            </CTAButton>
            <CTAButton
              to="/services"
              variant="secondary"
              size="md"
              icon="arrow"
            >
              Explore Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiRoiCalculatorPage;
