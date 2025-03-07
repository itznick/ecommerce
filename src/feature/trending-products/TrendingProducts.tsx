import { TrendingUp } from "lucide-react";
import LineGrid from "../../components/line-grid/LineGrid";

const TrendingProducts = () => {
  return (
    <div className="px-4">
      <div className="flex items-center gap-2 bg-orange-500 rounded-md p-1 w-56">
        <TrendingUp className="w-6 h-6 text-white" />
        <h2 className="text-xl font-semimedium text-white">
          Trending Products
        </h2>
      </div>
      <div className="">
        <LineGrid category="mobile" limit={4} />
        <LineGrid category="tv" limit={4} />
        <LineGrid category="laptop" limit={4} />
        <LineGrid category="appliances" limit={4} />
      </div>
    </div>
  );
};

export default TrendingProducts;
