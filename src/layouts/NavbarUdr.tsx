import {
  Button,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";

// Import icon components
import { ChevronIcon, LogoUdr, SpaFlag } from "../components/icons";

const NavbarUdr = () => {
  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white shadow-md border-0">
      <div className="flex items-center justify-between text-blue-gray-900 max-w-7xl mx-auto w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <LogoUdr className="h-8 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <Typography
            as="a"
            href="#"
            type="small"
            className="font-normal text-gray-700 hover:text-blue-500 transition-colors cursor-pointer"
          >
            Buscar transacción
          </Typography>
          <Typography
            as="a"
            href="#"
            type="small"
            className="font-normal text-gray-700 hover:text-blue-500 transition-colors cursor-pointer"
          >
            Políticas
          </Typography>
          <Typography
            as="a"
            href="#"
            type="small"
            className="font-normal text-gray-700 hover:text-blue-500 transition-colors cursor-pointer"
          >
            Contáctenos
          </Typography>
        </div>

        {/* Right Section - Language and User */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-700 hover:bg-gray-50 p-2 rounded-lg normal-case font-normal"
          >
            <SpaFlag className="h-4 w-5 rounded-sm" />
            <Typography type="small" className="font-normal">
              Español
            </Typography>
            <ChevronIcon className="h-3 w-3" rotation={90} />
          </Button>

          {/* User Section */}
          <div className="flex items-center gap-2">
            <Typography type="small" className="font-normal text-gray-700">
              Hola, Javier
            </Typography>
            {/* Avatar with letter */}
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center border border-gray-300">
              <span className="text-white font-regular text-sm text-blue-300">
                J
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <IconButton
            variant="ghost"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarUdr;
