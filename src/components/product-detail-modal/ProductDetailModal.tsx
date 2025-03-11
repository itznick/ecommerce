import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import {
  closeModal,
  selectModalId,
  selectModalOpen,
} from "../../redux/slices/modalSlice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from "../../services/api";
import { calculateDiscount } from "../../utils/discount";
import { Button } from "../ui/button";
import { addToCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { addNotification } from "../../redux/slices/notificationSlice";

const ProductDetailModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(selectModalOpen);
  const productId = useSelector(selectModalId);
  const navigate = useNavigate();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => (productId !== null ? fetchProductById(productId) : null),
    enabled: productId !== null,
  });

  if (!isOpen) return null;

  const isInCart = cartItems.some((item) => item.id === data?.id);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => !open && dispatch(closeModal())}
    >
      <DialogContent className="flex justify-between items-center w-[70vw] z-50 h-[80vh]">
        <DialogHeader>
          {isLoading && (
            <DialogTitle className="text-lg text-center">
              Loading...
            </DialogTitle>
          )}
          {isError && (
            <DialogTitle className="text-lg text-red-500 text-center">
              Failed to load product.
            </DialogTitle>
          )}
          {!isLoading && !isError && (
            <>
              <DialogTitle>
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="object-contain w-[900px] h-[450px] text-sm"
                />
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </>
          )}
        </DialogHeader>

        {!isLoading && !isError && data && (
          <div className="flex flex-col gap-2 px-8 w-full">
            <span className="font-medium text-xl">{data?.title}</span>
            <div className="flex items-center gap-2 px-2">
              {data.discount && (
                <span className="text-lg line-through text-zinc-400">
                  ${data?.price}
                </span>
              )}
              <div className="text-3xl font-semibold">
                <span className="text-green-500">$</span>
                {Math.round(calculateDiscount(data?.price, data?.discount)) ||
                  data.price}
              </div>
              <div className="flex items-center gap-1">
                {data.discount && (
                  <div className="flex items-center">
                    <span className="bg-red-500 text-white text-[10px]  h-5 w-5 rounded-full text-center flex justify-center items-center">
                      {data.discount}%
                    </span>
                    off
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-5 my-4 text-sm">
              <div className="flex flex-col">
                <span className="font-semibold">Brand:</span>
                <span className="font-semibold">Model:</span>
                <span className="font-semibold">Colors:</span>
              </div>
              <div className="flex flex-col">
                <span className="uppercase">{data?.brand}</span>
                <span className="uppercase">{data?.model}</span>
                <span className="uppercase">{data?.color}</span>
              </div>
            </div>
            <div>
              <span className="font-semibold mb-1 text-sm">
                About this product:
              </span>
              <span className="whitespace-break-spaces line-clamp-5 text-sm">
                {data?.description}
              </span>
            </div>
            <div className="mt-2">
              {isInCart ? (
                <Button
                  className="bg-green-500 hover:bg-green-700 cursor-pointer"
                  onClick={() => {
                    navigate("/cart");
                    dispatch(closeModal());
                  }}
                >
                  <ShoppingCart />
                  Go to Cart
                </Button>
              ) : (
                <Button
                  className="bg-orange-500 hover:bg-orange-700 cursor-pointer"
                  onClick={() => {
                    dispatch(addToCart(data));
                    dispatch(
                      addNotification({
                        id: data.id,
                        title: data.title,
                        message: "Added to cart successfully!",
                        type: "added",
                      })
                    );
                  }}
                >
                  <ShoppingCart />
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default ProductDetailModal;
