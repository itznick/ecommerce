interface SquareGridProps {
  image: string;
}

const SquareGrid: React.FC<SquareGridProps> = ({ image }) => {
  return (
    <img
      src={image}
      alt="Product"
      height={250}
      width={250}
      className="object-contain p-2 m-1 transition duration-300 cursor-pointer hover:scale-105 false"
    />
  );
};

export default SquareGrid;
