interface ProductGridProps {
  image: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ image }) => {
  return (
    <img
      src={image}
      alt="Product"
      //   className="h-full w-full p-4 object-contain"
      className="h-full w-full object-contain p-2 m-1 hover:scale-105 transition false duration-300 cursor-pointer"
    />
  );
};

export default ProductGrid;
