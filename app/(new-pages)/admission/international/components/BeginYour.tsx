import Image from "next/image";
import { BeginHubSection } from "../constant";
import NoPaperFormsWidget from "@/app/(landing-page)/admission/CommonComponent2026/NoPaperFormsWidget";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollButton from "@/app/(landing-page)/admission/CommonComponent2026/ScrollButton";

type Props = {
  data: BeginHubSection;
  formId: string;
};

const BeginYour = ({ data, formId }: Props) => {
  return (
    <section className="relative overflow-hidden bg-[#001732] pt-[50px] px-5 font-poppins">
      <div className="max-w-[1427px] mx-auto flex lg:px-5">
        <div className="hidden lg:block lg:w-1/2"></div>
        <div className="w-full lg:w-1/2 lg:flex lg:justify-end">
          <p
            className="text-white text-sm lg:text-right mb-5"
            dangerouslySetInnerHTML={{ __html: data.formNote }}
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-14">
          {/* LEFT CONTENT */}
          <div className="text-white w-full lg:w-2/3 overflow-hidden">
            <h2
              className="text-2xl md:text-4xl xl:text-5xl font-extrabold font-poppins leading-tight mb-6"
              dangerouslySetInnerHTML={{ __html: data.heading }}
            />

            <p className="text-white lg:text-[26px] max-w-[780px] mb-8">
              {data.description}
            </p>

            {/* <ul className="space-y-3 text-sm">
                {data.highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-400">✔</span>
                    {item.text}
                  </li>
                ))}
              </ul> */}

            {/* MAP IMAGE */}
            <div className="mt-12  rounded-xl shadow-xl w-full">
              <Image
                src={data.mapImage.src}
                width={data.mapImage.width}
                height={data.mapImage.height}
                alt={data.mapImage.alt}
                className="rounded-lg w-full lg:h-[478px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT FORM IMAGE */}
          <div className="relative w-full lg:w-1/3">
            {/* <div className="bg-white rounded-2xl shadow-2xl p-4"> */}
            <div>
              {/* <Image
                  src={data.formImage.src}
                  width={data.formImage.width}
                  height={data.formImage.height}
                  alt={data.formImage.alt}
                  className="rounded-xl"
                  priority
                /> */}
              {/* {formId && (
                  <NoPaperFormsWidget widgetId={formId} height="600px" />
                )} */}
              {formId && (
                <div className="heroBannerForm__form">
                  <div className="heroBannerForm-header">
                    <h3 className="mb-0 text-center font-poppins font-bold beginFormHeading">
                      Apply for International <br />
                      Admission Here
                    </h3>
                  </div>

                  <NoPaperFormsWidget widgetId={formId} height="650px" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto border-2 border-[#263e51] p-5 lg:p-10 text-center text-white rounded-3xl mt-10">
        <h6 className="max-w-[860px] mx-auto mb-5 text-xl md:text-2xl lg:text-[42px] font-semibold font-poppins">
          Apply for International Admission at{" "}
          <br className="hidden lg:block" /> K.R. Mangalam University Today
        </h6>
        <p className="mb-7 font-poppins text-2xl">
          Industry-Aligned Courses | Top Recruiters | Global Exposure
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-10">
          <ScrollButton
            targetId="apply-section"
            highlightClass="flash-border"
            btnClass="text-white bg-[linear-gradient(135deg,#e31e24_0%,#c41920_100%)] shadow-[0_4px_14px_0_rgba(227,30,36,0.35)] text-sm md:text-lg min-h-14 inline-flex items-center justify-center gap-2 font-semibold cursor-pointer rounded-xl   transition-all duration-150 ease-out p-3 sm:py-4 sm:px-6 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_0_rgba(227,30,36,0.45)] hover:bg-[linear-gradient(135deg,#ff4d52_0%,#e31e24_100%)]"
          >
            Enrol Now. Limited Seats Available! <ArrowUpRight color="#fff" />
          </ScrollButton>

          <Link
            href="tel:+919311411717"
            className="text-white bg-[#0060aa] text-sm  sm:text-lg min-h-14 inline-flex items-center justify-center gap-2 font-semibold cursor-pointer rounded-xl   transistion-all duration-150 ease-out py-4 px-6 hover:-translate-y-0.5"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone-call-icon lucide-phone-call"
            >
              <path d="M13 2a9 9 0 0 1 9 9" />
              <path d="M13 6a5 5 0 0 1 5 5" />
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>{" "}
            +91 9311411717
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#f5a623"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
            </svg>
            <span className="text-xl">UGC Recognised</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#f5a623"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-xl">NAAC A Accredited</span>
          </div>
          {/* <div className="flex items-center gap-2 text-sm text-black">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#f5a623"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
              </svg>
              <span>BCI Approved</span>
            </div> */}
        </div>
      </div>
      <div className="py-5 text-white text-center text-xl">
        <p>&copy; Copyright K.R. Mangalam University. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default BeginYour;
