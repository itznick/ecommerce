import { useParams } from "react-router";
import LineGrid from "../components/line-grid/LineGrid";
import { categories } from "../data/categories";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import { useState } from "react";
import ProductDetailModal from "../components/product-detail-modal/ProductDetailModal";

const Category = () => {
  const [page, setPage] = useState(1);
  const { type } = useParams<{ type: string }>();
  const categoryData = categories.find((cat) => cat.title === type);

  return (
    <div className="flex-1 px-2 py-2 pr-5 h-96">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-xl uppercase font-semibold text-gray-800 flex gap-2 items-center justify-center">
          {categoryData?.icon && (
            <categoryData.icon className="text-orange-500" />
          )}
          {type}
        </h2>
      </div>
      <div className="grid w-full h-full grid-cols-1">
        <LineGrid category={type || ""} page={page} />
        <ProductDetailModal />

        {categoryData?.title === "all" && (
          <Pagination className="p-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={page > 1 ? () => setPage((p) => p - 1) : undefined}
                  className={`${
                    page === 1 ? "pointer-events-none opacity-50" : ""
                  } cursor-pointer`}
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink>{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={page < 3 ? () => setPage((p) => p + 1) : undefined}
                  className={`${
                    page === 3 ? "pointer-events-none opacity-50" : ""
                  } cursor-pointer`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};
export default Category;
