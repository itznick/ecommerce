import Header from "../components/header/Header";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/empty-cart/EmptyCart";
import { CartItems } from "../components/cart/cart-items/CartItems";
import { PaymentSummary } from "../components/payment/payment-summary/PaymentSummary";
import ProductDetailModal from "../components/product/product-detail-modal/ProductDetailModal";
import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";

const Cart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full mt-8">
      <Header />
      <ProductDetailModal />

      <div className="flex flex-col gap-4 mt-10">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <Button
              className="flex items-center justify-between gap-2 px-4 py-3 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all duration-300 mx-auto mt-2"
              onClick={() => navigate("/")}
            >
              <MoveLeft />
              Continue Shopping
            </Button>
            <CartItems />
            <PaymentSummary />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
