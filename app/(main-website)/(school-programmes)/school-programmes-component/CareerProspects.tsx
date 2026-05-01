import { STRAPI_URL } from "@/app/constant";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { CareerCard } from "@/lib/types/school-programme";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  btn: ButtonType;
  careerimg: StrapiMedia;
  careercards: CareerCard[];
};

const CareerProspects = ({
  heading,
  highlight,
  desc,
  btn,
  careerimg,
  careercards,
}: Props) => {
  return (
    <>
      <section className="prog-global-padding py-12 md:py-20 px-4 md:px-0">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-stretch gap-8">
            <div className="w-full xl:w-1/2 flex flex-col">
              <h3 className="text-4xl md:text-[42px] font-bold text-[#051630] mb-4 text-center sm:text-left leading-[1.1] tracking-tight">
                {heading} {highlight}
              </h3>

              <p className="mb-4 md:mb-8 leading-relaxed text-gray-600 text-lg text-center sm:text-left max-w-2xl">
                {desc}
              </p>

              <div className="flex-1 space-y-3 md:space-y-6">
                {careercards?.map((card) => (
                  <div 
                    key={card?.id} 
                    className="flex gap-5 md:gap-7 group"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg text-white bg-gradient-to-br from-[#0a41a1] to-[#0060aa] text-xl font-bold">
                        {card?.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl md:text-[22px] mb-2 text-[#051630]">
                        {card?.title}
                      </h4>
                      <p className="leading-relaxed text-gray-600 text-base md:text-lg text-left">
                        {card?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full xl:w-1/2 mb-5 sm:mb-0 flex">
              {careerimg?.url && (
                <div className="relative w-full">
                   <Image
                    src={`${STRAPI_URL}${careerimg?.url}`}
                    fill
                    className="object-contain"
                    alt={careerimg?.alternativeText || "Career Prospectus"}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto w-full flex justify-center mt-8 md:mt-12">
          {(btn?.buttonclass || btn?.buttonlink) && (
            <Link
              href={btn?.buttonlink || "#"}
              className={`text-white bg-[#db2a1a] hover:bg-[#c42518] px-6 py-3 flex items-center justify-center gap-3 max-w-xs w-full rounded-md font-bold cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group ${btn?.buttonclass}`}
            >
              <span>{btn?.buttontext}</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default CareerProspects;
