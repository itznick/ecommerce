import { Search } from "lucide-react";

import Notification from "../notification/Notification";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { useState } from "react";
import { BrandLogo } from "./BrandLogo";
import { DesktopSearchInput } from "./DesktopSearchInput";
import { useUser } from "@clerk/clerk-react";
import { AuthSection } from "./AuthSection";
import { CartIcon } from "./CartIcon";
import SearchBar from "../../shared/search/SearchBar";
import { useLocation } from "react-router";

const Header = () => {
  const { isSignedIn = false } = useUser();
  const [isVisible, setIsVisible] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart);
  const { state, open } = useSidebar();
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";

  const showSidebarTrigger =
    state === "expanded" && open === true
      ? "z-50 w-10 h-10 text-black border right-4 top-5 md:hidden"
      : "w-10 h-10 mt-2 ml-1 text-black border md:hidden";

  return (
    <header className="fixed top-0 left-0 z-50 flex flex-col items-center w-full bg-white shadow-sm h-14 md:h-16">
      <nav className="flex items-center justify-between w-full h-full px-4 mx-4 md:px-6">
        <BrandLogo />
        <DesktopSearchInput setIsVisible={setIsVisible} />

        <div className="flex items-center gap-6 md:gap-4">
          <Search
            className="w-6 h-6 cursor-pointer hover:text-orange-500 sm:hidden"
            onClick={() => setIsVisible(!isVisible)}
          />
          <Notification />
          <CartIcon totalCount={cartItems.totalCount} />
          <AuthSection isSignedIn={isSignedIn} />
          {!isCartPage && <SidebarTrigger className={showSidebarTrigger} />}
        </div>
      </nav>
      <SearchBar isVisible={isVisible} setIsVisible={setIsVisible} />
    </header>
  );
};
export default Header;
