import React from "react";
import Image from "next/image";
import { Mail, Phone, Globe, FileText } from "lucide-react";
import { STRAPI_URL } from "@/app/constant";
import { FacultyInterestArea, FacultySocialLinks } from "@/lib/api/common";

export type SocialLinkItem =
    | FacultySocialLinks
    | {
          id?: number | string;
          type?: "email" | "linkedin" | "phone" | "link";
          value?: string;
          text?: string;
          listtext?: string;
          listlink?: string;
          listicon?: {
              url?: string;
          };
      };

export type InterestAreaItem =
    | FacultyInterestArea
    | {
          id?: number | string;
          fac_int_content?: string;
      };

export type Props = {
    facultyImgURL?: string;
    facName: string;
    desg: string;
    intarea?: InterestAreaItem[] | string;
    socialLinks?: SocialLinkItem[];
};

export const SingleFacultyHero = ({
    facultyImgURL,
    facName,
    desg,
    socialLinks,
}: Props) => {
    // Resolve Image URL
    const getFullImageUrl = (url?: string) => {
        if (!url) return "";
        if (
            url.startsWith("http://") ||
            url.startsWith("https://") ||
            url.startsWith("/")
        ) {
            return url;
        }
        return `${STRAPI_URL}${url.startsWith("/") ? "" : "/"}${url}`;
    };

    const fullImgUrl = getFullImageUrl(facultyImgURL);

    // Normalize social link items
    const resolveSocialItem = (item: SocialLinkItem, index: number) => {
        // Format from WordPress ({ type, value, text })
        if ("type" in item && item.type && item.value) {
            const isLinkedIn =
                item.type === "linkedin" || item.value.includes("linkedin.com");
            const rawText = item.text || item.value;
            return {
                id: item.id ?? index,
                type: item.type,
                href:
                    item.type === "email"
                        ? `mailto:${item.value}`
                        : item.type === "phone"
                          ? `tel:${item.value}`
                          : item.value,
                text: isLinkedIn ? "Connect with LinkedIn" : rawText,
                isExternal: isLinkedIn || item.value.startsWith("http"),
                isValid: Boolean(item.value && item.value.trim() !== "#"),
            };
        }

        // Format from Strapi ({ listtext, listlink })
        const listLink = "listlink" in item ? item.listlink || "" : "";
        const listText = "listtext" in item ? item.listtext || "" : "";

        let type: "email" | "linkedin" | "phone" | "link" = "link";
        let href = listLink || "#";

        if (
            listLink.startsWith("mailto:") ||
            (!listLink.startsWith("http") && listText.includes("@"))
        ) {
            type = "email";
            href = listLink.startsWith("mailto:")
                ? listLink
                : `mailto:${listText.trim()}`;
        } else if (
            listLink.includes("linkedin.com") ||
            listText.toLowerCase().includes("linkedin")
        ) {
            type = "linkedin";
        } else if (
            listLink.startsWith("tel:") ||
            (/^[+\d\s()-]{7,}$/.test(listText.trim()) &&
                !listLink.startsWith("http"))
        ) {
            type = "phone";
            href = listLink.startsWith("tel:")
                ? listLink
                : `tel:${listText.replace(/\s+/g, "")}`;
        }

        return {
            id: "id" in item && item.id ? item.id : index,
            type,
            href,
            text:
                type === "linkedin"
                    ? "Connect with LinkedIn"
                    : listText || listLink,
            isExternal: type === "linkedin" || href.startsWith("http"),
            isValid: Boolean(
                (listText && listText.trim()) ||
                (listLink && listLink.trim() !== "#")
            ),
        };
    };

    const validSocialLinks = (socialLinks || [])
        .map((item, index) => resolveSocialItem(item, index))
        .filter((item) => item.isValid && item.text && item.text.trim());

    return (
        <section className="relative w-full overflow-hidden bg-[#061623] pt-[150px] md:pt-[200px] pb-10 sm:pb-12 md:pb-14 px-8   lg:px-8 flex items-center justify-center">
            {/* Background Building Image - clearly visible from the top */}
            <div
                className="absolute inset-0 bg-cover bg-top pointer-events-none"
                style={{
                    backgroundImage: "url('/images/faculity/faculty-bg.jpg')",
                    opacity: 0.82,
                }}
            />

            {/* Centered Hero Card */}
            <div
                className="relative max-w-[1000px] w-full mx-auto rounded-t-[8px] sm:rounded-t-[10px] p-6 sm:p-8 md:p-9 lg:p-10 overflow-hidden flex flex-col md:flex-row items-center md:items-center gap-6 sm:gap-8 md:gap-10 z-10"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(6, 22, 35, 0.75) 0%, rgba(6, 22, 35, 0) 100%)",
                }}
            >
                {/* 2px Linear Gradient Border: #FFFFFF 0% to rgba(0, 23, 50, 0) 100% */}
                <div
                    className="absolute inset-0 rounded-t-[8px] sm:rounded-t-[10px] pointer-events-none p-[2px] z-20"
                    style={{
                        background:
                            "linear-gradient(180deg, #FFFFFF 0%, rgba(0, 23, 50, 0) 100%)",
                        WebkitMask:
                            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                    }}
                />
                {/* University Logo Watermark: width: 267px; height: 242px; opacity: 0.12; */}
                <div
                    className="absolute right-4 sm:right-8 md:right-10 lg:right-12 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden sm:block"
                    style={{
                        width: 267,
                        height: 242,
                    }}
                >
                    <Image
                        src="/images/faculity/faculity-uni-logo.png"
                        width={267}
                        height={242}
                        alt=""
                        aria-hidden="true"
                        className="w-[267px] h-[242px] object-contain"
                        priority
                    />
                </div>

                {/* Faculty Photo */}
                <div className="relative z-10 shrink-0">
                    <div className="bg-white rounded-[8px] sm:rounded-[10px] overflow-hidden w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] md:w-[240px] md:h-[240px] lg:w-[250px] lg:h-[250px] flex items-center justify-center">
                        {fullImgUrl ? (
                            <Image
                                src={fullImgUrl}
                                width={260}
                                height={260}
                                alt={facName || "Faculty"}
                                priority
                                className="w-full h-full object-cover object-top"
                            />
                        ) : (
                            <div className="w-full h-full bg-[#eef2f7] flex items-center justify-center text-slate-400">
                                No Photo
                            </div>
                        )}
                    </div>
                </div>

                {/* Faculty Info */}
                <div className="relative z-10 flex-1 text-white text-center md:text-left min-w-0">
                    <h1 className="text-2xl font-serif sm:text-3xl md:text-[34px] lg:text-[38px] font-bold tracking-tight text-white leading-tight">
                        {facName}
                    </h1>

                    <p className="text-sm sm:text-base md:text-[17px] text-white/85 font-normal mt-1.5 mb-5 md:mb-6 font-poppins">
                        {desg}
                    </p>

                    {/* Contact / Social Links */}
                    {validSocialLinks.length > 0 && (
                        <div className="flex justify-center md:justify-start w-full">
                            <ul className="flex flex-col gap-3 sm:gap-3.5 items-start text-left max-w-full">
                                {validSocialLinks.map((resolved) => (
                                    <li
                                        key={resolved.id}
                                        className="flex items-center gap-3 text-white/95 text-xs sm:text-sm md:text-[14.5px] leading-normal group max-w-full"
                                    >
                                        <span className="w-7 h-7 sm:w-[28px] sm:h-[28px] rounded-[4px] bg-[#0c82e4] flex items-center justify-center shrink-0 transition-transform">
                                            {resolved.type === "email" && (
                                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                            )}
                                            {resolved.type === "linkedin" && (
                                                <svg
                                                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                                                </svg>
                                            )}
                                            {resolved.type === "phone" && (
                                                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                            )}
                                            {resolved.type === "link" && (
                                                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                                            )}
                                        </span>

                                        <a
                                            href={resolved.href}
                                            target={
                                                resolved.isExternal
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                resolved.isExternal
                                                    ? "noreferrer"
                                                    : undefined
                                            }
                                            className="text-white/95 hover:text-white hover:underline transition-colors font-poppins break-all"
                                        >
                                            {resolved.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SingleFacultyHero;
