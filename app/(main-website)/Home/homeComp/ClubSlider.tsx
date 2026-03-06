import ClubSlide from "./ClubSlide";
import ElevateSlide from "./ElevateSlide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const homeClubSocietiesSlider = [
  {
    id: 1,
    imgUrl: "/wp-content/home2/clubsocieties/1.webp",
    alt: "Event",
  },
  {
    id: 2,
    imgUrl: "/wp-content/home2/clubsocieties/club2.webp",
    alt: "Event",
  },
  {
    id: 3,
    imgUrl: "/wp-content/home2/clubsocieties/3.webp",
    alt: "Event",
  },
  {
    id: 4,
    imgUrl: "/wp-content/home2/clubsocieties/club4.webp",
    alt: "Event",
  },
];

const ClubSlider = () => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full mt-5 md:mt-0 md:px-10"
      >
        <CarouselContent>
          {homeClubSocietiesSlider.map((item) => (
            <CarouselItem key={item.id}>
              <ClubSlide imgUrl={item.imgUrl} alt={item.alt} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </>
  );
};

export default ClubSlider;
