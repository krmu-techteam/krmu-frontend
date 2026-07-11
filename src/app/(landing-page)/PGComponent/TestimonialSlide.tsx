import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PGTestimonialsBlock } from "../admission/PGType";

type Props = {
  data: PGTestimonialsBlock;
};
const TestimonialSlide = ({ data }: Props) => {
  const { items } = data;
  return (
    <>
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {items &&
            items.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div
                  key={index}
                  className={`break-inside-avoid rounded-xl min-h-[245px] h-full p-6 ${
                    item.featured ? "text-white" : "text-black"
                  } ${item.color}`}
                >
                  {/* Brand */}
                  {item.brand && (
                    <p
                      className={`font-semibold mb-4 ${
                        item.featured ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.brand}
                    </p>
                  )}

                  {/* Text */}
                  <p
                    className={`text-sm leading-relaxed mb-6 italic ${
                      item.featured ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    “{item.text}”
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {/* <div className="w-9 h-9 rounded-full bg-gray-300 shrink-0" /> */}
                    <span
                      className={`text-sm ${
                        item.featured ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {item.author}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        {items?.length > 3 && (
          <>
            <CarouselPrevious className="cursor-pointer testislidePrev" />
            <CarouselNext className="cursor-pointer testislideNext" />
          </>
        )}
      </Carousel>
    </>
  );
};

export default TestimonialSlide;
