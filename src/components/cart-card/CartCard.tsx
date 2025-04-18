import { calculateDiscount } from "../../utils/discount";
import { SquareMinus, SquarePlus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Button } from "../ui/button";
import {
  incrementQuantity,
  decrementQuantity,
  clearItemFromCart,
} from "../../redux/slices/cartSlice";
import { addNotification } from "../../redux/slices/notificationSlice";

const CartCard = () => {
  const cartItem = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveItem = (itemId: number, itemTitle: string) => {
    dispatch(clearItemFromCart({ id: itemId }));
    dispatch(
      addNotification({
        id: itemId,
        title: itemTitle,
        message: "Item removed from cart",
        type: "removed",
      })
    );
  };

  const handleIncrement = (itemId: number) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrement = (itemId: number) => {
    dispatch(decrementQuantity({ id: itemId }));
  };

  return (
    <div>
      {cartItem.items.map((item) => {
        return (
          <div
            key={item.id}
            className="border w-[950px] flex justify-between items-center px-4 py-2 gap-9 mt-4 shadow-md rounded-md"
          >
            <div className="flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain w-48 h-48"
              />
            </div>
            <div>
              <div>{item.title}</div>
              <div className="flex gap-2 text-zinc-500">
                <div className="flex flex-col">
                  <span>Price:</span>
                  <span>Color:</span>
                </div>
                <div className="flex flex-col">
                  <span>
                    ${Math.round(calculateDiscount(item.price, item.discount))}
                  </span>
                  <span className="capitalize">{item.color}</span>
                </div>
              </div>
              <span className="text-green-500">In Stock</span>
              <div className="flex mt-2 items-center justify-between">
                <div className="flex gap-2 mt-2 items-center ">
                  <span>Qty:</span>
                  <div className="flex gap-2 items-center">
                    <Button
                      variant={"ghost"}
                      className="cursor-pointer w-12 h-12"
                      onClick={() => handleDecrement(item.id)}
                      disabled={item.quantity === 1}
                    >
                      <SquareMinus />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      variant={"ghost"}
                      className="cursor-pointer w-12 h-12"
                      onClick={() => handleIncrement(item.id)}
                    >
                      <SquarePlus />
                    </Button>
                  </div>
                </div>
                <div className="cursor-pointer flex gap-2">
                  <Button
                    variant={"destructive"}
                    className="h-6 cursor-pointer flex items-center justify-center hover:bg-red-700"
                    onClick={() => handleRemoveItem(item.id, item.title)}
                  >
                    <Trash2 />
                    <span>Remove</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartCard;
