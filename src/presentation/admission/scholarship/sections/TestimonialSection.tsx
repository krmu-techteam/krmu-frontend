"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import TestimonialCard from "../components/TestimonialCard";

export type ScholarTestimonial = {
    id: number;
    name: string;
    course: string;
    image: string;
    content: string;
};

export const scholarTestimonials: ScholarTestimonial[] = [
    {
        id: 1,
        name: "Niyati khokhar",
        course: "B.Tech CSE (AI & ML)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/st1_5226e374a6.jpg",
        content: `I am extremely grateful to the management and the scholarship committee for awarding me this scholarship. This opportunity has been a great support in my academic journey and has reduced a significant part of the financial burden on my family. Because of this scholarship, I am able to focus more on my studies without constant financial stress. The encouragement and support provided through this initiative have boosted my confidence and motivated me to work harder and achieve better results. I sincerely thank the institution and all the respected faculty members for believing in me and giving me this valuable opportunity. I will always strive to make the best use of this support and bring pride to my institution.`,
    },
    {
        id: 3,
        name: "Himanshi",
        course: "B.Tech CSE (AI & ML)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/st3_c51be85804.jpg",
        content: `I am truly grateful to receive the scholarship from K.R. Mangalam University. This opportunity has motivated me to work even harder in my academic journey. The scholarship has reduced my financial burden and allowed me to focus better on my studies, projects, and skill development in the field of Artificial Intelligence and Machine Learning. I sincerely thank the university and the School of Engineering & Technology for recognising my efforts and supporting my education. This encouragement inspires me to keep improving and contribute positively to the university community.`,
    },
    {
        id: 4,
        name: "Lucky Pawar",
        course: "B.Tech CSE (AI & ML)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/st4_188bc298cc.jpg",
        content: `Receiving a 100% scholarship from KRMU has been a life-changing opportunity. It has motivated me to pursue my academic goals with greater confidence and dedication. I’m truly grateful to the university for recognising my potential and supporting my journey. This scholarship has inspired me to aim higher and work harder.`,
    },
    {
        id: 2,
        name: "Aryan Solanki",
        course: "B.Tech CSE (AI & ML)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/st2_7c417f9fc4.jpg",
        content: `I am writing to express the generous gesture in granting me the full scholarship for my B.Tech in Computer Science (AI & ML) at K.R. Mangalam University. This scholarship to me has been a pivotal moment in my educational journey. Apart from the financial assistance which has been a great relief to my family, the scholarship has given me the freedom to focus entirely on my personal technical growth as I am not distracted by the financial constraints anymore. This scholarship to me is not only a recognition of my past achievements but also a belief in my future potential. I promise to keep it alive by being actively involved in the department's research activities and by upholding the highest standards of my studies in the next semesters. I appreciate the institution’s guidance and the fact that merit is valued and supported.`,
    },
    {
        id: 5,
        name: "Anshi Raghav",
        course: "B.A. LL.B. (Hons.)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/st5_f00592141b.jpeg",
        content: `I am profoundly grateful to K.R. Mangalam University for awarding me a 100% scholarship. This support has been a turning point in my academic journey, lifting a significant financial burden from my family and motivating me to strive for excellence. The scholarship has given me renewed confidence and purpose, inspiring me to pursue my goals with greater determination. I am thankful to the University for creating an ecosystem where talent is nurtured and merit is rewarded. This opportunity has not only shaped my present but has also given clear direction to my future.`,
    },
    {
        id: 6,
        name: "Meghna Kumar",
        course: "B.Tech. (AI & ML)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Whats_App_Image_2025_12_15_at_3_54_43_PM_d021cdf97c.jpeg",
        content: `I am sincerely grateful to the University for awarding me this scholarship. This support has eased your financial responsibilities and strengthened your motivation to work harder toward your academic and career goals. Being recognised in this way is truly an honor for you. You deeply appreciate the University and the scholarship committee for believing in your potential and investing in your future. Their generosity has made a significant difference in your educational journey, and you are committed to making the very best use of this opportunity.`,
    },
    {
        id: 7,
        name: "Kirti Nath",
        course: "B.A. LL.B. (Hons.)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/kiriti_1_84cbff81fa.jpg",
        content: `Receiving this scholarship has been a significant milestone in my academic journey. It has not only provided me with essential financial support but has also reaffirmed my belief in the value of dedication, hard work, and perseverance. This scholarship has eased financial constraints and allowed me to focus more fully on my studies and academic growth. With this support, I have been able to engage more deeply in my coursework, pursue my academic interests with confidence, and work towards my long-term goals without constant financial anxiety. Beyond financial assistance, this scholarship has motivated me to strive for excellence and uphold the values of responsibility and integrity. I am deeply grateful for the trust placed in me, and I remain committed to making the most of this opportunity by contributing positively to my institution and society.`,
    },
    {
        id: 8,
        name: "Ritika Madan",
        course: "B.A. LL.B. (Hons.)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/ritik_1_f43e40ba59.jpg",
        content: `I am genuinely grateful to be a recipient of this scholarship, as it has been a tremendous source of encouragement and motivation in my academic journey. This support has enabled me to remain focused on my goals while continuously striving to improve myself both academically and personally. By easing financial responsibilities, the scholarship has allowed me to dedicate greater time and energy to my studies and skill development. Receiving this scholarship has reaffirmed my confidence and inspired me to work harder with discipline and determination. I sincerely thank the university for believing in my potential and for providing constant support in shaping my future.`,
    },
    {
        id: 9,
        name: "Rishab Vaishnav",
        course: "B.A. LL.B.(Hons.)",
        image: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/rishab_1_73d44ecc6a.jpg",
        content: `I would like to express my sincere gratitude to the university for awarding me a scholarship. This generous support has significantly eased the financial burden on my family and has allowed me to pursue my legal education with greater confidence and peace of mind. The scholarship has motivated me to focus wholeheartedly on my studies, participate actively in academic and co-curricular activities, and make the most of the excellent learning environment provided by the university. It has reinforced my belief that dedication and hard work are recognized and rewarded at K.R. Mangalam University.`,
    },
];

