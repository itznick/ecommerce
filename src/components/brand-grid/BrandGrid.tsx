import { brands } from "../../data/brands";

const BrandGrid = () => {
  return (
    <div className="relative w-full py-6 mx-1 overflow-hidden">
      <div className="flex w-max animate-scroll">
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="flex flex-col items-center mx-4">
            <img
              src={brand.image}
              alt={brand.name}
              height={80}
              width={80}
              className="object-contain cursor-grab"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandGrid;
