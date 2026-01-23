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
  target?: string;
}

export default function InfoCard({
  title,
  titleGradient,
  paragraphs,
  ctaText,
  ctaLink,
  showIcon = true,
  target,
}: InfoCardProps) {
  return (
    <section className="py-16 max-tab:py-12 max-mobile:py-8">
      <div className="container-lg2 text-center px-4 max-mobile:px-2">
        <div className="bg-white rounded-[2rem] max-mobile:rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.05)] border-[1.5px] border-[#FF9404] bg-[#FFF4EB] p-12 max-tab:p-10 max-mobile:px-4 max-mobile:py-10 mx-auto max-w-[1100px] transition-all duration-300">
          <h2 className="heading2 text-primary mb-6 max-mobile:mb-5 leading-[1.2] max-mobile:text-[20px] max-mobile:leading-tight">
            {title}{" "}
            {titleGradient && (
              <span className="text-gradient inline-block max-mobile:block max-mobile:mt-1">{titleGradient}</span>
            )}
          </h2>

          <div className="flex flex-col items-center gap-5 mb-10 max-mobile:mb-8">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[19px] text-grey-600 max-mobile:text-[15px] max-w-[900px] leading-relaxed mx-auto font-normal opacity-90"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex justify-center">
            <Link to={ctaLink} target={target} className="max-mobile:w-full">
              <Button
                variant="default"
                size={"lg"}
                className="group bg-primary text-white py-3.5 px-10 max-mobile:py-3 max-mobile:px-5 h-auto rounded-xl cursor-pointer font-semibold text-lg max-mobile:text-[14px] transition-all duration-500 shadow-lg shadow-primary/10 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/20 hover:bg-primary max-mobile:w-full flex items-center justify-center gap-3 max-mobile:gap-2"
              >
                <span className="truncate">{ctaText}</span>
                {showIcon && (
                  <ArrowRight className="w-5 h-5 max-mobile:w-4 max-mobile:h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
