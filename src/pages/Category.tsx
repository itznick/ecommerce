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

const Category = () => {
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
        <LineGrid category={type || ""} />
      
        <Pagination className="p-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
export default Category;
