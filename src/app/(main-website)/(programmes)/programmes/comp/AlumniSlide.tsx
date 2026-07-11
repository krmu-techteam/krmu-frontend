import { STRAPI_URL } from "@/app/constant";
import { ProgrammeAlumniData } from "@/lib/types/programme";
import Image from "next/image";

type Props = {
  item: ProgrammeAlumniData;
};

const AlumniSlide = ({ item }: Props) => {


  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start h-full">
      {/* Left side: Image and Mobile Details */}
      <div className="flex flex-col items-center shrink-0 w-full md:w-[140px]">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[3px] border-white/10 group-hover:border-[#00AEEF]/50 transition-colors duration-500 shadow-xl mb-4 relative p-1">
          <div className="w-full h-full rounded-full overflow-hidden relative bg-[#04101A]">
            <Image
              src={`${STRAPI_URL}${item?.alumni_img?.url}`}
              fill
              alt={item?.name || "Alumni"}
              className="object-cover object-top"
            />
          </div>
        </div>
        
        {/* Mobile-only name and qualification */}
        <div className="text-center md:hidden w-full mb-4">
          <h6 className="font-semibold text-white text-lg font-poppins">{item?.name}</h6>
          <span className="text-[#00AEEF] text-sm font-medium tracking-wide">{item?.qualification}</span>
        </div>
      </div>

      {/* Right side: Content and Desktop Details */}
      <div className="flex flex-col flex-1 h-full justify-between">
        <div className="relative">
          <svg className="absolute -top-4 -left-4 w-8 h-8 text-white/10 rotate-180" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-sm md:text-base text-white/80 font-light leading-relaxed font-poppins italic relative z-10 pt-2 line-clamp-6">
            "{item?.content}"
          </p>
        </div>
        
        <div className="hidden md:flex items-end justify-between mt-8 border-t border-white/5 pt-4">
          <div className="flex flex-col">
            <h6 className="font-semibold text-white text-[17px] font-poppins tracking-wide group-hover:text-[#00AEEF] transition-colors">{item?.name}</h6>
            <span className="text-[#00AEEF]/90 text-sm font-medium">{item?.qualification}</span>
          </div>
          {item?.review_img?.url && (
            <div className="shrink-0 ml-4 opacity-80 group-hover:opacity-100 transition-opacity">
              <Image
                src={`${STRAPI_URL}${item?.review_img?.url}`}
                width={120}
                height={22}
                alt="Rating"
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniSlide;
