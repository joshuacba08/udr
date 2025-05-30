import { Typography } from "@material-tailwind/react";
import React from "react";
import { CheckLogo, ChevronIcon } from "../icons";

interface StepProps {
  number: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
  isLast?: boolean;
}

const Step: React.FC<StepProps> = ({
  number,
  title,
  isActive,
  isCompleted,
  isLast = false,
}) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {/* Step Circle */}
        <div
          className={`
            w-8 h-8 rounded-full flex items-center justify-center border-2 
            ${
              isCompleted
                ? "bg-green-500 border-green-500"
                : isActive
                ? "bg-blue-600 border-blue-600"
                : "bg-gray-200 border-gray-300"
            }
          `}
        >
          {isCompleted ? (
            <CheckLogo className="h-4 w-4 text-white" />
          ) : (
            <Typography
              type="small"
              className={`
                font-semibold
                ${isActive ? "text-white" : "text-gray-600"}
              `}
            >
              {number}
            </Typography>
          )}
        </div>

        {/* Step Title */}
        <Typography
          className={`
            ml-3 font-medium text-sm
            ${
              isActive
                ? "text-blue-600"
                : isCompleted
                ? "text-green-600"
                : "text-gray-500"
            }
          `}
        >
          {title}
        </Typography>
      </div>

      {/* Connector Line */}
      {!isLast && (
        <div className="flex items-center ml-4">
          <ChevronIcon className="h-4 w-4 text-gray-400" />
        </div>
      )}
    </div>
  );
};

const BookingSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Selecciona tu vehículo",
      isActive: true,
      isCompleted: false,
    },
    {
      number: 2,
      title: "Agrega equipamiento adicional",
      isActive: false,
      isCompleted: false,
    },
    {
      number: 3,
      title: "Información del conductor",
      isActive: false,
      isCompleted: false,
    },
    {
      number: 4,
      title: "Confirmación de la reserva",
      isActive: false,
      isCompleted: false,
    },
  ];

  return (
    <div className="bg-blue-600 py-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <Step
                key={step.number}
                number={step.number}
                title={step.title}
                isActive={step.isActive}
                isCompleted={step.isCompleted}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
