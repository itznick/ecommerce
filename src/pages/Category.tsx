import { useParams } from "react-router";
import { categories } from "../data/categories";
import { useState } from "react";
import ProductDetailModal from "../components/product/product-detail-modal/ProductDetailModal";
import CustomPagination from "../shared/custom-pagination/CustomPagination";
import LineGrid from "../components/grids/line-grid/LineGrid";

const Category = () => {
  const [page, setPage] = useState(1);
  const { type } = useParams<{ type: string }>();
  const categoryData = categories.find((cat) => cat.title === type);

  const totalPages = categoryData?.title === "all" ? 3 : 1;

  return (
    <div className="flex-1 px-2 py-2 h-full">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="flex items-center justify-center gap-2 text-xl font-semibold text-gray-800 uppercase">
          {categoryData?.icon && (
            <categoryData.icon className="text-orange-500" />
          )}
          {type}
        </h2>
      </div>

      <div className="grid w-full gap-4">
        <LineGrid category={type || ""} page={page} />
        <ProductDetailModal />

        {categoryData?.title === "all" && (
          <CustomPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
};

export default Category;
