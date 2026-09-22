import Image from "next/image";

const BENEFITS = [
    "Diverse and Supportive work environment",
    "Modern Infrastructure and well-equipped classrooms",
    "Academic freedom for the development of both academicians and scholar",
    "World-class research opportunities",
    "Transportation facility in any part of Gurugram/Delhi NCR",
];

const CareerHeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#2E4540] via-[#17433F] to-[#061623] px-4 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
            <div className="max-w-[1440px] mx-auto w-full pt-[140px] md:pt-[160px] lg:pt-[180px]">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-end">
                    {/* Left Column: Both text blocks unified with clean, compact spacing */}
                    <div className="md:col-span-7 lg:col-span-8 xl:col-span-8 text-white pb-8 md:pb-12 lg:pb-14 md:pl-2 lg:pl-6">
                        {/* Top Hero Section */}
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] font-fraunces font-semibold mb-4 sm:mb-5 leading-[1.2] tracking-tight">
                                We work together within a team environment of
                                mutual respect, honesty and integrity
                            </h1>
                            <p className="text-[16px] text-white/90 leading-relaxed font-light max-w-2xl">
                                K.R. Mangalam University is committed to
                                creating a future for the country’s young
                                leaders, building upon research and
                                innovation-based global academic institution
                                striving to focus on bridging the knowledge gap
                                between students and industry.
                            </p>
                        </div>

                        {/* Why Work With Us Section - immediately following, no big void gap */}
                        <div className="mt-8 md:mt-10 lg:mt-12">
                            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-fraunces font-semibold mb-3 sm:mb-4 text-white tracking-tight">
                                Why work with us
                            </h2>
                            <p className="text-[16px] text-white/85 leading-relaxed font-light max-w-xl">
                                We are always on the lookout for
                                well-accomplished, empathetic and knowledgeable
                                academicians equipped with tools to help an
                                upcoming generation of scholars become
                                successful both in personal and professional
                                endeavors.
                            </p>

                            {/* Mobile Benefit Cards (No shadow, clean border & backdrop) */}
                            <div className="mt-6 flex flex-col gap-3 md:hidden">
                                {BENEFITS.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-4 rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md text-white transition-all duration-300"
                                    >
                                        <p className="text-sm font-medium leading-relaxed">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Moderately sized Student Image standing on bottom */}
                    <div className="hidden md:flex md:col-span-5 lg:col-span-4 xl:col-span-4 justify-center md:justify-end items-end self-end">
                        <div className="relative w-full max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] h-[400px] md:h-[460px] lg:h-[510px] xl:h-[560px] flex items-end justify-center md:justify-end">
                            <Image
                                src="/careers/19.png"
                                width={369}
                                height={529}
                                alt=""
                                priority
                                className="w-auto h-full max-h-[560px] object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerHeroSection;
