import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { banners } from "../../data/banner";
import { Img } from "react-image";

const Banner = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="mt-10"
    >
      <CarouselContent className="">
        {banners.map((banner, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="px-1">
              <Card className="h-full max-h-96 flex justify-center">
                <Img
                  src={[banner.url]}
                  alt={banner.title}
                  className="h-auto max-h-96 w-full object-cover rounded-md"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2 ml-6" />
      <CarouselNext className="absolute top-1/2 right-0 -translate-x-1/2 mr-6" />
    </Carousel>
  );
};

export default Banner;
