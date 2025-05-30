import { Accordion, Checkbox, Typography } from "@material-tailwind/react";
import React from "react";
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
    <Accordion.Item value="passengers" className="border-none">
      <Accordion.Trigger className="flex items-center justify-between w-full text-left p-0 hover:no-underline">
        <div className="flex items-center gap-2 w-full justify-between bg-blue-200 py-2">
          <Typography
            variant="h6"
            color="inherit"
            className="font-gt-walsheim font-medium text-primary"
          >
            Cantidad de pasajeros
          </Typography>
          <ChevronIcon
            direction="down"
            className="h-4 w-4 text-primary transition-transform duration-200 group-data-[open=true]:rotate-180"
          />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="pt-3 pb-0">
        <div className="space-y-2">
          {counts.map((count) => (
            <div key={count} className="flex items-center gap-2">
              <Checkbox
                id={`passenger-${count}`}
                checked={selectedCounts.includes(count)}
                onChange={() => onToggleCount(count)}
              >
                <Checkbox.Indicator className="text-white" />
              </Checkbox>
              <Typography
                as="label"
                htmlFor={`passenger-${count}`}
                className="cursor-pointer text-sm text-gray-700 flex-1"
              >
                {formatCountLabel(count)} {getCountForLabel(count)}
              </Typography>
            </div>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default PassengerFilter;
