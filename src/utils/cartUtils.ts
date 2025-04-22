import { CartItem } from "../interfaces/cart.types";

export const calculateCartTotals = (items: CartItem[]) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalDiscount = items.reduce(
    (acc, item) =>
      acc + ((item.price * (item.discount ?? 0)) / 100) * item.quantity,
    0
  );

  return {
    totalPrice,
    totalDiscount,
    subtotal: totalPrice - totalDiscount,
  };
};
