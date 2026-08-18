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
                  className="w-full text-center px-4 py-4 rounded-[4px] bg-gradient-to-b from-white/[0.14] via-black/15 to-black/25 flex flex-col items-center justify-center min-h-[100px] transition-all antialiased [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]"
                >
                  {card?.mobcounting && (
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#f5a623] bg-[#f5a623]/15 border border-[#f5a623]/25 px-3 py-0.5 rounded-full mb-2 font-poppins">
                      STEP {card.mobcounting}
                    </span>
                  )}
                  <h4 className="text-[17px] md:text-lg font-serif font-semibold text-white mb-1.5 antialiased">
                    {card?.title}
                  </h4>
                  {isLink ? (
                    <p className="leading-tight text-sm text-[#38bdf8] break-all font-medium font-poppins antialiased">
                      <Link
                        href={`https://${card?.description?.trim()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-poppins hover:text-white transition-all"
                      >
                        {card?.description}
                      </Link>
                    </p>
                  ) : (
                    <p className="leading-relaxed font-poppins text-sm text-white/80 break-words font-medium antialiased">
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
