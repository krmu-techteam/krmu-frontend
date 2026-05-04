import Image from "next/image";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";
import Link from "next/link";
import { adm2btn, Adm2FAQ } from "@/lib/types/admission2";
import AdmissionTableOfContentTab from "./AdmissionTableOfContentTab";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  tocfaqs: Adm2FAQ[];
  tocimg?: StrapiMedia;
  tocbtn: adm2btn;
};

const AdmissionTableOfContent = ({
  heading,
  highlight,
  desc,
  tocfaqs,
  tocbtn,
}: Props) => {
  return (
    <>
      <section className="py-12 md:py-20 px-4 md:px-0 bg-white">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-2xl md:text-[40px] font-bold mb-4 text-black uppercase tracking-tight">
              {heading} <span className="text-[#0a41a1]">{highlight}</span>
            </h3>
            <p className="text-sm md:text-base text-gray-500 max-w-3xl mx-auto font-medium">{desc}</p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="relative z-10 w-full">
              <AdmissionTableOfContentTab tocfaqs={tocfaqs} />
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 md:mt-12">
            {tocbtn?.btn_link && (
              <Link
                href={tocbtn?.btn_link}
                className="w-full md:w-auto py-3.5 px-10 text-white bg-[#0a41a1] hover:bg-[#051730] text-base font-bold rounded-sm transition-all duration-500 shadow-lg shadow-blue-900/10"
              >
                {tocbtn?.btn_text}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionTableOfContent;
