"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, Download, ArrowUpRight } from "lucide-react";
import { HeaderMenus } from "@/lib/types/header-menu";
import { TOPBARITEMS } from "@/lib/types/HeaderType";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  navbarData: HeaderMenus[];
  topbarmenu: TOPBARITEMS[];
  onClose: () => void;
  isOpen: boolean;
};

const MobileHeader = ({ topbarmenu, navbarData, onClose, isOpen }: Props) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

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
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 xl:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      >
        <div 
          className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#061623] shadow-[-10px_0_30px_rgba(0,0,0,0.3)] flex flex-col z-50 border-l border-white/10 overflow-hidden transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 bg-white/5 border-b border-white/5">
            <div className="relative h-10 w-36">
              <Image src="/KRMU-Logo-NAAC.webp" alt="Logo" fill className="object-contain" />
            </div>
            <button 
              className="text-white/70 hover:text-[#cb000d] transition-colors p-2"
              onClick={onClose}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col h-full overflow-hidden relative">
            {/* Main Menu View */}
            <div className={`flex flex-col h-full p-8 transition-all duration-500 overflow-y-auto ${activeSubMenu ? '-translate-x-full opacity-0 pointer-events-none h-0 overflow-hidden' : 'translate-x-0 opacity-100'}`}>
              <nav className="flex flex-col gap-6 text-lg font-semibold tracking-tight mb-12">
                {academicMenu && (
                  <button 
                    onClick={() => setActiveSubMenu("academics")} 
                    className="flex items-center justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90 text-left group"
                  >
                    {academicMenu?.title}
                    <ChevronDown size={18} className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all" />
                  </button>
                )}

                {programmesLinks && programmesLinks.__component === "menu.menu-links" && (
                  <Link 
                    href={programmesLinks.url || "#"} 
                    onClick={onClose} 
                    className="hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90"
                  >
                    {programmesLinks.title}
                  </Link>
                )}

                {admissionMenu && (
                  <button 
                    onClick={() => setActiveSubMenu("admissions")} 
                    className="flex items-center justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90 text-left group"
                  >
                    {admissionMenu?.title}
                    <ChevronDown size={18} className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all" />
                  </button>
                )}

                {zenithLinks && zenithLinks.__component === "menu.menu-links" && (
                  <Link 
                    href={zenithLinks.url || "#"} 
                    onClick={onClose} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff0010] transition-colors border-b border-white/5 pb-3 text-[#ff0010]"
                  >
                    {zenithLinks.title}
                  </Link>
                )}

                {placementMenu && (
                  <button 
                    onClick={() => setActiveSubMenu("placements")} 
                    className="flex items-center justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90 text-left group"
                  >
                    {placementMenu?.title}
                    <ChevronDown size={18} className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all" />
                  </button>
                )}

                {researchMenu && (
                  <button 
                    onClick={() => setActiveSubMenu("research")} 
                    className="flex items-center justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90 text-left group"
                  >
                    {researchMenu?.title}
                    <ChevronDown size={18} className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all" />
                  </button>
                )}

                {sustainabilityLinks && sustainabilityLinks.__component === "menu.menu-links" && (
                  <Link 
                    href={sustainabilityLinks.url || "#"} 
                    onClick={onClose} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90"
                  >
                    {sustainabilityLinks.title}
                  </Link>
                )}

                {lifeatkrmuMenu && (
                  <button 
                    onClick={() => setActiveSubMenu("campus")} 
                    className="flex items-center justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90 text-left group"
                  >
                    {lifeatkrmuMenu?.title}
                    <ChevronDown size={18} className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all" />
                  </button>
                )}

                {aboutusMenu && (
                  <button 
                    onClick={() => setActiveSubMenu("about")} 
                    className="flex items-center justify-between hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90 text-left group"
                  >
                    {aboutusMenu?.title}
                    <ChevronDown size={18} className="-rotate-90 opacity-50 group-hover:opacity-100 group-hover:text-[#cb000d] transition-all" />
                  </button>
                )}

                {careersLinks && careersLinks.__component === "menu.menu-links" && (
                  <Link 
                    href={careersLinks.url || "#"} 
                    onClick={onClose} 
                    className="hover:text-[#cb000d] transition-colors border-b border-white/5 pb-3 text-white/90"
                  >
                    {careersLinks.title}
                  </Link>
                )}
              </nav>

              {/* Bottom Quick Links */}
              <div className="mt-auto pt-8 border-t border-white/10 space-y-4">
                <p className="text-xs uppercase tracking-wider text-white/40 font-semibold">Quick links</p>
                <div className="flex flex-wrap gap-2.5">
                  {topbarmenu.map((menu) => (
                    <Link
                      key={menu?.id}
                      href={menu?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white transition-colors py-1.5 px-3 rounded-[3px] border border-white/20 text-xs"
                      onClick={onClose}
                    >
                      {menu?.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Academics Submenu */}
            <SubMenuView 
              isActive={activeSubMenu === 'Academics' || activeSubMenu === 'academics'} 
              title="Academics" 
              onBack={() => setActiveSubMenu(null)}
            >
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3 font-semibold">{academicMenu?.academicmenu?.heading}</h4>
                  <div className="flex flex-col gap-3 text-white/80 text-sm">
                    {academicMenu?.academicmenu?.menulinks.map((school) => (
                      <Link key={school.id} href={school.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                        {school.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3 font-semibold">{academicMenu?.discovermenu?.heading}</h4>
                  <div className="flex flex-col gap-3 text-white/80 text-sm">
                    {academicMenu?.discovermenu?.menulinks.map((link) => (
                      <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SubMenuView>

            {/* Admissions Submenu */}
            <SubMenuView 
              isActive={activeSubMenu === 'Admissions' || activeSubMenu === 'admissions'} 
              title="Admissions" 
              onBack={() => setActiveSubMenu(null)}
              footer={
                <div className="flex flex-col gap-3">
                  <Link href="#" className="w-full text-xs py-2.5 border border-white/20 hover:bg-white/5 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all">
                    <Download size={14} /> Download Brochure
                  </Link>
                  <Link href="/apply" onClick={onClose} className="w-full text-xs py-2.5 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all shadow-md">
                    Apply Now <ArrowUpRight size={14} strokeWidth={3} />
                  </Link>
                </div>
              }
            >
              <div className="flex flex-col gap-6">
                {admissionMenu?.enrollnow && (
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3 font-semibold">{admissionMenu?.enrollnow?.heading}</h4>
                    <div className="flex flex-col gap-3 text-white/80 text-sm">
                      {admissionMenu?.enrollnow?.menulinks.map((link) => (
                        <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {admissionMenu?.scholarships && (
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3 font-semibold">{admissionMenu?.scholarships?.heading}</h4>
                    <div className="flex flex-col gap-3 text-white/80 text-sm">
                      {admissionMenu?.scholarships?.menulinks.map((link) => (
                        <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {admissionMenu?.visitus && (
                  <div>
                    <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3 font-semibold">{admissionMenu?.visitus?.heading}</h4>
                    <div className="flex flex-col gap-3 text-white/80 text-sm">
                      {admissionMenu?.visitus?.menulinks.map((link) => (
                        <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </SubMenuView>

            {/* Placements Submenu */}
            <SubMenuView 
              isActive={activeSubMenu === 'placements'} 
              title="Placements" 
              onBack={() => setActiveSubMenu(null)}
              footer={
                <div className="flex flex-col gap-3">
                  <Link href="#" className="w-full text-xs py-2.5 border border-white/20 hover:bg-white/5 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all">
                    <Download size={14} /> Download Brochure
                  </Link>
                  <Link href="/apply" onClick={onClose} className="w-full text-xs py-2.5 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all shadow-md">
                    Apply Now <ArrowUpRight size={14} strokeWidth={3} />
                  </Link>
                </div>
              }
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-white/80 text-sm">
                  {placementMenu?.placement?.menulinks.map((link) => (
                    <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                      {link.title}
                    </Link>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {placementMenu?.placementcounter.map((counter) => (
                    <StatItem key={counter.id} value={counter.countertext} label={counter.countercontent} />
                  ))}
                </div>
              </div>
            </SubMenuView>

            {/* Research Submenu */}
            <SubMenuView 
              isActive={activeSubMenu === 'research'} 
              title="Research" 
              onBack={() => setActiveSubMenu(null)}
              footer={
                <div className="flex flex-col gap-3">
                  <Link href="#" className="w-full text-xs py-2.5 border border-white/20 hover:bg-white/5 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all">
                    <Download size={14} /> Download Brochure
                  </Link>
                  <Link href="/apply" onClick={onClose} className="w-full text-xs py-2.5 bg-[#cb000d] hover:bg-[#cb000d]/80 text-white rounded-sm font-semibold flex items-center justify-center gap-1.5 uppercase transition-all shadow-md">
                    Apply Now <ArrowUpRight size={14} strokeWidth={3} />
                  </Link>
                </div>
              }
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-white/80 text-sm">
                  {researchMenu?.research?.menulinks.map((link) => (
                    <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                      {link.title}
                    </Link>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {researchMenu?.researchcounter?.map((counter) => (
                    <StatItem key={counter.id} value={counter.countertext} label={counter.countercontent} />
                  ))}
                </div>
              </div>
            </SubMenuView>

            {/* Campus Submenu */}
            <SubMenuView 
              isActive={activeSubMenu === 'campus'} 
              title="Campus" 
              onBack={() => setActiveSubMenu(null)}
            >
              <div className="flex flex-col gap-3 text-white/80 text-sm">
                {[...(lifeatkrmuMenu?.lifeatkrmu1?.menulinks || []), ...(lifeatkrmuMenu?.lfeatkrmu2?.menulinks || [])].map((link) => (
                  <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </SubMenuView>

            {/* About Submenu */}
            <SubMenuView 
              isActive={activeSubMenu === 'about'} 
              title="About KRMU" 
              onBack={() => setActiveSubMenu(null)}
            >
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2 font-semibold">{aboutusMenu?.overview?.heading}</h4>
                  <div className="flex flex-col gap-3 text-white/80 text-sm">
                    {aboutusMenu?.overview?.menulinks.map((link) => (
                      <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white/40 text-xs uppercase tracking-wider mb-2 font-semibold">{aboutusMenu?.administration?.heading}</h4>
                  <div className="flex flex-col gap-3 text-white/80 text-sm">
                    {aboutusMenu?.administration?.menulinks.map((link) => (
                      <Link key={link.id} href={link.url || "#"} className="hover:text-white transition-colors py-1 border-b border-white/5" onClick={onClose}>
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  {aboutusMenu?.aboutuscounter.map((counter) => (
                    <StatItem key={counter.id} value={counter.countertext} label={counter.countercontent} />
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
          className="flex items-center gap-2 text-white/70 font-semibold text-sm hover:pl-2 transition-all p-2"
        >
          <ChevronDown size={18} className="rotate-90 text-[#cb000d]" />
          Back to Menu
        </button>
      </div>

      <div className="flex flex-col p-6 overflow-y-auto gap-8 flex-1">
        <div>
          <h3 className="text-lg font-poppins font-bold text-white mb-6 border-l-2 border-[#cb000d] pl-3">
            {title}
          </h3>
          <div className="mb-6">{children}</div>
          {footer && (
            <div className="mt-8 pt-8 border-t border-white/5">{footer}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center bg-white/5 border border-white/10 p-4 rounded-sm">
      <p className="text-2xl font-bold text-white uppercase leading-none">{value}</p>
      <p className="text-white/40 text-[10px] uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

export default MobileHeader;
