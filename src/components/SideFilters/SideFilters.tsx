import { Accordion, Card } from "@material-tailwind/react";
import React from "react";
import { useFilters } from "../../hooks/useFilters";
import FilterIcon from "../icons/FilterIcon";
import {
  BrandFilter,
  CategoryFilter,
  FilterHeader,
  PassengerFilter,
  PriceRangeFilter,
  SuitcaseFilter,
} from "./index";

const SideFilters: React.FC = () => {
  const filterHook = useFilters();

  if (filterHook.isLoading) {
    return (
      <Card className="w-80 p-6 bg-white shadow-lg">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-80 bg-white shadow-lg rounded-lg overflow-hidden border-none">
      <div className="p-6 space-y-6">
        <FilterHeader
          icon={<FilterIcon className="w-5 h-5" />}
          title="Filtrar resultados"
          hasActiveFilters={filterHook.hasActiveFilters || false}
          onClearAll={filterHook.clearAllFilters}
        />

        <Accordion
          type="multiple"
          defaultValue={[
            "brands",
            "categories",
            "suitcaseCapacities",
            "passengerCounts",
            "priceRange",
          ]}
        >
          <BrandFilter
            brands={filterHook.brands}
            selectedBrands={filterHook.selectedBrands}
            onToggleBrand={filterHook.toggleBrand}
          />

          <CategoryFilter
            categories={filterHook.categories}
            selectedCategories={filterHook.selectedCategories}
            onToggleCategory={filterHook.toggleCategory}
          />

          <SuitcaseFilter
            capacities={filterHook.suitcaseCapacities}
            selectedCapacities={filterHook.selectedSuitcaseCapacities}
            onToggleCapacity={filterHook.toggleSuitcaseCapacity}
          />

          <PassengerFilter
            counts={filterHook.passengerCounts}
            selectedCounts={filterHook.selectedPassengerCounts}
            onToggleCount={filterHook.togglePassengerCount}
          />

          <PriceRangeFilter
            priceRange={filterHook.selectedPriceRange}
            priceRangeData={filterHook.priceRangeData}
            currency={filterHook.currency}
            onUpdatePriceRange={filterHook.updatePriceRange}
            onUpdateCurrency={filterHook.updateCurrency}
          />
        </Accordion>
      </div>
    </Card>
  );
};

export default SideFilters;
