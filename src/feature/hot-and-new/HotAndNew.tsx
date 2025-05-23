import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Flame } from "lucide-react";
import { fetchLimitedProducts } from "../../services/api";
import { Skeleton } from "../../components/ui/skeleton";
import MediumProductCard from "../../components/card-variants/MediumProductCard";
import { HotAndNewProps } from "../../interfaces/componentProps.types";

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
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="px-2 sm:px-4">
      <div className="flex items-center justify-center gap-2 p-1 bg-orange-500 rounded-md w-36">
        <Flame className="text-white" />
        <h2 className="text-lg font-medium text-center text-white">
          Hot & New
        </h2>
      </div>

      <div className="mt-4">
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

        <div className="grid gap-4 max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.map(
            (product: {
              id: number;
              title: string;
              image: string;
              price: number;
              discount: number;
            }) => (
              <MediumProductCard key={product.id} {...product} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default HotAndNew;
