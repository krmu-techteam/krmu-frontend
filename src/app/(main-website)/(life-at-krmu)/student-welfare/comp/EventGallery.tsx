"use client";

import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { eventsData } from "./data";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["600", "700"],
});

export const EventGallery = () => {
    return (
        <section className="bg-[#FAF8FC] pt-12 pb-20 sm:pb-24 px-4 md:px-12 relative overflow-hidden">
            <div className="mx-auto w-full max-w-[1550px]">
                <h2
                    className={`${playfair.className} text-center text-[32px] md:text-[41px] font-bold text-black mb-12`}
                >
                    Event Gallery
                </h2>

                <div className="relative px-2 sm:px-6">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 3000,
                            }),
                        ]}
                        className="relative w-full"
                    >
                        <div className="absolute right-6 top-[-68px] hidden lg:flex items-center gap-3">
                            <CarouselPrevious className="static translate-y-0 w-[40px] h-[40px] border-2 border-black rounded-full text-black hover:bg-black/10 z-20 cursor-pointer" />
                            <CarouselNext className="static translate-y-0 w-[40px] h-[40px] border-2 border-black rounded-full text-black hover:bg-black/10 z-20 cursor-pointer" />
                        </div>

                        <CarouselContent className="-ml-4 md:-ml-6">
                            {eventsData.map((event) => (
                                <CarouselItem
                                    key={event.id}
                                    className="basis-full sm:basis-1/2 md:basis-2/4 lg:basis-3/9 xl:basis-1/4 pl-4 md:pl-6"
                                >
                                    <Link
                                        href={event.link}
                                        className="block w-full"
                                    >
                                        <div className="relative h-[600px] w-full overflow-hidden rounded-[20px] flex flex-col justify-end p-6 bg-neutral-900 group shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                                            {event.image ? (
                                                <Image
                                                    src={event.image}
                                                    alt={event.alt}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-850 via-neutral-800 to-neutral-900 transition-colors duration-300 group-hover:from-neutral-800 group-hover:to-neutral-850" />
                                            )}
                                            {/* Dark overlay to ensure white text readability */}
                                            <div className="absolute inset-0 bg-[linear-gradient(180deg,#00000000_0%,#00000000_40%,#000000F2_100%)] pointer-events-none z-1" />

                                            <h4
                                                className={`${playfair.className} text-[20px] md:text-[33px] font-bold text-white text-center z-10 mb-2 relative`}
                                            >
                                                {event.title}
                                            </h4>
                                        </div>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="flex lg:hidden justify-center items-center gap-4 mt-8 pb-4">
                            <CarouselPrevious className="static translate-y-0 w-[40px] h-[40px] border-2 border-black rounded-full text-black hover:bg-black/10 z-20 cursor-pointer" />
                            <CarouselNext className="static translate-y-0 w-[40px] h-[40px] border-2 border-black rounded-full text-black hover:bg-black/10 z-20 cursor-pointer" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};
