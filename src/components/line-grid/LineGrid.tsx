import { useQuery } from "@tanstack/react-query";
import {
  fetchProductByCategoryDesc,
  fetchProductsByPage,
} from "../../services/api";
import SmallProductCard from "../card-variants/SmallProductCard";
import { LineGridProps } from "../../interfaces/componentProps.types";

const LineGrid: React.FC<LineGridProps> = ({ category, limit, page }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories", category, page],
    queryFn: () =>
      category === "all"
        ? fetchProductsByPage(page)
        : fetchProductByCategoryDesc(category),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching products</p>;

  const products = Array.isArray(data.products)
    ? limit
      ? data.products.slice(0, limit)
      : data.products
    : [];

  return (
    <div className="grid gap-5 py-2 mt-4 lg:grid-cols-4 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
      {products.map(
        (product: {
          id: number;
          title: string;
          image: string;
          price: number;
          discount: number;
        }) => (
          <SmallProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            discount={product.discount}
          />
        )
      )}
    </div>
  );
};

export default LineGrid;
