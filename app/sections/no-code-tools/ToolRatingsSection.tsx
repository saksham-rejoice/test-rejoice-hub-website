import { FaChartBar } from "react-icons/fa";
import { JSX } from "react";

interface RatingChart {
  comment: string;
  rating: number;
}

interface ToolRatingsSectionProps {
  toolOverallRatingDescription: string;
  ratingChart?: RatingChart[];
  renderStars: (rating: number) => JSX.Element;
}

const ToolRatingsSection = ({
  toolOverallRatingDescription,
  ratingChart,
  renderStars,
}: ToolRatingsSectionProps) => {
  if (!ratingChart?.length) return null;

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md animate-fadeIn">
      <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <FaChartBar className="text-orange-600 text-lg" />
        Ratings & Reviews
      </h2>

      <p className="text-gray-600 text-sm mb-5">
        {toolOverallRatingDescription}
      </p>

      <div className="space-y-4">
        {ratingChart.map((entry, i) => (
          <div
            key={i}
            className="border border-gray-100 p-4 rounded-xl bg-gray-50 hover:shadow transition duration-200 ease-in-out"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm text-gray-800 font-medium leading-snug">
                {entry.comment}
              </p>
              <div className="shrink-0">{renderStars(entry.rating)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolRatingsSection;
