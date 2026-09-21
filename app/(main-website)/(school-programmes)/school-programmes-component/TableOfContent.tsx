import Image from "next/image";
import TableOfContentTab from "../school-prog-global-comps/TableOfContentTab";
import { TOCFAQ } from "@/lib/types/school-programme";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";
import Link from "next/link";

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
      <section className="py-8 md:p-6 lg:py-10 xl:py-12 2xl:py-16 px-4 lg:px-10 2xl:px-0">
        <div className="flex items-center">
          <div className="w-full">
            <div className="mx-auto xl:max-w-[1230px] 2xl:max-w-7xl">
              <div className="text-center mb-4 lg:mb-6 2xl:mb-12">
                <h3 className="text-2xl lg:text-[40px] font-semibold md:font-bold mb-3 lg:mb-2 2xl:mb-4 text-gray-900 uppercase">
                  {heading} {highlight}
                </h3>
                <p className="text-md md:text-base text-gray-600 max-w-3xl mx-auto">{desc}</p>
              </div>
              <div className="relative p-0 lg:p-0 overflow-hidden rounded-xl md:rounded-none">
                <div className="relative z-10 w-full">
                  <TableOfContentTab tocfaqs={tocfaqs} />
                </div>
              </div>
              <div className="flex items-center justify-center mt-5 sm:mt-5 lg:mt-10">
                {(tocbtn?.buttonclass || tocbtn?.buttonlink) && (
                  <Link
                    href={tocbtn?.buttonlink || "#"}
                    className={`w-auto px-6 py-2 text-center md:px-8 md:py-2.5 text-white bg-[#051730] text-sm md:text-base font-semibold tracking-[0.025em] rounded-sm md:rounded-md hover:bg-[#071e3f] transition-all duration-300 shadow-md relative overflow-hidden group ${tocbtn?.buttonclass || ""}`}
                  >
                    <span>{tocbtn?.buttontext}</span>
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableOfContent;
