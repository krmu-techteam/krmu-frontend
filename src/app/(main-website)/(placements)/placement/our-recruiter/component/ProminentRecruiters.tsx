import { STRAPI_URL } from "@/app/constant";
import { RecruiterLogo } from "@/lib/types/placements/placements-overview";
import Image from "next/image";

type Props = {
  recruitLogos: RecruiterLogo[];
};

const ProminentRecruiters = ({ recruitLogos }: Props) => {
  return (
    <>
      <section className="py-8 md:py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
            {recruitLogos &&
              recruitLogos.map((item, index) => {
                return (
                  <div 
                    key={index} 
                    className="group relative flex items-center justify-center p-3 md:p-4 bg-gray-50/50 border border-gray-200 rounded-sm hover:bg-white hover:border-blue-200 hover:shadow-md transition-all duration-300 min-h-[80px] md:min-h-[110px]"
                  >
                    {item?.url && (
                      <Image
                        src={`${STRAPI_URL}${item?.url}`}
                        width={234}
                        height={134}
                        alt={item?.alternativeText || ""}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        unoptimized={true}
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProminentRecruiters;
