import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Flame } from "lucide-react";
import { fetchLimitedProducts } from "../../services/api";

const LIMIT = 4;

const HotAndNew = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", LIMIT],
    queryFn: () => fetchLimitedProducts(LIMIT),
    retry: 1,
    placeholderData: keepPreviousData,
  });

  return (
    <div className="flex-1 px-2 mt-6 pr-5 h-96">
      <div className="flex items-center gap-2 mb-2">
        <Flame className="h-6 w-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-gray-800">Hot & New</h2>
      </div>

      {isLoading && (
        <div className="h-72 flex items-center justify-center text-gray-500">
          Loading products...
        </div>
      )}

      {isError && (
        <div className="h-72 flex items-center justify-center text-red-500">
          {error?.message || "Failed to load products."}
        </div>
      )}

      {!isLoading && !isError && data.length === 0 && (
        <div className="h-72 flex items-center justify-center text-gray-500">
          No new products available.
        </div>
      )}

      <div className="grid grid-cols-4 gap-4">
        {data.map(
          (product: {
            id: number;
            image: string;
            title: string;
            price: number;
            discount: number;
          }) => (
            <div key={product.id} className="h-full flex flex-1 flex-col">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain p-2  m-1 hover:scale-105  transition false duration-300 cursor-pointer  border rounded-l shadow-md"
              />
              <span className="overflow-hidden whitespace-nowrap text-ellipsis px-2 py-2 font-medium block">
                {product.title}
              </span>
              <div className="flex items-center px-2 gap-2">
                <span className="text-sm line-through">{product.price}</span>
                <span className=" text-2xl font-semibold ">
                  <span className="text-green-400 text-2xl">$</span>
                  {product.price}
                </span>
                <span className="rounded-[50%] bg-red-600 p-0.5 text-xs text-white ">
                  {product.discount}%
                </span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HotAndNew;
