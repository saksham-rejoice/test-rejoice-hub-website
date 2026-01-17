import React from "react";

type Feature = {
  title: string;
  description: string;
};

type FeaturesSectionProps = {
  features: Feature[];
};

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => (
  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
      <span className="w-2 h-8 bg-navy-950 rounded-full"></span>
      Key Features
    </h2>
    {features.length === 0 ? (
      <div className="text-center text-gray-500 py-8">
        <span className="text-3xl block mb-2">😕</span>
        <span>No features found for this tool.</span>
      </div>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="group p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-navy-950 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">{i + 1}</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default FeaturesSection;
