import { STRAPI_URL } from "@/app/constant";
import { HeaderMenus } from "@/lib/types/header-menu";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowUpRight, Download } from "lucide-react";
import { Carousel } from "@/components/common/Carousel";
import { SUCCESS_STORIES } from "@/features/home";
import Button from "@/components/common/Button";
import PlacementRecruiters from "./PlacementRecruiters";
import { formatInternalLink, isExternalUrl } from "@/lib/utils";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

type Props = {
    mainMenu: HeaderMenus[];
};

const NavbarMenu = ({ mainMenu }: Props) => {
    const [isNavHidden, setIsNavHidden] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        setIsNavHidden(false);
        setActiveMenu(null);
    }, [pathname]);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMenuEnter = (menuKey: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsNavHidden(false);
        setActiveMenu(menuKey);
    };

    const handleMenuLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setActiveMenu(null);
        }, 250);
    };

    const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.closest("a")) {
            setIsNavHidden(true);
            setActiveMenu(null);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            if (document.activeElement instanceof HTMLElement) {
                document.activeElement.blur();
            }
        }
    };

    const handleMouseLeave = () => {
        handleMenuLeave();
    };

    const academicMenu = mainMenu.find(
        (component) => component.__component === "temp-menus.academic-menu"
    );

    const programmesLinks = mainMenu.find(
        (component) => component.title?.toLowerCase() === "programmes"
    );
    const careersLinks = mainMenu.find(
        (component) => component.title === "Careers"
    );
    const zenithLinks = mainMenu.find(
        (component) => component.title === "Zenith"
    );
    const sustainabilityLinks = mainMenu.find(
        (component) => component.title === "Sustainability"
    );

    const applyNowButton = mainMenu.find(
        (component) => component.__component === "menu.menu-button"
    );

    const admissionMenu = mainMenu.find(
        (component) => component.__component === "temp-menus.admissions"
    );

    const placementMenu = mainMenu.find(
        (component) => component.__component === "temp-menus.placement-menu"
    );
    const researchMenu = mainMenu.find(
        (component) => component.__component === "temp-menus.research-menu"
    );

    const lifeatkrmuMenu = mainMenu.find(
        (component) => component.__component === "temp-menus.life-at-krmu"
    );

    const aboutusMenu = mainMenu.find(
        (component) => component.__component === "temp-menus.about-us-menu"
    );

    // Prepare Overview links ensuring "Research And Innovation" is present
    const rawOverviewLinks: any[] = aboutusMenu?.overview?.menulinks
        ? [...aboutusMenu.overview.menulinks]
        : [
              { id: 1, title: "About KRMU", url: "/about-us" },
              { id: 2, title: "Leadership", url: "/leadership" },
              {
                  id: 3,
                  title: "Awards and Achievements",
                  url: "/awards-and-achievements",
              },
              {
                  id: 4,
                  title: "Research And Innovation",
                  url: "/research-overview",
              },
              {
                  id: 5,
                  title: "Accreditations, Recognition and Approvals",
                  url: "/accreditations-recognition-and-approvals",
              },
              {
                  id: 6,
                  title: "Membership and Ranking",
                  url: "/membership-and-rankings",
              },
              {
                  id: 7,
                  title: "Mandatory Disclosures",
                  url: "/mandatory-disclosures",
              },
          ];

    const hasResearch = rawOverviewLinks.some((link: any) =>
        link.title?.toLowerCase().includes("research")
    );
    if (!hasResearch) {
        const awardsIndex = rawOverviewLinks.findIndex((link: any) =>
            link.title?.toLowerCase().includes("awards")
        );
        const researchItem: any = {
            id: 999,
            title: "Research And Innovation",
            url: "/research-overview",
        };
        if (awardsIndex !== -1) {
            rawOverviewLinks.splice(awardsIndex + 1, 0, researchItem);
        } else {
            rawOverviewLinks.push(researchItem);
        }
    }

    const aboutUsOthersLinks = [
        {
            id: "oth-1",
            title: "Alumni",
            url: "https://alumni.krmangalam.edu.in/",
        },
        {
            id: "oth-2",
            title: "Foundry",
            url: "https://foundry.krmangalam.edu.in/",
        },
        { id: "oth-3", title: "LMS", url: "https://lms.krmangalam.edu.in/" },
        {
            id: "oth-4",
            title: "ERP",
            url: "https://krmu.icloudems.com/corecampus/index.php",
        },
    ];

    return (
        <>
            <div
                className={`hidden xl:block ${isNavHidden ? "nav-menu-hidden pointer-events-none" : ""}`}
                onClick={handleNavClick}
                onMouseLeave={handleMouseLeave}
            >
                <ul className="flex items-center xl:gap-3 2xl:gap-6">
                    {/* Academics */}
                    {academicMenu && (
                        <li
                            className={`krm-sub-menu-has-children ${activeMenu === "academics" ? "is-active" : ""}`}
                            onMouseEnter={() => handleMenuEnter("academics")}
                            onMouseLeave={handleMenuLeave}
                        >
                            <div
                                className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer ${activeMenu === "academics" ? "text-white" : ""}`}
                            >
                                <span>{academicMenu?.title}</span>
                                <ChevronDown
                                    className={`w-4 h-4 opacity-70 transition-transform duration-300 ${activeMenu === "academics" ? "rotate-180 opacity-100" : ""}`}
                                />
                            </div>
                            <div
                                className="absolute left-0 right-0 mx-auto w-full max-w-[1440px] top-full bg-[#04101A] pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden krmsubmenu-container z-50 shadow-2xl"
                                onMouseEnter={() =>
                                    handleMenuEnter("academics")
                                }
                                onMouseLeave={handleMenuLeave}
                            >
                                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                                    {/* Left: Program Level */}
                                    <div className="col-span-12 lg:col-span-7">
                                        <div className="text-2xl font-normal font-poppins text-white mb-6">
                                            Program Level
                                        </div>

                                        <div className="grid grid-cols-2 gap-5">
                                            {/* Undergraduate */}
                                            <Link
                                                href="/programmes?degree=undergraduate-programmes"
                                                className="group relative aspect-[16/9.5] w-full overflow-hidden rounded-[1px] block"
                                            >
                                                <Image
                                                    src="/modules/header/academics/undergraduate.jpg"
                                                    alt="Undergraduate Programmes"
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 400px"
                                                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
                                                />
                                                <div className="absolute inset-x-3 bottom-3 py-2.5 bg-[#061623] rounded-[2px] text-center transition-all duration-500 ease-in-out group-hover:bg-[#061623]">
                                                    <span className="text-sm font-light text-white font-poppins">
                                                        Undergraduate Programmes
                                                    </span>
                                                </div>
                                            </Link>

                                            {/* Postgraduate */}
                                            <Link
                                                href="/programmes?degree=postgraduate-programmes"
                                                className="group relative aspect-[16/9.5] w-full overflow-hidden rounded-[1px]  block bg-[#0b1622]"
                                            >
                                                <Image
                                                    src="/modules/header/academics/postgraduate.png"
                                                    alt="Postgraduate Programmes"
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 400px"
                                                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
                                                />
                                                <div className="absolute inset-x-3 bottom-3 py-2.5 bg-[#061623] rounded-[2px] text-center transition-all duration-500 ease-in-out ">
                                                    <span className="text-sm font-light text-white font-poppins">
                                                        Postgraduate Programmes
                                                    </span>
                                                </div>
                                            </Link>

                                            {/* Doctoral */}
                                            <Link
                                                href="/programmes?degree=doctoral-programmes"
                                                className="group relative aspect-[16/9.5] w-full overflow-hidden rounded-[1px]  block bg-[#0b1622]"
                                            >
                                                <Image
                                                    src="/modules/header/academics/doctoral.jpg"
                                                    alt="Doctoral Programmes"
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 400px"
                                                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
                                                />
                                                <div className="absolute inset-x-3 bottom-3 py-2.5 bg-[#061623] rounded-[2px] text-center transition-all duration-500 ease-in-out ">
                                                    <span className="text-sm font-light text-white font-poppins">
                                                        Doctoral Programmes
                                                    </span>
                                                </div>
                                            </Link>

                                            {/* Diploma */}
                                            <Link
                                                href="/programmes?degree=diploma-programmes"
                                                className="group relative aspect-[16/9.5] w-full overflow-hidden rounded-[1px]  block bg-[#0b1622]"
                                            >
                                                <Image
                                                    src="/modules/header/academics/diploma.jpg"
                                                    alt="Diploma Programmes"
                                                    fill
                                                    sizes="(max-width: 1024px) 100vw, 400px"
                                                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
                                                />
                                                <div className="absolute inset-x-3 bottom-3 py-2.5 bg-[#061623] rounded-[2px] text-center transition-all duration-500 ease-in-out ">
                                                    <span className="text-sm font-light text-white font-poppins">
                                                        Diploma Programmes
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>

                                        {/* Academics Counters */}
                                        <div className="grid grid-cols-2 gap-5 mt-6">
                                            {academicMenu?.acadcounter &&
                                                academicMenu.acadcounter
                                                    .length > 0 &&
                                                academicMenu.acadcounter.map(
                                                    (counter) => (
                                                        <div
                                                            key={counter.id}
                                                            className="relative overflow-hidden group flex items-center justify-center h-[69px] border border-[#3C7ED4] rounded-[2px] text-center transition-all duration-300 hover:bg-[#061623] hover:border-[#3C7ED4]/80"
                                                        >
                                                            <p className="text-lg font-light font-poppins text-white tracking-wide">
                                                                {
                                                                    counter.countertext
                                                                }{" "}
                                                                {
                                                                    counter.countercontent
                                                                }
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>

                                    {/* Right: Schools */}
                                    <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
                                        <div>
                                            <div className="text-2xl font-normal font-poppins text-white mb-6">
                                                Schools
                                            </div>

                                            <ul className="flex flex-col gap-3 overflow-hidden">
                                                {academicMenu?.academicmenu?.menulinks.map(
                                                    (school) => {
                                                        const isZenith =
                                                            school.title
                                                                .toLowerCase()
                                                                .includes(
                                                                    "zenith"
                                                                );
                                                        return (
                                                            <li key={school.id}>
                                                                <Link
                                                                    href={
                                                                        formatInternalLink(
                                                                            school.url
                                                                        ) || "#"
                                                                    }
                                                                    className={`font-poppins relative transition-all duration-300 text-[15px] font-light flex items-center group ${
                                                                        isZenith
                                                                            ? "text-[#3b82f6] hover:text-[#3b82f6]/80 font-normal"
                                                                            : "text-white/80 hover:text-white"
                                                                    }`}
                                                                >
                                                                    <span
                                                                        className={`absolute -left-4 w-1.5 h-1.5 rounded-full scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100 ${
                                                                            isZenith
                                                                                ? "bg-[#3b82f6]"
                                                                                : "bg-[#cb000d]"
                                                                        }`}
                                                                    />
                                                                    <span>
                                                                        {
                                                                            school.title
                                                                        }
                                                                    </span>
                                                                </Link>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>

                                        {/* Handbook and Brochure Buttons */}
                                        <div className="flex flex-wrap items-center gap-4 mt-8">
                                            <Link
                                                href="https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Policy-of-Code-of-Conduct.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative overflow-hidden group w-fit border border-[#fff]/90 hover:border-white bg-[#071624]/50 text-white/90 hover:text-white font-poppins font-normal py-3 px-4 hover:bg-white/5 rounded-[2px] text-[14px] flex items-center justify-center gap-1.5 transition-all duration-300  text-center tracking-wide whitespace-nowrap active:scale-[0.98] cursor-pointer"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                                                <span className="relative z-10">
                                                    University Student Handbook
                                                </span>
                                            </Link>
                                            <Link
                                                href="#"
                                                className="relative hover:bg-white/5 overflow-hidden group w-fit border border-[#fff]/90 hover:border-white bg-[#071624]/50 text-white/90 hover:text-white font-poppins font-normal py-3 px-4 rounded-[2px] text-[14px] flex items-center justify-center gap-1.5 transition-all duration-300  text-center tracking-wide whitespace-nowrap active:scale-[0.98] cursor-pointer"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                                                <span className="relative z-10">
                                                    Download Brochure
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}

                    {/* Programmes */}
                    <li onMouseEnter={() => handleMenuEnter("")}>
                        <Link
                            className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] ${
                                (programmesLinks &&
                                    "menuclass" in programmesLinks &&
                                    programmesLinks.menuclass) ||
                                ""
                            }`}
                            href={
                                programmesLinks &&
                                "url" in programmesLinks &&
                                programmesLinks.url &&
                                programmesLinks.url !== "#"
                                    ? programmesLinks.url
                                    : "/programmes"
                            }
                        >
                            <span>
                                {programmesLinks?.title || "Programmes"}
                            </span>
                        </Link>
                    </li>

                    {/* Admissions */}
                    {admissionMenu && (
                        <li
                            className={`krm-sub-menu-has-children ${activeMenu === "admissions" ? "is-active" : ""}`}
                            onMouseEnter={() => handleMenuEnter("admissions")}
                            onMouseLeave={handleMenuLeave}
                        >
                            <div
                                className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer ${activeMenu === "admissions" ? "text-white" : ""}`}
                            >
                                <span>{admissionMenu?.title}</span>
                                <ChevronDown
                                    className={`w-4 h-4 opacity-70 transition-transform duration-300 ${activeMenu === "admissions" ? "rotate-180 opacity-100" : ""}`}
                                />
                            </div>
                            <div
                                className="absolute left-0 right-0 mx-auto w-full max-w-[1440px] top-full bg-[#04101A] pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden krmsubmenu-container z-50"
                                onMouseEnter={() =>
                                    handleMenuEnter("admissions")
                                }
                                onMouseLeave={handleMenuLeave}
                            >
                                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                                    {/* Left Section: Link Columns */}
                                    <div className="col-span-12 lg:col-span-8">
                                        <div className="text-2xl font-normal font-poppins text-white mb-6">
                                            {admissionMenu?.title}
                                        </div>
                                        <div className="grid grid-cols-2 gap-8">
                                            {/* Enrolment */}
                                            {admissionMenu?.enrollnow && (
                                                <div>
                                                    <div className="text-sm bg-[#12202B] px-4 py-3 font-poppins font-semibold text-white mb-6 rounded-[1px]">
                                                        {
                                                            admissionMenu
                                                                ?.enrollnow
                                                                ?.heading
                                                        }
                                                    </div>
                                                    <ul className="flex flex-col gap-1">
                                                        {admissionMenu?.enrollnow?.menulinks.map(
                                                            (menu) => {
                                                                const href =
                                                                    formatInternalLink(
                                                                        menu.url
                                                                    ) || "#";
                                                                const ext =
                                                                    isExternalUrl(
                                                                        menu.url
                                                                    );
                                                                return (
                                                                    <li
                                                                        key={
                                                                            menu.id
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                href
                                                                            }
                                                                            className="font-poppins font-light text-white/80 hover:text-white transition-colors duration-200 text-[15px] py-1 flex items-center"
                                                                            target={
                                                                                ext
                                                                                    ? "_blank"
                                                                                    : undefined
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    menu.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Scholarships */}
                                            {admissionMenu?.scholarships && (
                                                <div>
                                                    <div className="text-sm bg-[#12202B] px-4 py-3 font-poppins font-semibold text-white mb-6 rounded-[1px]">
                                                        {
                                                            admissionMenu
                                                                ?.scholarships
                                                                ?.heading
                                                        }
                                                    </div>
                                                    <ul className="flex flex-col gap-1">
                                                        {admissionMenu?.scholarships?.menulinks.map(
                                                            (menu) => {
                                                                const href =
                                                                    formatInternalLink(
                                                                        menu.url
                                                                    ) || "#";
                                                                const ext =
                                                                    isExternalUrl(
                                                                        menu.url
                                                                    );
                                                                return (
                                                                    <li
                                                                        key={
                                                                            menu.id
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                href
                                                                            }
                                                                            className="font-poppins font-light text-white/80 hover:text-white transition-colors duration-200 text-[15px] py-1 flex items-center"
                                                                            target={
                                                                                ext
                                                                                    ? "_blank"
                                                                                    : undefined
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    menu.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="col-span-12 lg:col-span-4 lg:pl-6 flex flex-col justify-between">
                                        <div>
                                            <div className="relative group mb-6 w-[400px] max-w-full h-[250px] rounded-[4px] overflow-hidden">
                                                <Image
                                                    src="/modules/header/admissions/campus.png"
                                                    alt="Admissions Campus"
                                                    width={400}
                                                    height={250}
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                                />
                                            </div>

                                            {/* Location & Contact Info */}
                                            <div className="space-y-2 text-white/80 font-poppins font-light text-[14px] leading-relaxed mb-6">
                                                <p className="tracking-wide">
                                                    Sohna Road, Gurugram,
                                                    Haryana - 122103
                                                </p>
                                                <p className="tracking-wide">
                                                    <a
                                                        href="mailto:Helpwelcome@krmangalam.edu.in"
                                                        className="hover:text-white transition-colors"
                                                    >
                                                        Helpwelcome@krmangalam.edu.in
                                                    </a>
                                                </p>
                                                <p className="tracking-wide">
                                                    01148884888, 8800697010 -
                                                    15, 8192888444
                                                </p>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex items-center gap-3">
                                            <CommonLeadPopup
                                                buttonClassName="border w-fit border-[#3C7ED4]/50 hover:border-[#3C7ED4] bg-[#071624]/60 hover:bg-[#0c1e30] text-white font-poppins font-normal py-3 px-4 rounded-[2px] text-[13px] flex items-center justify-center gap-1.5 transition-all tracking-wide text-center uppercase cursor-pointer whitespace-nowrap"
                                                buttonText="DOWNLOAD PROSPECTUS"
                                                redirectUrl="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_Prospectus_2025_26_05_Updated_4_1_4f9d19673e.pdf"
                                                form_name="Download Prospectus"
                                            />
                                            <Link
                                                href={
                                                    applyNowButton?.url ||
                                                    "/apply"
                                                }
                                                className="group w-fit bg-[#cb000d] hover:bg-[#cb000d]/90 text-white font-poppins font-normal py-3 px-5 rounded-[2px] text-[13px] flex items-center justify-center gap-1.5 transition-all tracking-wide text-center whitespace-nowrap"
                                            >
                                                <span>APPLY NOW</span>
                                                <ArrowUpRight
                                                    size={16}
                                                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}

                    {/* Zenith */}
                    {zenithLinks &&
                        zenithLinks.__component === "menu.menu-links" && (
                            <li onMouseEnter={() => handleMenuEnter("")}>
                                <Link
                                    className={`font-poppins font-semibold tracking-wide text-[#ff0010] hover:text-[#ff0010]/85 transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] ${
                                        zenithLinks?.menuclass || ""
                                    }`}
                                    href={zenithLinks.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{zenithLinks.title}</span>
                                </Link>
                            </li>
                        )}

                    {/* Placements */}
                    {placementMenu && (
                        <li
                            className={`krm-sub-menu-has-children ${activeMenu === "placements" ? "is-active" : ""}`}
                            onMouseEnter={() => handleMenuEnter("placements")}
                            onMouseLeave={handleMenuLeave}
                        >
                            <div
                                className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer ${activeMenu === "placements" ? "text-white" : ""}`}
                            >
                                <span>{placementMenu?.title}</span>
                                <ChevronDown
                                    className={`w-4 h-4 opacity-70 transition-transform duration-300 ${activeMenu === "placements" ? "rotate-180 opacity-100" : ""}`}
                                />
                            </div>
                            <div
                                className="absolute left-0 right-0 mx-auto w-full max-w-[1440px] top-full bg-[#04101A] pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden krmsubmenu-container z-50 shadow-2xl"
                                onMouseEnter={() =>
                                    handleMenuEnter("placements")
                                }
                                onMouseLeave={handleMenuLeave}
                            >
                                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 relative z-10 flex flex-col w-full">
                                    <div className="grid grid-cols-12 w-full gap-8">
                                        {/* Left Column: Links */}
                                        <div className="col-span-4 flex flex-col justify-between">
                                            <div>
                                                <div className="text-2xl font-normal font-poppins text-white mb-6">
                                                    {
                                                        placementMenu?.placement
                                                            ?.heading
                                                    }
                                                </div>
                                                <ul className="flex flex-col gap-3">
                                                    {placementMenu?.placement?.menulinks
                                                        ?.filter(
                                                            (menu) =>
                                                                !menu.title
                                                                    .toLowerCase()
                                                                    .includes(
                                                                        "portal"
                                                                    )
                                                        )
                                                        .map((menu) => (
                                                            <li key={menu.id}>
                                                                <Link
                                                                    href={
                                                                        formatInternalLink(
                                                                            menu.url
                                                                        ) || "#"
                                                                    }
                                                                    className="relative text-white/80 hover:text-white transition-all duration-300 text-[15px] font-light flex items-center group font-poppins"
                                                                >
                                                                    {menu.title}
                                                                </Link>
                                                            </li>
                                                        ))}

                                                    {placementMenu?.placement?.menulinks
                                                        ?.filter((menu) =>
                                                            menu.title
                                                                .toLowerCase()
                                                                .includes(
                                                                    "portal"
                                                                )
                                                        )
                                                        .map((menu) => (
                                                            <li key={menu.id}>
                                                                <Link
                                                                    href={
                                                                        formatInternalLink(
                                                                            menu.url
                                                                        ) || "#"
                                                                    }
                                                                    target={
                                                                        isExternalUrl(
                                                                            menu.url
                                                                        )
                                                                            ? "_blank"
                                                                            : undefined
                                                                    }
                                                                    rel={
                                                                        isExternalUrl(
                                                                            menu.url
                                                                        )
                                                                            ? "noopener noreferrer"
                                                                            : undefined
                                                                    }
                                                                    className="font-poppins text-[#008CFF] hover:text-[#008CFF]/80 transition-all duration-200 text-[15px] font-normal tracking-wide block mt-2"
                                                                >
                                                                    {menu.title}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap items-center gap-3 mt-6">
                                                <CommonLeadPopup
                                                    buttonClassName="w-fit border border-[#fff]/80 hover:border-white text-white font-poppins font-normal text-[12px] md:text-[13px] leading-none tracking-wide whitespace-nowrap rounded-[2px] px-3 lg:px-4 h-[42px] flex items-center justify-center uppercase transition-all duration-300 ease-in-out cursor-pointer"
                                                    buttonText="DOWNLOAD PROSPECTUS"
                                                    redirectUrl="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_Prospectus_2025_26_05_Updated_4_1_4f9d19673e.pdf"
                                                    form_name="Download Prospectus"
                                                />
                                                <Button
                                                    variant="primary"
                                                    href={
                                                        applyNowButton?.url ||
                                                        "/apply"
                                                    }
                                                    icon={ArrowUpRight}
                                                    iconPosition="right"
                                                    className="!w-fit text-[12px] md:!text-[13px] !rounded-[2px] !h-[42px] font-poppins whitespace-nowrap !px-3 lg:!px-4"
                                                >
                                                    APPLY NOW
                                                </Button>
                                            </div>
                                        </div>

                                        <div className="col-span-4 px-6 flex justify-center">
                                            <div className="bg-[#091926] rounded-[4px] p-8 w-full max-w-[380px] h-[379px] flex items-center justify-center">
                                                <div className="w-full flex flex-col items-center justify-center gap-8">
                                                    {placementMenu?.placementcounter.map(
                                                        (counter, idx) => (
                                                            <React.Fragment
                                                                key={counter.id}
                                                            >
                                                                {/* Counter Content */}
                                                                <div className="text-center group">
                                                                    <p className="text-3xl font-normal text-white mb-1 transition-transform duration-500 group-hover:scale-110 font-poppins">
                                                                        {
                                                                            counter.countertext
                                                                        }
                                                                    </p>

                                                                    <p className="text-white/60 text-sm tracking-wide font-normal font-poppins">
                                                                        {
                                                                            counter.countercontent
                                                                        }
                                                                    </p>
                                                                </div>

                                                                {idx !==
                                                                    placementMenu
                                                                        .placementcounter
                                                                        .length -
                                                                        1 && (
                                                                    <div className="w-full flex items-center justify-center">
                                                                        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                                                    </div>
                                                                )}
                                                            </React.Fragment>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column: Carousel */}
                                        <div className="col-span-4 pl-2 lg:pl-4 flex flex-col justify-center -mt-8 xl:-mt-10">
                                            <div className="relative group w-full max-w-[420px] h-[410px] mx-auto">
                                                {/* White Ambient Shade behind Student Card */}
                                                <div className="absolute -inset-8 sm:-inset-10 translate-y-6 z-0 pointer-events-none flex items-center justify-center">
                                                    <Image
                                                        src="/images/home/placements/shade.webp"
                                                        alt=""
                                                        fill
                                                        className="w-full h-full object-contain scale-125"
                                                        priority
                                                    />
                                                </div>

                                                <div className="relative z-10 w-full h-[410px] rounded-[2px] overflow-hidden">
                                                    <Carousel
                                                        className="h-full w-full"
                                                        options={{ loop: true }}
                                                        fade={true}
                                                        autoplay={true}
                                                        autoplayDelay={3500}
                                                        showArrows={false}
                                                        showDots={false}
                                                        containerClassName="h-[410px] w-full"
                                                        slideClassName="relative h-[410px] w-full"
                                                    >
                                                        {SUCCESS_STORIES.map(
                                                            (story, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className="relative w-full h-[410px] transition-opacity duration-700 flex items-center justify-center"
                                                                >
                                                                    <Image
                                                                        src={
                                                                            story.image
                                                                        }
                                                                        alt={`Placement Success ${idx + 1}`}
                                                                        fill
                                                                        sizes="420px"
                                                                        className="w-full h-full object-contain scale-110"
                                                                        priority={
                                                                            idx ===
                                                                            0
                                                                        }
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </Carousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <PlacementRecruiters />
                                </div>
                            </div>
                        </li>
                    )}

                    {/* Research */}
                    {researchMenu && (
                        <li
                            className={`krm-sub-menu-has-children ${activeMenu === "research" ? "is-active" : ""}`}
                            onMouseEnter={() => handleMenuEnter("research")}
                            onMouseLeave={handleMenuLeave}
                        >
                            <div
                                className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer ${activeMenu === "research" ? "text-white" : ""}`}
                            >
                                <span>{researchMenu?.title}</span>
                                <ChevronDown
                                    className={`w-4 h-4 opacity-70 transition-transform duration-300 ${activeMenu === "research" ? "rotate-180 opacity-100" : ""}`}
                                />
                            </div>
                            <div
                                className="absolute left-0 right-0 mx-auto w-full max-w-[1440px] top-full bg-[#04101A] pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden krmsubmenu-container z-50 shadow-2xl"
                                onMouseEnter={() => handleMenuEnter("research")}
                                onMouseLeave={handleMenuLeave}
                            >
                                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                                    {/* Left Column: Links */}
                                    <div className="w-full lg:w-[25%] lg:min-w-fit flex flex-col justify-between">
                                        <div>
                                            <div className="text-2xl font-normal font-poppins text-white mb-6">
                                                {
                                                    researchMenu?.research
                                                        ?.heading
                                                }
                                            </div>
                                            <ul className="flex flex-col gap-1">
                                                {researchMenu?.research?.menulinks
                                                    ?.filter(
                                                        (menu) =>
                                                            !menu.title
                                                                .toLowerCase()
                                                                .includes(
                                                                    "call"
                                                                ) &&
                                                            !menu.title
                                                                .toLowerCase()
                                                                .includes(
                                                                    "admission"
                                                                )
                                                    )
                                                    .map((menu) => (
                                                        <li key={menu.id}>
                                                            <Link
                                                                href={
                                                                    formatInternalLink(
                                                                        menu.url
                                                                    ) || "#"
                                                                }
                                                                className="font-poppins text-white/80 hover:text-white transition-all duration-200 text-[15px] font-light tracking-wide block py-1"
                                                            >
                                                                {menu.title}
                                                            </Link>
                                                        </li>
                                                    ))}

                                                {researchMenu?.research?.menulinks
                                                    ?.filter(
                                                        (menu) =>
                                                            menu.title
                                                                .toLowerCase()
                                                                .includes(
                                                                    "call"
                                                                ) ||
                                                            menu.title
                                                                .toLowerCase()
                                                                .includes(
                                                                    "admission"
                                                                )
                                                    )
                                                    .map((menu) => (
                                                        <li key={menu.id}>
                                                            <Link
                                                                href={
                                                                    formatInternalLink(
                                                                        menu.url
                                                                    ) || "#"
                                                                }
                                                                className="font-poppins text-[#008CFF] hover:text-[#008CFF]/80  transition-all duration-200 text-[15px] font-normal tracking-wide block mt-4"
                                                            >
                                                                {menu.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3 mt-6">
                                            <CommonLeadPopup
                                                buttonClassName="group w-fit border border-white/90 hover:border-white bg-transparent hover:bg-white/5 text-white/90 hover:text-white font-poppins font-normal py-3 px-4 rounded-[2px] text-[12px] md:text-[13px] flex items-center justify-center gap-1.5 transition-all tracking-wide text-center uppercase cursor-pointer whitespace-nowrap"
                                                buttonText={
                                                    <div className="flex items-center justify-center gap-1.5">
                                                        <span>
                                                            DOWNLOAD PROSPECTUS
                                                        </span>
                                                        <Download
                                                            size={15}
                                                            className="transition-transform duration-300 ease-in-out group-hover:translate-y-0.5"
                                                        />
                                                    </div>
                                                }
                                                redirectUrl="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_Prospectus_2025_26_05_Updated_4_1_4f9d19673e.pdf"
                                                form_name="Download Prospectus"
                                            />
                                            <Link
                                                href={
                                                    applyNowButton?.url ||
                                                    "/apply"
                                                }
                                                className="group w-fit bg-[#cb000d] hover:bg-[#cb000d]/90 text-white font-poppins font-normal py-3 px-4 rounded-[2px] text-[12px] md:text-[13px] flex items-center justify-center gap-1.5 transition-all tracking-wide text-center shadow-lg uppercase whitespace-nowrap"
                                            >
                                                <span>APPLY NOW</span>
                                                <ArrowUpRight
                                                    size={16}
                                                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Center Column: Stats */}
                                    <div className="w-full lg:w-[25%]">
                                        <div className="bg-[#091926] rounded-[2px] p-4 flex flex-col justify-center gap-3 h-full">
                                            {researchMenu?.researchcounter?.map(
                                                (counter, idx) => (
                                                    <React.Fragment
                                                        key={counter.id}
                                                    >
                                                        {idx > 0 && (
                                                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                                        )}
                                                        <div className="text-center">
                                                            <p className="text-[34px] font-poppins font-normal text-white mb-1">
                                                                {
                                                                    counter.countertext
                                                                }
                                                            </p>
                                                            <p className="text-white/80 text-[14px] leading-relaxed font-poppins font-light px-4">
                                                                {
                                                                    counter.countercontent
                                                                }
                                                            </p>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Image */}
                                    <div className="w-full lg:w-[40%] h-full">
                                        <div className="relative group rounded-[2px] overflow-hidden w-full h-full min-h-[360px]">
                                            <Image
                                                src="/modules/header/research/research-lab.png"
                                                alt="Research Highlight"
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 450px"
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}

                    {/* Sustainability */}
                    {sustainabilityLinks &&
                        sustainabilityLinks.__component ===
                            "menu.menu-links" && (
                            <li onMouseEnter={() => handleMenuEnter("")}>
                                <Link
                                    className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] ${
                                        sustainabilityLinks?.menuclass || ""
                                    }`}
                                    href={sustainabilityLinks.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>{sustainabilityLinks.title}</span>
                                </Link>
                            </li>
                        )}

                    {/* Life at KRMU */}
                    {lifeatkrmuMenu && (
                        <li
                            className={`krm-sub-menu-has-children ${activeMenu === "lifeatkrmu" ? "is-active" : ""}`}
                            onMouseEnter={() => handleMenuEnter("lifeatkrmu")}
                            onMouseLeave={handleMenuLeave}
                        >
                            <div
                                className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px]  min-h-[64px] cursor-pointer ${activeMenu === "lifeatkrmu" ? "text-white" : ""}`}
                            >
                                <span>{lifeatkrmuMenu?.title}</span>
                                <ChevronDown
                                    className={`w-4 h-4 opacity-70 transition-transform duration-300 ${activeMenu === "lifeatkrmu" ? "rotate-180 opacity-100" : ""}`}
                                />
                            </div>
                            <div
                                className="absolute left-0 right-0 mx-auto w-full max-w-[1440px] top-full bg-[#04101A] pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden krmsubmenu-container z-50 shadow-2xl"
                                onMouseEnter={() =>
                                    handleMenuEnter("lifeatkrmu")
                                }
                                onMouseLeave={handleMenuLeave}
                            >
                                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-8 lg:gap-12">
                                    {/* Left Column: Link Lists */}
                                    <div className="col-span-6 flex flex-col gap-6">
                                        <div className="text-2xl font-normal font-poppins text-white leading-tight">
                                            {lifeatkrmuMenu?.title}
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            {/* Section 1 */}
                                            {lifeatkrmuMenu?.lifeatkrmu1 && (
                                                <div>
                                                    <ul className="flex flex-col gap-1">
                                                        {lifeatkrmuMenu?.lifeatkrmu1?.menulinks?.map(
                                                            (menu) => {
                                                                const href =
                                                                    formatInternalLink(
                                                                        menu.url
                                                                    ) || "#";
                                                                const ext =
                                                                    isExternalUrl(
                                                                        menu.url
                                                                    );
                                                                return (
                                                                    <li
                                                                        key={
                                                                            menu.id
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                href
                                                                            }
                                                                            className="font-poppins font-light text-white/70 hover:text-white transition-colors duration-200 text-[15px] py-1 flex items-center"
                                                                            target={
                                                                                ext
                                                                                    ? "_blank"
                                                                                    : undefined
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    menu.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Section 2 */}
                                            {lifeatkrmuMenu?.lfeatkrmu2 && (
                                                <div>
                                                    <ul className="flex flex-col gap-1">
                                                        {lifeatkrmuMenu?.lfeatkrmu2?.menulinks?.map(
                                                            (menu) => {
                                                                const href =
                                                                    formatInternalLink(
                                                                        menu.url
                                                                    ) || "#";
                                                                const ext =
                                                                    isExternalUrl(
                                                                        menu.url
                                                                    );
                                                                return (
                                                                    <li
                                                                        key={
                                                                            menu.id
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                href
                                                                            }
                                                                            className="font-poppins font-light text-white/70 hover:text-white transition-colors duration-200 text-[15px] py-1 flex items-center"
                                                                            target={
                                                                                ext
                                                                                    ? "_blank"
                                                                                    : undefined
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    menu.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Featured Image */}
                                    <div className="col-span-6 pl-4 flex flex-col justify-center h-full">
                                        <div className="relative rounded-[2px] overflow-hidden w-full aspect-[16/10]">
                                            <Image
                                                src="/modules/header/campus/campus.png"
                                                alt="Campus Life"
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover scale-[1.01] hover:scale-[1.04] transition-transform duration-1000"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}

                    {/* About Us */}
                    {aboutusMenu && (
                        <li
                            className={`krm-sub-menu-has-children ${activeMenu === "aboutus" ? "is-active" : ""}`}
                            onMouseEnter={() => handleMenuEnter("aboutus")}
                            onMouseLeave={handleMenuLeave}
                        >
                            <div
                                className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer ${activeMenu === "aboutus" ? "text-white" : ""}`}
                            >
                                <span>{aboutusMenu?.title}</span>
                                <ChevronDown
                                    className={`w-4 h-4 opacity-70 transition-transform duration-300 ${activeMenu === "aboutus" ? "rotate-180 opacity-100" : ""}`}
                                />
                            </div>
                            <div
                                className="absolute left-0 right-0 mx-auto w-full max-w-[1440px] top-full bg-[#04101A] pt-8 pb-10 md:pt-10 md:pb-12 overflow-hidden krmsubmenu-container z-50 shadow-2xl"
                                onMouseEnter={() => handleMenuEnter("aboutus")}
                                onMouseLeave={handleMenuLeave}
                            >
                                <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-8 lg:gap-12">
                                    {/* Left Column: Single column stack (Image -> Text -> Buttons -> Stats) */}
                                    <div className="col-span-4 flex flex-col gap-4">
                                        <div className="text-[28px] font-normal font-poppins text-white leading-tight">
                                            {aboutusMenu?.title}
                                        </div>

                                        {/* Image */}
                                        <div className="relative w-full rounded-[2px] overflow-hidden group aspect-video">
                                            <Image
                                                src="/images/header/menu/about-us/about-menu.jpg"
                                                alt="About KRMU"
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 400px"
                                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                                priority
                                            />

                                            {/* Top Right Counter Overlay */}
                                            <div className="absolute top-3 right-3 z-10 bg-[#062035] rounded-[3px] px-3 py-1.5 flex items-center justify-center gap-1.5 text-center shadow-lg">
                                                <span className="text-[15px] font-medium text-white font-poppins leading-none">
                                                    {aboutusMenu
                                                        ?.aboutuscounter?.[0]
                                                        ?.countertext || "13+"}
                                                </span>
                                                <span className="text-[13px] font-medium text-white font-poppins leading-none">
                                                    {aboutusMenu
                                                        ?.aboutuscounter?.[0]
                                                        ?.countercontent ||
                                                        "Schools"}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Paragraph */}
                                        <p className="text-white text-[13.5px] font-light font-poppins text-left">
                                            Welcome to a world where education
                                            meets excitement! At K.R. Mangalam
                                            University (KRMU), we believe that
                                            university life should be a perfect
                                            blend of learning, growth, and fun.
                                            Our campus is not just a place to
                                            study.
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap items-center gap-3 mt-auto">
                                            <CommonLeadPopup
                                                buttonClassName="w-fit border border-white/90 hover:border-white text-white text-[13px] md:text-[13.5px] h-[42px] font-poppins font-medium whitespace-nowrap rounded-[2px] px-4 flex items-center justify-center uppercase transition-all cursor-pointer"
                                                buttonText="DOWNLOAD PROSPECTUS"
                                                redirectUrl="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_Prospectus_2025_26_05_Updated_4_1_4f9d19673e.pdf"
                                                form_name="Download Prospectus"
                                            />
                                            <CommonLeadPopup
                                                buttonClassName="w-fit bg-[#CB000D] hover:bg-[#a3000a] text-white text-[13px] md:text-[13.5px] h-[42px] font-poppins font-medium whitespace-nowrap rounded-[2px] px-4 flex items-center justify-center uppercase transition-all cursor-pointer gap-1.5"
                                                buttonText={
                                                    <>
                                                        <span>APPLY NOW</span>
                                                        <ArrowUpRight className="w-4 h-4" />
                                                    </>
                                                }
                                                redirectUrl={
                                                    applyNowButton?.url ||
                                                    "https://admissions.krmangalam.edu.in"
                                                }
                                                form_name="Apply Now"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Column: Links (Overview, Administration, Discover More, Others) */}
                                    <div className="col-span-8 border-l border-white/10 pl-6 lg:pl-10 flex flex-col">
                                        <div className="grid grid-cols-4 gap-4 lg:gap-6 mt-2">
                                            {/* Overview */}
                                            <div>
                                                <div className="text-sm bg-[#12202B] px-4 py-3 font-poppins font-semibold text-white mb-6 rounded-[3px]">
                                                    {aboutusMenu?.overview
                                                        ?.heading || "Overview"}
                                                </div>
                                                <ul className="flex flex-col gap-2.5">
                                                    {rawOverviewLinks.map(
                                                        (menu: any) => (
                                                            <li key={menu.id}>
                                                                <Link
                                                                    href={
                                                                        menu.url ||
                                                                        "#"
                                                                    }
                                                                    className="text-white/80 hover:text-white transition-colors text-[15px] font-light font-poppins"
                                                                    target={
                                                                        menu.url?.startsWith(
                                                                            "http"
                                                                        )
                                                                            ? "_blank"
                                                                            : undefined
                                                                    }
                                                                    rel={
                                                                        menu.url?.startsWith(
                                                                            "http"
                                                                        )
                                                                            ? "noopener noreferrer"
                                                                            : undefined
                                                                    }
                                                                >
                                                                    {menu.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>

                                            {/* Administration */}
                                            <div>
                                                <div className="text-sm bg-[#12202B] px-4 py-3 font-poppins font-semibold text-white mb-6 rounded-[3px]">
                                                    {aboutusMenu?.administration
                                                        ?.heading ||
                                                        "Administration"}
                                                </div>
                                                <ul className="flex flex-col gap-2.5">
                                                    {aboutusMenu?.administration?.menulinks?.map(
                                                        (menu: any) => (
                                                            <li key={menu.id}>
                                                                <Link
                                                                    href={
                                                                        menu.url ||
                                                                        "#"
                                                                    }
                                                                    className="text-white/80 hover:text-white transition-colors text-[15px] font-light font-poppins"
                                                                    target={
                                                                        menu.url?.startsWith(
                                                                            "http"
                                                                        )
                                                                            ? "_blank"
                                                                            : undefined
                                                                    }
                                                                    rel={
                                                                        menu.url?.startsWith(
                                                                            "http"
                                                                        )
                                                                            ? "noopener noreferrer"
                                                                            : undefined
                                                                    }
                                                                >
                                                                    {menu.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>

                                            {/* Discover More */}
                                            {academicMenu?.discovermenu && (
                                                <div>
                                                    <div className="text-sm bg-[#12202B] px-4 py-3 font-poppins font-semibold text-white mb-6 rounded-[3px]">
                                                        {
                                                            academicMenu
                                                                .discovermenu
                                                                .heading
                                                        }
                                                    </div>
                                                    <ul className="flex flex-col gap-2.5">
                                                        {academicMenu.discovermenu.menulinks?.map(
                                                            (menu: any) => (
                                                                <li
                                                                    key={
                                                                        menu.id
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            menu.url ||
                                                                            "#"
                                                                        }
                                                                        className="text-white/80 hover:text-white transition-colors text-[15px] font-light font-poppins"
                                                                        target={
                                                                            menu.url?.startsWith(
                                                                                "http"
                                                                            )
                                                                                ? "_blank"
                                                                                : undefined
                                                                        }
                                                                        rel={
                                                                            menu.url?.startsWith(
                                                                                "http"
                                                                            )
                                                                                ? "noopener noreferrer"
                                                                                : undefined
                                                                        }
                                                                    >
                                                                        {
                                                                            menu.title
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Others */}
                                            <div>
                                                <div className="text-sm bg-[#12202B] px-4 py-3 font-poppins font-semibold text-white mb-6 rounded-[3px]">
                                                    Others
                                                </div>
                                                <ul className="flex flex-col gap-2.5">
                                                    {aboutUsOthersLinks.map(
                                                        (menu) => (
                                                            <li key={menu.id}>
                                                                <Link
                                                                    href={
                                                                        menu.url
                                                                    }
                                                                    className="text-white/80 hover:text-white transition-colors text-[15px] font-light font-poppins"
                                                                    target={
                                                                        menu.url.startsWith(
                                                                            "http"
                                                                        )
                                                                            ? "_blank"
                                                                            : undefined
                                                                    }
                                                                    rel={
                                                                        menu.url.startsWith(
                                                                            "http"
                                                                        )
                                                                            ? "noopener noreferrer"
                                                                            : undefined
                                                                    }
                                                                >
                                                                    {menu.title}
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}

                    {/* Careers */}
                    {careersLinks &&
                        careersLinks.__component === "menu.menu-links" && (
                            <li onMouseEnter={() => handleMenuEnter("")}>
                                <Link
                                    className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[13px] 2xl:text-[15px] min-h-[64px] ${
                                        careersLinks?.menuclass || ""
                                    }`}
                                    href={careersLinks.url}
                                >
                                    <span>{careersLinks.title}</span>
                                </Link>
                            </li>
                        )}

                    {/* Apply Now Button */}
                    {applyNowButton &&
                        applyNowButton.__component === "menu.menu-button" && (
                            <li>
                                <Link
                                    href={applyNowButton?.url || "#"}
                                    className={`bg-[#cb000d] hover:bg-[#cb000d]/80 text-white font-medium py-2 px-5 xl:py-2 xl:px-4 rounded-xs text-xs xl:text-[14px]  tracking-wide xl:tracking-normal  flex items-center gap-1.5 transition-all capitalize shadow-lg relative overflow-hidden group font-poppins ${
                                        applyNowButton?.class || ""
                                    }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                                    {applyNowButton?.title}{" "}
                                    <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </li>
                        )}
                </ul>
            </div>
        </>
    );
};

export default NavbarMenu;
