import { useCallback, useMemo, useState } from "react";
import {
  useBrandsQuery,
  useCarsQuery,
  useCategoriesQuery,
  usePassengerCountsQuery,
  usePriceRangeQuery,
  useSearchCarsQuery,
  useSuitcaseCapacitiesQuery,
} from "../api";

export interface FilterState {
  brands: string[];
  categories: string[];
  suitcaseCapacities: number[];
  passengerCounts: number[];
  priceRange: [number, number];
  currency: "USD" | "COP";
}

export const useFilters = () => {
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

  // Add cars data query for counting
  const { data: carsData, isLoading: carsLoading } = useCarsQuery();

  // Filter states
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSuitcaseCapacities, setSelectedSuitcaseCapacities] = useState<
    number[]
  >([]);
  const [selectedPassengerCounts, setSelectedPassengerCounts] = useState<
    number[]
  >([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<
    [number, number]
  >([0, 10000000]);
  const [currency, setCurrency] = useState<"USD" | "COP">("COP");

  // Initialize price range when data is loaded
  useMemo(() => {
    if (
      priceRangeData &&
      selectedPriceRange[0] === 0 &&
      selectedPriceRange[1] === 10000000
    ) {
      const range =
        currency === "COP"
          ? ([priceRangeData.minCOP, priceRangeData.maxCOP] as [number, number])
          : ([priceRangeData.min, priceRangeData.max] as [number, number]);
      setSelectedPriceRange(range);
    }
  }, [priceRangeData, currency, selectedPriceRange]);

  // Loading state
  const isLoading =
    brandsLoading ||
    categoriesLoading ||
    suitcaseLoading ||
    passengerLoading ||
    priceRangeLoading ||
    carsLoading;

  // Helper function to get all cars as a flat array
  const getAllCars = useMemo(() => {
    if (!carsData?.cars) return [];
    return Object.values(carsData.cars).flat();
  }, [carsData]);

  // Filter count functions
  const getFilterCounts = useMemo(() => {
    if (!carsData?.cars) {
      return {
        brandCounts: {},
        categoryCounts: {},
        suitcaseCapacityCounts: {},
        passengerCountCounts: {},
        totalCars: 0,
      };
    }

    const allCars = getAllCars;
    const brandCounts: { [key: string]: number } = {};
    const categoryCounts: { [key: string]: number } = {};
    const suitcaseCapacityCounts: { [key: number]: number } = {};
    const passengerCountCounts: { [key: number]: number } = {};

    // Count by brand
    Object.entries(carsData.cars).forEach(([brand, cars]) => {
      brandCounts[brand] = cars.length;
    });

    // Count by other criteria
    allCars.forEach((car) => {
      // Count by category
      const category = car.features.category;
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;

      // Count by suitcase capacity (handle null values)
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
  }, [carsData, getAllCars]);

  // Filter handlers
  const toggleBrand = useCallback((brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  }, []);

  const toggleCategory = useCallback((category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  }, []);

  const toggleSuitcaseCapacity = useCallback((capacity: number) => {
    setSelectedSuitcaseCapacities((prev) =>
      prev.includes(capacity)
        ? prev.filter((c) => c !== capacity)
        : [...prev, capacity]
    );
  }, []);

  const togglePassengerCount = useCallback((count: number) => {
    setSelectedPassengerCounts((prev) =>
      prev.includes(count) ? prev.filter((c) => c !== count) : [...prev, count]
    );
  }, []);

  const updatePriceRange = useCallback((range: [number, number]) => {
    setSelectedPriceRange(range);
  }, []);

  const updateCurrency = useCallback(
    (newCurrency: "USD" | "COP") => {
      setCurrency(newCurrency);
      // Reset price range when currency changes
      if (priceRangeData) {
        const range =
          newCurrency === "COP"
            ? ([priceRangeData.minCOP, priceRangeData.maxCOP] as [
                number,
                number
              ])
            : ([priceRangeData.min, priceRangeData.max] as [number, number]);
        setSelectedPriceRange(range);
      }
    },
    [priceRangeData]
  );

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setSelectedSuitcaseCapacities([]);
    setSelectedPassengerCounts([]);
    if (priceRangeData) {
      const range =
        currency === "COP"
          ? ([priceRangeData.minCOP, priceRangeData.maxCOP] as [number, number])
          : ([priceRangeData.min, priceRangeData.max] as [number, number]);
      setSelectedPriceRange(range);
    }
  }, [priceRangeData, currency]);

  // Build search criteria
  const searchCriteria = useMemo(() => {
    const criteria: {
      currency: "USD" | "COP";
      brands?: string[];
      categories?: string[];
      suitcaseCapacity?: number[];
      passengerCount?: number[];
      minPrice?: number;
      maxPrice?: number;
    } = {
      currency,
    };

    if (selectedBrands.length > 0) criteria.brands = selectedBrands;
    if (selectedCategories.length > 0) criteria.categories = selectedCategories;
    if (selectedSuitcaseCapacities.length > 0)
      criteria.suitcaseCapacity = selectedSuitcaseCapacities;
    if (selectedPassengerCounts.length > 0)
      criteria.passengerCount = selectedPassengerCounts;

    // Only add price range if it's different from the default range
    if (priceRangeData) {
      const defaultMin =
        currency === "COP" ? priceRangeData.minCOP : priceRangeData.min;
      const defaultMax =
        currency === "COP" ? priceRangeData.maxCOP : priceRangeData.max;

      if (selectedPriceRange[0] !== defaultMin)
        criteria.minPrice = selectedPriceRange[0];
      if (selectedPriceRange[1] !== defaultMax)
        criteria.maxPrice = selectedPriceRange[1];
    }

    return criteria;
  }, [
    selectedBrands,
    selectedCategories,
    selectedSuitcaseCapacities,
    selectedPassengerCounts,
    selectedPriceRange,
    currency,
    priceRangeData,
  ]);

  // Check if any filters are active
  const hasActiveFilters = useMemo(() => {
    return (
      selectedBrands.length > 0 ||
      selectedCategories.length > 0 ||
      selectedSuitcaseCapacities.length > 0 ||
      selectedPassengerCounts.length > 0 ||
      (priceRangeData &&
        (selectedPriceRange[0] !==
          (currency === "COP" ? priceRangeData.minCOP : priceRangeData.min) ||
          selectedPriceRange[1] !==
            (currency === "COP" ? priceRangeData.maxCOP : priceRangeData.max)))
    );
  }, [
    selectedBrands,
    selectedCategories,
    selectedSuitcaseCapacities,
    selectedPassengerCounts,
    selectedPriceRange,
    currency,
    priceRangeData,
  ]);

  // Search query (only enabled when filters are active)
  const searchQuery = useSearchCarsQuery(searchCriteria, hasActiveFilters);

  return {
    // Data
    brands,
    categories,
    suitcaseCapacities,
    passengerCounts,
    priceRangeData,

    // Filter counts
    filterCounts: getFilterCounts,

    // Current state
    selectedBrands,
    selectedCategories,
    selectedSuitcaseCapacities,
    selectedPassengerCounts,
    selectedPriceRange,
    currency,

    // Loading states
    isLoading,

    // Handlers
    toggleBrand,
    toggleCategory,
    toggleSuitcaseCapacity,
    togglePassengerCount,
    updatePriceRange,
    updateCurrency,
    clearAllFilters,

    // Search results
    searchResults: searchQuery.data || [],
    isSearching: searchQuery.isLoading,
    searchError: searchQuery.error,
    hasActiveFilters,
  };
};
