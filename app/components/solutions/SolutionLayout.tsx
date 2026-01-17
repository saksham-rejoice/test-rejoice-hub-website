import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Shield,
  Award,
  Calendar,
  Phone,
  Play,
  AlertCircle,
  Zap,
  Brain,
  Target,
} from "lucide-react";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import FAQ from "~/sections/home/faq";
import LazyImage from "~/components/ui/LazyImage";
import usePerformanceOptimization from "~/hooks/usePerformanceOptimization";
import useAccessibility from "~/hooks/useAccessibility";
import { cn } from "~/lib/utils";
import { twMerge } from "tailwind-merge";
import { FaRocket } from "react-icons/fa";

export interface SolutionContent {
  solutionId: string;
  title: string;
  subhead: string;
  description: string;
  bannerImage?: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewImage?: string;
  featuresTitle: string;
  features: Array<{
    title: string;
    description: string;
    icon?: any;
  }>;
  benefits: Array<{
    title: string;
    description: string;
    metric?: string;
    icon?: any;
  }>;
  useCases: Array<{
    title: string;
    description: string;
    icon?: any;
  }>;
  industries: Array<{
    name: string;
    outcome: string;
    icon?: any;
  }>;
  processSteps: Array<{
    step: number;
    title: string;
    description: string;
    duration?: string;
    deliverables?: string[];
  }>;
  caseStudies: Array<{
    title: string;
    industry: string;
    metric: string;
    result: string;
    description: string;
  }>;
  techStack: Array<{
    name: string;
    logo?: string;
    category: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  primaryCTA: {
    text: string;
    href: string;
    type: "link" | "external" | "calendar";
  };
  secondaryCTA: {
    text: string;
    href: string;
    type: "link" | "external";
  };
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  relatedSolutions?: string[];
}

interface SolutionLayoutProps {
  content: SolutionContent;
  leadMagnetComponent?: React.ReactNode;
  children?: React.ReactNode;
  heroVariant?: "gradient-bg" | "video-bg";
  onAIBuilderSubmit?: (data: {
    userInput: string;
    email: string;
    serviceCategory: string;
  }) => Promise<void>;
}

export const SolutionLayout: React.FC<SolutionLayoutProps> = ({
  content,
  leadMagnetComponent,
  children,
  heroVariant = "gradient-bg",
  onAIBuilderSubmit,
}) => {
  const {
    title,
    subhead,
    description,
    bannerImage,
    overviewTitle,
    overviewDescription,
    overviewImage,
    featuresTitle,
    features,
    benefits,
    useCases,
    industries,
    processSteps,
    caseStudies,
    techStack,
    faqs,
    primaryCTA,
    secondaryCTA,
  } = content;

  // Performance optimization
  const preloadImages = techStack
    .filter((tech) => tech.logo)
    .map((tech) => tech.logo!)
    .slice(0, 3);

  usePerformanceOptimization({
    preloadImages,
    enableLayoutShiftPrevention: true,
    enableResourceHints: true,
  });

  // Accessibility features
  const { announcePageChange, addSkipLinks } = useAccessibility({
    enableFocusManagement: true,
    enableAriaLabels: true,
    enableKeyboardNavigation: true,
    announcePageChanges: true,
  });

  // Announce page load to screen readers
  React.useEffect(() => {
    announcePageChange(`${title} solution page loaded`);
    const cleanup = addSkipLinks();
    return cleanup;
  }, [title, announcePageChange, addSkipLinks]);

  return (
    <div className="min-h-screen">
      {/* Solution Hero Section */}
      <SolutionHeroSection
        content={content}
        heroVariant={heroVariant}
        onAIBuilderSubmit={onAIBuilderSubmit}
      />

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        aria-label={`${title} solution details`}
      >
        {/* Banner Image Section */}
        {bannerImage && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="relative">
                <LazyImage
                  src={bannerImage}
                  alt={title}
                  className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </section>
        )}

        {/* Overview Section */}
        <section className="py-20 max-mobile:py-12 bg-accent-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              badge="Solution Overview"
              title={overviewTitle}
              subtitle={overviewDescription}
            />

            {overviewImage && (
              <div className="mt-12">
                <LazyImage
                  src={overviewImage}
                  alt={overviewTitle}
                  className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg object-cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 max-mobile:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              badge="Key Features"
              title={featuresTitle}
              subtitle="Discover the powerful capabilities that make our solution stand out"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon || <Zap className="w-6 h-6" />}
                  title={feature.title}
                  description={feature.description}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 max-mobile:py-12 bg-navy-950">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              badge="Measurable Benefits"
              title="Transform Your Business Outcomes"
              subtitle="See the real impact our solution delivers across key business metrics"
              variant="amber"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-full">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white mb-6">
                      {benefit.icon || <TrendingUp className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{benefit.description}</p>
                    {benefit.metric && (
                      <div className="text-amber-400 text-2xl font-bold">
                        {benefit.metric}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 max-mobile:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              badge="Use Cases"
              title="Where Our Solution Excels"
              subtitle="Explore the diverse applications and scenarios where our solution delivers exceptional value"
            />

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {useCases.map((useCase, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-navy-50 to-accent-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-amber-600 transition-colors">
                      {useCase.icon || <Target className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-navy-950 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-navy-700 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        {processSteps.length > 0 && (
          <section className="py-20 max-mobile:py-12 bg-navy-950">
            <div className="max-w-7xl mx-auto px-6">
              <SectionHeader
                badge="Implementation Process"
                title="How We Deliver Your Solution"
                subtitle="Our proven methodology ensures successful implementation and maximum value delivery"
                variant="amber"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 h-full">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-amber-500 font-bold text-lg mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{step.description}</p>
                      {step.duration && (
                        <div className="text-accent-400 text-sm font-semibold mb-2">
                          Duration: {step.duration}
                        </div>
                      )}
                      {step.deliverables && step.deliverables.length > 0 && (
                        <div className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-accent-400" />
                              <span className="text-gray-300 text-sm">
                                {deliverable}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Industries Section */}
        {industries.length > 0 && (
          <section className="py-20 max-mobile:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <SectionHeader
                badge="Industry Applications"
                title="Trusted Across Industries"
                subtitle="See how different industries leverage our solution for transformative results"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {industries.map((industry, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-navy-50 to-accent-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                      <div className="w-12 h-12 bg-navy-950 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-amber-600 transition-colors">
                        {industry.icon || <Building className="w-6 h-6" />}
                      </div>
                      <h3 className="text-xl font-bold text-navy-950 mb-4">
                        {industry.name}
                      </h3>
                      <p className="text-navy-700 leading-relaxed">
                        {industry.outcome}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case Studies Section */}
        {caseStudies.length > 0 && (
          <section className="py-20 max-mobile:py-12 bg-accent-50">
            <div className="max-w-7xl mx-auto px-6">
              <SectionHeader
                badge="Success Stories"
                title="Real Results from Real Clients"
                subtitle="See how our solution has transformed businesses and delivered measurable outcomes"
              />

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {caseStudies.map((caseStudy, index) => (
                  <div key={index} className="group">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                          <Award className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-navy-950">
                            {caseStudy.title}
                          </h3>
                          <p className="text-navy-700">{caseStudy.industry}</p>
                        </div>
                      </div>
                      <p className="text-navy-700 mb-6 leading-relaxed">
                        {caseStudy.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-amber-600">
                            {caseStudy.metric}
                          </div>
                          <div className="text-sm text-gray-600">
                            Improvement
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-navy-950">
                            {caseStudy.result}
                          </div>
                          <div className="text-sm text-gray-600">Result</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack Section */}
        {techStack.length > 0 && (
          <section className="py-20 max-mobile:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <SectionHeader
                badge="Technology Stack"
                title="Built with Modern Technologies"
                subtitle="Our solution leverages cutting-edge technologies for optimal performance and reliability"
              />

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-12">
                {techStack.map((tech, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-gradient-to-br from-navy-50 to-accent-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      {tech.logo && (
                        <LazyImage
                          src={tech.logo}
                          alt={tech.name}
                          className="w-12 h-12 mx-auto mb-3 object-contain"
                        />
                      )}
                      <div className="space-y-1">
                        <span className="text-sm font-medium text-navy-950 text-center">
                          {tech.name}
                        </span>
                        <span className="text-xs text-gray-600">
                          {tech.category}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Lead Magnet Block - Placeholder for injection */}
        {leadMagnetComponent && (
          <section className="py-20 max-mobile:py-12">
            {leadMagnetComponent}
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-20 max-mobile:py-12 bg-accent-50">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeader
              badge="Frequently Asked Questions"
              title="Get Your Questions Answered"
              subtitle="Everything you need to know about our solution and implementation process"
            />
            <FAQ />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 max-mobile:py-12 bg-navy-950">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 font-semibold text-sm mb-6">
              🎯 Ready to Transform?
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your Solution Journey Today
            </h2>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Join hundreds of companies who've already transformed their
              operations with our solution. Get your free consultation and
              custom implementation plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <CTAButton
                href={primaryCTA.href}
                variant="primary"
                size="lg"
                icon="calendar"
              >
                {primaryCTA.text}
              </CTAButton>

              <CTAButton
                href={secondaryCTA.href}
                variant="secondary"
                size="lg"
                icon="phone"
              >
                {secondaryCTA.text}
              </CTAButton>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  500+
                </div>
                <div className="text-gray-300">Solutions Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  99%
                </div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Children content (for custom sections) */}
      {children}
    </div>
  );
};

// Import Building icon
import { Building } from "lucide-react";
