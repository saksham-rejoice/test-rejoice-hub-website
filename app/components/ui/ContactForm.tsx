import React, { useState } from "react";
import { Phone, Mail, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import CTAButton from "./CTAButton";
import { cn } from "~/lib/utils";
import { supabase } from "~/Supabase/supabaseClient";

interface ContactFormProps {
  serviceId?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  variant?: "default" | "compact" | "hero";
}

const ContactForm: React.FC<ContactFormProps> = ({
  serviceId,
  title = "Ready to Get Started?",
  subtitle = "Schedule a free consultation with our experts to discuss your project requirements.",
  className = "",
  variant = "default",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    service: serviceId || "",
    budget: "",
    timeline: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Service-specific CTAs and messaging
  const serviceConfigs: {
    [key: string]: {
      cta: string;
      subtitle: string;
      placeholder: string;
    };
  } = {
    "ai-agents-services": {
      cta: "Book AI Consultation",
      subtitle:
        "Get a free AI strategy consultation and discover how AI agents can transform your business.",
      placeholder: "Tell us about your automation needs...",
    },
    "generative-ai-development-services": {
      cta: "Get AI Demo",
      subtitle:
        "See how generative AI can enhance your content creation and business processes.",
      placeholder: "Describe your AI content needs...",
    },
    "mobile-app-development-services": {
      cta: "Start App Project",
      subtitle:
        "Discuss your mobile app idea and get a custom development roadmap.",
      placeholder: "Tell us about your app idea...",
    },
    "iot-development-services": {
      cta: "IOT Strategy Call",
      subtitle:
        "Explore how IOT solutions can optimize your operations and provide real-time insights.",
      placeholder: "Describe your IOT requirements...",
    },
    "devops-consulting-services": {
      cta: "DevOps Assessment",
      subtitle:
        "Get a comprehensive DevOps maturity assessment and improvement roadmap.",
      placeholder: "Tell us about your current DevOps setup...",
    },
    "open-source-consulting": {
      cta: "Open Source Strategy",
      subtitle:
        "Discover how open source solutions can reduce costs and improve efficiency.",
      placeholder: "Describe your technology needs...",
    },
    "ui-ux-design-services": {
      cta: "Design Portfolio Review",
      subtitle:
        "Get a free UX audit and discover how design can improve your user experience.",
      placeholder: "Tell us about your design needs...",
    },
    "digital-marketing-services": {
      cta: "Marketing Strategy Session",
      subtitle:
        "Get a comprehensive marketing audit and strategy to boost your online presence.",
      placeholder: "Tell us about your marketing goals...",
    },
    "brand-design": {
      cta: "Brand Identity Workshop",
      subtitle:
        "Start your brand transformation journey with a free brand strategy session.",
      placeholder: "Tell us about your brand vision...",
    },
    "user-research": {
      cta: "User Research Consultation",
      subtitle:
        "Learn how user research can improve your product design and user experience.",
      placeholder: "Tell us about your research needs...",
    },
    "digital-transformation": {
      cta: "Start Digital Transformation",
      subtitle:
        "Begin your digital transformation journey with a comprehensive assessment and strategy session.",
      placeholder: "Tell us about your transformation goals...",
    },
    "ai-integration": {
      cta: "Start AI Integration",
      subtitle:
        "Ready to integrate AI into your systems? Let's discuss your integration needs.",
      placeholder: "Tell us about your systems and AI integration goals...",
    },
    "ai-strategy-consulting": {
      cta: "Start AI Strategy Consulting",
      subtitle:
        "Ready to develop your AI strategy? Let's discuss your strategic goals.",
      placeholder: "Tell us about your business and AI strategy needs...",
    },
    "api-development": {
      cta: "Start API Development",
      subtitle:
        "Ready to build powerful APIs? Let's discuss your API development needs.",
      placeholder:
        "Tell us about your API requirements and integration goals...",
    },
  };

  const config = serviceId
    ? serviceConfigs[serviceId]
    : {
        cta: "Get Free Consultation",
        subtitle: subtitle,
        placeholder: "Tell us about your project...",
      };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_us").insert([
        {
          full_name: formData.name,
          email: formData.email,
          subject: formData.service || "General Inquiry",
          phone_number: formData.phone,
          service: formData.service,
          budget: formData.budget,
          start_time: formData.timeline,
          requirement: "General Contact Form",
          message: formData.message,
        },
      ]);

      if (error) {
        console.error("Supabase insert error", error);
        alert("Something went wrong while sending your message. Please try again.");
        return;
      }
      
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        service: serviceId || "",
        budget: "",
        timeline: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Unexpected error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div
        className={cn(
          "bg-white rounded-2xl p-8 shadow-lg border border-gray-100",
          className
        )}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy-950 mb-2">Thank You!</h3>
          <p className="text-navy-700 mb-6">
            We've received your message and will get back to you within 24
            hours.
          </p>
          <CTAButton
            onClick={() => setSubmitted(false)}
            variant="primary"
            size="lg"
          >
            Send Another Message
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-lg border border-gray-100",
        className
      )}
    >
      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-navy-950 mb-2">{title}</h3>
          <p className="text-navy-700">{config.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" method="POST" action="#">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-navy-950 mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy-950 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-navy-950 mb-2"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-navy-950 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {variant !== "compact" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-navy-950 mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-navy-950 mb-2"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select timeline</option>
                  <option value="1-2-months">1-2 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="12+months">12+ months</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-navy-950 mb-2"
            >
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
              placeholder={config.placeholder}
            />
          </div>

          <CTAButton
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            loading={isSubmitting}
            icon="arrow"
          >
            {isSubmitting ? "Sending..." : config.cta}
          </CTAButton>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Calendar className="w-6 h-6 text-amber-600 mb-2" />
              <span className="text-sm font-medium text-navy-950">
                Free Consultation
              </span>
              <span className="text-xs text-navy-700">
                30-minute strategy call
              </span>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="w-6 h-6 text-amber-600 mb-2" />
              <span className="text-sm font-medium text-navy-950">
                Quick Response
              </span>
              <span className="text-xs text-navy-700">Within 24 hours</span>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-amber-600 mb-2" />
              <span className="text-sm font-medium text-navy-950">
                Direct Contact
              </span>
              <span className="text-xs text-navy-700">+91 98251 22840</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
