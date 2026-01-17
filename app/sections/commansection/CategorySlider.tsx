import { useState } from "react";

interface CategorySidebarProps {
  categories: string[];
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}

export default function CategorySidebar({
  categories,
  selectedCategory,
  handleCategoryChange,
}: CategorySidebarProps) {
  return (
    <div className="w-full max-w-xs p-4 border border-gray-200 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-orange-50 shadow-sm sticky top-24">
      <h2 className="text-xl text-navy-900 font-semibold mb-4 px-2">Categories</h2>

      <div className="w-full">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
        >
          <option value="All tools">All Tools</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
