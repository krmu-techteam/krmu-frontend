import React from "react";
import Link from "next/link";

export const HeroNav = () => {
  const links = [
    { name: "Admissions", href: "/admissions" },
    { name: "Programmes", href: "/programmes" },
    { name: "Placements", href: "/placements" },
    { name: "Research", href: "/research" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <nav className="flex items-center gap-4 md:gap-8 lg:gap-10 text-[12px] md:text-[15px] lg:text-[16px] font-medium tracking-wider capitalize">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="shrink-0 whitespace-nowrap hover:text-secondary font-normal transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default HeroNav;
