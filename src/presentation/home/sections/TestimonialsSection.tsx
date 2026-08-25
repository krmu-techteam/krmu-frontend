"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from "@/components/common/Carousel";
import SectionDivider from "@/components/common/SectionDivider";
import { SectionTitle } from "@/components/common/SectionTitle";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    image: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
    {
        id: 1,
        name: "Krish Agarwal",
        role: "B Tech CSE AI/ML 2023-27 batch",
        quote: "Success is never built alone, and my journey at K.R. Mangalam University is a testament to that. The university empowered me to push my limits, transforming curiosity into innovation and ambition into achievements. From winning 7+ hackathons and total 10+ of tech events to gaining valuable industry exposure through internships, every milestone reflects the strong foundation, guidance, and opportunities KRMU provided me. I will always be grateful to K.R. Mangalam University for inspiring me to dream bigger, achieve more, and become the professional I aspire to be.",
        image: "/images/home/testimonials/krish-agarwal-1.png",
    },
    {
        id: 2,
        name: "Naman Punn",
        role: "B Tech CSE 2022-2026 batch",
        quote: "The B.tech cse programme at K.R. Mangalam University goes beyond academics by encouraging innovation, collaboration, and practical learning. From coding challenges and technical events to industry exposure and real world projects, students gain the confidence and skills required to succeed in todays competitive technology landscape. The overall learning environment inspires continuous growth and excellence.",
        image: "/images/home/testimonials/naman-punn-2.png",
    },
    {
        id: 3,
        name: "Anu Sharma",
        role: "BCA AI & DS",
        quote: "My experience at K.R. Mangalam University has been a memorable learning journey. The BCA program gave me a strong foundation in programming and problem-solving, while the supportive faculty and practical learning opportunities helped me grow both technically and personally. I'm thankful for the skills and experiences I gained during my time here",
        image: "/images/home/testimonials/anu-sharma-3.png",
    },
    {
        id: 4,
        name: "Somya Sharma",
        role: "B.Tech CSE AIML 2023-27 batch",
        quote: "My journey at K.R. Mangalam University has been truly transformative, providing me with a strong foundation in Artificial Intelligence, Machine Learning, and Computer Science. Through hands-on projects, internships, hackathons, and continuous guidance from experienced faculty, I gained practical exposure that strengthened my technical and problem-solving skills. The University’s industry-oriented curriculum and supportive learning environment have prepared me to confidently pursue a career in AI-driven technologies while inspiring me to innovate and contribute meaningfully to the tech industry.",
        image: "/images/home/testimonials/somya-sharma-4.png",
    },
    {
        id: 5,
        name: "Upadhyayula Nijaagna",
        role: "B.Tech CSE AIML 2023-27 batch",
        quote: "K.R. Mangalam University has provided me with an environment where learning goes beyond the classroom. Through the B.Tech CSE (Al & ML) programme I gained technical knowledge, practical experience and the confidence to keep learning and adapting in the fast changing world of technology. The curriculum also offered exposure to diverse domains helping me develop a broader perspective of other domains. I am grateful for this enriching journey.",
        image: "/images/home/testimonials/upadhyayula-nijaagna-5.png",
    },
    {
        id: 6,
        name: "Namrata Muralidharan",
        role: "BCA (AI & DS) 2024–26 batch",
        quote: "My journey at K.R. Mangalam University, pursuing BCA in Artificial Intelligence & Data Science, has been a transformative blend of knowledge, innovation, and hands-on learning. The program has helped me turn curiosity into technical expertise through real-world projects and emerging technologies. With supportive faculty and an industry-focused environment, KRMU has empowered me to think beyond conventional boundaries and confidently shape my future in the world of technology.",
        image: "/images/home/testimonials/namrata-6.png",
    },
    {
        id: 7,
        name: "Dhruv Gupta",
        role: "BCA (AI & DS) 2024-26 batch",
        quote: "I came into K.R. Mangalam University unsure of my direction. The BCA AI & Data Science curriculum, backed by faculty mentors who genuinely invested in my growth, gave me both a technical foundation and the confidence to pursue AI seriously. Maintaining a Dean's List track record across semesters, and the platform the university gave me to showcase my efforts across classrooms, events, and international opportunities, made every bit of that effort worth it.",
        image: "/images/home/testimonials/dhruv-gupta-7.png",
    },
    {
        id: 8,
        name: "Rakesh G",
        role: "BCA (AI & DS) 2024-26 batch",
        quote: "My journey at K.R. Mangalam University has been an enriching experience that has strengthened both my technical knowledge and professional confidence. The BCA (AI & Data Science) programme provided me with practical exposure through projects, internships, and industry-oriented learning. The continuous guidance from faculty members has helped me develop problemsolving skills and prepared me for a successful career in technology.",
        image: "/images/home/testimonials/rakesh-8.png",
    },
    {
        id: 9,
        name: "Khushi",
        role: "B. Tech CSE (AI & ML) 2023-2027 batch",
        quote: "The university played an important role in shaping my learning journey. The B.Tech CSE (AI & ML) programme offered the right balance of academic rigor and practical exposure, enabling me to build a solid technical foundation and an industry-oriented mindset. The diverse learning opportunities and encouraging environment have prepared me to embrace new challenges with confidence. I sincerely appreciate the support and experiences that made this journey memorable.",
        image: "/images/home/testimonials/khushi-9.png",
    },
    {
        id: 10,
        name: "UTSAV RATAN",
        role: "Btech CSE 2024-2028 Batch",
        quote: "I’m Utsav Ratan, and choosing B.Tech at K.R. Mangalam University has been one of the best decisions for my academic and personal growth. The university provides excellent faculty, practical learning opportunities, modern infrastructure, and a supportive environment that encourages innovation and skill development. Every experience here has strengthened my confidence and prepared me for future challenges. I’m proud to be a part of the K.R. Mangalam University family.",
        image: "/images/home/testimonials/utsav-ratan-10.png",
    },
    {
        id: 11,
        name: "Mrinal Prakash",
        role: "Btech CSE 2024-2028 Batch",
        quote: "K.R. Mangalam University gave me more than a degree — it gave me room to build. Leading GeekRoom KRMU as Chapter President and running things day-to-day as MD & Vice Chairperson at eOzka taught me more than any classroom could. I stayed consistent with LeetCode (Mrinalprakash9) to keep my fundamentals sharp, and my GitHub (MRINALPRAKASHFSD) has every project to show for it.",
        image: "/images/home/testimonials/mrinal-prakash-11.png",
    },
];

