import CartCard from "../components/cart-card/CartCard";
import Header from "../components/header/Header";
import PaymentCard from "../components/payment-card/PaymentCard";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import shopping from "../assets/shopping.png";
import { useNavigate } from "react-router-dom";
import { MoveLeft } from "lucide-react";

const Cart = () => {
  const cartItem = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full mt-20">
      <Header />
      <div className="flex">
        {cartItem.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 mt-20 text-center">
            <img
              src={shopping}
              alt="no items in cart"
              className="object-contain w-72"
            />
            <h1 className="mt-4 text-2xl">Your cart is empty</h1>
            <p className="mt-2 text-gray-500">
              Looks like you haven't added anything yet.
            </p>
            <button
              className="flex items-center justify-between gap-2 px-2 py-2 mt-4 text-white transition bg-orange-600 rounded-lg cursor-pointer hover:bg-orange-700"
              onClick={() => navigate("/")}
            >
              <MoveLeft />
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex justify-between gap-4 max-lg:flex-col">
            <div>
              <h1>Your Cart</h1>
              <CartCard />
            </div>
            <div>
              <span>Payment Summary</span>
              <PaymentCard />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
