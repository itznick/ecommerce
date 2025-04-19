import { ShoppingBag } from "lucide-react";

export const BrandSection = () => (
  <div>
    <h2 className="flex items-center justify-center gap-2 text-2xl font-bold md:justify-start">
      <ShoppingBag size={28} />
      EzCommerce
    </h2>
    <p className="mt-2 text-gray-400">
      Your go-to online store for all your shopping needs. Quality products,
      best prices.
    </p>
  </div>
);
