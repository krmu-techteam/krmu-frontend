import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import POSTGraduationSlide from "./POSTGraduationSlide";

const POSTGraduateSection = () => {
  const items = [
    {
      id: 1,
      title: "Long form feature stories, investigations and explainers",
      imgURL: "/orange-card.webp",
    },
    {
      id: 2,
      title: "Long form feature stories, investigations and explainers",
      imgURL: "/orange-card.webp",
    },
    {
      id: 3,
      title: "Long form feature stories, investigations and explainers",
      imgURL: "/orange-card.webp",
    },
    {
      id: 4,
      title: "Long form feature stories, investigations and explainers",
      imgURL: "/orange-card.webp",
    },
    {
      id: 5,
      title: "Long form feature stories, investigations and explainers",
      imgURL: "/orange-card.webp",
    },
  ];
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2  lg:basis-1/3">
            <POSTGraduationSlide title={item.title} imgURL={item.imgURL} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default POSTGraduateSection;
