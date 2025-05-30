import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import type { Car } from "../interfaces/ApiAuto.interface";

export type SortOption = "featured" | "price-high-to-low" | "price-low-to-high";

export interface FilterState {
  companies: string[];
  categories: string[];
  luggageCapacity: number[];
  passengerCount: number[];
  priceRange: [number, number] | null;
  currency: "USD" | "COP";
}

export interface CarStore {
  allCars: Car[];
  filteredCars: Car[];
  isLoading: boolean;
  error: string | null;

  filters: FilterState;
  activeFiltersCount: number;

  sortOption: SortOption;
  showFeaturedFirst: boolean;

  setAllCars: (cars: Car[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;

  updateFilters: (newFilters: Partial<FilterState>) => void;
  clearAllFilters: () => void;
  applyFilters: () => void;

  setSortOption: (option: SortOption) => void;
  toggleFeatured: () => void;
  applySorting: () => void;

  getTotalCarsCount: () => number;
  getFilteredCarsCount: () => number;
}

const initialFilters: FilterState = {
  companies: [],
  categories: [],
  luggageCapacity: [],
  passengerCount: [],
  priceRange: null,
  currency: "COP",
};

export const useCarStore = create<CarStore>()(
  devtools(
    immer((set, get) => ({
      allCars: [],
      filteredCars: [],
      isLoading: false,
      error: null,
      filters: initialFilters,
      activeFiltersCount: 0,
      sortOption: "featured",
      showFeaturedFirst: true,

      setAllCars: (cars) =>
        set((state) => {
          state.allCars = cars;
          state.filteredCars = cars;
        }),

      setLoading: (loading) =>
        set((state) => {
          state.isLoading = loading;
        }),

      setError: (error) =>
        set((state) => {
          state.error = error;
        }),

      updateFilters: (newFilters) =>
        set((state) => {
          state.filters = { ...state.filters, ...newFilters };

          let count = 0;

          if (state.filters.companies.length > 0) count++;
          if (state.filters.categories.length > 0) count++;
          if (state.filters.luggageCapacity.length > 0) count++;
          if (state.filters.passengerCount.length > 0) count++;

          if (
            state.filters.priceRange &&
            (state.filters.priceRange[0] > 0 ||
              state.filters.priceRange[1] < Number.MAX_VALUE)
          ) {
            count++;
          }

          state.activeFiltersCount = count;
        }),

      clearAllFilters: () =>
        set((state) => {
          state.filters = initialFilters;
          state.activeFiltersCount = 0;
          state.filteredCars = state.allCars;
        }),

      applyFilters: () =>
        set((state) => {
          let filtered = [...state.allCars];

          if (state.activeFiltersCount > 0) {
            if (state.filters.companies.length > 0) {
              const brandNameToId: { [key: string]: number } = {};

              const brandGroups: { [key: number]: Car[] } = {};
              state.allCars.forEach((car) => {
                if (!brandGroups[car.brand]) {
                  brandGroups[car.brand] = [];
                }
                brandGroups[car.brand].push(car);
              });

              const commonBrandMapping: { [key: string]: number } = {
                Avis: 1,
                Budget: 2,
                Payless: 3,
                Hertz: 4,
                Enterprise: 5,
                Alamo: 6,
                National: 7,
                Thrifty: 8,
                Dollar: 9,
              };

              Object.entries(commonBrandMapping).forEach(([name, id]) => {
                brandNameToId[name] = id;
              });

              filtered = filtered.filter((car) =>
                state.filters.companies.some((companyName) => {
                  const expectedBrandId = brandNameToId[companyName];
                  return expectedBrandId && car.brand === expectedBrandId;
                })
              );
            }

            if (state.filters.categories.length > 0) {
              filtered = filtered.filter((car) =>
                state.filters.categories.includes(car.features.category)
              );
            }

            if (state.filters.luggageCapacity.length > 0) {
              filtered = filtered.filter((car) => {
                const largeSuitcase = car.features.large_suitcase || 0;
                const smallSuitcase = car.features.small_suitcase || 0;
                const totalCapacity = largeSuitcase + smallSuitcase;
                return state.filters.luggageCapacity.includes(totalCapacity);
              });
            }

            if (state.filters.passengerCount.length > 0) {
              filtered = filtered.filter((car) => {
                const seats = parseInt(car.features.seats);
                return (
                  !isNaN(seats) && state.filters.passengerCount.includes(seats)
                );
              });
            }

            if (state.filters.priceRange) {
              filtered = filtered.filter((car) => {
                const rates = Object.values(car.rates);
                if (rates.length === 0) return false;

                const pricing =
                  state.filters.currency === "COP"
                    ? rates[0].pricing.COP
                    : rates[0].pricing.USD;

                if (!pricing) return false;

                const price = parseFloat(
                  pricing.total_charge.total.total_amount
                );
                return (
                  !isNaN(price) &&
                  price >= state.filters.priceRange![0] &&
                  price <= state.filters.priceRange![1]
                );
              });
            }
          }

          state.filteredCars = filtered;
        }),

      setSortOption: (option) =>
        set((state) => {
          state.sortOption = option;
          if (option !== "featured") {
            state.showFeaturedFirst = false;
          }
        }),

      toggleFeatured: () =>
        set((state) => {
          state.showFeaturedFirst = !state.showFeaturedFirst;
          if (state.showFeaturedFirst) {
            state.sortOption = "featured";
          }
        }),

      applySorting: () =>
        set((state) => {
          const sorted = [...state.filteredCars];

          if (state.showFeaturedFirst) {
            sorted.sort((a, b) => {
              const aHasTag = a.tags && a.tags.length > 0;
              const bHasTag = b.tags && b.tags.length > 0;
              if (aHasTag && !bHasTag) return -1;
              if (!aHasTag && bHasTag) return 1;
              return 0;
            });
          }

          if (state.sortOption !== "featured") {
            sorted.sort((a, b) => {
              const aRates = Object.values(a.rates);
              const bRates = Object.values(b.rates);

              if (aRates.length === 0 || bRates.length === 0) return 0;

              const aPrice = parseFloat(
                aRates[0].pricing.COP.total_charge.total.total_amount
              );
              const bPrice = parseFloat(
                bRates[0].pricing.COP.total_charge.total.total_amount
              );

              return state.sortOption === "price-high-to-low"
                ? bPrice - aPrice
                : aPrice - bPrice;
            });
          }

          state.filteredCars = sorted;
        }),

      getTotalCarsCount: () => {
        const state = get();
        return state.allCars.length;
      },

      getFilteredCarsCount: () => {
        const state = get();
        return state.filteredCars.length;
      },
    })),
    {
      name: "car-store",
    }
  )
);
