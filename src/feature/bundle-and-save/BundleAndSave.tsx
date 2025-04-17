import { Package } from "lucide-react";
import SquareGridContainer from "../../components/square-grid/SquareGridContainer";

const BundleAndSave = () => {
  return (
    <div className="px-2 sm:px-4">
      <div className="flex items-center gap-2 bg-orange-500 rounded-md p-1 w-44">
        <Package className="text-white" />
        <h2 className="text-xl font-medium text-white">Bundle & Save</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4 max-lg:grid-cols-1">
        <SquareGridContainer category="laptop" />
        <SquareGridContainer category="gaming" />
        <SquareGridContainer category="audio" />
        <SquareGridContainer category="appliances" />
      </div>
    </div>
  );
};

export default BundleAndSave;
