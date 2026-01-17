import React from "react";

type InfoSectionProps = {
  tool: any;
};

const InfoSection: React.FC<InfoSectionProps> = ({ tool }) => (
  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
      <span className="w-2 h-8 bg-gradient-to-b from-blue-700 to-blue-400 rounded-full"></span>
      Info
    </h2>
    {tool.toolDescription ? (
      <p className="text-gray-700 text-base leading-relaxed">
        {tool.toolDescription}
      </p>
    ) : (
      <div className="text-center text-gray-500 py-8">
        <span className="text-3xl block mb-2">😕</span>
        <span>No info found for this tool.</span>
      </div>
    )}
  </div>
);

export default InfoSection;
