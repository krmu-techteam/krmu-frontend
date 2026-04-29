"use client";
import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  slideimages: StrapiMedia[];
};

const BeyondClassroomSlider = ({ slideimages }: Props) => {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex animate-marquee">
        {/* Original slides */}
        <div className="relative w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/4)] mx-2 h-[336px] flex-shrink-0 rounded-xl overflow-hidden">
          <Image
            src={`https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1234567_jpg_2_b305571e23.jpeg`}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        {slideimages.map((img) => (
          <div
            key={img.id}
            className="relative w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/4)] mx-2 h-[336px] flex-shrink-0 rounded-xl overflow-hidden"
          >
            <Image
              src={`${STRAPI_URL}${img.url}`}
              alt={img.alternativeText || `Beyond ${img.id}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Duplicate slides for seamless loop */}
        {slideimages.map((img) => (
          <div
            key={`dup-${img.id}`}
            className="relative w-full sm:w-[calc(100%/3)] lg:w-[calc(100%/4)] h-[336px] flex-shrink-0 rounded-xl overflow-hidden"
          >
            <Image
              src={`${STRAPI_URL}${img.url}`}
              alt={img.alternativeText || `Beyond duplicate ${img.id}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeyondClassroomSlider;
