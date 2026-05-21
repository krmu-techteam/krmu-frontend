import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { Download } from "lucide-react";
import Link from "next/link";

type Props = {
  heroSection: any;
};

const ProgrammesAlumni = ({ heroSection }: Props) => {
  const steps = [
    {
      number: "1",
      title: "Portfolio Submission",
      description:
        "Submit 3-5 pieces of work. These can be articles, videos, podcasts, or a data analysis project.",
    },
    {
      number: "2",
      title: "Statement of Intent",
      description:
        "Tell us about the media brand you want to build or the change you want to lead in newsrooms.",
    },
    {
      number: "3",
      title: "Academic Review",
      description:
        "A relevant Bachelor’s degree with a focus on Humanities, Tech, or Business is preferred.",
    },
    {
      number: "4",
      title: "The Digital Interview",
      description:
        "A 30-minute conversation with our faculty to discuss your vision and fit for the program.",
    },
  ];

  const details = [
    {
      label: "Degree awarded",
      value: "Masters of Arts (Journalism and Mass Communication)",
    },
    {
      label: "Duration",
      value: "2 Years (4 semesters)\nFull Time - On Campus",
    },
    {
      label: "School",
      value: "School of Emerging Media & Creator Economy (SEMCE)",
    },
    {
      label: "Location",
      value: "K.R. Mangalam University,\nGurugram, Delhi NCR",
    },
    {
      label: "Fees",
      value: "₹1,20,000 per year*",
    },
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="font-serif text-[#001B44] text-3xl sm:text-4xl lg:text-5xl leading-tight lg:leading-[48px]">
            Begin Your Story
          </h2>

          <p className="mt-6 sm:mt-8 text-[#44474F] text-base sm:text-lg leading-7 sm:leading-[28px] max-w-2xl">
            We are looking for inquisitive minds, ethical storytellers, and
            digital pioneers. Our admissions process is designed to uncover your
            creative potential and professional drive.
          </p>

          <div className="mt-10 sm:mt-14 space-y-8 sm:space-y-10 lg:space-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 sm:gap-6"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 text-lg sm:text-xl font-bold rounded bg-[#dfe5f2] flex items-center justify-center text-[#001B44] shrink-0">
                  {step.number}
                </div>

                <div>
                  <h3 className="font-serif text-[#001B44] text-xl sm:text-2xl leading-snug sm:leading-[32px]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[#44474F] text-sm sm:text-base leading-6 font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#001B44] rounded-xl p-5 sm:p-6 lg:p-8 text-white shadow-xl">
          <h2 className="font-serif text-3xl sm:text-4xl mb-8 sm:mb-10 leading-tight text-[#FFFFFF]">
            Program Details
          </h2>
          <div className="space-y-5">
            {details.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-10 border-b border-white/10 pb-2"
              >
                <span className="text-[#c2bdbd] text-sm leading-6">
                  {item.label}
                </span>

                <span className="sm:text-right sm:max-w-[220px] text-[#FFFFFF] text-sm leading-6 font-semibold whitespace-pre-line">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 border-b border-white/10 pb-3">
            <p className="text-sm sm:text-base leading-7 text-white font-normal">
              <span className="font-semibold">Eligibility -</span> Bachelor’s
              degree in any discipline from a UGC recognised university with
              minimum 50 percent aggregate
            </p>
          </div>
          <p className="mt-2 text-center font-semibold text-[#1D81D4] leading-6 sm:leading-7 text-sm sm:text-base">
            For the detailed fee breakup, please refer to the official fee link
            or speak with our admissions counsellors.
          </p>
          <div className="mt-3 sm:mt-5 space-y-4">
            {/* <button className="w-full cursor-pointer text-center bg-[#E21F21] hover:bg-red-700 transition text-[#FFFFFF] py-3 sm:py-4 rounded-sm text-base sm:text-lg font-medium"> */}
            <NpfPopup
              formId="31c1452015d32698095f833b3e7eb9c5"
              btnClass={`hero-common-btn-b  ${heroSection.herobtn.buttonclass || ""} rounded-md w-full cursor-pointer text-center bg-[#E21F21] hover:bg-red-700 transition text-[#FFFFFF] py-3 sm:py-4 rounded-sm text-base sm:text-lg font-medium`}
              btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
              showIcon={true}
            />
            {/* </button> */}
            <button className="w-full border cursor-pointer border-[#FFFFFF33] hover:bg-white/10 transition text-[#FFFFFF] py-3 sm:py-4 rounded-md text-base sm:text-lg font-medium">
              <Link
                href="https://www.krmangalam.edu.in/pdfs/handbooks/majmc-handbook-2025-27.pdf"
                target="_blank"
              >
                Download Brochure
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesAlumni;
