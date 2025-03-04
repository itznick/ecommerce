import { Package } from "lucide-react";
import ProductGridContainer from "../../components/product-grid/ProductGridContainer";

const CategoryCard = () => {
  return (
    <div className="flex-1 px-4 h-96">
      <div className="flex items-center gap-2 mb-4">
        <Package className="h-6 w-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-gray-800">Bundle & Save</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 h-full w-full">
        <ProductGridContainer category="laptop"/>
        <ProductGridContainer category="gaming" />
        <ProductGridContainer category="audio" />
        <ProductGridContainer category="appliances" />
      </div>
    </div>
  );
};

export default CategoryCard;
