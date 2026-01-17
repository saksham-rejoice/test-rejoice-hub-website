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
} from "lucide-react";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import FAQ from "~/sections/home/faq";
import LazyImage from "~/components/ui/LazyImage";
import usePerformanceOptimization from "~/hooks/usePerformanceOptimization";
import useAccessibility from "~/hooks/useAccessibility";
import { getRelatedServices } from "~/lib/serviceContentLoader";
import ServiceHeroSection from "./ServiceHeroSection";
import { cn } from "~/lib/utils";
import { twMerge } from "tailwind-merge";
import { FaRocket } from "react-icons/fa";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";

interface Industry {
  name: string;
  outcome: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
export interface ServiceContent {
  serviceId: string;
  title: string;
  subhead: string;
  problems: Array<{
    title: string;
    description: string;
    icon?: any;
  }>;
  outcomes: Array<{
    title: string;
    description: string;
    metric?: string;
    icon?: any;
  }>;
  capabilities: Array<{
    title: string;
    description: string;
    icon?: any;
    features?: string[];
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
  pricingNotes: {
    model: string;
    description: string;
    startingPrice?: string;
    features: string[];
  };
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
  leadMagnetIds?: string[];
  relatedServices?: string[];
}

interface ServiceLayoutProps {
  content: ServiceContent;
  leadMagnetComponent?: React.ReactNode;
  children?: React.ReactNode;
  heroVariant?: "default" | "video-bg" | "gradient-bg";
  onAIBuilderSubmit?: (data: {
    userInput: string;
    email: string;
    serviceCategory: string;
  }) => Promise<void>;
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  content,
  leadMagnetComponent,
  children,
  heroVariant = "gradient-bg",
  onAIBuilderSubmit,
}) => {
  const {
    title,
    subhead,
    problems,
    outcomes,
    capabilities,
    industries,
    processSteps,
    caseStudies,
    techStack,
    pricingNotes,
    faqs,
    primaryCTA,
    secondaryCTA,
  } = content;
  console.log(industries)

  // Performance optimization
  const preloadImages = techStack
    .filter((tech) => tech.logo)
    .map((tech) => tech.logo!)
    .slice(0, 3); // Preload first 3 tech logos

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
    announcePageChange(`${title} service page loaded`);
    const cleanup = addSkipLinks();
    return cleanup;
  }, [title, announcePageChange, addSkipLinks]);

  return (
    <div className="min-h-screen">
      {/* New ServiceHeroSection with split layout */}
      <ServiceHeroSection
        content={content}
        heroVariant={heroVariant}
        onAIBuilderSubmit={onAIBuilderSubmit}
      />

      {/* Main Content */}
      <main
        id="main-content"
        role="main"
        aria-label={`${title} service details`}
      >
        {/* Problem to Outcome Section */}
        <section
          className="py-20 max-mobile:py-12 "
          aria-labelledby="problems-outcomes-title"
        >
          <div className="container-lg">
            <SectionHeader
              badge="Transform Challenges into Results"
              title="From Pain Points to Powerful Outcomes"
              subtitle="See how our solutions turn your biggest operational challenges into competitive advantages."
            />

            <div className="grid md:grid-cols-2 gap-16">
              {/* Problems Column */}
              <div>
                <h2 className="text-2xl font-bold text-navy-950 mb-8 flex items-center gap-3">
                  <span className="w-12 h-12 bg-danger-500 rounded-full flex items-center justify-center text-white">
                    <AlertCircle className="w-6 h-6" />
                  </span>
                  <h3 className="text-primary">Current Challenges</h3>
                </h2>
                <div className="space-y-6">
                  {problems.map((problem, index) => (
                    <div
                      key={index}
                      className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
                    >
                      <div className="flex items-start gap-4">
                        {problem.icon && (
                          <div className="flex-shrink-0 w-12 h-12 bg-danger-100 rounded-lg flex items-center justify-center">
                            {problem.icon}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-2">
                            {problem.title}
                          </h3>
                          <p className="text-primary">{problem.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes Column */}
              <div>
                <h2 className="text-2xl font-bold text-navy-950 mb-8 flex items-center gap-3">
                  <span className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle className="w-6 h-6" />
                  </span>
                  <h3 className="text-primary">Measurable Outcomes</h3>
                </h2>
                <div className="space-y-6">
                  {outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
                    >
                      <div className="flex items-start gap-4">
                        {outcome.icon && (
                          <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                            {outcome.icon}
                          </div>
                        )}
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-primary">
                              {outcome.title}
                            </h3>
                            {/* {outcome.metric && (
                              <span className="bg-accent-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                {outcome.metric}
                              </span>
                            )} */}
                          </div>
                          <p className="text-primary">{outcome.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Capabilities Section */}
        <section className="py-20 max-mobile:py-12 blue-line-bg">
          <div className="container-lg">
            <SectionHeader
              headingClassName="text-white"
              titleClassName="text-white"
              subtitleClassName="text-white"
              badge="Core Capabilities"
              title="Comprehensive Solutions Tailored to Your Needs"
              subtitle="Deep expertise across all aspects of AI implementation and optimization."
              variant="amber"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <FeatureCard
                  key={index}
                  icon={capability.icon}
                  title={capability.title}
                  description={capability.description}
                  variant="default"
                  layout="vertical"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Industries and Use Cases */}
        <section className="py-20 max-mobile:py-12 ">
          <div className="container-lg">
            <SectionHeader
              badge="Industry Expertise"
              title="Proven Results Across Industries"
              subtitle="Specialized solutions for diverse sectors with measurable impact."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    {industry.icon && (
                      <div className="w-12 h-12 border border-orange-600 rounded-xl flex items-center justify-center p-2">
                        <img 
                          src={industry.icon} 
                          alt={industry.name} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-primary">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="text-primary font-normal">{industry.outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Process Section */}
        <div className="px-10 pb-20">
          <section className="blue-line-bg rounded-[30px] py-20 max-mobile:py-12">
            <div className="container-lg">
              <SectionHeader
                badge="Our Process"
                headingClassName="text-white"
                titleClassName="text-white"
                subtitleClassName="text-white"
                title="Proven 4-Step Implementation Method"
                subtitle="From discovery to deployment, we ensure successful AI transformation at every stage."
                variant="amber"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {processSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="bg-primary-100 rounded-[20px] border border-solid border-primary-200 p-[30px]">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-light mb-4">{step.description}</p>
                      {/* {step.duration && (
                        <div className="text-white text-sm font-semibold mb-2">
                          Duration: {step.duration}
                        </div>
                      )}
                      {step.deliverables && (
                        <div className="space-y-1">
                          <div className="text-white text-xs font-semibold uppercase tracking-wide">
                            Deliverables:
                          </div>
                          {step.deliverables.map((deliverable, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-light"
                            >
                              <CheckCircle className="w-3 h-3 text-accent-400 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      )} */}
                    </div>
                    {/* {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-accent-400" />
                    </div>
                  )} */}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* 6. Case Studies Section */}
        <section className=" bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
          <div className="absolute top-0 leading-0 w-full z-[-1]">
            <img className="block" src={TopLineImage} alt="TopLineImage" />
          </div>
          <div className="absolute bottom-0 leading-0 w-full z-[-1]">
            <img
              className="block"
              src={BottomLineImage}
              alt="BottomLineImage"
            />
          </div>
          <div className="container-lg">
            <SectionHeader
              badge="Proven Results"
              title="Success Stories from Real Implementations"
              subtitle="See the measurable impact our solutions have delivered for businesses like yours."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {caseStudies.slice(0, 3).map((study, index) => (
                <article
                  key={index}
                  className="rounded-2xl p-5 border border-solid border-[#E9E9E9]  bg-white"
                  tabIndex={0}
                  role="article"
                  aria-labelledby={`case-study-title-${index}`}
                >
                  <div className="text-center mb-4">
                    <div
                      className="text-3xl font-bold text-primary mb-2"
                      aria-label={`${study.metric} improvement metric`}
                    >
                      {study.metric}
                    </div>
                    <div className="text-lg font-semibold text-navy-950">
                      {study.result}
                    </div>
                    <div className="text-sm text-primary-300 font-medium pt-1">
                      {study.industry}
                    </div>
                  </div>
                  <h3
                    id={`case-study-title-${index}`}
                    className="text-lg font-bold text-primary mb-3"
                  >
                    {study.title}
                  </h3>
                  <p className="text-primary text-sm leading-relaxed">
                    {study.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="text-center mt-12  max-mobile:mt-6">
              <div className="flex justify-center gap-4 max-mobile:grid max-mobile:grid-cols-1">
                <CTAButton
                  href="https://calendly.com/dipak-rejoicehub"
                  variant="secondary"
                  size="lg"
                  icon="calendar"
                >
                  Book AI Consultation
                </CTAButton>
                <CTAButton
                  to="/case-studies"
                  variant="primary"
                  size="lg"
                  icon="arrow"
                >
                  View All Case Studies
                </CTAButton>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Tech Stack and Integrations */}
        <section className="py-20 max-mobile:py-12 ">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              badge="Technology Stack"
              title="Built on Industry-Leading Technologies"
              subtitle="We leverage the best tools and frameworks to ensure scalable, secure, and efficient solutions."
              variant="amber"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {techStack.map((tech, index) => {
                return (
                  <div
                    key={index}
                    className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-5"
                  >
                    <div className="aspect-ratio-1-1 w-12 mb-3">
                      {tech.logo ? (
                        <LazyImage
                          src={tech.logo}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="aspect-ratio-content object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center border border-solid border-primary-500 bg-light-blue rounded-md">
                          <span className="text-accent-600 font-bold text-bsae text-white">
                            {tech.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-base text-white block font-medium text-navy-950 ">
                      {tech.name}
                    </span>
                    <span className="text-sm text-light">{tech.category}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8. Pricing section is now handled by the new pricing components */}

        {/* 9. Lead Magnet Block - Placeholder for injection */}
        {leadMagnetComponent && (
          <section className="py-20 max-mobile:py-12">
            {leadMagnetComponent}
          </section>
        )}

        {/* 10. FAQ Section */}
        <section className="py-20 max-mobile:py-12 bg-accent-50  light-blue-line w-full bg-no-repeat bg-cover">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader
              badge="Frequently Asked Questions"
              title="Get Your Questions Answered"
              subtitle="Everything you need to know about our AI implementation process and services."
            />
            <FAQ />
          </div>
        </section>

        {/* 11. Final CTA Section */}
        {/* <section className="py-20 max-mobile:py-12 ">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
              Ready to Transform?
            </div>

            <h2 className="heading3 text-center mb-4 text-primary">
              Start Your AI Transformation Today
            </h2>

            <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
              Join 500+ companies who've already transformed their operations
              with our AI solutions. Get your free consultation and custom
              roadmap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center py-10">
              <CTAButton
                href={primaryCTA.href}
                variant="primary"
                size="lg"
                icon="calendar"
              >
                {primaryCTA.text}
              </CTAButton>
              <CTAButton
                to="tel:+919825122840"
                variant="secondary"
                size="lg"
                icon="external"
              >
                <Phone className="w-5 h-5 mr-2" /> Call: +91 98251 22840
              </CTAButton>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">
                  500+
                </div>
                <div className="text-primary">AI Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">
                  40%
                </div>
                <div className="text-primary">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-400 mb-2">
                  99%
                </div>
                <div className="text-primary">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Related Services Section */}
        {/* {(() => {
          const relatedServices = getRelatedServices(content.serviceId, 3);
          return relatedServices.length > 0 ? (
            <section className=" bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
              <div className="absolute top-0 leading-0 w-full z-[-1]">
                <img className="block" src={TopLineImage} alt="TopLineImage" />
              </div>
              <div className="absolute bottom-0 leading-0 w-full z-[-1]">
                <img
                  className="block"
                  src={BottomLineImage}
                  alt="BottomLineImage"
                />
              </div>
              <div className="container-lg">
                <SectionHeader
                  badge="Related Services"
                  title="Explore Our Other AI Solutions"
                  subtitle="Discover complementary services that can further accelerate your digital transformation journey."
                />

                <div className={`${relatedServices.length >= 3 ? 'grid md:grid-cols-3' : relatedServices.length === 2 ? 'flex justify-center max-w-5xl mx-auto' : 'flex justify-center'} gap-8`}>
                  {relatedServices.map((service, index) => (
                    <Link
                      key={service.serviceId}
                      to={`/services/${service.serviceId}`}
                      className="bg-white border border-solid border-[#E9E9E9] rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className="w-auto">
                        <div className="w-16 h-16 mb-5 flex items-center justify-center bg-gradient-to-b from-[#FF5E01] to-[#FF9404] rounded-xl">
                          <span className="text-3xl">
                            <FaRocket className="w-6 h-6 text-white" />
                          </span>
                        </div>

                        <h3 className="text-xl text-primary font-semibold mt-5 mb-3 line-clamp-1">
                          {service.title.split(" ").slice(0, 3).join(" ")}
                        </h3>

                        <p className="text-base  text-black-500 font-medium mb-2">
                          {service.subhead.slice(0, 120)}...
                        </p>

                        <div className="flex pt-3 items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ) : null;
        })()} */}

        {children}
      </main>
    </div>
  );
};
