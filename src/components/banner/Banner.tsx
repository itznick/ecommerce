import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { banners } from "../../data/banner";

const Banner = () => {
  console.log(banners);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="w-full">
        {banners.map((banner, index) => (
          <CarouselItem key={index} className="basis-full">
            <div className="p-2">
              <Card className="h-auto max-h-96 flex justify-center">
                <img
                  src={banner.url}
                  alt={banner.title}
                  className="h-auto max-h-96 w-full object-cover rounded-md"
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-0 -translate-y-1/2" />
      <CarouselNext className="absolute top-1/2 right-0 -translate-x-1/2" />
    </Carousel>
  );
};

export default Banner;
