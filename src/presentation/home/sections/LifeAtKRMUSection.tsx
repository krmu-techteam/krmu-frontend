import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import SectionDivider from "@/components/common/SectionDivider";
import Link from "next/link";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
    LIFE_AT_KRMU_CAROUSEL_CONFIGS,
    LIFE_AT_KRMU_GALLERY,
} from "@/features/home";

export function LifeAtKRMUSection() {
    return (
        <section className="relative w-full overflow-hidden py-10 md:py-12 xl:py-20 font-poppins">
            {/* Precision Spec Glow (Bottom Left) - Spec: Blue Institutional Soft Light */}
            <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.08)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none opacity-40 transition-opacity"></div>

            <div className="container mx-auto px-0 md:px-12 relative z-10 text-center mb-6 md:mb-8 lg:mb-12">
                <SectionTitle title="Why KRMU?" />
                <p className="font-poppins font-[275] text-[24px] md:text-[42px] leading-[1.2] md:leading-[30px] tracking-normal text-white mb-6">
                    A closer look at Life at KRMU
                </p>
                <p className="max-w-[340px] sm:max-w-[380px] md:max-w-7xl text-justify mx-auto text-white/80 text-sm md:text-[16px] leading-[1.6] md:leading-[30px] font-normal md:text-center">
                    At K.R. Mangalam University, life goes be yond the
                    classroom. Our campus is a thriving hub of academic
                    excellence, cultural diversity, and vibrant student life. We
                    encourage students to explore their passion by making them
                    participate in various cultural events, sports, and
                    community services. We believe in creating a friendly and
                    positive environment where students can learn, grow, and
                    build lasting relationships that shape their futures.
                </p>
                <Link
                    href={"/happenings/news-and-events"}
                    className="inline-flex gap-1 underline items-center  text-[16px] font-light tracking-wide text-white hover:text-white/70  transition-colors duration-300 mt-6"
                >
                    <span>
                        <ArrowRight size={18} />
                    </span>
                    <span>Learn More</span>
                </Link>
            </div>

            {/* Image Gallery Belt - Using Unified Carousel */}
            <div className="relative w-full mb-16 md:mb-20">
                <Carousel
                    autoScroll={true}
                    autoScrollSpeed={1}
                    showArrows={true}
                    showDots={false}
                    className="w-full"
                    containerClassName="-ml-0"
                    slideClassName="basis-auto shrink-0 px-0 group"
                    options={{ loop: true, align: "center" }}
                    prevArrowClassName="!left-4 md:!left-8 2xl:!left-[calc((100vw-1440px)/2+2rem)] z-30 !rounded-[3px] !border-[#CB000D] !border-2 !bg-[#CB000D]"
                    nextArrowClassName="!right-4 md:!right-8 2xl:!right-[calc((100vw-1440px)/2+2rem)] z-30 !rounded-[3px] !border-[#CB000D] !border-2 !bg-[#CB000D]"
                >
                    {LIFE_AT_KRMU_GALLERY.map((img) => (
                        <div
                            key={img.id}
                            className="h-[280px] sm:h-[350px] md:h-[420px] w-auto shrink-0 relative overflow-hidden grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-data-[active=true]:grayscale-0 group-data-[active=true]:opacity-100 transition-all duration-700 ease-in-out"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="h-full w-auto object-contain block"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Feature Cards Grid - Premium Dark Theme */}
            <div className="max-w-[1530px] mx-auto relative z-10 px-4 md:px-8 xl:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-5">
                    {LIFE_AT_KRMU_CAROUSEL_CONFIGS.map((card, i) => (
                        <div
                            key={i}
                            className="group flex flex-col rounded-[4px] overflow-hidden bg-[#0A1017]"
                        >
                            <div className="relative aspect-4/5 w-full flex flex-col justify-end overflow-hidden">
                                <Image
                                    src={card.bg}
                                    alt={card.label}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

                                <div className="relative p-5 md:p-6 xl:p-8">
                                    <h3 className="text-white font-poppins font-light text-[28px] xl:text-[42px] leading-[32px] xl:leading-[47px] mb-2 md:mb-4 whitespace-pre-line group-hover:text-brand-gold transition-colors">
                                        {card.title
                                            .split("\n")
                                            .map((line, idx) => (
                                                <span
                                                    key={idx}
                                                    className={
                                                        line === card.accent
                                                            ? "text-brand-gold"
                                                            : ""
                                                    }
                                                >
                                                    {line}
                                                    {idx !== 2 ? "\n" : ""}
                                                </span>
                                            ))}
                                    </h3>
                                </div>
                            </div>
                            <Link
                                href={card.url || "#"}
                                className="block w-full transition-colors duration-300"
                            >
                                <div className="flex items-center justify-between px-8 py-5">
                                    <span className="text-white font-poppins font-medium text-xl md:text-[24px] leading-tight group-hover:text-brand-gold transition-colors">
                                        {card.label}
                                    </span>
                                    <ArrowUpRight
                                        size={20}
                                        className="text-white group-hover:text-brand-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <SectionDivider />
        </section>
    );
}
