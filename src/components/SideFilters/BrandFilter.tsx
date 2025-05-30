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
        <div className="flex items-center gap-2 w-full justify-between bg-blue-200">
          <Typography
            variant="h6"
            color="inherit"
            className="font-gt-walsheim font-medium text-primary"
          >
            Compañía rentadora
          </Typography>
          <ChevronIcon
            direction="down"
            className="h-4 w-4 text-primary transition-transform duration-200 group-data-[open=true]:rotate-180"
          />
        </div>
      </Accordion.Trigger>
      <Accordion.Content className="pt-3 pb-0">
        <div className="space-y-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onChange={() => onToggleBrand(brand)}
              >
                <Checkbox.Indicator className="text-white" />
              </Checkbox>
              <Typography
                as="label"
                htmlFor={`brand-${brand}`}
                className="cursor-pointer text-sm text-gray-700 flex-1"
              >
                {brand} (3)
              </Typography>
            </div>
          ))}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default BrandFilter;
