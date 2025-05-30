import { Button, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import type { SortOption } from "../../store/carStore";
import { useCarStore } from "../../store/carStore";
import { ChevronIcon } from "../icons";

export const CarSummary: React.FC = () => {
  const {
    getFilteredCarsCount,
    getTotalCarsCount,
    activeFiltersCount,
    showFeaturedFirst,
    sortOption,
    toggleFeatured,
    setSortOption,
    applySorting,
  } = useCarStore();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCount = getFilteredCarsCount();
  const totalCount = getTotalCarsCount();

  // Show total number if no filters are active, otherwise show filtered count
  const displayCount = activeFiltersCount === 0 ? totalCount : filteredCount;

  // Apply sorting when options change
  useEffect(() => {
    applySorting();
  }, [sortOption, showFeaturedFirst, applySorting]);

  const handleSortChange = (newSortOption: SortOption) => {
    setSortOption(newSortOption);
    setIsDropdownOpen(false);
  };

  const getSortButtonText = () => {
    switch (sortOption) {
      case "price-high-to-low":
        return "Mayor precio";
      case "price-low-to-high":
        return "Menor precio";
      default:
        return "Mayor precio";
    }
  };

  const getSortMenuItems = () => [
    { value: "price-high-to-low" as SortOption, label: "Mayor precio" },
    { value: "price-low-to-high" as SortOption, label: "Menor precio" },
  ];

  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Vehicle counter and featured checkbox */}
      <div className="flex items-center space-x-6">
        <Typography variant="paragraph" className="font-medium text-gray-700">
          Encontramos{" "}
          <span className="font-bold text-blue-600">{displayCount}</span>{" "}
          vehículos para tu búsqueda.
        </Typography>

        {/* Checkbox for showing featured first */}
        <div className="flex items-center space-x-2">
          <input
            id="featured-checkbox"
            type="checkbox"
            checked={showFeaturedFirst}
            onChange={toggleFeatured}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="featured-checkbox"
            className="text-sm font-medium text-gray-600 cursor-pointer"
          >
            Mostrar destacados primero
          </label>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center space-x-3">
        {/* Send quote button */}
        <Button
          size="md"
          className="px-6 py-2 font-medium bg-primary text-white hover:bg-blue-700 rounded-lg transition-colors duration-200"
        >
          Enviar cotización
        </Button>

        {/* Price sorting dropdown */}
        <div className="relative">
          <Button
            variant="outline"
            size="md"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
          >
            <Typography variant="small" className="font-medium">
              {getSortButtonText()}
            </Typography>
            <ChevronIcon direction="down" />
          </Button>

          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="py-1">
                {getSortMenuItems().map((item) => (
                  <button
                    key={item.value}
                    onClick={() => handleSortChange(item.value)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-150 ${
                      sortOption === item.value
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
