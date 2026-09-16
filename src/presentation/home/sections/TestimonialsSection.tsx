"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "@/components/common/SectionDivider";
import { SectionTitle } from "@/components/common/SectionTitle";
import { resolveHomeTestimonialAlt } from "@/alt-text";

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
        role: "B.Tech. CSE (AI & ML), Batch 2023–27",
        quote: "Success is never built alone, and my journey at K.R. Mangalam University is a testament to that. The university empowered me to push my limits, transforming curiosity into innovation and ambition into achievements. From winning 7+ hackathons and participating in a total of 10+ tech events to gaining valuable industry exposure through internships, every milestone reflects the strong foundation, guidance, and opportunities KRMU provided me. I will always be grateful to K.R. Mangalam University for inspiring me to dream bigger, achieve more, and become the professional I aspire to be.",
        image: "/images/home/testimonials/krish-agarwal-1.webp",
    },
    {
        id: 2,
        name: "Naman Punn",
        role: "B.Tech. CSE, Batch 2022–26",
        quote: "The B.Tech. CSE programme at K.R. Mangalam University goes beyond academics by encouraging innovation, collaboration, and practical learning. From coding challenges and technical events to industry exposure and real-world projects, students gain the confidence and skills required to succeed in today's competitive technology landscape. The overall learning environment inspires continuous growth and excellence.",
        image: "/images/home/testimonials/naman-punn-2.webp",
    },
    {
        id: 3,
        name: "Anu Sharma",
        role: "BCA (AI & DS)",
        quote: "My experience at K.R. Mangalam University has been a memorable learning journey. The BCA programme gave me a strong foundation in programming and problem-solving, while the supportive faculty and practical learning opportunities helped me grow both technically and personally. I'm thankful for the skills and experiences I gained during my time here.",
        image: "/images/home/testimonials/anu-sharma-3.webp",
    },
    {
        id: 4,
        name: "Somya Sharma",
        role: "B.Tech. CSE (AI & ML), Batch 2023–27",
        quote: "My journey at K.R. Mangalam University has been truly transformative, providing me with a strong foundation in Artificial Intelligence, Machine Learning, and Computer Science. Through hands-on projects, internships, hackathons, and continuous guidance from experienced faculty, I gained practical exposure that strengthened my technical and problem-solving skills. The University’s industry-oriented curriculum and supportive learning environment have prepared me to confidently pursue a career in AI-driven technologies while inspiring me to innovate and contribute meaningfully to the tech industry.",
        image: "/images/home/testimonials/somya-sharma-4.webp",
    },
    {
        id: 5,
        name: "Upadhyayula Nijaagna",
        role: "B.Tech. CSE (AI & ML), Batch 2023–27",
        quote: "K.R. Mangalam University has provided me with an environment where learning goes beyond the classroom. Through the B.Tech CSE (AI & ML) programme, I gained technical knowledge, practical experience, and the confidence to keep learning and adapting in the fast changing world of technology. The curriculum also offered exposure to diverse domains, helping me develop a broader perspective. I am grateful for this enriching journey.",
        image: "/images/home/testimonials/upadhyayula-nijaagna-5.webp",
    },
    {
        id: 6,
        name: "Namrata Muralidharan",
        role: "BCA (AI & DS), Batch 2024–26",
        quote: "My journey at K.R. Mangalam University, pursuing BCA in Artificial Intelligence & Data Science, has been a transformative blend of knowledge, innovation, and hands-on learning. The program has helped me turn curiosity into technical expertise through real-world projects and emerging technologies. With supportive faculty and an industry-focused environment, KRMU has empowered me to think beyond conventional boundaries and confidently shape my future in the world of technology.",
        image: "/images/home/testimonials/namrata-6.webp",
    },
    {
        id: 7,
        name: "Dhruv Gupta",
        role: "BCA (AI & DS), Batch 2024–26",
        quote: "I came into K.R. Mangalam University unsure of my direction — I'm leaving with a track record I'm proud of. The BCA AI & Data Science curriculum, backed by faculty mentors who genuinely invested in my growth, gave me both a strong technical foundation and the confidence to pursue AI seriously. I maintained a spot on the Dean's List across every semester, represented KRMU in international opportunities, and consistently showcased my work across classrooms and industry events. Every milestone along the way is proof that the effort paid off.",
        image: "/images/home/testimonials/dhruv-gupta-7.webp",
    },
    {
        id: 8,
        name: "Rakesh G",
        role: "BCA (AI & DS), Batch 2024–26",
        quote: "My journey at K.R. Mangalam University has been an enriching experience that has strengthened both my technical knowledge and professional confidence. The BCA (AI & Data Science) programme provided me with practical exposure through projects, internships, and industry-oriented learning. The continuous guidance from faculty members has helped me develop problem-solving skills and prepared me for a successful career in technology.",
        image: "/images/home/testimonials/rakesh-8.webp",
    },
    {
        id: 9,
        name: "Khushi",
        role: "B.Tech. CSE (AI & ML), Batch 2023–27",
        quote: "The university played an important role in shaping my learning journey. The B.Tech CSE (AI & ML) programme offered the right balance of academic rigour and practical exposure, enabling me to build a solid technical foundation and an industry-oriented mindset. The diverse learning opportunities and encouraging environment have prepared me to embrace new challenges with confidence. I sincerely appreciate the support and experiences that made this journey memorable.",
        image: "/images/home/testimonials/khushi-9.webp",
    },
    {
        id: 10,
        name: "Utsav Ratan",
        role: "B.Tech. CSE, Batch 2024–28",
        quote: "I’m Utsav Ratan, and choosing B.Tech at K.R. Mangalam University has been one of the best decisions for my academic and personal growth. The university provides excellent faculty, practical learning opportunities, modern infrastructure, and a supportive environment that encourages innovation and skill development. Every experience here has strengthened my confidence and prepared me for future challenges. I’m proud to be a part of the K.R. Mangalam University family.",
        image: "/images/home/testimonials/utsav-ratan-10.webp",
    },
    {
        id: 11,
        name: "Mrinal Prakash",
        role: "B.Tech. CSE, Batch 2024–28",
        quote: "K.R. Mangalam University gave me more than a degree — it gave me room to build. Leading GeekRoom KRMU as Chapter President and running things day-to-day as MD & Vice Chairperson at eOzka taught me more than any classroom could. I stayed consistent with LeetCode (Mrinalprakash9) to keep my fundamentals sharp, and my GitHub (MRINALPRAKASHFSD) has every project to show for it.",
        image: "/images/home/testimonials/mrinal-prakash-11.webp",
    },
];

