import { AbcNadButton } from "@/lib/types/examination";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SectionDivider from "@/components/common/SectionDivider";

type Props = {
    heading: string;
    url: string;
    btns: AbcNadButton[];
};

const ExaminationABCDigilocker = ({ heading, url, btns }: Props) => {
    return (
        <section className="relative py-12 md:py-16 xl:py-20 px-4 bg-transparent">
            <div className="max-w-[1440px] mx-auto w-full">
                <div className="bg-[#061623] rounded-[4px] p-6 sm:p-10 lg:p-10">
                    <div className="lg:flex items-center justify-between gap-12 lg:gap-16">
                        <div className="lg:w-[65%]">
                            <h3 className="text-2xl font-serif sm:text-3xl md:text-[38px] font-bold text-white mb-4">
                                {heading}
                            </h3>

                            <p className="mb-5 font-normal text-white text-sm sm:text-base lg:text-[18px] leading-[1.6]">
                                The National Academic Depository (NAD) is an
                                online repository available around the clock,
                                storing academic credentials such as awards,
                                diplomas, degrees, and transcripts.
                            </p>

                            {url && (
                                <div className="mb-6">
                                    <Link
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-base sm:text-[18px] font-medium text-[#2caee6] hover:text-[#7dd3fc] transition-colors group"
                                    >
                                        <span className="underline underline-offset-4 break-all">
                                            {url}
                                        </span>
                                        <ExternalLink className="w-4 h-4 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            )}

                            {btns && btns.length > 0 && (
                                <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                                    {btns.map((btn) => (
                                        <Link
                                            key={btn?.id}
                                            href={btn?.btn_link || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-[2px] bg-[#cb000d] hover:bg-[#b0000b] text-white text-xs sm:text-sm font-semibold transition-all duration-200  hover:shadow-lg inline-flex items-center justify-center gap-2"
                                        >
                                            <span>{btn?.btn_text}</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="lg:w-[35%] mt-8 lg:mt-0 flex justify-center">
                            <div className="relative w-full max-w-[420px] aspect-square  ] overflow-hidden bg-[#061623]/60 flex items-center justify-center">
                                <Image
                                    src="/examination/Digilocker-Benefits.webp"
                                    width={490}
                                    height={463}
                                    alt=""
                                    className="w-full h-auto object-contain rounded-[1px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
};

export default ExaminationABCDigilocker;
