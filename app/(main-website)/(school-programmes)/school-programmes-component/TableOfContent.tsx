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
      <section className="py-8 md:py-16 px-4 md:px-0">
        <div className="flex items-center">
          <div className="w-full">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-4 md:mb-12">
                <h3 className="text-[28px] md:text-[40px] font-bold mb-4 text-gray-900 uppercase">
                  {heading} {highlight}
                </h3>
                <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto">{desc}</p>
              </div>
              <div className="relative p-0 lg:p-0 overflow-hidden rounded-xl md:rounded-none">
                <div className="relative z-10 w-full">
                  <TableOfContentTab tocfaqs={tocfaqs} />
                </div>
              </div>
              <div className="flex items-center justify-center mt-5 md:mt-10">
                {(tocbtn?.buttonclass || tocbtn?.buttonlink) && (
                  <Link
                    href={tocbtn?.buttonlink || "#"}
                    className="w-full md:w-auto py-2 text-center md:px-8 md:py-2.5 text-white bg-[#0a41a1] text-sm md:text-base font-semibold tracking-[0.025em] rounded-sm md:rounded-md hover:bg-[#083380] transition-colors shadow-md"
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
