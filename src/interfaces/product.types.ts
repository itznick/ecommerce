export interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  discount: number;
  category?: string;
}

export interface ProductCardPropsExtended extends ProductCardProps {
  variant?: "small" | "medium";
}
