export interface CartItem {
  id: number;
  title: string;
  price: number;
  discount: number;
  image: string;
  color: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  totalCount: number;
}
