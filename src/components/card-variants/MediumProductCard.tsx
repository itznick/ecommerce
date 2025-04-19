import { ProductCardProps } from "../../interfaces/product.types";
import ProductCard from "../product/product-card/ProductCard";

const MediumProductCard: React.FC<ProductCardProps> = (props) => {
  return <ProductCard {...props} variant="medium" />;
};

export default MediumProductCard;
