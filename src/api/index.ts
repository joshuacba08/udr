// API Clients
export { default as CarsApiService } from "./clients/carsApi";

// React Query hooks
export {
  carsQueryKeys,
  useBrandsQuery,
  useCarsByBrandQuery,
  useCarsQuery,
  useCarsWithUtils,
  useCategoriesQuery,
  usePassengerCountsQuery,
  usePriceRangeQuery,
  useSearchCarsQuery,
  useSuitcaseCapacitiesQuery,
} from "./queries/useCarsQueries";

// Query Client
export { default as queryClient } from "./queryClient";

// Types (re-export for convenience)
export type {
  Car,
  Car_Features,
  Car_Picture_url,
  Car_Rate,
  Car_Rates,
  CarsResponse,
  Days_Calculation,
  Pricing,
  Tag,
} from "../interfaces/ApiAuto.interface";
