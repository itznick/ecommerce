import SquareGrid from "./SquareGrid";
import { fetchProductByCategory } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

interface SquareGridContainerProps {
  category: string;
}

const SquareGridContainer: React.FC<SquareGridContainerProps> = ({
  category,
}) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories", category],
    queryFn: () => fetchProductByCategory(category),
  });

  if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error fetching products</p>;

  const products = Array.isArray(data.products)
    ? data.products.slice(0, 4)
    : [];

  return (
    <div className="p-4 capitalize border-2 rounded-md">
      <span className="text-xl font-semibold text-gray-800">{category}</span>
      <div className="grid grid-cols-2 gap-2">
        {products.map((product: { id: number; image: string }) => (
          <SquareGrid key={product.id} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default SquareGridContainer;
