// import { Search, ShoppingBag, ShoppingCart } from "lucide-react";
// import { Input } from "../ui/input";
// import { NavLink } from "react-router-dom";
// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
//   useUser,
// } from "@clerk/clerk-react";
// import Notification from "../notification/Notification";
// import { Badge } from "../ui/badge";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
// import { SidebarTrigger, useSidebar } from "../ui/sidebar";
// import { useState } from "react";
// import SearchBar from "../search-bar/SearchBar";

// const Header = () => {
//   const { isSignedIn } = useUser();
//   const [isVisible, setIsVisible] = useState(false);
//   const cartItems = useSelector((state: RootState) => state.cart);
//   const { state, open } = useSidebar();
//   return (
//     <header className="fixed top-0 left-0 z-40 flex flex-col items-center w-full bg-white shadow-sm h-14 md:h-16">
//       <nav className="flex items-center justify-between w-full h-full px-4 mx-4 md:px-6">
//         <NavLink to="/" className="flex items-center justify-center gap-2">
//           <ShoppingBag
//             className="w-6 h-6 sm:w-7 sm:h-7 md:h-8 md:w-8"
//             fill="#ff6900"
//           />
//           <span className="hidden text-lg font-medium md:block md:text-2xl">
//             EzCommerce
//           </span>
//         </NavLink>
//         <div className="w-[55%] max-sm:hidden relative flex items-center mx-6">
//           <Search className="absolute h-6 text-black left-3 sm:h-5 sm:w-5 md:h-6 md:w-6" />
//           <Input
//             type="search"
//             placeholder="Search the products"
//             className="pl-12 pr-10 py-2 w-full border-2 text-base placeholder:text-base font-medium placeholder:text-gray-500 placeholder:font-normal rounded-md focus-visible:border-[#ff9e01] selection:bg-[#3367d1] focus-visible:ring-0 sm:placeholder:text-lg md:h-11"
//           />
//         </div>
//         <div className="flex items-center gap-6 md:gap-4">
//           <Search
//             className="w-6 h-6 cursor-pointer hover:text-orange-500 sm:hidden"
//             onClick={() => setIsVisible(!isVisible)}
//           />
//           <Notification />
//           <NavLink to="/cart" className="relative">
//             {cartItems.totalCount > 0 && (
//               <Badge
//                 variant="destructive"
//                 className="absolute flex items-center justify-center w-5 px-1 text-xs text-white bg-red-500 rounded-full pointer-events-none -top-2 -right-2"
//               >
//                 {cartItems.totalCount}
//               </Badge>
//             )}
//             <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-orange-500 sm:w-7 sm:h-7" />
//           </NavLink>
//           {isSignedIn ? (
//             <div className="max-sm:hidden sm:hidden md:flex">
//               <SignedIn>
//                 <UserButton />
//               </SignedIn>
//             </div>
//           ) : (
//             <div className="w-20 py-2 text-base text-center text-white bg-orange-500 rounded-md max-sm:hidden sm:hidden md:block line-clamp-1">
//               <SignedOut>
//                 <SignInButton />
//               </SignedOut>
//             </div>
//           )}
//           {state === "expanded" && open === true ? (
//             <SidebarTrigger className="z-50 w-10 h-10 text-black border right-4 top-5 md:hidden" />
//           ) : (
//             <SidebarTrigger className="w-10 h-10 mt-2 ml-1 text-black border md:hidden" />
//           )}
//         </div>
//       </nav>
//       <SearchBar isVisible={isVisible} />
//     </header>
//   );
// };

// export default Header;

import { Search } from "lucide-react";

import Notification from "../notification/Notification";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SidebarTrigger, useSidebar } from "../ui/sidebar";
import { useState } from "react";
import SearchBar from "../../shared/search-bar/SearchBar";
import { BrandLogo } from "./BrandLogo";
import { DesktopSearchInput } from "./DesktopSearchInput";
import { useUser } from "@clerk/clerk-react";
import { AuthSection } from "./AuthSection";
import { CartIcon } from "./CartIcon";

const Header = () => {
  const { isSignedIn = false } = useUser();
  const [isVisible, setIsVisible] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart);
  const { state, open } = useSidebar();

  const showSidebarTrigger =
    state === "expanded" && open === true
      ? "z-50 w-10 h-10 text-black border right-4 top-5 md:hidden"
      : "w-10 h-10 mt-2 ml-1 text-black border md:hidden";

  return (
    <header className="fixed top-0 left-0 z-40 flex flex-col items-center w-full bg-white shadow-sm h-14 md:h-16">
      <nav className="flex items-center justify-between w-full h-full px-4 mx-4 md:px-6">
        <BrandLogo />
        <DesktopSearchInput />

        <div className="flex items-center gap-6 md:gap-4">
          <Search
            className="w-6 h-6 cursor-pointer hover:text-orange-500 sm:hidden"
            onClick={() => setIsVisible(!isVisible)}
          />
          <Notification />
          <CartIcon totalCount={cartItems.totalCount} />
          <AuthSection isSignedIn={isSignedIn} />
          <SidebarTrigger className={showSidebarTrigger} />
        </div>
      </nav>
      <SearchBar isVisible={isVisible} />
    </header>
  );
};
export default Header;
