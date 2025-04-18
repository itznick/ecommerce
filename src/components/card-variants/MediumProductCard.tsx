import { calculateDiscount } from "../../utils/discount";
import { Card, CardContent, CardHeader } from "../ui/card";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";
import { ProductCardProps } from "../../interfaces/product.types";

const MediumProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  discount,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const discountedPrice =
    Math.round(calculateDiscount(price, discount)) || price;

  return (
    <Card onClick={() => dispatch(openModal(id))} className="flex width-full">
      <CardHeader className="flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-contain p-2 transition-transform duration-300 lg:p-0 max-sm:h-66 md:h-52 xl:h-52 hover:scale-105"
        />
      </CardHeader>

      <CardContent className="flex flex-col gap-1 px-3 pt-1">
        <span className="text-sm font-medium truncate sm:text-base">
          {title}
        </span>
        <div className="flex items-center gap-2">
          {discount > 0 && (
            <span className="text-sm line-through text-zinc-400">${price}</span>
          )}
          <span className="text-lg font-semibold text-green-600 sm:text-xl">
            ${discountedPrice}
          </span>
          {discount > 0 && (
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full lg:px-1">
              {discount}% off
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MediumProductCard;
