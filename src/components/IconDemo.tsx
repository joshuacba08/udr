import React from "react";
import {
  AirConditioningIcon,
  ArrowIcon,
  CarryIcon,
  CheckLogo,
  ChevronIcon,
  DoorsIcon,
  FilterIcon,
  InfoIcon,
  LogoUdr,
  LuggageIcon,
  PassengersIcon,
  SpaFlag,
  StarOutlinedIcon,
  StarSolidIcon,
  TransmissionIcon,
} from "./icons";

const IconDemo: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Sistema de Iconos UDR</h1>

      {/* Diferentes tamaños */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Diferentes Tamaños</h2>
        <div className="flex items-center gap-4">
          <ChevronIcon size={16} />
          <ChevronIcon size={24} />
          <ChevronIcon size={32} />
          <ChevronIcon size={48} />
        </div>
      </section>

      {/* Rotaciones */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Rotaciones</h2>
        <div className="flex items-center gap-4">
          <ChevronIcon size={32} rotation={0} />
          <ChevronIcon size={32} rotation={90} />
          <ChevronIcon size={32} rotation={180} />
          <ChevronIcon size={32} rotation={270} />
        </div>
      </section>

      {/* Logos */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Logos</h2>
        <div className="flex flex-wrap items-center gap-6">
          <LogoUdr size={120} />
          <SpaFlag size={32} />
        </div>
      </section>

      {/* Iconos de funciones */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Iconos de Funciones</h2>
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <InfoIcon size={32} />
            <span className="text-xs">Info</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FilterIcon size={32} />
            <span className="text-xs">Filter</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CheckLogo size={32} />
            <span className="text-xs">Check</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <StarSolidIcon size={32} />
            <span className="text-xs">Star Solid</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <StarOutlinedIcon size={32} />
            <span className="text-xs">Star Outlined</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ArrowIcon size={32} />
            <span className="text-xs">Arrow</span>
          </div>
        </div>
      </section>

      {/* Iconos de coche */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Iconos de Coche</h2>
        <div className="grid grid-cols-6 gap-4">
          <div className="flex flex-col items-center gap-2">
            <PassengersIcon size={32} />
            <span className="text-xs">Passengers</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <LuggageIcon size={32} />
            <span className="text-xs">Luggage</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DoorsIcon size={32} />
            <span className="text-xs">Doors</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TransmissionIcon size={32} />
            <span className="text-xs">Transmission</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <AirConditioningIcon size={32} />
            <span className="text-xs">A/C</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <CarryIcon size={32} />
            <span className="text-xs">Carry</span>
          </div>
        </div>
      </section>

      {/* Ejemplos de uso con className */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Con clases CSS personalizadas
        </h2>
        <div className="flex items-center gap-4">
          <InfoIcon
            size={32}
            className="text-blue-500 hover:text-blue-700 cursor-pointer"
          />
          <CheckLogo size={32} className="text-green-500" />
          <StarSolidIcon size={32} className="text-yellow-500" />
          <ArrowIcon
            size={32}
            className="text-gray-400 hover:text-gray-600"
            rotation={180}
          />
        </div>
      </section>

      {/* Código de ejemplo */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Ejemplo de uso</h2>
        <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
          {`import { ChevronIcon, InfoIcon, LogoUdr } from '@/components/icons';

// Uso básico
<ChevronIcon />

// Con tamaño personalizado
<InfoIcon size={32} />

// Con rotación
<ChevronIcon rotation={90} />

// Con clases CSS
<LogoUdr className="text-blue-500 hover:text-blue-700" />

// Combinando propiedades
<ArrowIcon 
  size={24} 
  rotation={180} 
  className="text-red-500 cursor-pointer" 
/>`}
        </pre>
      </section>
    </div>
  );
};

export default IconDemo;
