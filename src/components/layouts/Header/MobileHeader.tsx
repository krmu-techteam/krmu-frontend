"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  ChevronDown,
  Download,
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Layers,
  UserPlus,
  Rocket,
  Briefcase,
  Microscope,
  Leaf,
  Users,
  Building2,
  ChevronRight,
} from "lucide-react";
import { HeaderMenus } from "@/lib/types/header-menu";
import { TOPBARITEMS } from "@/lib/types/HeaderType";

type Props = {
  navbarData: HeaderMenus[];
  topbarmenu: TOPBARITEMS[];
  onClose: () => void;
  isOpen: boolean;
};

const MobileHeader = ({ topbarmenu, navbarData, onClose, isOpen }: Props) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 xl:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto delay-0"
            : "opacity-0 pointer-events-none delay-500"
        }`}
        onClick={onClose}
      >
        <div
          className={`fixed top-0 left-0 h-full w-full bg-[#061623] flex flex-col z-50 overflow-hidden transition-transform duration-300 ease-out ${
            isOpen
              ? "translate-x-0 menu-opened delay-0"
              : "-translate-x-full delay-500"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div
            className="flex items-center px-4 py-2 justify-between bg-white/5 border-b border-white/5 stagger-item"
            style={{ "--stagger-idx": 1 } as React.CSSProperties}
          >
            <div className="relative h-10 w-52">
              <Image
                src="/KRMU-Logo-NAAC.webp"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
            <button
              className="text-white hover:text-[#cb000d] transition-colors p-2"
              onClick={onClose}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col h-full overflow-hidden relative">
            {/* Main Menu View */}
            <div
              className={`flex flex-col h-full transition-all duration-500 overflow-y-auto ${activeSubMenu ? "-translate-x-full opacity-0 pointer-events-none h-0 overflow-hidden" : "translate-x-0 opacity-100"}`}
            >
              <nav className="flex flex-col text-[17px] font-normal font-poppins tracking-normal">
                {academicMenu && (
                  <button
                    onClick={() => setActiveSubMenu("academics")}
                    className="flex pl-4 pr-6 py-2 items-center justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 text-left group stagger-item"
                    style={{ "--stagger-idx": 2 } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <BookOpen
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                      />
                      {academicMenu?.title}
                    </div>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                    />
                  </button>
                )}

                {programmesLinks &&
                  programmesLinks.__component === "menu.menu-links" && (
                    <Link
                      href={programmesLinks.url || "#"}
                      onClick={onClose}
                      className="flex items-center pl-4 pr-6 py-2 justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 group stagger-item"
                      style={{ "--stagger-idx": 3 } as React.CSSProperties}
                    >
                      <div className="flex items-center gap-3">
                        <Layers
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                        />
                        {programmesLinks.title}
                      </div>
                      <ChevronDown
                        size={18}
                        strokeWidth={1.5}
                        className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                      />
                    </Link>
                  )}

                {admissionMenu && (
                  <button
                    onClick={() => setActiveSubMenu("admissions")}
                    className="flex pl-4 pr-6 py-2 items-center justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 text-left group stagger-item"
                    style={{ "--stagger-idx": 4 } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <UserPlus
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                      />
                      {admissionMenu?.title}
                    </div>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                    />
                  </button>
                )}

                {zenithLinks &&
                  zenithLinks.__component === "menu.menu-links" && (
                    <Link
                      href={zenithLinks.url || "#"}
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center pl-4 pr-6 py-2 justify-between hover:text-[#ff0010] transition-colors border-b border-white/5 text-[#ff0010] group stagger-item"
                      style={{ "--stagger-idx": 5 } as React.CSSProperties}
                    >
                      <div className="flex items-center gap-3">
                        <Rocket
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/40 group-hover:text-[#ff0010] transition-colors"
                        />
                        {zenithLinks.title}
                      </div>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="opacity-50 group-hover:opacity-100 transition-all"
                      />
                    </Link>
                  )}

                {placementMenu && (
                  <button
                    onClick={() => setActiveSubMenu("placements")}
                    className="flex items-center pl-4 pr-6 py-2 justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 text-left group stagger-item"
                    style={{ "--stagger-idx": 6 } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                      />
                      {placementMenu?.title}
                    </div>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                    />
                  </button>
                )}

                {researchMenu && (
                  <button
                    onClick={() => setActiveSubMenu("research")}
                    className="flex items-center pl-4 pr-6 py-2 justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 text-left group stagger-item"
                    style={{ "--stagger-idx": 7 } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <Microscope
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                      />
                      {researchMenu?.title}
                    </div>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                    />
                  </button>
                )}

                {sustainabilityLinks &&
                  sustainabilityLinks.__component === "menu.menu-links" && (
                    <Link
                      href={sustainabilityLinks.url || "#"}
                      onClick={onClose}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center pl-4 pr-6 py-2 justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 group stagger-item"
                      style={{ "--stagger-idx": 8 } as React.CSSProperties}
                    >
                      <div className="flex items-center gap-3">
                        <Leaf
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                        />
                        {sustainabilityLinks.title}
                      </div>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                      />
                    </Link>
                  )}

                {lifeatkrmuMenu && (
                  <button
                    onClick={() => setActiveSubMenu("campus")}
                    className="flex items-center pl-4 pr-6 py-2 justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 text-left group stagger-item"
                    style={{ "--stagger-idx": 9 } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <Users
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                      />
                      {lifeatkrmuMenu?.title}
                    </div>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                    />
                  </button>
                )}

                {aboutusMenu && (
                  <button
                    onClick={() => setActiveSubMenu("about")}
                    className="flex items-center pl-4 pr-6 py-2 justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 text-left group stagger-item"
                    style={{ "--stagger-idx": 10 } as React.CSSProperties}
                  >
                    <div className="flex items-center gap-3">
                      <Building2
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                      />
                      {aboutusMenu?.title}
                    </div>
                    <ChevronDown
                      size={18}
                      strokeWidth={1.5}
                      className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                    />
                  </button>
                )}

                {careersLinks &&
                  careersLinks.__component === "menu.menu-links" && (
                    <Link
                      href={careersLinks.url || "#"}
                      onClick={onClose}
                      className="flex items-center pl-4 pr-6 py-2 justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 text-white/90 group stagger-item"
                      style={{ "--stagger-idx": 11 } as React.CSSProperties}
                    >
                      <div className="flex items-center gap-3">
                        <Briefcase
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/40 group-hover:text-[#cb000d] transition-colors"
                        />
                        {careersLinks.title}
                      </div>
                      <ChevronDown
                        size={18}
                        strokeWidth={1.5}
                        className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all"
                      />
                    </Link>
                  )}
              </nav>

              {/* Bottom Quick Links */}
              <div className="pt-6 pb-24 space-y-6">
                <div
                  className="flex items-center gap-4 px-4 stagger-item"
                  style={{ "--stagger-idx": 12 } as React.CSSProperties}
                >
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#0060A9]"></div>
                  <p className="text-[15px] tracking-wide text-[#0674c9] font-medium font-poppins">
                    Quick Links
                  </p>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#0060A9]"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 px-6">
                  {topbarmenu.map((menu, idx) => (
                    <Link
                      key={menu?.id}
                      href={menu?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between gap-2 text-white/90 hover:text-white transition-all py-2.5 px-4 rounded-[10px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-[13px] font-poppins stagger-item ${
                        idx === 0 || idx === topbarmenu.length - 1
                          ? "col-span-2"
                          : "col-span-1"
                      }`}
                      style={
                        { "--stagger-idx": 13 + idx } as React.CSSProperties
                      }
                      onClick={onClose}
                    >
                      <span className="truncate">{menu?.title}</span>
                      <ArrowRight
                        size={14}
                        className="text-white/70 shrink-0"
                        strokeWidth={1.5}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Academics Submenu */}
            <SubMenuView
              isActive={
                activeSubMenu === "Academics" || activeSubMenu === "academics"
              }
              title="Academics"
              onBack={() => setActiveSubMenu(null)}
            >
              <div className="flex flex-col gap-6">
                <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                  <div className="px-5 py-3 border-b border-white/10 bg-[#0060A9]/10">
                    <h4 className="text-[#0060A9] font-poppins text-xs uppercase tracking-widest font-semibold">
                      {academicMenu?.academicmenu?.heading}
                    </h4>
                  </div>
                  <div className="flex flex-col text-white/80">
                    {academicMenu?.academicmenu?.menulinks.map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (school: any, index: number) => (
                        <Link
                          key={school.id}
                          href={school.url || "#"}
                          className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                            index !==
                            academicMenu.academicmenu.menulinks.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                          onClick={onClose}
                        >
                          <span className="text-[14px] font-light tracking-wide">
                            {school.title}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                            strokeWidth={2}
                          />
                        </Link>
                      ),
                    )}
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                  <div className="px-5 py-3 border-b border-white/10 bg-[#0060A9]/10">
                    <h4 className="text-[#0060A9] font-poppins text-xs uppercase tracking-widest font-semibold">
                      {academicMenu?.discovermenu?.heading}
                    </h4>
                  </div>
                  <div className="flex flex-col text-white/80">
                    {academicMenu?.discovermenu?.menulinks.map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (link: any, index: number) => (
                        <Link
                          key={link.id}
                          href={link.url || "#"}
                          className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                            index !==
                            academicMenu.discovermenu.menulinks.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                          onClick={onClose}
                        >
                          <span className="text-[14px] font-light tracking-wide">
                            {link.title}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                            strokeWidth={2}
                          />
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </SubMenuView>

            {/* Admissions Submenu */}
            <SubMenuView
              isActive={
                activeSubMenu === "Admissions" || activeSubMenu === "admissions"
              }
              title="Admissions"
              onBack={() => setActiveSubMenu(null)}
              footer={
                <div className="flex flex-col gap-3">
                  <Link
                    href="#"
                    className="w-full text-xs py-2.5 border border-white/20 hover:bg-white/5 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all"
                  >
                    <Download size={14} /> Download Brochure
                  </Link>
                  <Link
                    href="/apply"
                    onClick={onClose}
                    className="w-full text-xs py-2.5 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all shadow-md"
                  >
                    Apply Now <ArrowUpRight size={14} strokeWidth={3} />
                  </Link>
                </div>
              }
            >
              <div className="flex flex-col gap-6">
                {admissionMenu?.enrollnow && (
                  <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                    <div className="px-5 py-3 border-b border-white/10 bg-[#0060A9]/10">
                      <h4 className="text-[#0060A9] font-poppins text-xs uppercase tracking-widest font-semibold">
                        {admissionMenu?.enrollnow?.heading}
                      </h4>
                    </div>
                    <div className="flex flex-col text-white/80">
                      {admissionMenu?.enrollnow?.menulinks.map(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (link: any, index: number) => (
                          <Link
                            key={link.id}
                            href={link.url || "#"}
                            className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                              index !==
                              admissionMenu.enrollnow.menulinks.length - 1
                                ? "border-b border-white/5"
                                : ""
                            }`}
                            onClick={onClose}
                          >
                            <span className="text-[14px] font-light tracking-wide">
                              {link.title}
                            </span>
                            <ChevronRight
                              size={16}
                              className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                              strokeWidth={2}
                            />
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {admissionMenu?.scholarships && (
                  <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                    <div className="px-5 py-3 border-b border-white/10 bg-[#0060A9]/10">
                      <h4 className="text-[#0060A9] font-poppins text-xs uppercase tracking-widest font-semibold">
                        {admissionMenu?.scholarships?.heading}
                      </h4>
                    </div>
                    <div className="flex flex-col text-white/80">
                      {admissionMenu?.scholarships?.menulinks.map(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (link: any, index: number) => (
                          <Link
                            key={link.id}
                            href={link.url || "#"}
                            className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                              index !==
                              admissionMenu.scholarships.menulinks.length - 1
                                ? "border-b border-white/5"
                                : ""
                            }`}
                            onClick={onClose}
                          >
                            <span className="text-[14px] font-light tracking-wide">
                              {link.title}
                            </span>
                            <ChevronRight
                              size={16}
                              className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                              strokeWidth={2}
                            />
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                )}

                {admissionMenu?.visitus && (
                  <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                    <div className="px-5 py-3 border-b border-white/10 bg-[#0060A9]/10">
                      <h4 className="text-[#0060A9] font-poppins text-xs uppercase tracking-widest font-semibold">
                        {admissionMenu?.visitus?.heading}
                      </h4>
                    </div>
                    <div className="flex flex-col text-white/80">
                      {admissionMenu?.visitus?.menulinks.map(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (link: any, index: number) => (
                          <Link
                            key={link.id}
                            href={link.url || "#"}
                            className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                              index !==
                              admissionMenu.visitus.menulinks.length - 1
                                ? "border-b border-white/5"
                                : ""
                            }`}
                            onClick={onClose}
                          >
                            <span className="text-[14px] font-light tracking-wide">
                              {link.title}
                            </span>
                            <ChevronRight
                              size={16}
                              className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                              strokeWidth={2}
                            />
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </SubMenuView>

            {/* Placements Submenu */}
            <SubMenuView
              isActive={activeSubMenu === "placements"}
              title="Placements"
              onBack={() => setActiveSubMenu(null)}
              footer={
                <div className="flex flex-col gap-3">
                  <Link
                    href="#"
                    className="w-full text-xs py-2.5 border border-white/20 hover:bg-white/5 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all"
                  >
                    <Download size={14} /> Download Brochure
                  </Link>
                  <Link
                    href="/apply"
                    onClick={onClose}
                    className="w-full text-xs py-2.5 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all shadow-md"
                  >
                    Apply Now <ArrowUpRight size={14} strokeWidth={3} />
                  </Link>
                </div>
              }
            >
              <div className="flex flex-col gap-6">
                <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                  <div className="flex flex-col text-white/80">
                    {placementMenu?.placement?.menulinks.map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (link: any, index: number) => (
                        <Link
                          key={link.id}
                          href={link.url || "#"}
                          className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                            index !==
                            placementMenu.placement.menulinks.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                          onClick={onClose}
                        >
                          <span className="text-[14px] font-light tracking-wide">
                            {link.title}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                            strokeWidth={2}
                          />
                        </Link>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  {placementMenu?.placementcounter.map((counter) => (
                    <StatItem
                      key={counter.id}
                      value={counter.countertext}
                      label={counter.countercontent}
                    />
                  ))}
                </div>
              </div>
            </SubMenuView>

            {/* Research Submenu */}
            <SubMenuView
              isActive={activeSubMenu === "research"}
              title="Research"
              onBack={() => setActiveSubMenu(null)}
              footer={
                <div className="flex flex-col gap-3">
                  <Link
                    href="#"
                    className="w-full text-xs py-2.5 border border-white/20 hover:bg-white/5 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all"
                  >
                    <Download size={14} /> Download Brochure
                  </Link>
                  <Link
                    href="/apply"
                    onClick={onClose}
                    className="w-full text-xs py-2.5 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all shadow-md"
                  >
                    Apply Now <ArrowUpRight size={14} strokeWidth={3} />
                  </Link>
                </div>
              }
            >
              <div className="flex flex-col gap-6">
                <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                  <div className="flex flex-col text-white/80">
                    {researchMenu?.research?.menulinks.map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (link: any, index: number) => (
                        <Link
                          key={link.id}
                          href={link.url || "#"}
                          className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                            index !== researchMenu.research.menulinks.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                          onClick={onClose}
                        >
                          <span className="text-[14px] font-light tracking-wide">
                            {link.title}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                            strokeWidth={2}
                          />
                        </Link>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  {researchMenu?.researchcounter?.map((counter) => (
                    <StatItem
                      key={counter.id}
                      value={counter.countertext}
                      label={counter.countercontent}
                    />
                  ))}
                </div>
              </div>
            </SubMenuView>

            {/* Campus Submenu */}
            <SubMenuView
              isActive={activeSubMenu === "campus"}
              title="Campus"
              onBack={() => setActiveSubMenu(null)}
            >
              <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm mt-2">
                <div className="flex flex-col text-white/80">
                  {[
                    ...(lifeatkrmuMenu?.lifeatkrmu1?.menulinks || []),
                    ...(lifeatkrmuMenu?.lfeatkrmu2?.menulinks || []),
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ].map((link: any, index: number, arr: any[]) => (
                    <Link
                      key={link.id}
                      href={link.url || "#"}
                      className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                        index !== arr.length - 1
                          ? "border-b border-white/5"
                          : ""
                      }`}
                      onClick={onClose}
                    >
                      <span className="text-[14px] font-light tracking-wide">
                        {link.title}
                      </span>
                      <ChevronRight
                        size={16}
                        className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                        strokeWidth={2}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </SubMenuView>

            {/* About Submenu */}
            <SubMenuView
              isActive={activeSubMenu === "about"}
              title="About KRMU"
              onBack={() => setActiveSubMenu(null)}
            >
              <div className="flex flex-col gap-6">
                <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                  <div className="px-5 py-3 border-b border-white/10 bg-[#0060A9]/10">
                    <h4 className="text-[#0060A9] font-poppins text-xs uppercase tracking-widest font-semibold">
                      {aboutusMenu?.overview?.heading}
                    </h4>
                  </div>
                  <div className="flex flex-col text-white/80">
                    {aboutusMenu?.overview?.menulinks.map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (link: any, index: number) => (
                        <Link
                          key={link.id}
                          href={link.url || "#"}
                          className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                            index !== aboutusMenu.overview.menulinks.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                          onClick={onClose}
                        >
                          <span className="text-[14px] font-light tracking-wide">
                            {link.title}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                            strokeWidth={2}
                          />
                        </Link>
                      ),
                    )}
                  </div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-lg overflow-hidden shadow-sm">
                  <div className="px-5 py-3 border-b border-white/10 bg-[#0060A9]/10">
                    <h4 className="text-[#0060A9] font-poppins text-xs uppercase tracking-widest font-semibold">
                      {aboutusMenu?.administration?.heading}
                    </h4>
                  </div>
                  <div className="flex flex-col text-white/80">
                    {aboutusMenu?.administration?.menulinks.map(
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      (link: any, index: number) => (
                        <Link
                          key={link.id}
                          href={link.url || "#"}
                          className={`flex items-center justify-between hover:bg-white/5 transition-colors font-poppins px-5 py-3.5 group ${
                            index !==
                            aboutusMenu.administration.menulinks.length - 1
                              ? "border-b border-white/5"
                              : ""
                          }`}
                          onClick={onClose}
                        >
                          <span className="text-[14px] font-light tracking-wide">
                            {link.title}
                          </span>
                          <ChevronRight
                            size={16}
                            className="text-white/20 group-hover:text-[#0060A9] transition-colors"
                            strokeWidth={2}
                          />
                        </Link>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {aboutusMenu?.aboutuscounter.map((counter: any) => (
                    <StatItem
                      key={counter.id}
                      value={counter.countertext}
                      label={counter.countercontent}
                    />
                  ))}
                </div>
              </div>
            </SubMenuView>
          </div>
        </div>
      </div>
    </>
  );
};

function SubMenuView({
  isActive,
  title,
  onBack,
  children,
  footer,
}: {
  isActive: boolean;
  title: string;
  onBack: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute inset-0 flex flex-col h-full bg-[#061623] transition-all duration-500 shadow-2xl z-50 ${
        isActive
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="p-4 border-b border-white/5 bg-white/5">
        <button
          onClick={onBack}
          className="flex font-poppins items-center gap-2 text-white/70 font-medium text-sm hover:pl-2 transition-all p-2"
        >
          <ChevronDown size={18} className="rotate-90 text-[#0060A9]" />
          Back to Menu
        </button>
      </div>

      <div className="flex flex-col p-6 overflow-y-auto gap-8 flex-1">
        <div>
          <h3 className="text-lg font-poppins font-medium text-white mb-6 border-l-2 border-[#0060A9] pl-3">
            {title}
          </h3>
          <div className="mb-6">{children}</div>
          {footer && (
            <div className="mt-8 pt-8 border-t  border-white/5">{footer}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center bg-white/5 border border-white/10 p-4 rounded-sm">
      <p className="text-2xl font-bold text-white uppercase leading-none">
        {value}
      </p>
      <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}

export default MobileHeader;
