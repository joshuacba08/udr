import { BookingSteps } from "../components/booking";
import { SearchForm } from "../components/search";
import NavbarUdr from "./NavbarUdr";

const MainLayout = () => {
  return (
    <div>
      <NavbarUdr />
      <SearchForm />
      <BookingSteps />
    </div>
  );
};

export default MainLayout;
