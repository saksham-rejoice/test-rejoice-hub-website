import React, { useState } from "react";
import { X, Download, ArrowRight } from "lucide-react";
import { cn } from "~/lib/utils";
import CTAButton from "./CTAButton";

export interface LeadMagnetCardProps {
  title: string;
  description: string;
  value?: string;
  icon: React.ReactNode;
  features?: string[];
  resourceId: string;
  onSubmit: (email: string, resourceId: string) => void;
  className?: string;
  compact?: boolean;
}

const LeadMagnetCard: React.FC<LeadMagnetCardProps> = ({
  title,
  description,
  value,
  icon,
  features = [],
  resourceId,
  onSubmit,
  className,
  compact = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleClick = () => {
    // Call the parent's onSubmit with the resourceId
    onSubmit(email,resourceId);
  
  };

  const cardContent = (
    <>
      <div className="flex items-start gap-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3 justify-between">
        <div className="flex-shrink-0 p-3 max-mobile:w-fit text-white bg-gradient-to-b from-[#FF5E01] to-[#FF9404] rounded-lg">
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-base text-white mb-3 leading-relaxed">
            {description}
          </p>

          {!compact && features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {features.slice(0, 3).map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full cursor-pointer text-sm font-medium border border-solid border-primary-200  bg-primary-100 text-white"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex-shrink-0 flex flex-col items-end gap-2">
          {value && (
            <span className="font-bold text-amber-600 text-base whitespace-nowrap">
              {value}
            </span>
          )}
          <CTAButton
            onClick={handleClick}
            variant="primary"
            size="sm"
            icon="download"
          >
            Get Free
          </CTAButton>
        </div>
      </div>


    </>
  );

  return (
    <div
      className={cn(
        "border last:mb-0 border-solid border-primary-200 rounded-[14px] bg-primary-100 py-6 px-10  transition-all duration-300",
        compact ? "p-4" : "p-6",
        className
      )}
    >
      {cardContent}
    </div>
  );
};

export default LeadMagnetCard;
