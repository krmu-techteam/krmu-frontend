import { STRAPI_URL } from "@/app/constant";
import { ScholarSponsoredPartTime } from "@/lib/types/phd-programmes";
import Image from "next/image";

type Props = {
  scholarShipsData: ScholarSponsoredPartTime;
};

const PHDScholar = ({ scholarShipsData }: Props) => {
  const scholarOptions = [
    {
      title: scholarShipsData?.title1,
      description: scholarShipsData?.desc1,
    },
    {
      title: scholarShipsData?.title2,
      description: scholarShipsData?.desc2,
    },
    {
      title: scholarShipsData?.title3,
      description: scholarShipsData?.desc3,
    },
  ].filter((option) => option.title || option.description);

  return (
    <section
      style={{
        background:
          "linear-gradient(97.54deg,#ab192d -29.54%,#061731 62.42%,#0161ab 108.83%)",
      }}
      className="overflow-hidden px-4 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-16 min-[1440px]:py-0"
    >
      <div className="max-w-[1664px] mx-auto w-full flex flex-col  lg:gap-12 min-[1440px]:min-h-[620px] min-[1440px]:flex-clos  min-[1440px]:gap-16 j items-center">
        <div className="w-full min-[1440px]:w-full  ">
          <div className="grid grid-cols-1  gap-4  lg:grid-cols-3 min-[1440px]:grid-cols-1 min-[1440px]:gap-6 ">
            {scholarOptions.map((option, index) => (
              <article
                key={`${option.title}-${index}`}
                className="rounded-2xl border border-white/15 bg-white/[0.06] p-5  sm:p-6 min-[1440px]:border-l-2 min-[1440px]:border-white/20  min-[1440px]:py-1 min-[1440px]:pl-6 "
              >
                {option.title && (
                  <h2 className="text-[26px] font-semibold leading-tight text-white sm:text-[30px] lg:text-[34px] min-[1440px]:text-[38px] min-[1600px]:text-[42px]">
                    {option.title}
                  </h2>
                )}
                {option.description && (
                  <p className="mt-3 text-sm leading-relaxed text-white/75 sm:text-base lg:text-[17px] min-[1440px]:max-w-xl">
                    {option.description}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center min-[1440px]:w-[60%] min-[1440px]:justify-end">
          <div className="pointer-events-none absolute inset-x-[10%] bottom-0 h-1/2 rounded-full bg-[#168ee8]/20 blur-[90px]" />
          <div className="relative h-[300px] w-full sm:h-[400px] lg:h-[500px] min-[1440px]:h-full min-[1440px]:min-h-[620px]">
            <Image
              src={`${STRAPI_URL}${scholarShipsData?.scholarshipimg?.url}`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1439px) 90vw, 58vw"
              className="object-contain object-bottom"
              alt={scholarShipsData?.title1 || ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PHDScholar;
