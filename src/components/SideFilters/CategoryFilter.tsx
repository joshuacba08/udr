import { Accordion, Checkbox, Typography } from "@material-tailwind/react";
import React from "react";
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
  return (
    <Accordion.Item value="categories" className="border-none">
      <Accordion.Trigger className="flex items-center justify-between w-full text-left p-0 hover:no-underline">
        <div className="flex items-center gap-2 w-full justify-between bg-blue-200 py-2">
          <Typography
            variant="h6"
            color="inherit"
            className="font-gt-walsheim font-medium text-primary"
          >
            Categoría del auto
          </Typography>
          <ChevronIcon
            direction="down"
            className="h-4 w-4 text-primary transition-transform duration-200 group-data-[open=true]:rotate-180"
          />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="pt-3 pb-0">
        <div className="space-y-2">
          {/* Todas las categorías option */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="category-all"
              checked={selectedCategories.length === 0}
              onChange={() =>
                selectedCategories.length > 0 &&
                categories.forEach(onToggleCategory)
              }
            >
              <Checkbox.Indicator className="text-white" />
            </Checkbox>
            <Typography
              as="label"
              htmlFor="category-all"
              className="cursor-pointer text-sm text-gray-700 flex-1"
            >
              Todas las categorías (3)
            </Typography>
          </div>

          {/* Individual categories */}
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onChange={() => onToggleCategory(category)}
              >
                <Checkbox.Indicator className="text-white" />
              </Checkbox>
              <Typography
                as="label"
                htmlFor={`category-${category}`}
                className="cursor-pointer text-sm text-gray-700 flex-1"
              >
                {category} (3)
              </Typography>
            </div>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default CategoryFilter;
