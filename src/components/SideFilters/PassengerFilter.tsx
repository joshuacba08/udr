import { Checkbox, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";

interface PassengerFilterProps {
  counts: number[];
  selectedCounts: number[];
  onToggleCount: (count: number) => void;
}

const PassengerFilter: React.FC<PassengerFilterProps> = ({
  counts,
  selectedCounts,
  onToggleCount,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const formatCountLabel = (count: number) => {
    if (count === 7 || count === 8) return "7/8 pasajeros";
    return `${count} pasajeros`;
  };

  const getCountForLabel = (count: number) => {
    // Get count of cars with this passenger count
    if (count === 4) return "(12)";
    if (count === 5) return "(78)";
    if (count === 7) return "(16)";
    if (count === 12) return "(3)";
    return "(3)";
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
          Cantidad de pasajeros
        </Typography>
        <ChevronIcon
          direction={isExpanded ? "up" : "down"}
          className="w-4 h-4 text-primary"
        />
      </button>

      {isExpanded && (
        <div className="mt-3 space-y-2">
          {counts.map((count) => (
            <div key={count} className="flex items-center">
              <Checkbox
                id={`passenger-${count}`}
                checked={selectedCounts.includes(count)}
                onChange={() => onToggleCount(count)}
                color="primary"
                className="rounded-md p-0"
              />
              <label
                htmlFor={`passenger-${count}`}
                className="ml-3 text-sm text-gray-700 cursor-pointer select-none flex-1"
              >
                {formatCountLabel(count)} {getCountForLabel(count)}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PassengerFilter;
