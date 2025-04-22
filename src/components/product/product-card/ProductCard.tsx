import { calculateDiscount } from "../../../utils/discount";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { openModal } from "../../../redux/slices/modalSlice";
import { ProductCardPropsExtended } from "../../../interfaces/product.types";
import { DiscountBadge } from "../../../shared/discount-badge/DiscountBadge";

const getDiscountedPrice = (price: number, discount: number | undefined) => {
  return discount ? Math.round(calculateDiscount(price, discount)) : price;
};

const ProductCard: React.FC<ProductCardPropsExtended> = ({
  id,
  title,
  image,
  price,
  discount,
  variant = "small",
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const discountedPrice = getDiscountedPrice(price, discount);

  const isDiscounted = discount && discount > 0;

  const cardClassName =
    variant === "small"
      ? "flex items-center justify-center gap-4 rounded-md cursor-pointer"
      : "flex w-full";
  const imageClassName =
    variant === "small"
      ? "object-contain p-2 transition duration-300 hover:scale-110"
      : "object-contain p-2 transition-transform duration-300 lg:p-0 max-sm:h-66 md:h-52 xl:h-52 hover:scale-105";

  return (
    <Card onClick={() => dispatch(openModal(id))} className={cardClassName}>
      <CardHeader className="flex items-center justify-center">
        <img
          src={image}
          alt={title || "Product image"}
          className={imageClassName}
          title={title}
          loading="lazy"
        />
      </CardHeader>
      <CardContent className="flex flex-col justify-center w-full p-0 px-1 mt-3">
        <span className="w-full px-2 mb-1 text-sm font-medium truncate sm:text-base">
          {title || "No Title Available"}
        </span>
        <div className="flex items-center gap-2 px-2">
          {isDiscounted && (
            <span className="text-sm line-through text-zinc-400">${price}</span>
          )}
          <div className="text-xl font-semibold">
            <span className="text-green-500">$</span>
            {discountedPrice}
          </div>
          {isDiscounted && <DiscountBadge discount={discount} />}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
