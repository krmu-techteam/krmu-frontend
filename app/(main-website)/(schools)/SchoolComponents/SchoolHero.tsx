import { STRAPI_URL } from "@/app/constant";
import { SchoolHeroBanner } from "@/lib/types/common";
import { Button } from "@/lib/types/home";
import Link from "next/link";
import SchoolHeroSEMCE from "./SchoolHeroSEMCE";
import SchoolHeroSBAS from "./SchoolHeroSBAS";
import Image from "next/image";

type Props = {
  title: string;
  subheading: string;
  heroBtns: Button[];
  videoFmt: string;
  iframeContent: string;
  videoLink: string;
  herobanner: SchoolHeroBanner;
  fullWidth: boolean;
};
const SchoolHero = ({
  title,
  subheading,
  heroBtns,
  videoFmt,
  iframeContent,
  videoLink,
  herobanner,
  fullWidth,
}: Props) => {
  return (
    <>
      <section
        className={`pt-[150px] sm:pb-20 relative ${
          fullWidth
            ? "lg:py-[20%] lg:pb-[5%] pt-[300px] pb-5"
            : "lg:pt-[10%] lg:pb-[5%] pt-[455px] px-0 schoolBanner"
        } bg-cover bg-no-repeat bg-center sm:px-4`}
        style={{ backgroundImage: `url(${STRAPI_URL}${herobanner?.url})` }}
      >
        <div className="hidden sm:block">
          {herobanner?.url && (
            <Image
              src={`${STRAPI_URL}${herobanner.url}`}
              alt={"hero"}
              fill
              priority
              sizes="100vw"
              className="object-cover -z-10"
            />
          )}
        </div>
        {fullWidth ? (
          <div className="max-w-[1664px] mx-auto w-full px-5">
            <div className="text-center text-white w-full">
              <p className="text-sm md:text-[28px] lg:mb-5 font-medium text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                {subheading}
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold leading-[1.2] text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                {title}
              </h1>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-2.5 sm:gap-5 my-4">
                {heroBtns?.map((btn) =>
                  btn?.buttontext === "Explore Programmes" ? (
                    <Link
                      key={btn.id}
                      href={btn.buttonlink}
                      className={`text-white w-full sm:w-fit flex justify-center items-center px-5 py-2  border rounded-md gap-4 font-semibold bg-[#034272] ${
                        btn.buttonclass || ""
                      }`}
                    >
                      {btn.buttontext}
                    </Link>
                  ) : (
                    <Link
                      key={btn.id}
                      href={btn.buttonlink}
                      className={`text-black w-full sm:w-fit flex justify-center items-center px-5 py-1.5 rounded-md gap-4 font-semibold bg-white ${
                        btn.buttonclass || ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {btn.buttontext}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-[1850px] mx-auto w-full xl:flex items-center justify-between test bg-[#034272] p-5 -mt-[107px] sm:p-0 sm:-mt-0 sm:bg-transparent">
            <div className="text-center text-white w-full xl:w-1/2 xl:pr-52">
              <p className="text-sm md:text-[28px] lg:mb-5 font-medium">
                {subheading}
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.2]">
                {title}
              </h1>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-4">
                {heroBtns?.map((btn) =>
                  btn?.buttontext === "Explore Programmes" ? (
                    <Link
                      key={btn.id}
                      href={btn.buttonlink}
                      className="text-white flex justify-center items-center px-5 py-1.5 rounded-md gap-4 border border-[#c7c7c7] font-semibold bg-[#034272]"
                    >
                      {btn.buttontext}
                    </Link>
                  ) : (
                    <Link
                      key={btn.id}
                      href={btn.buttonlink}
                      className={`text-black flex justify-center items-center px-5 py-1.5 rounded-md gap-4 font-semibold bg-white ${
                        btn.buttonclass || ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {btn.buttontext}
                    </Link>
                  ),
                )}
              </div>
            </div>
            <div className="w-full xl:w-1/2 xl:ml-20 xl:pl-20 flex justify-center xl:justify-end">
              {videoFmt === "Iframe" ? (
                <div
                  className="w-full customSchoolIframeStyle"
                  dangerouslySetInnerHTML={{ __html: iframeContent }}
                />
              ) : videoFmt === "videourl" ? (
                <video controls className="w-full">
                  <source src={videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SchoolHero;
