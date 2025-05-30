import carsData from "../../assets/data/carsJSON.json";
// import carsData from "../../assets/data/reduced_carsJSON.json";
import type { CarsResponse } from "../../interfaces/ApiAuto.interface";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class CarsApiService {
  /**
   * Get all cars data
   * Simulates an API call by returning the JSON data with a delay
   */
  static async getCars(): Promise<CarsResponse> {
    // Simulate API delay
    await delay(800);

    // In a real scenario, this would be an actual API call
    // For now, we're treating the JSON as if it came from an API
    return carsData as CarsResponse;
  }

  /**
   * Get cars by brand
   * @param brand - The brand name to filter by
   */
  static async getCarsByBrand(
    brand: string
  ): Promise<CarsResponse["cars"][string]> {
    await delay(600);

    const data = carsData as CarsResponse;
    return data.cars[brand] || [];
  }

  /**
   * Get all available brands
   */
  static async getBrands(): Promise<string[]> {
    await delay(300);

    const data = carsData as CarsResponse;
    return Object.keys(data.cars);
  }

  /**
   * Get unique categories from all cars
   */
  static async getCategories(): Promise<string[]> {
    await delay(300);

    const data = carsData as CarsResponse;
    const categories = new Set<string>();

    Object.values(data.cars).forEach((brandCars) => {
      brandCars.forEach((car) => {
        categories.add(car.features.category);
      });
    });

    return Array.from(categories).sort();
  }

  /**
   * Get unique suitcase capacities from all cars
   */
  static async getSuitcaseCapacities(): Promise<number[]> {
    await delay(300);

    const data = carsData as CarsResponse;
    const capacities = new Set<number>();

    Object.values(data.cars).forEach((brandCars) => {
      brandCars.forEach((car) => {
        const total = car.features.large_suitcase + car.features.small_suitcase;
        capacities.add(total);
      });
    });

    return Array.from(capacities).sort((a, b) => a - b);
  }

  /**
   * Get unique passenger counts from all cars
   */
  static async getPassengerCounts(): Promise<number[]> {
    await delay(300);

    const data = carsData as CarsResponse;
    const passengerCounts = new Set<number>();

    Object.values(data.cars).forEach((brandCars) => {
      brandCars.forEach((car) => {
        const seats = parseInt(car.features.seats);
        if (!isNaN(seats)) {
          passengerCounts.add(seats);
        }
      });
    });

    return Array.from(passengerCounts).sort((a, b) => a - b);
  }

  /**
   * Get price range (min and max) from all cars
   */
  static async getPriceRange(): Promise<{
    min: number;
    max: number;
    minCOP: number;
    maxCOP: number;
  }> {
    await delay(300);

    const data = carsData as CarsResponse;
    let minUSD = Infinity;
    let maxUSD = -Infinity;
    let minCOP = Infinity;
    let maxCOP = -Infinity;

    Object.values(data.cars).forEach((brandCars) => {
      brandCars.forEach((car) => {
        Object.values(car.rates).forEach((rate) => {
          const priceUSD = parseFloat(
            rate.pricing.USD.total_charge.total.total_amount
          );
          const priceCOP = parseFloat(
            rate.pricing.COP.total_charge.total.total_amount
          );

          if (priceUSD < minUSD) minUSD = priceUSD;
          if (priceUSD > maxUSD) maxUSD = priceUSD;
          if (priceCOP < minCOP) minCOP = priceCOP;
          if (priceCOP > maxCOP) maxCOP = priceCOP;
        });
      });
    });

    return {
      min: minUSD === Infinity ? 0 : Math.floor(minUSD),
      max: maxUSD === -Infinity ? 1000 : Math.ceil(maxUSD),
      minCOP: minCOP === Infinity ? 0 : Math.floor(minCOP),
      maxCOP: maxCOP === -Infinity ? 5000000 : Math.ceil(maxCOP),
    };
  }

  /**
   * Search cars by various criteria
   * @param criteria - Search criteria
   */
  static async searchCars(criteria: {
    brands?: string[];
    categories?: string[];
    minPrice?: number;
    maxPrice?: number;
    suitcaseCapacity?: number[];
    passengerCount?: number[];
    transmission?: string;
    currency?: "USD" | "COP";
  }): Promise<CarsResponse["cars"][string]> {
    await delay(1000);

    const data = carsData as CarsResponse;
    let allCars: CarsResponse["cars"][string] = [];

    // Flatten all cars from all brands
    Object.entries(data.cars).forEach(([brandName, brandCars]) => {
      if (!criteria.brands || criteria.brands.includes(brandName)) {
        brandCars.forEach((car) => {
          allCars.push(car);
        });
      }
    });

    // If no brand filter, get all cars
    if (!criteria.brands || criteria.brands.length === 0) {
      Object.values(data.cars).forEach((brandCars) => {
        allCars = [...allCars, ...brandCars];
      });
    }

    // Apply filters
    let filteredCars = allCars;

    if (criteria.categories && criteria.categories.length > 0) {
      filteredCars = filteredCars.filter((car) =>
        criteria.categories!.includes(car.features.category)
      );
    }

    if (criteria.suitcaseCapacity && criteria.suitcaseCapacity.length > 0) {
      filteredCars = filteredCars.filter((car) => {
        const total = car.features.large_suitcase + car.features.small_suitcase;
        return criteria.suitcaseCapacity!.includes(total);
      });
    }

    if (criteria.passengerCount && criteria.passengerCount.length > 0) {
      filteredCars = filteredCars.filter((car) => {
        const seats = parseInt(car.features.seats);
        return !isNaN(seats) && criteria.passengerCount!.includes(seats);
      });
    }

    if (criteria.transmission) {
      filteredCars = filteredCars.filter(
        (car) =>
          car.transmission_type.toLowerCase() ===
          criteria.transmission!.toLowerCase()
      );
    }

    if (criteria.minPrice || criteria.maxPrice) {
      const currency = criteria.currency || "USD";
      filteredCars = filteredCars.filter((car) => {
        // Get the minimum price from all rates
        const prices = Object.values(car.rates).map((rate) =>
          parseFloat(rate.pricing[currency].total_charge.total.total_amount)
        );
        const minCarPrice = Math.min(...prices);

        if (criteria.minPrice && minCarPrice < criteria.minPrice) return false;
        if (criteria.maxPrice && minCarPrice > criteria.maxPrice) return false;

        return true;
      });
    }

    return filteredCars;
  }
}

export default CarsApiService;
