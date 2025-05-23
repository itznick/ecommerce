import { TrendingUp } from "lucide-react";
import LineGrid from "../../components/grids/line-grid/LineGrid";

const TrendingProducts = () => {
  return (
    <div className="px-4">
      <div className="flex items-center w-56 gap-2 p-1 bg-orange-500 rounded-md">
        <TrendingUp className="w-6 h-6 text-white" />
        <h2 className="text-xl text-white font-semimedium">
          Trending Products
        </h2>
      </div>
      <div className="">
        <LineGrid category="mobile" limit={4} page={1} />
        <LineGrid category="tv" limit={4} page={1} />
        <LineGrid category="laptop" limit={4} page={1} />
        <LineGrid category="appliances" limit={4} page={1} />
      </div>
    </div>
  );
};

export default TrendingProducts;
