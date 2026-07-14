import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";
import Link from "next/link";
import { ADMISSION_PROCESS_STEPS } from "@/features/admission/admissions";

const AdmissionProcessSection = () => {
  return (

    <section className="relative z-4 py-8 md:py-12 lg:py-16 px-6 md:px-11 xl:px-16">
      <div className="common-prog-container pb-4">
        <h2 className="heading-primary mb-3">
          Admission Process
        </h2>
        <p className="text-white/90 text-md font-poppins mb-5">
          Commence your Journey in just 6 simple steps
        </p>
      </div>
      <div className="max-w-[1530px] mx-auto w-full mt-2.5 hidden lg:block">
        <Image
          src={`/admisison-steps.png`}
          width={1296}
          height={170}
          alt="Admission Process"
        />
        <div className="admis_proc_btn_grid_items">
          {ADMISSION_PROCESS_STEPS &&
            ADMISSION_PROCESS_STEPS.map((card) => {
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
                      <button className="btn_text font-poppins">{card?.title}</button>
                      <p className="admis_btn_below_text font-poppins">
                        {card?.description}
                      </p>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <div key={card?.id} className="admis_proc_btn_grid_item">
                    <div className="admis_proc_btn_content">
                      <button className="btn_text font-poppins">{card?.title}</button>
                      <p className="admis_btn_below_text font-poppins">
                        {card?.description}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <div className="max-w-[540px] mx-auto w-full flex lg:hidden items-center justify-center">
        <div className="grid grid-cols-1 gap-4 w-full">
          {ADMISSION_PROCESS_STEPS &&
            ADMISSION_PROCESS_STEPS.map((card) => {
              const isLink = card?.link === "admissions.krmangalam.edu.in" || card?.description === "admissions.krmangalam.edu.in ";
              return (
                <div
                  key={card?.id}
                  className="w-full text-center px-4 py-3 rounded-sm border border-gray-200 bg-white flex flex-col items-center justify-center min-h-[100px] shadow-sm active:shadow-md transition-all duration-300"
                >
                  <h4 className="text-lg font-poppins font-semibold text-[#0a41a1] mb-1">
                    {card?.title}
                  </h4>
                  {isLink ? (
                    <p className="leading-tight text-sm text-gray-700 break-all font-medium">
                      <Link
                        href={`https://${card?.description?.trim()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-poppins hover:no-underline text-[#0d6efd] transition-all"
                      >
                        {card?.description}
                      </Link>
                    </p>
                  ) : (
                    <p className="leading-relaxed font-poppins text-sm text-gray-700 break-words font-medium">
                      {card?.description}
                    </p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex items-center justify-center">
      </div>
      <SectionDivider />
    </section>
  );
};

export default AdmissionProcessSection;
