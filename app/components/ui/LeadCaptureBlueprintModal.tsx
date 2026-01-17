import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Download,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Code,
  X,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";
import { AgentBlueprint } from "~/types/aiAgentBuilderTypes";

interface LeadCaptureBlueprintModalProps {
  isVisible: boolean;
  blueprint: AgentBlueprint | null;
  onClose: () => void;
  onEmailSubmit: (email: string) => Promise<void>;
  userInput: string;
}

interface FormState {
  email: string;
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

export const LeadCaptureBlueprintModal: React.FC<
  LeadCaptureBlueprintModalProps
> = ({ isVisible, blueprint, onClose, onEmailSubmit, userInput }) => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  const validateEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateCompanyEmail = (email: string): boolean => {
    const personalEmailDomains = [
      'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
      'icloud.com', 'protonmail.com', 'mail.com', 'yandex.com', 'zoho.com',
      'inbox.com', 'me.com', 'mac.com', 'live.com', 'msn.com', 'yahoo.co.uk',
      'googlemail.com', 'gmx.com', 'web.de', 'mail.ru', 'yopmail.com', 'yopmail.com'
    ];

    const domain = email.split('@')[1]?.toLowerCase();
    return domain ? !personalEmailDomains.includes(domain) : false;
  };

  const validateEmail = (email: string): { isValid: boolean; message: string } => {
    if (!email.trim()) {
      return { isValid: false, message: 'Email is required.' };
    }

    if (!validateEmailFormat(email)) {
      return { isValid: false, message: 'Please enter a valid email address.' };
    }

    if (!validateCompanyEmail(email)) {
      return { isValid: false, message: 'Please use your company email address.' };
    }

    return { isValid: true, message: '' };
  };


  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();



    const validation = validateEmail(formState.email);
    if (!validation.isValid) {
      setFormState((prev) => ({ ...prev, error: validation.message }));
      return;
    }

    if (!validateCompanyEmail(formState.email)) {
      setFormState((prev) => ({ ...prev, error: "Please use your company email address." }));
      return;
    }

    // Set loading state
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

