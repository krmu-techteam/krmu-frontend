import React from "react";
import { CheckCircle2, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button";
import SectionDivider from "@/components/common/SectionDivider";
import {
    objectivesList,
    leadershipData,
    documentColumns,
    galleryImages,
    contactLinks,
    facilityVisuals,
    infographicVisual,
} from "./data";

export const CounsellingMentalWellbeingView: React.FC = () => {
    const col1Objectives = objectivesList.slice(0, 5);
    const col2Objectives = objectivesList.slice(5);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-[140px] lg:pt-[15%] pb-[10%] bg-[url(/infra.webp)] bg-cover bg-no-repeat bg-center common-overlay">
                <div className="max-w-[1440px] mx-auto w-full relative z-10 px-4 sm:px-6 md:px-10">
                    <h1 className="text-3xl md:text-5xl lg:text-[52px] font-serif text-white font-bold text-center">
                        Counselling & Mental Wellbeing Centre (We Dost)
                    </h1>
                </div>
            </section>

            {/* Overview & Services Section */}
            <section className="relative w-full text-white py-10 sm:py-14">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 flex flex-col gap-8 lg:gap-10">
                    {/* Overview Column */}
                    <div className="w-full space-y-4">
                        <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold text-white tracking-wide font-serif">
                            Counselling and Mental Wellbeing Centre (We Dost)
                        </h2>
                        <div className="p-6 sm:p-8 rounded-[6px] border border-[#0D7377] bg-transparent space-y-4">
                            <p className="text-white text-sm sm:text-[16px] leading-relaxed font-poppins font-normal text-justify">
                                <strong className="text-white font-bold">
                                    The Counselling and Mental Wellbeing Centre
                                    (We Dost)
                                </strong>{" "}
                                at{" "}
                                <strong className="text-white font-bold">
                                    K.R. Mangalam University,
                                </strong>{" "}
                                established in year 2023. The centre is
                                dedicated to fostering emotional resilience,
                                personal growth, and mental wellbeing within the
                                university community. The centre provides a
                                safe, confidential, and supportive environment
                                where students and staff can address emotional,
                                social, academic, and behavioural challenges.
                            </p>
                            <p className="text-white text-sm sm:text-[16px] leading-relaxed font-poppins font-normal text-justify">
                                Centre promote holistic wellbeing by offering
                                quality mental health care, developing coping
                                strategies, enhancing self-esteem, and helping
                                individuals overcome stress, anxiety, and other
                                life challenges. The centre also aims to assist
                                students in making informed educational and
                                career choices, understanding their strengths
                                and aspirations, and building meaningful
                                connections with peers and faculty.
                            </p>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="w-full space-y-4">
                        <h2 className="text-xl font-serif sm:text-2xl md:text-[24px] font-bold text-white tracking-wide">
                            Our Services
                        </h2>
                        <div className="p-6 sm:p-8 rounded-[6px] border border-[#0D7377] bg-transparent space-y-4">
                            <p className="text-white text-sm sm:text-[16px] leading-relaxed font-poppins font-normal text-justify">
                                The centre offers a range of services to student
                                and staff including{" "}
                                <strong className="text-white font-bold">
                                    individual and group counselling, crisis
                                    intervention, workshops, and training
                                    sessions
                                </strong>
                                . Most services are provided in person, while
                                tele-counselling is available for those who
                                require remote support.
                            </p>
                        </div>
                    </div>
                </div>
                <SectionDivider />
            </section>

            {/* Objectives Section */}
            <section className="relative w-full text-white py-10 sm:py-14">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 space-y-4">
                    <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold text-white tracking-wide font-serif">
                        Our Objectives
                    </h2>
                    <div className="p-6 sm:p-8 rounded-[6px] border border-[#0D7377] bg-transparent space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                            <ul className="flex flex-col gap-3.5">
                                {col1Objectives.map((objective, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3.5 text-white text-sm sm:text-[16px] font-poppins leading-relaxed"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                                        <span>{objective}</span>
                                    </li>
                                ))}
                            </ul>

                            <ul className="flex flex-col gap-3.5">
                                {col2Objectives.map((objective, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-start gap-3.5 text-white text-sm sm:text-[16px] font-poppins leading-relaxed"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                                        <span>{objective}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <SectionDivider />
            </section>

            {/* Leadership & Committee Members */}
            <section className="relative w-full text-white py-10 sm:py-14">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/3 space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                            About the Centre
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 font-poppins">
                            {leadershipData.aboutCentre.map((member, idx) => (
                                <li key={idx}>{member}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3 space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                            Coordinators & Team
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-300 font-poppins">
                            {leadershipData.team.map((member, idx) => (
                                <li key={idx}>{member}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <SectionDivider />
            </section>

            {/* Downloads / Documents Section */}
            <section className="relative w-full text-white py-10 sm:py-14">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row gap-8 lg:gap-10">
                    {documentColumns.map((col, colIdx) => (
                        <div key={colIdx} className="w-full lg:w-1/3 space-y-6">
                            {col.categories.map((cat, catIdx) => (
                                <div
                                    key={catIdx}
                                    className={`space-y-4 ${catIdx > 0 ? "pt-2" : ""}`}
                                >
                                    <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                                        {cat.title}
                                    </h3>
                                    <div className="space-y-3">
                                        {cat.links.map((item, linkIdx) => (
                                            <Button
                                                key={linkIdx}
                                                href={item.url}
                                                variant="outline"
                                                icon={Download}
                                                iconPosition="left"
                                                target="_blank"
                                                className="w-fit !justify-start gap-3 h-auto py-3 px-4 text-xs sm:text-sm font-medium border-white/20 hover:border-white/50 text-white hover:bg-white/10 !normal-case font-poppins tracking-normal"
                                            >
                                                {item.text}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <SectionDivider />
            </section>

            {/* Photo Gallery */}
            <section className="relative w-full text-white py-10 sm:py-14">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                        Photo Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((img, idx) => (
                            <Image
                                key={idx}
                                src={img.src}
                                width={526}
                                height={395}
                                alt={img.alt}
                                className="rounded-[4px] w-full h-auto object-cover border border-white/10"
                            />
                        ))}
                    </div>
                </div>
                <SectionDivider />
            </section>

            {/* Contact Section */}
            <section className="relative w-full text-white py-10 sm:py-14">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                        Contact Us
                    </h3>
                    <div className="flex flex-wrap gap-6 lg:gap-12">
                        {contactLinks.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="flex items-center gap-2 text-[16px] font-medium text-gray-200 hover:text-white transition-colors"
                            >
                                <Image
                                    src={item.icon}
                                    width={24}
                                    height={24}
                                    alt={item.alt}
                                />

                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <SectionDivider />
            </section>

            {/* Additional Facility Visuals */}
            <section className="relative w-full text-white py-10 sm:py-14">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 space-y-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {facilityVisuals.map((img, idx) => (
                            <div key={idx} className="w-full lg:w-1/2">
                                <Image
                                    src={img.src}
                                    width={img.width}
                                    height={img.height}
                                    alt={img.alt}
                                    className="rounded-[4px] w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={infographicVisual.src}
                            width={infographicVisual.width}
                            height={infographicVisual.height}
                            alt={infographicVisual.alt}
                            className="rounded-[4px] max-w-full h-auto"
                        />
                    </div>
                </div>
                <SectionDivider />
            </section>

            {/* Address Section */}
            <section className="w-full text-white py-10 sm:py-14">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                        Address
                    </h3>
                    <div className="flex items-center gap-2 text-[16px] font-medium text-gray-200">
                        <Image
                            src="/white-location.svg"
                            width={24}
                            height={24}
                            alt="Location"
                        />

                        <span>K.R. Mangalam University</span>
                    </div>
                    <p className="text-gray-300 -mt-3 font-poppins text-[16px] pl-8">
                        <strong className="text-white font-normal">
                            Sohna Road, Gurugram, Haryana 122103
                        </strong>
                    </p>
                </div>
            </section>
        </>
    );
};

export default CounsellingMentalWellbeingView;
