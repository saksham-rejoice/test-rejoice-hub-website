import React from "react";

interface BackgroundPatternProps {
  variant?:
    | "default"
    | "subtle"
    | "tech"
    | "organic"
    | "ambient"
    | "particle"
    | "geometric";
  className?: string;
  children?: React.ReactNode;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({
  variant = "default",
  className = "",
  children,
}) => {
  const getBackgroundClasses = () => {
    switch (variant) {
      case "subtle":
        return "bg-gradient-to-br from-gray-50 to-white bg-subtle-dots bg-dots";
      case "tech":
        return "bg-gradient-to-br from-gray-50 to-white bg-tech-grid bg-tech-grid";
      case "organic":
        return "bg-gradient-to-br from-gray-50 to-white bg-organic-flow";
      case "ambient":
        return "bg-gradient-to-br from-gray-50 to-white bg-ambient-light animate-ambient-pulse";
      case "particle":
        return "bg-gradient-to-br from-gray-50 to-white bg-particle-field";
      case "geometric":
        return "bg-gradient-to-br from-gray-50 to-white bg-geometric-pattern bg-geometric";
      default:
        return "bg-gradient-to-br from-gray-50 to-white bg-subtle-dots bg-dots";
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${getBackgroundClasses()} ${className}`}
    >
      {/* Content */}
      <div className="">{children}</div>
    </div>
  );
};

export default BackgroundPattern;
