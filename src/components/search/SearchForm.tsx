import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { ChevronIcon } from "../icons";

const SearchForm: React.FC = () => {
  return (
    <div className="bg-white py-5">
      <div className="max-w-[1294px] mx-auto">
        <div className="grid grid-cols-12 gap-4 h-12">
          {/* Origin Airport and Destination Airport */}

          <div className="col-span-12 lg:col-span-5 w-full h-full flex items-center justify-center gap-2 p-2 bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <Typography className="text-gray-900 font-medium text-sm">
              Miami International Airport (MIA)
            </Typography>

            <ChevronIcon className="h-2 w-2 text-gray-400" />
            <Typography className="text-gray-900 font-medium text-sm">
              Orlando International Airport (MCO)
            </Typography>
          </div>

          {/* Departure Date and Return Date */}
          <div className="col-span-12 lg:col-span-5 w-full h-full flex items-center justify-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <Typography className="text-gray-900 font-medium text-sm">
              20 septiembre 2025, 12:00
            </Typography>
            <ChevronIcon className="h-2 w-2 text-gray-400" />
            <Typography className="text-gray-900 font-medium text-sm">
              30 septiembre 2025, 18:00
            </Typography>
          </div>

          {/* Modify Button */}

          <Button
            size="lg"
            className="bg-primary col-span-12 lg:col-span-2 w-full text-white px-8 py-3 rounded-lg font-medium normal-case"
          >
            Modificar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
