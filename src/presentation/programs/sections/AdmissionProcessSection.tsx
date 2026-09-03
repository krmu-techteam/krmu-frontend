import Image from "next/image";
import { AdmissionProcessSectionProps } from "@/features/programs";
import { AdmissionCardDesktop, AdmissionCardMobile } from "../components";
import SectionDivider from "@/components/common/SectionDivider";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";

const AdmissionProcessSection = ({
    heading,
    highlight,
    desc,
    admissionCards,
    admisbtn,
    slug,
    formId,
}: AdmissionProcessSectionProps) => {
    return (
        <section
            id="admission-process"
            className="relative z-10 prog-global-padding font-poppins py-10 lg:py-16 xl:py-20 px-4 md:px-8 2xl:px-0 scroll-mt-28"
        >
            <div className="common-prog-container">
                <h2 className="heading-primary mb-5">
                    {heading} {highlight}
                </h2>
                <p className="text-white/90 text-md font-poppins mb-8 md:mb-10">
                    {desc}
                </p>
            </div>
            <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block">
                <Image
                    src="/admisison-steps.png"
                    width={1296}
                    height={170}
                    alt="Admission Process"
                    className="w-full h-auto"
                />
                <div className="admis_proc_btn_grid_items">
                    {admissionCards &&
                        admissionCards.map((card) => (
                            <AdmissionCardDesktop key={card?.id} card={card} />
                        ))}
                </div>
            </div>
            <div className="max-w-full mx-auto w-full flex lg:hidden items-center justify-center">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
                    {admissionCards &&
                        admissionCards.map((card) => (
                            <AdmissionCardMobile key={card?.id} card={card} />
                        ))}
                </div>
            </div>
            <div className="flex items-center justify-center mt-8">
                {admisbtn && slug !== "bhmct-hotel-management" && (
                    <NpfPopup
                        formId={formId}
                        btnClass={`w-fit flex items-center justify-center gap-2 h-[45px] rounded-[3px] font-normal transition-all duration-300 ease-in-out uppercase text-[14px] md:text-[15px] leading-none tracking-wide relative overflow-hidden group px-8 bg-[#CB000D] text-white border-1 border-transparent hover:bg-[#CB000D]/90 shadow-lg cursor-pointer ${admisbtn.buttonclass || ""}`}
                        btnText={admisbtn.buttontext || "Apply Now"}
                        showIcon={true}
                    />
                )}
            </div>
        </section>
    );
};

export default AdmissionProcessSection;
