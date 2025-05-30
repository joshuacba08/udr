import { Typography } from "@material-tailwind/react";
import clsx from "clsx";
import React from "react";
import { ChevronIcon } from "../icons";

interface StepProps {
  number: number;
  title: string;
  isActive: boolean;
  isCompleted: boolean;
}

const Step: React.FC<StepProps> = ({ title, isActive }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        {/* Step Title */}
        <Typography
          className={clsx(
            "ml-3 font-extralight text-sm",
            isActive ? "text-white font-extrabold" : "text-blue-300"
          )}
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

const BookingSteps: React.FC = () => {
  const steps = [
    {
      order: 1,
      title: "Selecciona tu vehículo",
      isActive: true,
      isCompleted: false,
    },
    {
      order: 2,
      title: "Agrega equipamiento adicional",
      isActive: false,
      isCompleted: false,
    },
    {
      order: 3,
      title: "Información del conductor",
      isActive: false,
      isCompleted: false,
    },
    {
      order: 4,
      title: "Confirmación de la reserva",
      isActive: false,
      isCompleted: false,
    },
  ];

  return (
    <div className="bg-blue-900 py-4 w-full h-[68px] flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <>
                <Step
                  key={step.order}
                  number={step.order}
                  title={step.title}
                  isActive={step.isActive}
                  isCompleted={step.isCompleted}
                />
                {index !== steps.length - 1 && (
                  <div className="flex items-center ml-4">
                    <ChevronIcon className="h-3 w-3 text-gray-400" />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
