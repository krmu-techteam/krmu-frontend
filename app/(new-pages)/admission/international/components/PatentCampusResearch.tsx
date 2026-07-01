import Image from "next/image";
import { internationalAdmissionHighlights } from "../constant";

const PatentCampusResearch = () => {
  return (
    <section className="py-[50px] px-5 bg-[linear-gradient(101.26deg,#001732_42.76%,#004698_125.45%)]">
      <div className="max-w-[1427px] mx-auto w-full flex flex-col md:flex-row items-baseline gap-5 md:gap-0">
        <div className="w-full md:w-1/3 text-white">
          <h4 className="text-3xl font-fraunces mb-5">
            250+ Patents & ₹16+ Crore <br className="hidden md:block" /> Research Grants
          </h4>
          <p className="text-sm max-w-3xs">
            A strong culture of innovation and entrepreneurship.
          </p>
        </div>
        <div className="w-full md:w-1/3 text-white md:border-x border-white/20 md:px-10">
          <div>
            <h4 className="text-3xl font-fraunces mb-5">
              35+ Acre Green <br className="hidden md:block" /> Campus
            </h4>
            <p className="text-sm max-w-3xs">
              Modern infrastructure surrounded by the scenic Aravalli Hills.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-white md:pl-10">
          <div>
            <h4 className="text-3xl font-fraunces mb-5">
              4,000+ Research <br className="hidden md:block" /> Publications
            </h4>
            <p className="text-sm max-w-3xs">
              Contribute to meaningful research and innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1427px] patentCampusGrid mx-auto w-full grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 sm:gap-5 mt-5 sm:mt-10">
        {internationalAdmissionHighlights.map((item, index) => (
          <div
            key={index}
            className="relative patentCampusGrid-card flex flex-col items-center justify-center gap-2 px-5 py-2.5 sm:p-5  lg:py-10 lg:px-5 text-center text-white"
          >
            <Image
              src="/international-admission/dashed-border.svg"
              width={444}
              height={444}
              alt=""
              className="absolute  object-fill w-[140px] sm:w-[170px] lg:w-[225px] xl:w-[230px] h-auto patentCampusDashedBorder"
            />

            <Image
              src={item.icon}
              width={65}
              height={65}
              alt={item.title}
              className="relative z-10 w-10 sm:w-[50px] xl:w-[65px]"
            />

            <h4
              className="relative z-10 text-xs sm:text-sm xl:text-base 2xl:text-lg leading-tight"
              dangerouslySetInnerHTML={{
                __html: item.title,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PatentCampusResearch;
