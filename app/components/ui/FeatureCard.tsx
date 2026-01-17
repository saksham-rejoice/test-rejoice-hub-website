import React from "react";
import { cn } from "~/lib/utils";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "highlight" | "minimal";
  layout?: "vertical" | "horizontal";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  href,
  onClick,
  className,
  variant = "default",
  layout = "vertical",
}) => {
  const isClickable = !!(href || onClick);

  const cardClasses = cn(
    "group relative rounded-2xl transition-all duration-300",
    {
      // Variants
      "bg-white p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2":
        variant === "default",
      "bg-gradient-to-br from-amber-50 to-orange-50 p-6 md:p-8 border-2 border-amber-200 shadow-lg hover:shadow-xl hover:-translate-y-2":
        variant === "highlight",
      "bg-transparent p-4": variant === "minimal",

      // Layout
      "text-center": layout === "vertical",
      "flex items-start gap-4 text-left": layout === "horizontal",

      // Interactive
      "cursor-pointer": isClickable,
    },
    className
  );

  const iconWrapperClasses = cn(
    "flex items-center justify-center rounded-full transition-colors duration-300",
    {
      "w-16 h-16 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-600 mb-6 mx-auto":
        layout === "vertical" && variant !== "minimal",
      "w-12 h-12 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-600 flex-shrink-0":
        layout === "horizontal" && variant !== "minimal",
      "w-8 h-8 text-amber-600": variant === "minimal",
    }
  );

  const titleClasses = cn(
    "font-semibold text-navy-950 mb-3 group-hover:text-amber-600 transition-colors duration-300",
    {
      "text-xl": layout === "vertical",
      "text-lg": layout === "horizontal" || variant === "minimal",
    }
  );

  const descriptionClasses = cn("text-navy-700 leading-relaxed", {
    "text-base": layout === "vertical",
    "text-sm": layout === "horizontal" || variant === "minimal",
  });

  const handleClick = () => {
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (onClick) {
      onClick();
    }
  };

  const content = (
    <>
      {variant !== "minimal" && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-50/10 to-orange-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
      <div className={layout === "horizontal" ? "flex-1" : ""}>
        <h3 className="text-2xl text-white font-medium  mb-3 max-mobile:text-lg max-mobile:mb-2.5">
          {title}
        </h3>
        <p className="text-base font-light max-mobile:text-sm text-light-text leading-6">
          {description}
        </p>
      </div>
    </>
  );

  if (isClickable) {
    return (
      <div
        className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2"
        onClick={handleClick}
        role="button"
        tabIndex={0}
      >
        <div className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3 h-full max-mobile:p-2">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3 h-full max-mobile:p-2">
        {content}
      </div>
    </div>
  );
};

export default FeatureCard;
