import Image from "next/image";
import { useState } from "react";
import { AWARDS_DATA } from "../constants";

export const AwardCard = ({ card }: { card: (typeof AWARDS_DATA)[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-transparent text-center min-h-[350px] transition-all duration-300 relative flex flex-col justify-between items-center group">
      <div className="w-full flex flex-col items-center">
        {/* Cardless Image Container - height fits image perfectly */}
        <div className="w-full flex items-center justify-center relative mb-5 transition-transform duration-300 group-hover:scale-[1.03]">
          {/* Subtle Ambient Back-Glow on hover */}
          <div className="absolute inset-0 bg-[#0060aa]/0 group-hover:bg-[#0060aa]/5 rounded-[12px] blur-md transition-all duration-300 pointer-events-none" />

          <Image
            src={card.img}
            alt={card.title || card.fullText}
            width={300}
            height={300}
            className="w-full h-auto max-h-[300px] object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            unoptimized
          />
        </div>

        {/* Title - rendered only if it exists */}
        {card.title && (
          <h3 className="mt-2 font-serif text-[18px] font-bold text-white tracking-wide  ">
            {card.title}
          </h3>
        )}

        {/* Description Text */}
        <p className="text-[13px] text-white leading-relaxed font-poppins text-center px-1">
          {isExpanded ? card.fullText : card.shortText}
        </p>
      </div>

      {/* Action Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-white/80 hover:text-[#3388ff] text-[15px] font-normal font-poppins transition-colors duration-200 focus:outline-none hover:underline"
      >
        {isExpanded ? "Read less" : "Read more >"}
      </button>
    </div>
  );
};
