"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const deans = [
  {
    name: "Mr. Pranav Roach",
    role: "Hughes Network Systems India Limited",
    desg: "President",
    img: "/advisory/pranav.webp",
  },
  {
    name: "Prof. Kavi Arya",
    role: "Department of Computer Science IIT Bombay",
    desg: "Professor",
    img: "/advisory/kavi-arya.webp",
  },
  {
    name: "Mr. Sunil Sethi",
    role: "Fashion Design Council of India",
    desg: "Chairman",
    img: "/advisory/sunil-sethi.webp",
  },
  {
    name: "Prof. Umesh Rai",
    role: "Vice Chancellor, Jammu University Former Director, South Campus",
    desg: "Professor, Department of Zoology, University of Delhi",
    img: "/advisory/umesh.webp",
  },
  {
    name: "Mr. Arun Kapur",
    role: "Royal Academy Bhutan Director, Vasant Valley School Vasant Kunj",
    desg: "Director",
    img: "/advisory/arun.webp",
  },
  {
    name: "Ms. Gunmeet Bindra",
    role: "Welham's Boy's School, Dehra Dun",
    desg: "Principal",
    img: "/advisory/gunmeet.webp",
  },
  {
    name: "Dr. Hemlata Reddy",
    role: "Sri Venkateswara College, University of Delhi",
    desg: "Principal",
    img: "/advisory/hemlata.webp",
  },
  {
    name: "Dr. Suman Sharma",
    role: "Lady Shriram College",
    desg: "Principal",
    img: "/advisory/suman.webp",
  },
  {
    name: "Mr. Vinod Sood",
    role: "Hughes Systique",
    desg: "CEO",
    img: "/advisory/vinod.webp",
  },
  {
    name: "Prof. Malashri Lal",
    role: "Academics,Dean of Colleges, Former HOD English",
    desg: "University of Delhi Formerly Dean",
    img: "/advisory/malashri.webp",
  },
  {
    name: "Prof. S. G. Badrinath",
    role: "IIM-Bangalore Canara Bank Chair Banking and Finance Chair Centre for Capital Markets and Risk Management",
    desg: "",
    img: "/advisory/badri.webp",
  },
  {
    name: "Mr. Pallav Sinha",
    role: "Fullerton Securities Founder Merajob.in",
    desg: "Former CEO",
    img: "/advisory/pallav.webp",
  },
  {
    name: "Mr. Vikram Atal",
    role: "U.S. Bank Holding Company Senior Advisor- Mckinsey Consulting and Goldman Sachs",
    desg: "",
    img: "/advisory/vikram.webp",
  },
  {
    name: "Prof. Jack Copeland",
    role: "Turing Centre at the Swiss Federal Institute of Technology (ETH), Zurich, Switzerland Distinguished Professor of Philosophy, University of Canterbury, New Zealand and Co-Founder and Co-Director",
    desg: "",
    img: "/advisory/jack.webp",
  },
  {
    name: "Prof. Sunita Singh Sen Gupta",
    role: "Faculty of Management Studies, University of Delhi.",
    desg: "Professor (Ph.D.)",
    img: "/advisory/sunita.webp",
  },
  {
    name: "Mr. Pawan Jaggi",
    role: "ARSD College",
    desg: "University of Delhi Chairman",
    img: "/advisory/pawan.webp",
  },
  {
    name: "Prof. Madan M. Chaturvedi",
    role: "Department of Zoology, University of Delhi",
    desg: "HOD",
    img: "/advisory/madan.webp",
  },
  {
    name: "Prof. Anita Sharma",
    role: "K.R. Mangalam University, Gurugram",
    desg: "Professor-Chinese and Ex. Pro Vice-Chancellor",
    img: "/advisory/anita.webp",
  },
  {
    name: "Dr. Pooja Sharma",
    role: "Medanta Institute of Education and Research",
    desg: "Senior Scientist",
    img: "/advisory/pooja.webp",
  },
];

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";


const AdvisoryCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative px-4 md:px-0">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {deans.map((dean, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/5"
            >
              <div
                className="group relative flex flex-col bg-[#0b1a27] rounded-[3px] border-[1px] border-transparent hover:border-[#00A0E3] transition-all duration-300 h-full"
              >
                {/* Person Image */}
                <div className="w-full h-[220px] sm:h-[260px] p-3">
                  <div className="w-full h-full relative overflow-hidden rounded-[8px]">
                    <Image
                      src={dean.img}
                      alt={dean.name}
                      fill
                      className="object-center"
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 flex flex-col flex-grow text-left">
                  <h5 className="text-[18px] sm:text-[20px] font-serif font-semibold text-white leading-tight mb-3">
                    {dean.name}
                  </h5>
                  <p className="text-[13px] font-poppins sm:text-[14px] text-white/90 font-medium leading-[1.4] mb-2">
                    {dean.role}
                  </p>
                  <p className="text-[13px] font-poppins sm:text-[14px] text-[#5AB9E5] font-normal leading-snug">
                    {dean.desg}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#00A0E3] w-6" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdvisoryCarousel;

// "use client";

// import { useState } from "react";
// import { STRAPI_URL } from "@/app/constant";
// import { Button } from "@/components/ui/button";
// import { Advisory } from "@/lib/api/facAdv";
// import Image from "next/image";

// type Props = {
//   data: Advisory[];
// };

// const ITEMS_PER_LOAD = 5;

// const AdvisorySlide = ({ data }: Props) => {
//   const [visibleCount, setVisibleCount] = useState(5);

//   if (!data || data.length === 0) return null;

//   const handleLoadMore = () => {
//     setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
//   };

//   return (
//     <>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 xl:gap-10">
//         {data.slice(0, visibleCount).map((item, i) => (
//           <div key={i} className="w-full text-center">
//             <div className="-z-10 rounded-tr-2xl">
//               <Image
//                 src={`${STRAPI_URL}${item?.faculty_img?.url}`}
//                 alt={item?.faculty_name || ""}
//                 width={264}
//                 height={295}
//                 className="w-full h-[295px] object-fill"
//                 unoptimized
//               />
//             </div>

//             <div className="p-10 h-[200px] text-white bg-[#051630] -mt-5 flex items-center justify-center flex-col">
//               <h5 className="text-2xl font-semibold">
//                 {item?.faculty_name}
//               </h5>
//               <p className="text-sm font-semibold text-center">
//                 {item?.faculty_card_desg}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {visibleCount < data.length && (
//         <div className="flex justify-center">
//           <Button
//             onClick={handleLoadMore}
//             className="text-[#051630] bg-[#f2f3f5] h-[50px] border border-[#051630] font-semibold text-base hover:bg-[#cb000d] hover:text-white mt-10"
//           >
//             Load More
//           </Button>
//         </div>
//       )}
//     </>
//   );
// };

// export default AdvisorySlide;
