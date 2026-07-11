import Link from "next/link";
import { StudentWelfareSectionProps } from "../types";

const StudentWelfare = ({
  title,
  description,
  linkInfo,
}: StudentWelfareSectionProps) => {
  return (
    <div className="relative py-12 md:py-8 lg:py-16 font-poppins bg-[#071d3d] text-white flex-grow flex flex-col justify-center h-full transition-all duration-500 overflow-hidden group hover:bg-[#051938]">
      <div className="relative z-10 w-full text-center lg:text-left px-6 md:px-12 lg:px-20">
        <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
          {title}
        </h4>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-[800px]">
          {description}
        </p>
        <div>
          <Link
            href={linkInfo?.url || "#"}
            className="text-sm md:text-base py-3.5 px-10 text-[#071d3d] font-bold rounded-[4px] bg-white inline-block transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkInfo?.text}
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-white/30 transition-all duration-700 group-hover:w-full" />
    </div>
  );
};

export default StudentWelfare;
