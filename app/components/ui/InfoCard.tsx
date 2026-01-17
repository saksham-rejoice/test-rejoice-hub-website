import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

interface InfoCardProps {
  title: string;
  titleGradient?: string;
  paragraphs: string[];
  ctaText: string;
  ctaLink: string;
  showIcon?: boolean;
}

export default function InfoCard({
  title,
  titleGradient,
  paragraphs,
  ctaText,
  ctaLink,
  showIcon = true,
}: InfoCardProps) {
  return (
    <section className="py-20 max-mobile:py-12">
      <div className="container-lg">
        <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-12 max-tab:p-8 max-mobile:p-6">
          <h2 className="heading2 text-primary mb-6 max-mobile:mb-4">
            {title}{" "}
            {titleGradient && (
              <span className="text-gradient">{titleGradient}</span>
            )}
          </h2>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-grey-600 max-mobile:text-base mb-6 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <Link to={ctaLink}>
            <Button
              variant="default"
              size={"lg"}
              className="text-white py-2.5 h-auto rounded-lg cursor-pointer font-medium text-base"
            >
              {ctaText}
              {showIcon && <ArrowRight className="w-5 h-5" />}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
