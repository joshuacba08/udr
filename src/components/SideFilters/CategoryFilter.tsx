import { Checkbox, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  onToggleCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  onToggleCategory,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="border-b border-gray-100 pb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <Typography
          variant="h6"
          color="inherit"
          className="font-gt-walsheim font-medium text-primary"
        >
          Categoría del auto
        </Typography>
        <ChevronIcon
          direction={isExpanded ? "up" : "down"}
          className="w-4 h-4 text-primary"
        />
      </button>

      {isExpanded && (
        <div className="mt-3 space-y-2">
          {/* Todas las categorías option */}
          <div className="flex items-center">
            <Checkbox
              id="category-all"
              checked={selectedCategories.length === 0}
              onChange={() =>
                selectedCategories.length > 0 &&
                categories.forEach(onToggleCategory)
              }
              color="primary"
              className="text-white"
            >
              <Checkbox.Indicator />
            </Checkbox>
            <label
              htmlFor="category-all"
              className="ml-3 text-sm text-gray-700 cursor-pointer select-none flex-1"
            >
              Todas las categorías (3)
            </label>
          </div>

          {/* Individual categories */}
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onChange={() => onToggleCategory(category)}
                color="primary"
                className="rounded-md p-0"
              />
              <label
                htmlFor={`category-${category}`}
                className="ml-3 text-sm text-gray-700 cursor-pointer select-none flex-1"
              >
                {category} (3)
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