export function TestimonialsSection({
    title,
}: {
    title?: string;

    testimonialsData?: any[];
}) {
    const [emblaApi, setEmblaApi] = useState<any>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const handlePrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const handleNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="relative w-full overflow-hidden py-10 md:py-12 xl:py-20 font-poppins max-w-[1530px] mx-auto">
            <div className="max-w-[1530px] mx-auto relative z-10 px-4 md:px-8 xl:px-16">
                <SectionTitle
                    title={title || "What our Learners say?"}
                    className="mb-6 md:mb-8 text-center md:text-left"
                />

                {/* Content Container (Card Background Removed) */}
                <div className="relative w-full py-2">
                    <Carousel
                        showArrows={false}
                        showDots={false}
                        autoplayDelay={6000}
                        fade={true}
                        options={{ loop: true, watchDrag: false, duration: 20 }}
                        setApi={setEmblaApi}
                        className="w-full"
                    >
                        {TESTIMONIALS_DATA.map((t, index) => (
                            <div
                                key={t.id}
                                className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-8 min-h-[340px] md:min-h-[320px] lg:min-h-[300px] w-full"
                            >
                                {/* Left Side: Student Photo */}
                                <div className="w-full lg:w-[260px] xl:w-[300px] shrink-0 relative aspect-square sm:aspect-[4/4.5] lg:aspect-auto rounded-[16px] overflow-hidden">
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 300px"
                                        className="object-cover rounded-[16px]"
                                        priority={index === 0}
                                    />
                                </div>

                                {/* Center Vertical Divider Line (Desktop) */}
                                <div className="hidden lg:block w-[1px] self-stretch my-1 bg-[linear-gradient(180deg,#1A1A1A_0%,#FFFFFF_48.08%,#1A1A1A_100%)] shrink-0"></div>

                                {/* Right Side: Content Area */}
                                <div className="flex-1 flex flex-col justify-between relative z-10 pt-2 lg:pt-0 w-full min-w-0">
                                    <div className="relative pt-2 md:pt-4">
                                        {/* Background Top-Left Large Quote Icon */}
                                        <div className="absolute -top-1 left-0 md:-top-2 md:-left-4 pointer-events-none z-0 opacity-35">
                                            <Image
                                                src="/modules/home/testimonial/quote.png"
                                                alt="Quote Icon"
                                                width={120}
                                                height={96}
                                                className="w-14 md:w-20 lg:w-24 h-auto object-contain brightness-0 invert"
                                            />
                                        </div>

                                        {/* Quote Paragraph - Fixed min-height to prevent layout jump */}
                                        <div className="min-h-[140px] sm:min-h-[150px] md:min-h-[160px] flex items-center justify-center md:justify-start">
                                            <p className="text-white/90 text-sm md:text-[16px] xl:text-[18px] leading-relaxed font-light font-poppins relative z-10 text-justify md:text-left pr-0 md:pr-2 lg:pr-12">
                                                {t.quote}
                                            </p>
                                        </div>

                                        {/* Short Accent Line */}
                                        <div className="w-10 h-[2px] bg-brand-gold my-4 rounded-full opacity-80 relative z-10 mx-auto md:mx-0"></div>
                                    </div>

                                    {/* Author Details */}
                                    <div className="mt-2 relative z-10 text-center md:text-left">
                                        <h4 className="text-brand-gold font-poppins font-bold text-base md:text-lg lg:text-xl leading-tight">
                                            {t.name}
                                        </h4>
                                        <p className="text-white/70 font-poppins text-xs md:text-sm font-light mt-1 mb-4">
                                            {t.role}
                                        </p>

                                        {/* View All Testimonials button */}
                                        {/* <button className="flex items-center mt-8 gap-3 text-white hover:text-brand-gold transition-colors group cursor-pointer w-fit mx-auto md:mx-0">
                                            <div className="w-6 h-6 rounded-full border border-white flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold/10 transition-all">
                                                <ArrowRight size={14} />
                                            </div>
                                            <span className="font-poppins font-medium text-xs md:text-[15px] tracking-wide">
                                                View All Testimonials
                                            </span>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>

                    {/* Navigation Controls (Bottom Right) */}
                    <div className="flex items-center justify-center gap-2 mt-4 relative z-30">
                        <button
                            type="button"
                            onClick={handlePrev}
                            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white transition-all cursor-pointer shrink-0 z-30"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <span className="w-[70px] text-center text-white/90 text-sm md:text-base font-mono tracking-wider font-medium select-none whitespace-nowrap">
                            {String(currentIndex + 1).padStart(2, "0")} /{" "}
                            {String(TESTIMONIALS_DATA.length).padStart(2, "0")}
                        </span>

                        <button
                            type="button"
                            onClick={handleNext}
                            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white transition-all cursor-pointer shrink-0 z-30"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
}
