import { motion } from "framer-motion";
import { Input } from "../ui/input";

const SearchBar = ({ isVisible }: { isVisible: boolean }) => {
  return isVisible ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, top: "54px" }}
      exit={{ opacity: 0, top: "-50px" }}
      transition={{ ease: "easeIn", duration: 0.3 }}
      className="absolute left-0 z-50 flex items-center justify-center w-full py-2 bg-white border-b-2 sm:hidden"
    >
      <Input
        className="w-[90%] pr-5 py-2 border-2 text-lg placeholder:text-lg font-medium placeholder:text-gray-400 placeholder:font-regular rounded-md h-10 focus-visible:border-[#ff9e01] selection:bg-[#3367d1] focus-visible:ring-0 bg-white"
        placeholder="Search any product"
      />
    </motion.div>
  ) : null;
};

export default SearchBar;