const TestimonialSection = () => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section className="bg-white pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16 relative overflow-hidden font-poppins">
            {/* Split Background Container */}
            <div className="w-full relative">
                {/* Left Portrait Girl Image on desktop */}
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[480px] xl:w-[580px] 2xl:w-[650px] z-0 overflow-hidden">
                    <Image
                        src="/images/scholarship/girl.jpg"
                        alt="Hear From Our Students"
                        fill
                        priority
                        className="object-cover object-top"
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full">
                    {/* Header on White Background */}
                    <div className="px-6 md:px-8 lg:ml-[520px] xl:ml-[620px] 2xl:ml-[690px] max-w-[850px] mb-8 lg:mb-10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-black tracking-tight leading-tight">
                            Hear From Our Students
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 mt-2.5 leading-relaxed">
                            Hear from our scholarship awardees as they share how
                            merit, dedication, and KRMU’s support helped them
                            reach new heights.
                        </p>
                    </div>

                    {/* Mobile/Tablet Girl Image */}
                    <div className="block lg:hidden px-6 mb-8 max-w-[600px] mx-auto">
                        <div className="w-full h-[420px] sm:h-[500px] relative rounded-2xl overflow-hidden shadow-sm">
                            <Image
                                src="/images/scholarship/girl.jpg"
                                alt="Hear From Our Students"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Cards Carousel (overlaps left image slightly on desktop) */}
                    <div className="w-full lg:ml-[380px] xl:ml-[460px] 2xl:ml-[520px] pl-6 lg:pl-0">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-6 py-4">
                                {scholarTestimonials.map((item) => (
                                    <CarouselItem
                                        key={item.id}
                                        className="pl-6 basis-auto shrink-0"
                                    >
                                        <TestimonialCard
                                            image={item.image}
                                            name={item.name}
                                            course={item.course}
                                            content={item.content}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-3 px-6 lg:ml-[520px] xl:ml-[620px] 2xl:ml-[690px] mt-8 mb-4">
                        <button
                            onClick={() => api?.scrollPrev()}
                            className="w-10 h-10 rounded-full bg-[#061623] hover:bg-[#001732] text-white flex items-center justify-center cursor-pointer shadow-sm transition-all active:scale-95"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => api?.scrollNext()}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-black flex items-center justify-center cursor-pointer shadow-sm transition-all active:scale-95"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
