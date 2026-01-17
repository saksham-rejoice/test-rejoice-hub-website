import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  CheckCircle,
  Star,
  X,
  Calculator,
  ClipboardCheck,
  FileText,
  Book,
  Brain,
  Zap,
  ArrowRight,
} from "lucide-react";
import { submitLeadCapture, trackLeadMagnetEvent } from "~/api/aiAgentLeadApi";

export interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: string;
  type:
    | "tool"
    | "download"
    | "template"
    | "ebook"
    | "calculator"
    | "assessment";
  features: string[];
  category: string;
  downloadUrl?: string;
  estimatedTime?: string;
  targetAudience?: string;
}

interface LeadMagnetBlockProps {
  leadMagnets: LeadMagnet[];
  title?: string;
  subtitle?: string;
  badge?: string;
  placement?: "inline" | "modal" | "sidebar";
  variant?: "default" | "compact" | "featured";
  showTabs?: boolean;
  onLeadCapture?: (email: string, leadMagnetId: string) => Promise<void>;
}

const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    calculator: Calculator,
    "clipboard-check": ClipboardCheck,
    "file-text": FileText,
    book: Book,
    brain: Brain,
    zap: Zap,
    download: Download,
    "check-circle": CheckCircle,
  };

  return iconMap[iconName] || Download;
};