export function TestimonialsSection({
    title,
}: {
    title?: string;
    testimonialsData?: any[];
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartX = useRef<number | null>(null);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, []);

    const handlePrev = useCallback(() => {
        setCurrentIndex(
            (prev) =>
                (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length
        );
    }, []);

    const handleSelectPerson = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    // Autoplay: changes slide every 6 seconds, pauses on mouse hover
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isHovered, currentIndex]);

    // Touch swipe support on mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;
        if (Math.abs(diff) > 40) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrev();
            }
        }
        touchStartX.current = null;
    };

    const t = TESTIMONIALS_DATA[currentIndex];

    return (
        <section className="relative w-full overflow-hidden pb-10 md:pb-12 xl:pb-20 font-poppins max-w-[1530px] mx-auto md:pt-8">
            <div className="max-w-[1530px] mx-auto relative z-10 px-4 md:px-8 xl:px-16">
                <SectionTitle
                    title={
                        title?.split(" ").slice(1).join(" ") ||
                        title ||
                        "Testimonials"
                    }
                    className="mb-6 md:mb-8 text-center md:text-left"
                />

                {/* Content Container with Pause-on-Hover and Touch-Swipe */}
                <div
                    className="relative w-full py-2"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="w-full min-h-[360px] md:min-h-[330px] lg:min-h-[310px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-8 w-full"
                            >
                                {/* Left Side: Student Photo (Clickable to switch) */}
                                <div
                                    onClick={handleNext}
                                    className="w-full lg:w-[260px] xl:w-[300px] shrink-0 relative aspect-square sm:aspect-[4/4.5] lg:aspect-auto rounded-[16px] overflow-hidden cursor-pointer group select-none"
                                    title="Click to view next testimonial"
                                >
                                    <Image
                                        src={t.image}
                                        alt={resolveHomeTestimonialAlt(
                                            t.name,
                                            `${t.name}, ${t.role} student testimonial at KRMU`
                                        )}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 300px"
                                        className="object-cover rounded-[16px] transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none rounded-[16px]" />
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
                                            <p className="italic text-white/90 text-sm md:text-[16px] xl:text-[18px] leading-relaxed font-light font-poppins relative z-10 text-justify md:text-left pr-0 md:pr-2 lg:pr-12">
                                                {t.quote}
                                            </p>
                                        </div>

                                        {/* Short Accent Line */}
                                        <div className="w-10 h-[2px] bg-brand-gold my-4 rounded-full opacity-80 relative z-10 mx-auto md:mx-0"></div>
                                    </div>

                                    {/* Author Details */}
                                    <div className="mt-2 relative z-10 text-center md:text-left">
                                        <h3 className="text-brand-gold font-poppins font-bold text-base md:text-lg lg:text-xl leading-tight">
                                            {t.name}
                                        </h3>
                                        <p className="text-white/70 font-poppins text-xs md:text-sm font-light mt-1 mb-4">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Student Thumbnail Avatars Row (Click any photo to view testimonial) */}
                    <div className="w-full flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 md:gap-8 mt-8 md:mt-10 overflow-x-auto py-3 px-2 no-scrollbar">
                        {TESTIMONIALS_DATA.map((item, idx) => {
                            const isActive = currentIndex === idx;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => handleSelectPerson(idx)}
                                    className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                                        isActive
                                            ? "ring-2 ring-brand-gold scale-110 opacity-100"
                                            : "opacity-40 hover:opacity-90 ring-2 ring-brand-gold/20 hover:scale-105"
                                    }`}
                                    aria-label={`View ${item.name}'s testimonial`}
                                    title={`${item.name} - ${item.role}`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="(max-width: 768px) 56px, 64px"
                                        className="object-cover"
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
            <SectionDivider />
        </section>
    );
}
