import { Backpack } from "lucide-react";
import BrandGrid from "../../components/grids/brand-grid/BrandGrid";

const FeaturedBrands = () => {
  return (
    <div className="flex-1 px-2 sm:px-4 ">
      <div className="flex items-center gap-2 p-1 bg-orange-500 rounded-md w-36">
        <Backpack className="text-white" />
        <h2 className="text-xl font-medium text-white">Top Brands</h2>
      </div>
      <div className="grid w-full grid-cols-1">
        <BrandGrid />
      </div>
    </div>
  );
};

export default FeaturedBrands;
