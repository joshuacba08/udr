import { Checkbox, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";

interface SuitcaseFilterProps {
  capacities: number[];
  selectedCapacities: number[];
  onToggleCapacity: (capacity: number) => void;
}

const SuitcaseFilter: React.FC<SuitcaseFilterProps> = ({
  capacities,
  selectedCapacities,
  onToggleCapacity,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const formatCapacityLabel = (capacity: number) => {
    if (capacity === 1) return "1 ó más maletas";
    if (capacity >= 7) return "7 ó más maletas";
    return `${capacity} ó más maletas`;
  };

  return (
    <div className="border-b border-gray-100 pb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <Typography
          variant="h6"
          color="inherit"
          className="font-gt-walsheim font-medium text-primary"
        >
          Capacidad de maletas
        </Typography>
        <ChevronIcon
          direction={isExpanded ? "up" : "down"}
          className="w-4 h-4 text-primary"
        />
      </button>

      {isExpanded && (
        <div className="mt-3 space-y-2">
          {capacities.map((capacity) => (
            <div key={capacity} className="flex items-center">
              <Checkbox
                id={`suitcase-${capacity}`}
                checked={selectedCapacities.includes(capacity)}
                onChange={() => onToggleCapacity(capacity)}
                color="primary"
                className="rounded-md p-0"
              />
              <label
                htmlFor={`suitcase-${capacity}`}
                className="ml-3 text-sm text-gray-700 cursor-pointer select-none flex-1"
              >
                {formatCapacityLabel(capacity)} (3)
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuitcaseFilter;
