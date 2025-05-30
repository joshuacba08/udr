import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { useCarStore } from "../../store/carStore";
import CarCard from "./CarCard";

export const CarGrid: React.FC = () => {
  const { filteredCars, isLoading, error } = useCarStore();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-6">
        {[...Array(3)].map((_, index) => (
          <Card key={index} className="w-full animate-pulse">
            <CardBody className="p-0">
              <div className="h-64 bg-gray-200 rounded-lg"></div>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Typography variant="h5" className="mb-2 text-red-600">
            Error al cargar los vehículos
          </Typography>
          <Typography variant="paragraph" className="text-gray-600">
            {error}
          </Typography>
        </div>
      </div>
    );
  }

  if (filteredCars.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <Typography variant="h5" className="mb-2 text-gray-600">
            No se encontraron vehículos
          </Typography>
          <Typography variant="paragraph" className="text-gray-500">
            Intenta ajustar los filtros para ver más opciones
          </Typography>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {filteredCars.map((car, index) => (
          <CarCard
            key={`${car.code}-${index}`}
            car={car}
            onSelect={(selectedCar) => {
              console.log("Car selected:", selectedCar);
            }}
          />
        ))}
      </div>
    </div>
  );
};
