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
import BannerSkeleton from "./BannerSkeleton";

const Banner = () => {
  return (
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id} className="basis-full">
            <div className="px-2 sm:px-4">
              <Card className="flex justify-center border-none rounded-md shadow-none ">
                <Img
                  src={[banner.url]}
                  alt={banner.title}
                  className="object-cover w-full h-auto rounded-md lg:max-h-96"
                  role="img"
                  loader={<BannerSkeleton />}
                />
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 ml-6 -translate-y-1/2 max-md:hidden top-1/2" />
      <CarouselNext className="absolute right-0 mr-6 -translate-x-1/2 max-md:hidden top-1/2" />
    </Carousel>
  );
};

export default Banner;
