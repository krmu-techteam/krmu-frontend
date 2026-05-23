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
                <h3 className="text-[28px] lg:text-[40px] font-bold lg:mb-2 2xl:mb-4 text-gray-900 uppercase">
                  {heading} {highlight}
                </h3>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">{desc}</p>
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
                    className="w-full md:w-auto py-2 text-center md:px-8 md:py-2.5 text-white bg-[#051730] text-sm md:text-base font-semibold tracking-[0.025em] rounded-sm md:rounded-md hover:bg-[#071e3f] transition-colors shadow-md"
                  >
                    {tocbtn?.buttontext}
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
