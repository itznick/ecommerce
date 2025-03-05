import { Package } from "lucide-react";
import SquareGridContainer from "../../components/square-grid/SquareGridContainer";

const BundleAndSave = () => {
  return (
    <div className="flex-1 px-4">
      <div className="flex items-center gap-2 mb-4">
        <Package className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-gray-800">Bundle & Save</h2>
      </div>
      <div className="grid w-full h-full grid-cols-2 gap-4">
        <SquareGridContainer category="laptop" />
        <SquareGridContainer category="gaming" />
        <SquareGridContainer category="audio" />
        <SquareGridContainer category="appliances" />
      </div>
    </div>
  );
};

export default BundleAndSave;
