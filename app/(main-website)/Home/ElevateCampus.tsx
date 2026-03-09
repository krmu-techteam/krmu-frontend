import Image from "next/image";
import Link from "next/link";
import { ElevateCampusContent } from "@/lib/types/home";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "../../constant";
import ElevateSlider from "./homeComp/ElevateSlider";
import ClubSlider from "./homeComp/ClubSlider";

interface ElevateCampusProp {
  elevateCampus: ElevateCampusContent;
  elevateCampus2: ElevateCampusContent;
  elevateCampus3: ElevateCampusContent;
  elevateImage1: StrapiMedia;
  elevateImage2: StrapiMedia;
  elevateImage3: StrapiMedia;
}

const ElevateCampus = ({
  elevateCampus,
  elevateImage1,
  elevateCampus2,
  elevateImage2,
  elevateCampus3,
  elevateImage3,
}: ElevateCampusProp) => {
  return (
    <>
      <section>
        <div className="xl:max-w-7xl 2xl:max-w-[1664px] mx-auto px-5 xl:px-0">
<<<<<<< HEAD
          <div className="flex gap-10 lg:gap-5 2xl:gap-10 flex-col lg:flex-row items-center py-10 xl:py-20">
            <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col">
              <div className="2xl:max-w-lg text-center lg:text-left">
=======
          <div className="flex gap-10 lg:gap-5 2xl:gap-10 flex-row items-center py-10 xl:py-20">
            <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col">
              <div className="2xl:max-w-lg">
>>>>>>> 90ebe01c2dbc5ce2061841ecd6f5035b19a95392
                <h4 className="text-lg font-semibold mb-3">
                  {elevateCampus?.subtitle}
                </h4>
                <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-8">
                  {elevateCampus?.beforehighlighttext}{" "}
                  <span className="text-[#034272]">
                    {elevateCampus?.highlighttext}
                  </span>{" "}
                  <br className="hidden lg:block" />
                  {elevateCampus?.afterhighlighttext}
                </h3>
                <p className="mb-5 text-lg">{elevateCampus?.content}</p>
                {(elevateCampus.link || elevateCampus.linkclass) && (
                  <Link
                    href={elevateCampus.link}
                    className="text-[#034272] pb-2 underline underline-offset-8"
                  >
                    {elevateCampus?.linktext}
                  </Link>
                )}
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-2/3">
              {/* <Image
                src={`${STRAPI_URL}${elevateImage1.url}`}
                alt="Elevate"
                width={994}
                height={607}
                className={`h-full w-full object-cover ${elevateCampus?.linkclass}`}
              /> */}
              <ElevateSlider />
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex gap-5 2xl:gap-10 flex-col lg:flex-row items-center pb-10 xl:pb-20">
=======
          <div className="flex gap-5 2xl:gap-10 flex-col xl:flex-row items-center pb-10 xl:pb-20">
>>>>>>> 90ebe01c2dbc5ce2061841ecd6f5035b19a95392
            <div className="w-full lg:w-1/2 xl:w-2/3">
              <Image
                src={`${STRAPI_URL}${elevateImage2?.url}`}
                alt="Elevate"
                width={993}
                height={575}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 flex flex-col justify-center items-center">
<<<<<<< HEAD
              <div className="2xl:max-w-lg text-center lg:text-left">
=======
              <div className="2xl:max-w-lg">
>>>>>>> 90ebe01c2dbc5ce2061841ecd6f5035b19a95392
                <h4 className="text-lg font-semibold mb-3">
                  {elevateCampus2?.subtitle}
                </h4>
                <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-8">
                  {elevateCampus2?.beforehighlighttext}{" "}
                  <br className="hidden 2xl:block" />
                  <span className="text-[#034272]">
                    {elevateCampus2?.highlighttext}
                  </span>{" "}
                  {elevateCampus2?.afterhighlighttext}
                </h3>
                <p className="mb-5 text-lg">{elevateCampus2?.content}</p>
                {(elevateCampus2?.link || elevateCampus2?.linkclass) && (
                  <Link
                    href={elevateCampus2?.link}
                    className={`text-[#034272] pb-2 ${elevateCampus2?.linkclass} underline underline-offset-8`}
                  >
                    {elevateCampus2?.linktext}
                  </Link>
                )}
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="flex gap-5 2xl:gap-10  flex-col-reverse lg:flex-row items-center pb-10 xl:pb-20">
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <div className="2xl:max-w-lg text-center lg:text-left">
=======
          <div className="flex gap-5 2xl:gap-10 flex-col-reverse lg:flex-row items-center pb-10 xl:pb-20">
            <div className="w-full lg:w-1/3 flex justify-center items-center">
              <div className="2xl:max-w-lg">
>>>>>>> 90ebe01c2dbc5ce2061841ecd6f5035b19a95392
                <h4 className="text-lg font-semibold mb-3">
                  {elevateCampus3?.subtitle}
                </h4>
                <h3 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-tight mb-8">
                  {elevateCampus3?.beforehighlighttext}
                  <span className="text-[#034272]">
                    <br className="hidden lg:block" /> {elevateCampus3?.highlighttext}
                  </span>
                  {elevateCampus3?.afterhighlighttext}
                </h3>
                <p className="mb-5 text-lg">{elevateCampus3?.content}</p>
                {(elevateCampus3?.link || elevateCampus3?.linkclass) && (
                  <Link
                    href={elevateCampus3?.link}
                    className={`text-[#034272] pb-2 ${elevateCampus3?.linkclass} underline underline-offset-8`}
                  >
                    {elevateCampus3?.linktext}
                  </Link>
                )}
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              {/* <Image
                src={`${STRAPI_URL}${elevateImage3.url}`}
                alt="Elevate"
                width={993}
                height={596}
                className="w-full object-cover"
              /> */}
              <ClubSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElevateCampus;
