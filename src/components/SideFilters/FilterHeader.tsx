import { Typography } from "@material-tailwind/react";
import React from "react";

interface FilterHeaderProps {
  icon: React.ReactNode;
  title: string;
  hasActiveFilters: boolean;
  onClearAll: () => void;
}

const FilterHeader: React.FC<FilterHeaderProps> = ({
  icon,
  title,
  hasActiveFilters,
  onClearAll,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <Typography
          variant="h6"
          color="inherit"
          className="font-gt-walsheim font-medium text-primary"
        >
          {title}
        </Typography>
      </div>

      {hasActiveFilters && (
        <button
          onClick={onClearAll}
          className="text-sm text-primary hover:text-primary/80 transition-colors underline"
        >
          Limpiar
        </button>
      )}
    </div>
  );
};

export default FilterHeader;
