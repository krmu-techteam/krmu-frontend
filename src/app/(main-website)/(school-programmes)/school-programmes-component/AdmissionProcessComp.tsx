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
  slug?: string;
};

const AdmissionProcessComp = ({
  heading,
  highlight,
  desc,
  deskimg,
  admissionCards,
  admisbtn,
  slug,
}: Props) => {
  return (
    <section className="prog-global-padding py-8 md:p-6 lg:py-12 2xl:py-16 px-4 lg:px-10 2xl:px-0">
      <div className="common-prog-container">
        <h2 className="heading-primary mb-3">
          {heading} {highlight}
        </h2>
        <p className="text-white/90 text-md font-poppins mb-5 md:mb-10">
          {desc}
        </p>
      </div>
      <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block">
        {/* <Image
          src={`${STRAPI_URL}${deskimg?.url}`}
          width={1296}
          height={170}
          alt={deskimg?.alternativeText || "Admission Process"}
        /> */}
        <Image
          src="/admisison-steps.png"
          width={1296}
          height={170}
          alt="Admission Process"
          className="w-full h-auto"
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
      <div className="max-w-full mx-auto w-full flex lg:hidden items-center justify-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
          {admissionCards &&
            admissionCards.map((card) => {
              if (
                card?.link === "admissions.krmangalam.edu.in" ||
                card?.description === "admissions.krmangalam.edu.in "
              ) {
                return (
                  <div
                    key={card?.id}
                    className="w-full text-center px-2 py-3 md:px-4 md:py-6 rounded-md border border-gray-200 bg-white flex flex-col items-center justify-center min-h-[100px]"
                  >
                    <h4 className="text-lg lg:text-xl font-semibold text-[#0a41a1] mb-2">
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
                    className="w-full text-center px-2 py-3 md:px-4 md:py-6 rounded-md border border-gray-200 bg-white flex flex-col items-center justify-center min-h-[100px]"
                  >
                    <h4 className="text-lg lg:text-xl font-semibold text-[#0a41a1] mb-2">
                      {card?.title}
                    </h4>
                    <p className="leading-relaxed text-sm lg:text-md text-gray-700 break-words font-medium">
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
            className={`${admisbtn?.buttonclass} text-white bg-[#cb000d] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10 relative overflow-hidden group`}
          >
            <span>{admisbtn?.buttontext}</span> <ArrowRight />
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
          </Link>
        )} */}
        {admisbtn && slug !== "bhmct-hotel-management" && (
          <button
            className={`${
              admisbtn.buttonclass || ""
            } text-white bg-[#cb000d] hover:bg-[#c42518] w-full md:w-auto md:px-8 py-2.5 flex items-center justify-center gap-3 rounded-md font-semibold mt-8 cursor-pointer tracking-[0.025em] text-lg shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
          >
            <span>{admisbtn.buttontext}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
          </button>
        )}
        {/* {admisbtn && (
          <div>
            {admisbtn.buttonclass === "progPopup" ? (
              <Popup
                buttonText={admisbtn.buttontext || "Apply Now"}
                buttonClass={`${admisbtn?.buttonclass} text-white bg-[#cb000d] p-[15px] flex items-center justify-around w-3xs flex text-center rounded-lg font-semibold mt-10 relative overflow-hidden group`}
                buttonIcon={<ArrowRight />}
              >
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                <p>This is the content inside the popup.</p>
              </Popup>
            ) : admisbtn.buttonlink ? (
              <Link
                href={admisbtn.buttonlink}
                className={`${
                  admisbtn.buttonclass || ""
                } text-white bg-[#cb000d] p-[15px] flex items-center justify-around max-w-3xs w-full rounded-lg font-semibold mt-10 relative overflow-hidden group`}
              >
                <span>{admisbtn.buttontext}</span> <ArrowRight />
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
              </Link>
            ) : null}
          </div>
        )} */}
      </div>
    </section>
  );
};

export default AdmissionProcessComp;
