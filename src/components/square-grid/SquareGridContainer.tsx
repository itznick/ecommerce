import { fetchProductByCategory } from "../../services/api";
import { useQuery } from "@tanstack/react-query";
import SmallProductCard from "../card-variants/SmallProductCard";
import { Tag } from "lucide-react";

interface SquareGridContainerProps {
  category: string;
}

const SquareGridContainer: React.FC<SquareGridContainerProps> = ({
  category,
}) => {
  const { data, error, isLoading, isPending, isError } = useQuery({
    queryKey: ["categories", category],
    queryFn: () => fetchProductByCategory(category),
  });

  if (isLoading || isPending)
    return <p className="text-center text-gray-600">Loading...</p>;
  if (error || isError)
    return <p className="text-center text-red-500">Error fetching products</p>;

  const products = Array.isArray(data.products)
    ? data.products.slice(0, 4)
    : [];

  return (
    <div className="capitalize rounded-md">
      <div className="flex items-center gap-2 mt-2 px-2">
        <Tag className="text-orange-500" />
        <span className="text-xl font-medium text-gray-800">{category}</span>
      </div>
      <div className="grid grid-cols-2 gap-4 p-2 ">
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
    </div>
  );
};

export default SquareGridContainer;
