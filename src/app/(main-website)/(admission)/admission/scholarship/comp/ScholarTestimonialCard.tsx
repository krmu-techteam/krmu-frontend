"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  course: string;
  content: string;
};

const ScholarTestimonialCard = ({ image, name, course, content }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 220;

  return (
    <div className="p-[30px] bg-[#051630] rounded-[32px]">
      <div className="flex justify-center mb-5">
        <Image
          src={image}
          width={126}
          height={126}
          alt={name}
          className="rounded-full w-[126px] h-[126px] object-cover"
        />
      </div>

      <div className="text-center text-white italic">
        <p>
          {expanded ? content : content.slice(0, limit) + "..."}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white text-sm mt-2 underline"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>

        <div className="flex justify-center flex-col mt-5 not-italic">
          <p className="font-semibold">{name}</p>
          <p>{course}</p>
        </div>
      </div>
    </div>
  );
};

export default ScholarTestimonialCard;
