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
      <section className="py-[50px]">
        <div className="flex items-center lg:gap-6">
          <div className="w-1/4 hidden lg:block relative h-full min-h-[796px]">
              {tocimg?.url && (
                <Image
                  src={`${STRAPI_URL}${tocimg?.url}`}
                  alt={tocimg.alternativeText || "Table of content"}
                  fill
                  className="object-cover"
                />
              )}
           
          </div>
          <div className="w-full lg:w-3/4">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-20">
                <h3 className="text-[40px]  font-semibold mb-5 text-[#0a41a1]">
                  {heading}
                  <span className="text-[#e61f21]">{highlight}</span>
                </h3>
                <p className="text-base">{desc}</p>
              </div>
              <div className="relative p-5 lg:p-0 bg-[url(/programmes/faq.png)] bg-cover bg-no-repeat md:bg-none overflow-hidden rounded-xl md:rounded-none">
                {/* Mobile overlay for text readability */}
                <div className="absolute inset-0 bg-black/60 md:hidden pointer-events-none"></div>
                <div className="relative z-10">
                  <TableOfContentTab tocfaqs={tocfaqs} />
                </div>
              </div>
              <div className="flex items-center justify-center mt-10 md:mt-20">
                {(tocbtn?.buttonclass || tocbtn?.buttonlink) && (
                  <Link
                    href={tocbtn?.buttonlink}
                    className={`${tocbtn?.buttonclass} p-4 text-white bg-[#0a41a1] text-base rounded-[8px]`}
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
