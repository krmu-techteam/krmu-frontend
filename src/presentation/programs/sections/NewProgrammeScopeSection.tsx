// import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { HeroSection, ProgrammeScopeType } from "@/lib/types/school-programme";

// import Link from "next/link";
// import CommonLeadPopup from "../../components/CommonLeadPopup";
import Image from "next/image";
import { Check } from "lucide-react";
// import { STRAPI_URL } from "@/app/constant";
import { Inter } from "next/font/google";
import { programmeScopeData } from "../constants/programme-scope.constants";

type Props = {
    scopeData: ProgrammeScopeType;
    heroSection?: HeroSection;
    allowedFormSlugs: string[];
    slug: string;
};

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

const ProgrammeScopeSection = async ({
    // scopeData,
    // heroSection,
    // allowedFormSlugs,
    slug,
}: Props) => {
    const data = programmeScopeData[slug];
    // const getDownProsSettings = await getDownloadProspectusSetting();

    // const isFormAvailable = allowedFormSlugs.includes(slug);
    // const isFormAvailable = false;

    // const enable_disable_download_pros =
    //   getDownProsSettings?.download_prospectus_enable_disable;

    return (
        <section
            id="about-program"
            className={`bg-[linear-gradient(0deg,rgba(0,0,0,0.2),rgba(0,0,0,0.2)),linear-gradient(180deg,#061623_0%,#001732_100%)] text-white py-8 md:py-12 xl:py-20 font-poppins scroll-mt-28`}
        >
            <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16 flex flex-col">
                {/* Top Section: Image (Left) & Heading/Content (Right) */}
                <div className="flex flex-col lg:flex-row  gap-8 lg:gap-12 items-center">
                    {/* Left Column: Image */}

                    <div className="sm:max-w-full lg:max-w-[45%]   relative rounded-[15px] overflow-hidden">
                        <Image
                            src={data.image}
                            width={1024}
                            height={1024}
                            className="object-cover"
                            alt={data.alt}
                        />
                    </div>

                    {/* Right Column: Heading & Content */}
                    <div className="max-w-[95%] font-serif lg:max-w-[50%]  flex flex-col justify-center">
                        <h3 className="heading-primary mb-6">{data.heading}</h3>

                        <div className="space-y-4 font-poppins text-[15px] sm:text-[16px] font-light  text-white text-justify tracking-wide leading-6 opacity-[90%]">
                            {data.description.map((item) => (
                                <p key={item.id}>{item.content}</p>
                            ))}
                            {/* <p>{data.description}</p> */}
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Skills Circle (Left) & Skills Checklist (Right) */}
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12  items-center pl-0 lg:pl-8 mt-20 md:mt-24">
                    {/* Left Column: Skills Circle Badge */}
                    <div className=" min-w-full  lg:min-w-[455px] flex justify-center items-center">
                        <div className="relative rounded-full w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] md:min-w-[455px] md:h-[455px] flex items-center justify-center ">
                            {/* Outer Dashed Ring with slow rotating animation */}
                            <svg
                                className="absolute inset-0 w-full h-full z-9"
                                viewBox="0 0 100 100"
                                fill="none"
                            >
                                <defs>
                                    <linearGradient
                                        id="dashGradient"
                                        x1="0%"
                                        y1="0%"
                                        x2="0%"
                                        y2="50%"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#0073FF"
                                            stopOpacity="1"
                                        />
                                        <stop
                                            offset="20%"
                                            stopColor="#0073FF"
                                            stopOpacity="1"
                                        />
                                        <stop
                                            offset="50%"
                                            stopColor="#29A8FF"
                                            stopOpacity="1"
                                        />
                                        <stop
                                            offset="80%"
                                            stopColor="#001732"
                                            stopOpacity="0"
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="#001732"
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                </defs>

                                <circle
                                    cx="50"
                                    cy="49"
                                    r="48"
                                    fill="none"
                                    stroke="url(#dashGradient)"
                                    strokeWidth="0.2"
                                    strokeDasharray="1.8 2.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-[5px] bg-[#031a35]  rounded-full" />
                            {/* Inner Solid Blue Ring */}
                            <div className="absolute inset-[18px] bg-[linear-gradient(180deg,#002550_0%,#000D1D_100%)] rounded-full" />

                            {/* Gold Compass Marker Pointing NE */}
                            <div className="absolute w-[28px] h-[28px] z-9 top-13 right-[16%]">
                                <Image
                                    src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Polygon_2_829da6039f.png"
                                    alt=""
                                    width={1024}
                                    height={1024}
                                    className="object-fit w-full h-full"
                                />
                            </div>

                            {/* Center Content Circle */}
                            <div
                                className={` ${inter.className} absolute inset-[24px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,#004698_10.58%,#001732_100%)]  flex flex-col justify-center items-center p-6 sm:p-7 text-center  z-0`}
                            >
                                <span
                                    className={`text-[#E7C268] font-bold text-xs ${
                                        slug === "bjmc-hons-research" ||
                                        slug === "bjmc"
                                            ? "sm:text-[25px]"
                                            : "sm:text-[29px]"
                                    } leading-[1.2]  `}
                                >
                                    {data.skillsTitle}
                                </span>
                                <h4
                                    className={`text-white font-extrabold text-[16px]  ${
                                        slug === "bjmc-hons-research" ||
                                        slug === "bjmc"
                                            ? "sm:text-[25px]"
                                            : "sm:text-[29px]"
                                    } leading-[1.2]  mb-4`}
                                >
                                    {data.skillsSubtitle}
                                </h4>

                                <p
                                    className={`text-xs  ${
                                        slug === "bjmc-hons-research" ||
                                        slug === "bjmc"
                                            ? "sm:text-[17px]"
                                            : " sm:text-[17px]"
                                    } text-white font-light font-poppins leading-[1.4] ${slug === "bjmc" ? "max-w-[320px]" : "max-w-[280px]"}`}
                                >
                                    {data.skillsDescription}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Skills Checklist */}
                    <div className=" flex flex-col max-w-[780px]">
                        <div className="  ">
                            {data.skillsList.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col text-left"
                                >
                                    <div className="flex items-center gap-4 ">
                                        <div className="flex-shrink-0 w-[44px] h-[44px] rounded bg-[#00244E]  flex items-center justify-center text-[#0073FF] shadow-md">
                                            <Check className="w-6 h-6 text-[#0073FF] stroke-[2]" />
                                        </div>
                                        <p className=" text-[14px] sm:text-[16px] leading-[1.5] font-light text-white  opacity-[80%]">
                                            {item.content}
                                        </p>
                                    </div>
                                    {data.skillsList.length !== item.id && (
                                        <div className="   h-[2px] w-full my-6 bg-[linear-gradient(90deg,#2B4058_0%,#001732_100%)]" />
                                    )}
                                </div>
                            ))}

                            {data.note && (
                                <p className="mt-8 text-[14px] sm:text-[15px] md:text-[16px] font-light text-white leading-[120%] opacity-[80%]">
                                    {data.note}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeScopeSection;
