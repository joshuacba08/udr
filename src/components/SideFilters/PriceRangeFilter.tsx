import { Typography } from "@material-tailwind/react";
import React, { useCallback, useMemo, useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";

interface PriceRangeFilterProps {
  priceRange: [number, number];
  priceRangeData?: {
    min: number;
    max: number;
    minCOP: number;
    maxCOP: number;
  };
  currency: "USD" | "COP";
  onUpdatePriceRange: (range: [number, number]) => void;
  onUpdateCurrency?: (currency: "USD" | "COP") => void;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  priceRange,
  priceRangeData,
  currency,
  onUpdatePriceRange,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [tempRange, setTempRange] = useState(priceRange);

  const { min, max } = useMemo(() => {
    if (!priceRangeData) return { min: 0, max: 10000000 };
    return currency === "COP"
      ? { min: priceRangeData.minCOP, max: priceRangeData.maxCOP }
      : { min: priceRangeData.min, max: priceRangeData.max };
  }, [priceRangeData, currency]);

  const formatPrice = useCallback(
    (value: number) => {
      if (currency === "COP") {
        return new Intl.NumberFormat("es-CO", {
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value);
      }
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
    [currency]
  );

  const handleRangeChange = useCallback(
    (index: 0 | 1, value: number) => {
      const newRange = [...tempRange] as [number, number];
      newRange[index] = value;

      // Ensure min <= max
      if (index === 0 && value > newRange[1]) {
        newRange[1] = value;
      } else if (index === 1 && value < newRange[0]) {
        newRange[0] = value;
      }

      setTempRange(newRange);
      onUpdatePriceRange(newRange);
    },
    [tempRange, onUpdatePriceRange]
  );

  const handleInputChange = useCallback(
    (index: 0 | 1, value: string) => {
      const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      if (!isNaN(numValue)) {
        handleRangeChange(index, numValue);
      }
    },
    [handleRangeChange]
  );

  return (
    <div className="pb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <Typography
          variant="h6"
          color="inherit"
          className="font-gt-walsheim font-medium text-primary"
        >
          Fijar un rango de precio ({currency})
        </Typography>
        <ChevronIcon
          direction={isExpanded ? "up" : "down"}
          className="w-4 h-4 text-primary"
        />
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          {/* Range Slider */}
          <div className="relative">
            <div className="relative h-2 bg-gray-200 rounded-lg">
              <div
                className="absolute h-2 bg-primary rounded-lg"
                style={{
                  left: `${((tempRange[0] - min) / (max - min)) * 100}%`,
                  width: `${
                    ((tempRange[1] - tempRange[0]) / (max - min)) * 100
                  }%`,
                }}
              />
              <input
                type="range"
                min={min}
                max={max}
                value={tempRange[0]}
                onChange={(e) => handleRangeChange(0, parseInt(e.target.value))}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                style={{ zIndex: 1 }}
                aria-label="Precio mínimo"
              />
              <input
                type="range"
                min={min}
                max={max}
                value={tempRange[1]}
                onChange={(e) => handleRangeChange(1, parseInt(e.target.value))}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                style={{ zIndex: 2 }}
                aria-label="Precio máximo"
              />
            </div>
          </div>

          {/* Price Input Fields */}
          <div className="flex gap-4">
            <div className="flex-1">
              <Typography
                variant="small"
                color="inherit"
                className="mb-1 text-gray-600"
              >
                {currency}
              </Typography>
              <Typography
                variant="small"
                color="inherit"
                className="mb-1 text-gray-500"
              >
                desde
              </Typography>
              <input
                type="text"
                value={formatPrice(tempRange[0])}
                onChange={(e) => handleInputChange(0, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                aria-label="Precio mínimo"
              />
            </div>

            <div className="flex-1">
              <Typography
                variant="small"
                color="inherit"
                className="mb-1 text-gray-600"
              >
                {currency}
              </Typography>
              <Typography
                variant="small"
                color="inherit"
                className="mb-1 text-gray-500"
              >
                hasta
              </Typography>
              <input
                type="text"
                value={formatPrice(tempRange[1])}
                onChange={(e) => handleInputChange(1, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                aria-label="Precio máximo"
              />
            </div>
          </div>
        </div>
      )}

      <style>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3179bd;
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3179bd;
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default PriceRangeFilter;
