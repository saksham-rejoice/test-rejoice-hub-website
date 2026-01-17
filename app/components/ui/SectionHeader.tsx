import React from "react";
import { cn } from "~/lib/utils";

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  headingClassName?: string;
  subtitleClassName?: string;
  variant?: "navy" | "amber"; // conditional variant
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  headingClassName,
  subtitleClassName,
  variant = "navy", // default navy
}) => {
  // dynamic styles based on variant
  const isNavy = variant === "navy";

  return (
    <div className={cn("mb-[60px]", centered ? "text-center" : "", className)}>
      {badge && (
        <p
          className={cn(
            "text-base block text-center pb-2 font-medium text-blue-100 max-mobile:pb-2 max-mobile:text-sm",
            headingClassName
          )}
        >
          {badge}
        </p>
      )}

      <h2
        className={cn(
          "heading3 text-primary text-center mb-3",
          isNavy ? "text-navy-950" : "text-primary",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base",
            centered ? "max-w-3xl mx-auto" : "max-w-2xl",
            isNavy ? "text-grey-600" : "text-grey-600",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
