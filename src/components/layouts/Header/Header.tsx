"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Topbar from "./Topbar";
import { TOPBARITEMS, TOPBARSOCIALLInks } from "@/lib/types/HeaderType";
import MobileHeader from "./MobileHeader";
import { HeaderMenus } from "@/lib/types/header-menu";
import MainHeaderMarquee from "./MainHeaderMarquee";
import { heroMarqueeData } from "./HeaderMaruqueeData";
import Link from "next/link";
import BicolorDivider from "../Navbar/BicolorDivider";

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
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMobileMenu, setMobileMenu] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handler, { passive: true });
        handler();
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
            <header className="fixed top-0 left-0 w-full z-50">
                <BicolorDivider />
                {/* <div className="flex flex-col md:flex-row bg-[#e31e24]">
          <div className="w-full md:w-[80%] 2xl:w-[90%]">
            <MainHeaderMarquee data={marqueeData} />
          </div>
          <Link
            href="https://www.krmangalam.edu.in/krmu-convocation-2026"
            target="_blank"
            className="w-full md:w-[20%] 2xl:w-[10%] p-3 text-center font-semibold text-red-500 bg-white"
          >
            Register Now
          </Link>
        </div> */}
                <div className="transition-all duration-300 backdrop-blur-md shadow-sm bg-[#061623]">
                    <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            isScrolled
                                ? "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
                                : "max-h-16 opacity-100 translate-y-0"
                        }`}
                    >
                        <Topbar
                            topbarmenu={topbarmenu}
                            sociallinks={topbarsociallinks}
                        />
                    </div>
                    <Navbar
                        handleMobileMenu={handleMobileMenu}
                        showMobilebar={showMobileMenu}
                        navbarData={headerMenus}
                    />
                </div>
                <MobileHeader
                    topbarmenu={topbarmenu}
                    navbarData={headerMenus}
                    onClose={() => setMobileMenu(false)}
                    isOpen={showMobileMenu}
                />
            </header>
        </>
    );
};

export default Header;
