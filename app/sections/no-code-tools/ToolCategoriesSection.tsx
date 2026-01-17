import { FaTag } from "react-icons/fa";

interface Category {
  id: string;
  name?: string;
}

interface ToolCategoriesSectionProps {
  categories: Category[];
}

const ToolCategoriesSection = ({ categories }: ToolCategoriesSectionProps) => {
  if (!categories || categories.length === 0) {
    return (
      <section className="bg-white p-6 rounded-xl shadow text-center">
        <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2 justify-center">
          <FaTag className="text-orange-600" /> Categories
        </h2>
        <div className="text-gray-500 py-8">
          <span className="text-3xl block mb-2">😕</span>
          <span>No categories found for this tool.</span>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <FaTag className="text-orange-600" /> Categories
      </h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <span
            key={cat.id}
            className="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800"
          >
            {cat.name || ""}
          </span>
        ))}
      </div>
    </section>
  );
};

export default ToolCategoriesSection;
