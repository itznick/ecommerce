export interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  discount: number;
  category?: string;
}

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand?: string;
  model?: string;
  color?: string;
  category?: string;
  discount?: number;
  popular?: boolean;
}

export interface ProductCardPropsExtended extends ProductCardProps {
  variant?: "small" | "medium";
}
