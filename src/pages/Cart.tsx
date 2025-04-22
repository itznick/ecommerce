import Header from "../components/header/Header";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/empty-cart/EmptyCart";
import { CartItems } from "../components/cart/cart-items/CartItems";
import { PaymentSummary } from "../components/payment/payment-summary/PaymentSummary";

const Cart = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex flex-col items-center w-full mt-8">
      <Header />
      <div className="flex flex-col gap-4 mt-10 max-xl:flex-col">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartItems />
            <PaymentSummary />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
