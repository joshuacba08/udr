import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import type { Car } from "../../interfaces/ApiAuto.interface";
import { useCarStore } from "../../store/carStore";
import {
  AirConditioningIcon,
  ArrowIcon,
  AvisLogo,
  CheckLogo,
  DoorsIcon,
  InfoIcon,
  LuggageIcon,
  PassengersIcon,
  StarOutlinedIcon,
  StarSolidIcon,
  TransmissionIcon,
} from "../icons";

import { Chip } from "@material-tailwind/react";
import clsx from "clsx";

interface CarCardProps {
  car: Car;
  onSelect?: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onSelect }) => {
  const { filters } = useCarStore();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Get the highlighted rate (Inclusive Light)
  const highlightedRate = useMemo(() => {
    const rates = Object.entries(car.rates);
    const inclusiveRate = rates.find(
      ([, rate]) =>
        rate.rate_data.name.toLowerCase().includes("inclusive") ||
        rate.rate_data.name.toLowerCase().includes("light")
    );
    return inclusiveRate ? inclusiveRate[1] : Object.values(car.rates)[0];
  }, [car.rates]);

  // Handle image load
  const handleImageLoad = useCallback(() => {
    setIsImageLoaded(true);
  }, []);

  // Handle card selection
  const handleSelect = useCallback(() => {
    onSelect?.(car);
  }, [car, onSelect]);

  // Mouse enter/leave handlers
  const handleMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  // Render star rating
  const renderStarRating = useMemo(() => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <div key={i} className="w-3 h-3">
          {i <= car.stars ? (
            <StarSolidIcon className="w-full h-full text-yellow-400" />
          ) : (
            <StarOutlinedIcon className="w-full h-full text-gray-300" />
          )}
        </div>
      );
    }
    return stars;
  }, [car.stars]);

  const pricing =
    filters.currency === "COP"
      ? highlightedRate?.pricing.COP
      : highlightedRate?.pricing.USD;

  const price = pricing
    ? parseFloat(pricing.total_charge.total.total_amount)
    : 0;

  const usdPrice = highlightedRate?.pricing.USD
    ? parseFloat(highlightedRate.pricing.USD.total_charge.total.total_amount)
    : 0;

  return (
    <Card
      ref={cardRef}
      className={clsx(
        "shadow-md hover:shadow-lg transition-all duration-300 flex max-w-[968px] w-full h-[268px]",
        isHovering ? "shadow-lg" : ""
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Blue vertical bar */}
      <div className="w-1 bg-blue-600 flex-shrink-0"></div>
      <Card.Header className="m-0 h-full w-3/12 shrink-0 rounded-r-none relative bg-white ">
        <img
          src={car.picture_url.normal}
          alt="card-image"
          className="h-full w-full object-contain"
        />
        <div className="absolute top-4 left-4">
          <div className="w-12 h-6 mb-3">
            <AvisLogo className="w-full h-full" />
          </div>

          {/* Star Rating */}
          <div className="flex gap-0.5 mb-3">{renderStarRating}</div>
        </div>
        {/* Destacado Chip */}
        <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full absolute bottom-4 left-4">
          <CheckLogo className="w-3 h-3" />
          <span>Destacado</span>
        </div>
      </Card.Header>
      <CardBody className="p-0 border-r-3 bg-white border-gray-300 border-dashed w-5/12 h-full">
        <div className="flex">
          {/* Main content */}
          <div className="flex flex-1">
            {/* Center Section - Car Details */}
            <div className="flex-1 p-6">
              {/* Car Category */}
              <div className="mb-4">
                <Typography
                  variant="small"
                  className="text-gray-500 uppercase font-medium tracking-wide mb-1"
                >
                  GRUPO B - CCAR
                </Typography>
                <Typography
                  variant="h4"
                  className="font-bold text-blue-600 mb-1"
                >
                  Compacto
                </Typography>
                <Typography variant="paragraph" className="text-gray-700">
                  {car.name} o similar
                </Typography>
              </div>

              {/* Car Features Icons */}
              <div className="flex items-center gap-2 my-8">
                {/* Passengers */}
                <Chip
                  isPill={false}
                  className="bg-gray-200 text-blue-900 border-none flex gap-2 items-center justify-center py-1 px-1"
                >
                  <Chip.Icon>
                    <PassengersIcon className="w-4 h-4" />
                  </Chip.Icon>
                  <Chip.Label className={"p-0 m-0"}>
                    {car.features.seats}
                  </Chip.Label>
                </Chip>

                {/* Doors */}
                <Chip
                  isPill={false}
                  className="bg-gray-200 text-blue-900 border-none flex gap-2 items-center justify-center py-1 px-2"
                >
                  <Chip.Icon>
                    <DoorsIcon className="w-4 h-4" />
                  </Chip.Icon>
                  <Chip.Label className={"p-0 m-0"}>
                    {car.features.doors}
                  </Chip.Label>
                </Chip>

                {/* Transmission */}
                <Chip
                  isPill={false}
                  className="bg-gray-200 text-blue-900 border-none flex gap-2 items-center justify-center py-1 px-2"
                >
                  <Chip.Icon>
                    <TransmissionIcon className="w-4 h-4" />
                  </Chip.Icon>
                  <Chip.Label className={"p-0 m-0"}>A</Chip.Label>
                </Chip>

                {/* Luggage */}
                <Chip
                  isPill={false}
                  className="bg-gray-200 text-blue-900 border-none flex gap-2 items-center justify-center py-1 px-2"
                >
                  <Chip.Icon>
                    <LuggageIcon className="w-4 h-4" />
                  </Chip.Icon>
                  <Chip.Label className={"p-0 m-0"}>
                    {(car.features.large_suitcase || 0) +
                      (car.features.small_suitcase || 0)}
                  </Chip.Label>
                </Chip>

                {/* Count */}
                <Chip
                  isPill={false}
                  className="bg-gray-200 text-blue-900 border-none flex gap-2 items-center justify-center py-1 px-2"
                >
                  <Chip.Icon>
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Typography variant="small" className="font-bold">
                        ○
                      </Typography>
                    </div>
                  </Chip.Icon>
                  <Chip.Label className={"p-0 m-0"}>1</Chip.Label>
                </Chip>

                {/* Air Conditioning */}
                <Chip
                  isPill={false}
                  className="bg-gray-200 text-blue-900 border-none flex gap-2 items-center justify-center py-1 px-2"
                >
                  <Chip.Icon>
                    <AirConditioningIcon className="w-4 h-4" />
                  </Chip.Icon>
                  <Chip.Label className={"p-0 m-0"}>Sí</Chip.Label>
                </Chip>
              </div>

              <hr className="border-gray-300 border my-5" />

              {/* Added to Quote Status */}
              <div className="flex items-center gap-2">
                <CheckLogo className="w-4 h-4 text-green-600" />
                <Typography
                  variant="small"
                  className="text-green-600 font-regular text-sm"
                >
                  Vehículo agregado a su cotización (1 de 5)
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="p-0 border-none w-6/12 bg-white flex justify-center items-center">
        <Card className="h-[90%] w-[80%] bg-white p-4 border-none shadow relative">
          {/* Right Section - Rate Card */}
          <div className="w-full flex flex-col justify-between items-center">
            {/* Rate Info */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Typography variant="h5" className="font-bold text-gray-900">
                  Inclusive Light
                </Typography>
                <InfoIcon className="w-5 h-5 text-blue-600" />
              </div>

              <Typography variant="small" className="text-gray-600 mb-4">
                Precio por 3 días de renta
              </Typography>

              {/* Price Navigation */}
              <div className="flex items-center w-full  justify-between mb-5">
                <Button variant="ghost" size="sm" className="p-2 text-gray-400">
                  <ArrowIcon className="w-4 h-4" />
                </Button>

                <div className="text-center">
                  <Typography
                    variant="h3"
                    className="font-bold text-blue-600 mb-1"
                  >
                    COP {price.toLocaleString("es-CO")}
                  </Typography>
                  <Typography variant="small" className="text-gray-500">
                    (USD{" "}
                    {usdPrice.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                    )
                  </Typography>
                </div>
                <Button variant="ghost" size="sm" className="p-2 text-gray-900">
                  <ArrowIcon className="w-4 h-4 rotate-180" />
                </Button>
              </div>
            </div>

            {/* Select Button */}
            <Button
              size="lg"
              className="w-full bg-primary text-white font-semibold py-4 rounded-lg transition-colors duration-200 h-11"
              onClick={handleSelect}
            >
              Seleccionar
            </Button>
          </div>
        </Card>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
