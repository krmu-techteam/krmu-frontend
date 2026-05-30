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
    <nav className="flex flex-wrap items-center gap-6 md:gap-10 text-[13px] md:text-[15px] font-medium tracking-wider uppercase">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="hover:text-secondary transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default HeroNav;
