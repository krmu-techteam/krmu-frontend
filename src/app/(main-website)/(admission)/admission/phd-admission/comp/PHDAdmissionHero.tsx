import { STRAPI_URL } from "@/app/constant";
import { PhdAdmissionBtn, PhdAdmissionImg } from "@/lib/types/admissionenroll";

import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  subheading: string;
  content: string;
  herobtn: PhdAdmissionBtn;
  heroimg?: PhdAdmissionImg;
};

const PHDAdmissionHero = ({
  heading,
  subheading,
  content,
  herobtn,
  heroimg,
}: Props) => {
  return (
    <>
      <section className="px-4 pt-[140px]">
        <div className="max-w-[1664px] mx-auto w-full flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-[86px] font-semibold mb-2.5">
              {heading}
            </h1>
            <p className="text-xl md:text-[22px] mb-5">
              <strong>{subheading}</strong>
            </p>
            <p className="mb-10">{content}</p>
            {herobtn && herobtn?.btn_link ? (
              <Link
                href={herobtn?.btn_link}
                className="bg-[#cb000d] text-white rounded-full font-semibold py-[13px] px-[29px]"
                target="_blank" rel="noopener noreferrer"
              >
                {herobtn?.btn_text}
              </Link>
            ) : (
              ""
            )}
          </div>
          <div className="lg:w-1/2">
            {heroimg?.url && (
              <Image
                src={`${STRAPI_URL}${heroimg?.url}`}
                width={654}
                height={654}
                alt={heading || ""}
                className="w-full"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PHDAdmissionHero;
