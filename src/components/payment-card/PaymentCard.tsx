import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PaymentCard = () => {
  const cart = useSelector((state: RootState) => state.cart);

  // Total price (without discount)
  const totalPrice = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Total discount amount in dollars
  const totalDiscount = cart.items.reduce(
    (acc, item) => acc + ((item.price * item.discount) / 100) * item.quantity,
    0
  );

  // Subtotal after applying discount
  const subtotal = totalPrice - totalDiscount;

  return (
    <div className="mt-4 w-[450px] bg-zinc-100 rounded-md p-4">
      <h1 className="text-center text-2xl">Order Summary</h1>
      <Separator className="w-full my-2" />
      <div className="flex mt-4 gap-30">
        <div className="flex flex-col">
          <span>Price:</span>
          <span>Delivery:</span>
          <span>Discount:</span>
        </div>
        <div className="flex flex-col">
          <span>${Math.round(totalPrice)}</span>
          <span className="text-green-400">Free</span>
          <span className="text-red-500">-${Math.round(totalDiscount)}</span>
        </div>
      </div>
      <Separator className="w-full my-2" />
      <div className="mt-4 flex gap-30 text-xl">
        <h1>Subtotal:</h1>
        <h1>${Math.round(subtotal)}</h1>
      </div>
      <div className="mt-4 flex">
        <Button className="bg-gray-800 hover:bg-gray-600 cursor-pointer">
          Proceed to Pay
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
