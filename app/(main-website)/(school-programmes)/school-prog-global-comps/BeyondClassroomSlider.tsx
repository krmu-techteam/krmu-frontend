"use client";
// import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  slideimages: StrapiMedia[];
};

const BeyondClassroomSlider = ({ slideimages }: Props) => {
  return (
    // <div className="relative w-full overflow-hidden py-10">
    //   <div className="flex animate-marquee">
    //     {/* Original slides */}
    //     <div className="relative w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/4)] mx-2 h-[336px] flex-shrink-0 rounded-xl overflow-hidden">
    //       <Image
    //         src={`https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1234567_jpg_2_b305571e23.jpeg`}
    //         alt=""
    //         fill
    //         className="object-cover"
    //       />
    //     </div>
    //     {slideimages.map((img) => (
    //       <div
    //         key={img.id}
    //         className="relative w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/4)] mx-2 h-[336px] flex-shrink-0 rounded-xl overflow-hidden"
    //       >
    //         <Image
    //           src={`${STRAPI_URL}${img.url}`}
    //           alt={img.alternativeText || `Beyond ${img.id}`}
    //           fill
    //           className="object-cover"
    //         />
    //       </div>
    //     ))}

    //     {/* Duplicate slides for seamless loop */}
    //     {slideimages.map((img) => (
    //       <div
    //         key={`dup-${img.id}`}
    //         className="relative w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/4)] h-[336px] flex-shrink-0 rounded-xl overflow-hidden"
    //       >
    //         <Image
    //           src={`${STRAPI_URL}${img.url}`}
    //           alt={img.alternativeText || `Beyond duplicate ${img.id}`}
    //           fill
    //           className="object-cover"
    //         />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <section
      className="pt-12 pb-5"
      id="recruiters"
      aria-label="Our prominent recruiters"
    >
      <div className="relative flex overflow-x-hidden ">
        <div className="flex animatee-marquee whitespace-nowrap gap-8 items-center">
          {[...slideimages, ...slideimages, ...slideimages].map((rec, i) => (
            <div key={i} className="flex-shrink-0 transition-all duration-300">
              <div className=" rounded-xl overflow-hidden">
                <Image
                  src={rec.url}
                  alt={rec.alternativeText || ``}
                  width={500}
                  height={366}
                  className="object-cover h-[336px]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default BeyondClassroomSlider;
