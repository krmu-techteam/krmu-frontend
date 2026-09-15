import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ourTopRecruitersLogos } from "../constant";
import Divider from "./Divider";
import { div } from "framer-motion/client";
import { LuGoal } from "react-icons/lu";

const OurTopRecruiter = () => {
  // Duplicate logos for seamless infinite loop
  // const logos = [...ourTopRecruitersLogos, ...ourTopRecruitersLogos];

  return (
    <section className="px-5 pb-10 md:pb-20 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_1.3fr_auto] lg:items-center lg:gap-8">
          {/* Title */}
          <div>
            <h2 className="font-newsreader text-4xl font-bold leading-[1.05] text-[#001836] sm:text-5xl md:text-[52px] lg:text-5xl">
              Our Top
              <br />
              Recruiters
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
              href="/placement/our-recruiter"
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
              View all Recruiters
              <ArrowRight size={17} strokeWidth={1.5} className="shrink-0" />
            </Link>
          </div>
        </div>

        {/* Infinite Logo Carousel */}
        <div className="relative mt-8 overflow-hidden sm:mt-10">
          <div className="grid grid-cols-6">
            {/* {ourTopRecruitersLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="
                  flex
                  h-[85px]
                  w-[50vw]
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-[#ccc]
                  px-6

                  sm:h-[100px]
                  sm:w-[33.333vw]
                  sm:px-8

                  md:w-[25vw]

                  lg:h-[110px]
                  lg:w-[16.6667vw]
                  lg:px-10
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
            ))} */}
            {ourTopRecruitersLogos &&
              ourTopRecruitersLogos.map((logo, index) => {
                return (
                  <div
                    key={index}
                    className="border border-[#ccc] flex items-center justify-center p-5"
                  >
                    <Image
                      src={logo.imageUrl}
                      alt={logo.alt || ""}
                      width={logo.width}
                      height={logo.height}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        {/* Divider */}
        <Divider />
      </div>
    </section>
  );
};

export default OurTopRecruiter;
