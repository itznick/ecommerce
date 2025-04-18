import CartCard from "../components/cart-card/CartCard";
import Header from "../components/header/Header";
import PaymentCard from "../components/payment-card/PaymentCard";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import EmptyCart from "../components/empty-cart/EmptyCart";

const Cart = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex flex-col items-center w-full mt-20">
      <Header />
      <div className="flex">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex justify-between gap-4 max-xl:flex-col">
            <div>
              <h1 className="text-lg font-medium">Your Cart</h1>
              <CartCard />
            </div>
            <div>
              <span className="text-xl font-medium">Payment Summary</span>
              <PaymentCard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
