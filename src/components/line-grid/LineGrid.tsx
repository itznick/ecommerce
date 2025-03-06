import { useQuery } from "@tanstack/react-query";
import {
  fetchProductByCategoryDesc,
  fetchProductsByPage,
} from "../../services/api";
import { calculateDiscount } from "../../utils/discount";

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
      {products.map(
        (product: {
          id: number;
          title: string;
          image: string;
          price: number;
          discount: number;
        }) => (
          <div
            key={product.id}
            className="flex flex-col gap-3 items-center w-full transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-full p-2 cursor-pointer hover:shadow-md"
            />
            <span className="block w-full px-4 font-medium text-center truncate">
              {product.title}
            </span>
            <div className="flex items-center gap-2 px-2">
              <span className="text-sm font-medium line-through">
                {product.price}
              </span>
              <span className="text-2xl font-semibold ">
                <span className="text-2xl text-green-400">$</span>
                {Math.round(calculateDiscount(product.price, product.discount))}
              </span>
              <span className="rounded-[50%] bg-red-600 p-0.5 text-xs text-white ">
                {product.discount}%
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default LineGrid;
