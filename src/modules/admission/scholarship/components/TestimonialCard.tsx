"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  course: string;
  content: string;
};

const TestimonialCard = ({ image, name, course, content }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 220;

  return (
    <div className="p-[30px] rounded-[4px] border-1 border-[#0568c4]/80">
        {/* write card gra */}
      <div className="flex justify-center mb-5">
        <Image
          src={image}
          width={126}
          height={126}
          alt={name}
          className="rounded-full w-[126px] h-[126px] object-fill object-center border-4 border-[#0568c4]/80"
          unoptimized
        />
      </div>

      <div className="text-center font-poppins text-white italic">
        <p>
          {expanded ? content : content.slice(0, limit) + "..."}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-white cursor-pointer font-poppins text-sm mt-2 underline"
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

export default TestimonialCard;
