import ElevateSlide from "./ElevateSlide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const homeVibrantEventSlider = [
  {
    id: 1,
    imgUrl: "/wp-content/home2/vibrant/1.webp",
    alt: "Event",
  },
  {
    id: 2,
    imgUrl: "/wp-content/home2/vibrant/2.webp",
    alt: "Event",
  },
  {
    id: 3,
    imgUrl: "/wp-content/home2/vibrant/3.webp",
    alt: "Event",
  },
  {
    id: 4,
    imgUrl: "/wp-content/home2/vibrant/rj.webp",
    alt: "Event",
  },
  {
    id: 5,
    imgUrl: "/wp-content/home2/vibrant/5.webp",
    alt: "Event",
  },
  {
    id: 6,
    imgUrl: "/wp-content/home2/vibrant/6.webp",
    alt: "Event",
  },
  {
    id: 7,
    imgUrl: "/wp-content/home2/vibrant/nora.webp",
    alt: "Event",
  },
  {
    id: 8,
    imgUrl: "/wp-content/home2/vibrant/dj.webp",
    alt: "Event",
  },
];

const ElevateSlider = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full lg:px-5 xl:px-10"
      >
        <CarouselContent>
          {homeVibrantEventSlider.map((item) => (
            <CarouselItem key={item.id} className="sm:basis-1/2 xl:basis-1/3">
              <ElevateSlide imgUrl={item.imgUrl} alt={item.alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </>
  );
};

export default ElevateSlider;
