import { Accordion, Checkbox, Typography } from "@material-tailwind/react";
import React from "react";
import ChevronIcon from "../icons/ChevronIcon";

interface SuitcaseFilterProps {
  capacities: number[];
  selectedCapacities: number[];
  onToggleCapacity: (capacity: number) => void;
  suitcaseCapacityCounts?: { [key: number]: number };
}

const SuitcaseFilter: React.FC<SuitcaseFilterProps> = ({
  capacities,
  selectedCapacities,
  onToggleCapacity,
  suitcaseCapacityCounts = {},
}) => {
  const formatCapacityLabel = (capacity: number) => {
    if (capacity === 1) return "1 ó más maletas";
    if (capacity >= 7) return "7 ó más maletas";
    return `${capacity} ó más maletas`;
  };

  return (
    <Accordion.Item value="suitcases" className="border-none">
      <Accordion.Trigger className="flex items-center justify-between w-full text-left p-0 hover:no-underline">
        <div className="flex items-center gap-2 w-full justify-between bg-blue-200 py-2">
          <Typography
            variant="h6"
            color="inherit"
            className="font-gt-walsheim font-medium text-primary"
          >
            Capacidad de maletas
          </Typography>
          <ChevronIcon
            direction="down"
            className="h-4 w-4 text-primary transition-transform duration-200 group-data-[open=true]:rotate-180"
          />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="pt-3 pb-0">
        <div className="space-y-2">
          {capacities.map((capacity) => (
            <div key={capacity} className="flex items-center gap-2">
              <Checkbox
                id={`suitcase-${capacity}`}
                checked={selectedCapacities.includes(capacity)}
                onChange={() => onToggleCapacity(capacity)}
              >
                <Checkbox.Indicator className="text-white" />
              </Checkbox>
              <Typography
                as="label"
                htmlFor={`suitcase-${capacity}`}
                className="cursor-pointer text-sm text-gray-700 flex-1"
              >
                {formatCapacityLabel(capacity)} (
                {suitcaseCapacityCounts[capacity] || 0})
              </Typography>
            </div>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default SuitcaseFilter;
