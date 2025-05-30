import { BookingSteps } from "../components/booking";
import { SearchForm } from "../components/search";
import { SideFilters } from "../components/SideFilters";
import NavbarUdr from "./NavbarUdr";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <NavbarUdr />
      <SearchForm />
      <BookingSteps />
      <main className="flex p-6">
        <SideFilters />
      </main>
    </div>
  );
};

export default MainLayout;
