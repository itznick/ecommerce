import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { calculateCartTotals } from "../../../utils/cartUtils";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";

const Row = ({
  label,
  value,
  className = "",
}: {
  label: string;
  value: React.ReactNode;
  className?: string;
}) => (
  <div className="flex justify-between py-1">
    <span>{label}</span>
    <span className={className}>{value}</span>
  </div>
);

const PaymentCard = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const { totalPrice, totalDiscount, subtotal } =
    calculateCartTotals(cartItems);

  return (
    <div className="mt-4 w-[450px] max-sm:w-[300px] bg-zinc-100 rounded-md p-4">
      <h1 className="text-2xl text-center">Order Summary</h1>
      <Separator className="w-full my-2" />

      <div className="mt-4 space-y-2">
        <Row label="Price:" value={`$${Math.round(totalPrice)}`} />
        <Row label="Delivery:" value="Free" className="text-green-400" />
        <Row
          label="Discount:"
          value={`-$${Math.round(totalDiscount)}`}
          className="text-red-500"
        />
      </div>

      <Separator className="w-full my-4" />

      <Row label="Subtotal:" value={`$${Math.round(subtotal)}`} />

      <div className="flex mt-6">
        <Button className="bg-gray-800 cursor-pointer hover:bg-gray-600 w-full">
          Proceed to Pay
        </Button>
      </div>
    </div>
  );
};

export default PaymentCard;
