import { Button, Card, Typography } from "@material-tailwind/react";
import React from "react";
import { ArrowIcon, ChevronIcon } from "../icons";

const SearchForm: React.FC = () => {
  return (
    <div className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <Card className="p-6 shadow-lg border-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Origin Airport */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <div className="flex-1">
                  <Typography
                    type="small"
                    className="text-gray-600 font-medium mb-1"
                  >
                    Origen
                  </Typography>
                  <Typography className="text-gray-900 font-semibold text-base">
                    Miami International Airport (MIA)
                  </Typography>
                </div>
                <ChevronIcon className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Arrow Icon */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="p-2 bg-blue-50 rounded-full">
                <ArrowIcon className="h-4 w-4 text-blue-600" rotation={180} />
              </div>
            </div>

            {/* Destination Airport */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <div className="flex-1">
                  <Typography
                    type="small"
                    className="text-gray-600 font-medium mb-1"
                  >
                    Destino
                  </Typography>
                  <Typography className="text-gray-900 font-semibold text-base">
                    Orlando International Airport (MCO)
                  </Typography>
                </div>
                <ChevronIcon className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Departure Date */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <div className="flex-1">
                  <Typography
                    type="small"
                    className="text-gray-600 font-medium mb-1"
                  >
                    Ida
                  </Typography>
                  <Typography className="text-gray-900 font-semibold text-base">
                    20 septiembre 2025, 12:00
                  </Typography>
                </div>
                <ChevronIcon className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Return Date */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                <div className="flex-1">
                  <Typography
                    type="small"
                    className="text-gray-600 font-medium mb-1"
                  >
                    Vuelta
                  </Typography>
                  <Typography className="text-gray-900 font-semibold text-base">
                    30 septiembre 2025, 18:00
                  </Typography>
                </div>
                <ChevronIcon className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Modify Button */}
            <div className="flex-shrink-0">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-medium normal-case"
              >
                Modificar
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchForm;
