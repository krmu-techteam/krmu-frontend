import { STRAPI_URL } from "@/app/constant";
import { AlumniMedia, SchoolHeroBanner, StrapiMedia } from "@/lib/types/common";
import { Button } from "@/lib/types/home";
import Link from "next/link";
import SchoolHeroSEMCE from "./SchoolHeroSEMCE";
import SchoolHeroSBAS from "./SchoolHeroSBAS";
import Image from "next/image";
import YoutubeVideoSection from "./schoolglobalcomponent/YoutubeVideoSection";
import ConnectingDreamSlider from "../../(school-programmes)/school-programmes-component/ConnectingDreamSlider";
import { Download } from "lucide-react";
import SchoolAdmissionOpen from "./SchoolAdmissionOpen";

type Props = {
  title: string;
  subheading: string;
  heroBtns: Button[];
  videoFmt: string;
  iframeContent: string;
  videoLink: string;
  herobanner: SchoolHeroBanner;
  fullWidth: boolean;
  alumniLogos: StrapiMedia[] | undefined;
  admTitle: string;
  admBtn: Button;
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
  alumniLogos,
  admTitle,
  admBtn,
}: Props) => {
  const videoURL = iframeContent;


  return (
    <>
      <section
        className={`pt-[150px] relative ${
          fullWidth
            ? "lg:py-[20%] lg:pb-[5%] pt-[300px] pb-5"
            : "lg:pt-[12%]  pt-[300px] schoolBanner"
        } bg-cover bg-no-repeat bg-center bg-[#001732]`}
        style={{ backgroundImage: `url(${STRAPI_URL}${herobanner?.url})` }}
      >
        <div
          className="
    h-full
    w-1/2
    opacity-40
    bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0.6)61.25%,rgba(102,102,102,0)100.31%)]
      absolute
      inset-0
      z-10
  "
        ></div>
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
          <div className="max-w-[1664px] mx-auto w-full px-5 relative z-10 sm:px-4">
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
                      className={`text-white w-full sm:w-fit flex justify-center items-center px-5 py-2  border rounded-md gap-4 font-semibold bg-[#001732] ${
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
          <div className="max-w-[1850px] mx-auto w-full xl:flex items-start justify-between p-5 sm:p-0 relative z-20">
            <div className="text-center text-white w-full xl:w-1/2 xl:pr-52">
              <p className="text-sm md:text-2xl font-normal sm:mb-2.5 text-shadow-[2px_2px_5px_rgba(0,0,0,0.5)]">
                {subheading}
              </p>
              <h1 className="text-2xl md:text-4xl 2xl:text-5xl text-shadow-lg leading-[1.2] font-bold">
                {title}
              </h1>
              <div className="flex flex-col items-center justify-center gap-3.5 sm:gap-5 my-4">
                {heroBtns?.map((btn) =>
                  btn?.buttontext === "Explore Programmes" ? (
                    <Link
                      key={btn.id}
                      href={btn.buttonlink}
                      className="text-white underline font-medium text-xl"
                    >
                      {btn.buttontext}
                    </Link>
                  ) : (
                    <Link
                      key={btn.id} /* Rectangle 970 */
                      href={btn.buttonlink}
                      className={`text-white w-full sm:w-fit flex justify-center items-center px-6 py-3 rounded-lg gap-4 font-semibold bg-[#001732] transition-all ${
                        btn.buttonclass || ""
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download color="#fff" /> {btn.buttontext}
                    </Link>
                  ),
                )}
              </div>
              <div className="bg-white max-w-[440px] mx-auto mt-16 p-3 rounded-[10px] alumniHeaderCarousel">
                <ConnectingDreamSlider logos={alumniLogos} />
              </div>
            </div>
            <div className="w-full xl:w-1/2 xl:ml-20 xl:pl-20 flex justify-center xl:justify-end">
              {/* {videoFmt === "Iframe" ? (
                <div
                  className="w-full customSchoolIframeStyle"
                  dangerouslySetInnerHTML={{ __html: iframeContent }}
                />
              ) : videoFmt === "videourl" ? (
                <video controls className="w-full">
                  <source src={videoLink} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null} */}
              <div className="max-w-[600px] w-full mx-auto">
                <YoutubeVideoSection thumbnail={videoLink} ytUrl={videoURL} />
              </div>
            </div>
          </div>
        )}
        <div className="xl:mt-20 relative z-20">
          <SchoolAdmissionOpen title={admTitle} admBtn={admBtn} />
        </div>
      </section>
    </>
  );
};

export default SchoolHero;
