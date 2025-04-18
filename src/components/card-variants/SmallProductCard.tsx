import { calculateDiscount } from "../../utils/discount";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { openModal } from "../../redux/slices/modalSlice";
import { ProductCardProps } from "../../interfaces/product.types";

const SmallProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  discount,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card
      className="flex items-center justify-center flex-1 gap-4 rounded-md"
      key={id}
      onClick={() => dispatch(openModal(id))}
    >
      <CardHeader className="flex-col items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-contain p-2 transition duration-300 cursor-pointer hover:scale-115"
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-center w-full p-0 px-1 mt-3">
        <span className="w-full px-2 mb-1 text-sm font-medium truncate">
          {title}
        </span>
        <div className="flex items-center gap-2 px-2">
          {discount && (
            <span className="text-sm line-through text-zinc-400">{price}</span>
          )}
          <div className="text-xl font-semibold">
            <span className="text-green-500">$</span>
            {Math.round(calculateDiscount(price, discount)) || price}
          </div>
          <div className="flex items-center gap-1">
            {discount && (
              <div className="flex items-center gap-1">
                <span className="bg-red-500 text-white text-[10px] h-5 w-5 rounded-full text-center flex justify-center items-center">
                  {discount}%
                </span>
                off
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmallProductCard;
