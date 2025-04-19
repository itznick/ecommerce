import { ProductCardProps } from "../../interfaces/product.types";
import ProductCard from "../product/product-card/ProductCard";

const SmallProductCard: React.FC<ProductCardProps> = (props) => {
  return <ProductCard {...props} variant="small" />;
};

export default SmallProductCard;
