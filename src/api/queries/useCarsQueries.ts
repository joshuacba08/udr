import { useQuery } from "@tanstack/react-query";
import CarsApiService from "../clients/carsApi";

// Query keys for better cache management
export const carsQueryKeys = {
  all: ["cars"] as const,
  lists: () => [...carsQueryKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...carsQueryKeys.lists(), { filters }] as const,
  details: () => [...carsQueryKeys.all, "detail"] as const,
  detail: (id: string) => [...carsQueryKeys.details(), id] as const,
  brands: () => [...carsQueryKeys.all, "brands"] as const,
  brand: (brand: string) => [...carsQueryKeys.all, "brand", brand] as const,
  search: (criteria: Record<string, unknown>) =>
    [...carsQueryKeys.all, "search", criteria] as const,
};

/**
 * Hook to fetch all cars data
 */
export const useCarsQuery = () => {
  return useQuery({
    queryKey: carsQueryKeys.lists(),
    queryFn: () => CarsApiService.getCars(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};

/**
 * Hook to fetch cars by brand
 */
export const useCarsByBrandQuery = (brand: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: carsQueryKeys.brand(brand),
    queryFn: () => CarsApiService.getCarsByBrand(brand),
    enabled: enabled && !!brand,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

/**
 * Hook to fetch all available brands
 */
export const useBrandsQuery = () => {
  return useQuery({
    queryKey: carsQueryKeys.brands(),
    queryFn: () => CarsApiService.getBrands(),
    staleTime: 10 * 60 * 1000, // 10 minutes (brands don't change often)
    gcTime: 15 * 60 * 1000, // 15 minutes
  });
};

/**
 * Hook to search cars with criteria
 */
export const useSearchCarsQuery = (
  criteria: {
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    category?: string;
    transmission?: string;
  },
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: carsQueryKeys.search(criteria),
    queryFn: () => CarsApiService.searchCars(criteria),
    enabled: enabled && Object.keys(criteria).length > 0,
    staleTime: 3 * 60 * 1000, // 3 minutes
    gcTime: 8 * 60 * 1000, // 8 minutes
  });
};

/**
 * Hook to get cars data with additional utilities
 */
export const useCarsWithUtils = () => {
  const { data, isLoading, error, ...rest } = useCarsQuery();

  const getCheapestCarByBrand = (brand: string) => {
    if (!data?.cars[brand]) return null;

    return data.cars[brand].reduce((cheapest, car) => {
      const carMinPrice = Math.min(
        ...Object.values(car.rates).map((rate) =>
          parseFloat(rate.pricing.USD.total_charge.total.total_amount)
        )
      );

      if (!cheapest) return car;

      const cheapestMinPrice = Math.min(
        ...Object.values(cheapest.rates).map((rate) =>
          parseFloat(rate.pricing.USD.total_charge.total.total_amount)
        )
      );

      return carMinPrice < cheapestMinPrice ? car : cheapest;
    });
  };

  const getAllCarsFlattened = () => {
    if (!data?.cars) return [];

    return Object.values(data.cars).flat();
  };

  const getUniqueCategories = () => {
    if (!data?.cars) return [];

    const categories = new Set<string>();
    Object.values(data.cars).forEach((brandCars) => {
      brandCars.forEach((car) => {
        categories.add(car.features.category);
      });
    });

    return Array.from(categories);
  };

  return {
    data,
    isLoading,
    error,
    getCheapestCarByBrand,
    getAllCarsFlattened,
    getUniqueCategories,
    ...rest,
  };
};
