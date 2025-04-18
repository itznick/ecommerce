import { calculateDiscount } from "../../utils/discount";
import { Card, CardContent, CardHeader } from "../ui/card";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modalSlice";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  discount: number;
}

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
    <Card onClick={() => dispatch(openModal(id))} className="width-full flex">
      <CardHeader className="flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="
            object-contain p-2 lg:p-0
            max-sm:h-66 md:h-52 xl:h-52
            transition-transform duration-300 hover:scale-105
          "
        />
      </CardHeader>

      <CardContent className="flex flex-col px-3 pt-1 gap-1">
        <span className="truncate text-sm sm:text-base font-medium">
          {title}
        </span>
        <div className="flex items-center gap-2">
          {discount > 0 && (
            <span className="text-zinc-400 line-through text-sm">${price}</span>
          )}
          <span className="text-lg sm:text-xl font-semibold text-green-600">
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
