import Image from "next/image";
import { PARTNER_UNIVERSITIES } from "@/features/home";
import { Carousel } from "@/components/common/Carousel";
import { SectionTitle } from "@/components/common/SectionTitle";
import SectionDivider from "@/components/common/SectionDivider";

export function PartnersSection() {
    return (
        <section className="relative w-full pt-10 md:pt-12 xl:pt-20 pb-10 md:pb-12 xl:pb-20 font-poppins">
            {/* Institutional Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.05)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none"></div>

            <div className="w-full max-w-[1530px] mx-auto relative z-10 text-center">
                <div className="px-4 md:px-8 xl:px-16">
                    <SectionTitle title="Global Partners" />

                    <p className="max-w-5xl mx-auto text-white/90 text-[15px] md:text-[16px] leading-relaxed mb-6 md:mb-16 font-light text-justify md:text-center">
                        K.R. Mangalam University is dedicated to broadening
                        educational and research opportunities through strategic
                        international partnerships with esteemed universities
                        and institutions around the world. These collaborations
                        enhance our academic landscape, offering unique global
                        perspectives and industry insights.
                    </p>
                </div>

                <Carousel
                    options={{ loop: true, align: "center" }}
                    autoScroll={true}
                    autoScrollSpeed={1}
                    autoplay={false}
                    showArrows={true}
                    showDots={false}
                    className="px-0 sm:px-12 md:px-16"
                    containerClassName="items-center"
                    slideClassName="basis-[40%] sm:basis-1/3 lg:basis-1/5 xl:basis-1/6 px-1.5 md:px-2"
                    prevArrowClassName="hidden sm:flex left-1 md:left-2 lg:left-3 !rounded-[4px] !bg-[#2C516E] !text-[#ffffff] !border-none hover:bg-brand-blue"
                    nextArrowClassName="hidden sm:flex right-1 md:right-2 lg:right-3 !rounded-[4px] !bg-[#2C516E] !text-[#ffffff] !border-none hover:bg-brand-blue"
                >
                    {PARTNER_UNIVERSITIES.map((partner, i) => (
                        <div
                            key={i}
                            className="h-[85px] sm:h-[80px] md:h-[110px] bg-white rounded-[3px] px-2 sm:px-4 py-2 flex items-center justify-center shadow-md hover:shadow-xl cursor-pointer w-full mx-auto"
                        >
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                width={200}
                                height={90}
                                className="h-full w-auto object-contain max-h-full"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="hidden md:block">
                <SectionDivider />
            </div>
        </section>
    );
}
