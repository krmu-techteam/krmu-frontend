import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ADMISSION_PROCESS_STEPS } from "@/features/admission/admissions";
import {
    AdmissionCardDesktop,
    AdmissionCardMobile,
} from "@/presentation/programs/components";

const AdmissionProcessSection = () => {
    return (
        <section className="relative z-4 py-8 md:py-12 lg:py-16 px-4 md:px-6">
            <div className="max-w-[1440px] mx-auto w-full">
                {/* Centered Heading matching single program page */}
                <div className="common-prog-container pb-4 text-center mx-auto max-w-[700px]">
                    <h2 className="heading-primary mb-3">Admission Process</h2>
                    <p className="text-white/90 text-sm md:text-base font-poppins mb-6 md:mb-10">
                        Commence your Journey in just 6 simple steps
                    </p>
                </div>

                {/* Desktop View (1320px container perfectly aligned to steps ribbons) */}
                <div className="max-w-[1320px] mx-auto w-full mt-2.5 hidden lg:block">
                    <Image
                        src="/admisison-steps.png"
                        width={1296}
                        height={170}
                        alt="Admission Process"
                        className="w-full h-auto"
                        priority
                    />
                    <div className="admis_proc_btn_grid_items">
                        {ADMISSION_PROCESS_STEPS &&
                            ADMISSION_PROCESS_STEPS.map((card) => (
                                <AdmissionCardDesktop
                                    key={card?.id}
                                    card={card as any}
                                />
                            ))}
                    </div>
                </div>

                {/* Mobile View */}
                <div className="max-w-full mx-auto w-full flex lg:hidden items-center justify-center">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
                        {ADMISSION_PROCESS_STEPS &&
                            ADMISSION_PROCESS_STEPS.map((card) => (
                                <AdmissionCardMobile
                                    key={card?.id}
                                    card={card as any}
                                />
                            ))}
                    </div>
                </div>

                {/* Centered Enroll Now Button matching Screenshot 2 & single program page */}
                <div className="flex items-center justify-center mt-8 md:mt-12">
                    <Link
                        href="https://admissions.krmangalam.edu.in/?utm_source=website&utm_medium=admissions_page&utm_campaign=admission_process"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit flex items-center justify-center gap-2 h-[45px] rounded-[3px] font-medium transition-all duration-300 ease-in-out uppercase text-[14px] md:text-[15px] leading-none tracking-wide px-8 bg-[#CB000D] text-white hover:bg-[#CB000D]/90 shadow-lg shadow-[#CB000D]/20 cursor-pointer"
                    >
                        <span>ENROLL NOW</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            <div className="mt-8 md:mt-12">
                <SectionDivider />
            </div>
        </section>
    );
};

export default AdmissionProcessSection;
