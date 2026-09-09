import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ourTopRecruitersLogos } from "../constant";

const OurTopRecruiter = () => {
  return (
    <section className="px-5 xl:px-0 pb-10 md:pb-20">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_1.3fr_auto] lg:items-center lg:gap-8">
          {/* Title */}
          <div>
            <h2 className="font-newsreader text-4xl font-semibold leading-[1.05] text-[#001836] sm:text-5xl md:text-[52px] lg:text-[54px]">
              Our top
              <br />
              recruiters
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="max-w-[553px] font-poppins text-sm leading-6 text-[#333] sm:text-base sm:leading-7">
              Industry leaders across sectors actively seek our graduates for
              their rigorous academic foundation and practical readiness.
            </p>
          </div>

          {/* Link */}
          <div className="lg:justify-self-end">
            <Link
              href="#"
              className="
                inline-flex
                items-center
                gap-2
                font-poppins
                text-xs
                text-[#001836]
                underline
                underline-offset-4
                transition-all
                duration-300
                hover:gap-3
                sm:text-sm
              "
            >
              View all Recruiter
              <ArrowRight
                size={17}
                strokeWidth={1.5}
                className="shrink-0"
              />
            </Link>
          </div>
        </div>

        {/* Recruiter Logos */}
        <div
          className="
            mt-8
            grid
            grid-cols-2
            border-l
            border-t
            border-[#ccc]

            sm:mt-10
            sm:grid-cols-3

            md:grid-cols-4

            lg:grid-cols-6
          "
        >
          {ourTopRecruitersLogos?.map((logo, index) => (
            <div
              key={`${logo.alt}-${index}`}
              className="
                flex
                min-h-[85px]
                items-center
                justify-center
                border-b
                border-r
                border-[#ccc]
                px-3
                py-5

                sm:min-h-[100px]
                sm:px-5

                md:px-6

                lg:min-h-[110px]
                lg:px-7
                xl:px-8
              "
            >
              <Image
                src={logo.imageUrl}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="
                  h-auto
                  max-h-10
                  w-auto
                  max-w-[90%]
                  object-contain

                  sm:max-h-12
                  md:max-h-14
                "
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        <hr className="mt-10 border-0 border-t border-[#545454] sm:mt-14 md:mt-16 lg:mt-20" />
      </div>
    </section>
  );
};

export default OurTopRecruiter;