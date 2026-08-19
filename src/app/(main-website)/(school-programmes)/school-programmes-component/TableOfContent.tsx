import Image from "next/image";
import TableOfContentTab from "../school-prog-global-comps/TableOfContentTab";
import { TOCFAQ } from "@/lib/types/school-programme";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";
import Link from "next/link";
import Button from "@/components/common/Button";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  tocfaqs: TOCFAQ[];
  tocimg: StrapiMedia;
  tocbtn: ButtonType;
};

const TableOfContent = ({
  heading,
  highlight,
  desc,
  tocfaqs,
  tocimg,
  tocbtn,
}: Props) => {
  return (
    <>
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-10 2xl:px-0 relative z-10">
        <div className="flex items-center">
          <div className="w-full">
            <div className="mx-auto xl:max-w-[1230px] 2xl:max-w-7xl">
              {/* Header block */}
              <div className="text-center mb-6 md:mb-8 lg:mb-12">
                <h3 className="heading-primary mb-3 lg:mb-4 text-white">
                  {heading} {highlight}
                </h3>
                <p className="text-sm md:text-base font-poppins font-normal text-white/65 max-w-3xl mx-auto leading-relaxed">{desc}</p>
                {(tocbtn?.buttonclass || tocbtn?.buttonlink) && (
                  <div className="flex lg:hidden items-center justify-center mt-4 sm:mt-5">
                    <Button
                      href={tocbtn?.buttonlink || "#"}
                      target="_blank"
                      variant="primary"
                      className={`!w-fit !bg-[#CB000D] hover:!bg-[#CB000D]/90 text-white font-bold !text-xs uppercase tracking-wider !h-auto !py-2.5 !px-6 transition-all duration-300 shrink-0 font-poppins ${tocbtn?.buttonclass || ""}`}
                    >
                      APPLY NOW
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Tabs and Accordions block */}
              <div className="relative !p-0 lg:!p-0 rounded-none">
                <div className="relative z-10 w-full">
                  <TableOfContentTab tocfaqs={tocfaqs} tocbtn={tocbtn} />
                </div>
              </div>

              {/* Bottom centered dynamic button (e.g. View All) */}
              {(tocbtn?.buttonclass || tocbtn?.buttonlink) && (
                <div className="flex items-center justify-center mt-8 md:mt-12">
                  <Button
                    href={tocbtn?.buttonlink || "#"}
                    variant="outline"
                    className={`!w-fit border border-[#0055A4]/60 hover:bg-[#0055A4]/15 hover:border-[#0055A4] text-white transition-all duration-300 tracking-wide ${tocbtn?.buttonclass || ""}`}
                  >
                    {tocbtn?.buttontext || "View All"}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableOfContent;


