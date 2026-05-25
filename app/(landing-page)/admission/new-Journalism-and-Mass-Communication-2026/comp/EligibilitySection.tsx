import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import React from "react";

const eligibilityData = [
  {
    id: "01",
    text: "Bachelor’s degree in any discipline from a UGC recognised university or equivalent institution",
  },
  {
    id: "02",
    text: "Minimum 50 percent aggregate marks",
  },
  {
    id: "03",
    text: "Strong interest in journalism, storytelling, media, digital content or related fields",
  },
];

const admissionSteps = [
  {
    step: "Step-01",
    text: "Submit the online application form",
  },
  {
    step: "Step-02",
    text: "Appear for the university level selection process, as applicable (test, portfolio review or interview)",
  },
  {
    step: "Step-03",
    text: "Receive admission offer, complete fee payment and document verification",
  },
  {
    step: "Step-04",
    text: "Attend orientation and begin classes at SEMCE",
  },
];

const EligibilitySection = ({ heroSection }: { heroSection: any }) => {
  console.log("heroSection", heroSection.herobtn.buttontext);
  return (
    <section className="w-full bg-[#f3f0f4] pb-10 sm:pb-12 lg:pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <hr className="mb-10 border-t border-gray-300" />
        <h2 className="text-[26px] md:text-[36px] font-serif font-normal text-[#131B2E] mb-10">
          Eligibility, admissions and fees
        </h2>
        <div className="bg-[#f8f8f8] rounded-xl p-4 md:p-6">
          <h3 className="text-[26px] md:text-[16px] font-semibold text-[#131B2E] mb-1">
            Eligibility
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eligibilityData.map((item, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-[#5B00DF] font-bold text-lg shrink-0">
                  {item.id}
                </span>

                <p className="text-[#44474F] text-[14px] font-normal leading-5">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f8f8f8] rounded-2xl p-6 md:p-2 mt-8">
          <h3 className="text-xl font-semibold text-[#131B2E] mb-6">
            Admission process
          </h3>

          <div className="flex flex-col xl:flex-row p-0 md:p-5 gap-3 md:gap-4 xl:gap-0 w-full">
            {admissionSteps.map((item, index) => {
              let bgColor = "bg-[#001B44]";
              if (index === 1 || index === 2) bgColor = "bg-[#0B3573]";
              if (index === 3) bgColor = "bg-[#006A6A]";

              let clipPathClass = "";
              if (index === 0) {
                clipPathClass =
                  "xl:[clip-path:polygon(0_0,calc(100%-25px)_0,100%_50%,calc(100%-25px)_100%,0_100%)]";
              } else if (index === 3) {
                clipPathClass =
                  "xl:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,25px_50%)]";
              } else {
                clipPathClass =
                  "xl:[clip-path:polygon(0_0,calc(100%-25px)_0,100%_50%,calc(100%-25px)_100%,0_100%,25px_50%)]";
              }

              return (
                <div
                  key={index}
                  className={`relative flex items-center py-3 px-4 xl:p-0 xl:py-1 xl:px-8 min-h-[80px] xl:min-h-[100px] w-full xl:flex-1
                  ${bgColor}
                  ${index !== 0 ? "xl:-ml-[20px]" : ""}
                  ${clipPathClass}
                  rounded-xl xl:rounded-none ${index === 0 ? "xl:rounded-l-sm" : ""} ${index === admissionSteps.length - 1 ? "xl:rounded-r-sm" : ""}
                  `}
                >
                  <div className="flex flex-col xl:flex-row items-center gap-1 xl:gap-4 w-full">
                    <span className="text-[#FF9D00] font-semibold text-[14px] whitespace-nowrap text-center">
                      {item.step}
                    </span>
                    <p className="text-[#FFFFFF] text-[13px] font-normal leading-4 text-center xl:text-left">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#001d54] rounded-2xl p-4 md:p-6 mt-6 md:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 items-center">
            <div>
              <h2 className="text-[#FFFFFF] text-[18px] md:text-[20px] font-bold mb-2 md:mb-3">
                Fees and payment
              </h2>

              <p className="text-[#FFFFFF] text-[13px] md:text-[14px] leading-5">
                The MA (Journalism & Mass Communication) is a two year programme
                spread across four semesters. Fees are charged annually and paid
                semester wise.
              </p>
            </div>

            <div className="lg:pl-16">
              <p className="text-[#FFFFFF] text-[14px] md:text-lg font-normal">
                Annual Academic Fee (MA JMC):
              </p>

              <h3 className="text-[#FFFFFF] text-[30px] md:text-[42px] font-semibold leading-tight">
                ₹1,10,000 /-
              </h3>

              <p className="text-[#FFFFFF] text-[11px] md:text-sm mt-1 leading-5">
                (Hostel, transport and other facilities are charged separately
                as per university norms.)
              </p>
              <div>
                {/* <button className="mt-3 md:mt-4 bg-[#E21F21] hover:bg-[#d73327] cursor-pointer transition-all duration-300 text-[#FFFFFF] text-sm md:text-lg font-medium px-6 md:px-10 py-3 md:py-4 rounded-[4px] min-w-[180px] md:min-w-[240px]"> */}
                <NpfPopup
                  formId="31c1452015d32698095f833b3e7eb9c5"
                  btnClass={`hero-common-btn-b  ${heroSection.herobtn.buttonclass || ""} rounded-md mt-3 md:mt-4 bg-[#E21F21] hover:bg-[#d73327] cursor-pointer transition-all duration-300 text-[#FFFFFF] text-sm md:text-lg font-medium px-6 md:px-10 py-3 md:py-4 rounded-[4px] min-w-[180px] md:min-w-[240px]`}
                  btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
                  showIcon={true}
                />
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
