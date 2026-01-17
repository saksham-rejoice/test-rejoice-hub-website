import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react";
import { ServiceAIBuilder } from "~/components/services/ServiceAIBuilder";
import { ServiceContent } from "./ServiceLayout";
import StarIcon from "../icons/starIcon";

interface ServiceHeroSectionProps {
  content: ServiceContent;
  heroVariant?: "default" | "video-bg" | "gradient-bg";
  onAIBuilderSubmit?: (data: {
    userInput: string;
    email: string;
    serviceCategory: string;
  }) => Promise<void>;
}

export const ServiceHeroSection: React.FC<ServiceHeroSectionProps> = ({
  content,
  heroVariant = "gradient-bg",
  onAIBuilderSubmit,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { title, subhead, primaryCTA, secondaryCTA } = content;

  // Extract service category for AI Builder
  const serviceCategory = content.serviceId.replace(/-/g, " ").toLowerCase();

  // Trust metrics for this service
  const trustMetrics = [
    { value: "500+", label: "AI Projects Delivered", icon: Users },
    { value: "99%", label: "Client Satisfaction", icon: Star },
    { value: "24/7", label: "Expert Support", icon: Shield },
    { value: "10x", label: "Faster Implementation", icon: TrendingUp },
  ];

  // Key benefits for this service
  const keyBenefits = [
    { text: "90% Cost Reduction", verified: true },
    { text: "Enterprise-Grade Security", verified: true },
    { text: "Free Implementation Support", verified: true },
  ];

  return (
    <section className="">
      {/* {heroVariant === "video-bg" && (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/cover-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"></div>
        </div>
      )}

      {heroVariant === "gradient-bg" && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950 to-navy-950" />
          <div className="absolute inset-0 bg-subtle-dots opacity-20" />
        </div>
      )} */}

      {/* Main Content Container (Split Layout) */}
      <div className="pt-28 bg-white min-h-screen pb-10 relative before:absolute before:w-1/2 before:right-0 before:top-0 before:h-full max-tab:before:hidden before:bg-light before:content-['']">
        <div className="container-lg ">
          <div className="grid grid-cols-[710px_1fr] max-tab:grid-cols-1 max-tab:gap-10 gap-0 items-center z-auto">
            <div className="bg-[url('/assets/images/line.png')] bg-no-repeat bg-cover w-full pr-10 max-tab:pr-0">
              {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-2 flex items-center gap-1 px-4 bg-light-900 text-primary text-base font-semibold w-fit rounded-full"
              >
                <StarIcon />
                Premium AI Solutions
              </motion.div> */}
              <div className="py-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-primary"
                >
                  {title.split(" ").slice(0, -2).join(" ")}
                  <span className="block text-gradient">
                    {title.split(" ").slice(-2).join(" ")}
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg max-w-[612px] mb-6 text-grey-500 tracking-[-0.32px] max-mobile:text-base"
              >
                {subhead}
              </motion.p>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-4 pb-6"
              >
                {keyBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-light-900 rounded-full px-4 py-2 border border-white/20"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-400" />
                    <span className="text-primary font-medium text-xs sm:text-sm">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Primary CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pb-6 w-full"
              >
                <a
                  href={primaryCTA.href}
                  target={primaryCTA.type === "external" ? "_blank" : undefined}
                  rel={
                    primaryCTA.type === "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-full sm:w-auto px-6 sm:px-8 bg-black py-3 sm:py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-primary transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20"
                >
                  <span>{primaryCTA.text}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                {/* <a
                  href={secondaryCTA.href}
                  target={
                    secondaryCTA.type === "external" ? "_blank" : undefined
                  }
                  rel={
                    secondaryCTA.type === "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="w-full sm:w-auto px-6 sm:px-8 bg-primary-100 py-3 sm:py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-primary-200 transition-colors flex items-center justify-center space-x-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20"
                >
                  <Play className="w-5 h-5" />
                  <span>{secondaryCTA.text}</span>
                </a> */}
              </motion.div>

              {/* Trust Metrics and Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="w-full"
              >
                <p className="text-lg text-black font-medium mb-6">
                  Trusted by industry leaders across {serviceCategory}
                </p>

                {/* Trust Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pb-6">
                  {trustMetrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="">
                          {/* <Icon className="w-5 h-5 text-accent-400 mr-2" /> */}
                          <div className="text-2xl sm:text-3xl mb-1 font-bold text-primary">
                            {metric.value}
                          </div>
                        </div>
                        <div className="block text-center text-grey-500 text-sm font-normal">
                          {metric.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Award and Certification Badges */}
                <div className="flex flex-wrap justify-between gap-4  text-center text-grey-500 font-normal">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-accent-400" />
                    <span>ISO 27001 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent-400" />
                    <span>Enterprise Grade Security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-accent-400" />
                    <span>4.9/5 Client Rating</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="relative">
              <div className="bg-primary-300 max-mobile:p-2 max-mobile:rounded-xl rounded-tr-[24px] rounded-br-[24px] p-5">
                <div className="border bg-primary-100 border-solid border-primary-200 max-mobile:rounded-xl max-mobile:p-3 rounded-2xl p-5">
                  <ServiceAIBuilder
                    serviceContent={content}
                    onSubmit={onAIBuilderSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
