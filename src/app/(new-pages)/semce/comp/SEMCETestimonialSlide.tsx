"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SEMCETestimonialCard from "./SEMCETestimonialCard";

/* ✅ Correct Type */
export type SEMCEMemberType = {
  url: string;
  stu_name: string;
  stu_content: string;
};

/* ✅ Typed Array */
const SEMCEMembers: SEMCEMemberType[] = [
  {
    url: "/wp-content/semce/testimonials/soumitra.jpg",
    stu_name: "Soumitra Halder",
    stu_content:
      "At SEMCE, I didn’t just study journalism. I practiced it. From podcasts and ground reporting to real studio work and industry visits, every experience pushed me closer to the media world. Faculty mentorship gave me the confidence to step into the industry ready.",
  },
  {
    url: "/wp-content/semce/testimonials/riya-singh.jpg",
    stu_name: "Riya Singh ",
    stu_content:
      "SEMCE helped me find my voice. Interactive classes, real reporting, anchoring, and content creation sharpened my thinking and communication skills. The faculty guidance here goes beyond academics and genuinely helps you grow.",
  },
    {
      url: "/wp-content/semce/testimonials/gopi.jpg",
      stu_name: "Gopi Balkoti",
      stu_content:
        "Getting a paid internship in my first year itself changed everything for me. SEMCE focuses on real exposure, not just theory. The support from faculty and hands-on learning helped me build confidence and clarity about my career.”",
    },
    {
      url: "/wp-content/semce/testimonials/asalan.jpg",
      stu_name: "Arsalan Sahib",
      stu_content:
        "The learning environment at SEMCE pushes you to create, experiment, and think beyond classrooms. With constant workshops, practical exposure, and supportive faculty, I’ve grown both creatively and professionally.",
    },
    {
      url: "/wp-content/semce/testimonials/adityaraj.jpg",
      stu_name: "Aditya Raj",
      stu_content:
        "SEMCE’s focus on practical, industry-relevant learning helped me build confidence and sharpen my investigative skills. The faculty here feel more like mentors than teachers, and my vision as a storyteller is now crystal clear.",
    },
];

const SEMCETestimonialSlide = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      opts={{ align: "start", loop: true }}
      className="w-full overflow-visible"
    >
      <CarouselContent className="pb-24 md:pb-40 overflow-visible">
        {SEMCEMembers.map((item, index) => (
          <CarouselItem
            key={index}
            className="
              basis-full
              md:basis-1/2
              lg:basis-1/3
              px-4 md:px-10
              overflow-visible
            "
          >
            {/* ✅ Pass props */}
            <SEMCETestimonialCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SEMCETestimonialSlide;
