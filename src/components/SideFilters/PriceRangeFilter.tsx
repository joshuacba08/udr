import { Accordion, Typography } from "@material-tailwind/react";
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
  const [tempRange, setTempRange] = useState(priceRange);
  const [activeThumb, setActiveThumb] = useState<number | null>(null);

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

  // Calculate the z-index based on handle positions and active state
  const getZIndex = (index: 0 | 1) => {
    if (activeThumb === index) return 5;

    // If handles are close to each other, prioritize based on position
    const percentMin = ((tempRange[0] - min) / (max - min)) * 100;
    const percentMax = ((tempRange[1] - min) / (max - min)) * 100;

    if (Math.abs(percentMax - percentMin) < 5) {
      // When handles are close, keep min handle on top when it's on the right side
      return index === 0 ? 3 : 2;
    }

    return index === 0 ? 2 : 3;
  };

  return (
    <Accordion.Item value="priceRange" className="border-none">
      <Accordion.Trigger className="flex items-center justify-between w-full text-left p-0 hover:no-underline">
        <div className="flex items-center gap-2 w-full justify-between bg-blue-200 py-2">
          <Typography
            variant="h6"
            color="inherit"
            className="font-gt-walsheim font-medium text-primary"
          >
            Fijar un rango de precio ({currency})
          </Typography>
          <ChevronIcon
            direction="down"
            className="h-4 w-4 text-primary transition-transform duration-200 group-data-[open=true]:rotate-180"
          />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="pt-3 pb-0">
        <div className="space-y-4">
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
                onMouseDown={() => setActiveThumb(0)}
                onMouseUp={() => setActiveThumb(null)}
                onTouchStart={() => setActiveThumb(0)}
                onTouchEnd={() => setActiveThumb(null)}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb slider-thumb-min"
                style={{ zIndex: getZIndex(0) }}
                aria-label="Precio mínimo"
              />
              <input
                type="range"
                min={min}
                max={max}
                value={tempRange[1]}
                onChange={(e) => handleRangeChange(1, parseInt(e.target.value))}
                onMouseDown={() => setActiveThumb(1)}
                onMouseUp={() => setActiveThumb(null)}
                onTouchStart={() => setActiveThumb(1)}
                onTouchEnd={() => setActiveThumb(null)}
                className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb slider-thumb-max"
                style={{ zIndex: getZIndex(1) }}
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
      </Accordion.Content>

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
          pointer-events: auto;
        }
        
        .slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3179bd;
          border: 2px solid white;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          pointer-events: auto;
          border: none;
        }

        .slider-thumb {
          pointer-events: none;
        }

        .slider-thumb::-webkit-slider-thumb {
          pointer-events: auto;
        }

        .slider-thumb::-moz-range-thumb {
          pointer-events: auto;
        }
      `}</style>
    </Accordion.Item>
  );
};

export default PriceRangeFilter;
