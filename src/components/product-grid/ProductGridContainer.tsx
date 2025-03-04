import ProductGrid from "./ProductGrid";
import { fetchProductByCategory } from "../../services/api";
import { useQuery } from "@tanstack/react-query";

interface ProductGridContainerProps {
  category: string;
}

const ProductGridContainer: React.FC<ProductGridContainerProps> = ({
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
    <div className="p-4 rounded-md border-2 capitalize">
          <span className="text-xl font-semibold text-gray-800">
              {category}
          </span>
      <div className="grid grid-cols-2 gap-2">
        {products.map((product: { id: number; image: string }) => (
          <ProductGrid key={product.id} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default ProductGridContainer;
