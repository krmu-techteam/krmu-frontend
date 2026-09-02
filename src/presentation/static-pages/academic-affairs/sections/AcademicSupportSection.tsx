import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

const AcademicSupportSection = () => {
    return (
        <section className="pb-12 md:pb-20 bg-transparent">
            <div className="max-w-[1530px] mx-auto w-full px-4 md:px-8 xl:px-16">
                {/* Transparent Gradient Border Wrapper */}
                <div className="w-full relative rounded-[10px]">
                    <div
                        className="absolute inset-0 rounded-[10px] pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(90deg, #0161B0 0%, #E7C268 100%)",
                            padding: "3px",
                            WebkitMask:
                                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                        }}
                    />
                    {/* Inner Content Area */}
                    <div className="w-full h-full bg-transparent flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-12 xl:p-16 gap-6 lg:gap-8 relative z-10">
                        {/* Left Content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-center">
                            <h2 className="heading-primary !text-[28px] lg:!text-[36px] !font-medium mb-4 !text-left">
                                We’re Here to Assist
                            </h2>
                            <p className="text-[15px] lg:text-[16px] text-gray-300 font-poppins max-w-sm">
                                For more information or assistance, reach out to
                                the Academic Affairs office
                            </p>
                        </div>

                        {/* Right Content */}
                        <div className="md:w-1/2 w-full flex flex-col justify-center items-start lg:items-center">
                            <ul className="flex flex-col gap-3 md:gap-6 text-[14px] lg:text-[16px] text-gray-300 font-poppins">
                                <li className="flex items-center gap-2 md:gap-4">
                                    <Mail
                                        className="text-white size-[16px] md:size-[24px] shrink-0"
                                        strokeWidth={1.5}
                                    />
                                    <Link
                                        href="mailto:dean.acad@krmangalam.edu.in"
                                        className="hover:text-white text-[13px] md:text-[16px] transition-colors break-all md:break-normal"
                                    >
                                        dean.acad@krmangalam.edu.in
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2 md:gap-4">
                                    <Mail
                                        className="text-white size-[16px] md:size-[24px] shrink-0"
                                        strokeWidth={1.5}
                                    />
                                    <Link
                                        href="mailto:acad.affairs@krmangalam.edu.in"
                                        className="hover:text-white text-[13px] md:text-[16px] transition-colors break-all md:break-normal"
                                    >
                                        acad.affairs@krmangalam.edu.in
                                    </Link>
                                </li>
                                <li className="flex items-center gap-2 md:gap-4">
                                    <Mail
                                        className="text-white size-[16px] md:size-[24px] shrink-0"
                                        strokeWidth={1.5}
                                    />
                                    <Link
                                        href="mailto:associatedean.acad@krmangalam.edu.in"
                                        className="hover:text-white text-[13px] md:text-[16px] transition-colors break-all md:break-normal"
                                    >
                                        associatedean.acad@krmangalam.edu.in
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcademicSupportSection;
