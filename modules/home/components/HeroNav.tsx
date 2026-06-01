import React from 'react';
import Link from 'next/link';

export const HeroNav = () => {
  const links = [
    { name: "Admissions", href: "/admissions" },
    { name: "Programmes", href: "/programmes" },
    { name: "Placements", href: "/placements" },
    { name: "Research", href: "/research" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <nav className="flex items-center gap-4 md:gap-6 lg:gap-10 text-[12px] md:text-[13px] lg:text-[15px] font-medium tracking-wider uppercase">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="shrink-0 whitespace-nowrap hover:text-secondary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default HeroNav;
