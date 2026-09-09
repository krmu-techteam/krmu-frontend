"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CDCTeamCard, { CDCTeamMember } from "../../common/cards/CDCTeamCard";

const cdcTeam: CDCTeamMember[] = [
  {
    id: 1,
    name: "Dr. Vibha Thakur",
    designation: "Director | Career Development Centre",
    email: "director.cdc@krmangalam.edu.in",
    image: "/placements/cdc-team/vibha-thakur.webp",
  },
  {
    id: 2,
    name: "Jharna Jagtiiani",
    designation: "Senior Manager",
    email: "jharanvijay.jagtiani@krmangalam.edu.in",
    image: "/placements/cdc-team/jharna-jagtiani.webp",
  },
  {
    id: 3,
    name: "Charu Gola",
    designation: "Assistant Manager - CDC",
    email: "charu.gola@krmangalam.edu.in",
    image: "/placements/cdc-team/charu-gola.webp",
  },
  {
    id: 4,
    name: "Sreejita Saha",
    designation: "Manager- Career Development Centre",
    email: "sreejita.saha@krmangalam.edu.in",
    image: "/placements/cdc-team/sreejita-saha.webp",
  },
  {
    id: 5,
    name: "Sreejita Saha",
    designation: "Manager- Career Development Centre",
    email: "sreejita.saha@krmangalam.edu.in",
    image: "/placements/cdc-team/sreejita-saha.webp",
  },
];

const CDCTeam = () => {
  return (
    <section className="bg-[#fdfaf5] px-5 py-12 sm:py-16 md:py-20 lg:py-24 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header */}
          <div
            className="
              mb-8
              flex
              flex-col
              gap-3
              sm:mb-10
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <h2
              className="
                font-newsreader
                text-3xl
                font-medium
                leading-none
                text-[#001836]
                sm:text-4xl
                md:text-5xl
                lg:text-[55px]
              "
            >
              Meet the CDC team
            </h2>

            <p
              className="
                font-poppins
                text-xs
                leading-5
                text-[#333]
                sm:text-sm
                md:text-right
              "
            >
              Guiding students from enrollment to employment.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative px-0 sm:px-8 lg:px-0">
            <CarouselContent className="-ml-4">
              {cdcTeam.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="
        basis-full
        pl-4
        sm:basis-1/2
        lg:basis-1/4
      "
                >
                  <CDCTeamCard member={member} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Previous */}
            <CarouselPrevious
              className="
                absolute
                -left-3
                top-[105px]
                z-20
                size-7
                translate-y-0
                border-0
                bg-[#001836]
                text-white
                shadow-none
                hover:bg-[#001836]
                hover:text-white
                sm:-left-2
                sm:top-[115px]
                md:size-8
                lg:-left-8
              "
            />

            {/* Next */}
            <CarouselNext
              className="
                absolute
                -right-3
                top-[105px]
                z-20
                size-7
                translate-y-0
                border-0
                bg-[#001836]
                text-white
                shadow-none
                hover:bg-[#001836]
                hover:text-white
                sm:-right-2
                sm:top-[115px]
                md:size-8
                lg:-right-8
              "
            />
          </div>

          {/* Bottom Border */}
          <div className="mt-10 border-b border-[#d8d5d0] sm:mt-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default CDCTeam;
