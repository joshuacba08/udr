import carsData from "../../assets/data/reduced_carsJSON.json";
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
   * Search cars by various criteria
   * @param criteria - Search criteria
   */
  static async searchCars(criteria: {
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    category?: string;
    transmission?: string;
  }): Promise<CarsResponse["cars"][string]> {
    await delay(1000);

    const data = carsData as CarsResponse;
    let allCars: CarsResponse["cars"][string] = [];

    // Flatten all cars from all brands
    Object.values(data.cars).forEach((brandCars) => {
      allCars = [...allCars, ...brandCars];
    });

    // Apply filters
    let filteredCars = allCars;

    if (criteria.brand) {
      filteredCars = data.cars[criteria.brand] || [];
    }

    if (criteria.category) {
      filteredCars = filteredCars.filter((car) =>
        car.features.category
          .toLowerCase()
          .includes(criteria.category!.toLowerCase())
      );
    }

    if (criteria.transmission) {
      filteredCars = filteredCars.filter(
        (car) =>
          car.transmission_type.toLowerCase() ===
          criteria.transmission!.toLowerCase()
      );
    }

    if (criteria.minPrice || criteria.maxPrice) {
      filteredCars = filteredCars.filter((car) => {
        // Get the minimum price from all rates
        const prices = Object.values(car.rates).map((rate) =>
          parseFloat(rate.pricing.USD.total_charge.total.total_amount)
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
