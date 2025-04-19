import { Search } from "lucide-react";
import { Input } from "../ui/input";

export const DesktopSearchInput = () => (
  <div className="w-[55%] max-sm:hidden relative flex items-center mx-6">
    <Search className="absolute left-3 h-6 text-black sm:h-5 sm:w-5 md:h-6 md:w-6" />
    <Input
      type="search"
      placeholder="Search the products"
      className="pl-12 pr-10 py-2 w-full border-2 text-base placeholder:text-base font-medium placeholder:text-gray-500 placeholder:font-normal rounded-md focus-visible:border-[#ff9e01] selection:bg-[#3367d1] focus-visible:ring-0 sm:placeholder:text-lg md:h-11"
    />
  </div>
);
