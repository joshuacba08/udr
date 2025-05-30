import { Accordion, Checkbox, Typography } from "@material-tailwind/react";
import React from "react";
import ChevronIcon from "../icons/ChevronIcon";

interface BrandFilterProps {
  brands: string[];
  selectedBrands: string[];
  onToggleBrand: (brand: string) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({
  brands,
  selectedBrands,
  onToggleBrand,
}) => {
  return (
    <Accordion.Item value="brands" className="border-none">
      <Accordion.Trigger className="flex items-center justify-between w-full text-left p-0 hover:no-underline">
        <div className="flex items-center gap-2 bg-blue-100 w-full py-2 justify-between">
          <Typography
            variant="h6"
            color="inherit"
            className="font-gt-walsheim font-medium text-primary"
          >
            Compañía rentadora
          </Typography>
          <ChevronIcon
            direction={"up"}
            className="w-4 h-4 text-primary transition-transform duration-200 group-data-[open=true]:rotate-180"
          />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="pt-3 pb-0">
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onChange={() => onToggleBrand(brand)}
              >
                <Checkbox.Indicator />
              </Checkbox>

              <label
                htmlFor={`brand-${brand}`}
                className="ml-3 text-sm text-gray-700 cursor-pointer select-none flex-1"
              >
                {brand} (3)
              </label>
            </div>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default BrandFilter;
