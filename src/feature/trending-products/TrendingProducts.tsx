import { TrendingUp } from "lucide-react";
import LineGrid from "../../components/line-grid/LineGrid";

const TrendingProducts = () => {
  return (
    <div className="flex-1 px-4 h-96">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-gray-800">
          Trending Products
        </h2>
      </div>
      <div className="grid w-full h-full grid-cols-1">
        <LineGrid category="mobile" limit={4} />
        <LineGrid category="tv" limit={4} />
        <LineGrid category="laptop" limit={4} />
        <LineGrid category="appliances" limit={4} />
      </div>
    </div>
  );
};

export default TrendingProducts;
