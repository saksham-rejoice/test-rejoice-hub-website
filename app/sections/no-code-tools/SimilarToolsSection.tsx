import React from "react";
import { Link } from "react-router-dom";

interface SimilarTool {
  toolName: string;
  shortDescription: string;
  slug: string;
  logo?: {
    data?: {
      attributes?: {
        url: string;
      };
    };
  };
}

interface SimilarToolsSectionProps {
  similarTools?: SimilarTool[];
}

const SimilarToolsSection: React.FC<SimilarToolsSectionProps> = ({
  similarTools,
}) => {
  if (!similarTools || similarTools.length === 0) return null;

  return (
    <section className="bg-white max-mobile:p-4 max-mobile:rounded-lg p-6 rounded-xl shadow mt-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Similar Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarTools.map((tool, idx) => (
          <Link
            to={`/no-code-tools/${tool.slug}`}
            key={idx}
            className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg hover:shadow transition border border-amber-100 hover:bg-amber-100"
          >
            <img
              src={
                tool.logo?.data?.attributes?.url
                  ? `https://cms.rejoicehub.com${tool.logo.data.attributes.url}`
                  : "/placeholder.png"
              }
              alt={tool.toolName}
              className="w-14 h-14 object-contain rounded bg-white border"
            />
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-1">
                {tool.toolName}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {tool.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SimilarToolsSection;
