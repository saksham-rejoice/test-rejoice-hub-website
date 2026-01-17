import { useState } from "react";
import {
  Mail,
  Download,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import CTAButton from "./CTAButton";

interface LeadMagnetFormProps {
  title: string;
  description: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  resourceId?: string;
  onSubmit?: (email?: string, resourceId?: string) => Promise<void>;
  variant?: "default" | "compact" | "newsletter";
  className?: string;
}

const LeadMagnetForm: React.FC<LeadMagnetFormProps> = ({
  title,
  description,
  placeholder = "Enter your email address",
  buttonText = "Get Access",
  successMessage = "Thank you! Check your email for access.",
  resourceId,
  onSubmit,
  variant = "default",
  className = "",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(email, resourceId);
      } else {
        // Default lead capture logic
    
        // Here you would typically send to your CRM or email service
      }
      setIsSubmitted(true);
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`bg-green-50 flex flex-col justify-center items-center border border-green-200 rounded-xl p-6 text-center ${className}`}
      >
        <div>
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">Success!</h3>
        <p className="text-green-700">{successMessage}</p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-3 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none placeholder:text-white"
          required
        />
        <CTAButton
          type="submit"
          variant="primary"
          size="md"
          loading={isSubmitting}
          icon="arrow"
        >
          {buttonText}
        </CTAButton>
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </form>
    );
  }

  if (variant === "newsletter") {
    return (
      <div
        className={`border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-5  ${className}`}
      >
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6 text-amber-600" />
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-light mb-6">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-3 text-white border border-white rounded-lg focus:outline-none placeholder:text-white"
            required
          />
          <CTAButton
            type="submit"
            variant="primary"
            size="md"
            loading={isSubmitting}
            icon="mail"
            className="w-full"
          >
            {buttonText}
          </CTAButton>
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div
      className={`border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-5 ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Download className="w-6 h-6 text-amber-600" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-light mb-6">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="w-full text-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none placeholder:text-white"
          required
        />
        <CTAButton
          type="submit"
          variant="primary"
          size="md"
          loading={isSubmitting}
          icon="download"
          className="w-full"
        >
          {buttonText}
        </CTAButton>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default LeadMagnetForm;
