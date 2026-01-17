import React from "react";
import ToolImagesSection from "../no-code-tools/ToolImagesSection";
import { CMS_URL } from "~/utils/config";

type AboutSectionProps = {
  tool: any;
};

const AboutSection: React.FC<AboutSectionProps> = ({ tool }) => {
  const screenshots: string[] = [];
  if (tool.info) {
    const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
    let match;
    while ((match = regex.exec(tool.info))) {
      screenshots.push(
        match[1].startsWith("http") ? match[1] : CMS_URL + match[1]
      );
    }
  }
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-600 rounded-full"></span>
        About This Tool
      </h2>
      {tool.info ? (
        <>
          {screenshots.length > 0 && (
            <div className="mb-8">
              <ToolImagesSection screenshots={screenshots} />
            </div>
          )}
          {/* You can add more about content here if needed */}
        </>
      ) : (
        <div className="text-center text-gray-500 py-8">
          <span className="text-3xl block mb-2">😕</span>
          <span>No about information found for this tool.</span>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
