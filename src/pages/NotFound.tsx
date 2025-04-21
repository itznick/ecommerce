import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import error from "../assets/error-404.gif";
import { Button } from "../components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen p-4 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img src={error} alt="Not Found" className="w-72 md:w-96" />
      <h1 className="mt-4 text-2xl font-bold md:text-3xl">
        Oops! Page not found.
      </h1>
      <p className="mt-2 text-gray-500">
        The page you're looking for doesn't exist.
      </p>
      <Button className="mt-4 cursor-pointer" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </motion.div>
  );
};

export default NotFound;
