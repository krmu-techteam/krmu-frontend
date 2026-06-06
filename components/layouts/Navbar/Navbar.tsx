"use client";
import { useState } from "react";
import Image from "next/image";
import NavbarMenu from "./NavbarMenu";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { HeaderMenus } from "@/lib/types/header-menu";
import { HeroSearch } from "@/modules/home";

type Props = {
  navbarData: HeaderMenus[];
  handleMobileMenu: () => void; 
  showMobilebar: boolean; 
};

const Navbar = ({ navbarData, handleMobileMenu, showMobilebar }: Props) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="w-full px-4 md:px-12 lg:px-6 xl:px-6 2xl:px-16 flex items-center justify-between py-2 transition-colors">
      <div className="flex items-center group cursor-pointer shrink-0">
        <Link href="/">
          <div className="relative h-14 md:h-16 w-52 md:w-60 lg:w-68 xl:w-76 flex items-center">
            <Image
              src="/krmu.png"
              alt="K.R. Mangalam University"
              width={512}
              height={128}
              className="w-full h-auto object-contain"
              priority
              quality={100}
              unoptimized
            />
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <NavbarMenu mainMenu={navbarData} />
        
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-white hover:text-[#cb000d] transition-colors p-2 shrink-0"
            aria-label="Search"
          >
            <Search size={22} strokeWidth={2.5} />
          </button>
          
          <button
            onClick={handleMobileMenu}
            className="text-white hover:text-[#cb000d] transition-colors p-2 shrink-0"
          >
            {showMobilebar ? (
              <X size={26} strokeWidth={2.5} />
            ) : (
              <Menu size={26} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      <HeroSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default Navbar;
