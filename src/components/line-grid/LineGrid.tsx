import { useQuery } from "@tanstack/react-query";
import {
  fetchProductByCategoryDesc,
  fetchProductsByPage,
} from "../../services/api";

interface LineGridProps {
  category: string;
  limit?: number;
}

const LineGrid: React.FC<LineGridProps> = ({ category, limit }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories", category],
    queryFn: () =>
      category === "all"
        ? fetchProductsByPage(1)
        : fetchProductByCategoryDesc(category),
  });

  console.log(data);

  if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching products</p>;

  const products = Array.isArray(data.products)
    ? limit
      ? data.products.slice(0, limit)
      : data.products
    : [];

  return (
    <div className="grid grid-cols-4 p-2">
      {products.map((product: { id: number; title: string; image: string }) => (
        <div
          key={product.id}
          className="flex flex-col items-center w-full transition duration-300 hover:scale-105"
        >
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full p-2 cursor-pointer"
          />
          <span className="block w-full px-4 font-medium text-center truncate">
            {product.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LineGrid;
