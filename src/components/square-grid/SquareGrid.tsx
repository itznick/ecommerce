import { calculateDiscount } from "../../utils/discount";

interface SquareGridProps {
  image: string;
  title: string;
  price: number;
  discount: number;
}

const SquareGrid: React.FC<SquareGridProps> = ({
  image,
  title,
  price,
  discount,
}) => {
  return (
    <div>
      <img
        src={image}
        alt="Product"
        height={250}
        width={250}
        className="object-contain p-2 m-1 transition duration-300 cursor-pointer hover:scale-105 false"
      />
      <div className="flex flex-col items-center gap-2 px-2 w-full">
        <span className="px-8 overflow-hidden w-xs font-medium whitespace-nowrap text-ellipsis">
          {title}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium line-through">{price}</span>
          <span className="text-2xl font-semibold ">
            <span className="text-2xl text-green-400">$</span>
            {Math.round(calculateDiscount(price, discount))}
          </span>
          <span className="rounded-[50%] bg-red-600 p-0.5 text-xs text-white ">
            {discount}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default SquareGrid;
