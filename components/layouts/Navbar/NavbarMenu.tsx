import { STRAPI_URL } from "@/app/constant";
import { HeaderMenus } from "@/lib/types/header-menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ChevronDown, ArrowUpRight, Download } from "lucide-react";

type Props = {
  mainMenu: HeaderMenus[];
};

const NavbarMenu = ({ mainMenu }: Props) => {
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

  return (
    <>
      <div className="hidden xl:block">
        <ul className="flex items-center gap-6">
          {/* Academics */}
          {academicMenu && (
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] cursor-pointer">
                <span>{academicMenu?.title}</span>
                <ChevronDown size={14} className="opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#061623]/95 backdrop-blur-3xl border-b border-white/10 py-10 md:py-12 overflow-hidden mt-0 krmsubmenu-container z-50">
                {/* Decorative background circles */}
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left: Discover */}
                  <div className="col-span-12 lg:col-span-6">
                    <h2 className="text-2xl font-normal font-poppins text-white mb-6 flex items-center gap-4">
                      {academicMenu?.discovermenu?.heading}
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {academicMenu?.discovermenu?.menulinks.map((item) => (
                        <Link 
                          key={item.id}
                          href={item.url || "#"}
                          className="group relative h-24 overflow-hidden shadow-lg rounded-sm bg-white/5 border border-white/10 flex items-center justify-center p-4 transition-all duration-300 hover:border-white/20"
                        >
                          <div className="absolute inset-0 bg-[#cb000d]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="text-center">
                            <span className="text-sm font-light text-white/80 group-hover:text-white transition-colors duration-300">
                              {item.title}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Academics Counters */}
                    <div className="grid grid-cols-2 gap-6 mt-8">
                      {academicMenu?.acadcounter?.map((counter) => (
                        <div key={counter.id} className="relative overflow-hidden group flex flex-col items-center justify-center h-[90px] border border-white/10 bg-transparent rounded-lg text-center transition-all duration-500 hover:bg-white/5">
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                           <p className="text-lg font-light font-poppins text-white">{counter.countertext} {counter.countercontent}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Schools */}
                  <div className="col-span-12 lg:col-span-6">
                    <h2 className="text-2xl font-normal font-poppins text-white mb-6 flex items-center gap-4">
                      {academicMenu?.academicmenu?.heading}
                    </h2>

                    <ul className="grid grid-cols-2 gap-x-8 gap-y-3.5 overflow-hidden">
                      {academicMenu?.academicmenu?.menulinks.map((school) => (
                        <li key={school.id}>
                          <Link href={school.url || "#"} className="relative text-white/60 hover:text-white transition-all duration-300 text-[15px] font-light flex items-center group">
                            <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#cb000d] scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100" />
                            <span className={`transition-all duration-300 ${school.title.toLowerCase().includes('zenith') ? 'text-blue-400 font-normal italic' : ''}`}>
                              {school.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
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
                  className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] ${
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
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] cursor-pointer">
                <span>{admissionMenu?.title}</span>
                <ChevronDown size={14} className="opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#061623]/95 backdrop-blur-3xl border-b border-white/10 py-10 md:py-12 overflow-hidden mt-0 krmsubmenu-container z-50">
                {/* Decorative background effects */}
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left Section: Link Columns */}
                  <div className="col-span-8">
                    <h2 className="text-2xl font-normal font-poppins text-white mb-6">
                      {admissionMenu?.title}
                    </h2>
                    <div className="grid grid-cols-3 gap-8">
                      {/* Enrolment */}
                      {admissionMenu?.enrollnow && (
                        <div>
                          <h3 className="text-sm bg-white/5 px-4 py-2.5 font-poppins font-semibold text-white mb-6 flex items-center gap-3 border border-white/10 rounded-sm">
                            {admissionMenu?.enrollnow?.heading}
                          </h3>
                          <ul className="flex flex-col gap-2.5">
                            {admissionMenu?.enrollnow?.menulinks.map((menu) => (
                              <li key={menu.id}>
                                <Link
                                  href={menu.url || "#"}
                                  className="relative text-white/60 hover:text-white transition-all duration-300 text-[15px] font-light flex items-center group"
                                  target="_blank"
                                >
                                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#cb000d] scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100" />
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
                          <h3 className="text-sm bg-white/5 px-4 py-2.5 font-poppins font-semibold text-white mb-6 flex items-center gap-3 border border-white/10 rounded-sm">
                            {admissionMenu?.scholarships?.heading}
                          </h3>
                          <ul className="flex flex-col gap-2.5">
                            {admissionMenu?.scholarships?.menulinks.map((menu) => (
                              <li key={menu.id}>
                                <Link
                                  href={menu.url || "#"}
                                  className="relative text-white/60 hover:text-white transition-all duration-300 text-[15px] font-light flex items-center group"
                                >
                                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#cb000d] scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100" />
                                  <span>{menu.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Visit Us */}
                      {admissionMenu?.visitus && (
                        <div>
                          <h3 className="text-sm bg-white/5 px-4 py-2.5 font-poppins font-semibold text-white mb-6 flex items-center gap-3 border border-white/10 rounded-sm">
                            {admissionMenu?.visitus?.heading}
                          </h3>
                          <ul className="flex flex-col gap-2.5">
                            {admissionMenu?.visitus?.menulinks.map((menu) => (
                              <li key={menu.id}>
                                <Link
                                  href={menu.url || "#"}
                                  className="relative text-white/60 hover:text-white transition-all duration-300 text-[15px] font-light flex items-center group"
                                >
                                  <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#cb000d] scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100" />
                                  <span>{menu.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Section: Image & Actions */}
                  <div className="col-span-4 pl-6 space-y-6 flex flex-col justify-between">
                    {admissionMenu?.backgroundimage?.url && (
                      <div className="relative h-44 rounded-sm overflow-hidden border border-white/10 shadow-lg group">
                        <Image
                          src={`${STRAPI_URL}${admissionMenu?.backgroundimage?.url}`}
                          alt="Admissions Campus"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                          <p className="text-white text-xs font-light tracking-wide">{admissionMenu?.backgroundimagetext}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-4 pt-2">
                      <Link
                        href="#"
                        className="flex-1 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium py-2.5 px-4 rounded-sm text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all uppercase"
                      >
                        <Download size={12} /> Brochure
                      </Link>
                      <Link
                        href={applyNowButton?.url || "/apply"}
                        className="flex-1 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white font-semibold py-2.5 px-4 rounded-sm text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all uppercase shadow-lg"
                      >
                        Apply Now <ArrowUpRight size={12} />
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
                className={`font-poppins font-semibold tracking-wide text-[#ff0010] hover:text-[#ff0010]/85 transition-colors flex items-center gap-1.5 min-h-[64px] ${
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
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] cursor-pointer">
                <span>{placementMenu?.title}</span>
                <ChevronDown size={14} className="opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#061623]/95 backdrop-blur-3xl border-b border-white/10 py-10 md:py-12 overflow-hidden mt-0 krmsubmenu-container z-50">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left Column: Links */}
                  <div className="col-span-3">
                    <h2 className="text-2xl font-normal font-poppins text-white mb-6">
                      {placementMenu?.placement?.heading}
                    </h2>
                    <ul className="flex flex-col gap-3.5">
                      {placementMenu?.placement?.menulinks.map((menu) => (
                        <li key={menu.id}>
                          <Link 
                            href={menu.url || "#"}
                            className="relative text-white/60 hover:text-white transition-all duration-300 text-[15px] font-light flex items-center group"
                          >
                            <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#cb000d] scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100" />
                            {menu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Center Column: Stats */}
                  <div className="col-span-4 px-6">
                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-8 flex flex-col justify-center gap-8 h-full">
                      {placementMenu?.placementcounter.map((counter, idx) => (
                        <React.Fragment key={counter.id}>
                          {idx > 0 && <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />}
                          <div className="text-center group">
                            <p className="text-3xl font-rajdhani font-normal text-white mb-1 transition-transform duration-500 group-hover:scale-110">
                              {counter.countertext}
                            </p>
                            <p className="text-white/60 text-sm tracking-wide font-normal">
                              {counter.countercontent}
                            </p>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image & Actions */}
                  <div className="col-span-5 pl-6 space-y-6 flex flex-col justify-between">
                    {placementMenu?.backgroundimage?.url && (
                      <div className="relative h-44 rounded-sm overflow-hidden border border-white/10 group">
                        <Image
                          src={`${STRAPI_URL}${placementMenu?.backgroundimage?.url}`}
                          alt="Placements Highlight"
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                        />
                      </div>
                    )}

                    <div className="flex gap-4">
                      <Link
                        href="#"
                        className="flex-1 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium py-2.5 px-4 rounded-sm text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all uppercase"
                      >
                        <Download size={12} /> Brochure
                      </Link>
                      <Link
                        href={applyNowButton?.url || "/apply"}
                        className="flex-1 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white font-semibold py-2.5 px-4 rounded-sm text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all uppercase shadow-lg"
                      >
                        Apply Now <ArrowUpRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )}

          {/* Research */}
          {researchMenu && (
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] cursor-pointer">
                <span>{researchMenu?.title}</span>
                <ChevronDown size={14} className="opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#061623]/95 backdrop-blur-3xl border-b border-white/10 py-10 md:py-12 overflow-hidden mt-0 krmsubmenu-container z-50">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left Column: Links */}
                  <div className="col-span-3">
                    <h2 className="text-2xl font-normal font-poppins text-white mb-6">
                      {researchMenu?.research?.heading}
                    </h2>
                    <ul className="flex flex-col gap-3.5">
                      {researchMenu?.research?.menulinks.map((menu) => (
                        <li key={menu.id}>
                          <Link 
                            href={menu.url || "#"}
                            className="relative text-white/60 hover:text-white transition-all duration-300 text-[15px] font-light flex items-center group"
                          >
                            <span className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-[#cb000d] scale-0 group-hover:scale-100 transition-all opacity-0 group-hover:opacity-100" />
                            {menu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Center Column: Stats */}
                  <div className="col-span-4 px-6">
                    <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg p-8 flex flex-col justify-center gap-8 h-full">
                      {researchMenu?.researchcounter?.map((counter, idx) => (
                        <React.Fragment key={counter.id}>
                          {idx > 0 && <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />}
                          <div className="text-center group">
                            <p className="text-3xl font-rajdhani font-normal text-white mb-1 transition-transform duration-500 group-hover:scale-110">
                              {counter.countertext}
                            </p>
                            <p className="text-white/60 text-sm tracking-wide font-normal">
                              {counter.countercontent}
                            </p>
                          </div>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Image & Actions */}
                  <div className="col-span-5 pl-6 space-y-6 flex flex-col justify-between">
                    <div className="relative h-44 rounded-sm overflow-hidden border border-white/10 group">
                      <Image
                        src={researchMenu?.backgroundimage?.url ? `${STRAPI_URL}${researchMenu.backgroundimage.url}` : "/menu-4.webp"}
                        alt="Research Highlight"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Link
                        href="#"
                        className="flex-1 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium py-2.5 px-4 rounded-sm text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all uppercase"
                      >
                        <Download size={12} /> Brochure
                      </Link>
                      <Link
                        href={applyNowButton?.url || "/apply"}
                        className="flex-1 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white font-semibold py-2.5 px-4 rounded-sm text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all uppercase shadow-lg"
                      >
                        Apply Now <ArrowUpRight size={12} />
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
                  className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] ${
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
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] cursor-pointer">
                <span>{lifeatkrmuMenu?.title}</span>
                <ChevronDown size={14} className="opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#061623]/95 backdrop-blur-3xl border-b border-white/10 py-10 md:py-12 overflow-hidden mt-0 krmsubmenu-container z-50">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-12 gap-12 lg:gap-16">
                  {/* Left Column: Grid */}
                  <div className="col-span-8 flex flex-col gap-6">
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-normal font-poppins text-white leading-tight">
                        {lifeatkrmuMenu?.title}
                      </h2>
                      <p className="text-white/60 text-sm font-light">
                        {lifeatkrmuMenu?.lfeatkrmu2?.heading || "Explore Facilities"}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-2">
                      {[...(lifeatkrmuMenu?.lifeatkrmu1?.menulinks || []), ...(lifeatkrmuMenu?.lfeatkrmu2?.menulinks || [])].map((link) => (
                        <Link 
                          key={link.id}
                          href={link.url || "#"}
                          className="flex items-center justify-center py-3 px-4 border border-white/10 text-center text-sm font-light tracking-wide text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300 min-h-[50px] rounded-sm"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Featured Image */}
                  <div className="col-span-4 pl-6 flex flex-col justify-center">
                    {lifeatkrmuMenu?.backgroundimage?.url && (
                      <div className="relative rounded-sm overflow-hidden border border-white/10 group h-56">
                        <Image 
                          src={`${STRAPI_URL}${lifeatkrmuMenu?.backgroundimage?.url}`} 
                          alt="Campus Life" 
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                          priority
                        />
                        {lifeatkrmuMenu?.backgroundimagetext && (
                          <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                            <p className="text-white text-xs font-light">{lifeatkrmuMenu?.backgroundimagetext}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </li>
          )}

          {/* About Us */}
          {aboutusMenu && (
            <li className="krm-sub-menu-has-children">
              <div className="font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] cursor-pointer">
                <span>{aboutusMenu?.title}</span>
                <ChevronDown size={14} className="opacity-70 transition-transform duration-300" />
              </div>
              <div className="absolute left-0 right-0 w-full top-full bg-[#061623]/95 backdrop-blur-3xl border-b border-white/10 py-10 md:py-12 overflow-hidden mt-0 krmsubmenu-container z-50">
                <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#cb000d]/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="mx-auto max-w-screen-2xl px-6 md:px-12 lg:px-16 relative z-10">
                  <h2 className="text-2xl font-normal font-poppins text-white mb-6 tracking-tight">
                    {aboutusMenu?.title}
                  </h2>

                  {/* Top Row: 3 Columns */}
                  <div className="grid grid-cols-12 gap-8 items-stretch mb-8">
                    {/* Col 1: Image */}
                    <div className="col-span-3">
                      {aboutusMenu?.backgroundimage?.url && (
                        <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 group h-full">
                          <Image 
                            src={`${STRAPI_URL}${aboutusMenu?.backgroundimage?.url}`} 
                            alt="About KRMU" 
                            fill
                            sizes="(max-width: 1024px) 100vw, 400px"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                            priority
                          />
                        </div>
                      )}
                    </div>

                    {/* Col 2: Content & Action */}
                    <div className="col-span-5 flex flex-col justify-between pr-6">
                      <p className="text-white/80 text-sm font-light leading-relaxed">
                        Welcome to a world where education meets excitement! At K.R. Mangalam University (KRMU), we believe that university life should be a perfect blend of learning, growth, and fun. Our campus is not just a place to study.
                      </p>
                      
                      <div className="flex gap-4 mt-4">
                        <Link
                          href="#"
                          className="flex-1 bg-transparent hover:bg-white/5 border border-white/20 text-white font-medium py-2.5 px-4 rounded-sm text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all uppercase"
                        >
                          <Download size={12} /> Brochure
                        </Link>
                        <Link
                          href={applyNowButton?.url || "/apply"}
                          className="flex-1 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white font-semibold py-2.5 px-4 rounded-sm text-xs tracking-wider flex items-center justify-center gap-1.5 transition-all uppercase shadow-lg"
                        >
                          Apply Now <ArrowUpRight size={12} />
                        </Link>
                      </div>
                    </div>

                    {/* Col 3: Links */}
                    <div className="col-span-4 border-l border-white/10 pl-8 flex flex-col justify-between">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-white font-semibold text-sm mb-2">{aboutusMenu?.overview?.heading}</h4>
                          <ul className="flex flex-col gap-2">
                            {aboutusMenu?.overview?.menulinks.map((menu) => (
                              <li key={menu.id}>
                                <Link 
                                  href={menu.url || "#"}
                                  className="text-white/60 hover:text-white transition-colors text-sm font-light"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {menu.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold text-sm mb-2">{aboutusMenu?.administration?.heading}</h4>
                          <ul className="flex flex-col gap-2">
                            {aboutusMenu?.administration?.menulinks.map((menu) => (
                              <li key={menu.id}>
                                <Link 
                                  href={menu.url || "#"}
                                  className="text-white/60 hover:text-white transition-colors text-sm font-light"
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

                  {/* Bottom Row: Stats */}
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
                    {aboutusMenu?.aboutuscounter.map((counter) => (
                      <div key={counter.id} className="bg-white/5 border border-white/10 rounded-sm px-8 py-4 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-all duration-500">
                        <span className="text-2xl font-bold text-white mb-0.5">{counter.countertext}</span>
                        <span className="text-xs text-white/50 leading-tight tracking-wide font-light">{counter.countercontent}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          )}

          {/* Careers */}
          {careersLinks && careersLinks.__component === "menu.menu-links" && (
            <li>
              <Link
                className={`font-poppins font-normal tracking-wide text-white/80 hover:text-white transition-colors flex items-center gap-1.5 min-h-[64px] ${
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
                  className={`bg-[#cb000d] hover:bg-[#cb000d]/80 text-white font-semibold py-2 px-5 rounded-sm text-xs tracking-widest flex items-center gap-1.5 transition-all uppercase shadow-lg relative overflow-hidden group ${
                    applyNowButton?.class || ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                  {applyNowButton?.title} <ArrowUpRight size={13} strokeWidth={2.5} />
                </Link>
              </li>
            )}
        </ul>
      </div>

      {/* Apply Now Mobile Button (Triggered under xl) */}
      {applyNowButton && applyNowButton.__component === "menu.menu-button" && (
        <Link
          href={applyNowButton?.url || "#"}
          className={`bg-[#cb000d] py-2 px-4 inline-block text-xs font-semibold text-white rounded-sm xl:hidden shadow-md ${
            applyNowButton?.class || ""
          }`}
        >
          {applyNowButton?.title}
        </Link>
      )}
    </>
  );
};

export default NavbarMenu;
