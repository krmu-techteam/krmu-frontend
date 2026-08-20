import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface FacultyCardProps {
  name: string;
  alt: string;
  desg: string;
  qual: string;
  imgUrl: string;
  linkedin: string;
  onOpenProfile: () => void;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  name,
  alt,
  desg,
  qual,
  imgUrl,
  linkedin,
  onOpenProfile,
}) => {
  return (
    <div className="relative group flex flex-col h-full w-full max-w-[280px] mx-auto border border-[#D0C6B1]/30 overflow-hidden transition-all duration-300 cursor-pointer rounded-[5px]">
      {linkedin && (
        <Link href={linkedin} target="_blank">
          <div className="absolute w-13 h-13 bg-[url(https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/8e9127f3a23f0410f6e38ad1af59850e5bb1f1df_9de1bd0ecf.png)] bg-cover bg-center right-1 top-1 z-99" />
        </Link>
      )}

      {/* Top Portrait Image Container */}
      <div className="relative w-full h-[260px] bg-[#E5DCC5] overflow-hidden flex items-center justify-center">
        <Image
          src={imgUrl}
          alt={alt || name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Bottom Info Container */}
      <div className="p-4 bg-[#F7F0E0] group-hover:bg-[#012D52] flex flex-col justify-between flex-1 transition-colors duration-300">
        <div>
          <h3 className="font-fraunces text-[18px] sm:text-[20px] font-bold text-[#002C51] group-hover:text-white transition-colors duration-300 leading-snug">
            {name}
          </h3>
          <p className="font-poppins text-[12px] font-semibold text-[#87601A] group-hover:text-[#E7C268] transition-colors duration-300 mt-1 uppercase tracking-wider">
            {desg}
          </p>
          <p className="font-poppins text-[13px] text-[#002C51]/80 group-hover:text-white/80 transition-colors duration-300 mt-2 line-clamp-2 leading-relaxed">
            {qual}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#D0C6B1]/40 group-hover:border-white/20 flex items-center justify-between">
          <button
            onClick={onOpenProfile}
            className="font-poppins text-[13px] font-semibold text-[#87601A] group-hover:text-[#E7C268] hover:underline transition-colors"
          >
            View Profile →
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
