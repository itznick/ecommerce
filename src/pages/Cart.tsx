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
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <div className="flex">
        {cartItem.items.length === 0 ? (
          <div className="text-center flex flex-col items-center gap-4 justify-center mt-20">
            <img
              src={shopping}
              alt="no items in cart"
              className="object-contain w-72"
            />
            <h1 className="text-2xl mt-4">Your cart is empty</h1>
            <p className="text-gray-500 mt-2">
              Looks like you haven't added anything yet.
            </p>
            <button
              className="mt-4 px-2 py-2 bg-orange-600 text-white rounded-lg flex items-center justify-between gap-2 hover:bg-orange-700 transition cursor-pointer"
              onClick={() => navigate("/")}
            >
              <MoveLeft />
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex justify-between gap-4 max-sm:flex-col">
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
