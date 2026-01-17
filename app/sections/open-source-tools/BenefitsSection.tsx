import React from "react";

type Benefit = {
  title: string;
  description: string;
};

type BenefitsSectionProps = {
  benefits: Benefit[];
};

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => (
  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
      <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></span>
      Benefits & Advantages
    </h2>
    {benefits.length === 0 ? (
      <div className="text-center text-gray-500 py-8">
        <span className="text-3xl block mb-2">😕</span>
        <span>No benefits found for this tool.</span>
      </div>
    ) : (
      <div className="space-y-4">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="group p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-900 mb-2 group-hover:text-orange-700 transition-colors">
                  {b.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default BenefitsSection;
