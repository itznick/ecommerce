import { calculateDiscount } from "../../utils/discount";
import { Card, CardContent, CardHeader } from "../ui/card";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  discount: number;
  category?: string;
}

const SmallProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  price,
  discount,
}) => {
  return (
    <Card className="rounded-md flex flex-1 items-center justify-center gap-4">
      <CardHeader className="flex-col items-center justify-center">
        <img
          src={image}
          alt={title}
          className="object-contain p-2 cursor-pointer hover:scale-115 duration-300 transition"
        />
      </CardHeader>
      <CardContent className=" w-full flex flex-col p-0 px-1 mt-3 justify-center">
        <span className="w-full truncate text-sm font-medium px-2 mb-1">{title}</span>
        <div className="flex items-center gap-2 px-2">
          <span className="text-zinc-400 line-through text-sm">{price}</span>
          <div className="text-xl font-semibold">
            <span className="text-green-500">$</span>
            {Math.round(calculateDiscount(price, discount))}
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-red-500 text-white text-[10px] h-5 w-5 rounded-full text-center flex justify-center items-center">
              {discount}%
            </span>
            off
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmallProductCard;
