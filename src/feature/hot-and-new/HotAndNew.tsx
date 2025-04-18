import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Flame } from "lucide-react";
import { fetchLimitedProducts } from "../../services/api";
import { Skeleton } from "../../components/ui/skeleton";
import MediumProductCard from "../../components/card-variants/MediumProductCard";

interface HotAndNewProps {
  limit: number;
}

const HotAndNew: React.FC<HotAndNewProps> = ({ limit }) => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["smallCardProducts", limit],
    queryFn: () => fetchLimitedProducts(limit),
    retry: 1,
    placeholderData: keepPreviousData,
  });

  return (
    <div className="mt-2 flex flex-col">
      <div className="flex items-center gap-2 bg-orange-500 rounded-md p-1 w-36">
        <Flame className="text-white" />
        <h2 className="text-xl font-medium text-white text-center">
          Hot & New
        </h2>
      </div>
      <div>
        {isLoading && !isError && (
          <Skeleton className="h-[250px] w-[250px] rounded-md" />
        )}

        {isError && (
          <div className="flex items-center justify-center text-red-500 h-72">
            {error?.message || "Failed to load products."}
          </div>
        )}
        {!isLoading && !isError && data.length === 0 && (
          <div className="flex items-center justify-center text-gray-500 h-72">
            No new products available.
          </div>
        )}
        <div className="grid grid-cols-4 gap-4 px-1 mt-4">
          {data.map(
            (product: {
              id: number;
              title: string;
              image: string;
              price: number;
              discount: number;
            }) => (
              <MediumProductCard
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
    </div>
  );
};

export default HotAndNew;
