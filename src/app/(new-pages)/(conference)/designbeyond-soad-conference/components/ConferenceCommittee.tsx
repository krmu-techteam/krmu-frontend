"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { committeeMembers } from "../constant";
import CommitteeMemberCard from "./common/CommitteeMemberCard";
import Autoplay from "embla-carousel-autoplay";

const ConferenceCommittee = () => {
    return (
        <section className="w-full bg-[#f5f2eb] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-[88px]">
                {/* Heading */}
                <div className="mb-7 sm:mb-8">
                    <h2 className="text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-[#1d1d1d] sm:text-4xl md:text-[34px]">
                        Conference Committee
                    </h2>

                    <p className="mt-2 font-serif text-sm text-[#6f6a63] sm:text-base">
                        Patrons
                    </p>
                </div>

                {/* Carousel */}
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 1500,
                        }),
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {committeeMembers.map((member) => (
                            <CarouselItem
                                key={member.name}
                                className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
                            >
                                <CommitteeMemberCard
                                    image={member.image}
                                    role={member.role}
                                    name={member.name}
                                    designation={member.designation}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation */}
                    <div className="mt-6 flex items-center justify-end gap-2">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
};

export default ConferenceCommittee;
