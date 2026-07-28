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

type Props = {
  mainMenu: HeaderMenus[];
};

const NavbarMenu = ({ mainMenu }: Props) => {
  const [isNavHidden, setIsNavHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsNavHidden(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) {
      setIsNavHidden(true);
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
  };

  const handleMouseLeave = () => {
    setIsNavHidden(false);
  };

  const academicMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.academic-menu",
  );

  const programmesLinks = mainMenu.find(
    (component) => component.title === "Programmes",
  );
  const careersLinks = mainMenu.find(
    (component) => component.title === "Careers",
  );
  const zenithLinks = mainMenu.find(
    (component) => component.title === "Zenith",
  );
  const sustainabilityLinks = mainMenu.find(
    (component) => component.title === "Sustainability",
  );

  const applyNowButton = mainMenu.find(
    (component) => component.__component === "menu.menu-button",
  );

  const admissionMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.admissions",
  );

  const placementMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.placement-menu",
  );
  const researchMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.research-menu",
  );

  const lifeatkrmuMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.life-at-krmu",
  );

  const aboutusMenu = mainMenu.find(
    (component) => component.__component === "temp-menus.about-us-menu",
  );

  // Prepare Overview links ensuring "Research And Innovation" is present
  const rawOverviewLinks = aboutusMenu?.overview?.menulinks
    ? [...aboutusMenu.overview.menulinks]
    : [
        { id: 1, title: "About KRMU", url: "/about-us" },
        { id: 2, title: "Leadership", url: "/leadership" },
        {
          id: 3,
          title: "Awards and Achievements",
          url: "/awards-and-achievements",
        },
        { id: 4, title: "Research And Innovation", url: "/research-overview" },
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
    link.title?.toLowerCase().includes("research"),
  );
  if (!hasResearch) {
    const awardsIndex = rawOverviewLinks.findIndex((link: any) =>
      link.title?.toLowerCase().includes("awards"),
    );
    const researchItem = {
      id: "research-and-innovation",
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
    { id: "oth-1", title: "Alumni", url: "https://alumni.krmangalam.edu.in/" },
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
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer">
                <span>{academicMenu?.title}</span>
                <ChevronDown className="w-4 h-4 opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#04101A] border-b border-white/10 pt-[52px] pb-10 md:pt-[60px] md:pb-12 overflow-hidden mt-[-12px] krmsubmenu-container z-50">
                {/* Decorative background circles */}
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left: Program Level */}
                  <div className="col-span-12 lg:col-span-7">
                    <h2 className="text-2xl font-normal font-poppins text-white mb-6">
                      Program Level
                    </h2>

                    <div className="grid grid-cols-2 gap-5">
                      {/* Undergraduate */}
                      <Link
                        href="/programmes?degree=undergraduate-programmes"
                        className="group relative aspect-[16/9.5] w-full overflow-hidden rounded-[3px] border border-white/10 shadow-lg block bg-[#0b1622]"
                      >
                        <Image
                          src="/modules/header/academics/undergraduate.jpg"
                          alt="Undergraduate Programmes"
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover transition-all duration-700 ease-in-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-x-3 bottom-3 py-2.5 bg-[#0a1520]/90 backdrop-blur-md border border-white/10 rounded-[3px] text-center transition-all duration-500 ease-in-out group-hover:border-[#3C7ED4]/50 group-hover:bg-[#071624]">
                          <span className="text-sm font-light text-white font-poppins">
                            Undergraduate Programmes
                          </span>
                        </div>
                      </Link>

                      {/* Postgraduate */}
                      <Link
                        href="/programmes?degree=postgraduate-programmes"
                        className="group relative aspect-[16/9.5] w-full overflow-hidden rounded-[3px] border border-white/10 shadow-lg block bg-[#0b1622]"
                      >
                        <Image
                          src="/modules/header/academics/postgraduate.png"
                          alt="Postgraduate Programmes"
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover transition-all duration-700 ease-in-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-x-3 bottom-3 py-2.5 bg-[#0a1520]/90 backdrop-blur-md border border-white/10 rounded-[3px] text-center transition-all duration-500 ease-in-out group-hover:border-[#3C7ED4]/50 group-hover:bg-[#071624]">
                          <span className="text-sm font-light text-white font-poppins">
                            Postgraduate Programmes
                          </span>
                        </div>
                      </Link>

                      {/* Doctoral */}
                      <Link
                        href="/programmes?degree=doctoral-programmes"
                        className="group relative aspect-[16/9.5] w-full overflow-hidden rounded-[3px] border border-white/10 shadow-lg block bg-[#0b1622]"
                      >
                        <Image
                          src="/modules/header/academics/doctoral.jpg"
                          alt="Doctoral Programmes"
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover transition-all duration-700 ease-in-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-x-3 bottom-3 py-2.5 bg-[#0a1520]/90 backdrop-blur-md border border-white/10 rounded-[3px] text-center transition-all duration-500 ease-in-out group-hover:border-[#3C7ED4]/50 group-hover:bg-[#071624]">
                          <span className="text-sm font-light text-white font-poppins">
                            Doctoral Programmes
                          </span>
                        </div>
                      </Link>

                      {/* Diploma */}
                      <Link
                        href="/programmes?degree=diploma-programmes"
                        className="group relative aspect-[16/9.5] w-full overflow-hidden rounded-[3px] border border-white/10 shadow-lg block bg-[#0b1622]"
                      >
                        <Image
                          src="/modules/header/academics/diploma.jpg"
                          alt="Diploma Programmes"
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover transition-all duration-700 ease-in-out group-hover:scale-103 opacity-90 group-hover:opacity-100"
                        />
                        <div className="absolute inset-x-3 bottom-3 py-2.5 bg-[#0a1520]/90 backdrop-blur-md border border-white/10 rounded-[3px] text-center transition-all duration-500 ease-in-out group-hover:border-[#3C7ED4]/50 group-hover:bg-[#071624]">
                          <span className="text-sm font-light text-white font-poppins">
                            Diploma Programmes
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* Academics Counters */}
                    <div className="grid grid-cols-2 gap-5 mt-6">
                      {academicMenu?.acadcounter &&
                      academicMenu.acadcounter.length > 0 ? (
                        academicMenu.acadcounter.map((counter) => (
                          <div
                            key={counter.id}
                            className="relative overflow-hidden group flex items-center justify-center h-[72px] border border-[#3C7ED4] bg-[#071624] rounded-[3px] text-center transition-all duration-300 hover:bg-[#0c1e30] hover:border-[#3C7ED4]/80"
                          >
                            <p className="text-lg font-light font-poppins text-white tracking-wide">
                              {counter.countertext} {counter.countercontent}
                            </p>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="relative overflow-hidden group flex items-center justify-center h-[72px] border border-[#3C7ED4] bg-[#071624] rounded-[3px] text-center transition-all duration-300 hover:bg-[#0c1e30] hover:border-[#3C7ED4]/80">
                            <p className="text-lg font-light font-poppins text-white tracking-wide">
                              11 Schools
                            </p>
                          </div>
                          <div className="relative overflow-hidden group flex items-center justify-center h-[72px] border border-[#3C7ED4]/30 bg-[#071624] rounded-[3px] text-center transition-all duration-300 hover:bg-[#0c1e30] hover:border-[#3C7ED4]/80">
                            <p className="text-lg font-light font-poppins text-white tracking-wide">
                              700+ Faculties
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Right: Schools */}
                  <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl font-normal font-poppins text-white mb-6">
                        Schools
                      </h2>

                      <ul className="flex flex-col gap-3 overflow-hidden">
                        {academicMenu?.academicmenu?.menulinks.map((school) => {
                          const isZenith = school.title
                            .toLowerCase()
                            .includes("zenith");
                          return (
                            <li key={school.id}>
                              <Link
                                href={school.url || "#"}
                                className={`font-poppins relative transition-all duration-300 text-[15px] font-light flex items-center group ${
                                  isZenith
                                    ? "text-[#3b82f6] hover:text-[#3b82f6]/80 font-normal"
                                    : "text-white/60 hover:text-white"
                                }`}
                              >
                                <span
                                  className={`absolute -left-4 w-1.5 h-1.5 rounded-full scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100 ${
                                    isZenith ? "bg-[#3b82f6]" : "bg-[#cb000d]"
                                  }`}
                                />
                                <span>{school.title}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Handbook and Brochure Buttons */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <Link
                        href="https://www.krmangalam.edu.in/disclosure2018-2023/Organizational-Policies/Policy-of-Code-of-Conduct.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white/20 hover:border-white/40 bg-[#071624]/50 text-white font-poppins font-normal py-3 px-5 rounded-[3px] text-[14px] flex items-center justify-center gap-1.5 transition-all hover:bg-white/5 text-center tracking-wide"
                      >
                        University Student Handbook
                      </Link>
                      <Link
                        href="#"
                        className="border border-white/20 hover:border-white/40 bg-[#071624]/50 text-white font-poppins font-normal py-3 px-5 rounded-[3px] text-[14px] flex items-center justify-center gap-1.5 transition-all hover:bg-white/5 text-center tracking-wide"
                      >
                        Download Brochure
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}

          {/* Programmes */}
          {programmesLinks &&
            programmesLinks.__component === "menu.menu-links" && (
              <li>
                <Link
                  className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px]  min-h-[64px] ${
                    programmesLinks?.menuclass || ""
                  }`}
                  href={programmesLinks.url}
                >
                  <span>{programmesLinks.title}</span>
                </Link>
              </li>
            )}

          {/* Admissions */}
          {admissionMenu && (
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer">
                <span>{admissionMenu?.title}</span>
                <ChevronDown className="w-4 h-4 opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#04101A] border-b border-white/10 pt-[52px] pb-10 md:pt-[60px] md:pb-12 overflow-hidden mt-[-12px] krmsubmenu-container z-50">
                {/* Decorative background effects */}
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left Section: Link Columns */}
                  <div className="col-span-12 lg:col-span-8">
                    <h2 className="text-2xl font-normal font-poppins text-white mb-6">
                      {admissionMenu?.title}
                    </h2>
                    <div className="grid grid-cols-2 gap-8">
                      {/* Enrolment */}
                      {admissionMenu?.enrollnow && (
                        <div>
                          <h3 className="text-sm bg-[#12202B] px-4 py-3 font-poppins font-semibold text-white mb-6 rounded-[3px]">
                            {admissionMenu?.enrollnow?.heading}
                          </h3>
                          <ul className="flex flex-col gap-1">
                            {admissionMenu?.enrollnow?.menulinks.map((menu) => (
                              <li key={menu.id}>
                                <Link
                                  href={menu.url || "#"}
                                  className="font-poppins font-light text-white/70 hover:text-white transition-colors duration-200 text-[15px] py-1 flex items-center"
                                  target="_blank"
                                >
                                  <span>{menu.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Scholarships */}
                      {admissionMenu?.scholarships && (
                        <div>
                          <h3 className="text-sm bg-[#12202B] px-4 py-3 font-poppins font-semibold text-white mb-6 rounded-[3px]">
                            {admissionMenu?.scholarships?.heading}
                          </h3>
                          <ul className="flex flex-col gap-1">
                            {admissionMenu?.scholarships?.menulinks.map(
                              (menu) => (
                                <li key={menu.id}>
                                  <Link
                                    href={menu.url || "#"}
                                    className="font-poppins font-light text-white/70 hover:text-white transition-colors duration-200 text-[15px] py-1 flex items-center"
                                  >
                                    <span>{menu.title}</span>
                                  </Link>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-4 lg:pl-6 flex flex-col justify-between">
                    <div>
                      <div className="relative group mb-6 rounded-sm overflow-hidden border border-white/10 shadow-lg">
                        {/* <Image
                          src={`${STRAPI_URL}${admissionMenu?.backgroundimage?.url}`}
                          alt="Admissions Campus"
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-contain transition-transform duration-1000 group-hover:scale-105 opacity-90"
                        /> */}
                        <Image
                          src="/modules/header/admissions/campus.png"
                          alt="Admissions Campus"
                          width={3154}
                          height={2066}
                          className="w-full h-auto transition-transform duration-1000 group-hover:scale-105 opacity-90"
                        />
                      </div>

                      {/* Location & Contact Info */}
                      <div className="space-y-2 text-white/70 font-poppins font-light text-[14px] leading-relaxed mb-6">
                        <p className="tracking-wide">
                          Sohna Road, Gurugram, Haryana - 122103
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
                          01148884888, 8800697010 - 15, 8192888444
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        href="#"
                        className="border border-[#3C7ED4]/50 hover:border-[#3C7ED4] bg-[#071624]/60 hover:bg-[#0c1e30] text-white font-poppins font-normal py-3 px-4 rounded-[3px] text-[13px] flex items-center justify-center gap-1.5 transition-all  tracking-wide text-center"
                      >
                        DOWNLOAD BROCHURE
                      </Link>
                      <Link
                        href={applyNowButton?.url || "/apply"}
                        className="group bg-[#cb000d] hover:bg-[#cb000d]/90 text-white font-poppins font-normal py-3 px-5 rounded-[3px] text-[13px] flex items-center justify-center gap-1.5 transition-all tracking-wide text-center shadow-lg"
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
          {zenithLinks && zenithLinks.__component === "menu.menu-links" && (
            <li>
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
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer">
                <span>{placementMenu?.title}</span>
                <ChevronDown className="w-4 h-4 opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#04101A] border-b border-white/10 pt-[52px] pb-10 md:pt-[60px] md:pb-12 overflow-hidden mt-[-12px] krmsubmenu-container z-50">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 flex flex-col w-full">
                  <div className="grid grid-cols-12 w-full gap-8">
                    {/* Left Column: Links */}
                    <div className="col-span-4">
                      <h2 className="text-2xl font-normal font-poppins text-white mb-6">
                        {placementMenu?.placement?.heading}
                      </h2>
                      <ul className="flex flex-col gap-3">
                        {placementMenu?.placement?.menulinks.map((menu) => (
                          <li key={menu.id}>
                            <Link
                              href={menu.url || "#"}
                              className="relative text-white hover:text-white/80 transition-all duration-300 text-[15px] font-light flex items-center group font-poppins"
                            >
                              {menu.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-span-4 px-6 flex justify-center">
                      <div className="bg-[#091926]  rounded-[4px] p-8 w-full max-w-[380px] h-[371px] flex items-center justify-center">
                        <div className="w-full flex flex-col items-center justify-center gap-8">
                          {placementMenu?.placementcounter.map(
                            (counter, idx) => (
                              <React.Fragment key={counter.id}>
                                {/* Counter Content */}
                                <div className="text-center group">
                                  <p className="text-3xl font-normal text-white mb-1 transition-transform duration-500 group-hover:scale-110 font-poppins">
                                    {counter.countertext}
                                  </p>

                                  <p className="text-white/60 text-sm tracking-wide font-normal font-poppins">
                                    {counter.countercontent}
                                  </p>
                                </div>

                                {idx !==
                                  placementMenu.placementcounter.length - 1 && (
                                  <div className="w-full flex items-center justify-center">
                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                                  </div>
                                )}
                              </React.Fragment>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Image & Actions */}
                    <div className="col-span-4 pl-6 space-y-6 flex flex-col justify-between">
                      <div className="relative rounded-[4px] overflow-hidden group w-full max-w-[379px] h-[379px] mx-auto">
                        <Carousel
                          className="h-full w-full"
                          options={{ loop: true }}
                          autoplay={true}
                          showArrows={false}
                          showDots={false}
                          containerClassName="h-full w-full"
                          slideClassName="relative h-[379px] w-full"
                        >
                          {SUCCESS_STORIES.map((story, idx) => (
                            <div
                              key={idx}
                              className="relative w-full h-[379px]"
                            >
                              <Image
                                src={story.image}
                                alt={`Placement Success ${idx + 1}`}
                                fill
                                className="object-cover opacity-90"
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>

                      <div className="flex w-full max-w-[379px] mx-auto gap-3">
                        <Button
                          variant="outline"
                          href="#"
                          className="flex-[55%] !border-[#737373] text-[11px] md:text-[11px] !h-[46px] font-poppins whitespace-nowrap !rounded-[4px] !px-2 lg:!px-4"
                        >
                          DOWNLOAD BROCHURE
                        </Button>
                        <Button
                          variant="primary"
                          href={applyNowButton?.url || "/apply"}
                          icon={ArrowUpRight}
                          iconPosition="right"
                          className="flex-[45%] text-[11px] !rounded-[4px] md:text-[11px] !h-[46px] font-poppins whitespace-nowrap !px-2 lg:!px-4"
                        >
                          APPLY NOW
                        </Button>
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
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer">
                <span>{researchMenu?.title}</span>
                <ChevronDown className="w-4 h-4 opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#04101A] border-b border-white/10 pt-[52px] pb-10 md:pt-[60px] md:pb-12 overflow-hidden mt-[-12px] krmsubmenu-container z-50">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left Column: Links */}
                  <div className="col-span-12 lg:col-span-4">
                    <h2 className="text-2xl font-normal font-poppins text-white mb-6">
                      {researchMenu?.research?.heading}
                    </h2>
                    <ul className="flex flex-col gap-1">
                      {researchMenu?.research?.menulinks.map((menu) => {
                        const isHighlighted =
                          menu.title.toLowerCase().includes("call") ||
                          menu.title.toLowerCase().includes("admission");
                        return (
                          <li key={menu.id}>
                            <Link
                              href={menu.url || "#"}
                              className={
                                isHighlighted
                                  ? "font-poppins text-[#3C7ED4] hover:text-[#3C7ED4]/80 underline transition-all duration-200 text-[15px] font-normal tracking-wide block mt-6"
                                  : "font-poppins text-white/70 hover:text-white transition-all duration-200 text-[15px] font-light tracking-wide block py-1"
                              }
                            >
                              {menu.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Center Column: Stats */}
                  <div className="col-span-12 lg:col-span-4">
                    <div className="bg-[#0b1c28]/45 border border-white/5 rounded-sm p-4 flex flex-col justify-center gap-3 h-full shadow-xl">
                      {researchMenu?.researchcounter?.map((counter, idx) => (
                        <React.Fragment key={counter.id}>
                          {idx > 0 && (
                            <div className="h-px w-[80%] bg-white/10 mx-auto my-2" />
                          )}
                          <div className="text-center">
                            <p className="text-[34px] font-poppins font-normal text-white mb-1">
                              {counter.countertext}
                            </p>
                            <p className="text-white/70 text-[14px] leading-relaxed font-poppins font-light px-4">
                              {counter.countercontent}
                            </p>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image & Actions */}
                  <div className="col-span-12 lg:col-span-4 flex flex-col justify-between">
                    <div className="relative group mb-6 rounded-sm overflow-hidden border border-white/10 shadow-lg">
                      {/* <Image
                        src={researchMenu?.backgroundimage?.url ? `${STRAPI_URL}${researchMenu.backgroundimage.url}` : "/menu-4.webp"}
                        alt="Research Highlight"
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-contain transition-transform duration-1000 group-hover:scale-105 opacity-90"
                      /> */}
                      <Image
                        src="/modules/header/research/research-lab.png"
                        alt="Research Highlight"
                        width={3098}
                        height={2066}
                        className="w-full h-auto transition-transform duration-1000 group-hover:scale-105 opacity-90"
                      />
                    </div>

                    <div className="flex w-full gap-4 mt-6">
                      <Link
                        href="#"
                        className="group flex-[3] border border-white/20 hover:border-white/40 bg-transparent hover:bg-white/5 text-white font-poppins font-normal py-3 px-5 rounded-[3px] text-[13px] flex items-center justify-center gap-1.5 transition-all tracking-wide text-center uppercase"
                      >
                        <span>DOWNLOAD BROCHURE</span>
                        <Download
                          size={15}
                          className="transition-transform duration-300 ease-in-out group-hover:translate-y-0.5"
                        />
                      </Link>
                      <Link
                        href={applyNowButton?.url || "/apply"}
                        className="group flex-[2] bg-[#cb000d] hover:bg-[#cb000d]/90 text-white font-poppins font-normal py-3 px-5 rounded-[3px] text-[13px] flex items-center justify-center gap-1.5 transition-all tracking-wide text-center shadow-lg uppercase"
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

          {/* Sustainability */}
          {sustainabilityLinks &&
            sustainabilityLinks.__component === "menu.menu-links" && (
              <li>
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
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px]  min-h-[64px] cursor-pointer">
                <span>{lifeatkrmuMenu?.title}</span>
                <ChevronDown className="w-4 h-4 opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#04101A] border-b border-white/10 pt-[52px] pb-10 md:pt-[60px] md:pb-12 overflow-hidden mt-[-12px] krmsubmenu-container z-50">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left Column: Grid */}
                  <div className="col-span-7 flex flex-col gap-6">
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-normal font-poppins text-white leading-tight">
                        {lifeatkrmuMenu?.title}
                      </h2>
                      <p className="text-white/60 font-poppins text-sm font-light">
                        {lifeatkrmuMenu?.lfeatkrmu2?.heading ||
                          "Explore Facilities"}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-4">
                      {[
                        ...(lifeatkrmuMenu?.lifeatkrmu1?.menulinks || []),
                        ...(lifeatkrmuMenu?.lfeatkrmu2?.menulinks || []),
                      ].map((link) => (
                        <Link
                          key={link.id}
                          href={link.url || "#"}
                          className="flex items-center justify-center py-3 px-3 border border-white/10 bg-transparent text-center text-[12px] xl:text-[13px] font-normal tracking-wide text-white/80 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300 min-h-[46px] font-poppins rounded-[3px]"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Featured Image */}
                  <div className="col-span-5 pl-4 flex flex-col justify-center py-2">
                    <div className="relative rounded-[4px] overflow-hidden border border-white/10 w-full aspect-video shadow-2xl">
                      <Image
                        src="/modules/header/campus/campus.png"
                        alt="Campus Life"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover scale-[1.03] hover:scale-[1.05] transition-transform duration-1000"
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
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1 xl:gap-1 2xl:gap-1.5 text-sm xl:text-[15px] min-h-[64px] cursor-pointer">
                <span>{aboutusMenu?.title}</span>
                <ChevronDown className="w-4 h-4 opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#04101A] border-b border-white/10 pt-[52px] pb-10 md:pt-[60px] md:pb-12 overflow-hidden mt-[-12px] krmsubmenu-container z-50">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Single column stack (Image -> Text -> Buttons -> Stats) */}
                  <div className="col-span-4 flex flex-col gap-4">
                    <h2 className="text-[28px] font-normal font-poppins text-white leading-tight">
                      {aboutusMenu?.title}
                    </h2>

                    {/* Image */}
                    <div className="relative w-full rounded-[4px] overflow-hidden border border-white/10 group aspect-video">
                      <Image
                        src="/images/header/menu/about-us/about-menu.jpg"
                        alt="About KRMU"
                        fill
                        sizes="(max-width: 1024px) 100vw, 400px"
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        priority
                      />
                    </div>

                    {/* Content Paragraph */}
                    <p className="text-white/90 text-[14px] font-light font-poppins text-left">
                      Welcome to a world where education meets excitement! At
                      K.R. Mangalam University (KRMU), we believe that
                      university life should be a perfect blend of learning,
                      growth, and fun. Our campus is not just a place to study.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        href="#"
                        className="flex-1 text-[11px] !border-[#737373] md:text-[11px] !h-[42px] font-poppins whitespace-nowrap !rounded-[4px] !px-3"
                      >
                        DOWNLOAD BROCHURE
                      </Button>
                      <Button
                        variant="primary"
                        href={applyNowButton?.url || "/apply"}
                        icon={ArrowUpRight}
                        iconPosition="right"
                        className="flex-1 text-[11px] md:text-[11px] !h-[42px] font-poppins whitespace-nowrap !rounded-[4px] !px-3"
                      >
                        APPLY NOW
                      </Button>
                    </div>

                    {/* Stats Boxes */}
                    <div className="grid grid-cols-2 gap-4 mt-1">
                      {aboutusMenu?.aboutuscounter.map((counter: any) => (
                        <div
                          key={counter.id}
                          className="bg-[#062035] rounded-[4px] px-6 py-4 flex flex-col justify-center items-center text-center transition-all duration-500"
                        >
                          <span className="text-[22px] font-semibold text-white mb-1 font-poppins">
                            {counter.countertext}
                          </span>
                          <span className="text-[12px] text-white/90 font-light font-poppins">
                            {counter.countercontent}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Links (Overview, Administration, Discover More, Others) */}
                  <div className="col-span-8 border-l border-white/10 pl-6 lg:pl-10 flex flex-col">
                    <div className="grid grid-cols-4 gap-4 lg:gap-6 mt-2">
                      {/* Overview */}
                      <div>
                        <h4 className="text-white font-semibold text-[16px] mb-4 font-poppins tracking-wide">
                          {aboutusMenu?.overview?.heading || "Overview"}
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                          {rawOverviewLinks.map((menu: any) => (
                            <li key={menu.id}>
                              <Link
                                href={menu.url || "#"}
                                className="text-white/70 hover:text-white transition-colors text-[15px] font-light font-poppins"
                                target={
                                  menu.url?.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  menu.url?.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {menu.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Administration */}
                      <div>
                        <h4 className="text-white font-semibold text-[16px] mb-4 font-poppins tracking-wide">
                          {aboutusMenu?.administration?.heading ||
                            "Administration"}
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                          {aboutusMenu?.administration?.menulinks?.map(
                            (menu: any) => (
                              <li key={menu.id}>
                                <Link
                                  href={menu.url || "#"}
                                  className="text-white/70 hover:text-white transition-colors text-[15px] font-light font-poppins"
                                  target={
                                    menu.url?.startsWith("http")
                                      ? "_blank"
                                      : undefined
                                  }
                                  rel={
                                    menu.url?.startsWith("http")
                                      ? "noopener noreferrer"
                                      : undefined
                                  }
                                >
                                  {menu.title}
                                </Link>
                              </li>
                            ),
                          )}
                        </ul>
                      </div>

                      {/* Discover More */}
                      {academicMenu?.discovermenu && (
                        <div>
                          <h4 className="text-white font-semibold text-[16px] mb-4 font-poppins tracking-wide">
                            {academicMenu.discovermenu.heading}
                          </h4>
                          <ul className="flex flex-col gap-2.5">
                            {academicMenu.discovermenu.menulinks?.map(
                              (menu: any) => (
                                <li key={menu.id}>
                                  <Link
                                    href={menu.url || "#"}
                                    className="text-white/70 hover:text-white transition-colors text-[15px] font-light font-poppins"
                                    target={
                                      menu.url?.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                    }
                                    rel={
                                      menu.url?.startsWith("http")
                                        ? "noopener noreferrer"
                                        : undefined
                                    }
                                  >
                                    {menu.title}
                                  </Link>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Others */}
                      <div>
                        <h4 className="text-white font-semibold text-[16px] mb-4 font-poppins tracking-wide">
                          Others
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                          {aboutUsOthersLinks.map((menu) => (
                            <li key={menu.id}>
                              <Link
                                href={menu.url}
                                className="text-white/70 hover:text-white transition-colors text-[15px] font-light font-poppins"
                                target={
                                  menu.url.startsWith("http")
                                    ? "_blank"
                                    : undefined
                                }
                                rel={
                                  menu.url.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                              >
                                {menu.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}

          {/* Careers */}
          {careersLinks && careersLinks.__component === "menu.menu-links" && (
            <li>
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
                  {applyNowButton?.title} <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>
            )}
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
