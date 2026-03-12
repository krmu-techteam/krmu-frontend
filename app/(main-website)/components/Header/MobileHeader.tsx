"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { HeaderMenus } from "@/lib/types/header-menu";
import { TOPBARITEMS } from "@/lib/types/HeaderType";

type Props = {
  navbarData: HeaderMenus[];
  topbarmenu: TOPBARITEMS[];
  onClose: () => void;
};

const MobileHeader = ({ topbarmenu, navbarData, onClose }: Props) => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const academicMenu = navbarData.find(
    (component) => component.__component === "temp-menus.academic-menu",
  );

  const programmesLinks = navbarData.find(
    (component) => component.title === "Programmes",
  );
  const careersLinks = navbarData.find(
    (component) => component.title === "Careers",
  );
  const zenithLinks = navbarData.find(
    (component) => component.title === "Zenith",
  );

  const sustainabilityLinks = navbarData.find(
    (component) => component.title === "Sustainability",
  );

  const admissionMenu = navbarData.find(
    (component) => component.__component === "temp-menus.admissions",
  );
  const placementMenu = navbarData.find(
    (component) => component.__component === "temp-menus.placement-menu",
  );
  const researchMenu = navbarData.find(
    (component) => component.__component === "temp-menus.research-menu",
  );

  const lifeatkrmuMenu = navbarData.find(
    (component) => component.__component === "temp-menus.life-at-krmu",
  );

  const aboutusMenu = navbarData.find(
    (component) => component.__component === "temp-menus.about-us-menu",
  );


  return (
    <>
      <div className="pt-[50px] px-5 overflow-y-auto h-screen z-50 bg-[#051630] xl:hidden">
        <div className="mobile-krmmenu-menu-container">
          <ul className="mobile-krmmenu-items">
            {/* Simple Link */}

            {/* Submenu with slide toggle */}
            <li className="pt-2.5 pb-4 text-white font-semibold">
              <button
                onClick={() => toggleMenu("academics")}
                className="relative w-full text-left flex justify-between items-center"
              >
                {academicMenu?.title}
                <span
                  className={`transition-transform duration-300 ${
                    openMenu === "academics" ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight color="#ffffff" />
                </span>
              </button>

              {/* Slide Dropdown */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openMenu === "academics" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="bg-white p-5 mt-5 rounded-[10px]">
                  <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {academicMenu?.academicmenu?.heading}
                  </h5>
                  <ul className="mb-5 space-y-2">
                    {academicMenu?.academicmenu?.menulinks.map((menu) => {
                      return (
                        <li key={menu?.id}>
                          <Link
                            href={menu?.url || "#"}
                            className={`text-black text-[13px] font-normal`}
                            onClick={onClose}
                          >
                            {menu?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {academicMenu?.discovermenu?.heading}
                  </h5>
                  <ul className="space-y-2">
                    {academicMenu?.discovermenu?.menulinks.map((menu) => {
                      return (
                        <li key={menu?.id}>
                          <Link
                            href={menu?.url || "#"}
                            className="text-black text-[13px] font-normal"
                            onClick={onClose}
                          >
                            {menu?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
            {programmesLinks &&
              programmesLinks.__component === "menu.menu-links" && (
                <li className="pt-2.5 pb-4 text-white font-semibold">
                  <Link href={programmesLinks?.url || "#"} onClick={onClose}>
                    {programmesLinks?.title}
                  </Link>
                </li>
              )}

            <li className="pt-2.5 pb-4 text-white font-semibold">
              <button
                onClick={() => toggleMenu("admission")}
                className="relative w-full text-left flex justify-between items-center"
              >
                {admissionMenu?.title}
                <span
                  className={`transition-transform duration-300 ${
                    openMenu === "admission" ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight color="#ffffff" />
                </span>
              </button>

              {/* Slide Dropdown */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openMenu === "admission" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="bg-white p-5 mt-5  rounded-[10px]">
                  <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {admissionMenu?.enrollnow?.heading}
                  </h5>
                  <ul className="mb-5">
                    {admissionMenu?.enrollnow?.menulinks.map((menu) => {
                      return (
                        <li key={menu?.id}>
                          <Link
                            href={menu?.url || "#"}
                            className="text-black text-[13px] font-normal"
                            onClick={onClose}
                          >
                            {menu?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {admissionMenu?.visitus?.heading}
                  </h5>
                  <ul>
                    {admissionMenu?.visitus?.menulinks.map((menu) => {
                      return (
                        <li key={menu?.id}>
                          <Link
                            href={menu?.url || "#"}
                            className="text-black text-[13px] font-normal"
                            onClick={onClose}
                          >
                            {menu?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
            {zenithLinks && zenithLinks.__component === "menu.menu-links" && (
              <li className="pt-2.5 pb-4  font-semibold text-[#ff0010]">
                <Link href={zenithLinks?.url || "#"} onClick={onClose} target="_blank" rel="noopener noreferrer">
                  {zenithLinks?.title}
                </Link>
              </li>
            )}
            <li className="pt-2.5 pb-4 text-white font-semibold">
              <button
                onClick={() => toggleMenu("placement")}
                className="relative w-full text-left flex justify-between items-center"
              >
                {placementMenu?.title}
                <span
                  className={`transition-transform duration-300 ${
                    openMenu === "placement" ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight color="#ffffff" />
                </span>
              </button>

              {/* Slide Dropdown */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openMenu === "placement" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="bg-white p-5 mt-5  rounded-[10px]">
                  <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {placementMenu?.placement?.heading}
                  </h5>
                  <ul className="mb-5">
                    {placementMenu?.placement?.menulinks.map((menu) => {
                      return (
                        <li key={menu?.id}>
                          <Link
                            href={menu?.url || "#"}
                            className="text-black text-[13px] font-normal"
                            onClick={onClose}
                          >
                            {menu?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
            <li className="pt-2.5 pb-4 text-white font-semibold">
              <button
                onClick={() => toggleMenu("research")}
                className="relative w-full text-left flex justify-between items-center"
              >
                {researchMenu?.title}
                <span
                  className={`transition-transform duration-300 ${
                    openMenu === "research" ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight color="#ffffff" />
                </span>
              </button>

              {/* Slide Dropdown */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openMenu === "research" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="bg-white p-5 mt-5  rounded-[10px]">
                  <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {researchMenu?.research?.heading}
                  </h5>
                  <ul className="mb-5">
                    {researchMenu?.research?.menulinks.map((menu) => {
                      return (
                        <li key={menu?.id}>
                          <Link
                            href={menu?.url || "#"}
                            className="text-black text-[13px] font-normal"
                            onClick={onClose}
                          >
                            {menu?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
            {sustainabilityLinks &&
              sustainabilityLinks.__component === "menu.menu-links" && (
                <li className="pt-2.5 pb-4 text-white font-semibold">
                  <Link
                    href={sustainabilityLinks?.url || "#"}
                    onClick={onClose}
                    target="_blank" rel="noopener noreferrer"
                  >
                    {sustainabilityLinks?.title}
                  </Link>
                </li>
              )}
            <li className="pt-2.5 pb-4 text-white font-semibold">
              <button
                onClick={() => toggleMenu("lifeatkrmu")}
                className="relative w-full text-left flex justify-between items-center"
              >
                {lifeatkrmuMenu?.title}
                <span
                  className={`transition-transform duration-300 ${
                    openMenu === "lifeatkrmu" ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight color="#ffffff" />
                </span>
              </button>

              {/* Slide Dropdown */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openMenu === "lifeatkrmu" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="bg-white p-5 mt-5  rounded-[10px]">
                  <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {lifeatkrmuMenu?.lifeatkrmu1?.heading}
                  </h5>
                  <ul className="mb-5">
                    {lifeatkrmuMenu?.lifeatkrmu1?.menulinks.map((menu) => {
                      return (
                        <li key={menu?.id}>
                          <Link
                            href={menu?.url || "#"}
                            className="text-black text-[13px] font-normal"
                            onClick={onClose}
                            target="_blank" rel="noopener noreferrer"
                          >
                            {menu?.title}
                          </Link>
                        </li>
                      );
                    })}
                    {lifeatkrmuMenu?.lfeatkrmu2?.menulinks.map((menu) => {
                      return (
                        <li key={menu?.id}>
                          <Link
                            href={menu?.url || "#"}
                            className="text-black text-[13px] font-normal"
                            onClick={onClose}
                          >
                            {menu?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>

            <li className="pt-2.5 pb-4 text-white font-semibold">
              <button
                onClick={() => toggleMenu("aboutus")}
                className="relative w-full text-left flex justify-between items-center"
              >
                {aboutusMenu?.title}
                <span
                  className={`transition-transform duration-300 ${
                    openMenu === "aboutus" ? "rotate-90" : ""
                  }`}
                >
                  <ChevronRight color="#ffffff" />
                </span>
              </button>

              {/* Slide Dropdown */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                  openMenu === "aboutus" ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="bg-white p-5 mt-5  rounded-[10px]">
                  
                    <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {aboutusMenu?.overview?.heading}
                  </h5>
                    <ul className="mb-5">
                      {aboutusMenu?.overview?.menulinks.map((menu) => {
                        return (
                          <li key={menu?.id}>
                            <Link
                              href={menu?.url || "#"}
                              className="text-black text-[13px] font-normal"
                              onClick={onClose}
                              target="_blank" rel="noopener noreferrer"
                            >
                              {menu?.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                   <h5 className="mt-2.5 mb-[15px] leading-[1.2] text-[#051630] text-lg">
                    {aboutusMenu?.administration?.heading}
                  </h5>
                     <ul className="mb-5">
                      {aboutusMenu?.administration?.menulinks.map((menu) => {
                        return (
                          <li key={menu?.id}>
                            <Link
                              href={menu?.url || "#"}
                              className="text-black text-[13px] font-normal"
                              onClick={onClose}
                              target="_blank" rel="noopener noreferrer"
                            >
                              {menu?.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                </div>
              </div>
            </li>
            {careersLinks && careersLinks.__component === "menu.menu-links" && (
              <li className="pt-2.5 pb-4 text-white font-semibold">
                <Link href={careersLinks?.url || "#"} onClick={onClose}>
                  {careersLinks?.title}
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 flex gap-4 flex-wrap">
          {topbarmenu.map((menu) => {
            return (
              <Link
                key={menu?.id}
                href={menu?.url || "#"}
                target="_blank" rel="noopener noreferrer"
                className="text-white py-1.5 px-3 rounded-[5px] border border-white"
                onClick={onClose}
              >
                {menu?.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
