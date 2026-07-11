import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProgramCardType } from "../admission/PGType";
import ProgramCard from "./ProgramCard";

type Props = {
  data: ProgramCardType;
};

const ProgramCardSlide = ({ data }: Props) => {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="w-full">
      <CarouselContent>
        {data.map((program, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <ProgramCard
              image={program.image}
              title={program.title}
              description={program.description}
              format={program.format} 
              duration={program.duration}
              eligibility={program.eligibility}
              focus={program.focus}
              annualFee={program.annualFee}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="cursor-pointer testislidePrev" />
      <CarouselNext className="cursor-pointer testislideNext" />
    </Carousel>
  );
};

export default ProgramCardSlide;
