"use client";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Topbar from "./Topbar";
import { TOPBARITEMS, TOPBARSOCIALLInks } from "@/lib/types/HeaderType";
import MobileHeader from "./MobileHeader";
import { HeaderMenus } from "@/lib/types/header-menu";
import MainHeaderMarquee from "./MainHeaderMarquee";
import { heroMarqueeData } from "./HeaderMaruqueeData";
import Link from "next/link";

type TOPBARPROPS = {
  topbarmenu: TOPBARITEMS[];
  topbarsociallinks: TOPBARSOCIALLInks[];
  headerMenus: HeaderMenus[];
};

const Header = ({
  topbarmenu,
  topbarsociallinks,
  headerMenus,
}: TOPBARPROPS) => {
  const [showTopbar, setShowTopbar] = useState(false);
  const [showMobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false);
    const handler = () => {
      if (window.scrollY >= 150) setShowTopbar(true);
      if (window.scrollY < 150) setShowTopbar(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const marqueeData = heroMarqueeData;

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20">
        <div className="flex flex-col md:flex-row bg-[#e31e24]">
          <div className="w-full md:w-[80%] 2xl:w-[90%]">
            <MainHeaderMarquee data={marqueeData} />
          </div>
          <div className="w-full md:w-[20%] 2xl:w-[10%] p-3 text-center font-semibold text-red-500 bg-white">
            <Link href="https://www.krmangalam.edu.in/krmu-convocation-2026" target="_blank">Register Now</Link>
          </div>
        </div>
        <div
          className="px-2.5 xl:px-4"
          style={{
            background: showTopbar
              ? "#051730" // when scrolled down
              : "rgba(137, 137, 137, 0.7)", // default
          }}
        >
          {showTopbar ? (
            ""
          ) : (
            <Topbar topbarmenu={topbarmenu} sociallinks={topbarsociallinks} />
          )}
          <Navbar
            handleMobileMenu={handleMobileMenu}
            showMobilebar={showMobileMenu}
            navbarData={headerMenus}
          />
        </div>
        {showMobileMenu && (
          <MobileHeader
            topbarmenu={topbarmenu}
            navbarData={headerMenus}
            onClose={() => setMobileMenu(false)}
          />
        )}
      </header>
    </>
  );
};

export default Header;
