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
      <section className="prog-global-padding bg-[#f8f9fd]">
        <div className="max-w-[1320px] mx-auto w-full px-2.5 md:px-4">
          <h3 className="text-4xl md:text-[40px] font-semibold text-[#0a41a1] mb-6 text-center sm:text-left">
            {heading} <span className="text-[#db2a1a]">{highlight}</span>
          </h3>
          <div className="flex flex-col-reverse lg:flex-row items-start">
            <div className="w-full xl:w-1/2">
              <p className="mb-6">{desc}</p>
              <div>
                {careercards &&
                  careercards.map((card) => {
                    return (
                      <div key={card?.id} className="pl-10 relative">
                        <span className="absolute -left-2 top-0 px-2.5 py-[5px] rounded-[10px] text-white bg-[#db2a1a]">
                          {card?.num}
                        </span>
                        <h4 className="font-medium text-2xl">{card?.title}</h4>
                        <p className="mb-4">{card?.description}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="w-full xl:w-1/2 min-h-[300px] sm:min-h-[400px] md:min-h-[644px] h-full relative mb-5 sm:mb-0">
              {careerimg?.url && (
                <Image
                  src={`${STRAPI_URL}${careerimg?.url}`}
                  fill
                  className="z-10 object-contain"
                  alt={careerimg?.alternativeText || "Career Prospectus"}
                  sizes="(max-width: 1024px) 100vw, 660px"
                />
              )}
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto w-full flex justify-center mt-4">
          {(btn?.buttonclass || btn?.buttonlink) && (
            <Link
              href={btn?.buttonlink || "#"}
              className={`text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold cursor-pointer ${btn?.buttonclass}`}
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
