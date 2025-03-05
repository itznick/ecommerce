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
        {/* <span className="px-4 text-2xl">Mobile</span> */}
        <LineGrid category="mobile" />
        <LineGrid category="tv" />
        <LineGrid category="laptop" />
        <LineGrid category="appliances" />
      </div>
    </div>
  );
};

export default TrendingProducts;
