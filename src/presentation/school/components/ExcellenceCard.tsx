import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ExcellenceCardProps } from "@/features/school/types";;

 

export default function ExcellenceCard({
  title,
  btnLink,
  btnText,
  btnClass,
  gradientDirection,
}: ExcellenceCardProps) {
  const gradientClass =
    gradientDirection === "r"
      ? "bg-gradient-to-r from-[#061623] to-[#05345B]"
      : "bg-gradient-to-l from-[#061623] to-[#05345B]";

  return (
    <div
      className={`group font-poppins ${gradientClass} border border-[#1a3353] rounded-xl p-6 xl:p-10 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(5,52,91,0.5)]`}
    >
      <div className="flex-1 flex items-center justify-center mb-8">
        <h4 className="text-white text-xl sm:text-2xl xl:text-3xl font-medium leading-relaxed">
          {title}
        </h4>
      </div>

      {(btnLink || btnText) && (
        <Link
          href={btnLink || "#"}
          className={`inline-flex items-center gap-2 text-sm xl:text-base py-3.5 px-3.5 xl:px-8 text-white rounded-sm border border-white transition-all relative overflow-hidden group ${
            btnClass || ""
          }`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
          {btnText}
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      )}
    </div>
  );
}
