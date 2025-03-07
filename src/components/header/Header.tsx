import { Search, ShoppingBag, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import Notification from "../notification/Notification";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-18 bg-white shadow-md">
      <nav className="flex justify-between items-center w-full mx-4 h-[70%]">
        <div className="flex items-center justify-center">
          <NavLink
            to="/"
            className="flex items-center justify-center gap-2"
          >
            <ShoppingBag className="h-9 w-9" fill="#ff6900" />
            <span className="text-2xl font-medium ">EzCommerce</span>
          </NavLink>
        </div>
        <div className="w-[55%] relative flex items-center mx-6">
          <Search className="absolute w-6 h-6 text-black left-3" />
          <Input
            type="search"
            placeholder="Search the products"
            className="pl-12 pr-10 py-2 w-full border-2 text-lg placeholder:text-lg font-medium placeholder:text-gray-400 placeholder:font-regular rounded-md h-12 focus-visible:border-[#ff9e01] selection:bg-[#3367d1] focus-visible:ring-0"
          />
        </div>
        <div className="flex items-center gap-6">
          <Notification />
          <NavLink to="/cart">
            <ShoppingCart className="w-8 h-8 cursor-pointer hover:text-orange-500" />
          </NavLink>

          {isSignedIn ? (
            <SignedIn>
              <UserButton />
            </SignedIn>
          ) : (
            <div className="px-4 py-2 text-sm text-white bg-orange-500 rounded-md">
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
