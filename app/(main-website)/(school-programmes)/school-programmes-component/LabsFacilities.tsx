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
  return (
    <>
      <section className="prog-global-padding">
        <div className="max-w-[1320px] mx-auto w-full flex gap-6 items-center px-2.5 md:px-4">
          <div className="w-1/2 hidden md:block">
            {labimg?.url && (
              <Image
                src={`${STRAPI_URL}${labimg?.url}`}
                alt={labimg?.alternativeText || "Lab Image"}
                width={636}
                height={733}
                className="w-full"
              />
            )}
          </div>
          <div className="w-full md:w-1/2 labFac_container">
            <h3 className="text-[50px] text-[#0a41a1] font-medium">
              {heading} <span className="text-[#db2a1a]">{highlight}</span>
            </h3>
            <div className="mb-4">
              <BlocksRenderer content={labcontent} />
            </div>
            <div className="hidden md:block">
              {labcards &&
                labcards.map((lab) => {
                  return (
                    <div key={lab?.id} className="mt-2.5">
                      <h5 className="font-medium mb-2 text-xl">{lab?.title}</h5>
                      <p>{lab?.description}</p>
                    </div>
                  );
                })}
              {(btn?.buttonclass || btn?.buttonlink) && (
                <Link
                  href={btn?.buttonlink}
                  className={`flex items-center justify-center max-w-[180px] w-full rounded-lg p-[15px] bg-[#0a41a1] text-white mt-12 ${btn?.buttonclass}`}
                >
                  {btn?.buttontext}
                </Link>
              )}
            </div>
            <div className="md:hidden">
              <LabFacilitiesSlider labcards={labcards} />
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto w-full">
          {slug === "bca-ai-data-science" && <BcaVsBtechTable />}
        </div>
      </section>
    </>
  );
};

export default LabsFacilities;
