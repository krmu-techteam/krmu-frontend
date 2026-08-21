import Image from "next/image";
import React from "react";
import {
    Lock,
    GraduationCap,
    Send,
    AlertCircle,
    LockKeyholeOpen,
} from "lucide-react";
import { PiWarningCircleFill } from "react-icons/pi";

const page = () => {
    return (
        <div className="w-full bg-[#f8f8f6]">
            {/* CUET Hero Banner Section */}
            <section className="relative w-full overflow-hidden lg:min-h-[780px] xl:h-[815px] flex flex-col justify-center lg:flex-row lg:items-center bg-[#EDECE4] pt-[78px] sm:pt-[82px] lg:pt-[135px] xl:pt-[140px] pb-8 sm:pb-10 lg:pb-0">
                {/* Background Layers */}
                {/* Left 58% Gradient Background */}
                <div
                    className="absolute inset-y-0 left-0 w-full lg:w-[58%] xl:w-[57.5%] z-0"
                    style={{
                        background:
                            "linear-gradient(129.31deg, #EDECE4 4.14%, #FFFFFF 90.36%)",
                    }}
                />

                {/* Right 42% Campus Background Image */}
                <div className="absolute inset-y-0 right-0 w-[42%] xl:w-[42.5%] hidden lg:block z-0 overflow-hidden">
                    <Image
                        src="/images/cuet/right-bg.jpg"
                        alt="KRMU Campus"
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        priority
                        className="object-cover object-left"
                    />
                </div>

                {/* Content Container */}
                <div className="max-w-[1440px] mx-auto w-full h-full relative z-10 px-4 sm:px-8 lg:px-10 xl:px-16 pt-0 pb-0 lg:py-0 flex flex-col-reverse lg:flex-row items-center justify-between">
                    {/* Left Content Area */}
                    <div className="w-full lg:w-[54%] xl:w-[50%] flex flex-col justify-center z-10 pt-2 pb-0 lg:py-4">
                        {/* Main Title */}
                        <h1
                            className="font-sofia font-extrabold text-[36px] sm:text-[46px] md:text-[50px] lg:text-[54px] xl:text-[70px] leading-[34px] sm:leading-[44px] md:leading-[48px] lg:leading-[50px] xl:leading-[65px] tracking-[0.02em] text-[#061623] max-w-[631px]"
                            style={{
                                fontFamily:
                                    "var(--font-sofia-sans-condensed), 'Sofia Sans Condensed', sans-serif",
                                fontWeight: 800,
                                letterSpacing: "0.02em",
                            }}
                        >
                            Ace the{" "}
                            <span className="text-[#C41230]">
                                CUET UG 2026?
                            </span>
                            <br />
                            Advance Your Career
                            <br />
                            with KRMU!
                        </h1>

                        {/* Subtitle */}
                        <h2
                            className="mt-3 sm:mt-4 xl:mt-5 text-base sm:text-xl lg:text-[26px] xl:text-[36px] leading-[24px] sm:leading-[28px] lg:leading-[32px] xl:leading-[42px] text-[#0B192C] font-normal font-faustina tracking-normal"
                            style={{
                                fontFamily:
                                    "var(--font-faustina), 'Faustina', serif",
                                letterSpacing: "0%",
                            }}
                        >
                            Secure Up to{" "}
                            <strong className="font-bold text-[#061623]">
                                100% Scholarship
                            </strong>
                            <br />
                            Benefits via CUET UG Score!
                        </h2>

                        {/* Description */}
                        <p
                            className="mt-2.5 sm:mt-3 xl:mt-3.5 text-[13.5px] xl:text-[14px] leading-[22px] xl:leading-[24px] font-light font-poppins text-[#000000] max-w-full lg:max-w-[430px] xl:max-w-[520px] tracking-normal"
                            style={{
                                fontFamily:
                                    "var(--font-poppins), 'Poppins', sans-serif",
                                fontWeight: 300,
                                letterSpacing: "0%",
                            }}
                        >
                            Your CUET result is more than just a score—it&apos;s
                            your gateway to a world of opportunities at K.R.
                            Mangalam University. Apply now and begin your
                            journey toward academic excellence and career
                            success.
                        </p>

                        {/* 4 Cards Grid */}
                        <div className="mt-4 sm:mt-6 xl:mt-7 grid grid-cols-2 gap-2.5 sm:gap-3 xl:gap-3.5 w-full max-w-full lg:max-w-[430px] xl:max-w-[480px]">
                            {/* Card 1 */}
                            <div className="w-full lg:w-[205px] xl:w-[232px] h-[88px] sm:h-[96px] xl:h-[102px] bg-white border border-[#CBD5E1] rounded-[10px] px-2 sm:px-3 py-1 sm:py-1.5 xl:py-2 flex flex-col items-center justify-center text-center  hover:border-[#94A3B8] font-poppins text-[11px] sm:text-[13px] xl:text-[14px] leading-[16px] sm:leading-[20px] xl:leading-[22px] tracking-normal">
                                <span className="font-light text-[#061623]">
                                    Up to
                                </span>
                                <span className="font-bold text-[#061623] text-[12px] sm:text-[14px]">
                                    100% Scholarships
                                </span>
                                <span className="font-light text-[#061623] text-[10px] sm:text-[12px] xl:text-[14px]">
                                    based on CUET score/percentile
                                </span>
                            </div>

                            {/* Card 2 */}
                            <div className="w-full lg:w-[205px] xl:w-[232px] h-[88px] sm:h-[96px] xl:h-[102px] bg-white border border-[#CBD5E1] rounded-[10px] px-2 sm:px-3 py-1 sm:py-1.5 xl:py-2 flex flex-col items-center justify-center text-center hover:border-[#94A3B8] font-poppins text-[11px] sm:text-[13px] xl:text-[14px] leading-[16px] sm:leading-[20px] xl:leading-[22px] tracking-normal">
                                <span className="font-bold text-[#061623] text-[13px] sm:text-[15px] xl:text-[16px] leading-[18px] sm:leading-[22px] xl:leading-[24px]">
                                    50+ Strong
                                </span>
                                <span className="font-light text-[#061623] text-[10.5px] sm:text-[12px] xl:text-[14px]">
                                    Industry Partnerships
                                </span>
                            </div>

                            {/* Card 3 */}
                            <div className="w-full lg:w-[205px] xl:w-[232px] h-[88px] sm:h-[96px] xl:h-[102px] bg-white border border-[#CBD5E1] rounded-[10px] px-2 sm:px-3 py-1 sm:py-1.5 xl:py-2 flex flex-col items-center justify-center text-center hover:border-[#94A3B8] font-poppins text-[11px] sm:text-[13px] xl:text-[14px] leading-[16px] sm:leading-[20px] xl:leading-[22px] tracking-normal">
                                <span className="font-bold text-[#061623] text-[13px] sm:text-[15px] xl:text-[16px] leading-[18px] sm:leading-[22px] xl:leading-[24px]">
                                    Global Exposure
                                </span>
                                <span className="font-light text-[#061623] text-[10.5px] sm:text-[12px] xl:text-[14px]">
                                    Opportunities
                                </span>
                            </div>

                            {/* Card 4 */}
                            <div className="w-full lg:w-[205px] xl:w-[232px] h-[88px] sm:h-[96px] xl:h-[102px] bg-white border border-[#CBD5E1] rounded-[10px] px-2 sm:px-3 py-1 sm:py-1.5 xl:py-2 flex flex-col items-center justify-center text-center hover:border-[#94A3B8] font-poppins text-[11px] sm:text-[13px] xl:text-[14px] leading-[16px] sm:leading-[20px] xl:leading-[22px] tracking-normal">
                                <span className="font-bold text-[#061623] text-[13px] sm:text-[15px] xl:text-[16px] leading-[18px] sm:leading-[22px] xl:leading-[24px]">
                                    Career-Focused
                                </span>
                                <span className="font-light text-[#061623] text-[10.5px] sm:text-[12px] xl:text-[14px]">
                                    Education
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Mobile Campus Image Banner (only shown on mobile/tablet below lg) */}
                    <div className="-mx-4 sm:-mx-8 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)] mb-6 sm:mb-8 rounded-none overflow-hidden shadow-md lg:hidden relative h-[320px] sm:h-[420px] md:h-[480px]">
                        <Image
                            src="/images/cuet/right-bg.jpg"
                            alt="KRMU Campus"
                            fill
                            sizes="100vw"
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 flex justify-center">
                            <Image
                                src="/images/cuet/girl.png"
                                alt="CUET Student"
                                width={500}
                                height={650}
                                className="h-[300px] sm:h-[400px] md:h-[460px] w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Girl Image (Desktop: positioned standing across the seam line) */}
                <div className="hidden lg:block absolute bottom-0 left-[59%] xl:left-[57.5%] -translate-x-[38%] xl:-translate-x-[42%] z-20 pointer-events-none h-[86%] lg:h-[89%] xl:h-[96%] max-h-[710px]">
                    <Image
                        src="/images/cuet/girl.png"
                        alt="CUET Student"
                        width={620}
                        height={820}
                        priority
                        className="h-full w-auto object-contain object-bottom drop-shadow-sm"
                    />
                </div>
            </section>

            {/* CUET Eligibility Details Section */}
            <section className="pt-8 sm:pt-10 md:pt-14 pb-10 sm:pb-14 md:pb-16 xl:pb-20 bg-[#0F2A4D] text-white">
                <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12">
                    {/* Top 3 Action Badges */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-[1240px] mx-auto mb-14 md:mb-16">
                        {/* Badge 1 */}
                        <div className="w-full max-w-[390px] mx-auto h-[60px] rounded-[10px] bg-[#173357] flex items-center justify-center gap-3 text-[#60A9E5] font-poppins font-medium text-[16px]">
                            <LockKeyholeOpen size={20} strokeWidth={2.2} />
                            <span>Secure Admission</span>
                        </div>

                        {/* Badge 2 */}
                        <div className="w-full max-w-[390px] mx-auto h-[60px] rounded-[10px] bg-[#173357] flex items-center justify-center gap-3 text-[#60A9E5] font-poppins font-medium text-[16px]">
                            <GraduationCap size={22} strokeWidth={2.2} />
                            <span>Claim Scholarship</span>
                        </div>

                        {/* Badge 3 */}
                        <div className="w-full max-w-[390px] mx-auto h-[60px] rounded-[10px] bg-[#173357] flex items-center justify-center gap-3 text-[#60A9E5] font-poppins font-medium text-[16px]">
                            <Send size={20} strokeWidth={2.2} />
                            <span>Shape Future</span>
                        </div>
                    </div>

                    {/* Section Header */}
                    <div className="text-center max-w-[740px] mx-auto">
                        <h2
                            className="font-sofia font-bold text-[36px] sm:text-[46px] lg:text-[58px] leading-[38px] sm:leading-[46px] lg:leading-[35px] text-white tracking-normal"
                            style={{
                                fontFamily:
                                    "var(--font-sofia-sans-condensed), 'Sofia Sans Condensed', sans-serif",
                                fontWeight: 700,
                                letterSpacing: "0%",
                            }}
                        >
                            CUET Eligibility Details
                        </h2>
                        <p className="mt-6 text-[14px] sm:text-[15px] text-white/80 font-poppins font-light leading-relaxed">
                            Use your CUET score/percentile to avail attractive
                            scholarships as per the eligibility criteria
                            mentioned below. The higher your performance, the
                            greater your scholarship benefit.
                        </p>
                    </div>

                    {/* Comparison Cards: Category A & Category B */}
                    <div className="max-w-[1060px] mx-auto w-full mt-10 relative rounded-[10px] overflow-hidden flex flex-col md:flex-row border border-white/10">
                        {/* Category A */}
                        <div
                            className="flex-1 p-5 sm:p-6 md:p-8 pb-6 sm:pb-8 flex flex-col justify-between relative"
                            style={{
                                background:
                                    "linear-gradient(114.75deg, #D4E8FD 6.83%, #F3F3F3 100.1%)",
                            }}
                        >
                            <div>
                                <div className="flex flex-row items-center justify-between gap-2 mb-4 sm:mb-5">
                                    <h3 className="text-[18px] sm:text-[22px] font-bold text-[#061623] font-poppins whitespace-nowrap">
                                        Category A
                                    </h3>
                                    <span className="text-[11.5px] sm:text-[13px] text-[#4B5563] font-poppins font-normal text-right">
                                        On The Basis of Percentage
                                    </span>
                                </div>

                                {/* Category A Table Box with Gradient Border */}
                                <div
                                    className="p-[3px] sm:p-[4px] rounded-[15px] max-w-[456px] mx-auto w-full min-h-[240px] md:min-h-[270px] lg:h-[242px] flex flex-col"
                                    style={{
                                        background:
                                            "linear-gradient(105.86deg, #68B0FF 2.95%, #9BCBFF 95.12%)",
                                    }}
                                >
                                    <div className="rounded-[12px] overflow-hidden w-full h-full flex-1 flex flex-col justify-between">
                                        {/* Table Header */}
                                        <div className="h-[40px] sm:h-[44px] bg-[#AAD3FF] px-3.5 sm:px-6 flex items-center justify-between text-[#061623] font-bold text-[13px] sm:text-[14px] font-poppins shrink-0">
                                            <span>Percentage</span>
                                            <span>Scholarship</span>
                                        </div>
                                        {/* Table Rows */}
                                        <div
                                            className="px-3.5 sm:px-6 py-2.5 flex-1 flex flex-col justify-around text-[#061623] font-normal text-[12px] sm:text-[13px] lg:text-[14px] leading-[26px] md:leading-[28px] lg:leading-[34px] font-poppins tracking-normal"
                                            style={{
                                                background:
                                                    "linear-gradient(105.86deg, #68B0FF 2.95%, #9BCBFF 95.12%)",
                                                fontFamily:
                                                    "var(--font-poppins), 'Poppins', sans-serif",
                                                fontWeight: 400,
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>90%+</span>
                                                <span className="shrink-0">
                                                    100%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>75% - 89.9%</span>
                                                <span className="shrink-0">
                                                    50%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>60% - 74.9%</span>
                                                <span className="shrink-0">
                                                    35%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>50% - 59.9%</span>
                                                <span className="shrink-0">
                                                    25%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>45% - 49.9%</span>
                                                <span className="shrink-0">
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Floating OR Badge */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#061623] font-bold text-[13px] font-poppins border-3 border-[#CBD5E1]">
                            OR
                        </div>

                        {/* Mobile Floating OR Badge */}
                        <div className="flex md:hidden items-center justify-center -my-5 z-20 relative">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#061623] font-bold text-[13px] font-poppins border-2 border-[#CBD5E1] shadow-lg">
                                OR
                            </div>
                        </div>

                        {/* Category B */}
                        <div
                            className="flex-1 p-5 sm:p-6 md:p-8 pt-7 sm:pt-8 flex flex-col justify-between relative"
                            style={{
                                background:
                                    "linear-gradient(256.96deg, #FFEEC4 2.99%, #FFFFFF 59.41%)",
                            }}
                        >
                            <div>
                                <div className="flex flex-row items-center justify-between gap-2 mb-4 sm:mb-5 pt-1 sm:pt-0">
                                    <h3 className="text-[18px] sm:text-[22px] font-bold text-[#061623] font-poppins whitespace-nowrap">
                                        Category B
                                    </h3>
                                    <span className="text-[11.5px] sm:text-[13px] text-[#4B5563] font-poppins font-normal text-right">
                                        On The Basis of Percentile
                                    </span>
                                </div>

                                {/* Category B Table Box with Gradient Border */}
                                <div
                                    className="p-[3px] sm:p-[4px] rounded-[15px] max-w-[456px] mx-auto w-full min-h-[240px] md:min-h-[270px] lg:h-[242px] shadow-sm flex flex-col"
                                    style={{
                                        background:
                                            "linear-gradient(254.17deg, #FFDC85 2.14%, #FFF1CE 95.47%)",
                                    }}
                                >
                                    <div className="rounded-[12px] overflow-hidden w-full h-full flex-1 flex flex-col justify-between">
                                        {/* Table Header */}
                                        <div className="h-[40px] sm:h-[44px] bg-[#FFDE8F] px-3.5 sm:px-6 flex items-center justify-between text-[#061623] font-bold text-[13px] sm:text-[14px] font-poppins shrink-0">
                                            <span>Percentile</span>
                                            <span>Scholarship</span>
                                        </div>
                                        {/* Table Rows */}
                                        <div
                                            className="px-3.5 sm:px-6 py-2.5 flex-1 flex flex-col justify-around text-[#061623] font-normal text-[12px] sm:text-[13px] lg:text-[14px] leading-[20px] md:leading-[22px] lg:leading-[34px] font-poppins tracking-normal"
                                            style={{
                                                background:
                                                    "linear-gradient(254.17deg, #FFDC85 2.14%, #FFF1CE 95.47%)",
                                                fontFamily:
                                                    "var(--font-poppins), 'Poppins', sans-serif",
                                                fontWeight: 400,
                                                letterSpacing: "0%",
                                            }}
                                        >
                                            <div className="flex items-center justify-between gap-2">
                                                <span>
                                                    95 Percentile and Above
                                                </span>
                                                <span className="shrink-0">
                                                    100%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between gap-2">
                                                <span>
                                                    85 Percentile to Less than
                                                    95 Percentile
                                                </span>
                                                <span className="shrink-0">
                                                    35%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between gap-2">
                                                <span>
                                                    70 Percentile to Less than
                                                    85 Percentile
                                                </span>
                                                <span className="shrink-0">
                                                    25%
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between gap-2">
                                                <span>
                                                    50 Percentile to Less than
                                                    70 Percentile
                                                </span>
                                                <span className="shrink-0">
                                                    10%
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* First Come First Serve */}
                    <p className="mt-7 sm:mt-9 xl:mt-10 mb-4 sm:mb-6 text-center text-white/90 font-poppins font-normal text-[16px] sm:text-[18px] xl:text-[21px] tracking-wide">
                        (First Come First Serve)
                    </p>

                    {/* Warning Note Box */}
                    <div className="max-w-[1000px] mx-auto w-full rounded-[10px] border-2 border-[#FF6174] px-3.5 sm:px-5 py-3 sm:py-3.5 flex items-start sm:items-center gap-2.5 sm:gap-3 text-left">
                        <PiWarningCircleFill className="text-[#fff] fill-[#FF6174] shrink-0 mt-0.5 sm:mt-0 text-[20px] sm:text-[24px] xl:text-[28px]" />
                        <p className="text-[12.5px] sm:text-[14.5px] xl:text-[16px] font-poppins leading-[18px] sm:leading-[22px] xl:leading-relaxed text-[#FF6174]">
                            <strong className="font-bold text-[#FF6174]">
                                Note:
                            </strong>{" "}
                            For the CUET Scholarship, either percentage
                            (Category A) or percentile (Category B) will be
                            considered.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default page;
