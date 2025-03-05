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
    <div className="flex-1 px-2 pr-5 h-96">
      <div className="flex items-center gap-2 mb-2">
        <Flame className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-gray-800">Hot & New</h2>
      </div>

      {isLoading && (
        <div className="flex items-center justify-center text-gray-500 h-72">
          Loading products...
        </div>
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

      <div className="grid grid-cols-4 gap-4">
        {data.map(
          (product: {
            id: number;
            image: string;
            title: string;
            price: number;
            discount: number;
          }) => (
            <div key={product.id} className="flex flex-col flex-1 h-full">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain w-full h-full p-2 m-1 transition duration-300 border rounded-l shadow-md cursor-pointer hover:scale-105 false"
              />
              <span className="block px-2 py-2 overflow-hidden font-medium whitespace-nowrap text-ellipsis">
                {product.title}
              </span>
              <div className="flex items-center gap-2 px-2">
                <span className="text-sm line-through">{product.price}</span>
                <span className="text-2xl font-semibold ">
                  <span className="text-2xl text-green-400">$</span>
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
