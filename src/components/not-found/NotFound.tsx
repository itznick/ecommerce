import space from "../../assets/error-404.gif";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center text-center p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={space} alt="Not Found" className="w-72 md:w-96" />
      <h1 className="text-2xl md:text-3xl font-bold mt-4">
        Oops! Page not found.
      </h1>
      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist.
      </p>
      <Button className="mt-4 cursor-pointer" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </motion.div>
  );
};

export default NotFound;
