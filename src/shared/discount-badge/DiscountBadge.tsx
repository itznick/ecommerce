export const DiscountBadge = ({ discount }: { discount: number }) => {
  return (
    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full lg:px-1">
      {discount}% off
    </span>
  );
};
