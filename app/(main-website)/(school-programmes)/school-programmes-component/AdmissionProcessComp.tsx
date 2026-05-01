import { STRAPI_URL } from "@/app/constant";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { AdmisionProcessCard } from "@/lib/types/school-programme";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  deskimg: StrapiMedia;
  admissionCards: AdmisionProcessCard[];
  admisbtn: ButtonType;
  // admissioncards: AdmissionProcessCard[];
};

const AdmissionProcessComp = ({
  heading,
  highlight,
  desc,
  deskimg,
  admissionCards,
  admisbtn,
}: Props) => {
  return (
    <section className="prog-global-padding bg-[#f9f9f9] py-8 md:py-16">
      <div className="common-prog-container">
        <h2 className="text-[28px] md:text-[45px] font-bold text-gray-900 leading-tight tracking-tight mb-2">
          {heading} {highlight}
        </h2>
        <p className="sub-heading mb-5">{desc}</p>
      </div>
      <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block px-4 md:px-0">
        <Image
          src={`${STRAPI_URL}${deskimg?.url}`}
          width={1296}
          height={170}
          alt={deskimg?.alternativeText || "Admission Process"}
        />
        <div className="admis_proc_btn_grid_items">
          {admissionCards &&
            admissionCards.map((card) => {
              if (
                card?.link === "admissions.krmangalam.edu.in" ||
                card?.description === "admissions.krmangalam.edu.in "
              ) {
                return (
                  <Link
                    href={`https://${card?.description}`}
                    key={card?.id}
                    className="admis_proc_btn_grid_item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="admis_proc_btn_content">
                      <button className="btn_text">{card?.title}</button>
                      <p className="admis_btn_below_text">
                        {card?.description}
                      </p>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <div key={card?.id} className="admis_proc_btn_grid_item">
                    <div className="admis_proc_btn_content">
                      <button className="btn_text">{card?.title}</button>
                      <p className="admis_btn_below_text">
                        {card?.description}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          {/* {admissionCards &&
            admissionCards.map((card) => {
              if (card?.link) {
                return (
                  <Link
                    href={card?.link}
                    key={card?.id}
                    className="admis_proc_btn_grid_item"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <div className="admis_proc_btn_content">
                      <button className="btn_text">{card?.title}</button>
                      <p className="admis_btn_below_text">
                        {card?.description}
                      </p>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <div key={card?.id} className="admis_proc_btn_grid_item">
                    <div className="admis_proc_btn_content">
                      <button className="btn_text">{card?.title}</button>
                      <p className="admis_btn_below_text">
                        {card?.description}
                      </p>
                    </div>
                  </div>
                );
              }
            })} */}
        </div>
      </div>
      <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center px-4">
        <div className="grid grid-cols-1 gap-5 w-full">
          {admissionCards &&
            admissionCards.map((card) => {
              if (
                card?.link === "admissions.krmangalam.edu.in" ||
                card?.description === "admissions.krmangalam.edu.in "
              ) {
                return (
                  <div
                    key={card?.id}
                    className="w-full text-center p-6 rounded-md border border-gray-200 bg-white flex flex-col items-center justify-center min-h-[120px]"
                  >
                    <h4 className="text-xl font-semibold text-[#0a41a1] mb-2">
                      {card?.title}
                    </h4>
                    <p className="leading-tight text-base text-gray-700 break-all font-medium">
                      <Link
                        href={`https://${card?.description?.trim()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:no-underline transition-all"
                      >
                        {card?.description}
                      </Link>
                    </p>
                  </div>
                );
              } else {
                return (
                  <div
                    key={card?.id}
                    className="w-full text-center p-6 rounded-md border border-gray-200 bg-white flex flex-col items-center justify-center min-h-[120px]"
                  >
                    <h4 className="text-xl font-semibold text-[#0a41a1] mb-2">
                      {card?.title}
                    </h4>
                    <p className="leading-relaxed text-base text-gray-700 break-words font-medium">
                      <span>{card?.description}</span>
                    </p>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* {(admisbtn?.buttonclass || admisbtn?.buttonlink) && (
          <Link
            href={admisbtn?.buttonlink}
            className={`${admisbtn?.buttonclass} text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10`}
          >
            <span>{admisbtn?.buttontext}</span> <ArrowRight />
          </Link>
        )} */}
        <button
          className={`${
            admisbtn.buttonclass || ""
          } text-white bg-[#db2a1a] hover:bg-[#c42518] px-8 py-2.5 flex items-center justify-center gap-3 rounded-md font-semibold mt-8 cursor-pointer tracking-[0.025em] text-lg shadow-md hover:shadow-xl transition-all duration-300 group`}
        >
          <span>{admisbtn.buttontext}</span>
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>
        {/* {admisbtn && (
          <div>
            {admisbtn.buttonclass === "progPopup" ? (
              <Popup
                buttonText={admisbtn.buttontext || "Apply Now"}
                buttonClass={`${admisbtn?.buttonclass} text-white bg-[#db2a1a] p-[15px] flex items-center justify-around w-3xs flex text-center rounded-lg font-semibold mt-10`}
                buttonIcon={<ArrowRight />}
              >
                <p>This is the content inside the popup.</p>
              </Popup>
            ) : admisbtn.buttonlink ? (
              <Link
                href={admisbtn.buttonlink}
                className={`${
                  admisbtn.buttonclass || ""
                } text-white bg-[#db2a1a] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10`}
              >
                <span>{admisbtn.buttontext}</span> <ArrowRight />
              </Link>
            ) : null}
          </div>
        )} */}
      </div>
    </section>
  );
};

export default AdmissionProcessComp;
