import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FacultyCard from "./FacultyCard";

const TeachYouMember = [
  {
    url: "/semce/teachyou/amit-chawla.jpg",
    name: "Prof. (Dr.) Amit Chawla",
    desg: "Dean, SEMCE",
  },
  {
    url: "/semce/teachyou/yashika.jpg",
    name: "Prof. Yashika Khandelwal",
    desg: "Designation",
  },
  {
    url: "/semce/teachyou/trilok.jpg",
    name: "Prof. Trilok Singh",
    desg: "Designation",
  },
];

const FacultySlide = () => {
  // const plugin = useRef(
  //   Autoplay({
  //     delay: 3000,
  //     stopOnInteraction: false,
  //   }),
  // );

  return (
    <section className="w-full py-5 md:py-16">
      <div className="max-w-[1400px] mx-auto">
        <Carousel
          // plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "start",
          }}
          className="w-full"
        >
          {/* IMPORTANT: gap instead of negative margin */}
          <CarouselContent className="lg:-mr-20 gap-6">
            {/* Desktop 3 | Tablet 2 | Mobile 1 */}
            {TeachYouMember.map((item, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/3">
                <FacultyCard
                  url={item?.url}
                  name={item?.name}
                  desg={item?.desg}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FacultySlide;
