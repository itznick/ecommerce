import { Backpack } from "lucide-react";
import BrandGrid from "../../components/brand-grid/BrandGrid";

const FeaturedBrands = () => {
  return (
    <div className="flex-1 px-4 h-96">
      <div className="flex items-center gap-2 mb-4">
        <Backpack className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-gray-800">Top Brands</h2>
      </div>
      <div className="grid w-full h-full grid-cols-1">
        <BrandGrid />
      </div>
    </div>
  );
};

export default FeaturedBrands;
