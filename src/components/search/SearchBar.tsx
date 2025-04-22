import { motion } from "framer-motion";
import { Input } from "../ui/input";
import SearchList from "./SearchList";
import { useState } from "react";
import { SearchBarProps } from "../../interfaces/search.types";

const SearchBar = ({ isVisible, setIsVisible }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return isVisible ? (
    <motion.div
      initial={{ opacity: 0, top: "-20px" }}
      animate={{ opacity: 1, top: "54px" }}
      exit={{ opacity: 0, top: "-20px" }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="absolute left-0 z-50 w-full flex flex-col items-center bg-white py-2 border-b-2 sm:hidden"
    >
      <Input
        className="w-[90%] pr-5 py-2 border-2 text-lg placeholder:text-lg font-medium placeholder:text-gray-400 rounded-md h-10 focus-visible:border-[#ff9e01] selection:bg-[#3367d1] focus-visible:ring-0 bg-white"
        placeholder="Search any product"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      {searchQuery && (
        <SearchList
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setIsVisible={setIsVisible}
        />
      )}
    </motion.div>
  ) : null;
};

export default SearchBar;
