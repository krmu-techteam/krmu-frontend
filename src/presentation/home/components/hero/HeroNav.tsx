import React from "react";
import Link from "next/link";

export const HeroNav = () => {
    const links = [
        {
            name: "Undergraduate",
            href: "/programmes?degree=undergraduate-programmes",
        },
        {
            name: "Postgraduate",
            href: "/programmes?degree=postgraduate-programmes",
        },
        { name: "Doctoral", href: "/programmes?degree=doctoral-programmes" },
        { name: "Diploma", href: "/programmes?degree=diploma-programmes" },
    ];

    return (
        <nav className="flex items-center gap-4 md:gap-5 lg:gap-8 text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] font-medium tracking-wider capitalize">
            {links.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="shrink-0 whitespace-nowrap hover:text-secondary font-medium transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all hover:after:w-full"
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};
