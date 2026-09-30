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
        name: "Anushka Nath Roy",
        role: "B.Sc.(Hons) Forensic Science",
        quote: "I am a student of Forensic Science. My academic journey here has been truly enriching and inspiring. The department's commitment to academic excellence, hands-on learning and professional development has broadened my perspective and strengthened my capabilities. The guidance of our faculty and the exposure we gained through practical learning have made my learning journey engaging and rewarding.",
        image: "/images/home/testimonials/student-images/anushka.png",
    },
    {
        id: 2,
        name: "Gunjan Rajput",
        role: "B.Sc.(Hons) Forensic Science",
        quote: "Studying Forensic Science at K.R. Mangalam University has been a truly rewarding experience. The School of Basic and Applied Sciences offers excellent academic and practical exposure through well-equipped laboratories, workshops, seminars and conferences, including NextGen Forensics and other international events. These opportunities have helped me connect classroom learning with current developments in the field, deepen my knowledge and build the confidence to present and explore new ideas. I am grateful for the guidance and support the department has given me.",
        image: "/images/home/testimonials/student-images/gunjan-rajput.png",
    },
    {
        id: 3,
        name: "Aman Dey",
        role: "BA (Hons./Hons. With Research) in JMC 2023-27 Batch",
        quote: "I am pursuing a Bachelor's in Journalism and Mass Communication at KRMU. Before joining the university, I had no knowledge of this field. However, thanks to the faculty here, I have grown considerably. In particular, I had no prior knowledge of design, but under the guidance of Karan Singh Sir, I have developed a strong command of graphic design. I am grateful to the university for helping me build a solid foundation for my future career.",
        image: "/images/home/testimonials/student-images/aman-dey.png",
    },
    {
        id: 4,
        name: "Arsalan Sahib",
        role: "BA (Hons./Hons. With Research) in JMC 2023-27 Batch",
        quote: "My experience at K.R. Mangalam University has been truly amazing. The faculty members are extremely supportive and knowledgeable, and are always ready to guide us whenever we need them. As a student of Journalism and Mass Communication, I have gained great exposure through practical activities, workshops and real-world learning opportunities. The environment here encourages creativity and learning beyond the classroom. I am proud to be part of KRMU.",
        image: "/images/home/testimonials/student-images/arsalan-sahib.png",
    },
    {
        id: 5,
        name: "Ms.Anamika Singh",
        role: "B.Pharm",
        quote: "Being selected by Lupin Pharma Pvt. Ltd. is a proud milestone in my journey. The guidance of my faculty, together with practical training and industry-oriented learning at the university, strengthened my confidence and skills. I am grateful for the support that helped me secure this opportunity and prepared me for a rewarding career in the pharmaceutical industry. I look forward to applying what I have learned at K.R. Mangalam University and contributing meaningfully to the field.",
        image: "/images/home/testimonials/student-images/anamika-singh.jpg",
    },
    {
        id: 6,
        name: "Mehak Dhanuka",
        role: "B. Pharmacy",
        quote: "Choosing this institution has been one of the best decisions of my academic journey. The supportive faculty, well-equipped laboratories and student-centred learning environment have helped me build strong technical knowledge, critical thinking and professional confidence. Regular academic, research and skill-development opportunities have prepared me to meet industry expectations and contribute meaningfully to society. I am grateful to be part of an institution that inspires excellence, ethics and lifelong learning.",
        image: "/images/home/testimonials/student-images/mehak-dhanuka.jpg",
    },
    {
        id: 7,
        name: "Ansar Khan",
        role: "B.Sc. (Hons.) Agriculture",
        quote: "My journey at K.R. Mangalam University has been an important and memorable chapter of my life. During my time at the School of Agricultural Sciences, I gained valuable academic knowledge, practical exposure and insights into different dimensions of agriculture. The constant support of the faculty and the opportunities provided by the university helped me develop confidence, professional skills and a broader perspective. I am grateful to the university for contributing significantly to my personal and professional growth.",
        image: "/images/home/testimonials/student-images/ansar-khan.jpg",
    },
    {
        id: 8,
        name: "Neetu Sharma",
        role: "B.Sc. (Hons.) Agriculture",
        quote: "My journey at K.R. Mangalam University has been full of learning and new experiences. The university has provided me with opportunities to explore beyond the classroom through practical learning, academic activities and exposure to new perspectives. These experiences have helped me become more confident, independent and adaptable while developing a broader understanding of the field of agriculture. Looking back, I feel well prepared to take on the challenges of my chosen field with curiosity and determination.",
        image: "/images/home/testimonials/student-images/neetu-sharma.jpg",
    },
    {
        id: 9,
        name: "Shalika Kapoor",
        role: "B.El.Ed. Alumni",
        quote: "My internship strengthened my teaching skills, confidence and understanding of classroom practices. The Immersion Programmes in Dubai (2024) and Japan (2026) broadened my cultural and educational perspectives. These diverse experiences helped me become more independent, adaptable, confident and open-minded. I am grateful to K.R. Mangalam University for providing opportunities that have contributed greatly to my personal and professional growth.",
        image: "/images/home/testimonials/student-images/shalika-kapoor.png",
    },
    {
        id: 10,
        name: "Sulakhani",
        role: "B.El.Ed. Alumni",
        quote: "My journey in the B.El.Ed. programme has been truly meaningful and rewarding. The guidance of dedicated faculty members, practical learning experiences and a supportive academic environment helped me grow both personally and professionally. Classroom teaching practice and interaction with young learners helped me understand the real impact of education. I now look forward to becoming a teacher who inspires curiosity and makes every child feel valued. I will always be grateful to my institution for shaping my confidence, knowledge and commitment to the teaching profession.",
        image: "/images/home/testimonials/student-images/sulakhani.jpg",
    },
    {
        id: 11,
        name: "Aman Kumar",
        role: "MCA (AI& ML)",
        quote: "Pursuing my MCA at K.R. Mangalam University has been one of the best decisions for my career. The university's practical approach to learning, experienced faculty and industry-focused curriculum have significantly improved my technical and analytical skills. The guidance and opportunities provided throughout the programme have helped me become more confident and career-ready. I sincerely thank the university for supporting my professional journey.",
        image: "/images/home/testimonials/student-images/aman-kumar.png",
    },
    {
        id: 12,
        name: "Namrata Muralidharan",
        role: "BCA (AI & DS) 2024-26 batch",
        quote: "My journey at K.R. Mangalam University, pursuing a BCA in Artificial Intelligence and Data Science, has been a transformative blend of knowledge, innovation and hands-on learning. The programme has helped me turn curiosity into technical expertise through real-world projects and emerging technologies. With supportive faculty and an industry-focused environment, KRMU has encouraged me to think beyond conventional boundaries and confidently shape my future in the world of technology.",
        image: "/images/home/testimonials/student-images/namrata.png",
    },
    {
        id: 13,
        name: "Aayushi Kesari",
        role: "B.A. (Hons.) in Economics with Research",
        quote: "My time at K.R. Mangalam University has been truly memorable. The supportive faculty and well-structured curriculum have made my learning journey enriching and meaningful. The emphasis on practical projects, critical thinking and holistic development has helped me grow academically and personally. I am grateful to the university for the experiences, opportunities and guidance that have shaped my time here.",
        image: "/images/home/testimonials/student-images/aayushi-kesari.jpg",
    },
    {
        id: 14,
        name: "Nivishka Goel",
        role: "B.A. (Hons.) in Psychology with Research",
        quote: "Joining the School of Liberal Arts (SOLA) at K.R. Mangalam University was easily one of the best choices I have made. To be honest, I was a bit unsure when I first started, but SOLA quickly felt like home. We are never just sitting in rows taking notes; our classes feel much more like real conversations where everyone's ideas matter. SOLA has taught me to ask better questions, listen carefully and see the world from more than one angle.",
        image: "/images/home/testimonials/student-images/nivishka-goel.jpg",
    },
    {
        id: 15,
        name: "Veiresh",
        role: "LL.B.",
        quote: "My experience at the School of Legal Studies has been truly memorable. The course provides a strong foundation in legal theory while offering valuable opportunities for practical learning and professional development. The faculty members are dedicated, continuously encouraging us to engage in both academic and co-curricular activities. Participating in moot courts, legal research, conferences, workshops, and discussions has helped me develop a deeper, more practical understanding of the law. This supportive environment at KRMU has motivated me to grow into a confident and responsible future legal professional.",
        image: "/images/home/testimonials/student-images/veiresh.png",
    },
    {
        id: 16,
        name: "Muskan",
        role: "LL.B.",
        quote: "My experience at K.R. Mangalam University has been an enriching blend of learning, practical exposure, and personal development. As a student in the School of Legal Studies, I have had numerous opportunities to participate in moot courts, conferences, seminars, workshops, and legal awareness programmes. These experiences have given me a broader perspective on both law and society. The faculty members are knowledgeable, supportive, and approachable, creating an environment that is both welcoming and intellectually motivating. Overall, my journey here is preparing me exceptionally well for my future legal career.",
        image: "/images/home/testimonials/student-images/muskan.png",
    },
    {
        id: 17,
        name: "Aaditya Raj",
        role: "BBA MBA Integrated",
        quote: "Reality often unfolds differently from what we expect. We enter new chapters with carefully imagined plans, only to discover that life shapes its own path. My years at K.R. Mangalam University continuously reinforced this lesson. Unexpected turns brought new perspectives, meaningful friendships, and lessons no syllabus could teach. KRMU proved that growth lies not in having every answer, but in adapting when reality differs from expectation. As I look ahead, I embrace both ambition and uncertainty, knowing life's finest opportunities are often the ones we never planned for.",
        image: "/images/home/testimonials/student-images/aaditya-raj.png",
    },
    {
        id: 18,
        name: "Mansi Sharma",
        role: "MBA, 2nd Year",
        quote: "My journey at the School of Management & Commerce, K.R. Mangalam University, has been truly transformative. The programme provided a strong management foundation while building essential skills like leadership, communication, and problem-solving. The supportive faculty, practical exposure, and industry-oriented activities boosted my confidence and professional readiness. Beyond academics, SOMC encouraged me to step out of my comfort zone and grow personally. I am grateful to the faculty for nurturing my ambitions. KRMU has not just prepared me for a career, but for the person I aspire to become.",
        image: "/images/home/testimonials/student-images/mansi-sharma.png",
    },
    {
        id: 19,
        name: "Manav Bangari",
        role: "Bachelor of Physiotherapy (BPT)",
        quote: "Being a BPT student at K.R. Mangalam University has been an enriching and engaging journey. From interactive practical sessions to clinical exposure, every day brings something new to learn. The knowledgeable and supportive faculty make even complex topics easy to understand, making our course truly unique. Beyond academics, I have made great memories with friends along the way. Overall, my time at KRMU has been a perfect blend of practical learning, personal growth, and memorable experiences that prepare me for a rewarding healthcare career.",
        image: "/images/home/testimonials/student-images/manav-bangari.png",
    },
    {
        id: 20,
        name: "Mehak Khanna",
        role: "Bachelor of Physiotherapy (BPT)",
        quote: "My BPT journey here has been a transformative chapter, shaping me into a confident and compassionate healthcare professional. Guidance from supportive mentors, alongside clinical postings, research activities, workshops, and conferences, broadened my perspective and strengthened my clinical abilities. As a graduate physiotherapist, I carry forward essential knowledge, practical skills, and the core values of empathy and patient-centred care. I am truly grateful for my time at KRMU and feel fully prepared to make a meaningful difference in the lives of those I serve.",
        image: "/images/home/testimonials/student-images/mehak-khanna.png",
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

    const sectionRef = useRef<HTMLElement>(null);
    const [isInView, setIsInView] = useState(false);

    // Only activate autoplay when the testimonials section is visible in the viewport
    useEffect(() => {
        const el = sectionRef.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setIsInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // Autoplay: changes slide every 6 seconds only when in viewport and not hovered
    useEffect(() => {
        if (!isInView || isHovered) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isInView, isHovered]);

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

    const thumbnailsRef = useRef<HTMLDivElement>(null);

    // Smoothly scroll ONLY the thumbnail container horizontally without affecting the page scroll
    useEffect(() => {
        const container = thumbnailsRef.current;
        if (!container) return;
        const activeBtn = container.children[currentIndex] as HTMLElement;
        if (activeBtn) {
            const scrollLeft =
                activeBtn.offsetLeft -
                container.offsetWidth / 2 +
                activeBtn.offsetWidth / 2;
            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
        }
    }, [currentIndex]);

    const t = TESTIMONIALS_DATA[currentIndex];

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden pb-10 md:pb-12 xl:pb-20 font-poppins max-w-[1530px] mx-auto md:pt-8"
        >
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
                    <div className="w-full min-h-[520px] sm:min-h-[460px] md:min-h-[380px] lg:min-h-[340px] xl:min-h-[320px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                }}
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
                                        <div className="min-h-[220px] sm:min-h-[190px] md:min-h-[170px] flex items-center justify-center md:justify-start">
                                            <p className="italic text-white/90 text-sm md:text-[16px] xl:text-[18px] leading-relaxed font-light font-poppins relative z-10 text-justify md:text-left pr-0 md:pr-2 lg:pr-12">
                                                &ldquo;{t.quote}&rdquo;
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
                    <div
                        ref={thumbnailsRef}
                        className="w-full flex items-center justify-start gap-3 mt-8 md:mt-10 overflow-x-auto py-4 px-2 min-h-[96px] sm:min-h-[104px] md:min-h-[112px] no-scrollbar scroll-smooth"
                    >
                        {TESTIMONIALS_DATA.map((item, idx) => {
                            const isActive = currentIndex === idx;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={(e) => {
                                        e.currentTarget.blur();
                                        handleSelectPerson(idx);
                                    }}
                                    className={`relative shrink-0 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                                        isActive
                                            ? "w-16 h-16 sm:w-[72px] sm:h-[72px] md:w-20 md:h-20 ring-[2.5px] ring-brand-gold opacity-100 z-10 shadow-xl"
                                            : "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 opacity-40 hover:opacity-90 ring-2 ring-brand-gold/20 hover:scale-105"
                                    }`}
                                    aria-label={`View ${item.name}'s testimonial`}
                                    title={`${item.name} - ${item.role}`}
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="200px"
                                        quality={95}
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
