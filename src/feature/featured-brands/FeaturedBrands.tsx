import { Backpack } from "lucide-react";
import BrandGrid from "../../components/brand-grid/BrandGrid";

const FeaturedBrands = () => {
  return (
    <div className="flex-1 px-4 h-96">
      <div className="flex items-center gap-2 bg-orange-500 rounded-md p-1 w-36">
        <Backpack className="text-white" />
        <h2 className="text-xl font-medium text-white">Top Brands</h2>
      </div>
      <div className="grid w-full h-full grid-cols-1">
        <BrandGrid />
      </div>
    </div>
  );
};

export default FeaturedBrands;
