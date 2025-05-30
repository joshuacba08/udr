import { Accordion, Card } from "@material-tailwind/react";
import React from "react";
import { useCarFilters } from "../../hooks/useCarFilters";
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
  const filterHook = useCarFilters();

  if (filterHook.isLoading) {
    return (
      <Card className="w-76 p-6 bg-white shadow-lg border-none">
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
    <Card className="w-74 bg-white shadow-lg rounded-lg overflow-hidden border-none">
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
            "suitcases",
            "priceRange",
            "passengers",
          ]}
        >
          <BrandFilter
            brands={filterHook.brands}
            selectedBrands={filterHook.selectedBrands}
            onToggleBrand={filterHook.toggleBrand}
            brandCounts={filterHook.filterCounts.brandCounts}
          />

          <CategoryFilter
            categories={filterHook.categories}
            selectedCategories={filterHook.selectedCategories}
            onToggleCategory={filterHook.toggleCategory}
            categoryCounts={filterHook.filterCounts.categoryCounts}
            totalCars={filterHook.filterCounts.totalCars}
          />

          <SuitcaseFilter
            capacities={filterHook.suitcaseCapacities}
            selectedCapacities={filterHook.selectedSuitcaseCapacities}
            onToggleCapacity={filterHook.toggleSuitcaseCapacity}
            suitcaseCapacityCounts={
              filterHook.filterCounts.suitcaseCapacityCounts
            }
          />

          <PassengerFilter
            counts={filterHook.passengerCounts}
            selectedCounts={filterHook.selectedPassengerCounts}
            onToggleCount={filterHook.togglePassengerCount}
            passengerCountCounts={filterHook.filterCounts.passengerCountCounts}
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