export const LeadMagnetBlock: React.FC<LeadMagnetBlockProps> = ({
  leadMagnets,
  title = "Accelerate Your AI Journey",
  subtitle = "Get instant access to our premium tools and guides designed by AI experts for business leaders.",
  badge = "🎁 Free Resources",
  placement = "inline",
  variant = "default",
  showTabs = true,
  onLeadCapture,
}) => {
  const [activeTab, setActiveTab] = useState(
    leadMagnets[0]?.category || "tools"
  );
  const [selectedMagnet, setSelectedMagnet] = useState<LeadMagnet | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Group lead magnets by category
  const groupedMagnets = leadMagnets.reduce(
    (acc, magnet) => {
      if (!acc[magnet.category]) {
        acc[magnet.category] = [];
      }
      acc[magnet.category].push(magnet);
      return acc;
    },
    {} as Record<string, LeadMagnet[]>
  );

  const categories = Object.keys(groupedMagnets);
  const currentMagnets = showTabs
    ? groupedMagnets[activeTab] || []
    : leadMagnets;

  const handleMagnetSelect = (magnet: LeadMagnet) => {
    setSelectedMagnet(magnet);
    setError(null);
    trackLeadMagnetEvent("magnet_selected", {
      magnetId: magnet.id,
      category: magnet.category,
      type: magnet.type,
      placement,
    });
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMagnet || !email.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      if (onLeadCapture) {
        await onLeadCapture(email, selectedMagnet.id);
      } else {
        // Default lead capture logic
        const leadData = {
          email: email.trim(),
          leadMagnetId: selectedMagnet.id,
          category: selectedMagnet.category,
          type: selectedMagnet.type,
          timestamp: new Date(),
          source: "service_page",
          placement,
        };

        await submitLeadCapture(leadData);
      }

      trackLeadMagnetEvent("email_submitted", {
        magnetId: selectedMagnet.id,
        category: selectedMagnet.category,
        placement,
      });

      setIsSubmitted(true);
      setEmail("");

      // Auto-close success modal after 3 seconds
      setTimeout(() => {
        setSelectedMagnet(null);
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error("Lead submission error:", err);
      setError("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setSelectedMagnet(null);
    setEmail("");
    setError(null);
    setIsSubmitted(false);
  };

  if (placement === "compact" || variant === "compact") {
    return (
      <div className="bg-gradient-to-r from-accent-50 to-warning-50 rounded-2xl p-6 border border-accent-200">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-warning-100 rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-accent-600" />
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-navy-950 mb-1">
              {leadMagnets[0]?.title || "Free Resource"}
            </h3>
            <p className="text-sm text-navy-700">
              {leadMagnets[0]?.description ||
                "Get instant access to valuable resources."}
            </p>
          </div>
          <button
            onClick={() => handleMagnetSelect(leadMagnets[0])}
            className="flex-shrink-0 px-4 py-2 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-700 transition-colors"
          >
            Get Free Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        className={`py-20 max-mobile:py-12 ${placement === "inline" ? "bg-navy-950" : "bg-white"}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 font-semibold text-sm mb-6`}
            >
              {badge}
            </div>
            <h2
              className={`text-3xl md:text-4xl font-extrabold mb-6 ${placement === "inline" ? "text-white" : "text-navy-950"}`}
            >
              {title}
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto leading-relaxed ${placement === "inline" ? "text-gray-200" : "text-navy-700"}`}
            >
              {subtitle}
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mb-16 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-accent-500" />
              <span
                className={
                  placement === "inline" ? "text-gray-300" : "text-gray-600"
                }
              >
                10,000+ Downloads
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-accent-500" />
              <span
                className={
                  placement === "inline" ? "text-gray-300" : "text-gray-600"
                }
              >
                4.9/5 Rating
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-accent-500" />
              <span
                className={
                  placement === "inline" ? "text-gray-300" : "text-gray-600"
                }
              >
                Free Forever
              </span>
            </div>
          </div>

          {/* Tabs - Only show if enabled and multiple categories */}
          {showTabs && categories.length > 1 && (
            <div className="mb-8 border-b border-gray-200">
              <nav
                className="-mb-px flex flex-wrap justify-center gap-x-2 sm:gap-x-4"
                aria-label="Lead Magnet Tabs"
              >
                {categories.map((category) => {
                  const IconComponent = getIconComponent(category);
                  return (
                    <button
                      key={category}
                      onClick={() => setActiveTab(category)}
                      className={`whitespace-nowrap py-4 px-1 border-b-2 cursor-pointer font-medium text-sm transition-all duration-300 flex items-center space-x-2 ${
                        activeTab === category
                          ? "border-accent-500 text-accent-600"
                          : `border-transparent ${placement === "inline" ? "text-gray-300 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"} hover:border-gray-300`
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="capitalize">{category}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Lead Magnet Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentMagnets.map((magnet) => {
              const IconComponent = getIconComponent(magnet.icon);
              return (
                <motion.div
                  key={magnet.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-6 rounded-2xl shadow-lg border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    placement === "inline"
                      ? "bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                      : "bg-white border-gray-100 hover:border-accent-200"
                  }`}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-warning-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className={`text-lg font-bold leading-tight ${placement === "inline" ? "text-white" : "text-navy-950"}`}
                      >
                        {magnet.title}
                      </h3>
                      <span className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        {magnet.value}
                      </span>
                    </div>

                    <p
                      className={`text-sm mb-4 leading-relaxed ${placement === "inline" ? "text-gray-300" : "text-navy-700"}`}
                    >
                      {magnet.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {magnet.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-accent-500 flex-shrink-0" />
                          <span
                            className={`text-xs ${placement === "inline" ? "text-gray-300" : "text-navy-600"}`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleMagnetSelect(magnet)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-accent-500 to-warning-500 text-white text-sm font-semibold rounded-xl hover:from-accent-600 hover:to-warning-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Get Free Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Email Capture Modal */}
      <AnimatePresence>
        {selectedMagnet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 modal-bg bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleModalClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {isSubmitted ? (
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-950 mb-2">
                    Success!
                  </h3>
                  <p className="text-navy-700 mb-4">
                    Check your email for the download link. We'll also send you
                    exclusive AI insights and tips.
                  </p>
                  <button
                    onClick={handleModalClose}
                    className="px-6 py-3 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-warning-100 rounded-xl flex items-center justify-center">
                      {React.createElement(
                        getIconComponent(selectedMagnet.icon),
                        {
                          className: "w-6 h-6 text-accent-600",
                        }
                      )}
                    </div>
                    <button
                      onClick={handleModalClose}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-navy-950 mb-2">
                    Get Your Free {selectedMagnet.type}
                  </h3>
                  <p className="text-navy-700 mb-6">
                    {selectedMagnet.description}
                  </p>

                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                        disabled={isSubmitting}
                      />
                    </div>

                    {error && (
                      <div className="text-red-600 text-sm">{error}</div>
                    )}

                    <div className="flex space-x-3">
                      <button
                        type="submit"
                        disabled={isSubmitting || !email.trim()}
                        className="flex-1 px-6 py-3 bg-accent-600 text-white font-semibold rounded-xl hover:bg-accent-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Get Access</span>
                            <Download className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleModalClose}
                        className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
