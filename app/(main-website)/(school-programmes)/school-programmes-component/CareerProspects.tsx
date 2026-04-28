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
              <h3 className="text-4xl md:text-[40px] font-semibold text-black mb-5 text-center sm:text-left">
                {heading} {highlight}
              </h3>

              <p className="mb-4 md:mb-6 leading-relaxed text-md text-justify md:text-center">{desc}</p>

              <div className="flex-1">
                {careercards?.map((card) => (
                  <div key={card?.id} className="flex gap-3 md:gap-5 mb-4 md:mb-8">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center w-10 h-8 md:w-12 md:h-10 rounded-md text-white bg-[#0a41a1] text-lg font-semibold shadow-sm text-justify md:text-left">
                        {card?.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-2xl mb-1 text-gray-900">{card?.title}</h4>
                      <p className="leading-relaxed text-gray-600 text-base md:text-md text-justify md:text-left ">{card?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full xl:w-1/2 mb-5 sm:mb-0 flex items-center justify-center">
              {careerimg?.url && (
                <Image
                  src={`${STRAPI_URL}${careerimg?.url}`}
                  width={660}
                  height={600}
                  className="object-contain w-full h-auto rounded-[3px]"
                  alt={careerimg?.alternativeText || "Career Prospectus"}
                />
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto w-full flex justify-center mt-8 md:mt-12">
          {(btn?.buttonclass || btn?.buttonlink) && (
            <Link
              href={btn?.buttonlink || "#"}
              className={`text-white bg-[#db2a1a] px-6 py-3 flex items-center justify-around max-w-3xs w-full rounded-md font-semibold cursor-pointer ${btn?.buttonclass}`}
            >
              <span>{btn?.buttontext}</span>
              <ArrowRight />
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default CareerProspects;
