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
import { SidebarTrigger } from "../ui/sidebar";
import Notification from "../notification/Notification";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="bg-white fixed top-0 left-0 z-40 w-full h-16 flex items-center justify-center shadow-md">
      <div>
        <SidebarTrigger
          size="lg"
          className="text-black h-10 w-10 ml-3 p-2 border"
        />
      </div>
      <nav className="flex justify-between items-center w-[min(100%-6rem)] max-w-[1380px] mx-auto h-[70%]">
        <NavLink
          to="/"
          className="flex justify-center items-center gap-2 text-sm mb-2"
        >
          <ShoppingBag size={28} fill="#ff6900" />
          <span className="text-lg font-medium ">EzCommerce</span>
        </NavLink>
        <div className="w-[55%] relative flex items-center mx-6">
          <Search className="absolute left-3 text-black w-6 h-6" />
          <Input
            type="search"
            placeholder="Search the products"
            className="pl-12 pr-10 py-2 w-full border-2 text-lg font-medium placeholder:text-gray-400 placeholder:text-base placeholder:font-regular rounded-md h-10 focus-visible:border-[#ff9e01] selection:bg-[#3367d1] focus-visible:ring-0"
          />
        </div>
        <div className="flex items-center gap-6">
          <Notification />
          <NavLink to="/cart">
            <ShoppingCart className="hover:text-orange-500 cursor-pointer w-6 h-6" />
          </NavLink>

          {isSignedIn ? (
            <SignedIn>
              <UserButton />
            </SignedIn>
          ) : (
            <div className="bg-orange-500 text-white rounded-md px-4 py-2 text-sm">
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
