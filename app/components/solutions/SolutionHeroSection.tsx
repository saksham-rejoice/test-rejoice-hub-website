import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Zap,
  Brain,
  Target,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";
import { SolutionContent } from "./SolutionLayout";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import LazyImage from "~/components/ui/LazyImage";

interface SolutionHeroSectionProps {
  content: SolutionContent;
  heroVariant?: "gradient-bg" | "video-bg";
  onAIBuilderSubmit?: (data: {
    userInput: string;
    email: string;
    serviceCategory: string;
  }) => Promise<void>;
}

export const SolutionHeroSection: React.FC<SolutionHeroSectionProps> = ({
  content,
  heroVariant = "gradient-bg",
  onAIBuilderSubmit,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current && heroVariant === "video-bg") {
      videoRef.current.play().catch(console.error);
    }
  }, [heroVariant]);

  // Key benefits for the hero section
  const keyBenefits = [
    { text: "Proven Results", verified: true },
    { text: "Expert Implementation", verified: true },
    { text: "24/7 Support", verified: true },
    { text: "Free Consultation", verified: true },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background based on variant */}
      {heroVariant === "video-bg" && (
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
      )}

      {/* Main Content Container (Split Layout) */}
      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 max-mobile:py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-9xl">
        {/* Left Column - Main Content */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 font-semibold text-sm w-fit"
          >
            🚀 AI-Powered Solution
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {content.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-2xl"
          >
            {content.subhead}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-300 leading-relaxed max-w-2xl"
          >
            {content.description}
          </motion.p>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4 max-w-md"
          >
            {keyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm font-medium">
                  {benefit.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              <span>Watch Demo</span>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center space-x-8 pt-4"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-gray-300">Solutions Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">99%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-400">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Interactive Demo/Preview */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Demo Card */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Demo Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                    <Brain className="w-10 h-10 text-white" />
                  </div>

                  {/* Demo Title */}
                  <h3 className="text-2xl font-bold text-white">
                    Try Our Solution
                  </h3>

                  {/* Demo Description */}
                  <p className="text-gray-200 leading-relaxed">
                    Experience the power of our AI solution with a personalized
                    demo tailored to your business needs.
                  </p>

                  {/* Demo CTA */}
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-4 rounded-xl transition-all duration-300"
                  >
                    <span>Start Free Demo</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-6"
            >
              {[
                { icon: Zap, text: "Lightning Fast" },
                { icon: Shield, text: "Secure & Reliable" },
                { icon: Users, text: "User Friendly" },
                { icon: TrendingUp, text: "Scalable" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
                >
                  <feature.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <span className="text-white text-sm font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
