import { BookingSteps } from "../components/booking";
import { SearchForm } from "../components/search";
import NavbarUdr from "./NavbarUdr";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <NavbarUdr />
      <SearchForm />
      <BookingSteps />
    </div>
  );
};

export default MainLayout;
