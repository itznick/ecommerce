import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Badge } from "../ui/badge";

export const CartIcon = ({ totalCount }: { totalCount: number }) => (
  <NavLink to="/cart" className="relative">
    {totalCount > 0 && (
      <Badge
        variant="destructive"
        className="absolute w-5 h-5 px-1 text-xs text-white bg-red-500 rounded-full -top-2 -right-2"
      >
        {totalCount}
      </Badge>
    )}
    <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-orange-500 sm:w-7 sm:h-7" />
  </NavLink>
);
