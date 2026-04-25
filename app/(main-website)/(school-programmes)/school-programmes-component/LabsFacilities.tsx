import Image from "next/image";
import Link from "next/link";
import LabFacilitiesSlider from "../school-prog-global-comps/LabFacilitiesSlider";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { ParagraphBlock } from "@/lib/types/about";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { STRAPI_URL } from "@/app/constant";
import { LabCard } from "@/lib/types/school-programme";
import BcaVsBtechTable from "../programs/prog-comp/BcaVsBtechTable";

type Props = {
  heading: string;
  highlight: string;
  btn: ButtonType;
  labimg: StrapiMedia;
  labcontent: ParagraphBlock[];
  labcards: LabCard[];
  slug: string;
};

const LabsFacilities = ({
  heading,
  highlight,
  btn,
  labimg,
  labcontent,
  labcards,
  slug,
}: Props) => {
  // Staging Images for Labs (Design reference)
  const labStagingImages = [
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/technology_8b0b4c04a3.png",
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/artificial_intelligence_0117b8b3e9.png",
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/social_2e5de5b706.png",
  ];

  return (
    <>
      <section className="prog-global-padding bg-[#f9f9f9] pb-8">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* <div className="w-1/2 hidden lg:block">
            {labimg?.url && (
              <Image
                src={`${STRAPI_URL}${labimg?.url}`}
                alt={labimg?.alternativeText || "Lab Image"}
                width={636}
                height={733}
                className="w-full"
              />
            )}
          </div> */}
          <div className="w-full labFac_container text-center">
            <div className="common-prog-container !max-w-4xl mx-auto">
              <h3 className="heading mb-4 text-[40px]">
                {heading} {highlight}
              </h3>
              <div className="sub-heading text-black/70 px-4 md:px-0">
                <BlocksRenderer content={labcontent} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 pb-6">
              {labcards &&
                labcards.map((lab, index) => {
                  const labImage = labStagingImages[index % labStagingImages.length];
                  return (
                    <div
                      key={lab?.id}
                      className="group bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="relative h-[120px] w-full overflow-hidden flex items-center justify-center">
                        <Image
                          fill
                          src={labImage}
                          alt={lab?.title}
                          className="object-contain px-10 pt-10 pb-0 group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="px-5 py-4 flex-1 flex flex-col items-center text-center">
                        <h5 className="font-bold mb-3 text-xl text-black leading-tight">
                          {lab?.title}
                        </h5>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {lab?.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="flex items-center justify-center">
               {(btn?.buttonclass || btn?.buttonlink) && (
                <Link
                  href={btn?.buttonlink}
                  className={`flex items-center text-lg font-medium tracking-wide justify-center gap-3 rounded-md px-8 py-3 bg-[#0a41a1] text-white mt-12 hover:bg-[#083582] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${btn?.buttonclass}`}
                >
                  {btn?.buttontext}
                </Link>
              )}
            </div>
            
            <div className="md:hidden mt-10">
              <LabFacilitiesSlider labcards={labcards} />
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto w-full mt-10">
          {slug === "bca-ai-data-science" && <BcaVsBtechTable />}
        </div>
      </section>
    </>
  );
};

export default LabsFacilities;
