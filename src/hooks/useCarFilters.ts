import { useCallback, useEffect, useMemo } from "react";
import {
  useBrandsQuery,
  useCarsQuery,
  useCategoriesQuery,
  usePassengerCountsQuery,
  usePriceRangeQuery,
  useSuitcaseCapacitiesQuery,
} from "../api";
import { useCarStore } from "../store/carStore";

export const useCarFilters = () => {
  // Store state and actions
  const {
    allCars,
    filteredCars,
    filters,
    activeFiltersCount,
    updateFilters,
    clearAllFilters,
    applyFilters,
    setAllCars,
    setLoading,
    setError,
  } = useCarStore();

  // Filter data queries
  const { data: brands = [], isLoading: brandsLoading } = useBrandsQuery();
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategoriesQuery();
  const { data: suitcaseCapacities = [], isLoading: suitcaseLoading } =
    useSuitcaseCapacitiesQuery();
  const { data: passengerCounts = [], isLoading: passengerLoading } =
    usePassengerCountsQuery();
  const { data: priceRangeData, isLoading: priceRangeLoading } =
    usePriceRangeQuery();

  // Cars data query
  const {
    data: carsData,
    isLoading: carsLoading,
    error: carsError,
  } = useCarsQuery();

  // Initialize store with cars data
  useEffect(() => {
    if (carsData?.cars) {
      // Flatten all cars from all brands into a single array
      const allCarsArray = Object.values(carsData.cars).flat();
      setAllCars(allCarsArray);
    }
  }, [carsData, setAllCars]);

  // Handle loading state
  useEffect(() => {
    setLoading(carsLoading);
  }, [carsLoading, setLoading]);

  // Handle error state
  useEffect(() => {
    setError(carsError ? String(carsError) : null);
  }, [carsError, setError]);

  // Loading state
  const isLoading =
    brandsLoading ||
    categoriesLoading ||
    suitcaseLoading ||
    passengerLoading ||
    priceRangeLoading ||
    carsLoading;

  // Initialize price range when data is loaded
  useEffect(() => {
    if (priceRangeData && !filters.priceRange) {
      const range =
        filters.currency === "COP"
          ? ([priceRangeData.minCOP, priceRangeData.maxCOP] as [number, number])
          : ([priceRangeData.min, priceRangeData.max] as [number, number]);
      updateFilters({ priceRange: range });
    }
  }, [priceRangeData, filters.priceRange, filters.currency, updateFilters]);

  // Filter count functions
  const filterCounts = useMemo(() => {
    if (allCars.length === 0 || !carsData?.cars) {
      return {
        brandCounts: {},
        categoryCounts: {},
        suitcaseCapacityCounts: {},
        passengerCountCounts: {},
        totalCars: 0,
      };
    }

    const brandCounts: { [key: string]: number } = {};
    const categoryCounts: { [key: string]: number } = {};
    const suitcaseCapacityCounts: { [key: number]: number } = {};
    const passengerCountCounts: { [key: number]: number } = {};

    // Create a mapping from brand ID to brand name
    const brandIdToName: { [key: number]: string } = {};
    Object.entries(carsData.cars).forEach(([brandName, cars]) => {
      if (cars.length > 0) {
        const brandId = cars[0].brand;
        brandIdToName[brandId] = brandName;
      }
    });

    // Count all cars by different criteria
    allCars.forEach((car) => {
      // Count by brand name (not brand ID)
      const brandName = brandIdToName[car.brand];

      if (brandName) {
        brandCounts[brandName] = (brandCounts[brandName] || 0) + 1;
      }

      // Count by category
      const category = car.features.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;

      // Count by suitcase capacity
      const largeSuitcase = car.features.large_suitcase || 0;
      const smallSuitcase = car.features.small_suitcase || 0;
      const suitcaseCapacity = largeSuitcase + smallSuitcase;
      suitcaseCapacityCounts[suitcaseCapacity] =
        (suitcaseCapacityCounts[suitcaseCapacity] || 0) + 1;

      // Count by passenger count
      const passengerCount = parseInt(car.features.seats);
      if (!isNaN(passengerCount)) {
        passengerCountCounts[passengerCount] =
          (passengerCountCounts[passengerCount] || 0) + 1;
      }
    });

    return {
      brandCounts,
      categoryCounts,
      suitcaseCapacityCounts,
      passengerCountCounts,
      totalCars: allCars.length,
    };
  }, [allCars, carsData]);

  // Filter handlers
  const toggleBrand = useCallback(
    (brand: string) => {
      const newBrands = filters.companies.includes(brand)
        ? filters.companies.filter((b) => b !== brand)
        : [...filters.companies, brand];

      updateFilters({ companies: newBrands });
      applyFilters();
    },
    [filters.companies, updateFilters, applyFilters]
  );

  const toggleCategory = useCallback(
    (category: string) => {
      const newCategories = filters.categories.includes(category)
        ? filters.categories.filter((c) => c !== category)
        : [...filters.categories, category];

      updateFilters({ categories: newCategories });
      applyFilters();
    },
    [filters.categories, updateFilters, applyFilters]
  );

  const toggleSuitcaseCapacity = useCallback(
    (capacity: number) => {
      const newCapacities = filters.luggageCapacity.includes(capacity)
        ? filters.luggageCapacity.filter((c) => c !== capacity)
        : [...filters.luggageCapacity, capacity];

      updateFilters({ luggageCapacity: newCapacities });
      applyFilters();
    },
    [filters.luggageCapacity, updateFilters, applyFilters]
  );

  const togglePassengerCount = useCallback(
    (count: number) => {
      const newCounts = filters.passengerCount.includes(count)
        ? filters.passengerCount.filter((c) => c !== count)
        : [...filters.passengerCount, count];

      updateFilters({ passengerCount: newCounts });
      applyFilters();
    },
    [filters.passengerCount, updateFilters, applyFilters]
  );

  const updatePriceRange = useCallback(
    (range: [number, number]) => {
      updateFilters({ priceRange: range });
      applyFilters();
    },
    [updateFilters, applyFilters]
  );

  const updateCurrency = useCallback(
    (newCurrency: "USD" | "COP") => {
      updateFilters({ currency: newCurrency });

      // Reset price range when currency changes
      if (priceRangeData) {
        const range =
          newCurrency === "COP"
            ? ([priceRangeData.minCOP, priceRangeData.maxCOP] as [
                number,
                number
              ])
            : ([priceRangeData.min, priceRangeData.max] as [number, number]);
        updateFilters({ priceRange: range });
      }

      applyFilters();
    },
    [updateFilters, applyFilters, priceRangeData]
  );

  const handleClearAllFilters = useCallback(() => {
    clearAllFilters();
  }, [clearAllFilters]);

  // Check if any filters are active
  const hasActiveFilters = activeFiltersCount > 0;

  return {
    // Data
    brands,
    categories,
    suitcaseCapacities,
    passengerCounts,
    priceRangeData,

    // Filter counts
    filterCounts,

    // Current state from store
    selectedBrands: filters.companies,
    selectedCategories: filters.categories,
    selectedSuitcaseCapacities: filters.luggageCapacity,
    selectedPassengerCounts: filters.passengerCount,
    selectedPriceRange: filters.priceRange || [0, 0],
    currency: filters.currency,

    // Filtered results
    filteredCars,
    totalCars: allCars.length,

    // Loading states
    isLoading,

    // Handlers
    toggleBrand,
    toggleCategory,
    toggleSuitcaseCapacity,
    togglePassengerCount,
    updatePriceRange,
    updateCurrency,
    clearAllFilters: handleClearAllFilters,

    // State
    hasActiveFilters,
    activeFiltersCount,
  };
};
