import { BookingSteps } from "../components/booking";
import { CarGrid } from "../components/CarGrid";
import { CarSummary } from "../components/CarSummary";
import { SearchForm } from "../components/search";
import { SideFilters } from "../components/SideFilters";
import NavbarUdr from "./NavbarUdr";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <NavbarUdr />
      <SearchForm />
      <BookingSteps />
      <main className="w-full py-8 px-4">
        <div className="grid grid-cols-12 gap-6 mx-auto max-w-7xl">
          <div className="col-span-3">
            <SideFilters />
          </div>
          <div className="col-span-9 space-y-6">
            <CarSummary />
            <CarGrid />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
