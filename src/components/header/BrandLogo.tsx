import { ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";

export const BrandLogo = () => (
  <NavLink to="/" className="flex items-center gap-2">
    <ShoppingBag
      className="w-6 h-6 sm:w-7 sm:h-7 md:h-8 md:w-8"
      fill="#ff6900"
    />
    <span className="hidden text-lg font-medium md:block md:text-2xl">
      EzCommerce
    </span>
  </NavLink>
);
