import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "~/lib/utils";

interface ToolHeaderSectionProps {
  logoUrl?: string;
  toolName: string;
  shortDescription: string;
  toolOverallRating: number;
  toolUrl: string;
}

const renderStars = (rating: number, size = "w-5 h-5") => {
  // Ensure rating is a number and between 0-5
  const normalizedRating = Math.min(Math.max(Number(rating) || 0, 0), 5);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={cn(
            size,
            star <= normalizedRating ? "text-yellow-400" : "text-gray-300"
          )}
        />
      ))}
      <span className="ml-2 text-gray-600">
        ({normalizedRating.toFixed(1)})
      </span>
    </div>
  );
};

const ToolHeaderSection = ({
  logoUrl,
  toolName,
  shortDescription,
  toolOverallRating,
  toolUrl,
}: ToolHeaderSectionProps) => (
  <header className="bg-white p-6 rounded-2xl shadow-md mb-8 max-mobile:mb-5 max-mobile:p-5 max-mobile:rounded-lg">
    <div className="flex gap-6">
      <img
        src={logoUrl}
        alt={`${toolName} logo`}
        className="w-24 h-24 max-mobile:w-20 max-mobile:h-20 object-contain rounded-xl bg-gray-50"
      />
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-orange-600 mb-2">{toolName}</h1>
        <p className="text-gray-700 mb-4">{shortDescription}</p>
        <div className="flex flex-wrap items-center gap-4">
          {renderStars(toolOverallRating)}
          {toolUrl && (
            <a
              href={toolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              Visit Website <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  </header>
);

export default ToolHeaderSection;