    try {
      // Await the API call
      const res = await onEmailSubmit(formState.email);
      // Use functional update to ensure we have the latest state
      setFormState(prev => ({
        ...prev,
        isSubmitted: true,
        // isSubmitting: false,
        error: null
      }));

    } catch (error) {
      console.error('Error submitting email:', error);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        error: "Your project creation is under process, please wait for a while."
      }));
    }
  };

  const handleClose = () => {
    setFormState({
      email: "",
      isSubmitting: false,
      isSubmitted: false,
      error: null,
    });
    onClose();
  };

  if (!isVisible || !blueprint) return null;



  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && handleClose()}
      >
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="relative bg-gradient-to-r from-accent-400 to-warning-500 p-6 text-primary">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  AI Agent Blueprint Ready!
                </h2>
                <p className="text-primary">
                  Your custom solution blueprint is complete
                </p>
              </div>
            </div>

            <div className="border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] backdrop-blur-sm rounded-xl p-4 mt-4">
              <p className="text-sm text-primary mb-1">Your Request:</p>
              <p className="font-medium text-primary">"{userInput}"</p>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
            {!formState.isSubmitted ? (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Blueprint Preview */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-navy-950 mb-2">
                      {blueprint.title}
                    </h3>
                    <p className="text-navy-700 mb-4">
                      {blueprint.description}
                    </p>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6 max-mobile:grid-cols-1">
                      <div className=" bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-accent-600" />
                          <span className="text-sm font-medium text-navy-950">
                            Development Time
                          </span>
                        </div>
                        <p className="text-lg font-bold text-navy-950">
                          {blueprint.estimatedDevelopmentTime}
                        </p>
                      </div>

                      <div className="bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-accent-600" />
                          <span className="text-sm font-medium text-navy-950">
                            Components
                          </span>
                        </div>
                        <p className="text-xl font-bold text-navy-950">
                          {typeof blueprint.components === 'number' && (
                            <p>{blueprint.components} components</p>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Features Preview */}
                  <div className="mb-6 max-mobile:pb-10">
                    <h4 className="font-semibold text-navy-950 mb-3">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {blueprint.keyFeatures
                        .slice(0, 4)
                        .map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-navy-700">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      {blueprint.keyFeatures.length > 4 && (
                        <p className="text-sm text-navy-500 italic">
                          +{blueprint.keyFeatures.length - 4} more features
                          included...
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Components Preview */}
                  <div>
                    <h4 className="font-semibold text-navy-950 mb-3">
                      Core Components
                    </h4>
                    <div className="space-y-2">
                      {blueprint.core_components &&
                        Object.entries(blueprint.core_components).length > 0 ? (
                        Object.entries(blueprint.core_components).map(
                          ([key, value], index) => (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="bg-gray-50 rounded-lg p-3"
                            >
                              <h5 className="font-medium text-navy-950 text-sm mb-1">
                                {key}
                              </h5>
                              <p className="text-xs text-navy-600">
                                {String(value)}
                              </p>
                            </motion.div>
                          )
                        )
                      ) : (
                        <p className="text-sm text-navy-500 italic text-center py-2">
                          No core components specified
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Lead Capture Form */}
                <div>
                  <div className="border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] rounded-2xl p-6">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent-400 to-warning-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Download className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-950 mb-2">
                        Get Your Complete Blueprint
                      </h3>
                      <p className="text-navy-700 text-sm">
                        Enter your email to receive the full technical
                        specification, starter code, and implementation guide.
                      </p>
                    </div>

                    <form onSubmit={handleEmailSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy-950 mb-2"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState((prev) => ({
                                ...prev,
                                email: e.target.value,
                                error: null,
                              }))
                            }
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none  transition-all"
                            placeholder="your.email@company.com"
                            required
                            disabled={formState.isSubmitting}
                          />
                        </div>
                        {formState.error && (
                          <p className="text-red-500 text-sm mt-1">
                            {formState.error}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={formState.isSubmitting || !formState.email}
                        className="w-full cursor-pointer bg-primary-300 text-white hover:bg-navy-800  font-semibold py-3 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {formState.isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Sending Blueprint...</span>
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5" />
                            <span>Send Me the Blueprint</span>
                          </>
                        )}
                      </button>
                    </form>

                    {/* Trust Indicators */}
                    <div className="mt-6 pt-4 border-t border-accent-200">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <Shield className="w-5 h-5 text-accent-600" />
                          <span className="text-xs text-navy-700">
                            Secure & Private
                          </span>
                        </div>
                        <div className="flex flex-col items-center gap-1">
                          <Star className="w-5 h-5 text-accent-600" />
                          <span className="text-xs text-navy-700">
                            No Spam Guarantee
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-navy-500 text-center mt-3">
                        We respect your privacy. Unsubscribe anytime.
                      </p>
                    </div>
                  </div>

                  {/* What You'll Receive */}
                  <div className="mt-6">
                    <h4 className="font-semibold text-navy-950 mb-3">
                      What you'll receive:
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-navy-700">
                          Complete technical blueprint (PDF)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-navy-700">
                          Starter code and templates
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-navy-700">
                          Implementation roadmap
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-navy-700">
                          Free 30-minute consultation call
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) :(
              /* Success State */
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-12 h-12 text-green-500" />
                </motion.div>

                <h3 className="text-2xl font-bold text-navy-950 mb-4">
                  Blueprint Sent Successfully!
                </h3>

                <p className="text-navy-700 mb-6 max-w-md mx-auto">
                  We've sent your complete AI agent blueprint to{" "}
                  <strong>{formState.email}</strong>. Check your inbox (and spam
                  folder) for the detailed technical specification.
                </p>

                <div className="bg-accent-50 rounded-xl p-6 mb-6 max-w-md mx-auto">
                  <h4 className="font-semibold text-navy-950 mb-2">
                    What's Next?
                  </h4>
                  <div className="text-sm text-navy-700 space-y-2">
                    <p>
                      • Review your custom blueprint and implementation guide
                    </p>
                    <p>• Schedule your free consultation call</p>
                    <p>• Start building your AI agent with our starter code</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://calendly.com/dipak-rejoicehub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-300 cursor-pointer to-warning-500 hover:from-accent-600 hover:to-warning-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    <span>Schedule Free Consultation</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <button
                    onClick={handleClose}
                    className="inline-flex items-center gap-2 border cursor-pointer border-gray-300 hover:bg-gray-50 text-navy-950 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    <span>Explore More Solutions</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
