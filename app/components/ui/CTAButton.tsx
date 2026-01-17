import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
  Download,
  Calendar,
  Phone,
  Play,
  Mail,
  Calculator,
  BarChart3,
  Star,
  Filter,
  BookOpen,
  Code,
  Handshake,
} from "lucide-react";
import { cn } from "~/lib/utils";

export interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  icon?:
    | "arrow"
    | "external"
    | "download"
    | "calendar"
    | "phone"
    | "play"
    | "mail"
    | "calculator"
    | "chart"
    | "star"
    | "filter"
    | "book"
    | "code"
    | "handshake";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  href,
  to,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  icon,
  className,
  disabled = false,
  loading = false,
  fullWidth = false,
  ...props
}) => {
  const baseClasses = cn(
    "inline-flex items-center cursor-pointer justify-center gap-2 font-semibold rounded-xl transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500",
    "transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0",
    {
      // Variants
      "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg":
        variant === "primary",
      "bg-primary-300 text-white hover:bg-navy-800": variant === "secondary",
      "border-2 border-white text-white hover:text-white":
        variant === "outline",
      "text-amber-600 hover:bg-amber-50": variant === "ghost",

      // Sizes
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-6 py-3 ": size === "lg",
      "px-10 py-4 text-xl": size === "xl",

      // States
      "opacity-50 cursor-not-allowed hover:transform-none": disabled || loading,
      "w-full": fullWidth,
    },
    className
  );

  const iconMap = {
    arrow: ArrowRight,
    external: ExternalLink,
    download: Download,
    calendar: Calendar,
    phone: Phone,
    play: Play,
    mail: Mail,
    calculator: Calculator,
    chart: BarChart3,
    star: Star,
    filter: Filter,
    book: BookOpen,
    code: Code,
    handshake: Handshake,
  };

  const IconComponent = icon ? iconMap[icon] : null;

  const content = (
    <>
      {children}
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
      )}
      {IconComponent && !loading && (
        <IconComponent className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  const commonProps = {
    className: `${baseClasses} group`,
    disabled: disabled || loading,
    ...props,
  };

  if (to) {
    return (
      <Link to={to} {...commonProps}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} {...commonProps}>
      {content}
    </button>
  );
};

export default CTAButton;
