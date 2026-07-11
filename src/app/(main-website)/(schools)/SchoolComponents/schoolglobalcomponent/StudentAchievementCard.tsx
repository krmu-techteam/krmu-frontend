"use client";

import { useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  info: string;
  achievementsImages: StrapiMedia[];
};

const StudentAchievementCard = ({ info, achievementsImages }: Props) => {
  const [readMore, setReadMore] = useState(false);

  const limit = 150; // characters
  const isLong = info?.length > limit;

  const textToShow = readMore ? info : info?.slice(0, limit);

  return (
    <div className="border border-[#e2e2e2] p-5 rounded-[5px]">
      <div className="mb-5 space-y-4">
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {achievementsImages &&
              achievementsImages?.map((image, i) => (
                <CarouselItem key={i}>
                  {image?.url ? (
                    <Image
                      src={`${STRAPI_URL}${image?.url}`}
                      width={443}
                      height={476}
                      alt=""
                      className="h-80 w-full object-contain"
                    />
                  ) : (
                    <Skeleton className="w-full h-80" />
                  )}
                </CarouselItem>
              ))}
          </CarouselContent>

          {achievementsImages && achievementsImages.length > 1 && (
            <>
              <CarouselPrevious className="left-0 rounded-none text-white bg-black cursor-pointer" />
              <CarouselNext className="right-0 rounded-none text-white bg-black cursor-pointer" />
            </>
          )}
        </Carousel>
      </div>

      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: textToShow,
          }}
          className="student_achiev_content"
        />

        {isLong && (
          <button
            className="text-red-600 cursor-pointer text-sm"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default StudentAchievementCard;
